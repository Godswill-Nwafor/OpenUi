<script>
  let { initialCount = 128, initiallyLiked = false } = $props();

  let liked = $state(initiallyLiked);
  let count = $state(initialCount);

  function toggle() {
    liked = !liked;
    count += liked ? 1 : -1;
  }
</script>

<button
  type="button"
  onclick={toggle}
  aria-pressed={liked}
  aria-label={liked ? "Unlike" : "Like"}
  class="like-button"
  class:liked
>
  <svg
    class="heart"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill={liked ? "currentColor" : "none"}
    stroke="currentColor"
    stroke-width="2"
    aria-hidden="true"
  >
    <path
      d="M12 21s-6.7-4.35-9.33-8.24C1.02 10.6 1.4 7.55 3.6 5.9c1.94-1.46 4.6-1.1 6.02.62L12 9l2.38-2.48c1.42-1.72 4.08-2.08 6.02-.62 2.2 1.65 2.58 4.7.93 6.86C18.7 16.65 12 21 12 21z"
    />
  </svg>
  <span class="count">{count.toLocaleString()}</span>
</button>

<style>
  .like-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    height: 2.5rem;
    padding: 0 1rem;
    border-radius: 0.75rem;
    border: 1px solid rgba(148, 163, 184, 0.3);
    background: transparent;
    color: #94a3b8;
    font: inherit;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 150ms ease;
  }

  .like-button:hover {
    background: rgba(239, 68, 68, 0.08);
    border-color: rgba(239, 68, 68, 0.3);
    color: #ef4444;
  }

  .like-button.liked {
    background: rgba(239, 68, 68, 0.1);
    border-color: rgba(239, 68, 68, 0.4);
    color: #ef4444;
  }

  .heart {
    transition: transform 200ms ease;
  }

  .like-button.liked .heart {
    transform: scale(1.15);
  }

  .count {
    font-variant-numeric: tabular-nums;
  }
</style>
