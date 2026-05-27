---
name: Warm Paws Aesthetic
colors:
  surface: '#fdf9f0'
  surface-dim: '#dddad1'
  surface-bright: '#fdf9f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ea'
  surface-container: '#f1eee5'
  surface-container-high: '#ece8df'
  surface-container-highest: '#e6e2d9'
  on-surface: '#1c1c17'
  on-surface-variant: '#554337'
  inverse-surface: '#31312b'
  inverse-on-surface: '#f4f0e8'
  outline: '#887365'
  outline-variant: '#dbc2b1'
  surface-tint: '#934b00'
  primary: '#934b00'
  on-primary: '#ffffff'
  primary-container: '#f28c33'
  on-primary-container: '#5f2e00'
  inverse-primary: '#ffb781'
  secondary: '#7f543a'
  on-secondary: '#ffffff'
  secondary-container: '#ffc5a5'
  on-secondary-container: '#7a5036'
  tertiary: '#7c5639'
  on-tertiary: '#ffffff'
  tertiary-container: '#cb9c7a'
  on-tertiary-container: '#543419'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc4'
  primary-fixed-dim: '#ffb781'
  on-primary-fixed: '#301400'
  on-primary-fixed-variant: '#703800'
  secondary-fixed: '#ffdbc9'
  secondary-fixed-dim: '#f3ba9a'
  on-secondary-fixed: '#311302'
  on-secondary-fixed-variant: '#643d25'
  tertiary-fixed: '#ffdcc4'
  tertiary-fixed-dim: '#efbc98'
  on-tertiary-fixed: '#2f1501'
  on-tertiary-fixed-variant: '#613f24'
  background: '#fdf9f0'
  on-background: '#1c1c17'
  surface-variant: '#e6e2d9'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: auto
---

## Brand & Style

This design system is built to evoke a sense of "home-like" comfort, reliability, and joy. The brand personality is deeply rooted in the bond between pets and their owners, prioritizing warmth and accessibility over clinical precision. 

The design style follows a **Modern / Warm** aesthetic. It utilizes generous whitespace to let high-quality pet photography breathe, ensuring the interface never feels cluttered or overwhelming. By combining soft, organic shapes with a sophisticated, earthy color palette, the UI creates an emotional response of safety and affection. The overall visual language is approachable and "squishy," avoiding sharp edges to mirror the softness of the animals the product serves.

## Colors

The color strategy for the design system centers on organic, appetizing tones that feel natural and premium.

- **Primary (Warm Orange):** Used for call-to-actions, highlights, and active states. It represents energy and the heart-centered nature of pet care.
- **Secondary (Deep Brown):** Primarily used for typography and iconography. It provides a grounded, sturdy foundation that is more readable and softer than pure black.
- **Neutral (Soft Cream):** The primary background color. Unlike stark white, this cream tone reduces eye strain and reinforces the "warm" brand personality.
- **Tertiary (Muted Sand):** Used for subtle borders, disabled states, and secondary UI containers to provide depth without introducing new hues.

## Typography

The design system utilizes **Plus Jakarta Sans** across all levels. This typeface was chosen for its modern, geometric structure tempered by soft, friendly curves that align with the brand’s approachable nature.

- **Headlines:** Set in Bold or Extra Bold weights using the Deep Brown color. Tracking is slightly tightened on larger sizes to maintain a punchy, editorial feel.
- **Body Text:** Uses a generous line height (1.5x minimum) to ensure maximum legibility, especially when describing pet health or product details.
- **Labels:** Used for navigation and category chips, utilizing semi-bold weights to provide hierarchy without needing increased font size.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop to maintain a premium, curated feel, transitioning to a **Fluid Grid** for mobile devices.

- **Desktop:** A 12-column grid with a max-width of 1200px. Content is centered with "auto" margins.
- **Mobile:** A 4-column fluid grid with 16px side margins.
- **Spacing Rhythm:** Based on an 8px scale. Use `lg` (48px) and `xl` (80px) spacing to separate major content sections, reinforcing the "minimalist" and airy personality of the design system. Gutters are kept wide (24px) to ensure pet imagery never feels cramped.

## Elevation & Depth

Visual hierarchy in the design system is achieved through **Ambient Shadows** and **Tonal Layering**. 

Depth is never harsh; instead, it mimics soft natural light. Surfaces use a very low-opacity Deep Brown shadow with a large blur radius (e.g., `0 8px 24px rgba(66, 33, 11, 0.08)`). 

- **Level 0 (Background):** Soft Cream.
- **Level 1 (Cards/Containers):** Pure White or a slightly lighter cream with a subtle soft shadow.
- **Level 2 (Interactive/Floating):** Increased shadow spread to indicate "lift" when an element is hovered or active.
- **Overlays:** Use a semi-transparent Deep Brown backdrop blur to maintain focus on modals while keeping the warm palette visible.

## Shapes

The shape language is consistently **Rounded**. This removes visual friction and reinforces the friendly, safe brand personality.

- **Standard Components:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Hero sections and product cards use a 1rem (16px) radius.
- **Interactive Accents:** Form radio buttons and specific "Pill" style tags use a full 3rem (max) radius to appear soft and inviting to the touch.
- **Imagery:** Pet photography should always feature rounded corners to match the UI components.

## Components

Components in the design system are designed to feel tactile and trustworthy.

- **Buttons:** Primary buttons are Warm Orange with white text. They should have a subtle "press" animation. Secondary buttons use a Deep Brown outline with no fill.
- **Chips/Tags:** Used for pet categories (e.g., "Dog," "Cat"). These are pill-shaped with the Soft Cream background and Deep Brown text.
- **Input Fields:** Utilize the Soft Cream background with a 1px Deep Brown border at 20% opacity. On focus, the border transitions to the Primary Warm Orange.
- **Cards:** Product cards use white backgrounds, rounded corners (Level 2), and soft ambient shadows. There should be no harsh borders; depth is defined by the shadow.
- **Lists:** Items are separated by generous whitespace rather than lines. If dividers are needed, use the Tertiary Sand color at a very low opacity.
- **Checkboxes/Radios:** These should be oversized to appear "friendly" and easy to toggle on mobile devices, using the Primary Orange for the selected state.