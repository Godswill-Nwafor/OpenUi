# ToggleSwitch

An accessible on/off toggle switch, built as a Vue 3 `<script setup>` SFC with full `v-model` support.

## Purpose

`ToggleSwitch` is a drop-in replacement for a checkbox where a switch UI reads better — settings panels, feature flags, notification preferences. Uses `role="switch"` and `aria-checked` for screen reader support.

## Installation

```bash
# No installation needed — copy ToggleSwitch.vue into your project
```

## Usage

```vue
<template>
  <ToggleSwitch v-model="enabled" label="Enable notifications" />
</template>

<script setup>
import { ref } from "vue";
import ToggleSwitch from "./ToggleSwitch.vue";

const enabled = ref(true);
</script>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `modelValue` | `boolean` | `false` | No | Current on/off state — bind with `v-model`. |
| `label` | `string` | `"Toggle"` | No | Accessible label announced by screen readers. |

## Dependencies

- None (pure Vue 3 + CSS)

## Example

```vue
<ToggleSwitch v-model="darkMode" label="Dark mode" />
```
