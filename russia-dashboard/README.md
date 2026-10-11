# RUSSIA DASHBOARD - v1

Covers the Russian Federation and the other 14 states of the former USSR (Estonia, Latvia, Lithuania, Belarus, Ukraine, Moldova,
Georgia, Armenia, Azerbaijan, Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan and Tajikistan), with the Arctic and Pacific
approaches, Russian bases abroad and the occupied Ukrainian territories. It uses the China Dashboard v6 architecture: Flask with
waitress, a supervisor with automatic restart, AES-256-GCM key storage, the same 15 headings (the maritime heading is retitled
"Maritime Chokepoints & Arctic Routes"), layer toggles and live connectors.

**India is outside this frame and nothing about India is plotted.** Its towns, airports, ports, rivers and outlines are not in the
data.

## Start

Windows: double-click `start.bat`. The dashboard runs at **http://127.0.0.1:8825/** (set in `run.py` and `start.bat`). The first
pass of the news connectors takes a few minutes, because GDELT is paced at six seconds per query. The page is large (several MB)
because it carries 818 points, each with its source.

## The 15 headings

Geopolitical & Diplomatic - Military Operations & Force Posture - Strategic Arms & Nuclear Program - Naval & Maritime Security -
Maritime Chokepoints & Arctic Routes - Air Force & Aviation - Space Tech & Aerospace - Critical Tech & AI Governance - Cyber
Espionage & APTs - Darkweb & Threat Intel - Economic & Trade - Internal Security & Intelligence Operations - Social Pulse & Public
Sentiment - Happiness & Wellbeing Indices - Natural Hazards & Environmental Risks.

Routing is rule-based (`app/classify.py`). Shadow-fleet and Arctic-route stories go to the chokepoint heading; Ukrainian drone
strikes on airbases go to the air heading; a headline about a nuclear plant goes to the arms and nuclear heading.

## The map

- **Projection:** Lambert conformal conic (standard parallels 45 and 75 degrees north; central meridian 100 degrees east).
  The frame runs from 18 degrees east to 191.5 degrees east, so Chukotka is drawn across the date line and joins the main
  territory, and from 34.5 to 82.5 degrees north.
- **Outlines:** every outline is projected with the same formula as the points, so the shapes and the points always agree.
- **Shaded:** Russia and the 14 other former Soviet states. **Outlined:** the neighbouring countries.
- **Oblast, republic and province lines:** 451 boundary lines for the 15 states.
- **Rivers:** 341 segments from Natural Earth.
- **Towns and capitals:** 179 places (200,000 or more people, and capitals) in the 15 states.
- **Civil airports:** 306 large and medium airports from OurAirports (public domain, CC0).
- **Military-named airfields:** 351, chosen by name. A name is a clue, not a confirmation of use, and the perimeter is not
  published.
- **Seaports:** 37 Natural Earth port points.
- **Sea labels:** the Baltic, Black, Caspian and Aral seas, the Barents, Kara, Laptev, East Siberian, Chukchi and Bering seas, the Sea
  of Okhotsk and the Sea of Japan, the White Sea, the Gulf of Finland, the Sea of Azov and Lake Baikal.

## What is plotted: 124 points, each with its status, date and source

Each tooltip gives the source. "Not verified in this build" marks public knowledge that this build's searches did not confirm
(26 of the points carry that flag). Positions are approximate unless the note says otherwise. The categories are:

- **Strategic missiles (9 sites):** the ICBM divisions at Kozelsk (Yars deployment completed at the end of 2025),
  Tatishchevo, Teykovo, Barnaul, Vypolzovo (not verified in this build), Uzhur (the first Sarmat regiment is planned there by the end of
  2026), and Dombarovsky (Avangard; sources conflict on the site of the 12 May 2026 Sarmat launch). The Sary Shagan and Kapustin Yar test
  ranges are listed; Kapustin Yar is not verified.
- **Navy and submarines (12 sites):** the Northern Fleet at Severomorsk; the strategic submarine
  bases at Gadzhiyevo, Nerpichya, Vidyayevo and Vilyuchinsk (Pacific); the Pacific Fleet at Vladivostok; the Baltic Fleet at Baltiysk and
  Kronstadt; the Black Sea Fleet at Novorossiysk and Sevastopol (occupied Crimea); the Caspian Flotilla at Kaspiysk.
- **Strategic air bases (9 sites with the military airfields):** Engels-2 (Tu-160 and Tu-95MS; reported Ukrainian drone strikes
  in July and August 2026 and bomber shelters under construction), Olenya, Ukrainka, Belaya, Shaykovka, Mozdok, Dyagilevo and Baranovichi.
- **Russian bases abroad (15 sites):** the 102nd base at Gyumri and the 3624th air base at Erebuni (Armenia); the Kant air
  base and the Issyk-Kul test station (Kyrgyzstan); the 201st base, Ayni and the Okno station (Tajikistan); the 7th base at Gudauta (Abkhazia)
  and the 4th in South Ossetia; the Cobasna depot (Transnistria); the Baranavichy radar and the Vileyka communications centre (Belarus); Belbek
  in occupied Crimea; and Hmeimim and Tartus in Syria (joint training centres under the August 2026 memorandum).
- **Nuclear (22 sites):** the power plants listed by the WRI database (15 plants: Russia, Ukraine, Armenia), with notes
  checked against the World Nuclear Association for Leningrad, Kursk, Kola, Novovoronezh (a drone struck a cooling tower on 7 October 2025),
  Zaporizhzhia (occupied; six reactors shut and cooled; repeated loss of off-site power), Bilibino and Beloyarsk. The public nuclear material
  sites are Mayak, the Siberian Chemical Combine at Seversk and the Mining and Chemical Combine at Zheleznogorsk. The weapons laboratories at Sarov and
  Snezhinsk and the Novaya Zemlya test sites are listed as public information (not verified). Russia's warhead storage sites are not published
  and are NOT plotted.
- **Space (3 sites):** Plesetsk (1,687 launches since 1966; Glonass on 17 September 2026), Vostochny and Baikonur (leased from
  Kazakhstan, which charges rent).
- **Cyber (3 sites):** GRU Unit 74455 (Sandworm; headquarters at Khimki), GRU Unit 26165 (APT28; location approximate) and the
  GRU headquarters in Moscow (approximate).
- **Chokepoints and Arctic routes (11):** the Kerch Strait (Ukrainian strikes on its logistics, June 2026), the Kara Strait, the
  Yugorsky, Vilkitsky and Shokalsky straits on the Northern Sea Route (the Vilkitsky Strait held tankers back in summer 2026), and the Bering
  Strait. The Bosporus, Dardanelles, Gulf of Finland, La Pérouse and Kuril straits are public information, not verified.
- **Pipelines and LNG (10):** Nord Stream 1 and 2 (mothballed; EU ban from 18 July 2025), Power of Siberia 1, TurkStream,
  Druzhba (reported stoppage and restart in 2026, not verified), Yamal LNG, Arctic LNG 2 (sanctioned), Sakhalin-2 and the Caspian Pipeline
  Consortium (not verified). The Baku-Tbilisi-Ceyhan line is shown for the Caucasus (not verified).
- **Defence industry (5 sites):** Sevmash (Severodvinsk), Admiralty Shipyards (St Petersburg, builder of the Kilo-class
  boats), the Tupolev Kazan plant (Tu-160M production); Uralvagonzavod and Kalashnikov are not verified.
- **Command (2 sites):** the Southern Military District at Rostov-on-Don; the Ministry of Defence in Moscow is not verified.
- **Flashpoints (7):** the Zaporizhzhia plant, Pokrovsk (front line), the Kerch area (strikes, June 2026), the Kyiv Southern
  Bridge (drone strikes, 1-2 October 2026), Transnistria, Abkhazia and the Kuril Islands (Japan claims them; not verified). All are reported
  situations that change; check the latest reports.

## Gaps (not verified in this build or not plotted)

- **Russian military structure:** the military district headquarters (other than the Southern), most divisions, the air-defence radars
  (Olenegorsk, Pechora, Armavir and others), the Iskander sites in Kaliningrad and the Oreshnik deployment in Belarus (not verified).
- **Bases:** most Russian air bases beyond the bomber bases listed, the other Baltic and Pacific shore facilities, and most naval shipyards.
- **Nuclear:** the operating status of the WRI plants is from the 2018 data, checked only for the plants named in the notes; the weapons
  laboratories and test sites are not verified. Nuclear weapons storage is not plotted, by design.
- **Space and tests:** Kapustin Yar and Wallops-type ranges are not verified; the Vostochny and Baikonur coordinates are approximate.
- **Pipelines:** the Druzhba stoppage is press reporting; Power of Siberia 2 is described in the reference items but not plotted.
- **Occupied and disputed areas:** the map follows the boundary data, which shows Crimea and the occupied oblasts as the dataset draws them.
  Sovereignty is disputed and the map does not settle it.
- **News:** only seven verified global feeds are included. The regional press is reached through Google News search feeds, which
  are aggregators, so the outlets are not named by the feed. The USGS earthquake feed covers longitudes up to 180 degrees; the part of
  Chukotka beyond 180 degrees is not included in it.

## News, social and dark-web sources

- **Verified feeds (7):** USNI News and the USNI Blog, Breaking Defense, SpaceNews, Space.com, The Record and Al Jazeera.
- **Google News search feeds (12):** the Russia-Ukraine front, the Zaporizhzhia plant, the Northern Fleet, Russian strategic aviation, the
  South Caucasus, Central Asia, Belarus, Moldova and Transnistria, the Arctic route, Russian energy, GRU cyber activity and the shadow fleet.
- **GDELT:** 30 English-language queries covering the war, the strategic forces, the fleets, the bases abroad, the chokepoints, the energy
  links and the cyber units.
- **USGS earthquakes:** events inside the frame.
- **Ransomware.live:** claims filtered to the 15 states' country codes. Group claims are labelled unverified.
- **X (Twitter):** official API v2 recent search with 10 queries. Set `X_BEARER_TOKEN`. Recent search needs a paid tier.
- **Facebook and Instagram:** official Graph and Business Discovery APIs. Set your tokens and list your own pages or accounts.
- **Telegram:** `data/telegram_channels.json` carries the public list from the earlier build. It has not been verified for Russia, so add
  the channels you verify.
- **Dark web (Tor):** none configured. Add onion sources you have verified on the outlet's own site.

## Reference items

32 dated items, each with its source: the state of the war and the Zaporizhzhia plant; the lapse of New START; the Sarmat
test and the ICBM force; the submarine force and the Yasen plan; the Engels-2 strikes and the bomber shelters; the Kerch and Kyiv bridge
strikes; the nuclear sites and the Kola II operation; the Russian weapons storage (not disclosed); the GRU units and the Baltic cable
incidents; the Northern Sea Route, the Vilkitsky and Shokalsky straits; the Nord Stream lines, Power of Siberia and the LNG plants; Plesetsk
and Baikonur; the bases abroad, the Oreshnik question and the Syrian memorandum; and the Kuril Islands.

## Tests

36 Python tests (`python -m pytest tests/`) and three browser suites (`npm test`), which load the shipped page into a real DOM.
The layer test fails the build if any toggle has no data behind it. The outline and point alignment was checked by rendering the map.

## Security

- Keys and tokens are encrypted with AES-256-GCM and never appear in error messages.
- The server listens on 127.0.0.1 only.
- Strict Content-Security-Policy: no third-party scripts, fonts or trackers.
- Headlines and labels are escaped before display; only http and https links become clickable.
- Telegram handles, Instagram usernames and Facebook Page IDs are validated before any URL is built.
- Requests can go through a proxy you choose (`PROXY_URL`).

A dashboard cannot secure your whole PC or phone, and it cannot hide your IP address from the sites it fetches from unless you
route traffic through a VPN, which can still see your traffic.

## Honest limitations

- **Reported strikes and claims.** Strikes, casualties and occupations are reported by one side or the other, and the notes say
  which. Russia and Ukraine make claims that often differ.
- **Most positions are approximate.** Bases and industrial sites sit at their town or area centre; open sources do not publish
  perimeters. Each tooltip says so.
- **Some points are not verified in this build.** They are flagged in their tooltips and listed under Gaps.
- **Nuclear and weapons information is public status only.** Russian nuclear weapons storage is not plotted. No holdings, warhead
  numbers, security arrangements or targeting information are given or implied; estimates are attributed to their publishers.
- **Events change daily.** The sources are current to reports up to 10 October 2026. The front line and the Zaporizhzhia plant can change
  within hours. Check the sources before you rely on any event.
- **No live news was fetched in the build sandbox,** which has no internet access. The status panel on your machine shows the real
  results.
- **The map is not a targeting product.** It maps publicly reported locations and events for analysis.
- **Single-user and local.** It runs on your machine while it is open.
