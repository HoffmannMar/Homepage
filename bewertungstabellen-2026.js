// bewertungstabellen-2026.js 

// Quelle DSA-Material: https://deutsches-sportabzeichen.de/materialien
// Quelle Leichtathletik und Schwimmen: MINISTERIUM FÜR KULTUS, JUGEND UND SPORT Baden-Württemberg, Bewertungskriterien / Wertungstabellen Schwimmen und Leichtathletik für das Fach Sport: https://km.baden-wuerttemberg.de/de/schule/gymnasium/termine-und-informationen-zum-abitur/dokumente-sportabitur - Unterschied sportabi25 zu sportabi26 hier nur beim 3000m-Lauf (wurde vorallem bei männern schwerer!)
// Notentabelle 30min-Lauf wurde selbst erstellt

// Disziplinen-Definitionen
const disciplines = [
    // --- Leichtathletik ---
    { id: "la_100m", name: "LA 100m", unit: "s", lowerIsBetter: true, type: "time_s" },
    { id: "la_200m", name: "LA 200m", unit: "s", lowerIsBetter: true, type: "time_s" },
    { id: "la_110m_hurden", name: "LA 110m Hürden", unit: "s", lowerIsBetter: true, type: "time_s" },
    { id: "la_100m_hurden", name: "LA 100m Hürden", unit: "s", lowerIsBetter: true, type: "time_s" },
    { id: "la_weit", name: "LA Weitsprung", unit: "m", lowerIsBetter: false, type: "length" },
    { id: "la_hoch", name: "LA Hochsprung", unit: "m", lowerIsBetter: false, type: "length" },
    { id: "la_kugel", name: "LA Kugelstoßen", unit: "m", lowerIsBetter: false, type: "length" },
    { id: "la_diskus", name: "LA Diskuswurf", unit: "m", lowerIsBetter: false, type: "length" },
    { id: "la_speer", name: "LA Speerwurf", unit: "m", lowerIsBetter: false, type: "length" },
    { id: "la_3000m", name: "LA 3000m", unit: "s", lowerIsBetter: true, type: "time_s" },
    // --- Schwimmen ---
    { id: "swim_50_brust", name: "SW 50m Brust", unit: "s", lowerIsBetter: true, type: "time_s" },
    { id: "swim_50_rucken", name: "SW 50m Rücken", unit: "s", lowerIsBetter: true, type: "time_s" },
    { id: "swim_50_delphin", name: "SW 50m Delphin", unit: "s", lowerIsBetter: true, type: "time_s" },
    { id: "swim_50_freistil", name: "SW 50m Freistil", unit: "s", lowerIsBetter: true, type: "time_s" },
    { id: "swim_100_lagen", name: "SW 100m Lagen", unit: "s", lowerIsBetter: true, type: "time_s" }, 
    { id: "swim_200_brust", name: "SW 200m Brust", unit: "s", lowerIsBetter: true, type: "time_s" }, 
    { id: "swim_200_freistil", name: "SW 200m Freistil", unit: "s", lowerIsBetter: true, type: "time_s" },
    { id: "swim_200_rd", name: "SW 200m Rücken/Delphin", unit: "s", lowerIsBetter: true, type: "time_s" },
    { id: "swim_800_freistil", name: "SW 800m Freistil", unit: "s", lowerIsBetter: true, type: "time_s" },
    // --- Ausdauerlauf ---
    { id: "30min", name: "30min-Lauf", unit: "m", lowerIsBetter: false, type: "distance" }
];

// Erweiterte Bewertungstabellen 2026 - mit halben Punkten und Erweiterung bis -4 Punkte
const bewertungstabellen = {
"la_100m": {
    "m": [
        { performance: 12.1, points: 15 }, { performance: 12.2, points: 14.5 }, { performance: 12.3, points: 14 }, { performance: 12.4, points: 13.5 },
        { performance: 12.5, points: 13 }, { performance: 12.6, points: 12.5 }, { performance: 12.7, points: 12 }, { performance: 12.8, points: 11.5 },
        { performance: 12.9, points: 11 }, { performance: 13.0, points: 10.5 }, { performance: 13.1, points: 10 }, { performance: 13.2, points: 9.5 },
        { performance: 13.3, points: 9 }, { performance: 13.4, points: 8.5 }, { performance: 13.5, points: 8 }, { performance: 13.6, points: 7.5 },
        { performance: 13.7, points: 7 }, { performance: 13.8, points: 6.5 }, { performance: 13.9, points: 6 }, { performance: 14.05, points: 5.5 },
        { performance: 14.2, points: 5 }, { performance: 14.3, points: 4.5 }, { performance: 14.4, points: 4 }, { performance: 14.5, points: 3.5 },
        { performance: 14.6, points: 3 }, { performance: 14.7, points: 2.5 }, { performance: 14.8, points: 2 }, { performance: 14.9, points: 1.5 },
        { performance: 15.0, points: 1 }, { performance: 15.1, points: 0.5 }, { performance: 15.2, points: 0 }, { performance: 15.3, points: -0.5 },
        { performance: 15.4, points: -1 }, { performance: 15.5, points: -1.5 }, { performance: 15.6, points: -2 }, { performance: 15.7, points: -2.5 },
        { performance: 15.8, points: -3 }, { performance: 15.9, points: -3.5 }, { performance: 16.0, points: -4 }
    ],
    "w": [
        { performance: 13.6, points: 15 }, { performance: 13.7, points: 14.5 }, { performance: 13.8, points: 14 }, { performance: 13.9, points: 13.5 },
        { performance: 14.0, points: 13 }, { performance: 14.1, points: 12.5 }, { performance: 14.2, points: 12 }, { performance: 14.35, points: 11.5 },
        { performance: 14.5, points: 11 }, { performance: 14.65, points: 10.5 }, { performance: 14.8, points: 10 }, { performance: 14.9, points: 9.5 },
        { performance: 15.0, points: 9 }, { performance: 15.25, points: 8.5 }, { performance: 15.4, points: 8 }, { performance: 15.55, points: 7.5 },
        { performance: 15.7, points: 7 }, { performance: 15.8, points: 6.5 }, { performance: 15.9, points: 6 }, { performance: 16.05, points: 5.5 },
        { performance: 16.2, points: 5 }, { performance: 16.35, points: 4.5 }, { performance: 16.5, points: 4 }, { performance: 16.6, points: 3.5 },
        { performance: 16.7, points: 3 }, { performance: 16.85, points: 2.5 }, { performance: 17.0, points: 2 }, { performance: 17.05, points: 1.5 },
        { performance: 17.1, points: 1 }, { performance: 17.15, points: 0.5 }, { performance: 17.2, points: 0 }, { performance: 17.25, points: -0.5 },
        { performance: 17.3, points: -1 }, { performance: 17.35, points: -1.5 }, { performance: 17.4, points: -2 }, { performance: 17.45, points: -2.5 },
        { performance: 17.5, points: -3 }, { performance: 17.55, points: -3.5 }, { performance: 17.6, points: -4 }
    ]
},
"la_200m": {
   "m": [
       { performance: 24.6, points: 15 }, { performance: 24.7, points: 14.5 }, { performance: 25.0, points: 14 }, { performance: 25.1, points: 13.5 },
       { performance: 25.4, points: 13 }, { performance: 25.5, points: 12.5 }, { performance: 25.8, points: 12 }, { performance: 25.9, points: 11.5 },
       { performance: 26.2, points: 11 }, { performance: 26.3, points: 10.5 }, { performance: 26.6, points: 10 }, { performance: 27.0, points: 9.5 },
       { performance: 27.1, points: 9 }, { performance: 27.2, points: 8.5 }, { performance: 27.5, points: 8 }, { performance: 27.6, points: 7.5 },
       { performance: 27.9, points: 7 }, { performance: 28.05, points: 6.5 }, { performance: 28.4, points: 6 }, { performance: 28.55, points: 5.5 },
       { performance: 29.0, points: 5 }, { performance: 29.15, points: 4.5 }, { performance: 29.5, points: 4 }, { performance: 29.6, points: 3.5 },
       { performance: 29.9, points: 3 }, { performance: 30.05, points: 2.5 }, { performance: 30.4, points: 2 }, { performance: 30.5, points: 1.5 },
       { performance: 30.8, points: 1 }, { performance: 31.0, points: 0.5 }, { performance: 31.2, points: 0 }, { performance: 31.4, points: -0.5 },
       { performance: 31.6, points: -1 }, { performance: 31.8, points: -1.5 }, { performance: 32.0, points: -2 }, { performance: 32.2, points: -2.5 },
       { performance: 32.4, points: -3 }, { performance: 32.6, points: -3.5 }, { performance: 32.8, points: -4 }
   ],
   "w": [
       { performance: 28.2, points: 15 }, { performance: 28.3, points: 14.5 }, { performance: 28.6, points: 14 }, { performance: 28.7, points: 13.5 },
       { performance: 29.0, points: 13 }, { performance: 29.1, points: 12.5 }, { performance: 29.4, points: 12 }, { performance: 29.55, points: 11.5 },
       { performance: 29.9, points: 11 }, { performance: 30.05, points: 10.5 }, { performance: 30.4, points: 10 }, { performance: 30.55, points: 9.5 },
       { performance: 30.9, points: 9 }, { performance: 31.05, points: 8.5 }, { performance: 31.4, points: 8 }, { performance: 31.55, points: 7.5 },
       { performance: 31.9, points: 7 }, { performance: 32.05, points: 6.5 }, { performance: 32.4, points: 6 }, { performance: 32.55, points: 5.5 },
       { performance: 32.9, points: 5 }, { performance: 33.05, points: 4.5 }, { performance: 33.5, points: 4 }, { performance: 33.65, points: 3.5 },
       { performance: 34.1, points: 3 }, { performance: 34.25, points: 2.5 }, { performance: 34.7, points: 2 }, { performance: 34.85, points: 1.5 },
       { performance: 35.3, points: 1 }, { performance: 35.6, points: 0.5 }, { performance: 35.9, points: 0 }, { performance: 36.2, points: -0.5 },
       { performance: 36.5, points: -1 }, { performance: 36.8, points: -1.5 }, { performance: 37.1, points: -2 }, { performance: 37.4, points: -2.5 },
       { performance: 37.7, points: -3 }, { performance: 38.0, points: -3.5 }, { performance: 38.3, points: -4 }
   ]
},													  
"la_110m_hurden": {
   "m": [
       { performance: 17.5, points: 15 }, { performance: 17.55, points: 14.5 }, { performance: 17.7, points: 14 }, { performance: 17.8, points: 13.5 },
       { performance: 18.1, points: 13 }, { performance: 18.2, points: 12.5 }, { performance: 18.5, points: 12 }, { performance: 18.6, points: 11.5 },
       { performance: 18.9, points: 11 }, { performance: 19.0, points: 10.5 }, { performance: 19.3, points: 10 }, { performance: 19.4, points: 9.5 },
       { performance: 19.7, points: 9 }, { performance: 19.85, points: 8.5 }, { performance: 20.3, points: 8 }, { performance: 20.45, points: 7.5 },
       { performance: 20.9, points: 7 }, { performance: 21.05, points: 6.5 }, { performance: 21.5, points: 6 }, { performance: 21.65, points: 5.5 },
       { performance: 22.2, points: 5 }, { performance: 22.4, points: 4.5 }, { performance: 23.0, points: 4 }, { performance: 23.2, points: 3.5 },
       { performance: 23.8, points: 3 }, { performance: 24.0, points: 2.5 }, { performance: 24.6, points: 2 }, { performance: 24.8, points: 1.5 },
       { performance: 25.4, points: 1 }, { performance: 25.8, points: 0.5 }, { performance: 26.2, points: 0 }, { performance: 26.6, points: -0.5 },
       { performance: 27.0, points: -1 }, { performance: 27.4, points: -1.5 }, { performance: 27.8, points: -2 }, { performance: 28.2, points: -2.5 },
       { performance: 28.6, points: -3 }, { performance: 29.0, points: -3.5 }, { performance: 29.4, points: -4 }
   ]
},
"la_100m_hurden": {
   "w": [
       { performance: 18.2, points: 15 }, { performance: 18.25, points: 14.5 }, { performance: 18.5, points: 14 }, { performance: 18.6, points: 13.5 },
       { performance: 18.9, points: 13 }, { performance: 19.0, points: 12.5 }, { performance: 19.3, points: 12 }, { performance: 19.4, points: 11.5 },
       { performance: 19.7, points: 11 }, { performance: 19.8, points: 10.5 }, { performance: 20.1, points: 10 }, { performance: 20.2, points: 9.5 },
       { performance: 20.5, points: 9 }, { performance: 20.65, points: 8.5 }, { performance: 21.0, points: 8 }, { performance: 21.1, points: 7.5 },
       { performance: 21.4, points: 7 }, { performance: 21.55, points: 6.5 }, { performance: 22.0, points: 6 }, { performance: 22.1, points: 5.5 },
       { performance: 22.5, points: 5 }, { performance: 22.65, points: 4.5 }, { performance: 23.1, points: 4 }, { performance: 23.25, points: 3.5 },
       { performance: 23.7, points: 3 }, { performance: 23.85, points: 2.5 }, { performance: 24.3, points: 2 }, { performance: 24.45, points: 1.5 },
       { performance: 24.9, points: 1 }, { performance: 25.15, points: 0.5 }, { performance: 25.4, points: 0 }, { performance: 25.65, points: -0.5 },
       { performance: 25.9, points: -1 }, { performance: 26.15, points: -1.5 }, { performance: 26.4, points: -2 }, { performance: 26.65, points: -2.5 },
       { performance: 26.9, points: -3 }, { performance: 27.15, points: -3.5 }, { performance: 27.4, points: -4 }
   ]
},

"la_weit": {
   "m": [
       { performance: 5.71, points: 15 }, { performance: 5.68, points: 14.5 }, { performance: 5.59, points: 14 }, { performance: 5.555, points: 13.5 },
       { performance: 5.45, points: 13 }, { performance: 5.415, points: 12.5 }, { performance: 5.31, points: 12 }, { performance: 5.275, points: 11.5 },
       { performance: 5.17, points: 11 }, { performance: 5.135, points: 10.5 }, { performance: 5.03, points: 10 }, { performance: 4.995, points: 9.5 },
       { performance: 4.88, points: 9 }, { performance: 4.84, points: 8.5 }, { performance: 4.72, points: 8 }, { performance: 4.68, points: 7.5 },
       { performance: 4.56, points: 7 }, { performance: 4.52, points: 6.5 }, { performance: 4.40, points: 6 }, { performance: 4.36, points: 5.5 },
       { performance: 4.23, points: 5 }, { performance: 4.185, points: 4.5 }, { performance: 4.05, points: 4 }, { performance: 4.005, points: 3.5 },
       { performance: 3.87, points: 3 }, { performance: 3.825, points: 2.5 }, { performance: 3.69, points: 2 }, { performance: 3.645, points: 1.5 },
       { performance: 3.51, points: 1 }, { performance: 3.42, points: 0.5 }, { performance: 3.33, points: 0 }, { performance: 3.24, points: -0.5 },
       { performance: 3.15, points: -1 }, { performance: 3.06, points: -1.5 }, { performance: 2.97, points: -2 }, { performance: 2.88, points: -2.5 },
       { performance: 2.79, points: -3 }, { performance: 2.70, points: -3.5 }, { performance: 2.61, points: -4 }
   ],
   "w": [
       { performance: 4.48, points: 15 }, { performance: 4.455, points: 14.5 }, { performance: 4.38, points: 14 }, { performance: 4.355, points: 13.5 },
       { performance: 4.27, points: 13 }, { performance: 4.24, points: 12.5 }, { performance: 4.15, points: 12 }, { performance: 4.12, points: 11.5 },
       { performance: 4.03, points: 11 }, { performance: 4.0, points: 10.5 }, { performance: 3.91, points: 10 }, { performance: 3.88, points: 9.5 },
       { performance: 3.79, points: 9 }, { performance: 3.76, points: 8.5 }, { performance: 3.67, points: 8 }, { performance: 3.64, points: 7.5 },
       { performance: 3.55, points: 7 }, { performance: 3.52, points: 6.5 }, { performance: 3.43, points: 6 }, { performance: 3.405, points: 5.5 },
       { performance: 3.33, points: 5 }, { performance: 3.3, points: 4.5 }, { performance: 3.20, points: 4 }, { performance: 3.165, points: 3.5 },
       { performance: 3.06, points: 3 }, { performance: 3.025, points: 2.5 }, { performance: 2.92, points: 2 }, { performance: 2.885, points: 1.5 },
       { performance: 2.78, points: 1 }, { performance: 2.71, points: 0.5 }, { performance: 2.64, points: 0 }, { performance: 2.57, points: -0.5 },
       { performance: 2.50, points: -1 }, { performance: 2.43, points: -1.5 }, { performance: 2.36, points: -2 }, { performance: 2.29, points: -2.5 },
       { performance: 2.22, points: -3 }, { performance: 2.15, points: -3.5 }, { performance: 2.08, points: -4 }
   ]
},

"la_hoch": {
   "m": [
       { performance: 1.65, points: 15 }, { performance: 1.64, points: 14.5 }, { performance: 1.63, points: 14 }, { performance: 1.62, points: 13.5 },
       { performance: 1.61, points: 13 }, { performance: 1.595, points: 12.5 }, { performance: 1.58, points: 12 }, { performance: 1.565, points: 11.5 },
       { performance: 1.55, points: 11 }, { performance: 1.535, points: 10.5 }, { performance: 1.52, points: 10 }, { performance: 1.505, points: 9.5 },
       { performance: 1.49, points: 9 }, { performance: 1.475, points: 8.5 }, { performance: 1.46, points: 8 }, { performance: 1.445, points: 7.5 },
       { performance: 1.43, points: 7 }, { performance: 1.41, points: 6.5 }, { performance: 1.39, points: 6 }, { performance: 1.365, points: 5.5 },
       { performance: 1.35, points: 5 }, { performance: 1.335, points: 4.5 }, { performance: 1.32, points: 4 }, { performance: 1.305, points: 3.5 },
       { performance: 1.29, points: 3 }, { performance: 1.27, points: 2.5 }, { performance: 1.25, points: 2 }, { performance: 1.23, points: 1.5 },
       { performance: 1.21, points: 1 }, { performance: 1.19, points: 0.5 }, { performance: 1.17, points: 0 }, { performance: 1.15, points: -0.5 },
       { performance: 1.13, points: -1 }, { performance: 1.11, points: -1.5 }, { performance: 1.09, points: -2 }, { performance: 1.07, points: -2.5 },
       { performance: 1.05, points: -3 }, { performance: 1.03, points: -3.5 }, { performance: 1.01, points: -4 }
   ],
   "w": [
       { performance: 1.41, points: 15 }, { performance: 1.40, points: 14.5 }, { performance: 1.39, points: 14 }, { performance: 1.38, points: 13.5 },
       { performance: 1.37, points: 13 }, { performance: 1.36, points: 12.5 }, { performance: 1.35, points: 12 }, { performance: 1.335, points: 11.5 },
       { performance: 1.32, points: 11 }, { performance: 1.305, points: 10.5 }, { performance: 1.29, points: 10 }, { performance: 1.28, points: 9.5 },
       { performance: 1.27, points: 9 }, { performance: 1.26, points: 8.5 }, { performance: 1.25, points: 8 }, { performance: 1.24, points: 7.5 },
       { performance: 1.23, points: 7 }, { performance: 1.22, points: 6.5 }, { performance: 1.21, points: 6 }, { performance: 1.195, points: 5.5 },
       { performance: 1.18, points: 5 }, { performance: 1.17, points: 4.5 }, { performance: 1.16, points: 4 }, { performance: 1.145, points: 3.5 },
       { performance: 1.13, points: 3 }, { performance: 1.12, points: 2.5 }, { performance: 1.10, points: 2 }, { performance: 1.085, points: 1.5 },
       { performance: 1.07, points: 1 }, { performance: 1.055, points: 0.5 }, { performance: 1.04, points: 0 }, { performance: 1.025, points: -0.5 },
       { performance: 1.01, points: -1 }, { performance: 0.995, points: -1.5 }, { performance: 0.98, points: -2 }, { performance: 0.965, points: -2.5 },
       { performance: 0.95, points: -3 }, { performance: 0.935, points: -3.5 }, { performance: 0.92, points: -4 }
   ]
},
"la_kugel": {
   "m": [
       { performance: 9.82, points: 15 }, { performance: 9.75, points: 14.5 }, { performance: 9.54, points: 14 }, { performance: 9.47, points: 13.5 },
       { performance: 9.26, points: 13 }, { performance: 9.19, points: 12.5 }, { performance: 8.98, points: 12 }, { performance: 8.91, points: 11.5 },
       { performance: 8.70, points: 11 }, { performance: 8.63, points: 10.5 }, { performance: 8.42, points: 10 }, { performance: 8.345, points: 9.5 },
       { performance: 8.12, points: 9 }, { performance: 8.045, points: 8.5 }, { performance: 7.81, points: 8 }, { performance: 7.73, points: 7.5 },
       { performance: 7.49, points: 7 }, { performance: 7.41, points: 6.5 }, { performance: 7.16, points: 6 }, { performance: 7.075, points: 5.5 },
       { performance: 6.82, points: 5 }, { performance: 6.73, points: 4.5 }, { performance: 6.46, points: 4 }, { performance: 6.37, points: 3.5 },
       { performance: 6.10, points: 3 }, { performance: 6.01, points: 2.5 }, { performance: 5.74, points: 2 }, { performance: 5.65, points: 1.5 },
       { performance: 5.38, points: 1 }, { performance: 5.20, points: 0.5 }, { performance: 5.02, points: 0 }, { performance: 4.84, points: -0.5 },
       { performance: 4.66, points: -1 }, { performance: 4.48, points: -1.5 }, { performance: 4.30, points: -2 }, { performance: 4.12, points: -2.5 },
       { performance: 3.94, points: -3 }, { performance: 3.76, points: -3.5 }, { performance: 3.58, points: -4 }
   ],
   "w": [
       { performance: 8.46, points: 15 }, { performance: 8.415, points: 14.5 }, { performance: 8.28, points: 14 }, { performance: 8.23, points: 13.5 },
       { performance: 8.08, points: 13 }, { performance: 8.025, points: 12.5 }, { performance: 7.86, points: 12 }, { performance: 7.805, points: 11.5 },
       { performance: 7.64, points: 11 }, { performance: 7.585, points: 10.5 }, { performance: 7.42, points: 10 }, { performance: 7.36, points: 9.5 },
       { performance: 7.18, points: 9 }, { performance: 7.12, points: 8.5 }, { performance: 6.94, points: 8 }, { performance: 6.88, points: 7.5 },
       { performance: 6.70, points: 7 }, { performance: 6.64, points: 6.5 }, { performance: 6.45, points: 6 }, { performance: 6.385, points: 5.5 },
       { performance: 6.19, points: 5 }, { performance: 6.125, points: 4.5 }, { performance: 5.92, points: 4 }, { performance: 5.85, points: 3.5 },
       { performance: 5.64, points: 3 }, { performance: 5.57, points: 2.5 }, { performance: 5.36, points: 2 }, { performance: 5.29, points: 1.5 },
       { performance: 5.08, points: 1 }, { performance: 4.94, points: 0.5 }, { performance: 4.80, points: 0 }, { performance: 4.66, points: -0.5 },
       { performance: 4.52, points: -1 }, { performance: 4.38, points: -1.5 }, { performance: 4.24, points: -2 }, { performance: 4.10, points: -2.5 },
       { performance: 3.96, points: -3 }, { performance: 3.82, points: -3.5 }, { performance: 3.68, points: -4 }
   ]
},

"la_diskus": {
   "m": [
       { performance: 28.75, points: 15 }, { performance: 28.55, points: 14.5 }, { performance: 27.95, points: 14 }, { performance: 27.75, points: 13.5 },
       { performance: 27.15, points: 13 }, { performance: 26.925, points: 12.5 }, { performance: 26.25, points: 12 }, { performance: 26.025, points: 11.5 },
       { performance: 25.35, points: 11 }, { performance: 25.125, points: 10.5 }, { performance: 24.45, points: 10 }, { performance: 24.225, points: 9.5 },
       { performance: 23.50, points: 9 }, { performance: 23.25, points: 8.5 }, { performance: 22.50, points: 8 }, { performance: 22.25, points: 7.5 },
       { performance: 21.50, points: 7 }, { performance: 21.25, points: 6.5 }, { performance: 20.50, points: 6 }, { performance: 20.225, points: 5.5 },
       { performance: 19.40, points: 5 }, { performance: 19.125, points: 4.5 }, { performance: 18.30, points: 4 }, { performance: 18.025, points: 3.5 },
       { performance: 17.20, points: 3 }, { performance: 16.925, points: 2.5 }, { performance: 16.10, points: 2 }, { performance: 15.825, points: 1.5 },
       { performance: 15.00, points: 1 }, { performance: 14.45, points: 0.5 }, { performance: 13.90, points: 0 }, { performance: 13.35, points: -0.5 },
       { performance: 12.80, points: -1 }, { performance: 12.25, points: -1.5 }, { performance: 11.70, points: -2 }, { performance: 11.15, points: -2.5 },
       { performance: 10.60, points: -3 }, { performance: 10.05, points: -3.5 }, { performance: 9.50, points: -4 }
   ],
   "w": [
       { performance: 23.64, points: 15 }, { performance: 23.465, points: 14.5 }, { performance: 22.94, points: 14 }, { performance: 22.765, points: 13.5 },
       { performance: 22.19, points: 13 }, { performance: 21.99, points: 12.5 }, { performance: 21.39, points: 12 }, { performance: 21.19, points: 11.5 },
       { performance: 20.59, points: 11 }, { performance: 20.39, points: 10.5 }, { performance: 19.79, points: 10 }, { performance: 19.565, points: 9.5 },
       { performance: 18.89, points: 9 }, { performance: 18.665, points: 8.5 }, { performance: 17.99, points: 8 }, { performance: 17.76, points: 7.5 },
       { performance: 17.05, points: 7 }, { performance: 16.81, points: 6.5 }, { performance: 16.07, points: 6 }, { performance: 15.82, points: 5.5 },
       { performance: 14.97, points: 5 }, { performance: 14.72, points: 4.5 }, { performance: 13.96, points: 4 }, { performance: 13.70, points: 3.5 },
       { performance: 12.92, points: 3 }, { performance: 12.645, points: 2.5 }, { performance: 11.82, points: 2 }, { performance: 11.545, points: 1.5 },
       { performance: 10.72, points: 1 }, { performance: 10.31, points: 0.5 }, { performance: 9.90, points: 0 }, { performance: 9.49, points: -0.5 },
       { performance: 9.08, points: -1 }, { performance: 8.67, points: -1.5 }, { performance: 8.26, points: -2 }, { performance: 7.85, points: -2.5 },
       { performance: 7.44, points: -3 }, { performance: 7.03, points: -3.5 }, { performance: 6.62, points: -4 }
   ]
},

"la_speer": {
   "m": [
       { performance: 37.10, points: 15 }, { performance: 36.775, points: 14.5 }, { performance: 35.80, points: 14 }, { performance: 35.475, points: 13.5 },
       { performance: 34.50, points: 13 }, { performance: 34.15, points: 12.5 }, { performance: 33.10, points: 12 }, { performance: 32.75, points: 11.5 },
       { performance: 31.55, points: 11 }, { performance: 31.175, points: 10.5 }, { performance: 30.05, points: 10 }, { performance: 29.675, points: 9.5 },
       { performance: 28.55, points: 9 }, { performance: 28.175, points: 8.5 }, { performance: 27.05, points: 8 }, { performance: 26.675, points: 7.5 },
       { performance: 25.55, points: 7 }, { performance: 25.175, points: 6.5 }, { performance: 24.00, points: 6 }, { performance: 23.60, points: 5.5 },
       { performance: 22.40, points: 5 }, { performance: 22.00, points: 4.5 }, { performance: 20.80, points: 4 }, { performance: 20.40, points: 3.5 },
       { performance: 19.20, points: 3 }, { performance: 18.80, points: 2.5 }, { performance: 17.60, points: 2 }, { performance: 17.175, points: 1.5 },
       { performance: 15.90, points: 1 }, { performance: 15.05, points: 0.5 }, { performance: 14.20, points: 0 }, { performance: 13.35, points: -0.5 },
       { performance: 12.50, points: -1 }, { performance: 11.65, points: -1.5 }, { performance: 10.80, points: -2 }, { performance: 9.95, points: -2.5 },
       { performance: 9.10, points: -3 }, { performance: 8.25, points: -3.5 }, { performance: 7.40, points: -4 }
   ],
   "w": [
       { performance: 25.68, points: 15 }, { performance: 25.505, points: 14.5 }, { performance: 24.94, points: 14 }, { performance: 24.74, points: 13.5 },
       { performance: 24.14, points: 13 }, { performance: 23.94, points: 12.5 }, { performance: 23.32, points: 12 }, { performance: 23.11, points: 11.5 },
       { performance: 22.48, points: 11 }, { performance: 22.27, points: 10.5 }, { performance: 21.61, points: 10 }, { performance: 21.385, points: 9.5 },
       { performance: 20.71, points: 9 }, { performance: 20.485, points: 8.5 }, { performance: 19.76, points: 8 }, { performance: 19.51, points: 7.5 },
       { performance: 18.76, points: 7 }, { performance: 18.51, points: 6.5 }, { performance: 17.76, points: 6 }, { performance: 17.51, points: 5.5 },
       { performance: 16.76, points: 5 }, { performance: 16.51, points: 4.5 }, { performance: 15.76, points: 4 }, { performance: 15.51, points: 3.5 },
       { performance: 14.75, points: 3 }, { performance: 14.475, points: 2.5 }, { performance: 13.65, points: 2 }, { performance: 13.375, points: 1.5 },
       { performance: 12.55, points: 1 }, { performance: 12.105, points: 0.5 }, { performance: 11.66, points: 0 }, { performance: 11.215, points: -0.5 },
       { performance: 10.77, points: -1 }, { performance: 10.325, points: -1.5 }, { performance: 9.88, points: -2 }, { performance: 9.435, points: -2.5 },
       { performance: 8.99, points: -3 }, { performance: 8.545, points: -3.5 }, { performance: 8.10, points: -4 }
   ]
},
"la_3000m": {
   "m": [
       { performance: 696, points: 15 }, { performance: 700, points: 14.5 }, { performance: 704, points: 14 }, { performance: 711.5, points: 13.5 },
       { performance: 714, points: 13 }, { performance: 720, points: 12.5 }, { performance: 726, points: 12 }, { performance: 734.5, points: 11.5 },
       { performance: 740, points: 11 }, { performance: 751.5, points: 10.5 }, { performance: 755, points: 10 }, { performance: 767, points: 9.5 },
       { performance: 771, points: 9 }, { performance: 784, points: 8.5 }, { performance: 789, points: 8 }, { performance: 804.5, points: 7.5 },
       { performance: 810, points: 7 }, { performance: 827, points: 6.5 }, { performance: 833, points: 6 }, { performance: 850, points: 5.5 },
       { performance: 863, points: 5 }, { performance: 880.5, points: 4.5 }, { performance: 898, points: 4 }, { performance: 917.5, points: 3.5 },
       { performance: 937, points: 3 }, { performance: 961.5, points: 2.5 }, { performance: 986, points: 2 }, { performance: 1015.5, points: 1.5 },
       { performance: 1045, points: 1 }, { performance: 1079, points: 0.5 }, { performance: 1113, points: 0 }, { performance: 1147, points: -0.5 },
       { performance: 1181, points: -1 }, { performance: 1215, points: -1.5 }, { performance: 1249, points: -2 }, { performance: 1283, points: -2.5 },
       { performance: 1317, points: -3 }, { performance: 1351, points: -3.5 }, { performance: 1385, points: -4 }
   ],
   "w": [
       { performance: 824, points: 15 }, { performance: 832.5, points: 14.5 }, { performance: 836, points: 14 }, { performance: 846.5, points: 13.5 },
       { performance: 850, points: 13 }, { performance: 862, points: 12.5 }, { performance: 867, points: 12 }, { performance: 882.5, points: 11.5 },
       { performance: 888, points: 11 }, { performance: 903.5, points: 10.5 }, { performance: 909, points: 10 }, { performance: 926, points: 9.5 },
       { performance: 932, points: 9 }, { performance: 950.5, points: 8.5 }, { performance: 958, points: 8 }, { performance: 982, points: 7.5 },
       { performance: 990, points: 7 }, { performance: 1015.5, points: 6.5 }, { performance: 1024, points: 6 }, { performance: 1056.5, points: 5.5 },
       { performance: 1068, points: 5 }, { performance: 1105, points: 4.5 }, { performance: 1119, points: 4 }, { performance: 1165, points: 3.5 },
       { performance: 1181, points: 3 }, { performance: 1241, points: 2.5 }, { performance: 1261, points: 2 }, { performance: 1331.5, points: 1.5 },
       { performance: 1357, points: 1 }, { performance: 1452.5, points: 0.5 }, { performance: 1548, points: 0 }, { performance: 1643.5, points: -0.5 },
       { performance: 1739, points: -1 }, { performance: 1834.5, points: -1.5 }, { performance: 1930, points: -2 }, { performance: 2025.5, points: -2.5 },
       { performance: 2121, points: -3 }, { performance: 2216.5, points: -3.5 }, { performance: 2312, points: -4 }
   ]
},

"swim_50_brust": {
   "m": [
       { performance: 40.7, points: 15 }, { performance: 40.95, points: 14.5 }, { performance: 41.8, points: 14 }, { performance: 42.1, points: 13.5 },
       { performance: 43.1, points: 13 }, { performance: 43.45, points: 12.5 }, { performance: 44.5, points: 12 }, { performance: 44.9, points: 11.5 },
       { performance: 46.1, points: 11 }, { performance: 46.5, points: 10.5 }, { performance: 47.7, points: 10 }, { performance: 48.15, points: 9.5 },
       { performance: 49.5, points: 9 }, { performance: 49.95, points: 8.5 }, { performance: 51.3, points: 8 }, { performance: 51.75, points: 7.5 },
       { performance: 53.2, points: 7 }, { performance: 53.7, points: 6.5 }, { performance: 55.2, points: 6 }, { performance: 55.7, points: 5.5 },
       { performance: 57.2, points: 5 }, { performance: 57.75, points: 4.5 }, { performance: 59.4, points: 4 }, { performance: 59.95, points: 3.5 },
       { performance: 61.7, points: 3 }, { performance: 62.3, points: 2.5 }, { performance: 64.1, points: 2 }, { performance: 64.7, points: 1.5 },
       { performance: 66.5, points: 1 }, { performance: 67.3, points: 0.5 }, { performance: 68.1, points: 0 }, { performance: 68.9, points: -0.5 },
       { performance: 69.7, points: -1 }, { performance: 70.5, points: -1.5 }, { performance: 71.3, points: -2 }, { performance: 72.1, points: -2.5 },
       { performance: 72.9, points: -3 }, { performance: 73.7, points: -3.5 }, { performance: 74.5, points: -4 }
   ],
   "w": [
       { performance: 45.4, points: 15 }, { performance: 45.7, points: 14.5 }, { performance: 46.6, points: 14 }, { performance: 46.9, points: 13.5 },
       { performance: 47.9, points: 13 }, { performance: 48.25, points: 12.5 }, { performance: 49.3, points: 12 }, { performance: 49.7, points: 11.5 },
       { performance: 50.9, points: 11 }, { performance: 51.3, points: 10.5 }, { performance: 52.6, points: 10 }, { performance: 53.05, points: 9.5 },
       { performance: 54.4, points: 9 }, { performance: 54.85, points: 8.5 }, { performance: 56.3, points: 8 }, { performance: 56.8, points: 7.5 },
       { performance: 58.3, points: 7 }, { performance: 58.8, points: 6.5 }, { performance: 60.3, points: 6 }, { performance: 60.85, points: 5.5 },
       { performance: 62.5, points: 5 }, { performance: 63.05, points: 4.5 }, { performance: 64.7, points: 4 }, { performance: 65.25, points: 3.5 },
       { performance: 66.9, points: 3 }, { performance: 67.55, points: 2.5 }, { performance: 69.4, points: 2 }, { performance: 70.0, points: 1.5 },
       { performance: 71.8, points: 1 }, { performance: 72.6, points: 0.5 }, { performance: 73.4, points: 0 }, { performance: 74.2, points: -0.5 },
       { performance: 75.0, points: -1 }, { performance: 75.8, points: -1.5 }, { performance: 76.6, points: -2 }, { performance: 77.4, points: -2.5 },
       { performance: 78.2, points: -3 }, { performance: 79.0, points: -3.5 }, { performance: 79.8, points: -4 }
   ]
},

"swim_50_rucken": {
   "m": [
       { performance: 39.0, points: 15 }, { performance: 39.15, points: 14.5 }, { performance: 39.7, points: 14 }, { performance: 39.95, points: 13.5 },
       { performance: 40.7, points: 13 }, { performance: 41.0, points: 12.5 }, { performance: 41.9, points: 12 }, { performance: 42.2, points: 11.5 },
       { performance: 43.2, points: 11 }, { performance: 43.55, points: 10.5 }, { performance: 44.7, points: 10 }, { performance: 45.1, points: 9.5 },
       { performance: 46.4, points: 9 }, { performance: 46.85, points: 8.5 }, { performance: 48.2, points: 8 }, { performance: 48.65, points: 7.5 },
       { performance: 50.0, points: 7 }, { performance: 50.45, points: 6.5 }, { performance: 51.9, points: 6 }, { performance: 52.4, points: 5.5 },
       { performance: 53.9, points: 5 }, { performance: 54.45, points: 4.5 }, { performance: 56.0, points: 4 }, { performance: 56.55, points: 3.5 },
       { performance: 58.2, points: 3 }, { performance: 58.75, points: 2.5 }, { performance: 60.4, points: 2 }, { performance: 60.95, points: 1.5 },
       { performance: 62.6, points: 1 }, { performance: 63.45, points: 0.5 }, { performance: 64.3, points: 0 }, { performance: 65.15, points: -0.5 },
       { performance: 66.0, points: -1 }, { performance: 66.85, points: -1.5 }, { performance: 67.7, points: -2 }, { performance: 68.55, points: -2.5 },
       { performance: 69.4, points: -3 }, { performance: 70.25, points: -3.5 }, { performance: 71.1, points: -4 }
   ],
   "w": [
       { performance: 43.9, points: 15 }, { performance: 44.1, points: 14.5 }, { performance: 44.8, points: 14 }, { performance: 45.05, points: 13.5 },
       { performance: 45.9, points: 13 }, { performance: 46.2, points: 12.5 }, { performance: 47.2, points: 12 }, { performance: 47.55, points: 11.5 },
       { performance: 48.7, points: 11 }, { performance: 49.1, points: 10.5 }, { performance: 50.3, points: 10 }, { performance: 50.7, points: 9.5 },
       { performance: 52.0, points: 9 }, { performance: 52.45, points: 8.5 }, { performance: 53.8, points: 8 }, { performance: 54.3, points: 7.5 },
       { performance: 55.8, points: 7 }, { performance: 56.35, points: 6.5 }, { performance: 58.0, points: 6 }, { performance: 58.55, points: 5.5 },
       { performance: 60.3, points: 5 }, { performance: 60.9, points: 4.5 }, { performance: 62.8, points: 4 }, { performance: 63.45, points: 3.5 },
       { performance: 65.4, points: 3 }, { performance: 66.05, points: 2.5 }, { performance: 68.1, points: 2 }, { performance: 68.8, points: 1.5 },
       { performance: 70.9, points: 1 }, { performance: 71.75, points: 0.5 }, { performance: 72.6, points: 0 }, { performance: 73.45, points: -0.5 },
       { performance: 74.3, points: -1 }, { performance: 75.15, points: -1.5 }, { performance: 76.0, points: -2 }, { performance: 76.85, points: -2.5 },
       { performance: 77.7, points: -3 }, { performance: 78.55, points: -3.5 }, { performance: 79.4, points: -4 }
   ]
},
"swim_50_delphin": {
   "m": [
       { performance: 39.0, points: 15 }, { performance: 39.15, points: 14.5 }, { performance: 39.7, points: 14 }, { performance: 39.95, points: 13.5 },
       { performance: 40.7, points: 13 }, { performance: 41.0, points: 12.5 }, { performance: 41.9, points: 12 }, { performance: 42.2, points: 11.5 },
       { performance: 43.2, points: 11 }, { performance: 43.55, points: 10.5 }, { performance: 44.7, points: 10 }, { performance: 45.1, points: 9.5 },
       { performance: 46.4, points: 9 }, { performance: 46.85, points: 8.5 }, { performance: 48.2, points: 8 }, { performance: 48.65, points: 7.5 },
       { performance: 50.0, points: 7 }, { performance: 50.45, points: 6.5 }, { performance: 51.9, points: 6 }, { performance: 52.4, points: 5.5 },
       { performance: 53.9, points: 5 }, { performance: 54.45, points: 4.5 }, { performance: 56.0, points: 4 }, { performance: 56.55, points: 3.5 },
       { performance: 58.2, points: 3 }, { performance: 58.75, points: 2.5 }, { performance: 60.4, points: 2 }, { performance: 60.95, points: 1.5 },
       { performance: 62.6, points: 1 }, { performance: 63.45, points: 0.5 }, { performance: 64.3, points: 0 }, { performance: 65.15, points: -0.5 },
       { performance: 66.0, points: -1 }, { performance: 66.85, points: -1.5 }, { performance: 67.7, points: -2 }, { performance: 68.55, points: -2.5 },
       { performance: 69.4, points: -3 }, { performance: 70.25, points: -3.5 }, { performance: 71.1, points: -4 }
   ],
   "w": [
       { performance: 37.8, points: 15 }, { performance: 37.9, points: 14.5 }, { performance: 38.3, points: 14 }, { performance: 38.45, points: 13.5 },
       { performance: 39.0, points: 13 }, { performance: 39.2, points: 12.5 }, { performance: 39.8, points: 12 }, { performance: 40.0, points: 11.5 },
       { performance: 40.7, points: 11 }, { performance: 40.95, points: 10.5 }, { performance: 41.7, points: 10 }, { performance: 42.05, points: 9.5 },
       { performance: 43.1, points: 9 }, { performance: 43.5, points: 8.5 }, { performance: 44.8, points: 8 }, { performance: 45.25, points: 7.5 },
       { performance: 46.6, points: 7 }, { performance: 47.05, points: 6.5 }, { performance: 48.5, points: 6 }, { performance: 49.0, points: 5.5 },
       { performance: 50.5, points: 5 }, { performance: 51.05, points: 4.5 }, { performance: 52.7, points: 4 }, { performance: 53.25, points: 3.5 },
       { performance: 54.9, points: 3 }, { performance: 55.5, points: 2.5 }, { performance: 57.3, points: 2 }, { performance: 57.9, points: 1.5 },
       { performance: 59.7, points: 1 }, { performance: 60.55, points: 0.5 }, { performance: 61.4, points: 0 }, { performance: 62.25, points: -0.5 },
       { performance: 63.1, points: -1 }, { performance: 63.95, points: -1.5 }, { performance: 64.8, points: -2 }, { performance: 65.65, points: -2.5 },
       { performance: 66.5, points: -3 }, { performance: 67.35, points: -3.5 }, { performance: 68.2, points: -4 }
   ]
},

"swim_50_freistil": {
   "m": [
       { performance: 33.4, points: 15 }, { performance: 33.55, points: 14.5 }, { performance: 34.1, points: 14 }, { performance: 34.3, points: 13.5 },
       { performance: 34.9, points: 13 }, { performance: 35.15, points: 12.5 }, { performance: 35.9, points: 12 }, { performance: 36.15, points: 11.5 },
       { performance: 37.0, points: 11 }, { performance: 37.3, points: 10.5 }, { performance: 38.2, points: 10 }, { performance: 38.55, points: 9.5 },
       { performance: 39.6, points: 9 }, { performance: 39.95, points: 8.5 }, { performance: 41.1, points: 8 }, { performance: 41.5, points: 7.5 },
       { performance: 42.7, points: 7 }, { performance: 43.15, points: 6.5 }, { performance: 44.5, points: 6 }, { performance: 44.95, points: 5.5 },
       { performance: 46.3, points: 5 }, { performance: 46.8, points: 4.5 }, { performance: 48.3, points: 4 }, { performance: 48.8, points: 3.5 },
       { performance: 50.3, points: 3 }, { performance: 50.85, points: 2.5 }, { performance: 52.5, points: 2 }, { performance: 53.05, points: 1.5 },
       { performance: 54.7, points: 1 }, { performance: 55.55, points: 0.5 }, { performance: 56.4, points: 0 }, { performance: 57.25, points: -0.5 },
       { performance: 58.1, points: -1 }, { performance: 58.95, points: -1.5 }, { performance: 59.8, points: -2 }, { performance: 60.65, points: -2.5 },
       { performance: 61.5, points: -3 }, { performance: 62.35, points: -3.5 }, { performance: 63.2, points: -4 }
   ],
   "w": [
       { performance: 37.8, points: 15 }, { performance: 37.9, points: 14.5 }, { performance: 38.3, points: 14 }, { performance: 38.45, points: 13.5 },
       { performance: 39.0, points: 13 }, { performance: 39.2, points: 12.5 }, { performance: 39.8, points: 12 }, { performance: 40.0, points: 11.5 },
       { performance: 40.7, points: 11 }, { performance: 40.95, points: 10.5 }, { performance: 41.7, points: 10 }, { performance: 42.05, points: 9.5 },
       { performance: 43.1, points: 9 }, { performance: 43.5, points: 8.5 }, { performance: 44.8, points: 8 }, { performance: 45.25, points: 7.5 },
       { performance: 46.6, points: 7 }, { performance: 47.05, points: 6.5 }, { performance: 48.5, points: 6 }, { performance: 49.0, points: 5.5 },
       { performance: 50.5, points: 5 }, { performance: 51.05, points: 4.5 }, { performance: 52.7, points: 4 }, { performance: 53.25, points: 3.5 },
       { performance: 54.9, points: 3 }, { performance: 55.5, points: 2.5 }, { performance: 57.3, points: 2 }, { performance: 57.9, points: 1.5 },
       { performance: 59.7, points: 1 }, { performance: 60.55, points: 0.5 }, { performance: 61.4, points: 0 }, { performance: 62.25, points: -0.5 },
       { performance: 63.1, points: -1 }, { performance: 63.95, points: -1.5 }, { performance: 64.8, points: -2 }, { performance: 65.65, points: -2.5 },
       { performance: 66.5, points: -3 }, { performance: 67.35, points: -3.5 }, { performance: 68.2, points: -4 }
   ]
},

"swim_100_lagen": {
   "m": [
       { performance: 89.1, points: 15 }, { performance: 89.7, points: 14.5 }, { performance: 91.6, points: 14 }, { performance: 92.25, points: 13.5 },
       { performance: 94.3, points: 13 }, { performance: 95.0, points: 12.5 }, { performance: 97.2, points: 12 }, { performance: 97.95, points: 11.5 },
       { performance: 100.3, points: 11 }, { performance: 101.15, points: 10.5 }, { performance: 103.6, points: 10 }, { performance: 104.6, points: 9.5 },
       { performance: 107.5, points: 9 }, { performance: 108.5, points: 8.5 }, { performance: 111.6, points: 8 }, { performance: 112.65, points: 7.5 },
       { performance: 115.9, points: 7 }, { performance: 117.05, points: 6.5 }, { performance: 120.6, points: 6 }, { performance: 121.8, points: 5.5 },
       { performance: 125.5, points: 5 }, { performance: 126.8, points: 4.5 }, { performance: 130.8, points: 4 }, { performance: 132.15, points: 3.5 },
       { performance: 136.3, points: 3 }, { performance: 137.75, points: 2.5 }, { performance: 142.2, points: 2 }, { performance: 143.75, points: 1.5 },
       { performance: 148.4, points: 1 }, { performance: 151.9, points: 0.5 }, { performance: 155.4, points: 0 }, { performance: 158.9, points: -0.5 },
       { performance: 162.4, points: -1 }, { performance: 165.9, points: -1.5 }, { performance: 169.4, points: -2 }, { performance: 172.9, points: -2.5 },
       { performance: 176.4, points: -3 }, { performance: 179.9, points: -3.5 }, { performance: 183.4, points: -4 }
   ],
   "w": [
       { performance: 99.6, points: 15 }, { performance: 100.25, points: 14.5 }, { performance: 102.3, points: 14 }, { performance: 103.0, points: 13.5 },
       { performance: 105.2, points: 13 }, { performance: 106.0, points: 12.5 }, { performance: 108.5, points: 12 }, { performance: 109.35, points: 11.5 },
       { performance: 112.0, points: 11 }, { performance: 112.9, points: 10.5 }, { performance: 115.7, points: 10 }, { performance: 116.65, points: 9.5 },
       { performance: 119.5, points: 9 }, { performance: 120.65, points: 8.5 }, { performance: 124.1, points: 8 }, { performance: 125.3, points: 7.5 },
       { performance: 128.9, points: 7 }, { performance: 130.1, points: 6.5 }, { performance: 133.8, points: 6 }, { performance: 135.05, points: 5.5 },
       { performance: 138.8, points: 5 }, { performance: 140.05, points: 4.5 }, { performance: 143.9, points: 4 }, { performance: 145.25, points: 3.5 },
       { performance: 149.4, points: 3 }, { performance: 150.8, points: 2.5 }, { performance: 155.2, points: 2 }, { performance: 156.7, points: 1.5 },
       { performance: 161.2, points: 1 }, { performance: 164.7, points: 0.5 }, { performance: 168.2, points: 0 }, { performance: 171.7, points: -0.5 },
       { performance: 175.2, points: -1 }, { performance: 178.7, points: -1.5 }, { performance: 182.2, points: -2 }, { performance: 185.7, points: -2.5 },
       { performance: 189.2, points: -3 }, { performance: 192.7, points: -3.5 }, { performance: 196.2, points: -4 }
   ]
},
"swim_200_brust": {
   "m": [
       { performance: 216.0, points: 15 }, { performance: 217.35, points: 14.5 }, { performance: 221.8, points: 14 }, { performance: 223.35, points: 13.5 },
       { performance: 228.2, points: 13 }, { performance: 229.9, points: 12.5 }, { performance: 235.2, points: 12 }, { performance: 237.05, points: 11.5 },
       { performance: 242.8, points: 11 }, { performance: 244.8, points: 10.5 }, { performance: 251.0, points: 10 }, { performance: 253.15, points: 9.5 },
       { performance: 259.8, points: 9 }, { performance: 262.1, points: 8.5 }, { performance: 269.3, points: 8 }, { performance: 271.75, points: 7.5 },
       { performance: 279.3, points: 7 }, { performance: 282.0, points: 6.5 }, { performance: 290.3, points: 6 }, { performance: 293.1, points: 5.5 },
       { performance: 301.8, points: 5 }, { performance: 304.9, points: 4.5 }, { performance: 314.0, points: 4 }, { performance: 317.2, points: 3.5 },
       { performance: 327.0, points: 3 }, { performance: 330.35, points: 2.5 }, { performance: 340.7, points: 2 }, { performance: 344.2, points: 1.5 },
       { performance: 354.7, points: 1 }, { performance: 361.35, points: 0.5 }, { performance: 368.0, points: 0 }, { performance: 374.65, points: -0.5 },
       { performance: 381.3, points: -1 }, { performance: 387.95, points: -1.5 }, { performance: 394.6, points: -2 }, { performance: 401.25, points: -2.5 },
       { performance: 407.9, points: -3 }, { performance: 414.55, points: -3.5 }, { performance: 421.2, points: -4 }
   ],
   "w": [
       { performance: 233.4, points: 15 }, { performance: 234.85, points: 14.5 }, { performance: 239.4, points: 14 }, { performance: 240.95, points: 13.5 },
       { performance: 245.8, points: 13 }, { performance: 247.5, points: 12.5 }, { performance: 252.8, points: 12 }, { performance: 254.65, points: 11.5 },
       { performance: 260.4, points: 11 }, { performance: 262.5, points: 10.5 }, { performance: 268.6, points: 10 }, { performance: 270.75, points: 9.5 },
       { performance: 277.4, points: 9 }, { performance: 280.2, points: 8.5 }, { performance: 287.9, points: 8 }, { performance: 290.35, points: 7.5 },
       { performance: 298.0, points: 7 }, { performance: 300.65, points: 6.5 }, { performance: 308.9, points: 6 }, { performance: 311.7, points: 5.5 },
       { performance: 320.4, points: 5 }, { performance: 323.4, points: 4.5 }, { performance: 332.7, points: 4 }, { performance: 335.85, points: 3.5 },
       { performance: 345.6, points: 3 }, { performance: 348.95, points: 2.5 }, { performance: 359.3, points: 2 }, { performance: 362.8, points: 1.5 },
       { performance: 373.3, points: 1 }, { performance: 379.65, points: 0.5 }, { performance: 386.0, points: 0 }, { performance: 392.35, points: -0.5 },
       { performance: 398.7, points: -1 }, { performance: 405.05, points: -1.5 }, { performance: 411.4, points: -2 }, { performance: 417.75, points: -2.5 },
       { performance: 424.1, points: -3 }, { performance: 430.45, points: -3.5 }, { performance: 436.8, points: -4 }
   ]
},

"swim_200_freistil": {
   "m": [
       { performance: 171.1, points: 15 }, { performance: 172.45, points: 14.5 }, { performance: 176.7, points: 14 }, { performance: 178.15, points: 13.5 },
       { performance: 182.7, points: 13 }, { performance: 184.3, points: 12.5 }, { performance: 189.3, points: 12 }, { performance: 191.0, points: 11.5 },
       { performance: 196.3, points: 11 }, { performance: 198.15, points: 10.5 }, { performance: 203.9, points: 10 }, { performance: 205.9, points: 9.5 },
       { performance: 212.1, points: 9 }, { performance: 214.25, points: 8.5 }, { performance: 220.9, points: 8 }, { performance: 223.2, points: 7.5 },
       { performance: 230.3, points: 7 }, { performance: 232.75, points: 6.5 }, { performance: 240.3, points: 6 }, { performance: 242.9, points: 5.5 },
       { performance: 250.9, points: 5 }, { performance: 253.65, points: 4.5 }, { performance: 262.1, points: 4 }, { performance: 265.0, points: 3.5 },
       { performance: 273.9, points: 3 }, { performance: 276.95, points: 2.5 }, { performance: 286.3, points: 2 }, { performance: 289.5, points: 1.5 },
       { performance: 299.1, points: 1 }, { performance: 305.25, points: 0.5 }, { performance: 311.4, points: 0 }, { performance: 317.55, points: -0.5 },
       { performance: 323.7, points: -1 }, { performance: 329.85, points: -1.5 }, { performance: 336.0, points: -2 }, { performance: 342.15, points: -2.5 },
       { performance: 348.3, points: -3 }, { performance: 354.45, points: -3.5 }, { performance: 360.6, points: -4 }
   ],
   "w": [
       { performance: 185.0, points: 15 }, { performance: 186.35, points: 14.5 }, { performance: 190.6, points: 14 }, { performance: 192.05, points: 13.5 },
       { performance: 196.6, points: 13 }, { performance: 198.2, points: 12.5 }, { performance: 203.2, points: 12 }, { performance: 204.9, points: 11.5 },
       { performance: 210.2, points: 11 }, { performance: 212.05, points: 10.5 }, { performance: 217.8, points: 10 }, { performance: 219.8, points: 9.5 },
       { performance: 226.0, points: 9 }, { performance: 228.15, points: 8.5 }, { performance: 234.8, points: 8 }, { performance: 237.1, points: 7.5 },
       { performance: 244.2, points: 7 }, { performance: 246.65, points: 6.5 }, { performance: 254.2, points: 6 }, { performance: 256.8, points: 5.5 },
       { performance: 264.8, points: 5 }, { performance: 267.55, points: 4.5 }, { performance: 276.0, points: 4 }, { performance: 278.9, points: 3.5 },
       { performance: 287.8, points: 3 }, { performance: 290.85, points: 2.5 }, { performance: 300.2, points: 2 }, { performance: 303.4, points: 1.5 },
       { performance: 313.1, points: 1 }, { performance: 319.25, points: 0.5 }, { performance: 325.4, points: 0 }, { performance: 331.55, points: -0.5 },
       { performance: 337.7, points: -1 }, { performance: 343.85, points: -1.5 }, { performance: 350.0, points: -2 }, { performance: 356.15, points: -2.5 },
       { performance: 362.3, points: -3 }, { performance: 368.45, points: -3.5 }, { performance: 374.6, points: -4 }
   ]
},

"swim_200_rd": {
   "m": [
       { performance: 196.3, points: 15 }, { performance: 197.7, points: 14.5 }, { performance: 202.1, points: 14 }, { performance: 203.65, points: 13.5 },
       { performance: 208.5, points: 13 }, { performance: 210.15, points: 12.5 }, { performance: 215.4, points: 12 }, { performance: 217.2, points: 11.5 },
       { performance: 222.9, points: 11 }, { performance: 224.85, points: 10.5 }, { performance: 231.0, points: 10 }, { performance: 233.1, points: 9.5 },
       { performance: 239.7, points: 9 }, { performance: 241.95, points: 8.5 }, { performance: 249.0, points: 8 }, { performance: 251.4, points: 7.5 },
       { performance: 258.9, points: 7 }, { performance: 261.5, points: 6.5 }, { performance: 269.4, points: 6 }, { performance: 272.1, points: 5.5 },
       { performance: 280.5, points: 5 }, { performance: 283.4, points: 4.5 }, { performance: 292.4, points: 4 }, { performance: 295.45, points: 3.5 },
       { performance: 305.0, points: 3 }, { performance: 308.25, points: 2.5 }, { performance: 318.5, points: 2 }, { performance: 322.0, points: 1.5 },
       { performance: 332.5, points: 1 }, { performance: 339.0, points: 0.5 }, { performance: 345.5, points: 0 }, { performance: 352.0, points: -0.5 },
       { performance: 358.5, points: -1 }, { performance: 365.0, points: -1.5 }, { performance: 371.5, points: -2 }, { performance: 378.0, points: -2.5 },
       { performance: 384.5, points: -3 }, { performance: 391.0, points: -3.5 }, { performance: 397.5, points: -4 }
   ],
   "w": [
       { performance: 217.7, points: 15 }, { performance: 219.1, points: 14.5 }, { performance: 223.5, points: 14 }, { performance: 225.05, points: 13.5 },
       { performance: 229.9, points: 13 }, { performance: 231.55, points: 12.5 }, { performance: 236.8, points: 12 }, { performance: 238.6, points: 11.5 },
       { performance: 244.3, points: 11 }, { performance: 246.25, points: 10.5 }, { performance: 253.4, points: 10 }, { performance: 255.5, points: 9.5 },
       { performance: 262.1, points: 9 }, { performance: 264.35, points: 8.5 }, { performance: 271.4, points: 8 }, { performance: 273.8, points: 7.5 },
       { performance: 281.3, points: 7 }, { performance: 283.85, points: 6.5 }, { performance: 291.8, points: 6 }, { performance: 294.5, points: 5.5 },
       { performance: 302.9, points: 5 }, { performance: 305.8, points: 4.5 }, { performance: 314.8, points: 4 }, { performance: 317.85, points: 3.5 },
       { performance: 327.4, points: 3 }, { performance: 330.65, points: 2.5 }, { performance: 340.9, points: 2 }, { performance: 344.4, points: 1.5 },
       { performance: 354.9, points: 1 }, { performance: 361.4, points: 0.5 }, { performance: 367.9, points: 0 }, { performance: 374.4, points: -0.5 },
       { performance: 380.9, points: -1 }, { performance: 387.4, points: -1.5 }, { performance: 393.9, points: -2 }, { performance: 400.4, points: -2.5 },
       { performance: 406.9, points: -3 }, { performance: 413.4, points: -3.5 }, { performance: 419.9, points: -4 }
   ]
},
"swim_800_freistil": {
   "m": [
       { performance: 928.0, points: 15 }, { performance: 935.075, points: 14.5 }, { performance: 956.3, points: 14 }, { performance: 963.375, points: 13.5 },
       { performance: 985.0, points: 13 }, { performance: 992.075, points: 12.5 }, { performance: 1013.3, points: 12 }, { performance: 1020.375, points: 11.5 },
       { performance: 1042.0, points: 11 }, { performance: 1053.755, points: 10.5 }, { performance: 1089.43, points: 10 }, { performance: 1101.385, points: 9.5 },
       { performance: 1137.26, points: 9 }, { performance: 1149.215, points: 8.5 }, { performance: 1185.09, points: 8 }, { performance: 1197.045, points: 7.5 },
       { performance: 1232.51, points: 7 }, { performance: 1244.47, points: 6.5 }, { performance: 1280.34, points: 6 }, { performance: 1292.3, points: 5.5 },
       { performance: 1330.0, points: 5 }, { performance: 1353.0, points: 4.5 }, { performance: 1424.0, points: 4 }, { performance: 1448.0, points: 3.5 },
       { performance: 1520.0, points: 3 }, { performance: 1544.0, points: 2.5 }, { performance: 1616.0, points: 2 }, { performance: 1640.0, points: 1.5 },
       { performance: 1712.0, points: 1 }, { performance: 1760.0, points: 0.5 }, { performance: 1808.0, points: 0 }, { performance: 1856.0, points: -0.5 },
       { performance: 1904.0, points: -1 }, { performance: 1952.0, points: -1.5 }, { performance: 2000.0, points: -2 }, { performance: 2048.0, points: -2.5 },
       { performance: 2096.0, points: -3 }, { performance: 2144.0, points: -3.5 }, { performance: 2192.0, points: -4 }
   ],
   "w": [
       { performance: 1040.0, points: 15 }, { performance: 1048.075, points: 14.5 }, { performance: 1072.3, points: 14 }, { performance: 1080.375, points: 13.5 },
       { performance: 1105.0, points: 13 }, { performance: 1113.075, points: 12.5 }, { performance: 1137.3, points: 12 }, { performance: 1145.375, points: 11.5 },
       { performance: 1170.0, points: 11 }, { performance: 1183.045, points: 10.5 }, { performance: 1222.17, points: 10 }, { performance: 1235.215, points: 9.5 },
       { performance: 1274.34, points: 9 }, { performance: 1287.385, points: 8.5 }, { performance: 1326.51, points: 8 }, { performance: 1339.755, points: 7.5 },
       { performance: 1379.09, points: 7 }, { performance: 1392.13, points: 6.5 }, { performance: 1431.26, points: 6 }, { performance: 1444.3, points: 5.5 },
       { performance: 1496.0, points: 5 }, { performance: 1516.0, points: 4.5 }, { performance: 1584.0, points: 4 }, { performance: 1608.0, points: 3.5 },
       { performance: 1680.0, points: 3 }, { performance: 1704.0, points: 2.5 }, { performance: 1776.0, points: 2 }, { performance: 1800.0, points: 1.5 },
       { performance: 1872.0, points: 1 }, { performance: 1920.0, points: 0.5 }, { performance: 1968.0, points: 0 }, { performance: 2016.0, points: -0.5 },
       { performance: 2064.0, points: -1 }, { performance: 2112.0, points: -1.5 }, { performance: 2160.0, points: -2 }, { performance: 2208.0, points: -2.5 },
       { performance: 2256.0, points: -3 }, { performance: 2304.0, points: -3.5 }, { performance: 2352.0, points: -4 }
   ]
},
    // --- Ausdauerlauf --- Angepasst an 1/4 Runden bei 450m Strecke und Angelehnt an: https://www.mes-bc.de/cms/wp-content/uploads/2013/02/30min_Laufnoten.pdf
"30min": {
    "m": [
        { performance: 6525, points: 15 }, { performance: 6412.5, points: 14.5 }, { performance: 6300, points: 14 }, { performance: 6187.5, points: 13.5 },
        { performance: 6075, points: 13 }, { performance: 5962.5, points: 12.5 }, { performance: 5850, points: 12 }, { performance: 5737.5, points: 11.5 },
        { performance: 5625, points: 11 }, { performance: 5512.5, points: 10.5 }, { performance: 5400, points: 10 }, { performance: 5287.5, points: 9.5 },
        { performance: 5175, points: 9 }, { performance: 5062.5, points: 8.5 }, { performance: 4950, points: 8 }, { performance: 4837.5, points: 7.5 },
        { performance: 4725, points: 7 }, { performance: 4612.5, points: 6.5 }, { performance: 4500, points: 6 }, { performance: 4387.5, points: 5.5 },
        { performance: 4275, points: 5 }, { performance: 4162.5, points: 4.5 }, { performance: 4050, points: 4 }, { performance: 3937.5, points: 3.5 },
        { performance: 3825, points: 3 }, { performance: 3712.5, points: 2.5 }, { performance: 3600, points: 2 }, { performance: 3487.5, points: 1.5 },
        { performance: 3375, points: 1 }, { performance: 3262.5, points: 0.5 }, { performance: 3150, points: 0 }, { performance: 3037.5, points: -0.5 },
        { performance: 2925, points: -1 }, { performance: 2812.5, points: -1.5 }, { performance: 2700, points: -2 }, { performance: 2587.5, points: -2.5 },
        { performance: 2475, points: -3 }, { performance: 2362.5, points: -3.5 }, { performance: 2250, points: -4 }
    ],
"w": [
        { performance: 5850, points: 15 }, { performance: 5737.5, points: 14.5 }, { performance: 5625, points: 14 }, { performance: 5512.5, points: 13.5 },
        { performance: 5400, points: 13 }, { performance: 5287.5, points: 12.5 }, { performance: 5175, points: 12 }, { performance: 5062.5, points: 11.5 },
        { performance: 4950, points: 11 }, { performance: 4837.5, points: 10.5 }, { performance: 4725, points: 10 }, { performance: 4612.5, points: 9.5 },
        { performance: 4500, points: 9 }, { performance: 4387.5, points: 8.5 }, { performance: 4275, points: 8 }, { performance: 4162.5, points: 7.5 },
        { performance: 4050, points: 7 }, { performance: 3937.5, points: 6.5 }, { performance: 3825, points: 6 }, { performance: 3712.5, points: 5.5 },
        { performance: 3600, points: 5 }, { performance: 3487.5, points: 4.5 }, { performance: 3375, points: 4 }, { performance: 3262.5, points: 3.5 },
        { performance: 3150, points: 3 }, { performance: 3037.5, points: 2.5 }, { performance: 2925, points: 2 }, { performance: 2812.5, points: 1.5 },
        { performance: 2700, points: 1 }, { performance: 2587.5, points: 0.5 }, { performance: 2475, points: 0 }, { performance: 2362.5, points: -0.5 },
        { performance: 2250, points: -1 }, { performance: 2137.5, points: -1.5 }, { performance: 2025, points: -2 }, { performance: 1912.5, points: -2.5 },
        { performance: 1800, points: -3 }, { performance: 1687.5, points: -3.5 }, { performance: 1575, points: -4 }
    ]
}
};
