# Saman Sunasara Portfolio

Futuristic React + Vite portfolio with Tailwind CSS, Framer Motion, React Three Fiber, and a fully local AI-style assistant.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Optional environment file:

```bash
copy .env.example .env
```

This project does not require API keys. The included `.env.example` is only a placeholder if you want local app metadata.

3. Start the dev server:

```bash
npm run dev
```

## AI Features

- Floating portfolio chatbot with local smart response logic
- Smart resume assistant prompt entry point in the hero section
- Offline project explanations for each project card
- Optional voice input through the Web Speech API when the browser supports it

## Notes

- No external API calls are required for the chatbot.
- Responses are generated from local logic in `src/lib/chatLogic.js`, so the experience stays fast and free.
