# GamePortal — Review 2

An intermediate full-stack MERN milestone upgrading GamePortal with **Redux Toolkit** and **RTK Query** for centralized state management, automated API caching, and real-time UI synchronization.

## What's New in Review 2

- **Redux Toolkit Store (`store.js`):** Configured centralized application store integrating the RTK Query reducer and middleware[cite: 4].
- **RTK Query API Slice (`apiSlice.js`):** Replaced manual Axios calls with declarative query and mutation hooks (`useGetTournamentsQuery`, `useGetProfileQuery`, `useLoginMutation`, `useRegisterMutation`, `useCreateTournamentMutation`, `useDeleteTournamentMutation`, `useJoinTournamentMutation`, `useUnregisterTournamentMutation`)[cite: 4].
- **Automatic Auth Header Injection:** Configured `fetchBaseQuery` with `prepareHeaders` to read the JWT from `localStorage` and attach `Authorization: Bearer <token>` on every request[cite: 4].
- **Tag-Based Cache Invalidation:** Implemented `Tournaments` and `Profile` cache tags so creating, joining, unregistering, or deleting events immediately updates the Home, Tournaments, and Dashboard views without manual page reloads[cite: 4].
- **MongoDB & JWT Backend:** Full CRUD REST API protected by role checks and JWT verification middleware[cite: 4].

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite, Redux Toolkit, React-Redux, RTK Query, React Router DOM[cite: 4] |
| **Backend** | Node.js, Express 5, Mongoose, JSON Web Token (`jsonwebtoken`), `bcryptjs`[cite: 4] |
| **Database** | MongoDB / MongoDB Atlas[cite: 4] |

## Project Structure

```text
GamePortal-Review-2/
├── backend/
│   ├── middleware/
│   │   └── authenticate.js
│   ├── models/
│   │   ├── Tournament.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tournaments.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   │   ├── api.js
    │   │   └── apiSlice.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── store.js
    └── package.json
```

## Local Setup & Execution

### 1. Configure & Start Backend
Create a `.env` file inside `backend/`[cite: 4]:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/gameportal
JWT_SECRET=replace-with-a-random-secret-at-least-32-characters-long
```

Install dependencies and start the Express server on port `5000`[cite: 4]:

```bash
cd backend
npm install
npm run dev
```

### 2. Start Frontend
Open a second terminal and launch the Vite frontend on `http://localhost:5173`[cite: 4]:

```bash
cd frontend
npm install
npm run dev
```