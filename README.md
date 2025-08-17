# Tinder-Like App

A full-stack dating app with React frontend and Express.js backend, powered by Turborepo.

## Quick Start

```bash
# Install dependencies
npm run install:all

# Start development (both frontend + backend)
npm run dev

# Frontend only (http://localhost:5173)
npm run dev:frontend

# Backend only (http://localhost:3002)
npm run dev:backend
```

## Project Structure

```
tinder-like-app/
├── packages/
│   ├── frontend/     # React + TypeScript
│   └── backend/      # Express.js + TypeScript
├── turbo.json        # Turborepo configuration
└── package.json      # Root workspace config
```

## Tech Stack

**Frontend**: React 19, TypeScript, Vite, Material-UI, Zustand  
**Backend**: Express.js, TypeScript, Jest  
**Build**: Turborepo with npm workspaces  


## Features

- **Swipe Interface**: Touch/mouse gestures with animations
- **Dynamic UI**: Buttons scale and move based on swipe direction  
- **Match Detection**: Celebration modal for mutual likes
- **RESTful API**: Clean backend with proper error handling
- **Component Library**: Atomic design with Storybook docs
- **Type Safety**: Full TypeScript coverage

## Development Commands

```bash
# Build
npm run build

# Test
npm test

# Lint
npm run lint

# Type check
npm run type-check
```

## API Endpoints

**Base URL**: `http://localhost:3002/api`

- `GET /profiles` - Get available profiles
- `POST /matches/like` - Like a profile
- `POST /matches/dislike` - Dislike a profile

