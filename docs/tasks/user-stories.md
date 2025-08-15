## Agile Board - 
Project board: https://github.com/users/oriyaol/projects/1

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

## US-040: Action Logging + Quick Actions

**As a developer**, I want a lightweight logger and wired quick-action buttons so that I can trace user actions and debug quickly.

### Acceptance Criteria
- Logger supports levels: debug, info, warn, error.
- Clicking **Good Morning** / **Movie Night** emits an `info` log (console + UI).
- On-screen log viewer shows the last logs in chronological order.
- No TypeScript errors; app compiles and runs locally.

### Tasks
- [ ] Create `src/utils/logger.ts` with levels and subscribe API.
- [ ] Add `src/components/LogViewer.tsx` to display logs.
- [ ] Update `Home.tsx` to log on quick-action clicks and render `<LogViewer/>`.
- [ ] Add basic tests later (separate story).

## US-060: Manage Devices - Toggle On/Off

**As a user**, I want to view all my devices in one place and toggle them on or off so that I can easily manage my smart home without opening multiple apps or menus.

### Acceptance Criteria
- Devices page displays a list of devices with:
  - Device name
  - Device type (icon or text)
  - Current status (On/Off)
- Each device has a toggle button that changes its state between On and Off.
- Every toggle action triggers a centralized log entry via the logger.
- Log entries are visible in the LogViewer component when included on the page.

### Tasks
- [ ] Create `components/DeviceCard.tsx` to represent each device.
- [ ] Create `/devices` page with a device list layout.
- [ ] Implement toggle logic for devices and update UI in real-time.
- [ ] Connect toggling actions to the centralized logging system.
- [ ] Add optional `LogViewer` to the `/devices` page to display live logs.

### Notes
- Devices are currently populated with mock data stored locally in `types/devices.ts`.
- Future integration planned with backend API for real device states.
- Logger supports future expansion for severity levels and remote log storage.
