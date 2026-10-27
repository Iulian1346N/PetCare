# Stage 4: AI log

## Tools
- Gemini 

## Conversations
https://gemini.google.com/app/7ac3cf3425efc013

## Key requests

### 1. Refining CSS styling and interactive visual feedback
- **Asked:** How to add clear visual contrast for pet care card components and implement smooth hover animations (scale, elevation, and warm glow transitions).

- **Got:** Custom CSS rule sets utilizing CSS variables (--card-bg, --accent, --accent-glow), Flexbox alignment, and transition parameters for .pet-card and .pet-card:hover.

- **Changed/Rejected:** Integrated the proposed rules into App.css to guarantee instant visual response and clear depth perception.

### 2. Implementing dynamic strikethrough for completed tasks
- **Asked:** How to make completed items (gata: true) visually distinct by striking through the task title automatically.

- **Got:** Instructions on conditional class binding (className={pet-card ${item.gata ? 'done' : ''}}) inside PetsList.jsx coupled with the .pet-card.done h3 CSS selector applying text-decoration: line-through.

- **Changed/Rejected:** Applied conditional rendering for the .done class to dynamically alter opacity, background tone, and text decoration.

### 3. Integrating sidebar assets and layout constraints
- **Asked:** How to properly position and scale an illustration image (poza.jpg) inside the sidebar without breaking the layout structure or overflowing content.

- **Got:** Guidelines on utilizing the public folder for static assets, setting up a flexbox container with justify-content: space-between, and adjusting max-height boundaries (max-height: 120px / object-fit: cover).

- **Changed/Rejected:**: Refactored the sidebar markup in App.jsx and styling rules in App.css to ensure the image scales cleanly in the lower section of the layout.

### What I learned / what did not work
I learned how to carefully manage CSS specificity conflicts (such as ensuring .stat-item strong.text-active overrides general text styling rules), how to structure static assets inside Vite's public directory, and how to maintain responsive layouts using CSS Flexbox and container constraints without overflowing sidebars or dashboard boundaries.