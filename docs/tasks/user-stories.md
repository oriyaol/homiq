## US-006: Minimal Home Screen

**As a user**, I want to see a basic home screen with the app name, a quick actions area, and a placeholder status section so that I know the app is running and ready for interaction.

### Acceptance Criteria
- Header with the app name is displayed at the top of the page.
- Quick Actions card displays 2 disabled buttons for upcoming Scenes (Good Morning, Movie Night).
- Status card is present with placeholder text for future device states.
- Page loads without any errors.

### Tasks
- [ ] Create `components/Header.tsx` with app name and placeholder navigation links.
- [ ] Create `pages/Home.tsx` with welcome message, quick actions card, and status card.
- [ ] Update `App.tsx` to include `Header` and `Home` components.
- [ ] Style using existing global CSS.

## US-020: Basic Routing

**As a developer**, I want app-level routing so that users can navigate between Home, Devices, and Settings.

### Acceptance Criteria
- `/` renders the Home page
- `/devices` renders the Devices page
- `/settings` renders the Settings page
- Header nav uses client-side links (no full page reload)
- No TypeScript errors or console errors

### Tasks
- [ ] Install `react-router-dom`
- [ ] Create `pages/Devices.tsx` and `pages/Settings.tsx`
- [ ] Update `Header` to use `<NavLink>` for active styles
- [ ] Wrap app with `BrowserRouter` and define routes
