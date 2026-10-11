"""Routes every headline into one of the China v6 dashboard's 15 headings, applied to Russia and the former USSR.

Order matters: the most specific headings come first (darkweb, cyber, hazard, armed groups, internal security, naval,
maritime chokepoints and Arctic routes, air, weapons and nuclear, space, military operations, technology, geopolitics by
talks, economy, social, wellbeing), then geopolitics as the default. Short words match whole words only.
"""
import re

HEADINGS = ["geo", "milops", "arms", "naval", "scs", "air", "space", "tech", "cyber", "darkweb",
            "econ", "mss", "social", "wellbeing", "hazard"]

RULES = [
    ("darkweb", ["dark web", "darknet", "onion", "ransomware", "leak site", "infostealer", "stealer", "data breach",
                 "data leak", "threat intel", "threat intelligence", "initial access broker"]),
    ("cyber", ["cyber", "hacker", "hacked", "hacking", "malware", "vulnerabilit", "intrusion", "phishing", "ddos",
               "zero-day", "cyberattack", "apt28", "apt44", "fancy bear", "sandworm", "gru", "unit 26165", "unit 74455",
               "hacktivist", "cyber espionage", "wiper", "routers"]),
    ("hazard", ["earthquake", "tremor", "flood", "floods", "sandstorm", "heatwave", "heat wave", "cyclone", "typhoon",
                "tropical storm", "monsoon", "storm", "drought", "wildfire", "landslide", "tsunami", "volcan", "eruption",
                "blizzard", "frost", "permafrost"]),
    ("milops", ["hezbollah", "houthi", "houthis", "hamas", "wagner", "tatmadaw", "junta", "quds force", "popular mobilization"]),
    ("mss", ["mossad", "fsb", "espionage", "spy", "spying", "sleeper cell", "informant", "intelligence service", "crackdown",
             "executed", "executions", "arrested", "assassinat", "counterintelligence", "dissident", "interrogation", "sabotage"]),
    ("naval", ["navy", "naval", "submarine", "warship", "frigate", "destroyer", "corvette", "minesweeper",
               "black sea fleet", "northern fleet", "pacific fleet", "baltic fleet", "caspian flotilla", "borei", "yasen",
               "kilo", "akula", "icebreaker", "shipyard", "sevmash", "sea trial", "submarine base", "naval base",
               "coast guard", "midget submarine", "aircraft carrier"]),
    ("scs", ["northern sea route", "vilkitsky", "shokalsky", "kara strait", "yugorsky", "kerch", "bosporus", "dardanelles",
             "gulf of finland", "shadow fleet", "undersea cable", "subsea cable", "baltic cable", "bering strait", "strait",
             "straits", "tanker", "shipping", "blockade", "sea lane", "la perouse", "kuril"]),
    ("air", ["air force", "airbase", "air base", "fighter jet", "f-35", "f-15", "f-16", "su-27", "su-30", "su-34", "su-35",
             "tu-95", "tu-160", "tu-22", "bomber", "airspace", "airport", "helicopter", "air defense", "air defence",
             "interceptor", "patriot", "uav", "shelter"]),
    ("arms", ["sarmat", "avangard", "yars", "topol", "icbm", "ballistic", "hypersonic", "oreshnik", "iskander", "kinzhal",
              "warhead", "ammunition", "arms deal", "arms sale", "weapons shipment", "nuclear", "reactor", "plutonium", "enrich", "uranium", "isotope", "tritium", "vver", "rosatom",
              "missile battery", "missile test", "nuclear plant", "nuclear power", "power plant"]),
    ("space", ["plesetsk", "vostochny", "baikonur", "cosmodrome", "glonass", "soyuz", "angara", "space launch", "launch complex",
               "space force", "satellite", "orbit", "spacecraft", "space agency", "rocket launch"]),
    ("milops", ["offensive", "front line", "frontline", "pokrovsk", "kherson", "donetsk", "luhansk", "zaporizhzhia",
                "drone attack", "drone strike", "strike", "strikes", "airstrike", "attack on", "missile attack", "missiles hit",
                "troops", "army", "soldier", "soldiers", "military operation", "military drill", "invasion", "clashes", "clash",
                "shelling", "idf", "bases", "base struck", "killed in strike", "advance", "advances", "mobilization", "kremlin"]),
    ("tech", [" ai ", "artificial intelligence", "chips", "semiconductor", "export control", "digital", "technology"]),
    ("geo", ["talks", "negotiat", "summit", "mediat", "memorandum", "diplomat", "treaty", "ceasefire", "peace", "truce"]),
    ("econ", ["gazprom", "nord stream", "lng", "pipeline", "power of siberia", "turkstream", "druzhba", "oil", "crude", "gas",
              "sanctions", "exports", "imports", "inflation", "economy", "economic", "energy", "brent", "budget", "investment",
              "fuel prices", "special economic zone", "rouble", "ruble"]),
    ("social", ["protest", "protests", "human rights", "refugee", "refugees", "displaced", "civilians", "casualties", "conscript",
                "conscription", "migrants", "asylum", "famine", "hunger", "students", "women", "trafficking", "foreign-agent law"]),
    ("wellbeing", ["happiness", "wellbeing", "well-being", "life expectancy", "poverty index", "human development index"]),
]

_SHORT = {"spy", "fsb", "gru", "idf", "uav", "gas", "oil", "lng", "kilo", "yars", "topol", "icbm", "vver", "bases",
          "tritium", "strike", "kia", "ied"}


def _has(text: str, word: str) -> bool:
    if " " in word or "-" in word or "'" in word or "." in word or "/" in word:
        return word in text
    if word in _SHORT or (len(word) <= 4 and word.isalpha()):
        return re.search(r"\b" + re.escape(word) + r"\b", text) is not None
    return word in text


def classify(text: str) -> str:
    t = " " + (text or "").lower() + " "
    for heading, words in RULES:
        if any(_has(t, w) for w in words):
            return heading
    return "geo"
