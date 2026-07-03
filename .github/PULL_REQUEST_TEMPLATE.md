## Summary

Brief description of what this PR adds or changes.

## Type of Change

- [ ] New component submission
- [ ] Bug fix / enhancement to existing component
- [ ] Documentation update
- [ ] Chore / refactor / CI

---

## Component Details *(fill in if submitting a new component)*

- **Component Name**: 
- **Category**: 
- **Description**: 
- **Submission folder**: `submissions/ComponentName/`

---

## Tech Stack Confirmation

This PR uses the **required OpenUI Hub v1.0 technology stack**:

- [ ] React (component framework)
- [ ] TypeScript `.tsx` (not `.jsx` or `.js`)
- [ ] Tailwind CSS (styling — no Bootstrap, jQuery, or inline styles)

---

## Submission Structure Checklist

All four required files are present in `submissions/ComponentName/`:

- [ ] `ComponentName.tsx` — React + TypeScript component (filename matches folder name exactly)
- [ ] `metadata.json` — All 10 required fields are filled
- [ ] `README.md` — Includes Purpose, Installation, Usage, Props, and Example sections
- [ ] `preview.png` — Screenshot or rendered preview of the component

---

## metadata.json Validation

- [ ] `name` field is filled
- [ ] `description` field is filled
- [ ] `author` field is filled (your full name)
- [ ] `githubUsername` field is filled (your GitHub username)
- [ ] `category` is one of the valid project categories
- [ ] `framework` is exactly `"React"`
- [ ] `language` is exactly `"TypeScript"`
- [ ] `styling` is exactly `"Tailwind CSS"`
- [ ] `version` follows semver format (e.g., `"1.0.0"`)
- [ ] `tags` is a non-empty array of strings

---

## Naming Conventions

- [ ] Folder name uses PascalCase (e.g., `PrimaryButton`, `ProductCard`)
- [ ] `.tsx` filename matches the folder name exactly
- [ ] Exported component function name matches the folder name exactly
- [ ] Branch name follows `feature/ComponentName` format

---

## Code Quality

- [ ] `npm run lint` passes with no errors
- [ ] `npm run type-check` passes with no TypeScript errors
- [ ] `node scripts/validate-component.js submissions/ComponentName` passes locally
- [ ] All props are typed with TypeScript interfaces
- [ ] No new external npm dependencies (or justified below)

---

## Component Quality

- [ ] Responsive across mobile, tablet, and desktop
- [ ] Works in both light mode and dark mode
- [ ] ARIA attributes included where applicable
- [ ] Keyboard navigation supported for interactive elements
- [ ] Only **one component** is submitted in this PR

---

## Screenshots / Preview

Paste a screenshot showing the component in both themes.

| Light Mode | Dark Mode |
|---|---|
| *(screenshot)* | *(screenshot)* |

---

## Related Issues

Closes #

---

## Notes for Reviewers

*(Optional — anything reviewers should know)*
