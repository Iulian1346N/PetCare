# PetCare
A web application for managing pet care routines, veterinary schedules, and daily tasks.

## Data model
| Field | Type | Notes |
| :--- | :--- | :--- |
| <name> | text | required, max 100 chars |
| <done flag> | boolean | toggled from the list, default false |
| <fixed tag> | fixed values | Veterinar, Alimentatie, Igiena |
| <category> | relation | Medical, General, Grooming |
| <user> | relation | the owner of the item (from week 11) |

Sample data used across all stages:
1. Vaccinare antirabică, active, Veterinar
2. Cumpărare hrană , done, Alimentatie
3. Spălare și tuns blană, active, Igiena

## How to run
Open index.html in a browser. No build step, no server.

## AI usage
Tool: ChatGPT / Gemini
Details per stage: Used for generating CSS Grid/Flexbox layouts and styling guidelines in stage 1. See `ai-log/etapa-01.md`.

## Status
[x] Stage 1: static mockup
## Verification table

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S1-R1 | README: description, fields, sample data, how to run | README.md | read |
| S1-R2 | AI usage section | README.md | read |
| S1-R3 | AI log for stage 1 | ai-log/etapa-01.md | read |
| S1-R4 | header, form (text + select), 3 cards with own data | index.html#L1-L50 | open the page |
| S1-R5 | finished card looks different | style.css | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | style.css | resize < 700px |
| S1-R7 | visible focus, readable dark theme | style.css | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | link către commit | commit history |
- Stage 2: data logic in JavaScript