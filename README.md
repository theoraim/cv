<h1>minimalist cv</h1>

simple web app that renders a minimalist CV with print-friendly layout.

## getting started

```bash
git clone https://git.theoraime.com/theoraime/cv.git
cd cv
pnpm install
pnpm dev
# open http://localhost:3000
# edit src/data/resume-data.ts to customize
```

## scripts

```bash
pnpm dev          # start development server
pnpm build        # build for production
pnpm start        # start production server
pnpm lint         # run biome linting checks
pnpm lint:fix     # run biome linting with auto-fix
pnpm format       # check code formatting with biome
pnpm format:fix   # format code with biome
pnpm check        # run both linting and formatting checks
pnpm check:fix    # run both linting and formatting with auto-fix
```

## project structure

```
src/
├── app/                # next.js app router
│   ├── components/     # page-level components
│   │   ├── education.tsx
│   │   ├── header.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   ├── summary.tsx
│   │   └── work-experience.tsx
│   ├── layout.tsx      # root layout with metadata
│   └── page.tsx        # main resume page
├── components/         # shared components
│   ├── icons/          # social icon components
│   └── ui/             # shadcn/ui components
├── data/               # resume data configuration
│   └── resume-data.ts
└── lib/                # utilities and types
    ├── structured-data.ts
    ├── types.ts
    └── utils.ts
```

## customization

all resume content lives in a single file:

```typescript
// src/data/resume-data.ts
export const RESUME_DATA = {
  name: "Your Name",
  initials: "YN",
  location: "Your City, Country",
  about: "Brief description",
  summary: "Professional summary",
  // ... more fields
}
```

styling uses tailwind css — customize colors in `tailwind.config.js` and global styles in `src/app/globals.css`.

## docker

```bash
docker buildx build --platform=linux/amd64,linux/amd64/v2,linux/arm64 -t git.theoraime.com/theoraime/cv:latest .
docker push git.theoraime.com/theoraime/cv:latest
```

## license

MIT
