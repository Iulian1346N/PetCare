# Stage 2: AI log

## Tools
- Gemini 

## Conversations
https://gemini.google.com/app/783416e79fa8e68a

## Key requests

### 1. Immutable functions and validation
- **Asked:** How to write immutable functions for listing, counting active items, searching by title, toggling status, and deleting items, alongside validation rules for pet care activities (`veterinar`, `alimentatie`, `igiena`).
- **Got:** Code snippets using spread operators (`...`) and array methods, plus a robust `nextId` calculation function.
- **Changed/Rejected:** Modified certain code passages to better fit the specific structure and naming conventions of the pet care application.

## What I learned / what did not work
- I learned how immutable updates prevent modifying original arrays directly, which is crucial for state management in future React stages, and how to safely compute sequential IDs using `reduce`.