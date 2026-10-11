# Russia Dashboard

A locally hosted **OSINT and Geospatial Intelligence Platform** for monitoring Russia, the former Soviet republics, strategic military capabilities, nuclear infrastructure, aerospace, cyber intelligence, energy security and regional developments.

***

#### 🌍 Geographic Coverage

- **Regional scope:** Russia and the 14 other former Soviet states, including Ukraine, Georgia and the Baltic states.
- **Geographic frame:** From Kaliningrad to Chukotka, with a conic projection designed for Russia's extensive east–west territory.
- **Antimeridian handling:** Chukotka and the Bering Strait are represented across the date line.
- **Infrastructure:** 179 towns and capitals, 306 civil airports, 351 military-named airfields, 37 ports and 16 sea labels.
- **Strategic sites:** 124 sourced points, including 15 entries from the WRI nuclear database.
- **India exclusion:** No India-related geographic installations or infrastructure are plotted.

***

#### 🧭 15 Intelligence Categories

1. Geopolitical & Diplomatic
2. Military Operations & Force Posture
3. Strategic Arms & Nuclear Program
4. Maritime Chokepoints & Sea Lanes
5. Air Force & Aviation
6. Space Tech & Aerospace
7. Critical Tech & AI Governance
8. Cyber Espionage & APTs
9. Darkweb & Threat Intel
10. Economic & Trade
11. Internal Security & Intelligence Operations
12. Social Pulse & Public Sentiment
13. Happiness & Wellbeing Indices
14. Natural Hazards & Environmental Risks
15. Regional Strategic Developments

***

#### 🚀 Strategic Intelligence Layers

- **Strategic missile forces:** ICBM-related locations at Kozelsk, Tatishchevo, Teykovo, Barnaul, Uzhur and Dombarovsky, alongside Sarmat and Sentinel-style strategic programme monitoring references as documented in the source data.
- **Naval and submarine forces:** Northern Fleet headquarters at Severomorsk, strategic submarine facilities around Gadzhiyevo, Nerpichya and Vilyuchinsk, and Baltic, Black Sea, Pacific and Caspian fleet references.
- **Strategic aviation:** Bomber-base references, including Engels-2, with reported strike information attributed to the available sources.
- **Foreign military presence:** Russian base references in Armenia, Tajikistan, Kyrgyzstan, Abkhazia, Transnistria, Belarus and Syria.
- **Nuclear infrastructure:** Nuclear power plants and publicly documented nuclear-material facilities, including Mayak, Seversk and Zheleznogorsk.
- **Space infrastructure:** Plesetsk, Vostochny and Baikonur.
- **Cyber intelligence:** GRU Unit 26165 (APT28), Unit 74455 (Sandworm) and psychological-operations unit 54777 references.
- **Energy security:** Nord Stream, Power of Siberia, TurkStream, LNG facilities and related energy infrastructure.
- **Arctic and maritime routes:** Northern Sea Route and selected regional straits and chokepoints.

***

#### 📰 News & Intelligence Monitoring

- Configurable news feeds and intelligence connectors.
- Keyword-based classification across the dashboard's intelligence categories.
- Regional monitoring of military, geopolitical, cyber, energy and economic developments.
- Source-based status notes for reported incidents and disputed claims.

**Live-feed limitation:** News connectors could not be tested against external sources in the build environment because internet access was unavailable. Feeds should be checked after launching the dashboard locally.

***

#### 🗺️ Geospatial Features

- Interactive map covering Russia and the former Soviet republics.
- Conic projection suited to the region's large geographic extent.
- Continuous map geometry across the date line.
- Towns, capitals, rivers, administrative boundaries, airports, airfields, ports and sea labels.
- Strategic-site markers with status, date and source information.
- Map and point coordinates generated using consistent projection logic to maintain alignment.

***

#### ⚙️ Installation & Launch

**Local dashboard URL:** http://127.0.0.1:8825

1. Extract `russia-dashboard-v1.zip`.
2. Open the extracted project folder.
3. Run the supplied startup script.
4. Open `http://127.0.0.1:8825` in your browser.

Follow the project's included startup instructions and configuration files.

***

#### 🧪 Testing

- 36 Python tests passed.
- Three browser test suites passed.
- Clean-copy rebuild tested.
- Map projection, geographic alignment, layer counts and page loading checked.
- Intelligence categories and connector error handling tested.

Live external news retrieval remains unverified in the offline build environment.

***

#### ⚠️ Known Limitations

- **Site verification:** 26 of the 124 strategic points are flagged as not verified in this build.
- **Military coverage:** Most military district headquarters, divisions and air-defence radar sites are not plotted.
- **Nuclear data:** The WRI nuclear database dates from 2018; current operating status is not established for every plant.
- **Conflict reporting:** Strike reports, casualties, occupation and other disputed developments may differ between sources and can change rapidly.
- **Geographic precision:** Site coordinates are approximate and should not be treated as exact facility boundaries.
- **Unconfirmed deployments:** Reported deployments, including the Oreshnik deployment in Belarus, are marked as unverified where applicable.
- **Live news:** Connector performance depends on internet access and third-party source availability.

***

#### 🔐 Responsible Use

This dashboard organizes publicly sourced information for research, strategic awareness and geospatial analysis. Verify source dates, claims and operational status independently. Reported incidents and disputed military developments should not be treated as independently confirmed facts solely because they appear on the map.

***
