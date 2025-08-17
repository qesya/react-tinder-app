# Tinder-Like Frontend 💖

A React-based dating app interface with swipe gestures and modern animations.

## Features

- **Swipeable Cards**: Touch/mouse gestures with smooth animations
- **Dynamic UI**: Buttons scale and move based on swipe direction
- **Match Modal**: Celebration when mutual likes occur
- **Keyboard Support**: Arrow keys and Enter for accessibility
- **Responsive Design**: Works on mobile and desktop

## Tech Stack

- React 19 + TypeScript
- Vite (build tool)
- Material-UI (components)
- Zustand (state management)
- Storybook (component docs)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run Storybook
npm run storybook

# Run tests
npm run test
```

## Project Structure

```
src/
├── components/
│   ├── atoms/       # Button, Avatar, Text
│   ├── molecules/   # ProfileBadge, ActionBar
│   └── organisms/   # SwipeCard, CardStack, MatchModal
├── state/           # Zustand stores
├── hooks/           # useSwipeGesture
├── api/             # Backend integration
└── theme/           # Material-UI theme
```

## Key Components

- **CardStack**: Main container managing profile queue
- **SwipeCard**: Individual profile card with gesture handling
- **ActionBar**: Like/dislike buttons with dynamic scaling
- **MatchModal**: Success celebration overlay
