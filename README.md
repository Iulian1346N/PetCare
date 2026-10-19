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
Details per stage: 
Stage 1:Assistance with building and structuring the HTML5 page, and designing CSS layouts (Grid/Flexbox) with a responsive dark theme. See `ai-log/etapa-01.md`.
Stage 2:Assistance with writing immutable JavaScript array methods (`map`, `filter`, `reduce`, `find`) and organizing project documentation. See `ai-log/etapa-02.md`.
Stage 3: Troubleshooting execution policy errors in PowerShell and resolving Vite/React module import issues (`export default`). See `ai-log/etapa-03.md`.


## Status
[x] Stage 1: static mockup
[x] Stage 2: data logic in JavaScript
- Stage 3: Vite and React project

## Stage 1: static mockup
A web application for pet care management (PetCare) — a semantic static interface built with HTML5 and CSS3 (Grid, Flexbox, responsive design, and dark theme).

## Stage 2: data logic in JavaScript
Plain JavaScript, no DOM. `animale.js` holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## How to run
cd frontend
npm install
npm run dev
Then open the address printed in the terminal (http://localhost:5173)

## Verification table

## Stage 1: Static Mockup

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


### Stage 2: Data Logic in JavaScript
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S2-R1 | JS file linked, logs on page load | https://github.com/Iulian1346N/PetCare/blob/d985629e2acbffa1b4e274625cfe9dea95fe7ee9/index.html#L65 | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | https://github.com/Iulian1346N/PetCare/blob/d985629e2acbffa1b4e274625cfe9dea95fe7ee9/pet.js#L1-L7 | read |
| S2-R3 | list, count, search, add, toggle, delete | https://github.com/Iulian1346N/PetCare/blob/d985629e2acbffa1b4e274625cfe9dea95fe7ee9/pet.js#L9-L54 | console output |
| S2-R4 | add rejects empty name and invalid tag | https://github.com/Iulian1346N/PetCare/blob/d985629e2acbffa1b4e274625cfe9dea95fe7ee9/pet.js#L28-L36 | last 2 console lines |
| S2-R5 | original array unchanged after add | https://github.com/Iulian1346N/PetCare/blob/d985629e2acbffa1b4e274625cfe9dea95fe7ee9/pet.js#L37-L45 | console line |
| S2-R6 | README Stage 2 section + AI log | https://github.com/Iulian1346N/PetCare/commit/d985629e2acbffa1b4e274625cfe9dea95fe7ee9| read |
| S2-R7 | commit "Stage 2" pushed | https://github.com/Iulian1346N/PetCare/commit/ba30c6322a2473de11fe28e3c6bbaa7c66281421| commit history |

| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| **S3-R1** | npm run dev starts without errors | https://github.com/Iulian1346N/PetCare/blob/5fd49184928a037c6c4ac4d617bb70335dd5675b/frontend/package.json | `npm install, npm run dev` |
| **S3-R2** | app name and counter computed from data | https://github.com/Iulian1346N/PetCare/blob/5fd49184928a037c6c4ac4d617bb70335dd5675b/frontend/src/App.jsx#L7-L17 | `edit data, save` |
| **S3-R3** | data from README, not from the example | https://github.com/Iulian1346N/PetCare/blob/5fd49184928a037c6c4ac4d617bb70335dd5675b/frontend/src/App.jsx#L1-L6 | `compare with README` |
| **S3-R4** | stage 1 styles reused | https://github.com/Iulian1346N/PetCare/blob/5fd49184928a037c6c4ac4d617bb70335dd5675b/frontend/src/App.css | `look at the page` |
| **S3-R5** | node_modules ignored, build passes | https://github.com/Iulian1346N/PetCare/blob/5fd49184928a037c6c4ac4d617bb70335dd5675b/frontend/.gitignore | `npm run build` |
| **S3-R6** | README Stage 3 section + AI log | https://github.com/Iulian1346N/PetCare/blob/5fd49184928a037c6c4ac4d617bb70335dd5675b/ai_log/etapa-03.md, https://github.com/Iulian1346N/PetCare/blob/5fd49184928a037c6c4ac4d617bb70335dd5675b/README.md | `read` |
| **S3-R7** | commit "Stage 3" pushed | https://github.com/Iulian1346N/PetCare/commit/5fd49184928a037c6c4ac4d617bb70335dd5675b| `commit history` |
