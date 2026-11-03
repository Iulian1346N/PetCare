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
tage 4: Implementing modular React components (TaskList and TaskCard), passing data via props, rendering lists with map and unique key attributes, and handling conditional rendering for empty lists. See `ai-log/etapa-04.md`.
## Stage 5: local state and events
No AI tools were used in this stage. See `ai-log/etapa-05.md`.


## Status
[x] Stage 1: static mockup
[x] Stage 2: data logic in JavaScript
[x] Stage 3: Vite and React project
[x] Stage 4: components rendered from data
[x] Stage 5: local state and events
[ ] Stage 6: loading data from a mock API

## Stage 1: static mockup
A web application for pet care management (PetCare) — a semantic static interface built with HTML5 and CSS3 (Grid, Flexbox, responsive design, and dark theme).

## Stage 2: data logic in JavaScript
Plain JavaScript, no DOM. `animale.js` holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

### Stage 4: components rendered from data
The list is rendered from the data, through two components:- `TaskList` receives the whole array and renders one card per item- `TaskCard` receives a single item through props and displays it

## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page,and the counters in the header follow automatically. A button in the header switches between light and dark mode. Changes are lost on refresh, which is what stage 6 and stage 10 fix.

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

## Stage 3: Vite and React project
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| **S3-R1** | npm run dev starts without errors | https://github.com/Iulian1346N/PetCare/blob/5fd49184928a037c6c4ac4d617bb70335dd5675b/frontend/package.json | `npm install, npm run dev` |
| **S3-R2** | app name and counter computed from data | https://github.com/Iulian1346N/PetCare/blob/5fd49184928a037c6c4ac4d617bb70335dd5675b/frontend/src/App.jsx#L7-L17 | `edit data, save` |
| **S3-R3** | data from README, not from the example | https://github.com/Iulian1346N/PetCare/blob/5fd49184928a037c6c4ac4d617bb70335dd5675b/frontend/src/App.jsx#L1-L6 | `compare with README` |
| **S3-R4** | stage 1 styles reused | https://github.com/Iulian1346N/PetCare/blob/5fd49184928a037c6c4ac4d617bb70335dd5675b/frontend/src/App.css | `look at the page` |
| **S3-R5** | node_modules ignored, build passes | https://github.com/Iulian1346N/PetCare/blob/5fd49184928a037c6c4ac4d617bb70335dd5675b/frontend/.gitignore | `npm run build` |
| **S3-R6** | README Stage 3 section + AI log | https://github.com/Iulian1346N/PetCare/blob/5fd49184928a037c6c4ac4d617bb70335dd5675b/ai_log/etapa-03.md, https://github.com/Iulian1346N/PetCare/blob/5fd49184928a037c6c4ac4d617bb70335dd5675b/README.md | `read` |
| **S3-R7** | commit "Stage 3" pushed | https://github.com/Iulian1346N/PetCare/commit/5fd49184928a037c6c4ac4d617bb70335dd5675b| `commit history` |


### Stage 4: components rendered from data
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S4-R1 | 2+ components in src/components/ | https://github.com/Iulian1346N/PetCare/tree/b95f7ef0f79b5b8e716fe23d29aea20cbd419a65/frontend/src/components | open folder |
| S4-R2 | card receives data through props | https://github.com/Iulian1346N/PetCare/blob/b95f7ef0f79b5b8e716fe23d29aea20cbd419a65/frontend/src/components/PetsCard.jsx#L1-L12 | read |
| S4-R3 | map + key={id}, no console warnings | https://github.com/Iulian1346N/PetCare/blob/b95f7ef0f79b5b8e716fe23d29aea20cbd419a65/frontend/src/components/PetsList.jsx#L1-L15 | F12, Console |
| S4-R4 | message for empty list | https://github.com/Iulian1346N/PetCare/blob/324671dff53ed62c00341811688c18e54d2a3c52/frontend/src/components/PetsList.jsx#L2-L5| set array to `[]` |
| S4-R5 | state changes the card look | https://github.com/Iulian1346N/PetCare/blob/324671dff53ed62c00341811688c18e54d2a3c52/frontend/src/components/PetsCard.jsx#L4-L11 | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | https://github.com/Iulian1346N/PetCare/blob/324671dff53ed62c00341811688c18e54d2a3c52/README.md, https://github.com/Iulian1346N/PetCare/blob/324671dff53ed62c00341811688c18e54d2a3c52/ai_log/etapa-04.md| read |
| S4-R7 | commit "Stage 4" pushed | https://github.com/Iulian1346N/PetCare/commit/b95f7ef0f79b5b8e716fe23d29aea20cbd419a65 | commit history |

### Stage 5: local state and events
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S5-R1 | list kept in useState, in App | https://github.com/Iulian1346N/PetCare/blob/e7db187dc993d21b3e7db1ca9dbd224e212a5779/frontend/src/App.jsx#L1-L9 | read |
| S5-R2 | toggling changes state and card look | https://github.com/Iulian1346N/PetCare/blob/e7db187dc993d21b3e7db1ca9dbd224e212a5779/frontend/src/App.jsx#L19-L24, https://github.com/Iulian1346N/PetCare/blob/e7db187dc993d21b3e7db1ca9dbd224e212a5779/frontend/src/components/PetsCard.jsx#L5-L11 | click a checkbox |
| S5-R3 | delete removes the item | https://github.com/Iulian1346N/PetCare/blob/e7db187dc993d21b3e7db1ca9dbd224e212a5779/frontend/src/App.jsx#L25-L28, https://github.com/Iulian1346N/PetCare/blob/e7db187dc993d21b3e7db1ca9dbd224e212a5779/frontend/src/components/PetsCard.jsx#L19-L25 | click Delete |
| S5-R4 | header counter derived, not in state | https://github.com/Iulian1346N/PetCare/blob/e7db187dc993d21b3e7db1ca9dbd224e212a5779/frontend/src/App.jsx#L35-L36 | toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | https://github.com/Iulian1346N/PetCare/blob/e7db187dc993d21b3e7db1ca9dbd224e212a5779/frontend/src/App.jsx#L19-L28 | read |
| S5-R6 | light / dark toggle: state + data-theme on html |https://github.com/Iulian1346N/PetCare/blob/e7db187dc993d21b3e7db1ca9dbd224e212a5779/frontend/src/App.jsx#L29-L34, https://github.com/Iulian1346N/PetCare/blob/e7db187dc993d21b3e7db1ca9dbd224e212a5779/frontend/src/App.css#L5-L30 | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log |https://github.com/Iulian1346N/PetCare/blob/e7db187dc993d21b3e7db1ca9dbd224e212a5779/README.md, https://github.com/Iulian1346N/PetCare/blob/e7db187dc993d21b3e7db1ca9dbd224e212a5779/ai_log/etapa-05.md | F12, Console |
| S5-R8 | commit "Stage 5" pushed | https://github.com/Iulian1346N/PetCare/commit/e7db187dc993d21b3e7db1ca9dbd224e212a5779 | commit history |