# StatusBadge

A small pill-shaped badge that shows a colored status dot with a label — useful next to avatars, usernames, or list items to indicate presence.

## Purpose

`StatusBadge` communicates a user or resource's current state (`online`, `offline`, `away`, `busy`) at a glance using a colored dot plus text label. It supports an optional pulsing animation to draw attention to a live/active status.

## Installation

```bash
# No installation needed — copy StatusBadge.tsx into your project
```

## Usage

```tsx
import { StatusBadge } from "./StatusBadge";

export default function App() {
  return <StatusBadge status="online" pulse />;
}
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `status` | `"online" \| "offline" \| "away" \| "busy"` | — | Yes | Current status to display. |
| `label` | `string` | Capitalized `status` | No | Custom label text. |
| `pulse` | `boolean` | `false` | No | Adds a pulsing animation to the status dot. |
| `className` | `string` | `""` | No | Additional class names merged onto the root element. |

## Dependencies

- None (uses only React and Tailwind CSS utility classes)

## Example

```tsx
<div className="flex flex-wrap gap-2">
  <StatusBadge status="online" pulse />
  <StatusBadge status="away" />
  <StatusBadge status="busy" label="In a meeting" />
  <StatusBadge status="offline" />
</div>
```
