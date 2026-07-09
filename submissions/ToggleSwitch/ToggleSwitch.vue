<template>
  <button
    type="button"
    role="switch"
    :aria-checked="modelValue"
    :aria-label="label"
    class="toggle-switch"
    :class="{ 'is-on': modelValue }"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <span class="thumb" />
  </button>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "Toggle",
  },
});

defineEmits(["update:modelValue"]);
</script>

<style scoped>
.toggle-switch {
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 9999px;
  border: none;
  background: rgba(148, 163, 184, 0.35);
  cursor: pointer;
  padding: 0;
  transition: background-color 150ms ease;
}

.toggle-switch.is-on {
  background: #6366f1;
}

.toggle-switch:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}

.thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  transition: transform 150ms ease;
}

.toggle-switch.is-on .thumb {
  transform: translateX(20px);
}
</style>
