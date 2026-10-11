"""
Fixed reference points for the RUSSIA dashboard: the Russian Federation and the other 14 states of the former USSR
(Estonia, Latvia, Lithuania, Belarus, Ukraine, Moldova, Georgia, Armenia, Azerbaijan, Kazakhstan, Uzbekistan,
Turkmenistan, Kyrgyzstan, Tajikistan), with the Arctic and Pacific approaches and the Russian bases abroad. India is outside
the frame and has no entries.

Each point carries its status, date and source in `note` and `source`. Points marked "not verified in this build" come from
public knowledge that this build's searches did not confirm; they are shown, but treat them as unconfirmed. Positions for
bases are approximate. Strike, casualty and occupation items are reported claims: both sides make claims, and the notes say so.
Russian nuclear WEAPONS storage sites are not publicly disclosed and are NOT plotted. Only public nuclear material, waste,
research and test-site information is listed. Nothing here is a targeting product.
"""
import json
import os


def M(id, name, lat, lon, cat, note, source, aliases=()):
    al = list(aliases) or [name.split(":")[0].split(" (")[0].strip().lower()]
    return {"id": id, "name": name, "lat": lat, "lon": lon, "cat": cat, "note": note, "source": source, "aliases": al}


MARKERS = [
    # ---------- Capitals of the 15 states ----------
    M("cap_moscow", "Moscow (capital, Russia)", 55.7558, 37.6173, "capital", "Capital of Russia. The Ministry of Defence and the General Staff are in Moscow (public information).", "public information"),
    M("cap_kyiv", "Kyiv (capital, Ukraine)", 50.4501, 30.5234, "capital", "Capital of Ukraine.", "public information"),
    M("cap_minsk", "Minsk (capital, Belarus)", 53.9045, 27.5615, "capital", "Capital of Belarus.", "public information"),
    M("cap_chisinau", "Chișinău (capital, Moldova)", 47.0105, 28.8638, "capital", "Capital of Moldova. Transnistria, east of the Dniester, is outside central control (see flashpoints).", "public information"),
    M("cap_tbilisi", "Tbilisi (capital, Georgia)", 41.7151, 44.8271, "capital", "Capital of Georgia.", "public information"),
    M("cap_yerevan", "Yerevan (capital, Armenia)", 40.1792, 44.4991, "capital", "Capital of Armenia. A Russian air base is at Erebuni, near the city (see foreign bases).", "public information"),
    M("cap_baku", "Baku (capital, Azerbaijan)", 40.4093, 49.8671, "capital", "Capital of Azerbaijan.", "public information"),
    M("cap_astana", "Astana (capital, Kazakhstan)", 51.1694, 71.4491, "capital", "Capital of Kazakhstan.", "public information"),
    M("cap_tashkent", "Tashkent (capital, Uzbekistan)", 41.2995, 69.2401, "capital", "Capital of Uzbekistan.", "public information"),
    M("cap_ashgabat", "Ashgabat (capital, Turkmenistan)", 37.9601, 58.3261, "capital", "Capital of Turkmenistan.", "public information"),
    M("cap_bishkek", "Bishkek (capital, Kyrgyzstan)", 42.8746, 74.5698, "capital", "Capital of Kyrgyzstan. The Kant air base is about 20 km east of the city (see foreign bases).", "TASS (Russian military bases abroad)"),
    M("cap_dushanbe", "Dushanbe (capital, Tajikistan)", 38.5598, 68.7870, "capital", "Capital of Tajikistan. The Russian 201st Military Base is here.", "Wikipedia (List of Russian military bases abroad)"),
    M("cap_tallinn", "Tallinn (capital, Estonia)", 59.4370, 24.7536, "capital", "Capital of Estonia.", "public information"),
    M("cap_riga", "Riga (capital, Latvia)", 56.9496, 24.1052, "capital", "Capital of Latvia.", "public information"),
    M("cap_vilnius", "Vilnius (capital, Lithuania)", 54.6872, 25.2797, "capital", "Capital of Lithuania.", "public information"),
    M("cap_simferopol", "Simferopol (capital of Crimea, Ukraine; occupied)", 44.9521, 34.1024, "capital", "Capital of the Crimea, Ukrainian territory occupied by Russia since 2014. Most states do not recognise Russia's annexation.", "public information"),

    # ---------- Russian bases abroad and in occupied Ukraine ----------
    M("gyumri_102", "102nd Military Base (Gyumri, Armenia): Russian ground base", 40.7930, 43.8450, "foreign_base",
      "About 3,000 personnel reported (Wikipedia, 2026). Part of the joint CIS air-defence system; under the Southern Military District (Wikipedia). Position approximate.",
      "Wikipedia (Russian 102nd Military Base, 2026)"),
    M("erebuni_3624", "3624th Air Base (Erebuni, Yerevan, Armenia)", 40.1472, 44.3959, "foreign_base",
      "Air base near Yerevan (Wikipedia, List of Russian military bases abroad). Position approximate.", "Wikipedia (List of Russian military bases abroad)"),
    M("kant", "Kant Air Base (Kyrgyzstan): 999th Air Base, CSTO rapid-reaction air component", 42.8500, 74.8500, "foreign_base",
      "About 20 km east of Bishkek (TASS). The 2003 agreement is reported to run to 2027 (older source). Position approximate.",
      "TASS (Russian military bases abroad); Soldiers Project (older)"),
    M("issyk_kul", "954th test base (Lake Issyk-Kul, Kyrgyzstan): naval test station (not verified in this build)", 42.4500, 77.5000, "foreign_base",
      "Listed in the Russian base list (Wikipedia). Position approximate; not verified in this build.", "public information (not verified in this build)"),
    M("dushanbe_201", "201st Military Base (Dushanbe, Tajikistan): Russian ground base", 38.5598, 68.7870, "foreign_base",
      "Also has garrisons at Qurghonteppa and Kulab; joint use of the Ayni air base (Wikipedia, List of Russian military bases abroad). Position approximate (city).",
      "Wikipedia (List of Russian military bases abroad)"),
    M("ayni", "Ayni Air Base (Tajikistan): joint use with Russia (not verified in this build)", 38.9800, 68.9000, "foreign_base",
      "Listed in the Russian base list (Wikipedia). Position approximate; not verified in this build.", "public information (not verified in this build)"),
    M("okno", "Okno space surveillance station (near Nurek, Tajikistan) (not verified in this build)", 38.4000, 69.4000, "foreign_base",
      "Listed in the Russian base list (Wikipedia). Position approximate; not verified in this build.", "public information (not verified in this build)"),
    M("gudauta_7", "7th Military Base (Gudauta, Abkhazia, Georgia): up to about 4,500 personnel", 43.1000, 40.6000, "foreign_base",
      "Georgia disputes the status of Abkhazia; Russia maintains the base (Wikipedia, List of Russian military bases abroad). Position approximate.",
      "Wikipedia (List of Russian military bases abroad)"),
    M("tskhinvali_4", "4th Military Base (Tskhinvali area, South Ossetia, Georgia): up to 3,500 troops", 42.2200, 44.0000, "foreign_base",
      "Georgia disputes the status of South Ossetia (Wikipedia, List of Russian military bases abroad). Position approximate.",
      "Wikipedia (List of Russian military bases abroad)"),
    M("cobasna", "Cobasna ammunition depot (Transnistria, Moldova): Russian operational group (not verified in this build)", 47.5800, 29.0300, "foreign_base",
      "Russian forces guard the depot in the Transnistria region (Wikipedia list). Position approximate; not verified in this build.", "public information (not verified in this build)"),
    M("baranavichy", "Baranavichy (Belarus): Volga-type radar station and joint air-training centre", 53.1300, 26.0000, "foreign_base",
      "Radar station and a joint Air Force and air-defence training centre (Wikipedia list; Brilliant Maps). Position approximate.",
      "Wikipedia (List of Russian military bases abroad); Brilliant Maps"),
    M("vileyka", "Vileyka (Belarus): naval communications centre (not verified in this build)", 54.4800, 26.9000, "foreign_base",
      "Listed in the Russian base list (Wikipedia). Position approximate; not verified in this build.", "public information (not verified in this build)"),
    M("belbek", "Belbek Air Base (Crimea, occupied Ukraine): Russian air base", 44.6900, 33.5700, "foreign_base",
      "Russian air base on Ukrainian territory, occupied since 2014; Crimea had at least five Russian air bases (Brilliant Maps, 2016 data). Position approximate.",
      "Brilliant Maps (2016 data); public information"),
    M("hmeimim", "Hmeimim Air Base (Latakia, Syria): Russian air base", 35.4094, 35.9483, "foreign_base",
      "The 9 Aug 2026 Russia-Syria MoU makes it a joint training and capacity-building centre; civilian facilities go to Syria within three months (Al Jazeera, Aug 2026).",
      "Al Jazeera (9 Aug 2026); Moscow Times (9 Aug 2026)"),
    M("tartus", "Tartus naval facility (Syria): Russian naval logistics base", 34.8925, 35.8800, "foreign_base",
      "Under the Aug 2026 MoU it becomes a joint training centre; Syria takes over the commercial pier (Al Jazeera, Aug 2026). Position approximate.",
      "Al Jazeera (9 Aug 2026); Wikipedia (Tartus naval base)"),

    # ---------- Strategic air bases (bombers) ----------
    M("engels", "Engels-2 Air Base (Saratov): Tu-160 and Tu-95MS strategic bombers", 51.4811, 46.2106, "air_base",
      "Russia's only operating base for the Tu-160 (Wikipedia). Reported Ukrainian drone strikes on 16-17 Jul, 2 Aug and 28 Aug 2026 (Ukraine's claims; satellite imagery of a damaged Tu-95MS). Russia began building 16-17 hardened bomber shelters in June-September 2026 (AviVector; NV).",
      "Wikipedia (Engels-2); Global Military (Aug 2026); NV / AviVector (Sep 2026); migflug (Aug 2026)"),
    M("olenya", "Olenya Air Base (Murmansk oblast): Tu-95 strategic bombers", 68.1500, 33.4500, "air_base",
      "Named among Russia's strategic air bases in 2026 reporting (The Project Leaflet, 2026). Position approximate.", "The Project Leaflet (2026)"),
    M("ukrainka", "Ukrainka Air Base (Amur oblast): Tu-95MS strategic bombers", 51.1500, 128.5000, "air_base",
      "A Tu-95 flying a strike mission from Ukrainka faces round trips of about 23 hours with tanker support (The Project Leaflet, 2026). Position approximate.",
      "GlobalSecurity (bomber bases); The Project Leaflet (2026)"),
    M("belaya", "Belaya Air Base (Irkutsk oblast): Tu-95MS and Tu-22M3", 52.7500, 103.6000, "air_base",
      "Three to four Tu-95MS and four Tu-22M3 confirmed by satellite (The Project Leaflet, 2026). Position approximate.",
      "GlobalSecurity (bomber bases); The Project Leaflet (2026)"),
    M("shaykovka", "Shaykovka Air Base (Kaluga oblast)", 54.2500, 34.3300, "air_base",
      "Listed in the bomber-base survey (GlobalSecurity). Position approximate.", "GlobalSecurity (bomber bases)"),
    M("mozdok", "Mozdok Air Base (North Ossetia): Tu-95MS", 43.7300, 44.6800, "air_base",
      "Listed in the bomber-base survey (GlobalSecurity). Position approximate.", "GlobalSecurity (bomber bases)"),
    M("dyagilevo", "Dyagilevo Air Base (Ryazan oblast)", 54.6000, 39.7000, "air_base",
      "Attacked on 5 December 2022, with two Tu-95 aircraft damaged (Wikipedia; Russian MoD acknowledged). Position approximate.",
      "Wikipedia (Dyagilevo and Engels air bases attacks)"),
    M("chernyakhovsk", "Chernyakhovsk Air Base (Kaliningrad oblast)", 54.6000, 21.8000, "air_base",
      "Listed in the bomber-base survey (GlobalSecurity; older). Position approximate.", "GlobalSecurity (bomber bases)"),
    M("baranovichi_air", "Baranovichi Air Base (Belarus): Tu-22 bombers", 53.6700, 23.8300, "air_base",
      "Listed in the bomber-base survey (GlobalSecurity). Position approximate.", "GlobalSecurity (bomber bases)"),

    # ---------- Navy: fleet headquarters, submarine bases and shipyards ----------
    M("severomorsk", "Severomorsk (Kola Bay): Northern Fleet headquarters", 69.0670, 33.4170, "navy_base",
      "Northern Fleet headquarters since 1947; the largest dry dock on the Kola Peninsula (Global Military, Aug 2026).", "Global Military (14 Aug 2026)"),
    M("gadzhiyevo", "Gadzhiyevo (Sayda Inlet): strategic submarine base (Delta IV and Borei)", 69.2500, 33.3300, "submarine_base",
      "Five Project 667BDRM Delta IV boats and the lead Borei, Yury Dolgorukiy, are based here (russianforces.org, 2026). Position approximate.",
      "russianforces.org (Navy); Global Military (2026)"),
    M("nerpichya", "Nerpichya (Zapadnaya Litsa, Kola): submarine base, largest in Russia", 69.4500, 32.3667, "submarine_base",
      "Largest Russian submarine base, with four associated facilities (GlobalSecurity; older source). Position approximate.",
      "GlobalSecurity (Nerpichya; older)"),
    M("vidyayevo", "Vidyayevo (Kola): submarine base (Akula class)", 69.7000, 33.6000, "submarine_base",
      "Akula-class submarines are based here (Global Military, Aug 2026). Position approximate.", "Global Military (Aug 2026)"),
    M("vilyuchinsk", "Vilyuchinsk (Kamchatka): Pacific strategic submarine base (25th Division, Borei)", 52.9300, 158.4000, "submarine_base",
      "The 16th Squadron of Pacific strategic submarines is based here; the 25th Submarine Division has Borei and Borei-A boats (The Naval Review, 2026). Position approximate.",
      "The Naval Review (2026); Global Military (2026)"),
    M("kronstadt", "Kronstadt (near St Petersburg): Baltic Fleet 123rd Submarine Brigade", 59.9900, 29.7700, "submarine_base",
      "The Baltic Fleet's own submarine force is small and centred on the 123rd Brigade (The Naval Review, 2026). Position approximate.",
      "The Naval Review (2026); Global Military (2026)"),
    M("vladivostok", "Vladivostok: Pacific Fleet headquarters", 43.1155, 131.8855, "navy_base",
      "Pacific Fleet headquarters (Global Military, Sep 2026). The 19th Submarine Brigade (Improved Kilo) operates from Malyy Ulyss Bay (The Naval Review, 2026).",
      "Global Military (Sep 2026); The Naval Review (2026)"),
    M("baltiysk", "Baltiysk (Kaliningrad): Baltic Fleet main operating base", 54.6500, 19.9000, "navy_base",
      "Main operating base; the Baltic Fleet headquarters is in Kaliningrad (Global Military, Sep 2026; Russianships, Oct 2026). Position approximate.",
      "Global Military (Sep 2026); Russianships (Oct 2026)"),
    M("novorossiysk", "Novorossiysk: Black Sea Fleet naval base", 44.7231, 37.7689, "navy_base",
      "Main operating base (Global Military, Sep 2026). Submarines assigned to the 4th Independent Submarine Brigade (The Naval Review, 2026). Position approximate.",
      "Global Military (Sep 2026); The Naval Review (2026)"),
    M("sevastopol", "Sevastopol (Crimea, occupied): Black Sea Fleet headquarters", 44.6166, 33.5254, "navy_base",
      "Black Sea Fleet headquarters on Ukrainian territory occupied since 2014; most states do not recognise the annexation (Global Military, 2026; public information).",
      "Global Military (2026); public information"),
    M("kaspiysk", "Kaspiysk (Dagestan): Caspian Flotilla headquarters", 42.8833, 47.6333, "navy_base",
      "Caspian Flotilla headquarters (Global Military, Sep 2026). Position approximate.", "Global Military (Sep 2026)"),
    M("petropavlovsk", "Petropavlovsk-Kamchatsky (Rybachy): Pacific Fleet base", 53.0000, 158.6500, "navy_base",
      "Kamchatka naval base area (Global Military, Sep 2026). Position approximate.", "Global Military (Sep 2026)"),
    M("sevmash", "Sevmash shipyard (Severodvinsk): nuclear-submarine construction and naval arsenal", 64.5635, 39.8307, "defense_industry",
      "Builds the Yasen-class attack submarines; the Navy plans 12-14 Yasen boats by 2035 (Wikipedia, Future of the Russian Navy; Moiseyev, 2026). Position approximate.",
      "Global Military (Severodvinsk, 2026); Wikipedia (Future of the Russian Navy)"),
    M("admiralty", "Admiralty Shipyards (St Petersburg): builder of the Kilo-class submarines", 59.9280, 30.2600, "defense_industry",
      "Built the Kilo-class boats delivered to Vietnam (Wikipedia, Vietnamese submarine Hai Phong). Position approximate.",
      "Wikipedia (Vietnamese submarine Hai Phong)"),
    M("tupolev_kazan", "Tupolev Kazan Aviation Plant (Kazan): Tu-160M production", 55.8100, 49.1800, "defense_industry",
      "Two Tu-160M delivered by 2025 against 50 promised in 2015; seven airframes reported in assembly (leaked documents, Apr 2026; The Project Leaflet, 2026). Position approximate.",
      "The Project Leaflet (2026); leaked procurement reports (Apr 2026)"),
    M("uralvagonzavod", "Uralvagonzavod (Nizhny Tagil): tank plant (not verified in this build)", 57.9100, 59.9500, "defense_industry",
      "Public information. Not verified in this build.", "public information (not verified in this build)"),
    M("kalashnikov", "Kalashnikov (Izhevsk): small-arms plant (not verified in this build)", 56.8500, 53.2100, "defense_industry",
      "Public information. Not verified in this build.", "public information (not verified in this build)"),

    # ---------- Strategic missiles: ICBM divisions, test ranges ----------
    M("kozelsk", "Kozelsk (Kaluga oblast): 28th Guards Missile Division (Yars)", 54.0300, 35.7700, "missile_base",
      "Yars deployment was completed at the end of 2025 (russianforces.org, Dec 2025; Wikipedia). Position approximate.",
      "russianforces.org (Dec 2025); Wikipedia (28th Guards Rocket Division)"),
    M("tatishchevo", "Tatishchevo (Saratov oblast): 60th Missile Division (silo field)", 51.6700, 45.6000, "missile_base",
      "Silo-based Yars (SS-27 Mod 1) deployment was completed in 2012; upgrades to the silos began in 2025 (Bulletin of the Atomic Scientists, 2026). Position approximate.",
      "Bulletin of the Atomic Scientists (2026)"),
    M("teykovo", "Teykovo (Ivanovo oblast): 54th Guards Missile Division (road-mobile)", 56.8500, 40.5000, "missile_base",
      "Road-mobile Yars and Topol-M (Bulletin of the Atomic Scientists, 2026). Position approximate.", "Bulletin of the Atomic Scientists (2026)"),
    M("barnaul", "Barnaul (Altai krai): 35th Missile Division (road-mobile Yars)", 53.3500, 83.7800, "missile_base",
      "Yars regiments (Wikipedia, 35th Rocket Division). Position approximate.", "Wikipedia (35th Rocket Division)"),
    M("vypolzovo", "Vypolzovo (Tomsk oblast): 7th Missile Division (Topol-M and Yars) (not verified in this build)", 56.4000, 85.0000, "missile_base",
      "18 Topol-M and 18 Yars reported (Bulletin of the Atomic Scientists, 2026). Position approximate; not verified in this build.",
      "Bulletin of the Atomic Scientists (2026); not verified in this build"),
    M("uzhur", "Uzhur (Krasnoyarsk krai): 62nd Missile Division; first Sarmat regiment due by the end of 2026", 55.3000, 89.8000, "missile_base",
      "The Sarmat passed a test on 12 May 2026; the first regiment is planned here by the end of 2026 (Moscow Times; IISS; TWZ). Position approximate.",
      "Moscow Times (12 May 2026); IISS (May 2026); TWZ (2026)"),
    M("dombarovsky", "Dombarovsky (Yasny, Orenburg oblast): Avangard hypersonic glide vehicles; Sarmat planned", 50.9000, 59.7000, "missile_base",
      "Twelve Avangard systems are reported deployed here (Bulletin of the Atomic Scientists, 2026). Sources conflict on the site of the 12 May 2026 Sarmat launch (Plesetsk or a silo of this division). Position approximate.",
      "Bulletin of the Atomic Scientists (2026); russianforces.org (2026)"),
    M("kapustin_yar", "Kapustin Yar (Astrakhan oblast): missile test range (not verified in this build)", 48.5600, 46.3000, "missile_base",
      "Public information. Not verified in this build.", "public information (not verified in this build)"),
    M("sary_shagan", "Sary Shagan (Kazakhstan): anti-ballistic missile test range operated by Russia (not verified in this build)", 46.2000, 74.5000, "missile_base",
      "Listed in the Russian base list (Wikipedia). Position approximate; not verified in this build.", "Wikipedia (List of Russian military bases abroad); not verified in this build"),

    # ---------- Nuclear material, weapons laboratories, test sites (public information only) ----------
    M("mayak", "Mayak (Ozyorsk, Chelyabinsk oblast): plutonium production and the RT-1 reprocessing plant", 55.7500, 60.7000, "nuclear_site",
      "Russia's plutonium was produced here (World Nuclear Association, 2026). Also called Chelyabinsk-65. Position approximate.",
      "World Nuclear Association (2026)"),
    M("seversk", "Siberian Chemical Combine (Seversk, Tomsk oblast): plutonium production", 56.6000, 84.8500, "nuclear_site",
      "One of the three plutonium-production sites (World Nuclear Association, 2026). Also called Tomsk-7. Position approximate.",
      "World Nuclear Association (2026)"),
    M("zheleznogorsk", "Mining and Chemical Combine (Zheleznogorsk, Krasnoyarsk krai): used-fuel storage", 56.2500, 93.5300, "nuclear_site",
      "Centralised wet and dry storage for VVER and RBMK used fuel; a plutonium production site (World Nuclear Association, 2026). Also called Krasnoyarsk-26. Position approximate.",
      "World Nuclear Association (2026)"),
    M("sarov", "Sarov (VNIIEF): nuclear weapons design laboratory (not verified in this build)", 54.9300, 43.3200, "nuclear_site",
      "Public information. Not verified in this build.", "public information (not verified in this build)"),
    M("snezhinsk", "Snezhinsk (VNIITF): nuclear weapons design laboratory (not verified in this build)", 56.0800, 60.7300, "nuclear_site",
      "Public information. Not verified in this build.", "public information (not verified in this build)"),
    M("novaya_zemlya", "Novaya Zemlya (Arctic): former nuclear test sites, Pankovo and Rogachevo (not verified in this build)", 73.4500, 54.8000, "nuclear_site",
      "Public information: former Soviet and Russian test sites. Not verified in this build.", "public information (not verified in this build)"),
    M("chernobyl", "Chernobyl Nuclear Power Plant (Ukraine): decommissioned", 51.3890, 30.0990, "nuclear_site",
      "Shut down after the 1986 accident; now decommissioned (public information). Position approximate.", "public information"),

    # ---------- Space launch and tracking ----------
    M("plesetsk", "Plesetsk Cosmodrome (Mirny, Arkhangelsk oblast): military and navigation launches", 62.9250, 40.5770, "space_site",
      "1,687 launches since 1966 (Plesetsk overview, 2026). Site 43 (Soyuz, Glonass) last launched on 17 Sep 2026; Site 35 (Angara) on 23 Apr 2026 (Wikipedia; Rocketlaunch, 2026). Position approximate.",
      "Wikipedia (Plesetsk Cosmodrome Site 43; Site 35); Rocketlaunch (2026)"),
    M("vostochny", "Vostochny Cosmodrome (Amur oblast)", 51.8840, 128.3330, "space_site",
      "Angara A5M and Soyuz-2.1b launches are scheduled here (NextSpaceflight, 2026). Position approximate.",
      "NextSpaceflight (2026)"),
    M("baikonur", "Baikonur Cosmodrome (Kazakhstan; leased by Russia)", 45.9650, 63.3050, "space_site",
      "Russia leases the site from Kazakhstan, which charges rent (Wikipedia). Soyuz launches continue from Site 31/6 in 2026 (NextSpaceflight; Wikipedia). Position approximate.",
      "Wikipedia (Plesetsk Cosmodrome; List of R-7 launches 2025-2029)"),

    # ---------- Cyber: GRU units (attributed by governments; locations as reported) ----------
    M("gru_74455", "GRU Unit 74455 (Sandworm / APT44): headquarters in Khimki", 55.8950, 37.4450, "cyber_hub",
      "Headquarters at 22 Kirova Street, Khimki (Wikipedia, Sandworm). A US grand jury indicted six officers of the unit in October 2020 (Wikipedia; CRS R46616). Position approximate.",
      "Wikipedia (Sandworm); CRS R46616"),
    M("gru_26165", "GRU Unit 26165 (APT28 / Fancy Bear): Sixth Directorate, Moscow (location approximate; not verified in this build)", 55.7500, 37.6200, "cyber_hub",
      "Attributed by governments (CRS R46616; joint advisories). An April 2026 multinational investigation found the unit used vulnerable routers to steal military and government data (Euronews, Apr 2026). The unit's exact location is not verified.",
      "CRS R46616; Euronews (8 Apr 2026)"),
    M("gru_aquarium", "GRU headquarters ('the Aquarium'), Moscow (location approximate; not verified in this build)", 55.8000, 37.5300, "cyber_hub",
      "Psychological-operations unit 54777 is reported to sit in the GRU headquarters (Wikipedia, GRU Unit 54777). Position approximate; not verified in this build.",
      "Wikipedia (GRU Unit 54777); not verified in this build"),

    # ---------- Command headquarters ----------
    M("mod_moscow", "Ministry of Defence (Moscow, Frunzenskaya): headquarters (not verified in this build)", 55.7250, 37.6000, "cantonment",
      "Public information; position approximate. Not verified in this build.", "public information (not verified in this build)"),
    M("southern_md", "Southern Military District headquarters (Rostov-on-Don)", 47.2357, 39.7015, "cantonment",
      "The 102nd base in Armenia falls under this command (Wikipedia). Position approximate.",
      "Wikipedia (Russian 102nd Military Base)"),

    # ---------- Flashpoints and occupied territory (reported; the situation changes) ----------
    M("znpp", "Zaporizhzhia Nuclear Power Plant (occupied by Russia since 3 March 2022): reactors shut, cooled; repeated loss of off-site power", 47.5100, 34.5850, "flashpoint",
      "The 26th complete loss of off-site power since the war began (World Nuclear Association, Oct 2026). The six reactors are shut but must be cooled (IAEA). Ukraine and Russia dispute responsibility for the strikes. Position approximate.",
      "World Nuclear Association (Oct 2026); IAEA (Update 326, Nov 2025); Yahoo News (IAEA, 2026)"),
    M("pokrovsk", "Pokrovsk (Donetsk oblast): fighting on the front line (press reporting, 2026)", 48.2800, 37.1800, "flashpoint",
      "Russian forces have taken most of Pokrovsk (defconlevel; press reporting, May 2026). The front changes quickly; check the latest reports. Position approximate.",
      "defconlevel (May 2026); press reporting"),
    M("kerch_fp", "Kerch area (Crimea): Ukrainian strikes on logistics, radars and air defence (June 2026)", 45.3600, 36.4700, "flashpoint",
      "Strikes on radars and a port in the Kerch area, reported by the Ukrainian Unmanned Systems Forces and assessed by Critical Threats (21 Jun 2026). Reported; not independently confirmed in this build.",
      "Critical Threats (21 Jun 2026)"),
    M("kyiv_bridge", "Kyiv Southern Bridge (Dnipro): repeated drone strikes, 1-2 October 2026", 50.4300, 30.5200, "flashpoint",
      "Four waves of drone strikes on the bridge (Kyiv's mayor; Critical Threats, Oct 2026). The Russian MoD acknowledged striking a road-rail bridge in Kyiv on the night of 1 October. Reported.",
      "Critical Threats (2 Oct 2026)"),
    M("tiraspol", "Transnistria (Tiraspol, Moldova): unrecognised region with Russian forces", 46.8402, 29.6430, "flashpoint",
      "Russian forces guard the Cobasna depot; Moldova's sovereignty over the region is disputed (Wikipedia list). Position approximate.",
      "Wikipedia (List of Russian military bases abroad)"),
    M("abkhazia", "Abkhazia (Sukhumi area, Georgia): de facto Russian presence; status disputed", 43.0000, 41.0167, "flashpoint",
      "Georgia does not recognise Abkhazia's independence; the 7th Military Base is at Gudauta (Wikipedia list). Position approximate.",
      "Wikipedia (List of Russian military bases abroad)"),
    M("kurils", "Kuril Islands (Iturup): Russian-administered; Japan claims them (not verified in this build)", 45.2000, 147.8000, "flashpoint",
      "Public information: a long-standing sovereignty dispute between Russia and Japan. Not verified in this build.", "public information (not verified in this build)"),

    # ---------- Chokepoints and Arctic routes ----------
    M("kerch_strait", "Kerch Strait (Crimea-Russia): the sea link between the Sea of Azov and the Black Sea", 45.3300, 36.5500, "chokepoint",
      "Carries Russia's ground supply lines to Crimea; Ukrainian strikes on its logistics were reported in June 2026 (Critical Threats). Position approximate.",
      "Critical Threats (21 Jun 2026); public information"),
    M("bosporus", "Bosporus (Istanbul): Black Sea access for the Black Sea Fleet (not verified in this build)", 41.1200, 29.0700, "chokepoint",
      "Public information: transit is governed by the Montreux Convention. Not verified in this build.", "public information (not verified in this build)"),
    M("dardanelles", "Dardanelles (Çanakkale): the Aegean route to the Black Sea (not verified in this build)", 40.1500, 26.4000, "chokepoint",
      "Public information. Not verified in this build.", "public information (not verified in this build)"),
    M("gulf_finland", "Gulf of Finland (Narva to Kronstadt approaches): Baltic Fleet access (not verified in this build)", 59.8000, 26.0000, "chokepoint",
      "Public information: the Baltic Fleet's route between Kronstadt and the open Baltic. Not verified in this build.", "public information (not verified in this build)"),
    M("kara_strait", "Kara Strait (Kara Gates; Northern Sea Route)", 70.6000, 58.5000, "chokepoint",
      "Passage between Novaya Zemlya and the Yugorsky peninsula on the Northern Sea Route (Wikipedia). Position approximate.",
      "Wikipedia (Kara Strait)"),
    M("yugorsky", "Yugorsky Strait (Northern Sea Route): Kara and Pechora seas", 69.6000, 59.0000, "chokepoint",
      "Narrow sound between the Kara and Pechora seas on the Northern Sea Route (Wikipedia). Position approximate.",
      "Wikipedia (Yugorsky Strait)"),
    M("vilkitsky", "Vilkitsky Strait (Northern Sea Route): tankers held back by ice in summer 2026", 77.9500, 103.5800, "chokepoint",
      "Nine shadow-fleet tankers gathered in the Kara Sea in late July 2026; icebreakers Ural and Sibir worked the strait (Bellona, Sep 2026). Coordinates from Wikipedia.",
      "Bellona (Sep 2026); Wikipedia (Vilkitsky Strait)"),
    M("shokalsky", "Shokalsky Strait (Severnaya Zemlya): first naval passage (September 2026)", 79.0000, 97.0000, "chokepoint",
      "Russian naval vessels passed through for the first time on the 2026 Northern Fleet expedition (Barents Observer, 30 Sep 2026). Position approximate.",
      "Barents Observer (30 Sep 2026)"),
    M("bering", "Bering Strait (Chukotka-Alaska): the eastern edge of the Russian Arctic route (not verified in this build)", 65.7500, 191.0000, "chokepoint",
      "Public information: the strait between Chukotka and Alaska. Not verified in this build.", "public information (not verified in this build)"),
    M("laperouse", "La Pérouse (Soya) Strait (Sakhalin-Hokkaido) (not verified in this build)", 45.5000, 141.9000, "chokepoint",
      "Public information. Not verified in this build.", "public information (not verified in this build)"),
    M("kuril_straits", "Kuril Straits (Bussol and Kruzenshtern) (not verified in this build)", 46.5000, 151.0000, "chokepoint",
      "Public information. Not verified in this build.", "public information (not verified in this build)"),

    # ---------- Pipelines and LNG terminals ----------
    M("ns1", "Nord Stream 1 (start at Vyborg): ruptured in 2022 and mothballed", 60.7200, 28.7500, "pipeline",
      "Ruptured by explosions on 26 September 2022 (Wikipedia). Mothballed; the EU sanctions package of 18 July 2025 bans its use (Wikipedia). Position approximate.",
      "Wikipedia (Nord Stream 1; Nord Stream 2)"),
    M("ns2", "Nord Stream 2 (start at Ust-Luga): never delivered gas", 59.6900, 28.4000, "pipeline",
      "Never delivered gas; both Nord Stream lines are mothballed (Global Energy Monitor; Wikipedia). Position approximate.",
      "Global Energy Monitor; Wikipedia (Nord Stream 2)"),
    M("ps1", "Power of Siberia 1 (gas border crossing at Blagoveshchensk)", 50.2800, 127.5300, "pipeline",
      "Carries about 38 bcm a year to China under a 30-year contract from 2014 (CRS In Focus; press). Position approximate.",
      "CRS In Focus (IF12748); press reporting"),
    M("turkstream", "TurkStream landfall (Dzhubga, Krasnodar krai): gas to Turkey and south-east Europe", 44.4000, 38.5000, "pipeline",
      "Two lines under the Black Sea: one for Turkish consumers and one for southern and south-eastern Europe (press; CRS In Focus IF11177). Position approximate.",
      "CRS In Focus (IF11177); press reporting"),
    M("druzhba", "Druzhba pipeline (Unecha, Bryansk oblast): oil to Belarus, Ukraine and central Europe (not verified in this build)", 52.8000, 32.0000, "pipeline",
      "Flows to Hungary and Slovakia stopped on 27 Jan 2026 and restarted on 22 Apr 2026 (press analysis; not verified in this build). Position approximate.",
      "press analysis (Apr 2026); not verified in this build"),
    M("yamal_lng", "Yamal LNG (Sabetta, Yamal peninsula): LNG plant", 71.2700, 72.0300, "pipeline",
      "Trains 1-3 run near nameplate; train 4 is stalled by sanctions on Arctic-class carriers and liquefaction technology (Carnegie and OIES analyses, 2026). Position approximate.",
      "Seala AI (2026); Carnegie / OIES analyses (2026)"),
    M("arctic_lng2", "Arctic LNG 2 (Gydan peninsula): sanctioned; cargoes to China's Beihai terminal (June 2026)", 71.1000, 72.5000, "pipeline",
      "41 cargoes had reached China's Beihai regasification terminal by June 2026 (Seala AI analysis). Position approximate.",
      "Seala AI (2026)"),
    M("sakhalin2", "Sakhalin-2 LNG (Prigorodnoye, Sakhalin): operating LNG plant", 46.6800, 142.8000, "pipeline",
      "Operating; the sanctions perimeter left existing offtake commercially live (Seala AI; Carnegie analyses, 2026). Position approximate.",
      "Seala AI (2026)"),
    M("cpc", "Caspian Pipeline Consortium terminal (Novorossiysk) (not verified in this build)", 44.7000, 37.7800, "pipeline",
      "Public information. Not verified in this build.", "public information (not verified in this build)"),
    M("btc", "Baku-Tbilisi-Ceyhan pipeline (Sangachal, Azerbaijan): non-Russian, shown for the Caucasus (not verified in this build)", 40.2000, 49.7000, "pipeline",
      "Public information. Not verified in this build.", "public information (not verified in this build)"),
]

# Nuclear plants listed in the WRI Global Power Plant Database for Russia and the former USSR (generated); notes enriched
# where the reactor status is verified from the World Nuclear Association (2026).
_WRI = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "data", "wri_nuclear_sea.json")
_ENRICH = {
    "Novovoronezh": "Five operating units. A drone struck a cooling tower on 7 October 2025; Russia said there was no damage (Reuters; Wikipedia). Novovoronezh II is under construction.",
    "Zaporizhzhia": "Occupied by Russia since 3 March 2022. The six reactors are shut and must be cooled; repeated loss of off-site power (World Nuclear Association, Oct 2026). Ukraine and Russia dispute responsibility for strikes.",
    "Kursk": "Kursk I operating; Kursk II (VVER-TOI) units are being commissioned (World Nuclear Association, 2026).",
    "Kola": "Kola II reached full power in March and entered commercial operation on 1 May 2026 (World Nuclear Association, 2026). Kola 3 and 4 have licence extensions to 2026 and 2039.",
    "Bilibino": "Four small units. Unit 1 was shut in 2019; units 2 to 4 closed in December 2025 (World Nuclear Association reactor database).",
    "Beloyarsk": "Fast-reactor station: BN-600 and BN-800 operating; a BN-1200 unit is planned (World Nuclear Association, 2026).",
    "Leningrad": "RBMK units and the Leningrad II VVER-1200 units (World Nuclear Association reactor database, 2026). Some RBMK units have been closed.",
    "Smolensk": "RBMK units with a life-extension programme (World Nuclear Association, 2026).",
    "Chernobyl": "Decommissioned after the 1986 accident (public information).",
}
if os.path.exists(_WRI):
    with open(_WRI, encoding="utf-8") as _f:
        for _m in json.load(_f):
            _m.pop("country_iso3", None)
            _m["aliases"] = [_m["name"].split(" (")[0].lower()]
            for _k, _v in _ENRICH.items():
                if _k in _m["name"]:
                    _m["note"] = _v
                    _m["source"] = "World Nuclear Association (2026); WRI Global Power Plant Database (CC-BY 4.0)"
                    break
            MARKERS.append(_m)

for _m in MARKERS:
    if _m["id"] == "gru_26165":
        _m["aliases"] = ["apt28", "fancy bear", "unit 26165"]
    if _m["id"] == "gru_74455":
        _m["aliases"] = ["sandworm", "apt44", "unit 74455"]
    if _m["id"] == "plesetsk":
        _m["aliases"] = ["plesetsk", "plesetsk cosmodrome"]
    if _m["id"] == "uzhur":
        _m["aliases"] = ["uzhur", "sarmat"]
    if _m["id"] == "dombarovsky":
        _m["aliases"] = ["dombarovsky", "avangard", "yasny"]
    if _m["id"] == "znpp":
        _m["aliases"] = ["zaporizhzhia", "zaporizhzhya", "znpp"]
