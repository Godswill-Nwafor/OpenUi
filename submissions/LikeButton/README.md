# LikeButton

An animated heart-toggle button with a like count — built in Svelte 5 using runes.

## Purpose

`LikeButton` toggles a "liked" state on click, animating the heart icon and incrementing/decrementing a displayed count. Common on posts, comments, and product cards.

## Installation

```bash
# No installation needed — copy LikeButton.svelte into your project
```

## Usage

```svelte
<script>
  import LikeButton from "./LikeButton.svelte";
</script>

<LikeButton initialCount={128} />
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `initialCount` | `number` | `128` | No | Starting like count. |
| `initiallyLiked` | `boolean` | `false` | No | Whether the button starts in the "liked" state. |

## Dependencies

- None (pure Svelte + CSS)

## Example

```svelte
<LikeButton initialCount={42} initiallyLiked={true} />
```
