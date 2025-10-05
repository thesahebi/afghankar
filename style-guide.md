# Afghankar.com Style Guide

## Color Palette (STRICT - DO NOT CHANGE)

### Primary Colors
- **Primary**: `#1A73E8` - Used for buttons, links, highlights, active states
- **Secondary**: `#E3F2FD` - Used for background accents, hover states, light backgrounds
- **Accent**: `#FFC107` - Used for CTA highlights, icons, special elements

### Background Colors
- **Main Background**: `#F9FAFB` - Very light gray for main page backgrounds
- **Card Background**: `#FFFFFF` - White for cards and content areas

### Text Colors
- **Primary Text**: `#111827` - Dark gray for main text content
- **Secondary Text**: `#6B7280` - Medium gray for secondary text
- **Light Text**: `#9CA3AF` - Light gray for subtle text

### Border Colors
- **Primary Border**: `#E5E7EB` - Light gray for borders
- **Secondary Border**: `#F3F4F6` - Very light gray for subtle borders

## Typography (STRICT - DO NOT CHANGE)

### Font Families
- **Primary (Persian/Dari)**: `Vazirmatn` - For all Persian/Dari text
- **Secondary (English)**: `Inter` or `Poppins` - For any English text
- **Fallback**: `Tahoma, Arial, sans-serif`

### Font Sizes
- **H1 (Hero Title)**: `clamp(2rem, 4vw, 2.75rem)` - Large, bold hero titles
- **H2 (Section Title)**: `clamp(1.5rem, 3vw, 2.25rem)` - Section headings
- **H3 (Subsection)**: `clamp(1.25rem, 2.5vw, 1.75rem)` - Subsection headings
- **H4 (Card Title)**: `clamp(1.125rem, 2vw, 1.5rem)` - Card titles
- **Body Text**: `1rem` - Standard body text
- **Lead Text**: `1.125rem` - Emphasized body text
- **Small Text**: `0.875rem` - Small text, captions

### Font Weights
- **Bold**: `700` - For titles and important text
- **Semi-bold**: `600` - For headings
- **Medium**: `500` - For emphasized text
- **Normal**: `400` - For body text
- **Light**: `300` - For subtle text

### Line Heights
- **Titles**: `1.2-1.3` - Tight for titles
- **Body Text**: `1.6` - Comfortable for reading
- **Lead Text**: `1.7` - Slightly more spaced

## Component Specifications

### Buttons
- **Primary Button**: 
  - Background: `#1A73E8`
  - Text: `#FFFFFF`
  - Hover: Darker shade of primary
  - Border radius: `0.5rem`
  - Padding: `0.75rem 1.5rem`

- **Secondary Button**:
  - Background: `#E3F2FD`
  - Text: `#1A73E8`
  - Hover: `#1A73E8` background with white text
  - Border: `1px solid #1A73E8`

### Cards
- **Background**: `#FFFFFF`
- **Border**: `1px solid #E5E7EB`
- **Border radius**: `0.75rem`
- **Shadow**: `0 4px 6px rgba(0, 0, 0, 0.1)`
- **Padding**: `1.5rem`

### Navigation
- **Text Color**: `#111827`
- **Hover Color**: `#1A73E8`
- **Active Color**: `#1A73E8`
- **Background**: Transparent or `#FFFFFF` with backdrop blur

### Hero Section
- **Background**: Soft gradient from white to `#F9FAFB`
- **Title Color**: `#111827`
- **Subtitle Color**: `#6B7280`
- **CTA Button**: Primary color `#1A73E8`

### Footer
- **Background**: `#F9FAFB`
- **Text Color**: `#111827`
- **Link Color**: `#1A73E8`
- **Border**: `1px solid #E5E7EB`

## Spacing System

### Padding/Margin Scale
- **xs**: `0.25rem` (4px)
- **sm**: `0.5rem` (8px)
- **md**: `1rem` (16px)
- **lg**: `1.5rem` (24px)
- **xl**: `2rem` (32px)
- **2xl**: `3rem` (48px)
- **3xl**: `4rem` (64px)

### Component Spacing
- **Section Padding**: `3rem 0` (48px vertical)
- **Card Padding**: `1.5rem` (24px)
- **Button Padding**: `0.75rem 1.5rem`
- **Input Padding**: `0.75rem 1rem`

## Responsive Breakpoints

- **Mobile**: `320px - 767px`
- **Tablet**: `768px - 1023px`
- **Desktop**: `1024px+`

## Animation Guidelines

- **Duration**: `0.3s` for quick interactions, `0.6s` for page transitions
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` for smooth animations
- **Hover Effects**: Subtle scale (`1.05`) and color transitions
- **Page Transitions**: Fade in with slight upward movement

## RTL (Right-to-Left) Guidelines

- **Text Direction**: `direction: rtl` on all elements
- **Text Alignment**: `text-align: right` for Persian text
- **Margin/Padding**: Use `margin-left` and `padding-left` for spacing
- **Flexbox**: Use `flex-direction: row-reverse` when needed
- **Icons**: Position on the left side of text

## Accessibility

- **Color Contrast**: Minimum 4.5:1 ratio for text
- **Focus States**: Clear outline using primary color
- **Keyboard Navigation**: All interactive elements accessible
- **Screen Readers**: Proper ARIA labels and semantic HTML

## File Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ScrollToTop.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── ui/
│   ├── Hero.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Section.tsx
│   └── Container.tsx
├── index.css
└── style-guide.md
```

## Usage Rules

1. **NEVER** change the specified color palette
2. **ALWAYS** use Vazirmatn for Persian text
3. **MAINTAIN** RTL layout throughout
4. **ENSURE** full responsiveness on all devices
5. **FOLLOW** the spacing and typography scales exactly
6. **KEEP** animations subtle and professional
7. **TEST** on multiple devices and browsers


