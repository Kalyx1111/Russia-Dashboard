"""GDELT DOC 2.0 API - free, no key. English-source filter enforced upstream
(sourcelang:eng). Requests are PACED (GDELT asks clients not to flood it) and
a 429 is retried once after a pause; every failure reports its real HTTP
status or response type so the status panel tells you what happened."""
from __future__ import annotations
import json
import time
from .base import Item, ConnectorResult
from ..classify import classify

NAME = "gdelt"
ENDPOINT = "https://api.gdeltproject.org/api/v2/doc/doc"
PACE_SECONDS = 6.0          # spacing between queries
BACKOFF_SECONDS = 20.0      # pause before the single retry on HTTP 429

QUERIES = [
    "Russia Ukraine war sourcelang:eng",
    "Russia NATO Baltic sourcelang:eng",
    "Zaporizhzhia nuclear plant sourcelang:eng",
    "Sarmat ICBM sourcelang:eng",
    "Avangard hypersonic sourcelang:eng",
    "Yars missile sourcelang:eng",
    "Plesetsk launch sourcelang:eng",
    "Vostochny launch sourcelang:eng",
    "Baikonur Soyuz sourcelang:eng",
    "Northern Fleet submarine sourcelang:eng",
    "Black Sea Fleet Sevastopol sourcelang:eng",
    "Baltic Fleet Kaliningrad sourcelang:eng",
    "Pacific Fleet Vladivostok sourcelang:eng",
    "Engels bomber base sourcelang:eng",
    "Tu-160 bombers sourcelang:eng",
    "Russia Belarus Oreshnik sourcelang:eng",
    "Armenia Russian base Gyumri sourcelang:eng",
    "Tajikistan Russian base sourcelang:eng",
    "Kyrgyzstan Kant base sourcelang:eng",
    "Transnistria Russian troops sourcelang:eng",
    "Abkhazia Russian base sourcelang:eng",
    "Kerch Strait sourcelang:eng",
    "Northern Sea Route sourcelang:eng",
    "Nord Stream pipeline sourcelang:eng",
    "Power of Siberia sourcelang:eng",
    "Russian LNG Arctic sourcelang:eng",
    "GRU hackers cyber sourcelang:eng",
    "Russian shadow fleet sourcelang:eng",
    "undersea cable Baltic sabotage sourcelang:eng",
    "Crimea strikes sourcelang:eng",
]


def configured() -> bool:
    return True


def _get(safe_http, q):
    params = {"query": q, "mode": "ArtList", "format": "json", "timespan": "3d",
              "maxrecords": "40", "sort": "DateDesc"}
    r = safe_http.safe_get(ENDPOINT, params=params)
    if r.status_code == 429:
        time.sleep(BACKOFF_SECONDS)
        r = safe_http.safe_get(ENDPOINT, params=params)
    return r


def fetch() -> ConnectorResult:
    from .. import safe_http
    items, errors = [], []
    for i, q in enumerate(QUERIES):
        if i:
            time.sleep(PACE_SECONDS)
        try:
            r = _get(safe_http, q)
            if r.status_code != 200:
                errors.append(f"'{q.split(' sourcelang')[0]}': HTTP {r.status_code}")
                continue
            try:
                data = json.loads(r.content)
            except ValueError:
                errors.append(f"'{q.split(' sourcelang')[0]}': non-JSON response (service busy or changed)")
                continue
            for a in data.get("articles", []):
                title = (a.get("title") or "").strip()
                if not title:
                    continue
                items.append(Item(
                    category=classify(title), label=title[:90], text=title,
                    source=a.get("domain", "GDELT"), date=a.get("seendate", ""),
                    url=a.get("url"), connector=NAME,
                ).to_dict())
        except safe_http.FetchError as e:
            errors.append(f"'{q.split(' sourcelang')[0]}': blocked ({e})")
        except Exception as e:
            errors.append(f"'{q.split(' sourcelang')[0]}': {type(e).__name__}")
    if not items and errors:
        return ConnectorResult(NAME, True, False, "; ".join(errors)[:300])
    msg = f"{len(items)} items across {len(QUERIES)} topic queries"
    if errors:
        msg += f" ({len(errors)} failed: {'; '.join(errors)[:200]})"
    return ConnectorResult(NAME, True, True, msg, items)
