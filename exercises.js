// exercises.js
// Vollständige Übungsliste für den Home-Workout-Finder.
// Einbinden im HTML/CodePen via:
// <script src="https://cdn.jsdelivr.net/gh/<USER>/<REPO>/exercises.js"></script>

const EXERCISES = [
  // --- Brust
  {
    id: "pushup",
    name: "Liegestütz",
    primary: ["brust"],
    secondary: ["schultern", "arme", "bauch"],
    equipment: "Körpergewicht",
    difficulty: "Einsteiger",
    steps: [
      "Hände unter Schultern, Körper in Linie.",
      "Brust zur Erde senken, Ellbogen ~45°.",
      "Hochdrücken und Core halten."
    ],
    cues: ["Spannung halten", "Blick zum Boden", "Ausatmen beim Hochdrücken"]
  },
  {
    id: "knee_pushup",
    name: "Knie-Liegestütz",
    primary: ["brust"],
    secondary: ["schultern", "arme"],
    equipment: "Körpergewicht",
    difficulty: "Einsteiger",
    steps: ["Knie auf dem Boden.", "Körper gerade halten.", "Kontrolliert beugen und drücken."],
    cues: ["Hüfte nicht kippen", "Core aktiv"]
  },
  {
    id: "incline_pushup",
    name: "Erhöhte Liegestütz",
    primary: ["brust"],
    secondary: ["schultern", "arme"],
    equipment: "Stuhl/Bank",
    difficulty: "Einsteiger",
    steps: ["Hände erhöht auf Stuhl.", "Körper gerade halten.", "Kontrolliert beugen und drücken."],
    cues: ["Schultern weg von Ohren", "Fersen aktiv"]
  },
  {
    id: "decline_pushup",
    name: "Decline Push-up",
    primary: ["brust"],
    secondary: ["schultern", "arme"],
    equipment: "Stuhl/Bank",
    difficulty: "Mittel",
    steps: ["Füße erhöht.", "Brust kontrolliert senken.", "Kräftig hochdrücken."],
    cues: ["Core fest", "Kein Hohlkreuz"]
  },
  {
    id: "wide_pushup",
    name: "Breiter Liegestütz",
    primary: ["brust"],
    secondary: ["schultern"],
    equipment: "Körpergewicht",
    difficulty: "Mittel",
    steps: ["Hände etwas breiter als Schulter.", "Ellbogen ca. 45–60°.", "Stabil hochdrücken."],
    cues: ["Brust aktiv", "Schulterblätter führen die Bewegung"]
  },
  {
    id: "diamond_pushup",
    name: "Diamond Push-up",
    primary: ["arme", "brust"],
    secondary: ["schultern"],
    equipment: "Körpergewicht",
    difficulty: "Fortgeschritten",
    steps: ["Hände formen Diamant unter der Brust.", "Ellenbogen eng.", "Kräftig strecken."],
    cues: ["Trizeps spüren", "Core halten"]
  },

  // --- Rücken
  {
    id: "row_table",
    name: "Inverted Row (Tisch)",
    primary: ["ruecken"],
    secondary: ["arme", "bauch"],
    equipment: "Stabiler Tisch",
    difficulty: "Mittel",
    steps: ["Unter Tisch greifen.", "Körper gerade, Fersen auf Boden.", "Brust zum Tisch ziehen."],
    cues: ["Schulterblätter nach hinten unten", "Körper bleibt steif"]
  },
  {
    id: "towel_row",
    name: "Handtuch-Row (Tür) *",
    primary: ["ruecken"],
    secondary: ["arme", "bauch"],
    equipment: "Handtuch/Tür",
    difficulty: "Mittel",
    steps: [
      "Handtuch um stabilen Türgriff (abschließbare Tür) wickeln.",
      "Leicht zurücklehnen und ziehen.",
      "Kontrolliert absenken."
    ],
    cues: ["Tür sichern!", "Core fest"]
  },
  {
    id: "superman",
    name: "Superman",
    primary: ["ruecken"],
    secondary: ["po", "bauch"],
    equipment: "Körpergewicht",
    difficulty: "Einsteiger",
    steps: ["Bauchlage, Arme/Beine anheben.", "Kurz halten.", "Absenken."],
    cues: ["Nacken lang", "Bewegung klein & kontrolliert"]
  },
  {
    id: "reverse_snow_angel",
    name: "Reverse Snow Angel",
    primary: ["ruecken"],
    secondary: ["schultern"],
    equipment: "Körpergewicht",
    difficulty: "Einsteiger",
    steps: ["Bauchlage, Arme seitlich führen (U→Y).", "Schulterblätter aktiv.", "Ruhig atmen."],
    cues: ["Kein Hohlkreuz", "Bewegung aus dem oberen Rücken"]
  },

  // --- Schultern
  {
    id: "pike_shoulder",
    name: "Schulter-Push-up (Pike)",
    primary: ["schultern"],
    secondary: ["arme", "bauch"],
    equipment: "Körpergewicht",
    difficulty: "Fortgeschritten",
    steps: ["Po hoch (V-Position).", "Ellbogen beugen, Kopf Richtung Boden.", "Kräftig nach oben drücken."],
    cues: ["Ellbogen leicht nach hinten", "Core aktiv"]
  },
  {
    id: "wall_handstand_hold",
    name: "Handstand-Hold an der Wand",
    primary: ["schultern"],
    secondary: ["bauch", "arme"],
    equipment: "Wand",
    difficulty: "Fortgeschritten",
    steps: ["Mit Bauch zur Wand hochgehen.", "Schultern aktiv drücken.", "Halte 10–30s."],
    cues: ["Rippen runter", "Po anspannen"]
  },
  {
    id: "shoulder_taps",
    name: "Shoulder Taps (Plank)",
    primary: ["schultern"],
    secondary: ["bauch"],
    equipment: "Körpergewicht",
    difficulty: "Mittel",
    steps: ["High Plank.", "Abwechselnd Schulter antippen.", "Hüfte stabil halten."],
    cues: ["Breiter Stand", "Langsam & sauber"]
  },
  {
    id: "lateral_raise_bottles",
    name: "Seitheben (Wasserflaschen)",
    primary: ["schultern"],
    secondary: ["arme"],
    equipment: "Wasserflaschen",
    difficulty: "Einsteiger",
    steps: ["Leicht vorlehnen.", "Arme seitlich bis Schulterhöhe.", "Kontrolliert senken."],
    cues: ["Daumen leicht vorn", "Schulterblätter stabil"]
  },

  // --- Arme
  {
    id: "chair_dips",
    name: "Dips am Stuhl",
    primary: ["arme"],
    secondary: ["brust", "schultern"],
    equipment: "Stuhl/Bank",
    difficulty: "Mittel",
    steps: ["Hände auf Kante.", "Ellenbogen nach hinten beugen.", "Kräftig strecken."],
    cues: ["Schultern nicht hochziehen", "Ellbogen eng"]
  },
  {
    id: "biceps_curl_bags",
    name: "Bizepscurls (Taschen)",
    primary: ["arme"],
    secondary: [],
    equipment: "Einkaufstaschen",
    difficulty: "Einsteiger",
    steps: ["Aufrecht stehen.", "Ellenbogen dicht am Körper.", "Kontrolliert beugen/strecken."],
    cues: ["Kein Schwung", "Voller Bewegungsradius"]
  },
  {
    id: "overhead_triceps_towel",
    name: "Überkopf-Trizeps (Handtuch)",
    primary: ["arme"],
    secondary: ["schultern"],
    equipment: "Handtuch",
    difficulty: "Einsteiger",
    steps: ["Handtuch hinter Kopf greifen.", "Einen Arm strecken, anderer zieht.", "Seiten wechseln."],
    cues: ["Ellbogen eng", "Rumpf stabil"]
  },

  // --- Bauch / Core
  {
    id: "plank",
    name: "Plank (Unterarm)",
    primary: ["bauch"],
    secondary: ["ganzkoerper"],
    equipment: "Körpergewicht",
    difficulty: "Einsteiger",
    steps: ["Ellenbogen unter Schultern.", "Körper in Linie.", "Atmen & halten."],
    cues: ["Po nicht hängen lassen", "Rippen runter"]
  },
  {
    id: "side_plank",
    name: "Seitstütz",
    primary: ["bauch"],
    secondary: ["po"],
    equipment: "Körpergewicht",
    difficulty: "Mittel",
    steps: ["Auf Unterarm seitlich stützen.", "Hüfte heben.", "Halten 20–40s pro Seite."],
    cues: ["Hüfte hoch", "Nacken lang"]
  },
  {
    id: "hollow_hold",
    name: "Hollow Hold",
    primary: ["bauch"],
    secondary: ["ganzkoerper"],
    equipment: "Körpergewicht",
    difficulty: "Mittel",
    steps: ["LWS in den Boden drücken.", "Arme/Beine strecken.", "Halten."],
    cues: ["Klein anfangen", "Rippen runter"]
  },
  {
    id: "deadbug",
    name: "Dead Bug",
    primary: ["bauch"],
    secondary: ["ganzkoerper"],
    equipment: "Körpergewicht",
    difficulty: "Einsteiger",
    steps: ["Rückenlage, 90/90 Beine.", "Diagonal Arm/Bein strecken.", "LWS am Boden halten."],
    cues: ["Langsam arbeiten", "Nabel leicht einziehen"]
  },
  {
    id: "mountain_climbers",
    name: "Mountain Climbers",
    primary: ["bauch"],
    secondary: ["ganzkoerper"],
    equipment: "Körpergewicht",
    difficulty: "Mittel",
    steps: ["High Plank.", "Knie abwechselnd Richtung Brust.", "Rhythmisch, kontrolliert."],
    cues: ["Hüfte tief", "Atmen nicht vergessen"]
  },
  {
    id: "bicycle_crunch",
    name: "Bicycle Crunch",
    primary: ["bauch"],
    secondary: [],
    equipment: "Körpergewicht",
    difficulty: "Mittel",
    steps: ["Ellbogen zum Gegenknie.", "Seiten wechseln.", "Langsam & sauber."],
    cues: ["Kinn weg von Brust", "LWS bleibt lang"]
  },
  {
    id: "russian_twist",
    name: "Russian Twist",
    primary: ["bauch"],
    secondary: [],
    equipment: "Körpergewicht",
    difficulty: "Mittel",
    steps: ["Aufrecht sitzen, leicht zurücklehnen.", "Oberkörper rotieren.", "Optional Gewicht halten."],
    cues: ["Brust raus", "Rotation aus dem Rumpf"]
  },

  // --- Po & Beine
  {
    id: "squat",
    name: "Kniebeuge",
    primary: ["beine", "po"],
    secondary: ["bauch"],
    equipment: "Körpergewicht",
    difficulty: "Einsteiger",
    steps: [
      "Füße schulterbreit.",
      "Hüfte nach hinten, Knie über Fußspitzen.",
      "Bis parallel, dann hoch."
    ],
    cues: ["Gewicht auf Ferse/Mittelfuß", "Knie nach außen"]
  },
  {
    id: "jump_squat",
    name: "Sprungkniebeuge",
    primary: ["beine", "po"],
    secondary: ["ganzkoerper"],
    equipment: "Körpergewicht",
    difficulty: "Fortgeschritten",
    steps: ["Tief beugen.", "Explosiv abspringen.", "Leise landen und wiederholen."],
    cues: ["Weiche Landung", "Knie stabil"]
  },
  {
    id: "lunge",
    name: "Ausfallschritt",
    primary: ["beine", "po"],
    secondary: ["bauch"],
    equipment: "Körpergewicht",
    difficulty: "Mittel",
    steps: ["Großer Schritt vor.", "Hinteres Knie Richtung Boden.", "Stabil hochdrücken."],
    cues: ["Aufrecht bleiben", "Vorderes Knie stabil"]
  },
  {
    id: "reverse_lunge",
    name: "Rückwärts-Ausfallschritt",
    primary: ["beine", "po"],
    secondary: ["bauch"],
    equipment: "Körpergewicht",
    difficulty: "Einsteiger",
    steps: ["Schritt nach hinten.", "Ganzkörper stabil halten.", "Wieder aufstehen."],
    cues: ["Vorderes Bein belastet", "Hüfte gerade"]
  },
  {
    id: "split_squat_chair",
    name: "Bulgarian Split Squat (Stuhl)",
    primary: ["beine", "po"],
    secondary: ["bauch"],
    equipment: "Stuhl/Bank",
    difficulty: "Mittel",
    steps: ["Hinteren Fuß auf Stuhl.", "Vorderes Knie beugen.", "Kontrolliert hochdrücken."],
    cues: ["Rumpf aufrecht", "Knie folgt Fußspitze"]
  },
  {
    id: "glute_bridge",
    name: "Glute Bridge",
    primary: ["po"],
    secondary: ["beine", "bauch"],
    equipment: "Körpergewicht",
    difficulty: "Einsteiger",
    steps: ["Rückenlage, Füße nah zum Gesäß.", "Becken anheben & Gesäß anspannen.", "Langsam absenken."],
    cues: ["Kein Hohlkreuz", "Oben kurz halten"]
  },
  {
    id: "frog_pump",
    name: "Frog Pumps",
    primary: ["po"],
    secondary: [],
    equipment: "Körpergewicht",
    difficulty: "Einsteiger",
    steps: ["Fußsohlen aneinander, Knie außen.", "Hüfte anheben.", "Viele saubere Wiederholungen."],
    cues: ["Langsam oben halten", "Gesäß spüren"]
  },
  {
    id: "hip_thrust",
    name: "Hip Thrust (Sofa)",
    primary: ["po"],
    secondary: ["beine"],
    equipment: "Sofa/Bank",
    difficulty: "Mittel",
    steps: ["Schultern am Sofa ablegen.", "Hüfte kraftvoll strecken.", "Kontrolliert senken."],
    cues: ["Kinn leicht einziehen", "Schienbeine senkrecht oben"]
  },
  {
    id: "lateral_lunge",
    name: "Seitwärts-Ausfallschritt",
    primary: ["beine", "po"],
    secondary: ["bauch"],
    equipment: "Körpergewicht",
    difficulty: "Mittel",
    steps: ["Breit stehen.", "Gewicht nach rechts/links verlagern.", "Hüfte nach hinten."],
    cues: ["Fuß ganz am Boden", "Brust stolz"]
  },
  {
    id: "calf_raise",
    name: "Wadenheben",
    primary: ["beine"],
    secondary: [],
    equipment: "Körpergewicht",
    difficulty: "Einsteiger",
    steps: ["Auf Zehenspitzen heben.", "Oben kurz halten.", "Langsam ablassen."],
    cues: ["Voller Weg", "Fersen zusammen"]
  },
  {
    id: "wall_sit",
    name: "Wandsitz",
    primary: ["beine"],
    secondary: ["bauch"],
    equipment: "Wand",
    difficulty: "Mittel",
    steps: ["Rücken an die Wand.", "Runter bis Knie ~90°.", "Halten 20–60s."],
    cues: ["Knie über Fuß", "Atmen"]
  },

  // --- Ganzkörper / Kondition
  {
    id: "burpee",
    name: "Burpee (ohne Push-up)",
    primary: ["ganzkoerper"],
    secondary: ["bauch", "beine"],
    equipment: "Körpergewicht",
    difficulty: "Mittel",
    steps: ["In die Hocke.", "Hände auf den Boden, Beine nach hinten.", "Zurück und hochspringen."],
    cues: ["Ruhiger Rhythmus", "Saubere Landung"]
  },
  {
    id: "bear_hold",
    name: "Bear Hold",
    primary: ["ganzkoerper"],
    secondary: ["bauch"],
    equipment: "Körpergewicht",
    difficulty: "Mittel",
    steps: [
      "Vierfüßler, Knie 2–3 cm über Boden.",
      "Hände unter Schultern, Rücken neutral.",
      "Halten 20–40s."
    ],
    cues: ["Atmen", "Knie schwebend"]
  }
];
