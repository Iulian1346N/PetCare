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
Tool: Gemini
Details per stage: No AI tools were used in this stage. See `ai-log/etapa-01.md`.

## Status
[x] Stage 1: static mockup
## Verification table

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S1-R1 | README: description, fields, sample data, how to run | https://github.com/Iulian1346N/PetCare/blob/main/README.md | read |
| S1-R2 | AI usage section | No AI tools were used in this stage | read |
| S1-R3 | AI log for stage 1 | https://github.com/Iulian1346N/PetCare/blob/main/ai_log/etapa-01.md | read |
| S1-R4 | header, form (text + select), 3 cards with own data | https://github.com/Iulian1346N/PetCare/blob/370b26ec79a9cd551869debfd8466dd078370597/index.html#L1-L60 | open the page |
| S1-R5 | finished card looks different | https://github.com/Iulian1346N/PetCare/blob/370b26ec79a9cd551869debfd8466dd078370597/style.css#L147-L150 | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | https://github.com/Iulian1346N/PetCare/blob/370b26ec79a9cd551869debfd8466dd078370597/style.css#L172-L176 | resize < 700px |
| S1-R7 | visible focus, readable dark theme |https://github.com/Iulian1346N/PetCare/blob/b092834584e7c10e942642a6b19132bd119e2d8c/style.css#L166-L190 | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | https://github.com/Iulian1346N/PetCare/commit/f769bc09921d0d42d13699a5cddc90e03eb94c64 | commit history |
- Stage 2: data logic in JavaScript