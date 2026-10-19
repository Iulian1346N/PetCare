# Stage 3: AI log

## Tools
- Gemini 

## Conversations
https://gemini.google.com/app/7f0ff40cf8a3e992

## Key requests

### 1. Fixing import and styling errors
- **Asked:** How to fix errors like `Failed to resolve import ./index.css` from `main.jsx` and missing stylesheet references after cleaning boilerplate files.
- **Got:** Instructions to update `main.jsx` to import `App.css` instead and proper styling setup for the project container.
- **Changed/Rejected:** Applied direct code fixes inside `main.jsx` based on the error stack trace.

### 2. Resolving JSX export and syntax errors
- **Asked:** How to fix runtime errors and warnings such as `does not provide an export named default` and `activeAnimale is not defined` inside `App.jsx`.
- **Got:** Correct syntax guidelines for component exports (`export default function App()`) and proper variable scoping for active item calculations.
- **Changed/Rejected:** Refactored the component structure to ensure clean exports and correct state variable naming tailored to the PetCare theme.

### 3. Debugging terminal and environment restrictions
- **Asked:** How to bypass PowerShell script execution errors (`npm.ps1 cannot be loaded because running scripts is disabled on this system`) and handle dynamic port switching (5173/5174).
- **Got:** Terminal security policy bypass commands (`Set-ExecutionPolicy RemoteSigned -Scope Process`) and explanations regarding Vite's port allocation behavior.
- **Changed/Rejected:** Used localized terminal policy adjustments to unblock local server execution without altering global security unnecessarily.

## What I learned / what did not work
- I learned how to systematically diagnose and fix common Vite/React build errors (such as missing exports or stylesheet paths), how to handle terminal execution blocks in Windows PowerShell, and how to properly validate a production build using `npm run build` before pushing to version control.