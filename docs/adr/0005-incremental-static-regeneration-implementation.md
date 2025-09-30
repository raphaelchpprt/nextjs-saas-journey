# 5. Incremental Static Regeneration (ISR) Implementation

- **Status:** Accepted
- **Date:** 2025-01-27

## Context and Problem Statement

The application currently renders pages statically at build time, but lacks the ability to update content after deployment without rebuilding the entire application. For a SaaS journey application that may have content updates, we need a mechanism to regenerate pages periodically to ensure content freshness while maintaining the performance benefits of static generation.

## Decision Drivers

- Need for automatic content updates without full rebuilds
- Requirement to maintain static generation performance benefits
- Importance of having fresh content for a learning journey blog/documentation
- Need to balance between performance and content freshness

## Considered Options

- **Option 1:** Server-Side Rendering (SSR) - Dynamic on every request but slower
- **Option 2:** Static Site Generation (SSG) only - Fast but requires full rebuilds for updates
- **Option 3:** Incremental Static Regeneration (ISR) - Combines benefits of both static and dynamic rendering

## Decision

We decided to implement **Option 3: Incremental Static Regeneration (ISR)** by adding `export const revalidate = 3600` to all page components:

1. **Implementation Details:**
   - Added `export const revalidate = 3600` to `src/app/page.tsx` (home page)
   - Added `export const revalidate = 3600` to `src/app/about/page.tsx` 
   - Added `export const revalidate = 3600` to `src/app/pricing/page.tsx`
   - Set revalidation interval to 3600 seconds (1 hour)

2. **Behavior:**
   - Pages are statically generated at build time
   - After 1 hour, the next request triggers regeneration in the background
   - Users always get fast responses (cached version initially, fresh version after regeneration)

## Consequences

### Positive

- Pages load fast due to static generation
- Content can be updated without full application rebuilds
- Balanced approach between performance and freshness
- Automatic background regeneration requires no manual intervention
- Reduces server load compared to SSR while providing content freshness

### Negative

- Content updates may have up to 1-hour delay before appearing to users
- Requires understanding of ISR concepts for future development
- Additional complexity compared to pure SSG approach