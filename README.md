# StarBind

A full-stack application with separate frontend and backend components.

## Project Structure

```
/
├── frontend/     # React application
├── backend/      # Express server
```

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd starbind
```

2. Install dependencies for both frontend and backend:
```bash
npm run install-all
```

3. Start the development servers:

For frontend (in one terminal):
```bash
cd frontend
npm run dev
```

For backend (in another terminal):
```bash
cd backend
npm run dev
```

## Development

- Frontend runs on: http://localhost:3000
- Backend runs on: http://localhost:5000

## Available Scripts

- `npm run install-all`: Install dependencies for both frontend and backend
- Frontend:
  - `npm run dev`: Start development server
  - `npm run build`: Build for production
  - `npm run preview`: Preview production build
- Backend:
  - `npm run dev`: Start development server with hot-reload
  - `npm start`: Start production server