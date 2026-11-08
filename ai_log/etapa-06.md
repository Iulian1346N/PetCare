# Stage 6: AI log

## Tools
- Gemini 

## Conversations
https://gemini.google.com/app/6c1586c07189de41

## Key requests

### 1. Setting up json-server and backend data structure
- **Asked:** How to correctly configure `json-server` (version 0.17.4) and create the mock database file (`db.json`) containing pet care activities with unique IDs and labels.

- **Got:** Instructions on installing the precise package version (`npm install -D json-server@0.17.4`), adding the `"api"` script command to `package.json`, and structuring `db.json` with an array of objects under the `"animale"` key.

- **Changed/Rejected:** Created `db.json` with 5 diverse items containing ids, titles, completion statuses, and labels (`veterinar`, `alimentatie`, `igiena`).

### 2. Implementing API fetch logic and environment variables
- **Asked:** How to separate the HTTP request logic into a dedicated module (`api.js`) and use environment variables with `import.meta.env`.

- **Got:** Code structure for `api.js` utilizing `fetch`, `async/await`, `res.ok` validation checks, and fallback configuration via `import.meta.env.VITE_API_URL ?? "http://localhost:3001"`.

- **Changed/Rejected:** Created `api.js` and `.env.example`, ensuring components never call `fetch` directly.

### 3. Managing loading, success, and error states with useEffect
- **Asked:** How to load data upon component mounting using `useEffect` while tracking loading and error states cleanly in `App.jsx`.

- **Got:** Implementation patterns incorporating `useState` for `animale`, `loading`, and `error`, an `async load` function inside `useEffect`, an `ignore` flag to prevent race conditions during React's strict-mode double mounting, and a `finally` block to clear the loading indicator.

- **Changed/Rejected:** Integrated the 3-state rendering conditions (`loading`, `error`, success list) into `App.jsx` and added matching CSS classes in `App.css`.

### 4. Troubleshooting UI rendering discrepancies for item properties
- **Asked:** Why a specific item ("Plimbare de seară" with the label "sanatate") failed to display its badge correctly compared to other list items.

- **Got:** Identification of a missing mapping entry inside the `ETICHETE_NIVEL` object in `PetsCard.jsx` for the `"sanatate"` key, which caused the badge text lookup to return `undefined`.

- **Changed/Rejected:** Updated `ETICHETE_NIVEL` in `PetsCard.jsx` to include `sanatate: "sănătate"`, resolving the rendering issue instantly.

## What I learned / what did not work
I learned how to properly handle asynchronous data fetching on component mount using `useEffect`, how to manage the three fundamental UI states (loading, success, error) to prevent blank pages when an API fails, how to use `json-server` for rapid local prototyping, and how cleanup flags (`ignore`) prevent redundant state updates during development.