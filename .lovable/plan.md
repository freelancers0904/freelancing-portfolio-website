## Goal
Make the Work section switch cleanly between Interior Design, Restaurant, and Gym so the embedded websites stay visible every time the user changes tabs.

## Root cause
The portfolio cards are rendered with the `scroll-hidden` class, but the section’s scroll animation hook only reveals elements once when the section first enters view. After switching categories, the newly mounted cards remain hidden (`opacity: 0`), so the iframe area looks blank even though the content exists.

## What I will change

### 1. Fix tab content visibility in `src/components/Portfolio.tsx`
- Remove the one-time scroll-reveal behavior from the category-dependent project cards.
- Keep the section heading and tabs using the existing animation behavior.
- Ensure switching categories does not remount hidden content in an invisible state.

### 2. Stabilize the iframe preview area
- Keep real iframes as requested.
- Adjust the iframe wrapper so each category swap renders a visible, consistent preview area.
- Preserve the existing portfolio layout and overall design direction.

### 3. Verify category switching behavior
- Confirm this sequence works reliably:
  - Interior loads on first view
  - Restaurant becomes visible when clicked
  - Gym becomes visible when clicked
  - Switching back to Interior still shows the websites correctly

## Technical details
- File to update: `src/components/Portfolio.tsx`
- Likely no cross-file refactor needed unless a tiny animation helper adjustment is cleaner.
- No design rewrite, no content restructuring, no fallback screenshots.

## Validation
After implementation, I will verify that the Work section no longer shows blank cards when changing categories and that iframe previews remain visible across repeated tab switches.