## Plan: Update Vichaar Co Logo (Transparent, Bigger, Both Modes)

### What I'll do

1. **Save uploaded logo** to `src/assets/vichaar-logo-original.jpeg`.

2. **Generate a transparent PNG version** using `imagegen--edit_image` on the uploaded logo:
   - Remove the solid black background → fully transparent
   - Preserve the exact wordmark, checkmark, tagline, spelling, and gold/white colors as-is
   - Output: `src/assets/vichaar-logo-transparent.png`
   - Since the artwork uses white text + gold accents, a single transparent file works on both light and dark backgrounds (white reads on dark royal blue; on light cream the gold + dark strokes still read — I'll verify after generation and, if white is unreadable on light mode, generate a second variant with dark navy text for light mode only).

3. **Update `Navbar.tsx`**:
   - Replace both `vichaarLogo` and `vichaarLogoLight` imports with the transparent PNG (single source for both modes, unless step 2 needs a light variant)
   - Increase size: `h-10 md:h-12` → `h-12 md:h-14`

4. **Update `Footer.tsx`**:
   - Same import swap
   - Increase size: `h-11 md:h-12` → `h-13 md:h-14`

5. **QA**: Open preview, toggle light/dark mode, confirm logo blends with both backgrounds, text is fully readable, spelling untouched, sizing balanced (not too big, not too small).

### Files touched
- `src/assets/vichaar-logo-original.jpeg` (new)
- `src/assets/vichaar-logo-transparent.png` (new)
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
