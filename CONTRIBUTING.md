# Contributing to Basisjahr

Vielen Dank für dein Interesse, zum Projekt beizutragen! Dieses Dokument beschreibt die kleinen, praktischen Regeln, die wir im Projekt nutzen.

Kurze Regeln

- Keep it small: Jede PR sollte eine überschaubare, verständliche Änderung enthalten.
- Use clear commit messages: z. B. `fix: ...`, `feat: ...`, `docs: ...`.
- Visual changes: Füge vor und nach Screenshots in die PR-Beschreibung ein.
- Tests: Es gibt keine automatischen tests; verifiziere Änderungen lokal mit einem static server (siehe `README.md`).

Branch und PR

- Basisbranch: `main`.
- Erstelle einen Feature-Branch für größere Änderungen (z. B. `fix/header-style`) und öffne eine PR gegen `main`.

Screenshots und Testing

- Für Änderungen an Styles oder Layouts: nimm zwei Screenshots (vorher / nachher) mit einer kurzen Beschreibung.
- Empfohlene lokale Befehle:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Code-Stil

- Kein JS-Framework: Schreibe plain HTML/CSS/JS. Halte JS modular und kleine.
- CSS: Nutze `style.css` (root) für globale Effekte; für `surprise/` die Dateien in `surprise/assets/css/`.

Support

Wenn du Fragen hast, öffne bitte ein Issue oder schreibe kurz in die PR-Discussion.