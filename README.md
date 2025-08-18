# 🏠 Homiq

A smart home control app (frontend only for now) built with **React + Vite + TypeScript**.  
This repository follows an agile, branch-per-feature workflow with clean separation of features and commits.

---

## ✨ Features (MVP so far)
- **Home Screen** – Header with app name and quick actions placeholders.
- **Basic Routing** – Using `react-router-dom` to navigate between:
  - `/` → Home
  - `/devices` → Devices (placeholder)
  - `/settings` → Settings (placeholder)

---

## 📦 Install & Run
```bash
npm install
npm run dev

🧭 Routing
We use react-router-dom for client-side navigation.

bash
Copy code
npm i react-router-dom
Routes are defined in src/App.tsx, and the header uses <NavLink> for active link styles.

🔀 Git Flow
Default branch: main (PRs only)

Each feature/bug in its own branch:

feature/<slug> (e.g., feature/routing)

fix/<slug>

Open a Pull Request to main and get at least one review before merging.

🧩 Current PRs
feature/home-screen – Minimal Home screen

feature/routing – Basic router (Home/Devices/Settings) and SPA nav

🗂️ Project Structure
css
Copy code
src/
  components/
    Header.tsx
  pages/
    Home.tsx
    Devices.tsx
    Settings.tsx
  styles/
    globals.css
  App.tsx
  main.tsx
📝 User Stories
See docs/tasks/user-stories.md

US-006: Minimal Home Screen ✅ (PR open)

US-020: Basic Routing ✅ (PR open)

🧹 Repo Hygiene
Only commit required project files. .gitignore already excludes build artifacts.

On Windows, LF/CRLF warnings are harmless.
To normalize line endings, add .gitattributes:

arduino
Copy code
* text=auto
*.ts  text eol=lf
*.tsx text eol=lf
*.js  text eol=lf
*.css text eol=lf
*.html text eol=lf
*.yml text eol=lf
*.yaml text eol=lf
Or set globally: git config core.autocrlf false

🛣️ Roadmap (Next Steps)
Scenes – Implement quick action buttons (Good Morning, Movie Night) with basic device state.

Logger – Console + optional on-screen logs.

PWA Basics – Manifest + Service Worker for offline and installable app.

Dockerfile + CI/CD – GitHub Actions with semantic versioning and releases.

yaml
Copy code


## Releases
Initial public release via GitHub Actions (SemVer + Docker Publish).