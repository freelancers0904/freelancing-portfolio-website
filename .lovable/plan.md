## Plan: Clean Up the Vichaar Co Logo in Light and Dark Mode

### What I’ll change
1. Replace the current broken logo assets with properly prepared PNG files.
   - The current so-called transparent files are not actually transparent; they contain a baked-in checkerboard background.
   - I’ll recreate the dark-mode and light-mode logo assets so the background is truly transparent and the wordmark stays clean.

2. Improve readability for both themes.
   - Keep the same spelling, wording, and overall logo design.
   - Use a dark-text version for light mode and a light-text version for dark mode so the text stays crisp and fully visible on both backgrounds.
   - Make sure the tagline remains legible without looking muddy or boxed.

3. Increase the displayed logo size slightly.
   - Update the navbar logo sizing so it reads clearly without overpowering the header.
   - Update the footer logo sizing to match the cleaner presentation.

4. Tighten the logo presentation in the UI.
   - Remove any visual box-like feel caused by the current bad asset.
   - Ensure the logo blends naturally into the header/footer backgrounds in both views.

5. QA in preview.
   - Check dark mode and light mode.
   - Confirm there is no checkerboard, no black fill, no visible image rectangle, and the text is readable at the new size.

### Technical details
- Regenerate these assets:
  - `src/assets/vichaar-logo-transparent.png`
  - `src/assets/vichaar-logo-light-mode.png`
- Update usage in:
  - `src/components/Navbar.tsx`
  - `src/components/Footer.tsx`
- Adjust logo height classes only as needed for a slightly larger, cleaner result.