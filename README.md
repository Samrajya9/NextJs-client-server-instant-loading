# Instant Route Loading for Next.js ⚡

Provides an instant loading experience in **Next.js App Router** by syncing:

- client-side route change detection
- server-side `loading.tsx` fallback

This removes the blank screen during navigation and makes page transitions feel fast even on slow networks.

---

## Features 🚀

- Shows loader immediately when user clicks a link
- Syncs with Next.js `loading.tsx`
- Prevents flicker with minimum display duration
- Works with dynamic routes
- Improves perceived performance
- Supports App Router (Next.js 13+)

---

## How it works 🧠

1. User clicks a Next.js `<Link>`
2. Client detects navigation instantly
3. Loader displays immediately
4. Next.js loads server component
5. `loading.tsx` takes over
6. Page renders smoothly

Result → no blank screen between routes.
