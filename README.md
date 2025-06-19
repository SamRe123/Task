# Aufgabe

Du bekommst eine bestehende Task-Management App und sollst eine Filter & Suchfunktion hinzufügen.

## Bestehende Codebase

Die App hat bereits:

-   Einfache Task-Liste mit Neu / Lösch-Funktionalität
-   Task-Status Anzeige (Todo, In Progress, Done)
-   Task-Priorität (Low, Medium, High)
-   Task-Kategorie (Work, Personal, Shopping)
-   Basic UI mit TailwindCSS
-   State-Management mit useState
-   TypeScript-Interfaces

## Installation

In dem Terminal deiner Wahl folgende Befehle ausführen:

-   `npm i`
    -   Installiert die Dependencies
-   `npm run dev`
    -   Startet die Entwicklungsumgebung
-   Im Browser deiner Wahl folgende Seite aufrufen:
    -   `http://localhost:5173/`

## Dein Feature: Filtern

Du sollst folgende Filter-Funktionalität implementieren:

### Anforderungen

1. Suchbar
    - Tasks können in einem Inputfeld nach dem Titel durchsucht werden
    - Die Tasks werden **live** gefiltert (beim Tastendruck)
    - Suche soll _Case-Insensitive_ sein
2. Status / Priorität Filter
    - Chips mit Toggle-Zustand sollen genutzt werden, damit Status und Prioritäten der Tasks gefiltert werden können
    - Alle Kombinationen sind zulässig (zum Beispiel):
        - LOW, MEDIUM, IN_PROGRESS
        - MEDIUM
        - HIGH, DONE
3. Kategorie-Filter
    - Radio-Buttons soll als Filter für die Kategorien genutzt werden
4. Zurücksetzen Button
    - Setzt alle Filter zurück
    - Leert die Suchbar

### Technische Anforderungen

-   React mit TypeScript
-   (optional) Tailwind CSS für Styling
-   (optional) shadcn/ui für UI-Komponenten

### Implementierung

Zu implementieren sind:

-   `FilterPanel.tsx`
-   `useFilters.tsx`
-   Einfügen in `App.tsx`

## Bewertungsmatrix

| Kategorie                        | 5 Punkte (Sehr gut)                                                                                        | 3 Punkte (In Ordnung)                                                                             | 0 Punkte (Nicht erfüllt)                                      |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **1. Suchfunktion** | Live-Filterung bei Tasteneingabe, case-insensitive, performant umgesetzt | Suche funktioniert, aber nicht live oder nicht case-insensitive | Keine oder fehlerhafte Suchfunktion |
| **2. Status-/Priorität-Filter** | Vollständig mit Toggle-Chips, Kombinieren mehrerer Filter möglich, UI klar | Nur einfache Filterung, begrenzt kombinierbar oder unklare UI | Keine Filterung oder UI reagiert nicht korrekt |
| **3. Kategorie-Filter** | Radio-Buttons korrekt implementiert, nur eine Kategorie gleichzeitig filterbar | Filterung vorhanden, aber z. B. UI nicht intuitiv oder mehrere Kategorien gleichzeitig auswählbar | Kategorie-Filter fehlt oder ist nicht funktionsfähig |
| **4. Zurücksetzen-Button** | Setzt alle Filter und das Suchfeld korrekt zurück | Setzt nur Teile der Filter zurück | Funktion fehlt oder funktioniert nicht                        |
| **5. Typisierung** | Alle Komponenten & States strikt typisiert, keine `any`-Typen, klare Interfaces | Teilweise typisiert, kleinere Lücken oder unnötige Typumgehungen | Typisierung fehlt großteils oder viele `any`-Typen |
| **6. Codequalität & Lesbarkeit** | Sauber strukturiert, sprechende Namen, Wiederverwendbarkeit gegeben | Funktional, aber verbesserungswürdig (z. B. Wiederholungen, kryptische Namen) | Unleserlicher oder unstrukturierter Code |
| **7. Styling** | Einheitliches Styling der vorhandenen Codebase wiederverwendet | Eigenes Styling mit `inline-Styles` oder Vanilla CSS durchgeführt | Kein Styling vorhanden |
| **6. State-Management** | Gutes State-Management, keine React-Regeln gebrochen | Funktionierendes State-Management aber durch Umwege | Unleserliches State-Management mit State-Spaghetti |