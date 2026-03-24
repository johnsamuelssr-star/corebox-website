# Corebox Systems Homepage Wireframe Spec

## Purpose

This document translates the strategic brief and the design control brief into a concrete homepage wireframe spec.

It defines:
- section order
- desktop and mobile layout behavior
- content hierarchy
- component placement
- screenshot and proof treatment
- CTA placement
- how future product areas appear without competing with Atlas

This is a structure document, not a final copy deck and not a visual design comp.

---

## Relationship to Other Documents

Use this document with:
- **Strategic Brief** for company positioning and narrative
- **Design Control Brief** for visual rules, motion limits, panel style, glow limits, and hierarchy

This wireframe spec should not contradict either document.

---

## Non-Negotiable Rules

1. **Corebox Systems is the parent brand.**
2. **Atlas is the only live product and must dominate all product-related storytelling.**
3. **Future products are expansion areas, not equal product cards.**
4. The homepage must feel like a **serious software company website**, not a repurposed CRM login shell.
5. Every section must have **one job**. No bloated sections.

---

# 1. Global Layout Rules

## Page Widths

Use three width modes only:
- **Wide:** `1240px-1280px` for hero and Atlas proof sections
- **Standard:** `1120px-1200px` for most homepage sections
- **Narrow:** `760px-840px` for tight CTA copy or supporting statements

## Grid

- Desktop: **12-column grid**
- Tablet: **8-column grid**
- Mobile: **single-column stack** with structured spacing

## Section Padding

Recommended desktop rhythm:
- top/bottom section padding: `96px-140px`
- internal panel padding: `24px-32px`
- large section transitions: visually clear, not cramped

Recommended mobile rhythm:
- top/bottom section padding: `64px-88px`
- internal panel padding: `18px-24px`

## Header Behavior

- Start transparent or near-transparent over the hero
- Transition to a solid dark header after scroll
- Sticky behavior is acceptable if it remains restrained
- Header height should stay compact and premium

## Header Nav Items

Recommended nav:
- Products
- Atlas
- Approach
- Contact

Recommended CTA:
- **Request Demo** or **Talk to Corebox**

Do not overload the nav with future-product links.

---

# 2. Homepage Section Order

The homepage must follow this sequence:

1. Header
2. Hero
3. Products / Platform Overview
4. Atlas Proof Block
5. Why Corebox Systems
6. Expansion Areas
7. Contact / Demo Close
8. Footer

This sequence keeps the site disciplined:
- brand first
- live proof second
- operating philosophy third
- future expansion later
- conversion close at the end

---

# 3. Header Wireframe

## Purpose

The header establishes Corebox Systems as a company brand, not just an application login.

## Desktop Layout

```text
+----------------------------------------------------------------------------------+
| LOGO / WORDMARK                  Products  Atlas  Approach  Contact   [CTA]      |
+----------------------------------------------------------------------------------+
```

## Rules

- Logo aligned left
- Navigation centered-right
- CTA at far right
- No more than one header CTA
- Do not include login as a dominant header action on the public homepage

### Secondary login behavior
If login exists in the header, it should be a low-emphasis text link and should route to:
- `atlas.coreboxsystems.com/login`

## Mobile Layout

```text
+----------------------------------+
| LOGO / WORDMARK          [MENU]  |
+----------------------------------+
```

Mobile menu should prioritize:
1. Atlas
2. Products
3. Approach
4. Contact
5. CTA

---

# 4. Hero Section

## Purpose

The hero must immediately communicate:
- Corebox Systems is a real software company
- the brand is premium, structured, and modern
- Atlas is a live execution proof inside a larger company vision

## Desktop Layout

**Split hero. Not centered.**

```text
+--------------------------------------------------------------------------------------------------+
| LEFT: BRAND + MESSAGE                             | RIGHT: BRAND OBJECT / PRODUCT FRAME          |
|                                                   |                                              |
| Eyebrow: Corebox Systems                          | [Large structured visual panel]              |
| Headline                                          | - dominant interface frame or logo object    |
| 1-2 short supporting sentences                    | - subtle light depth                         |
| [Primary CTA]  [Secondary CTA]                    | - one controlled supporting detail only      |
| Optional credibility line                         |                                              |
+--------------------------------------------------------------------------------------------------+
```

## Column Distribution

- Left content: **5 columns**
- Right visual: **7 columns**

## Left-Side Content Blocks

### Required
- Eyebrow / label
- Primary headline
- Supporting copy
- Primary CTA
- Secondary CTA

### Optional
- small proof line such as "Live product: Atlas CRM"
- one short trust statement

## Copy Limits

- headline: ideally `2 lines`, max `3`
- supporting copy: `2 short sentences`
- no paragraph wall
- no bullet list inside the hero

## Right-Side Visual Treatment

Preferred hierarchy:
1. one dominant product or brand frame
2. one subtle secondary support element
3. controlled lighting

Acceptable approaches:
- architectural logo treatment + interface frame
- one large Atlas UI frame with premium crop treatment
- one framed system visual with a small proof badge

Avoid:
- multiple floating mini cards
- fake dashboard clutter
- decorative abstract shape soup
- equal-sized repeated panels

## Hero CTA Behavior

Recommended CTA pair:
- Primary: **Request Demo** or **Talk to Corebox**
- Secondary: **Explore Atlas**

Secondary CTA may anchor-scroll to Atlas or open the Atlas product page.

## Mobile Layout

```text
+----------------------------------------------+
| Eyebrow                                      |
| Headline                                     |
| Supporting copy                              |
| [Primary CTA]                                |
| [Secondary CTA]                              |
|                                              |
| [Single dominant visual panel]               |
+----------------------------------------------+
```

### Mobile Rules
- copy first
- visual second
- maintain one dominant frame only
- do not shrink the visual into an unreadable thumbnail

---

# 5. Products / Platform Overview Section

## Purpose

This section introduces Corebox as a company building focused software systems, while keeping Atlas clearly dominant.

It is not a full product grid.

## Desktop Layout

```text
+----------------------------------------------------------------------------------+
| Intro label                                                                      |
| Section headline                                                                 |
| Short supporting paragraph                                                       |
+--------------------------------+-------------------------------------------------+
| Atlas (featured primary panel) | Corebox approach / systems statement            |
| - stronger contrast            | or                                              |
| - product tag                  | two compact supporting panels                   |
| - 1-2 line description         |                                                 |
| - link / CTA                   |                                                 |
+--------------------------------+-------------------------------------------------+
```

## Structure

- top intro row spans most of the width
- below it, Atlas gets the strongest panel
- supporting company context sits beside it, not above it

## Content Rules

### Atlas panel
Must include:
- product name
- one-sentence explanation
- live-product cue
- directional CTA

### Supporting company content
May include:
- company approach
- vertical focus areas
- systems philosophy

Do not place three equal product cards here.

## Mobile Layout

```text
+----------------------------------------------+
| Intro label                                  |
| Headline                                     |
| Supporting paragraph                         |
|                                              |
| [Featured Atlas panel]                       |
| [Supporting Corebox panel]                   |
+----------------------------------------------+
```

---

# 6. Atlas Proof Block

## Purpose

This is the most important section after the hero.

It proves that Corebox Systems builds real software and that Atlas is operational, concrete, and worth exploring.

## Positioning Rule

This section must feel more substantial than the Products Overview section.

It is where the site earns credibility.

## Desktop Layout

```text
+--------------------------------------------------------------------------------------------------+
| Label: Live Product                                                                              |
| Headline: Atlas CRM                                                                              |
| Short supporting copy                                                                            |
+------------------------------------------------------+-------------------------------------------+
| LARGE SCREENSHOT / PRODUCT FRAME                     | Proof column                              |
|                                                      | - 3 short proof points                    |
| - dominant visual weight                             | - product value statements                |
| - readable crop                                      | - CTA                                     |
| - premium frame treatment                            |                                           |
+------------------------------------------------------+-------------------------------------------+
| Optional compact metric / capability strip below                                           |
+--------------------------------------------------------------------------------------------------+
```

## Screenshot Treatment Rules

Atlas proof must use a **real screenshot or real interface crop**, not a fake mock dashboard.

### Preferred treatment
- one large screenshot inside a structured frame
- clean crop that shows product credibility
- subtle chrome or frame treatment
- one small caption or badge: **Live Product**

### Optional support elements
- a narrow capability strip
- small annotations or callouts with extreme restraint
- one secondary cropped interface detail if needed

### Do not do this
- three fake screenshots side by side
- tiny unreadable app thumbnails
- floating screenshots with no structure
- heavy neon outlines
- fake charts added just for style

## Proof Column Content

Use short, concrete points such as:
- what Atlas helps organizations manage
- why it matters operationally
- what type of user it serves

Keep it to **three proof points max**.

## CTA

Recommended CTA options:
- **Explore Atlas**
- **Request Atlas Demo**

## Mobile Layout

```text
+----------------------------------------------+
| Label                                         |
| Atlas headline                                |
| Supporting copy                               |
|                                              |
| [Large screenshot frame]                      |
|                                              |
| Proof point 1                                 |
| Proof point 2                                 |
| Proof point 3                                 |
| [CTA]                                         |
+----------------------------------------------+
```

### Mobile Rules
- screenshot remains large and readable
- proof points stack below
- CTA stays in the section, not hidden elsewhere

---

# 7. Why Corebox Systems Section

## Purpose

This section explains the company mindset and why Corebox exists, without drifting into generic startup fluff.

It should answer:
- why this company exists
- what kind of software it builds
- how it thinks about operational systems

## Desktop Layout

```text
+----------------------------------------------------------------------------------+
| Section label                                                                    |
| Headline                                                                         |
| Supporting paragraph                                                             |
+------------------------------+------------------------------+--------------------+
| Principle 1                  | Principle 2                  | Principle 3        |
| short explanation            | short explanation            | short explanation  |
+------------------------------+------------------------------+--------------------+
```

## Content Shape

Use three principles or operating beliefs.

Examples of acceptable principle themes:
- built for real workflows
- designed for clarity and control
- structured for growth and automation

## Visual Weight

This section should be tighter and more copy-led than Atlas.
It should reset the pace after the large proof block.

## Mobile Layout

```text
+----------------------------------------------+
| Label                                         |
| Headline                                      |
| Supporting paragraph                          |
| [Principle panel]                             |
| [Principle panel]                             |
| [Principle panel]                             |
+----------------------------------------------+
```

---

# 8. Expansion Areas Section

## Purpose

This section signals that Corebox is becoming a multi-product company without pretending those products already exist at full maturity.

## Critical Framing Rule

This section must be labeled as something like:
- **Expansion Areas**
- **Product Tracks**
- **Where Corebox Is Expanding**

Do **not** label it simply as **Products** if Atlas is the only live product.

## Desktop Layout

```text
+----------------------------------------------------------------------------------+
| Label: Expansion Areas                                                           |
| Headline                                                                         |
| Short paragraph                                                                  |
+--------------------------+--------------------------+----------------------------+
| Education Systems        | Home Automation          | Veteran Guidance Tools     |
| 1 short sentence         | 1 short sentence         | 1 short sentence           |
| low-emphasis treatment   | low-emphasis treatment   | low-emphasis treatment     |
+--------------------------+--------------------------+----------------------------+
| Shared supporting note or single company-level CTA                               |
+----------------------------------------------------------------------------------+
```

## Rules

- Atlas must not appear as an equal fourth card here
- these panels must have lower contrast than Atlas sections
- one sentence each is enough
- no product-specific CTA per card
- use one shared CTA below if needed

## Tone

This section should feel forward-looking but disciplined.
It should not read like speculative hype.

## Mobile Layout

```text
+----------------------------------------------+
| Label                                         |
| Headline                                      |
| Supporting paragraph                          |
| [Expansion panel]                             |
| [Expansion panel]                             |
| [Expansion panel]                             |
| [Shared CTA / Contact link]                   |
+----------------------------------------------+
```

---

# 9. Contact / Demo Close

## Purpose

Give the visitor one clear next step.

This section should close the page with confidence and clarity.

## Desktop Layout

```text
+----------------------------------------------------------------------------------+
| Narrow-width CTA block                                                           |
| Headline                                                                         |
| 1 short supporting paragraph                                                     |
| [Primary CTA]  [Secondary CTA or email link]                                     |
+----------------------------------------------------------------------------------+
```

## Recommended CTA Pair

Primary:
- **Request Demo**
- **Talk to Corebox**

Secondary:
- **Contact Us**
- direct email link

## Rules

- keep this section narrow and focused
- do not introduce new complexity here
- do not add a large form unless the site strategy requires it

A short form can exist on a dedicated contact page.

## Mobile Layout

```text
+----------------------------------------------+
| Headline                                      |
| Supporting paragraph                          |
| [Primary CTA]                                 |
| [Secondary CTA]                               |
+----------------------------------------------+
```

---

# 10. Footer

## Purpose

The footer should reinforce company legitimacy and site structure.

## Desktop Layout

```text
+----------------------------------------------------------------------------------+
| LOGO / WORDMARK                                                                  |
| Short company line                                                               |
+----------------------------+------------------------+----------------------------+
| Products                   | Company                | Contact                    |
| Atlas                      | Approach               | Email                      |
|                            | Contact                | Optional social / demo     |
+----------------------------+------------------------+----------------------------+
| Copyright / legal line                                                          |
+----------------------------------------------------------------------------------+
```

## Rules

- keep footer clean and compact
- Atlas can appear here as the main product link
- avoid listing future products as if they are live launches

---

# 11. Section-by-Section Content Priority

## Priority Stack

### Highest priority
1. Hero headline and CTA
2. Atlas proof block
3. Company credibility / operating philosophy

### Secondary priority
4. Products overview intro
5. Expansion areas
6. Contact close

This hierarchy must be visible in:
- section size
- contrast
- screenshot treatment
- CTA emphasis
- copy depth

---

# 12. Desktop Wireframe at a Glance

```text
+--------------------------------------------------------------------------------------------------+
| HEADER: LOGO | Products | Atlas | Approach | Contact | CTA                                      |
+--------------------------------------------------------------------------------------------------+
| HERO: left copy / right structured product-brand visual                                           |
+--------------------------------------------------------------------------------------------------+
| PRODUCTS / PLATFORM OVERVIEW: intro + featured Atlas panel + supporting Corebox context          |
+--------------------------------------------------------------------------------------------------+
| ATLAS PROOF BLOCK: label + headline + large screenshot + proof column + CTA                      |
+--------------------------------------------------------------------------------------------------+
| WHY COREBOX: intro + 3 principle panels                                                          |
+--------------------------------------------------------------------------------------------------+
| EXPANSION AREAS: 3 low-emphasis future-direction panels                                           |
+--------------------------------------------------------------------------------------------------+
| CONTACT CLOSE: narrow CTA block                                                                   |
+--------------------------------------------------------------------------------------------------+
| FOOTER                                                                                            |
+--------------------------------------------------------------------------------------------------+
```

---

# 13. Mobile Wireframe at a Glance

```text
+----------------------------------------------+
| HEADER / MENU                                 |
+----------------------------------------------+
| HERO COPY                                     |
| HERO VISUAL                                   |
+----------------------------------------------+
| PRODUCTS / PLATFORM OVERVIEW                  |
| FEATURED ATLAS PANEL                          |
| SUPPORTING COREBOX PANEL                      |
+----------------------------------------------+
| ATLAS PROOF COPY                              |
| LARGE SCREENSHOT                              |
| PROOF POINTS                                  |
| CTA                                           |
+----------------------------------------------+
| WHY COREBOX PANELS                            |
+----------------------------------------------+
| EXPANSION AREAS PANELS                        |
+----------------------------------------------+
| CONTACT CLOSE                                 |
+----------------------------------------------+
| FOOTER                                        |
+----------------------------------------------+
```

---

# 14. Copy Placeholders by Section

## Hero
- Eyebrow: `Corebox Systems`
- Headline placeholder: `Software for systems that have to work.`
- Supporting line placeholder: `Corebox builds focused software for operational environments where clarity, control, and execution matter.`

## Products / Platform Overview
- Headline placeholder: `Focused products. Structured systems.`

## Atlas Proof Block
- Label placeholder: `Live Product`
- Headline placeholder: `Atlas CRM`
- Supporting placeholder: `Atlas helps education-focused operations stay organized, visible, and easier to run.`

## Why Corebox
- Headline placeholder: `Built for operational clarity.`

## Expansion Areas
- Headline placeholder: `Where Corebox is expanding.`

## Contact Close
- Headline placeholder: `Bring structure to the work that matters.`

These are placeholders only. Final copy can evolve.

---

# 15. Acceptance Checklist

The homepage wireframe passes only if the answer is **yes** to all of the following:

- Does the homepage clearly establish **Corebox Systems** as the parent brand?
- Does **Atlas** receive the most visual weight and the clearest proof treatment?
- Is Atlas presented as the **only live product** rather than one of several equal cards?
- Are future products framed as **expansion areas** rather than equal offerings?
- Does the hero use a **split layout** instead of a centered generic SaaS hero?
- Is there a **real Atlas screenshot** in a dominant proof section?
- Does the site avoid floating-card clutter and soft startup-template composition?
- Does each section have **one clear job**?
- Is the contact close simple and focused?
- Does the mobile stack preserve hierarchy and screenshot readability?

---

# 16. Recommended Next Deliverables

After this wireframe spec, the next useful artifacts are:

1. **Homepage Copy Deck**
   - final headline options
   - section copy
   - CTA text

2. **Homepage Visual Mock Direction**
   - hero visual references
   - screenshot crop plan
   - panel hierarchy sample

3. **Component Spec**
   - buttons
   - panel variants
   - section headers
   - nav and footer behavior

