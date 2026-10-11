
(function(){
  "use strict";

  const PROJ = {"type": "lcc", "n": 0.8768440534890793, "F": 1.7466151570027064, "rho0": 0.5504126652423526, "lam0": 1.7453292519943295, "scale": 662.680441531378, "translate": [638.4732209557224, 358.7427021095056], "width": 1300, "height": 666};
  const HEADING_KEYS = ["geo", "milops", "arms", "naval", "scs", "air", "space", "tech", "cyber", "econ", "mss", "social", "wellbeing", "hazard"];
  const SEED_DATA = {"updated_at": "offline-snapshot", "items_by_category": {"geo": [{"category": "geo", "label": "No durable ceasefire in the Russia-Ukraine war (October 2026)", "text": "Russia holds Crimea and parts of Donetsk, Luhansk, Zaporizhzhia and Kherson. A US-brokered three-day truce (9-11 May 2026) did not hold. Russia has rejected a freeze on the current line of contact. Critical Threats reported on 2 October 2026 that neither side advanced that day.", "source": "Critical Threats (2 Oct 2026); ORF (2026); defconlevel (May 2026)", "date": "Oct 2026", "url": null, "connector": "reference"}, {"category": "geo", "label": "Syria: Hmeimim and Tartus reorganised as joint training centres (9 August 2026)", "text": "Russia and Syria signed a memorandum on 9 August 2026 making Hmeimim and Tartus joint training and capacity-building centres. Civilian facilities go to Syria within three months.", "source": "Al Jazeera (9 Aug 2026); Moscow Times (9 Aug 2026)", "date": "Aug 2026", "url": null, "connector": "reference"}, {"category": "geo", "label": "The Kuril Islands: Russia administers them and Japan claims them", "text": "Russia administers the Kuril Islands, which Japan claims. The dispute is long-standing and was not settled in this build.", "source": "Public information", "date": "2026", "url": null, "connector": "reference"}], "arms": [{"category": "arms", "label": "New START lapsed on 5 February 2026", "text": "The New START treaty lapsed on 5 February 2026, leaving no treaty-bound limits on the deployed strategic forces of the United States and Russia (defconlevel, 2026).", "source": "defconlevel (2026)", "date": "Feb 2026", "url": null, "connector": "reference"}, {"category": "arms", "label": "Sarmat ICBM passes a test on 12 May 2026; first regiment at Uzhur by the end of 2026", "text": "The Strategic Missile Forces reported a successful Sarmat test on 12 May 2026. The commander said the first regiment would go on combat duty at Uzhur by the end of 2026. Sources conflict on the launch site: some report Plesetsk, others a silo of the Dombarovsky division.", "source": "Moscow Times (12 May 2026); IISS (May 2026); TWZ; russianforces.org (2026)", "date": "May 2026", "url": null, "connector": "reference"}, {"category": "arms", "label": "Russia's ICBM force in 2026: 12 divisions and about 41 regiments (published estimate)", "text": "A 2026 study in the Bulletin of the Atomic Scientists says Russia's ICBMs are organised in three missile armies with 12 divisions and about 41 regiments. The Avangard glide vehicle is reported at Dombarovsky. These are published estimates; the force is not fully disclosed.", "source": "Bulletin of the Atomic Scientists (2026, Russian nuclear weapons)", "date": "2026", "url": null, "connector": "reference"}, {"category": "arms", "label": "Zaporizhzhia NPP: the 26th complete loss of off-site power since the war began", "text": "The World Nuclear Association reports the plant lost its external power again and that the last operating 750 kV line was disconnected after shelling. The six reactors are shut but must be cooled. The IAEA has negotiated several local ceasefires for repairs.", "source": "World Nuclear Association (Oct 2026); IAEA Update 326 (Nov 2025)", "date": "Oct 2026", "url": null, "connector": "reference"}, {"category": "arms", "label": "Russia's plutonium production sites: Mayak, Seversk and Zheleznogorsk", "text": "Russia's plutonium was produced at three sites: PO Mayak at Ozyorsk, the Siberian Chemical Combine at Seversk, and the Mining and Chemical Combine at Zheleznogorsk. Zheleznogorsk also runs central wet and dry storage for used fuel.", "source": "World Nuclear Association (Russia's nuclear fuel cycle, 2026)", "date": "2026", "url": null, "connector": "reference"}, {"category": "arms", "label": "Russia's nuclear power plants: Kola II commercial operation (1 May 2026)", "text": "Kola II reached full power in March 2026 and entered commercial operation on 1 May 2026. Rosatom reports 18 new units at nine sites in various stages of planning.", "source": "World Nuclear Association (Russia nuclear power, 2026)", "date": "2026", "url": null, "connector": "reference"}, {"category": "arms", "label": "Novovoronezh NPP: a drone struck a cooling tower (7 October 2025)", "text": "A drone struck a cooling tower at the Novovoronezh NPP on 7 October 2025. Russia said the drone did not cause damage (Reuters, Oct 2025).", "source": "Reuters (7 Oct 2025, via Wikipedia)", "date": "Oct 2025", "url": null, "connector": "reference"}, {"category": "arms", "label": "Russian nuclear weapons storage is not publicly disclosed; not plotted", "text": "Russia does not publish the locations or holdings of its nuclear weapons storage sites. This dashboard lists only public information on nuclear material, waste, research and test sites.", "source": "Public information; no official disclosure", "date": "2026", "url": null, "connector": "reference"}, {"category": "arms", "label": "Oreshnik deployment in Belarus: not verified in this build", "text": "Russia and Belarus conducted a non-strategic nuclear exercise. The deployment of the Oreshnik missile in Belarus was not verified in this build; check the latest reports.", "source": "russianforces.org (2026); not verified in this build", "date": "2026", "url": null, "connector": "reference"}], "naval": [{"category": "naval", "label": "Russian submarine force, 1 October 2026: 15 SSBN, 12 SSGN, 15 SSN", "text": "Russian Navy listings updated on 1 October 2026 count 15 ballistic-missile submarines, 12 guided-missile submarines and 15 nuclear attack submarines in service or in reserve. Yellow-label boats in reserve or under construction are counted separately.", "source": "Russianships (1 Oct 2026)", "date": "Oct 2026", "url": null, "connector": "reference"}, {"category": "naval", "label": "Yasen-class plan: 12 to 14 boats by 2035", "text": "The Russian Navy's commander-in-chief said in 2026 that the Navy aims to replace its Project 971, 945 and 949 submarines with between 12 and 14 Yasen-class boats by 2035.", "source": "Wikipedia (Future of the Russian Navy; 2026 statement)", "date": "2026", "url": null, "connector": "reference"}], "air": [{"category": "air", "label": "Ukrainian drone strikes on Engels-2 (July and August 2026); Russia builds bomber shelters", "text": "Ukraine says its drones struck Engels-2 on 16-17 July, 2 August and 28 August 2026, damaging Tu-95MS bombers, fuel and ammunition stores. Satellite imagery shows a second Tu-95 damaged. Russia has started building 16 to 17 hardened shelters for its strategic bombers. These are reported claims; Russia's own statements differ.", "source": "Global Military (Aug 2026); NV / AviVector (Sep 2026); migflug (Aug 2026); CDM (Aug 2026)", "date": "Jul-Sep 2026", "url": null, "connector": "reference"}], "milops": [{"category": "milops", "label": "Ukrainian strikes on the Kerch Strait's logistics and air defence (June 2026)", "text": "The Ukrainian Unmanned Systems Forces reported strikes on radars and a port near Kerch, and Critical Threats assessed the campaign as an effort to deny Russia its land supply route to Crimea. Reported; not independently confirmed in this build.", "source": "Critical Threats (21 Jun 2026)", "date": "Jun 2026", "url": null, "connector": "reference"}, {"category": "milops", "label": "Repeated drone strikes on Kyiv's Southern Bridge (1-2 October 2026)", "text": "Four waves of Russian drone strikes hit the Southern Bridge over the Dnipro in Kyiv on 1 and 2 October 2026. The Russian MoD acknowledged striking a road-rail bridge in Kyiv that night.", "source": "Critical Threats (2 Oct 2026)", "date": "Oct 2026", "url": null, "connector": "reference"}, {"category": "milops", "label": "The 102nd Military Base in Gyumri: about 3,000 personnel", "text": "The Russian 102nd Military Base at Gyumri, Armenia, is part of the joint CIS air-defence system and is under the Southern Military District. Russia's access to the base runs through Georgian land and airspace under a 2006 agreement.", "source": "Wikipedia (Russian 102nd Military Base, 2026)", "date": "2026", "url": null, "connector": "reference"}, {"category": "milops", "label": "Russian bases in Central Asia and the Caucasus (public list)", "text": "Russia has the 201st Military Base in Tajikistan (about 5,500 personnel in a 2016 list), the Kant air base in Kyrgyzstan (an agreement reported to run to 2027), the 7th Military Base in Abkhazia (about 4,500 personnel) and the 4th in South Ossetia. Georgia disputes the status of Abkhazia and South Ossetia.", "source": "Wikipedia (List of Russian military bases abroad); TASS; older lists", "date": "2016-2026", "url": null, "connector": "reference"}], "cyber": [{"category": "cyber", "label": "GRU units 26165 and 74455 attributed by governments", "text": "Unit 26165 (APT28, Fancy Bear) and Unit 74455 (APT44, Sandworm) sit in the GRU's Sixth Directorate. Unit 74455's headquarters is at Khimki. The US indicted six of its officers in October 2020. An April 2026 multinational investigation found Unit 26165 had used vulnerable routers to steal military and government data.", "source": "CRS R46616; Wikipedia (Sandworm); Euronews (8 Apr 2026)", "date": "2020-2026", "url": null, "connector": "reference"}, {"category": "cyber", "label": "Baltic undersea cable incidents attributed to Russian-linked ships (2024-2025)", "text": "Finnish investigators assessed that a Chinese-registered ship with a Russian crew damaged subsea data cables and a gas pipeline in the Baltic with its anchor; a tanker was assessed to have dragged its anchor across a cable in the Gulf of Finland (CSIS, 2025).", "source": "CSIS (2025 analysis)", "date": "2024-2025", "url": null, "connector": "reference"}], "scs": [{"category": "scs", "label": "Northern Sea Route: 37 million tonnes in 2025; 2026 expected above 40 million", "text": "Cargo on the Northern Sea Route fell 2.3% to 37 million tonnes in 2025, with a record 103 transit passages. Cargo for 2026 is forecast to exceed 40 million tonnes, driven by China-Russia trade and Asia-Europe container services.", "source": "Carnegie Endowment (Sep 2026); High North News (2026)", "date": "2025-2026", "url": null, "connector": "reference"}, {"category": "scs", "label": "Vilkitsky Strait: shadow-fleet tankers held back by ice (summer 2026)", "text": "At least nine shadow-fleet tankers gathered in the Kara Sea in late July 2026 waiting to pass the Vilkitsky Strait. Only one Arc4-class tanker got through; the others went north of Severnaya Zemlya. Icebreakers Ural and Sibir were operating in the strait.", "source": "Bellona (Sep 2026)", "date": "Jul-Aug 2026", "url": null, "connector": "reference"}, {"category": "scs", "label": "First Russian naval passage of the Shokalsky Strait (September 2026)", "text": "A Northern Fleet expedition from Severomorsk made the first passage of the Shokalsky Strait between the Laptev and Kara seas, carrying out ice reconnaissance and rescue drills (Barents Observer, 30 Sep 2026).", "source": "Barents Observer (30 Sep 2026)", "date": "Sep 2026", "url": null, "connector": "reference"}], "econ": [{"category": "econ", "label": "Nord Stream 1 and 2 mothballed; EU ban on their use (18 July 2025)", "text": "Both Nord Stream lines are mothballed. Nord Stream 2 never delivered gas, and Nord Stream 1 was ruptured by explosions on 26 September 2022. The EU's sanctions package of 18 July 2025 bans the direct and indirect use of the pipelines.", "source": "Wikipedia (Nord Stream 2; Nord Stream 1); Global Energy Monitor", "date": "2022-2025", "url": null, "connector": "reference"}, {"category": "econ", "label": "Power of Siberia 2: no final investment decision; price deadlock (July 2026)", "text": "Power of Siberia 2 would carry about 50 bcm a year, but it has no final investment decision. An Asia Times analysis of July 2026 describes a price deadlock with Beijing. Power of Siberia 1 carries about 38 bcm a year under a 30-year contract.", "source": "Asia Times (Jul 2026, via press analyses); CRS In Focus", "date": "Jul 2026", "url": null, "connector": "reference"}, {"category": "econ", "label": "Russian LNG: Arctic LNG 2 cargoes reach China's Beihai terminal (June 2026)", "text": "Yamal LNG trains 1 to 3 run near nameplate, while train 4 is stalled by sanctions. By June 2026, 41 cargoes from the sanctioned Arctic LNG 2 had reached China's Beihai terminal.", "source": "Seala AI (2026); Carnegie / OIES analyses (2026)", "date": "2026", "url": null, "connector": "reference"}, {"category": "econ", "label": "Druzhba oil to Hungary and Slovakia: stopped 27 January, restarted 22 April 2026 (reported)", "text": "Press analysis reports that flows through the Druzhba pipeline to Hungary and Slovakia stopped on 27 January 2026 and restarted on 22 April 2026. Not verified in this build.", "source": "Press analysis (Apr 2026); not verified in this build", "date": "Jan-Apr 2026", "url": null, "connector": "reference"}], "space": [{"category": "space", "label": "Plesetsk: 1,687 launches since 1966; a Glonass-K1 launch on 17 September 2026", "text": "Plesetsk, in Arkhangelsk oblast, has hosted 1,687 launches since 1966. Site 43 launched a Glonass-K1 on 17 September 2026, and Site 35 launched an Angara on 23 April 2026.", "source": "Wikipedia (Plesetsk Cosmodrome Sites 43 and 35); Plesetsk overview (2026)", "date": "2026", "url": null, "connector": "reference"}, {"category": "space", "label": "Baikonur: Russia leases the cosmodrome from Kazakhstan, which charges rent", "text": "Most Soviet launches were made from Baikonur in Kazakhstan. After independence, Kazakhstan began charging Russia rent, and Russia built Plesetsk to reduce its dependence. Soyuz launches from Baikonur continue in 2026.", "source": "Wikipedia (Plesetsk Cosmodrome; List of R-7 launches)", "date": "2026", "url": null, "connector": "reference"}], "wellbeing": [{"category": "wellbeing", "label": "World Happiness Report 2026: ranks for the 15 states not verified in this build", "text": "The annual report ranks countries for wellbeing. The ranks for these states were not verified in this build; check the report directly.", "source": "World Happiness Report (annual); not verified in this build", "date": "Mar 2026", "url": null, "connector": "reference"}], "darkweb": [{"category": "darkweb", "label": "Ransomware claims for the 15 states are group claims, not confirmed victims", "text": "The Ransomware.live feed filtered to these states' country codes lists claims made by groups on their own leak sites. Each claim is labelled unverified.", "source": "Ransomware.live (v2 feed)", "date": "live", "url": null, "connector": "reference"}]}, "markers": [{"id": "cap_moscow", "name": "Moscow (capital, Russia)", "lat": 55.7558, "lon": 37.6173, "cat": "capital", "note": "Capital of Russia. The Ministry of Defence and the General Staff are in Moscow (public information).", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_kyiv", "name": "Kyiv (capital, Ukraine)", "lat": 50.4501, "lon": 30.5234, "cat": "capital", "note": "Capital of Ukraine.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_minsk", "name": "Minsk (capital, Belarus)", "lat": 53.9045, "lon": 27.5615, "cat": "capital", "note": "Capital of Belarus.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_chisinau", "name": "Chișinău (capital, Moldova)", "lat": 47.0105, "lon": 28.8638, "cat": "capital", "note": "Capital of Moldova. Transnistria, east of the Dniester, is outside central control (see flashpoints).", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_tbilisi", "name": "Tbilisi (capital, Georgia)", "lat": 41.7151, "lon": 44.8271, "cat": "capital", "note": "Capital of Georgia.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_yerevan", "name": "Yerevan (capital, Armenia)", "lat": 40.1792, "lon": 44.4991, "cat": "capital", "note": "Capital of Armenia. A Russian air base is at Erebuni, near the city (see foreign bases).", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_baku", "name": "Baku (capital, Azerbaijan)", "lat": 40.4093, "lon": 49.8671, "cat": "capital", "note": "Capital of Azerbaijan.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_astana", "name": "Astana (capital, Kazakhstan)", "lat": 51.1694, "lon": 71.4491, "cat": "capital", "note": "Capital of Kazakhstan.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_tashkent", "name": "Tashkent (capital, Uzbekistan)", "lat": 41.2995, "lon": 69.2401, "cat": "capital", "note": "Capital of Uzbekistan.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_ashgabat", "name": "Ashgabat (capital, Turkmenistan)", "lat": 37.9601, "lon": 58.3261, "cat": "capital", "note": "Capital of Turkmenistan.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_bishkek", "name": "Bishkek (capital, Kyrgyzstan)", "lat": 42.8746, "lon": 74.5698, "cat": "capital", "note": "Capital of Kyrgyzstan. The Kant air base is about 20 km east of the city (see foreign bases).", "source": "TASS (Russian military bases abroad)", "date": "", "linked_items": []}, {"id": "cap_dushanbe", "name": "Dushanbe (capital, Tajikistan)", "lat": 38.5598, "lon": 68.787, "cat": "capital", "note": "Capital of Tajikistan. The Russian 201st Military Base is here.", "source": "Wikipedia (List of Russian military bases abroad)", "date": "", "linked_items": []}, {"id": "cap_tallinn", "name": "Tallinn (capital, Estonia)", "lat": 59.437, "lon": 24.7536, "cat": "capital", "note": "Capital of Estonia.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_riga", "name": "Riga (capital, Latvia)", "lat": 56.9496, "lon": 24.1052, "cat": "capital", "note": "Capital of Latvia.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_vilnius", "name": "Vilnius (capital, Lithuania)", "lat": 54.6872, "lon": 25.2797, "cat": "capital", "note": "Capital of Lithuania.", "source": "public information", "date": "", "linked_items": []}, {"id": "cap_simferopol", "name": "Simferopol (capital of Crimea, Ukraine; occupied)", "lat": 44.9521, "lon": 34.1024, "cat": "capital", "note": "Capital of the Crimea, Ukrainian territory occupied by Russia since 2014. Most states do not recognise Russia's annexation.", "source": "public information", "date": "", "linked_items": []}, {"id": "gyumri_102", "name": "102nd Military Base (Gyumri, Armenia): Russian ground base", "lat": 40.793, "lon": 43.845, "cat": "foreign_base", "note": "About 3,000 personnel reported (Wikipedia, 2026). Part of the joint CIS air-defence system; under the Southern Military District (Wikipedia). Position approximate.", "source": "Wikipedia (Russian 102nd Military Base, 2026)", "date": "", "linked_items": []}, {"id": "erebuni_3624", "name": "3624th Air Base (Erebuni, Yerevan, Armenia)", "lat": 40.1472, "lon": 44.3959, "cat": "foreign_base", "note": "Air base near Yerevan (Wikipedia, List of Russian military bases abroad). Position approximate.", "source": "Wikipedia (List of Russian military bases abroad)", "date": "", "linked_items": []}, {"id": "kant", "name": "Kant Air Base (Kyrgyzstan): 999th Air Base, CSTO rapid-reaction air component", "lat": 42.85, "lon": 74.85, "cat": "foreign_base", "note": "About 20 km east of Bishkek (TASS). The 2003 agreement is reported to run to 2027 (older source). Position approximate.", "source": "TASS (Russian military bases abroad); Soldiers Project (older)", "date": "", "linked_items": []}, {"id": "issyk_kul", "name": "954th test base (Lake Issyk-Kul, Kyrgyzstan): naval test station (not verified in this build)", "lat": 42.45, "lon": 77.5, "cat": "foreign_base", "note": "Listed in the Russian base list (Wikipedia). Position approximate; not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "dushanbe_201", "name": "201st Military Base (Dushanbe, Tajikistan): Russian ground base", "lat": 38.5598, "lon": 68.787, "cat": "foreign_base", "note": "Also has garrisons at Qurghonteppa and Kulab; joint use of the Ayni air base (Wikipedia, List of Russian military bases abroad). Position approximate (city).", "source": "Wikipedia (List of Russian military bases abroad)", "date": "", "linked_items": []}, {"id": "ayni", "name": "Ayni Air Base (Tajikistan): joint use with Russia (not verified in this build)", "lat": 38.98, "lon": 68.9, "cat": "foreign_base", "note": "Listed in the Russian base list (Wikipedia). Position approximate; not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "okno", "name": "Okno space surveillance station (near Nurek, Tajikistan) (not verified in this build)", "lat": 38.4, "lon": 69.4, "cat": "foreign_base", "note": "Listed in the Russian base list (Wikipedia). Position approximate; not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "gudauta_7", "name": "7th Military Base (Gudauta, Abkhazia, Georgia): up to about 4,500 personnel", "lat": 43.1, "lon": 40.6, "cat": "foreign_base", "note": "Georgia disputes the status of Abkhazia; Russia maintains the base (Wikipedia, List of Russian military bases abroad). Position approximate.", "source": "Wikipedia (List of Russian military bases abroad)", "date": "", "linked_items": []}, {"id": "tskhinvali_4", "name": "4th Military Base (Tskhinvali area, South Ossetia, Georgia): up to 3,500 troops", "lat": 42.22, "lon": 44.0, "cat": "foreign_base", "note": "Georgia disputes the status of South Ossetia (Wikipedia, List of Russian military bases abroad). Position approximate.", "source": "Wikipedia (List of Russian military bases abroad)", "date": "", "linked_items": []}, {"id": "cobasna", "name": "Cobasna ammunition depot (Transnistria, Moldova): Russian operational group (not verified in this build)", "lat": 47.58, "lon": 29.03, "cat": "foreign_base", "note": "Russian forces guard the depot in the Transnistria region (Wikipedia list). Position approximate; not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "baranavichy", "name": "Baranavichy (Belarus): Volga-type radar station and joint air-training centre", "lat": 53.13, "lon": 26.0, "cat": "foreign_base", "note": "Radar station and a joint Air Force and air-defence training centre (Wikipedia list; Brilliant Maps). Position approximate.", "source": "Wikipedia (List of Russian military bases abroad); Brilliant Maps", "date": "", "linked_items": []}, {"id": "vileyka", "name": "Vileyka (Belarus): naval communications centre (not verified in this build)", "lat": 54.48, "lon": 26.9, "cat": "foreign_base", "note": "Listed in the Russian base list (Wikipedia). Position approximate; not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "belbek", "name": "Belbek Air Base (Crimea, occupied Ukraine): Russian air base", "lat": 44.69, "lon": 33.57, "cat": "foreign_base", "note": "Russian air base on Ukrainian territory, occupied since 2014; Crimea had at least five Russian air bases (Brilliant Maps, 2016 data). Position approximate.", "source": "Brilliant Maps (2016 data); public information", "date": "", "linked_items": []}, {"id": "hmeimim", "name": "Hmeimim Air Base (Latakia, Syria): Russian air base", "lat": 35.4094, "lon": 35.9483, "cat": "foreign_base", "note": "The 9 Aug 2026 Russia-Syria MoU makes it a joint training and capacity-building centre; civilian facilities go to Syria within three months (Al Jazeera, Aug 2026).", "source": "Al Jazeera (9 Aug 2026); Moscow Times (9 Aug 2026)", "date": "", "linked_items": []}, {"id": "tartus", "name": "Tartus naval facility (Syria): Russian naval logistics base", "lat": 34.8925, "lon": 35.88, "cat": "foreign_base", "note": "Under the Aug 2026 MoU it becomes a joint training centre; Syria takes over the commercial pier (Al Jazeera, Aug 2026). Position approximate.", "source": "Al Jazeera (9 Aug 2026); Wikipedia (Tartus naval base)", "date": "", "linked_items": []}, {"id": "engels", "name": "Engels-2 Air Base (Saratov): Tu-160 and Tu-95MS strategic bombers", "lat": 51.4811, "lon": 46.2106, "cat": "air_base", "note": "Russia's only operating base for the Tu-160 (Wikipedia). Reported Ukrainian drone strikes on 16-17 Jul, 2 Aug and 28 Aug 2026 (Ukraine's claims; satellite imagery of a damaged Tu-95MS). Russia began building 16-17 hardened bomber shelters in June-September 2026 (AviVector; NV).", "source": "Wikipedia (Engels-2); Global Military (Aug 2026); NV / AviVector (Sep 2026); migflug (Aug 2026)", "date": "", "linked_items": []}, {"id": "olenya", "name": "Olenya Air Base (Murmansk oblast): Tu-95 strategic bombers", "lat": 68.15, "lon": 33.45, "cat": "air_base", "note": "Named among Russia's strategic air bases in 2026 reporting (The Project Leaflet, 2026). Position approximate.", "source": "The Project Leaflet (2026)", "date": "", "linked_items": []}, {"id": "ukrainka", "name": "Ukrainka Air Base (Amur oblast): Tu-95MS strategic bombers", "lat": 51.15, "lon": 128.5, "cat": "air_base", "note": "A Tu-95 flying a strike mission from Ukrainka faces round trips of about 23 hours with tanker support (The Project Leaflet, 2026). Position approximate.", "source": "GlobalSecurity (bomber bases); The Project Leaflet (2026)", "date": "", "linked_items": []}, {"id": "belaya", "name": "Belaya Air Base (Irkutsk oblast): Tu-95MS and Tu-22M3", "lat": 52.75, "lon": 103.6, "cat": "air_base", "note": "Three to four Tu-95MS and four Tu-22M3 confirmed by satellite (The Project Leaflet, 2026). Position approximate.", "source": "GlobalSecurity (bomber bases); The Project Leaflet (2026)", "date": "", "linked_items": []}, {"id": "shaykovka", "name": "Shaykovka Air Base (Kaluga oblast)", "lat": 54.25, "lon": 34.33, "cat": "air_base", "note": "Listed in the bomber-base survey (GlobalSecurity). Position approximate.", "source": "GlobalSecurity (bomber bases)", "date": "", "linked_items": []}, {"id": "mozdok", "name": "Mozdok Air Base (North Ossetia): Tu-95MS", "lat": 43.73, "lon": 44.68, "cat": "air_base", "note": "Listed in the bomber-base survey (GlobalSecurity). Position approximate.", "source": "GlobalSecurity (bomber bases)", "date": "", "linked_items": []}, {"id": "dyagilevo", "name": "Dyagilevo Air Base (Ryazan oblast)", "lat": 54.6, "lon": 39.7, "cat": "air_base", "note": "Attacked on 5 December 2022, with two Tu-95 aircraft damaged (Wikipedia; Russian MoD acknowledged). Position approximate.", "source": "Wikipedia (Dyagilevo and Engels air bases attacks)", "date": "", "linked_items": []}, {"id": "chernyakhovsk", "name": "Chernyakhovsk Air Base (Kaliningrad oblast)", "lat": 54.6, "lon": 21.8, "cat": "air_base", "note": "Listed in the bomber-base survey (GlobalSecurity; older). Position approximate.", "source": "GlobalSecurity (bomber bases)", "date": "", "linked_items": []}, {"id": "baranovichi_air", "name": "Baranovichi Air Base (Belarus): Tu-22 bombers", "lat": 53.67, "lon": 23.83, "cat": "air_base", "note": "Listed in the bomber-base survey (GlobalSecurity). Position approximate.", "source": "GlobalSecurity (bomber bases)", "date": "", "linked_items": []}, {"id": "severomorsk", "name": "Severomorsk (Kola Bay): Northern Fleet headquarters", "lat": 69.067, "lon": 33.417, "cat": "navy_base", "note": "Northern Fleet headquarters since 1947; the largest dry dock on the Kola Peninsula (Global Military, Aug 2026).", "source": "Global Military (14 Aug 2026)", "date": "", "linked_items": []}, {"id": "gadzhiyevo", "name": "Gadzhiyevo (Sayda Inlet): strategic submarine base (Delta IV and Borei)", "lat": 69.25, "lon": 33.33, "cat": "submarine_base", "note": "Five Project 667BDRM Delta IV boats and the lead Borei, Yury Dolgorukiy, are based here (russianforces.org, 2026). Position approximate.", "source": "russianforces.org (Navy); Global Military (2026)", "date": "", "linked_items": []}, {"id": "nerpichya", "name": "Nerpichya (Zapadnaya Litsa, Kola): submarine base, largest in Russia", "lat": 69.45, "lon": 32.3667, "cat": "submarine_base", "note": "Largest Russian submarine base, with four associated facilities (GlobalSecurity; older source). Position approximate.", "source": "GlobalSecurity (Nerpichya; older)", "date": "", "linked_items": []}, {"id": "vidyayevo", "name": "Vidyayevo (Kola): submarine base (Akula class)", "lat": 69.7, "lon": 33.6, "cat": "submarine_base", "note": "Akula-class submarines are based here (Global Military, Aug 2026). Position approximate.", "source": "Global Military (Aug 2026)", "date": "", "linked_items": []}, {"id": "vilyuchinsk", "name": "Vilyuchinsk (Kamchatka): Pacific strategic submarine base (25th Division, Borei)", "lat": 52.93, "lon": 158.4, "cat": "submarine_base", "note": "The 16th Squadron of Pacific strategic submarines is based here; the 25th Submarine Division has Borei and Borei-A boats (The Naval Review, 2026). Position approximate.", "source": "The Naval Review (2026); Global Military (2026)", "date": "", "linked_items": []}, {"id": "kronstadt", "name": "Kronstadt (near St Petersburg): Baltic Fleet 123rd Submarine Brigade", "lat": 59.99, "lon": 29.77, "cat": "submarine_base", "note": "The Baltic Fleet's own submarine force is small and centred on the 123rd Brigade (The Naval Review, 2026). Position approximate.", "source": "The Naval Review (2026); Global Military (2026)", "date": "", "linked_items": []}, {"id": "vladivostok", "name": "Vladivostok: Pacific Fleet headquarters", "lat": 43.1155, "lon": 131.8855, "cat": "navy_base", "note": "Pacific Fleet headquarters (Global Military, Sep 2026). The 19th Submarine Brigade (Improved Kilo) operates from Malyy Ulyss Bay (The Naval Review, 2026).", "source": "Global Military (Sep 2026); The Naval Review (2026)", "date": "", "linked_items": []}, {"id": "baltiysk", "name": "Baltiysk (Kaliningrad): Baltic Fleet main operating base", "lat": 54.65, "lon": 19.9, "cat": "navy_base", "note": "Main operating base; the Baltic Fleet headquarters is in Kaliningrad (Global Military, Sep 2026; Russianships, Oct 2026). Position approximate.", "source": "Global Military (Sep 2026); Russianships (Oct 2026)", "date": "", "linked_items": []}, {"id": "novorossiysk", "name": "Novorossiysk: Black Sea Fleet naval base", "lat": 44.7231, "lon": 37.7689, "cat": "navy_base", "note": "Main operating base (Global Military, Sep 2026). Submarines assigned to the 4th Independent Submarine Brigade (The Naval Review, 2026). Position approximate.", "source": "Global Military (Sep 2026); The Naval Review (2026)", "date": "", "linked_items": []}, {"id": "sevastopol", "name": "Sevastopol (Crimea, occupied): Black Sea Fleet headquarters", "lat": 44.6166, "lon": 33.5254, "cat": "navy_base", "note": "Black Sea Fleet headquarters on Ukrainian territory occupied since 2014; most states do not recognise the annexation (Global Military, 2026; public information).", "source": "Global Military (2026); public information", "date": "", "linked_items": []}, {"id": "kaspiysk", "name": "Kaspiysk (Dagestan): Caspian Flotilla headquarters", "lat": 42.8833, "lon": 47.6333, "cat": "navy_base", "note": "Caspian Flotilla headquarters (Global Military, Sep 2026). Position approximate.", "source": "Global Military (Sep 2026)", "date": "", "linked_items": []}, {"id": "petropavlovsk", "name": "Petropavlovsk-Kamchatsky (Rybachy): Pacific Fleet base", "lat": 53.0, "lon": 158.65, "cat": "navy_base", "note": "Kamchatka naval base area (Global Military, Sep 2026). Position approximate.", "source": "Global Military (Sep 2026)", "date": "", "linked_items": []}, {"id": "sevmash", "name": "Sevmash shipyard (Severodvinsk): nuclear-submarine construction and naval arsenal", "lat": 64.5635, "lon": 39.8307, "cat": "defense_industry", "note": "Builds the Yasen-class attack submarines; the Navy plans 12-14 Yasen boats by 2035 (Wikipedia, Future of the Russian Navy; Moiseyev, 2026). Position approximate.", "source": "Global Military (Severodvinsk, 2026); Wikipedia (Future of the Russian Navy)", "date": "", "linked_items": []}, {"id": "admiralty", "name": "Admiralty Shipyards (St Petersburg): builder of the Kilo-class submarines", "lat": 59.928, "lon": 30.26, "cat": "defense_industry", "note": "Built the Kilo-class boats delivered to Vietnam (Wikipedia, Vietnamese submarine Hai Phong). Position approximate.", "source": "Wikipedia (Vietnamese submarine Hai Phong)", "date": "", "linked_items": []}, {"id": "tupolev_kazan", "name": "Tupolev Kazan Aviation Plant (Kazan): Tu-160M production", "lat": 55.81, "lon": 49.18, "cat": "defense_industry", "note": "Two Tu-160M delivered by 2025 against 50 promised in 2015; seven airframes reported in assembly (leaked documents, Apr 2026; The Project Leaflet, 2026). Position approximate.", "source": "The Project Leaflet (2026); leaked procurement reports (Apr 2026)", "date": "", "linked_items": []}, {"id": "uralvagonzavod", "name": "Uralvagonzavod (Nizhny Tagil): tank plant (not verified in this build)", "lat": 57.91, "lon": 59.95, "cat": "defense_industry", "note": "Public information. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "kalashnikov", "name": "Kalashnikov (Izhevsk): small-arms plant (not verified in this build)", "lat": 56.85, "lon": 53.21, "cat": "defense_industry", "note": "Public information. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "kozelsk", "name": "Kozelsk (Kaluga oblast): 28th Guards Missile Division (Yars)", "lat": 54.03, "lon": 35.77, "cat": "missile_base", "note": "Yars deployment was completed at the end of 2025 (russianforces.org, Dec 2025; Wikipedia). Position approximate.", "source": "russianforces.org (Dec 2025); Wikipedia (28th Guards Rocket Division)", "date": "", "linked_items": []}, {"id": "tatishchevo", "name": "Tatishchevo (Saratov oblast): 60th Missile Division (silo field)", "lat": 51.67, "lon": 45.6, "cat": "missile_base", "note": "Silo-based Yars (SS-27 Mod 1) deployment was completed in 2012; upgrades to the silos began in 2025 (Bulletin of the Atomic Scientists, 2026). Position approximate.", "source": "Bulletin of the Atomic Scientists (2026)", "date": "", "linked_items": []}, {"id": "teykovo", "name": "Teykovo (Ivanovo oblast): 54th Guards Missile Division (road-mobile)", "lat": 56.85, "lon": 40.5, "cat": "missile_base", "note": "Road-mobile Yars and Topol-M (Bulletin of the Atomic Scientists, 2026). Position approximate.", "source": "Bulletin of the Atomic Scientists (2026)", "date": "", "linked_items": []}, {"id": "barnaul", "name": "Barnaul (Altai krai): 35th Missile Division (road-mobile Yars)", "lat": 53.35, "lon": 83.78, "cat": "missile_base", "note": "Yars regiments (Wikipedia, 35th Rocket Division). Position approximate.", "source": "Wikipedia (35th Rocket Division)", "date": "", "linked_items": []}, {"id": "vypolzovo", "name": "Vypolzovo (Tomsk oblast): 7th Missile Division (Topol-M and Yars) (not verified in this build)", "lat": 56.4, "lon": 85.0, "cat": "missile_base", "note": "18 Topol-M and 18 Yars reported (Bulletin of the Atomic Scientists, 2026). Position approximate; not verified in this build.", "source": "Bulletin of the Atomic Scientists (2026); not verified in this build", "date": "", "linked_items": []}, {"id": "uzhur", "name": "Uzhur (Krasnoyarsk krai): 62nd Missile Division; first Sarmat regiment due by the end of 2026", "lat": 55.3, "lon": 89.8, "cat": "missile_base", "note": "The Sarmat passed a test on 12 May 2026; the first regiment is planned here by the end of 2026 (Moscow Times; IISS; TWZ). Position approximate.", "source": "Moscow Times (12 May 2026); IISS (May 2026); TWZ (2026)", "date": "", "linked_items": []}, {"id": "dombarovsky", "name": "Dombarovsky (Yasny, Orenburg oblast): Avangard hypersonic glide vehicles; Sarmat planned", "lat": 50.9, "lon": 59.7, "cat": "missile_base", "note": "Twelve Avangard systems are reported deployed here (Bulletin of the Atomic Scientists, 2026). Sources conflict on the site of the 12 May 2026 Sarmat launch (Plesetsk or a silo of this division). Position approximate.", "source": "Bulletin of the Atomic Scientists (2026); russianforces.org (2026)", "date": "", "linked_items": []}, {"id": "kapustin_yar", "name": "Kapustin Yar (Astrakhan oblast): missile test range (not verified in this build)", "lat": 48.56, "lon": 46.3, "cat": "missile_base", "note": "Public information. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "sary_shagan", "name": "Sary Shagan (Kazakhstan): anti-ballistic missile test range operated by Russia (not verified in this build)", "lat": 46.2, "lon": 74.5, "cat": "missile_base", "note": "Listed in the Russian base list (Wikipedia). Position approximate; not verified in this build.", "source": "Wikipedia (List of Russian military bases abroad); not verified in this build", "date": "", "linked_items": []}, {"id": "mayak", "name": "Mayak (Ozyorsk, Chelyabinsk oblast): plutonium production and the RT-1 reprocessing plant", "lat": 55.75, "lon": 60.7, "cat": "nuclear_site", "note": "Russia's plutonium was produced here (World Nuclear Association, 2026). Also called Chelyabinsk-65. Position approximate.", "source": "World Nuclear Association (2026)", "date": "", "linked_items": []}, {"id": "seversk", "name": "Siberian Chemical Combine (Seversk, Tomsk oblast): plutonium production", "lat": 56.6, "lon": 84.85, "cat": "nuclear_site", "note": "One of the three plutonium-production sites (World Nuclear Association, 2026). Also called Tomsk-7. Position approximate.", "source": "World Nuclear Association (2026)", "date": "", "linked_items": []}, {"id": "zheleznogorsk", "name": "Mining and Chemical Combine (Zheleznogorsk, Krasnoyarsk krai): used-fuel storage", "lat": 56.25, "lon": 93.53, "cat": "nuclear_site", "note": "Centralised wet and dry storage for VVER and RBMK used fuel; a plutonium production site (World Nuclear Association, 2026). Also called Krasnoyarsk-26. Position approximate.", "source": "World Nuclear Association (2026)", "date": "", "linked_items": []}, {"id": "sarov", "name": "Sarov (VNIIEF): nuclear weapons design laboratory (not verified in this build)", "lat": 54.93, "lon": 43.32, "cat": "nuclear_site", "note": "Public information. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "snezhinsk", "name": "Snezhinsk (VNIITF): nuclear weapons design laboratory (not verified in this build)", "lat": 56.08, "lon": 60.73, "cat": "nuclear_site", "note": "Public information. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "novaya_zemlya", "name": "Novaya Zemlya (Arctic): former nuclear test sites, Pankovo and Rogachevo (not verified in this build)", "lat": 73.45, "lon": 54.8, "cat": "nuclear_site", "note": "Public information: former Soviet and Russian test sites. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "chernobyl", "name": "Chernobyl Nuclear Power Plant (Ukraine): decommissioned", "lat": 51.389, "lon": 30.099, "cat": "nuclear_site", "note": "Shut down after the 1986 accident; now decommissioned (public information). Position approximate.", "source": "public information", "date": "", "linked_items": []}, {"id": "plesetsk", "name": "Plesetsk Cosmodrome (Mirny, Arkhangelsk oblast): military and navigation launches", "lat": 62.925, "lon": 40.577, "cat": "space_site", "note": "1,687 launches since 1966 (Plesetsk overview, 2026). Site 43 (Soyuz, Glonass) last launched on 17 Sep 2026; Site 35 (Angara) on 23 Apr 2026 (Wikipedia; Rocketlaunch, 2026). Position approximate.", "source": "Wikipedia (Plesetsk Cosmodrome Site 43; Site 35); Rocketlaunch (2026)", "date": "", "linked_items": []}, {"id": "vostochny", "name": "Vostochny Cosmodrome (Amur oblast)", "lat": 51.884, "lon": 128.333, "cat": "space_site", "note": "Angara A5M and Soyuz-2.1b launches are scheduled here (NextSpaceflight, 2026). Position approximate.", "source": "NextSpaceflight (2026)", "date": "", "linked_items": []}, {"id": "baikonur", "name": "Baikonur Cosmodrome (Kazakhstan; leased by Russia)", "lat": 45.965, "lon": 63.305, "cat": "space_site", "note": "Russia leases the site from Kazakhstan, which charges rent (Wikipedia). Soyuz launches continue from Site 31/6 in 2026 (NextSpaceflight; Wikipedia). Position approximate.", "source": "Wikipedia (Plesetsk Cosmodrome; List of R-7 launches 2025-2029)", "date": "", "linked_items": []}, {"id": "gru_74455", "name": "GRU Unit 74455 (Sandworm / APT44): headquarters in Khimki", "lat": 55.895, "lon": 37.445, "cat": "cyber_hub", "note": "Headquarters at 22 Kirova Street, Khimki (Wikipedia, Sandworm). A US grand jury indicted six officers of the unit in October 2020 (Wikipedia; CRS R46616). Position approximate.", "source": "Wikipedia (Sandworm); CRS R46616", "date": "", "linked_items": []}, {"id": "gru_26165", "name": "GRU Unit 26165 (APT28 / Fancy Bear): Sixth Directorate, Moscow (location approximate; not verified in this build)", "lat": 55.75, "lon": 37.62, "cat": "cyber_hub", "note": "Attributed by governments (CRS R46616; joint advisories). An April 2026 multinational investigation found the unit used vulnerable routers to steal military and government data (Euronews, Apr 2026). The unit's exact location is not verified.", "source": "CRS R46616; Euronews (8 Apr 2026)", "date": "", "linked_items": []}, {"id": "gru_aquarium", "name": "GRU headquarters ('the Aquarium'), Moscow (location approximate; not verified in this build)", "lat": 55.8, "lon": 37.53, "cat": "cyber_hub", "note": "Psychological-operations unit 54777 is reported to sit in the GRU headquarters (Wikipedia, GRU Unit 54777). Position approximate; not verified in this build.", "source": "Wikipedia (GRU Unit 54777); not verified in this build", "date": "", "linked_items": []}, {"id": "mod_moscow", "name": "Ministry of Defence (Moscow, Frunzenskaya): headquarters (not verified in this build)", "lat": 55.725, "lon": 37.6, "cat": "cantonment", "note": "Public information; position approximate. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "southern_md", "name": "Southern Military District headquarters (Rostov-on-Don)", "lat": 47.2357, "lon": 39.7015, "cat": "cantonment", "note": "The 102nd base in Armenia falls under this command (Wikipedia). Position approximate.", "source": "Wikipedia (Russian 102nd Military Base)", "date": "", "linked_items": []}, {"id": "znpp", "name": "Zaporizhzhia Nuclear Power Plant (occupied by Russia since 3 March 2022): reactors shut, cooled; repeated loss of off-site power", "lat": 47.51, "lon": 34.585, "cat": "flashpoint", "note": "The 26th complete loss of off-site power since the war began (World Nuclear Association, Oct 2026). The six reactors are shut but must be cooled (IAEA). Ukraine and Russia dispute responsibility for the strikes. Position approximate.", "source": "World Nuclear Association (Oct 2026); IAEA (Update 326, Nov 2025); Yahoo News (IAEA, 2026)", "date": "", "linked_items": []}, {"id": "pokrovsk", "name": "Pokrovsk (Donetsk oblast): fighting on the front line (press reporting, 2026)", "lat": 48.28, "lon": 37.18, "cat": "flashpoint", "note": "Russian forces have taken most of Pokrovsk (defconlevel; press reporting, May 2026). The front changes quickly; check the latest reports. Position approximate.", "source": "defconlevel (May 2026); press reporting", "date": "", "linked_items": []}, {"id": "kerch_fp", "name": "Kerch area (Crimea): Ukrainian strikes on logistics, radars and air defence (June 2026)", "lat": 45.36, "lon": 36.47, "cat": "flashpoint", "note": "Strikes on radars and a port in the Kerch area, reported by the Ukrainian Unmanned Systems Forces and assessed by Critical Threats (21 Jun 2026). Reported; not independently confirmed in this build.", "source": "Critical Threats (21 Jun 2026)", "date": "", "linked_items": []}, {"id": "kyiv_bridge", "name": "Kyiv Southern Bridge (Dnipro): repeated drone strikes, 1-2 October 2026", "lat": 50.43, "lon": 30.52, "cat": "flashpoint", "note": "Four waves of drone strikes on the bridge (Kyiv's mayor; Critical Threats, Oct 2026). The Russian MoD acknowledged striking a road-rail bridge in Kyiv on the night of 1 October. Reported.", "source": "Critical Threats (2 Oct 2026)", "date": "", "linked_items": []}, {"id": "tiraspol", "name": "Transnistria (Tiraspol, Moldova): unrecognised region with Russian forces", "lat": 46.8402, "lon": 29.643, "cat": "flashpoint", "note": "Russian forces guard the Cobasna depot; Moldova's sovereignty over the region is disputed (Wikipedia list). Position approximate.", "source": "Wikipedia (List of Russian military bases abroad)", "date": "", "linked_items": []}, {"id": "abkhazia", "name": "Abkhazia (Sukhumi area, Georgia): de facto Russian presence; status disputed", "lat": 43.0, "lon": 41.0167, "cat": "flashpoint", "note": "Georgia does not recognise Abkhazia's independence; the 7th Military Base is at Gudauta (Wikipedia list). Position approximate.", "source": "Wikipedia (List of Russian military bases abroad)", "date": "", "linked_items": []}, {"id": "kurils", "name": "Kuril Islands (Iturup): Russian-administered; Japan claims them (not verified in this build)", "lat": 45.2, "lon": 147.8, "cat": "flashpoint", "note": "Public information: a long-standing sovereignty dispute between Russia and Japan. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "kerch_strait", "name": "Kerch Strait (Crimea-Russia): the sea link between the Sea of Azov and the Black Sea", "lat": 45.33, "lon": 36.55, "cat": "chokepoint", "note": "Carries Russia's ground supply lines to Crimea; Ukrainian strikes on its logistics were reported in June 2026 (Critical Threats). Position approximate.", "source": "Critical Threats (21 Jun 2026); public information", "date": "", "linked_items": []}, {"id": "bosporus", "name": "Bosporus (Istanbul): Black Sea access for the Black Sea Fleet (not verified in this build)", "lat": 41.12, "lon": 29.07, "cat": "chokepoint", "note": "Public information: transit is governed by the Montreux Convention. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "dardanelles", "name": "Dardanelles (Çanakkale): the Aegean route to the Black Sea (not verified in this build)", "lat": 40.15, "lon": 26.4, "cat": "chokepoint", "note": "Public information. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "gulf_finland", "name": "Gulf of Finland (Narva to Kronstadt approaches): Baltic Fleet access (not verified in this build)", "lat": 59.8, "lon": 26.0, "cat": "chokepoint", "note": "Public information: the Baltic Fleet's route between Kronstadt and the open Baltic. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "kara_strait", "name": "Kara Strait (Kara Gates; Northern Sea Route)", "lat": 70.6, "lon": 58.5, "cat": "chokepoint", "note": "Passage between Novaya Zemlya and the Yugorsky peninsula on the Northern Sea Route (Wikipedia). Position approximate.", "source": "Wikipedia (Kara Strait)", "date": "", "linked_items": []}, {"id": "yugorsky", "name": "Yugorsky Strait (Northern Sea Route): Kara and Pechora seas", "lat": 69.6, "lon": 59.0, "cat": "chokepoint", "note": "Narrow sound between the Kara and Pechora seas on the Northern Sea Route (Wikipedia). Position approximate.", "source": "Wikipedia (Yugorsky Strait)", "date": "", "linked_items": []}, {"id": "vilkitsky", "name": "Vilkitsky Strait (Northern Sea Route): tankers held back by ice in summer 2026", "lat": 77.95, "lon": 103.58, "cat": "chokepoint", "note": "Nine shadow-fleet tankers gathered in the Kara Sea in late July 2026; icebreakers Ural and Sibir worked the strait (Bellona, Sep 2026). Coordinates from Wikipedia.", "source": "Bellona (Sep 2026); Wikipedia (Vilkitsky Strait)", "date": "", "linked_items": []}, {"id": "shokalsky", "name": "Shokalsky Strait (Severnaya Zemlya): first naval passage (September 2026)", "lat": 79.0, "lon": 97.0, "cat": "chokepoint", "note": "Russian naval vessels passed through for the first time on the 2026 Northern Fleet expedition (Barents Observer, 30 Sep 2026). Position approximate.", "source": "Barents Observer (30 Sep 2026)", "date": "", "linked_items": []}, {"id": "bering", "name": "Bering Strait (Chukotka-Alaska): the eastern edge of the Russian Arctic route (not verified in this build)", "lat": 65.75, "lon": 191.0, "cat": "chokepoint", "note": "Public information: the strait between Chukotka and Alaska. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "laperouse", "name": "La Pérouse (Soya) Strait (Sakhalin-Hokkaido) (not verified in this build)", "lat": 45.5, "lon": 141.9, "cat": "chokepoint", "note": "Public information. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "kuril_straits", "name": "Kuril Straits (Bussol and Kruzenshtern) (not verified in this build)", "lat": 46.5, "lon": 151.0, "cat": "chokepoint", "note": "Public information. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "ns1", "name": "Nord Stream 1 (start at Vyborg): ruptured in 2022 and mothballed", "lat": 60.72, "lon": 28.75, "cat": "pipeline", "note": "Ruptured by explosions on 26 September 2022 (Wikipedia). Mothballed; the EU sanctions package of 18 July 2025 bans its use (Wikipedia). Position approximate.", "source": "Wikipedia (Nord Stream 1; Nord Stream 2)", "date": "", "linked_items": []}, {"id": "ns2", "name": "Nord Stream 2 (start at Ust-Luga): never delivered gas", "lat": 59.69, "lon": 28.4, "cat": "pipeline", "note": "Never delivered gas; both Nord Stream lines are mothballed (Global Energy Monitor; Wikipedia). Position approximate.", "source": "Global Energy Monitor; Wikipedia (Nord Stream 2)", "date": "", "linked_items": []}, {"id": "ps1", "name": "Power of Siberia 1 (gas border crossing at Blagoveshchensk)", "lat": 50.28, "lon": 127.53, "cat": "pipeline", "note": "Carries about 38 bcm a year to China under a 30-year contract from 2014 (CRS In Focus; press). Position approximate.", "source": "CRS In Focus (IF12748); press reporting", "date": "", "linked_items": []}, {"id": "turkstream", "name": "TurkStream landfall (Dzhubga, Krasnodar krai): gas to Turkey and south-east Europe", "lat": 44.4, "lon": 38.5, "cat": "pipeline", "note": "Two lines under the Black Sea: one for Turkish consumers and one for southern and south-eastern Europe (press; CRS In Focus IF11177). Position approximate.", "source": "CRS In Focus (IF11177); press reporting", "date": "", "linked_items": []}, {"id": "druzhba", "name": "Druzhba pipeline (Unecha, Bryansk oblast): oil to Belarus, Ukraine and central Europe (not verified in this build)", "lat": 52.8, "lon": 32.0, "cat": "pipeline", "note": "Flows to Hungary and Slovakia stopped on 27 Jan 2026 and restarted on 22 Apr 2026 (press analysis; not verified in this build). Position approximate.", "source": "press analysis (Apr 2026); not verified in this build", "date": "", "linked_items": []}, {"id": "yamal_lng", "name": "Yamal LNG (Sabetta, Yamal peninsula): LNG plant", "lat": 71.27, "lon": 72.03, "cat": "pipeline", "note": "Trains 1-3 run near nameplate; train 4 is stalled by sanctions on Arctic-class carriers and liquefaction technology (Carnegie and OIES analyses, 2026). Position approximate.", "source": "Seala AI (2026); Carnegie / OIES analyses (2026)", "date": "", "linked_items": []}, {"id": "arctic_lng2", "name": "Arctic LNG 2 (Gydan peninsula): sanctioned; cargoes to China's Beihai terminal (June 2026)", "lat": 71.1, "lon": 72.5, "cat": "pipeline", "note": "41 cargoes had reached China's Beihai regasification terminal by June 2026 (Seala AI analysis). Position approximate.", "source": "Seala AI (2026)", "date": "", "linked_items": []}, {"id": "sakhalin2", "name": "Sakhalin-2 LNG (Prigorodnoye, Sakhalin): operating LNG plant", "lat": 46.68, "lon": 142.8, "cat": "pipeline", "note": "Operating; the sanctions perimeter left existing offtake commercially live (Seala AI; Carnegie analyses, 2026). Position approximate.", "source": "Seala AI (2026)", "date": "", "linked_items": []}, {"id": "cpc", "name": "Caspian Pipeline Consortium terminal (Novorossiysk) (not verified in this build)", "lat": 44.7, "lon": 37.78, "cat": "pipeline", "note": "Public information. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "btc", "name": "Baku-Tbilisi-Ceyhan pipeline (Sangachal, Azerbaijan): non-Russian, shown for the Caucasus (not verified in this build)", "lat": 40.2, "lon": 49.7, "cat": "pipeline", "note": "Public information. Not verified in this build.", "source": "public information (not verified in this build)", "date": "", "linked_items": []}, {"id": "wri_wri1019028", "name": "Armenian-2 (nuclear power plant, WRI)", "lat": 40.1805, "lon": 44.1498, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 375.0 MW, commissioning year 1980.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_wri1023915", "name": "Balakovo NPP (nuclear power plant, WRI)", "lat": 52.0928, "lon": 47.9539, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 4000.0 MW, commissioning year n/a. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_wri1003666", "name": "Beloyarsk (nuclear power plant, WRI)", "lat": 56.8417, "lon": 61.3225, "cat": "nuclear_site", "note": "Fast-reactor station: BN-600 and BN-800 operating; a BN-1200 unit is planned (World Nuclear Association, 2026).", "source": "World Nuclear Association (2026); WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_wri1003671", "name": "Bilibino (nuclear power plant, WRI)", "lat": 68.0503, "lon": 166.5389, "cat": "nuclear_site", "note": "Four small units. Unit 1 was shut in 2019; units 2 to 4 closed in December 2025 (World Nuclear Association reactor database).", "source": "World Nuclear Association (2026); WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_wri1003717", "name": "Kalinn NPP (nuclear power plant, WRI)", "lat": 57.905, "lon": 35.0614, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 4000.0 MW, commissioning year n/a. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_wri1003733", "name": "Kola NPP (nuclear power plant, WRI)", "lat": 67.4667, "lon": 32.4667, "cat": "nuclear_site", "note": "Kola II reached full power in March and entered commercial operation on 1 May 2026 (World Nuclear Association, 2026). Kola 3 and 4 have licence extensions to 2026 and 2039.", "source": "World Nuclear Association (2026); WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_wri1003744", "name": "Kursk (nuclear power plant, WRI)", "lat": 51.675, "lon": 35.6056, "cat": "nuclear_site", "note": "Kursk I operating; Kursk II (VVER-TOI) units are being commissioned (World Nuclear Association, 2026).", "source": "World Nuclear Association (2026); WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_wri1003749", "name": "Leningrad NPP (nuclear power plant, WRI)", "lat": 59.8528, "lon": 29.0486, "cat": "nuclear_site", "note": "RBMK units and the Leningrad II VVER-1200 units (World Nuclear Association reactor database, 2026). Some RBMK units have been closed.", "source": "World Nuclear Association (2026); WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_wri1003775", "name": "Novovoronezh (nuclear power plant, WRI)", "lat": 51.2822, "lon": 39.21, "cat": "nuclear_site", "note": "Five operating units. A drone struck a cooling tower on 7 October 2025; Russia said there was no damage (Reuters; Wikipedia). Novovoronezh II is under construction.", "source": "World Nuclear Association (2026); WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_wri1003791", "name": "Rostov NPP (nuclear power plant, WRI)", "lat": 47.5993, "lon": 42.3717, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 4000.0 MW, commissioning year 2001.0. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_wri1003812", "name": "Smolensk (nuclear power plant, WRI)", "lat": 54.1647, "lon": 33.2367, "cat": "nuclear_site", "note": "RBMK units with a life-extension programme (World Nuclear Association, 2026).", "source": "World Nuclear Association (2026); WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_wri1005111", "name": "Khmelnytska (nuclear power plant, WRI)", "lat": 50.3024, "lon": 26.6473, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2000.0 MW, commissioning year n/a. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_wri1005112", "name": "Rivne (Rouno) (nuclear power plant, WRI)", "lat": 51.3245, "lon": 25.8974, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 2835.0 MW, commissioning year n/a. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_wri1005113", "name": "South Ukraine (nuclear power plant, WRI)", "lat": 47.812, "lon": 31.22, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 3000.0 MW, commissioning year n/a. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}, {"id": "wri_wri1005114", "name": "Zaporozhye (nuclear power plant, WRI)", "lat": 47.5119, "lon": 34.5863, "cat": "nuclear_site", "note": "Listed as a nuclear plant in the WRI Global Power Plant Database: 6000.0 MW, commissioning year n/a. Operating status in 2026 is not re-verified in this build.", "source": "WRI Global Power Plant Database (CC-BY 4.0)", "date": "", "linked_items": []}], "connector_status": [{"name": "offline_seed", "configured": true, "ok": true, "message": "Offline snapshot: reference items and strategic sites only; backend not connected", "item_count": 32}], "total_items": 32};
  const CAT_META = {"military": {"label": "Military & Strategic", "color": "var(--amber)"}, "economic": {"label": "Economic & Trade", "color": "var(--cyan-h)"}, "political": {"label": "Political & Diplomatic", "color": "var(--green)"}, "hazard": {"label": "Natural Hazards", "color": "var(--violet)"}, "aviation": {"label": "Aviation & Maritime Notices", "color": "var(--violet)"}, "strategic": {"label": "Strategic & Arms Monitoring", "color": "var(--magenta)"}, "cyber": {"label": "Cyber & MSS", "color": "var(--red)"}, "space": {"label": "Space Program", "color": "var(--cyan-h)"}, "social_local": {"label": "Social pulse", "color": "var(--gold)"}, "social_global": {"label": "Social pulse (global)", "color": "var(--gold)"}};

  function escapeHtml(s){
    if(s === null || s === undefined) return "";
    return String(s).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  function project(lon, lat){
    const phi = lat * Math.PI/180, lam = lon * Math.PI/180;
    const rho = PROJ.F / Math.pow(Math.tan(Math.PI/4 + phi/2), PROJ.n);
    const th = PROJ.n * (lam - PROJ.lam0);
    const x = rho*Math.sin(th), y = PROJ.rho0 - rho*Math.cos(th);
    return [PROJ.translate[0] + x*PROJ.scale, PROJ.translate[1] - y*PROJ.scale];
  }

  const MARKER_COLOR = {"capital": "#c9a35c", "flashpoint": "#ef5354", "chokepoint": "#f59e0b", "hazard": "#58c4ff", "submarine_base": "#fb923c", "navy_base": "#f97316", "carrier_port": "#fdba74", "cantonment": "#c084fc", "nuclear_site": "#facc15", "space_site": "#06b6d4", "satellite_station": "#60a5fa", "defense_industry": "#84cc16", "pipeline": "#4ade80", "nuclear_plant": "#eab308", "air_base": "#a78bfa", "airport": "#38bdf8", "seaport": "#22c55e", "custom": "#ffffff"};

  // ---------------- 72h / All-time window ----------------
  let timeWindow = "72h";   // default per request; stays until the user picks otherwise
  const WINDOW_MS = 72 * 3600 * 1000;

  // Robust across the formats the connectors actually emit: ISO, RFC-822 (RSS
  // "published"), GDELT "YYYYMMDDTHHMMSSZ", and USGS epoch-ms as a string.
  function parseItemDate(s){
    if(!s) return null;
    if(/^\d{13}$/.test(String(s))) return new Date(parseInt(s, 10));
    const g = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/.exec(String(s));
    if(g) return new Date(Date.UTC(+g[1], +g[2]-1, +g[3], +g[4], +g[5], +g[6]));
    const d = new Date(s);
    return isNaN(d.getTime()) ? null : d;
  }
  function inWindow(it){
    if(timeWindow === "all") return true;
    const d = parseItemDate(it.date);
    // Strict by design: an item with no verifiable timestamp (background
    // reference entries dated "ongoing"/"background", or a date string that
    // can't be parsed) is NOT shown in the 72h view - claiming it's "last
    // 72 hours" news when nothing proves that would break the one rule this
    // toggle exists to enforce. Switch to All Time to see them.
    if(!d) return false;
    return (Date.now() - d.getTime()) <= WINDOW_MS;
  }
  function windowedCats(cats){
    const out = {};
    Object.keys(cats).forEach(function(k){ out[k] = (cats[k]||[]).filter(inWindow); });
    return out;
  }

  let currentData = null, isLive = false;
  // start activeLayers from whatever the checkboxes actually show as checked
  // in the HTML (event layers on, infrastructure layers off by default),
  // rather than hardcoding it separately and risking the two going out of sync
  let activeLayers = new Set(
    Array.from(document.querySelectorAll(".layer-cb")).filter(cb => cb.checked).map(cb => cb.dataset.layer)
  );
  let refreshTimer = null;
  let customMarkers = [];

  // ---------------- data loading ----------------
  async function loadData(manual){
    const btn = document.getElementById("refreshBtn");
    if(manual && btn){ btn.classList.add("spinning"); btn.disabled = true; }
    try {
      const url = manual ? "/api/refresh" : "/api/snapshot";
      const opts = manual ? {method:"POST"} : {cache:"no-store"};
      const res = await fetch(url, opts);
      if(!res.ok){
        if(res.status === 429){ const j = await res.json().catch(()=>({})); throw new Error(j.error || "rate limited"); }
        // try to surface the server's own error detail (e.g. a specific
        // connector/rendering failure), not just the bare status code
        const body = await res.json().catch(()=>null);
        throw new Error(body && body.error ? ("HTTP " + res.status + ": " + body.error) : ("HTTP " + res.status));
      }
      const data = await res.json();
      currentData = data; isLive = true;
      render(data, true, null);
    } catch(e) {
      currentData = SEED_DATA; isLive = false;
      render(SEED_DATA, false, e.message);
    } finally {
      if(btn){ btn.classList.remove("spinning"); btn.disabled = false; }
    }
  }

  // ---------------- render orchestration ----------------
  function render(data, live, errMsg){
    // apply the 72h / All-time window ONCE, then everything below (panels,
    // KPIs, map dots) reads from the same filtered view - they can't disagree
    const view = Object.assign({}, data, {items_by_category: windowedCats(data.items_by_category || {})});
    view.markers = (data.markers || []).map(function(m){
      return Object.assign({}, m, {linked_items: (m.linked_items || []).filter(inWindow)});
    });
    renderStatusBar(live, view, errMsg);
    renderKPIs(view);
    renderMarkers(view.markers, view.items_by_category);
    renderPanels(view.items_by_category);
    renderTicker(view);
    renderDarkWeb(view);
    renderConnectorStrip(view.connector_status || [], live);
    applyFilter(); // keep an active search query applied across re-renders
  }

  function renderStatusBar(live, data, errMsg){
    const pill = document.getElementById("statusPill");
    const txt = document.getElementById("statusPillText");
    const banner = document.getElementById("offlineBanner");
    const footerNote = document.getElementById("footerNote");
    const snapDate = document.getElementById("snapDate");
    if(live){
      pill.className = "status-pill live"; txt.textContent = "Live backend";
      banner.classList.remove("show");
      const when = data.updated_at ? new Date(data.updated_at*1000).toLocaleTimeString() : "just now";
      snapDate.textContent = "Backend last polled " + when;
      footerNote.innerHTML = "Live backend connected &middot; " + (data.total_items||0) + " items in feed &middot; not investment/operational advice, verify time-critical items against primary sources";
    } else {
      pill.className = "status-pill offline"; txt.textContent = "Offline snapshot";
      banner.classList.add("show");
      banner.innerHTML = "<b>Backend not reachable" + (errMsg ? " (" + escapeHtml(errMsg) + ")" : "") +
        "</b> &mdash; showing the embedded Aug 10, 2026 research snapshot instead of live data. " +
        "Run <code>python run.py</code> and reload this page to connect the real backend.";
      snapDate.textContent = "Offline snapshot - Aug 10, 2026";
      footerNote.textContent = "Offline snapshot mode - start the Python backend for live data.";
    }
  }

  function countItems(cats, dataObj){
    let n = 0;
    cats.forEach(c => n += (dataObj[c]||[]).length);
    return n;
  }

  function renderKPIs(data){
    const cats = data.items_by_category || {};
    document.getElementById("kpi-markers").textContent = (data.markers||[]).length;
    document.getElementById("kpi-military").textContent = (cats.milops||[]).length;
    document.getElementById("kpi-economic").textContent = (cats.econ||[]).length;
    document.getElementById("kpi-political").textContent = (cats.geo||[]).length;
    document.getElementById("kpi-hazard").textContent = (cats.hazard||[]).length;
    document.getElementById("kpi-darkweb").textContent = (cats.darkweb||[]).length;
    document.getElementById("count-markers").textContent = (data.markers||[]).length + " sites";
    const infraNote = document.getElementById("infraNote");
    if(infraNote){
      const info = data.infrastructure || {};
      if(isLive){
        infraNote.textContent = (info.airport_count||0) + " airports live from OurAirports (CC0 dataset) + " +
          "verified seaports/naval bases/defense HQs. Real-time ship/submarine positions aren't shown - " +
          "no open source publishes that for any navy (see README).";
      } else {
        infraNote.textContent = "Offline snapshot: infrastructure markers frozen from build time, not live.";
      }
    }
  }

  // ---------------- map markers ----------------
  function addMarkerEl(layer, m, color, extra){
    const [x,y] = project(m.lon, m.lat);
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "marker");
    g.setAttribute("transform", "translate(" + x.toFixed(1) + "," + y.toFixed(1) + ")");
    g.dataset.name = m.name; g.dataset.note = m.note || "";
    g.dataset.source = m.source || ""; g.dataset.date = m.date || "";
    g.dataset.color = color;
    g.dataset.linked = JSON.stringify(m.linked_items || []);
    const pulse = (m.linked_items && m.linked_items.length) || (extra && extra.pulse);
    g.innerHTML = (pulse ? '<circle class="pulse" r="5" fill="none" stroke="'+color+'" stroke-width="1.6"/>' : '') +
                  '<circle class="core" r="3.4" fill="'+color+'"/>';
    layer.appendChild(g);
  }

  function renderMarkers(markers, cats){
    const layer = document.getElementById("markerLayer");
    if(!layer) return;
    layer.innerHTML = "";
    // 1. named strategic sites (pulse when a windowed headline mentions them)
    (markers || []).forEach(function(m){
      if(!activeLayers.has(m.cat)) return;
      addMarkerEl(layer, m, MARKER_COLOR[m.cat] || "#c9a35c");
    });
    // 2. any windowed item that carries its OWN coordinates (USGS quakes) -
    // a real lat/lon from the source, not a guess
    if(activeLayers.has("hazard")){
      Object.keys(cats || {}).forEach(function(k){
        (cats[k] || []).forEach(function(it){
          if(typeof it.lat === "number" && typeof it.lon === "number"){
            addMarkerEl(layer, {name: it.label, note: it.text, source: it.source, date: it.date,
              lat: it.lat, lon: it.lon, linked_items: []}, MARKER_COLOR.hazard, {pulse: true});
          }
        });
      });
    }
    // 3. the user's own plotted markers
    if(activeLayers.has("custom")){
      customMarkers.forEach(function(cm){
        addMarkerEl(layer, {name: cm.label, note: cm.remark || "(no remark)", source: "You",
          date: cm.added, lat: cm.lat, lon: cm.lon, linked_items: []}, MARKER_COLOR.custom, {pulse: true});
      });
    }
    wireMarkerEvents();
  }

  function wireMarkerEvents(){
    const wrap = document.getElementById("mapWrap");
    const tip = document.getElementById("mapTip");
    if(!wrap || !tip) return;
    function hideTip(){ tip.classList.remove("show"); }
    function positionTip(evt){
      const rect = wrap.getBoundingClientRect();
      let cx, cy;
      if(evt.touches && evt.touches[0]){ cx = evt.touches[0].clientX; cy = evt.touches[0].clientY; }
      else { cx = evt.clientX; cy = evt.clientY; }
      let x = cx - rect.left, y = cy - rect.top;
      const tw = 260, th = 130;
      if(x + tw + 24 > rect.width) x = x - tw - 18; else x = x + 16;
      if(y + th + 20 > rect.height) y = Math.max(4, y - th - 10); else y = y + 14;
      tip.style.left = x+"px"; tip.style.top = y+"px";
    }
    function showTip(m, evt){
      const name = m.dataset.name, note = m.dataset.note, source = m.dataset.source,
            date = m.dataset.date, color = m.dataset.color;
      let linked = [];
      try { linked = JSON.parse(m.dataset.linked || "[]"); } catch(e){ linked = []; }
      let html = '<div class="t-name" style="color:'+color+'">'+escapeHtml(name)+'</div>' +
                 '<div>'+escapeHtml(note)+'</div>' +
                 '<div class="t-meta">'+escapeHtml(source)+(date?(" &middot; "+escapeHtml(date)):"")+'</div>';
      if(linked.length){
        html += '<div class="t-meta" style="margin-top:6px;color:var(--text-dim);">Recent related items:</div>';
        linked.slice(0,3).forEach(function(li){
          html += '<div class="marker-tt-link">&bull; ' + escapeHtml((li.label||"").slice(0,60)) + '</div>';
        });
      }
      tip.innerHTML = html;
      positionTip(evt);
      tip.classList.add("show");
    }
    wrap.querySelectorAll(".marker").forEach(function(m){
      m.addEventListener("mouseenter", function(evt){ showTip(m, evt); });
      m.addEventListener("mousemove", positionTip);
      m.addEventListener("mouseleave", hideTip);
      m.addEventListener("click", function(evt){
        if(tip.classList.contains("show")){ hideTip(); } else { showTip(m, evt); }
      });
    });
    wrap.removeEventListener("mouseleave", hideTip);
    wrap.addEventListener("mouseleave", hideTip);
  }

  // layer toggle checkboxes
  document.querySelectorAll(".layer-cb").forEach(function(cb){
    cb.addEventListener("change", function(){
      const cat = cb.dataset.layer;
      if(cb.checked) activeLayers.add(cat); else activeLayers.delete(cat);
      if(currentData) renderMarkers(currentData.markers || []);
    });
  });

  // ---------------- panels ----------------
  // Only http(s) URLs ever become links. A feed-supplied "javascript:" / "data:" URL
  // would otherwise be a click-to-run XSS even though every text field is escaped.
  function safeUrl(u){
    if(!u) return null;
    try { const x = new URL(String(u)); return (x.protocol === "http:" || x.protocol === "https:") ? x.href : null; }
    catch(e){ return null; }
  }
  function fmtDate(s){
    const d = parseItemDate(s);
    return d ? d.toLocaleString([], {dateStyle:"medium", timeStyle:"short"}) : (s || "");
  }
  function itemHtml(it){
    const href = safeUrl(it.url);
    return '<div class="item" data-search="'+escapeHtml(((it.label||"")+" "+(it.text||"")).toLowerCase())+'">' +
      '<div class="lbl">'+escapeHtml(it.label)+'</div>' +
      (it.text && it.text !== it.label ? '<div class="txt">'+escapeHtml(it.text)+'</div>' : '') +
      '<div class="meta">'+escapeHtml(it.source)+(it.date?(" &middot; "+escapeHtml(fmtDate(it.date))):"")+
      (href ? ' &middot; <a href="'+escapeHtml(href)+'" target="_blank" rel="noopener noreferrer">source &#8599;</a>' : '')+
      '</div></div>';
  }

  function renderPanels(cats){
    const ids = HEADING_KEYS;
    ids.forEach(function(cat){
      const container = document.getElementById("items-"+cat);
      const countEl = document.getElementById("count-"+cat);
      if(!container) return;
      const list = (cats[cat] || []).slice(0, 25);
      if(countEl) countEl.textContent = list.length;
      container.innerHTML = list.length
        ? list.map(itemHtml).join("")
        : '<div class="empty-note">' + (timeWindow === "72h"
            ? (isLive
                ? 'Nothing in the last 72 hours for this heading. Switch to <b>All Time</b> (top right) to see older items.'
                : 'Backend offline - the embedded research snapshot is older than 72 hours, so it is hidden in this view. Switch to <b>All Time</b> to read it, or start the backend for live news.')
            : 'No items for this heading yet.') + '</div>';
    });
  }

  // ---------------- connector status strip ----------------
  function renderConnectorStrip(statuses, live){
    const el = document.getElementById("connectorStrip");
    const note = document.getElementById("methodNote");
    if(!live){
      el.innerHTML = '<span class="conn-badge off">offline snapshot - connectors not queried</span>';
      note.textContent = "Backend not connected. Start it with: python run.py  (see README.md)";
      return;
    }
    el.innerHTML = statuses.map(function(s){
      const cls = !s.configured ? "off" : (s.ok ? "ok" : "err");
      const label = s.name + (s.configured ? (s.ok ? " \u2713 " + s.item_count : " \u2717") : " (not set)");
      return '<span class="conn-badge '+cls+'" title="'+escapeHtml(s.message||"")+'">'+escapeHtml(label)+'</span>';
    }).join("");
    const okCount = statuses.filter(s=>s.ok).length;
    note.textContent = okCount + " of " + statuses.length + " connectors returned data this poll. " +
      "Hover a badge for its exact status message. Add API keys in .env or via secure_setup.py to enable more.";
  }

  // ---------------- search filter ----------------
  let lastQuery = "";
  function applyFilter(){
    const q = lastQuery;
    document.querySelectorAll(".item[data-search]").forEach(function(it){
      if(!q){ it.classList.remove("dim"); return; }
      const hay = it.getAttribute("data-search") || "";
      if(hay.indexOf(q) === -1) it.classList.add("dim"); else it.classList.remove("dim");
    });
  }
  const filterInput = document.getElementById("filterInput");
  if(filterInput){
    filterInput.addEventListener("input", function(){
      lastQuery = filterInput.value.trim().toLowerCase();
      applyFilter();
    });
  }

  // ---------------- refresh button ----------------
  const refreshBtn = document.getElementById("refreshBtn");
  if(refreshBtn) refreshBtn.addEventListener("click", function(){ loadData(true); });

  // ---------------- settings modal (API keys) ----------------
  const settingsBackdrop = document.getElementById("settingsBackdrop");
  const settingsBtn = document.getElementById("settingsBtn");
  const closeSettingsBtn = document.getElementById("closeSettingsBtn");
  const saveKeysBtn = document.getElementById("saveKeysBtn");
  const keyFieldsEl = document.getElementById("keyFields");
  const settingsMsg = document.getElementById("settingsMsg");

  async function openSettings(){
    settingsBackdrop.classList.add("show");
    settingsMsg.textContent = ""; settingsMsg.className = "modal-msg";
    keyFieldsEl.innerHTML = "Loading&hellip;";
    try {
      const res = await fetch("/api/keys");
      if(!res.ok) throw new Error("HTTP " + res.status);
      const fields = await res.json();
      keyFieldsEl.innerHTML = Object.keys(fields).map(function(name){
        const f = fields[name];
        return '<div class="key-field">' +
          '<label><span class="kf-status'+(f.configured?" on":"")+'"></span>' + escapeHtml(f.label) +
          (f.configured ? ' <span style="font-weight:400;color:var(--text-faint);">(set via '+escapeHtml(f.source)+')</span>' : '') +
          '</label>' +
          '<div class="kf-help">'+escapeHtml(f.help)+'</div>' +
          '<input type="password" data-key="'+name+'" placeholder="'+
            (f.configured ? "Already set - paste a new value to replace it" : "Paste key here, or leave blank to skip") +
          '" autocomplete="off"/></div>';
      }).join("");
    } catch(e) {
      keyFieldsEl.innerHTML = '<div class="modal-msg err">Could not load key status: ' + escapeHtml(e.message) +
        (isLive ? "" : " (backend not connected - start it with python run.py first)") + '</div>';
    }
  }
  function closeSettings(){ settingsBackdrop.classList.remove("show"); }

  if(settingsBtn) settingsBtn.addEventListener("click", openSettings);
  if(closeSettingsBtn) closeSettingsBtn.addEventListener("click", closeSettings);
  if(settingsBackdrop) settingsBackdrop.addEventListener("click", function(e){
    if(e.target === settingsBackdrop) closeSettings();
  });

  if(saveKeysBtn) saveKeysBtn.addEventListener("click", async function(){
    const inputs = keyFieldsEl.querySelectorAll("input[data-key]");
    const body = {};
    inputs.forEach(function(inp){ if(inp.value.trim()) body[inp.dataset.key] = inp.value.trim(); });
    if(!Object.keys(body).length){
      settingsMsg.textContent = "Nothing to save - all fields blank."; settingsMsg.className = "modal-msg";
      return;
    }
    saveKeysBtn.disabled = true; saveKeysBtn.textContent = "Saving\u2026";
    try {
      const res = await fetch("/api/keys", {method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify(body)});
      const j = await res.json();
      if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
      settingsMsg.textContent = "Saved " + j.saved.length + " key(s), encrypted. Reconnecting\u2026";
      settingsMsg.className = "modal-msg ok";
      await loadData(true);
      setTimeout(function(){ openSettings(); }, 400); // refresh the configured/not-configured status shown
    } catch(e) {
      settingsMsg.textContent = "Save failed: " + e.message;
      settingsMsg.className = "modal-msg err";
    } finally {
      saveKeysBtn.disabled = false; saveKeysBtn.textContent = "Save & reconnect";
    }
  });

  // ---------------- live clock ----------------
  function pad(n){ return n<10 ? "0"+n : n; }
  function tickClock(){
    const d = new Date();
    const el = document.getElementById("snapClock");
    if(el) el.textContent = pad(d.getHours())+":"+pad(d.getMinutes())+":"+pad(d.getSeconds())+" local";
  }
  tickClock(); setInterval(tickClock, 1000);

  // ---------------- running news ticker (unlocated news, newest first, bottom->top) ----------------
  function ts(it){ const d = parseItemDate(it.date); return d ? d.getTime() : 0; }
  function wireTickerPause(){
    const viewport = document.getElementById("tickerViewport");
    const track = document.getElementById("tickerTrack");
    if(!viewport || !track) return;
    viewport.onpointerenter = function(){ track.classList.add("paused"); };
    viewport.onpointerleave = function(){ track.classList.remove("paused"); };
    viewport.ontouchstart = function(){ track.classList.add("paused"); };
    viewport.ontouchend = function(){ track.classList.remove("paused"); };
  }
  function in72h(it){
    const d = parseItemDate(it.date);
    if(!d) return false;                       // undated background items never qualify as "latest news"
    return (Date.now() - d.getTime()) <= 72 * 3600 * 1000;
  }
  function renderTicker(view){
    // The running feed is ALWAYS the last 72 hours - it ignores the All-Time toggle.
    const track = document.getElementById("tickerTrack");
    const cnt = document.getElementById("count-ticker");
    if(!track) return;
    const src = (currentData && currentData.items_by_category) || {};
    const all = [];
    Object.keys(src).forEach(function(k){
      (src[k] || []).forEach(function(it){
        if(!(typeof it.lat === "number" && typeof it.lon === "number") && in72h(it)) all.push(it);
      });
    });
    all.sort(function(a, b){ return ts(b) - ts(a); });
    const list = all.slice(0, 80);
    if(cnt) cnt.textContent = list.length + " in 72h";
    if(!list.length){
      track.innerHTML = '<div class="empty-note" style="padding:14px;">No unlocated news in the last 72 hours yet.</div>';
      return;
    }
    const TAG = {geo:["GEO","var(--green)"], milops:["MIL","var(--amber)"], arms:["ARMS","var(--magenta)"],
      naval:["NAVAL","var(--cyan-h)"], scs:["SCS","var(--cyan-h)"], air:["AIR","var(--violet)"], space:["SPACE","var(--cyan-h)"],
      tech:["TECH","var(--gold)"], cyber:["CYBER","var(--red)"], darkweb:["DARK","var(--red)"], econ:["ECON","var(--cyan-h)"],
      mss:["MSS","var(--amber)"], social:["SOC","var(--gold)"], wellbeing:["WELL","var(--magenta)"], hazard:["HAZ","var(--violet)"]};
    const one = list.map(function(it){
      const t = TAG[it.category] || ["NEWS","var(--cyan-h)"];
      return '<div class="tick-item"><span class="tag" style="background:'+t[1]+'">'+t[0]+'</span>' +
        '<span class="txt">'+escapeHtml(it.label)+'</span>' +
        '<div class="meta">'+escapeHtml(it.source)+(it.date ? ' &middot; '+escapeHtml(fmtDate(it.date)) : '')+'</div></div>';
    }).join("");
    track.innerHTML = one + one;
    wireTickerPause();
  }

  function renderDarkWeb(view){
    const el = document.getElementById("items-darkweb");
    if(!el) return;
    const want = document.getElementById("darkwebFilter").value;
    const all = [];
    Object.keys(view.items_by_category || {}).forEach(function(k){
      (view.items_by_category[k] || []).forEach(function(it){
        if(it.category === "darkweb") all.push(it);
      });
    });
    all.sort(function(a, b){ return ts(b) - ts(a); });
    const shown = all.filter(function(it){ return want === "all" || it.in_region; }).slice(0, 80);
    document.getElementById("count-darkweb").textContent = shown.length + " of " + all.length;
    const LABEL = {ransomware_live:"Ransomware.live: ", telegram_public:"Telegram: ", darkweb_tor:"Dark web via Tor: "};
    const st = (view.connector_status || []).filter(function(s){ return LABEL[s.name]; })
      .map(function(s){ return LABEL[s.name] + s.message; });
    document.getElementById("darkwebStatus").textContent = st.join("   |   ");
    el.innerHTML = shown.length ? shown.map(function(it){
      const href = safeUrl(it.url);
      return '<div class="item"><div class="lbl">'+escapeHtml(it.label)+'</div><div class="meta">' +
        escapeHtml(it.source) + (it.country ? ' &middot; '+escapeHtml(it.country) : '') +
        (it.date ? ' &middot; '+escapeHtml(fmtDate(it.date)) : '') +
        (href ? ' &middot; <a href="'+escapeHtml(href)+'" target="_blank" rel="noopener noreferrer">source &#8599;</a>' : '') +
        '</div></div>';
    }).join("") : '<div class="empty-note">No dark-web or threat-intel claims in the current window. ' +
        (timeWindow === "72h" ? 'Switch to All Time (top right) to see older claims.' : '') + '</div>';
  }

  // ---------------- radar sweep: 2D scanner rotating over the map (off for reduced-motion) ----------------
  // Cosmetic only, so it is isolated: a missing animation API or any error here
  // must never stop the data panels from rendering. Falls back to a timer when
  // requestAnimationFrame is unavailable (older or embedded browsers).
  try {
    (function radar(){
      const g = document.getElementById("radarSweep");
      if(!g || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
      const cx = g.getAttribute("data-cx"), cy = g.getAttribute("data-cy");
      const raf = (typeof window.requestAnimationFrame === "function")
        ? function(f){ window.requestAnimationFrame(f); }
        : function(f){ setTimeout(f, 33); };
      let a = 0;
      (function step(){
        a = (a + 0.5) % 360;
        g.setAttribute("transform", "rotate(" + a + " " + cx + " " + cy + ")");
        raf(step);
      })();
    })();
  } catch(e) { /* sweep is decoration; the dashboard works without it */ }

  const dwFilter = document.getElementById("darkwebFilter");
  if(dwFilter) dwFilter.addEventListener("change", function(){ if(currentData) render(currentData, isLive, null); });

  // ---------------- 72h / All-time toggle ----------------
  document.querySelectorAll(".wt-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
      timeWindow = btn.dataset.window;
      document.querySelectorAll(".wt-btn").forEach(b => b.classList.toggle("active", b === btn));
      // re-render from what we already have - no new network call needed
      if(currentData) render(currentData, isLive, null);
    });
  });

  // ---------------- Plot a location (lat/long + remark) ----------------
  const plotBackdrop = document.getElementById("plotBackdrop");
  const plotMsg = document.getElementById("plotMsg");

  async function loadCustomMarkers(){
    try {
      const res = await fetch("/api/custom-markers", {cache:"no-store"});
      if(!res.ok) throw new Error("HTTP " + res.status);
      customMarkers = (await res.json()).markers || [];
    } catch(e) { customMarkers = []; }
  }

  function renderCustomList(){
    const el = document.getElementById("customMarkersList");
    if(!customMarkers.length){ el.innerHTML = ""; return; }
    el.innerHTML = '<div style="font-size:11px;color:var(--text-faint);margin-bottom:6px;">Your plotted markers:</div>' +
      customMarkers.map(function(m, i){
        return '<div class="custom-marker-row"><span><b>'+escapeHtml(m.label)+'</b> ('+m.lat+', '+m.lon+')' +
          (m.remark ? '<br/><span style="color:var(--text-faint);">'+escapeHtml(m.remark)+'</span>' : '') +
          '</span><button data-idx="'+i+'" title="Remove">&times;</button></div>';
      }).join("");
    el.querySelectorAll("button[data-idx]").forEach(function(btn){
      btn.addEventListener("click", async function(){
        try {
          const res = await fetch("/api/custom-markers/" + btn.dataset.idx, {method:"DELETE"});
          const j = await res.json();
          if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
          customMarkers = j.markers || [];
          renderCustomList();
          if(currentData) render(currentData, isLive, null);
        } catch(e) {
          plotMsg.textContent = "Remove failed: " + e.message; plotMsg.className = "modal-msg err";
        }
      });
    });
  }

  const plotBtn = document.getElementById("plotBtn");
  if(plotBtn) plotBtn.addEventListener("click", async function(){
    plotBackdrop.classList.add("show");
    plotMsg.textContent = ""; plotMsg.className = "modal-msg";
    await loadCustomMarkers();
    renderCustomList();
  });
  document.getElementById("plotCloseBtn").addEventListener("click", () => plotBackdrop.classList.remove("show"));
  plotBackdrop.addEventListener("click", function(e){ if(e.target === plotBackdrop) plotBackdrop.classList.remove("show"); });

  document.getElementById("plotAddBtn").addEventListener("click", async function(){
    const label = document.getElementById("plotLabel").value.trim();
    const remark = document.getElementById("plotRemark").value.trim();
    const lat = parseFloat(document.getElementById("plotLat").value);
    const lon = parseFloat(document.getElementById("plotLon").value);
    if(!label || isNaN(lat) || isNaN(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180){
      plotMsg.textContent = "Enter a label and valid lat (-90 to 90) / lon (-180 to 180)."; plotMsg.className = "modal-msg err";
      return;
    }
    try {
      const res = await fetch("/api/custom-markers", {method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({label: label, remark: remark, lat: lat, lon: lon})});
      const j = await res.json();
      if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
      customMarkers = j.markers || [];
      ["plotLabel","plotRemark","plotLat","plotLon"].forEach(id => document.getElementById(id).value = "");
      plotMsg.textContent = "Added."; plotMsg.className = "modal-msg ok";
      renderCustomList();
      if(currentData) render(currentData, isLive, null);
    } catch(e) {
      plotMsg.textContent = "Add failed: " + e.message; plotMsg.className = "modal-msg err";
    }
  });

  // ---------------- boot ----------------
  loadCustomMarkers().then(function(){ loadData(false); });
  // auto-update news & data every 3 minutes, per request
  refreshTimer = setInterval(function(){ loadData(false); }, 3*60*1000);

  // Test hooks (harmless in production) so the DOM regression test can drive
  // the real code paths instead of re-implementing them
  window.__TEST = {render: function(){ if(currentData) render(currentData, isLive, null); },
                   setData: function(d){ currentData = d; isLive = true; },
                   setWindow: function(w){ timeWindow = w; },
                   parseItemDate: parseItemDate, inWindow: inWindow};
})();
