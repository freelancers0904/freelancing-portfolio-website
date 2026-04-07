

# Pricing Section Update

## What changes
Update `src/components/Pricing.tsx` with new plan data, subtitles, outcome sections, and a "How Growth Works" info block below pricing.

## Plan details

### 1. Update plan data array
Replace the three plans with the new content:
- **Starter – Basic Online Presence**: ₹8,000 – ₹12,000, 7 features, outcome text
- **Growth – Lead Generation System** (MOST POPULAR): ₹18,000 – ₹25,000, 17 features, outcome text
- **Scale – 3 Month Growth & Automation System**: ₹35,000 – ₹50,000+, 16 features, outcome text

Each plan object gets a new `outcome` field for the result statement.

### 2. Update card rendering
- Show plan name as "Starter – Basic Online Presence" format (subtitle after dash)
- Add an outcome block below features with a subtle highlight background and a target/rocket icon
- CTA buttons: "Get Started →", "Start Growing →", "Let's Build This →"

### 3. Add "How Growth Works" section
Below the mid-page CTA, add a new info block with an icon and the text about setup timeline and gradual growth (2–4 weeks). Styled as a subtle bordered card matching the existing design language.

### 4. Files changed
- `src/components/Pricing.tsx` — only file modified

