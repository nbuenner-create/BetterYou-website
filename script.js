// --- Trainingspläne ---
const plans = {
    "Montag": ["Schulterdrücken", "Lateral Raises", "Front Raises", "Overhead Trizeps", "Trizeps Pushdown", "Dips", "Cable Flys", "Butterfly"],
    "Dienstag": ["Deadlifts", "Rudern", "Latziehen", "T Bar Rudern", "Reverse Butterfly", "Shrugs", "Preacher Curls", "Hammer Curls"],
    "Mittwoch": ["Beinpresse", "Beinstrecker", "Beinbeuger", "Wadenheben", "Bauch Twists", "Bauch Crunches", "Leg Raises"],
    "Donnerstag": ["Cardio", "Bauch Training", "Dehnen", "Plyometrics"],
    "Freitag": ["Preacher Curls", "Hammer Curls", "Cable Curls", "Reverse Curls", "Chest Flys", "Butterfly", "Dips"],
    "Samstag": ["Cardio", "Bauch Training", "Dehnen", "Plyometrics"],
    "Sonntag": ["Deadlifts", "Rudern", "TBar Rudern", "Latziehen", "Reverse Butterfly", "Schulterdrücken", "Lateral Raises", "Front Raises"],
    "Ernährung": ["Wasser", "Protein Shake", "Zinc", "Creatin", "Magnesium", "Ashwaganda", "kein Zucker", "Meal Prep"]
};

// --- Beschreibungen zu jeder Übung ---
const descriptions = {
    "Schulterdrücken": "Stärkt die vordere und seitliche Schulter und verbessert die Stabilität.",
    "Lateral Raises": "Isoliert die seitlichen Schultern für Breite und Definition.",
    "Front Raises": "Trainiert die vordere Schulter für eine stärkere Optik.",
    "Overhead Trizeps": "Perfekt für den langen Trizepskopf.",
    "Trizeps Pushdown": "Belastet den Trizeps gezielt und kontrolliert.",
    "Dips": "Massiv für Brust und Trizeps.",
    "Cable Flys": "Brustisolationsübung mit Stretch.",
    "Butterfly": "Brustmaschine für gute Kontrolle.",
    "Deadlifts": "Königsübung für Rücken, Beine und Griffkraft.",
    "Rudern": "Aktiviert den gesamten Rücken.",
    "Latziehen": "Trainiert den Latissimus für V-Form.",
    "T Bar Rudern": "Mittlerer Rücken — Dicke & Dichte.",
    "Reverse Butterfly": "Rückseite Schulter + oberer Rücken.",
    "Shrugs": "Stärkt Trapezmuskel für Nacken.",
    "Preacher Curls": "Isoliert Bizeps perfekt.",
    "Hammer Curls": "Trainiert Bizeps + Unterarme.",
    "Cable Curls": "Konstanter Widerstand für Peak.",
    "Reverse Curls": "Unterarme + Brachialis Fokus.",
    "Beinpresse": "Quadrizeps, Po und Bein-Stärke.",
    "Beinstrecker": "Isoliert vorderen Oberschenkel.",
    "Beinbeuger": "Trainiert hintere Oberschenkel.",
    "Wadenheben": "Starke Waden durch hohen Wiederholungsbereich.",
    "Bauch Twists": "Trainiert seitliche Bauchmuskeln.",
    "Bauch Crunches": "Gerader Bauchmuskel Fokus.",
    "Leg Raises": "Unterer Bauch — sehr effektiv.",
    "Cardio": "Gut für Herz & Fettverbrennung.",
    "Bauch Training": "Core Stabilität & Definition.",
    "Dehnen": "Erhöht Beweglichkeit und Regeneration.",
    "Plyometrics": "Explosivkraft & Schnellkraft.",
    "Wasser": "Hydration für Leistung.",
    "Protein Shake": "Fördert Muskelaufbau.",
    "Zinc": "Wichtig für Regeneration.",
    "Creatin": "Mehr Kraft & Leistung.",
    "Magnesium": "Erholung der Muskulatur.",
    "Ashwaganda": "Stressreduktion & Schlaf.",
    "kein Zucker": "Gut für Energie & Fettabbau.",
    "Meal Prep": "Saubere Ernährung & Planung."
};

// --- DOM Elemente ---
const container = document.getElementById("plan-container");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalText = document.getElementById("modal-text");
const modalClose = document.getElementById("modal-close");

// --- Buttons erzeugen ---
const dayContainer = document.getElementById("day-buttons");
Object.keys(plans).forEach(day => {
    const btn = document.createElement("button");
    btn.innerText = day;
    btn.className = "day-btn";
    btn.onclick = () => loadPlan(day);
    dayContainer.appendChild(btn);
});

// --- Plan laden ---
function loadPlan(day) {
    container.innerHTML = "";
    const list = document.createElement("ul");

    plans[day].forEach(ex => {
        const li = document.createElement("li");
        li.textContent = ex;
        li.className = "exercise-item";
        li.onclick = () => openModal(ex);
        list.appendChild(li);
    });

    container.appendChild(list);
}

// --- Modal öffnen ---
function openModal(ex) {
    modalTitle.innerText = ex;

    // 🔥 Unsplash Bild einfügen
    modalImg.src = "https://source.unsplash.com/featured/?gym," + encodeURIComponent(ex);

    modalText.innerText = descriptions[ex] || "Keine Beschreibung vorhanden.";

    modal.classList.add("show");
}

// --- Modal schließen ---
modalClose.onclick = () => {
    modal.classList.remove("show");
};
