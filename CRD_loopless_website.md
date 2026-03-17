11# CRD — Loopless Website Frontend
**Claude Requirements Document v1.0**

---

## 1. Project Overview

Bouw de volledige frontend van **loopless.nl** — een meerdere-pagina's website voor Loopless, een AI-automatiseringsbedrijf voor het MKB. De site moet donker, premium en modern aanvoelen — ergens tussen strak/corporate (zoals Linear of Vercel) en speels/creatief (subtiele animaties, gradients). Gebouwd in vanilla HTML/CSS/JS, geen frameworks.

---

## 2. Bedrijfscontext

- **Bedrijfsnaam:** Loopless (handelsnaam van Broeders Digital)
- **Eigenaar:** Wessel Broeders
- **Tagline:** "Geen overbodige stappen. Alleen processen die werken."
- **Kernboodschap:** AI is niet het doel, het is het middel. We beginnen bij jouw probleem — niet bij de technologie.
- **Doelgroep:** MKB-bedrijven die vastlopen in handmatige, repetitieve processen
- **Website:** loopless.nl
- **Email:** wessel@loopless.nl

---

## 3. Design System

### Kleurenpalet
```css
--color-bg:         #0D0D1A;   /* Achtergrond hoofdpagina */
--color-surface:    #13131F;   /* Cards, secties */
--color-border:     #1E1E35;   /* Subtiele borders */
--color-accent:     #4F8EF7;   /* Primaire accentkleur (blauw) */
--color-accent-glow:#4F8EF740; /* Accent met transparantie voor glows */
--color-text:       #E8E8F0;   /* Hoofdtekst */
--color-muted:      #6B6B8A;   /* Subtekst, labels */
--color-white:      #FFFFFF;
```

### Typografie
```css
font-family: 'Inter', sans-serif; /* Google Fonts */

--text-xs:   0.75rem;
--text-sm:   0.875rem;
--text-base: 1rem;
--text-lg:   1.125rem;
--text-xl:   1.25rem;
--text-2xl:  1.5rem;
--text-3xl:  1.875rem;
--text-4xl:  2.25rem;
--text-5xl:  3rem;
--text-6xl:  3.75rem;
```

### Stijlprincipes
- Dark mode als standaard — geen light mode toggle nodig
- Subtiele gradient achtergronden (radial glow achter hero)
- Thin borders (`1px solid var(--color-border)`) op cards
- Hover states met zachte glow (`box-shadow: 0 0 20px var(--color-accent-glow)`)
- Animaties zijn subtiel: fade-in on scroll, hover transforms max `translateY(-4px)`
- Geen overdreven gradients — rustig en professioneel
- Ruime witruimte, geen drukke layouts

---

## 4. Pagina Structuur

### Navigatie (gedeeld op alle pagina's)
- Logo links: "Loopless" in wit, bold
- Links rechts: Home · Diensten · Cases · Over · Contact
- CTA knop: "Plan een gesprek" (accent blauw, outline stijl)
- Sticky nav met lichte blur backdrop op scroll
- Mobiel: hamburger menu

### Pagina's
1. `index.html` — Home
2. `diensten.html` — Diensten
3. `cases.html` — Cases & resultaten
4. `over.html` — Over Wessel
5. `contact.html` — Contact

---

## 5. Pagina Inhoud

### index.html — Home

**Hero sectie**
- Grote heading (text-6xl): "Minder handen. Betere resultaten."
- Subheading (text-xl, muted): "Loopless automatiseert de repetitieve processen die jouw team vertragen — zodat jullie kunnen focussen op wat er écht toe doet."
- Twee knoppen: "Bekijk onze diensten" (primary) + "Plan een gesprek" (ghost)
- Achtergrond: subtiele radial gradient glow in accent blauw achter de tekst
- Subtle animatie: tekst fade-in van onder bij load

**Social proof balk**
- Dunne balk onder hero: "Vertrouwd door:" + logo/naam vuljevacature.nl
- Simpel, geen overdreven styling

**Probleem sectie**
- Heading: "Herken je dit?"
- Drie kaarten met icoon + tekst:
  - "Uren per week kwijt aan handmatig werk"
  - "Medewerkers die vastlopen in admin"
  - "Processen waar fouten insluipen"
- Cards met border, subtle hover glow

**Oplossing sectie**
- Heading: "Wat Loopless doet"
- Korte introductie tekst
- Drie stappen met nummer + tekst:
  1. "We analyseren waar jouw team vastloopt"
  2. "We bouwen een oplossing op maat"
  3. "Jouw processen draaien 24/7 zonder fouten"

**Diensten preview**
- Heading: "Onze diensten"
- Vier dienst-cards (link naar diensten.html):
  - Lead Qualification Automatisering
  - Offerte- en RFP-automatisering
  - AI Marketing Rapportage
  - Procesautomatisering op maat
- Elke card: icoon + naam + één zin beschrijving + "Meer info →"

**Resultaat sectie**
- Heading: "Bewezen resultaat"
- Case preview card: vuljevacature.nl
- Korte quote of highlight: "Van uren handmatig zoekwerk naar een lijst met gekwalificeerde leads elke ochtend."
- Link: "Bekijk de case →"

**CTA sectie**
- Heading: "Klaar om tijd terug te winnen?"
- Subtext + knop "Plan een gratis gesprek"
- Achtergrond iets lichter of met gradient border

---

### diensten.html — Diensten

**Hero**
- Heading: "Wat we automatiseren"
- Korte intro

**Vier dienst-blokken** (uitgebreid, niet alleen cards):
Elk blok bevat:
- Naam + icoon
- Omschrijving (2-3 zinnen)
- Voor wie het is
- Wat het oplevert (bullet list)

**Diensten:**

1. **Lead Qualification Automatisering**
   - Omschrijving: Systemen die automatisch leads zoeken, screenen en klaarzetten voor je team. Je team logt 's ochtends in en heeft direct een lijst klaarstaan.
   - Voor wie: Recruiters, salesteams, B2B bedrijven
   - Oplevert: Uren bespaard op handmatig zoekwerk, meer gekwalificeerde leads, 24/7 actief

2. **Offerte- en RFP-automatisering**
   - Omschrijving: Automatisch concept-voorstellen genereren op basis van eerdere offertes en productinformatie. Van dagen werk naar uren.
   - Voor wie: Bedrijven met veel offertewerk
   - Oplevert: Sneller reageren op aanvragen, consistentere voorstellen, meer tijd voor strategie

3. **AI Marketing Rapportage**
   - Omschrijving: Geautomatiseerde maandelijkse marketingrapporten. Data ophalen uit GA4, Meta Ads en Google Ads, analyseren via AI, branded PDF genereren.
   - Voor wie: Marketingbureaus, marketing managers
   - Oplevert: Van 40 uur naar 2 uur per maand, altijd consistente rapporten, goedkeurstap behouden

4. **Procesautomatisering op maat**
   - Omschrijving: Voor elk repetitief, handmatig proces. We beginnen bij het probleem, niet bij de technologie.
   - Voor wie: Elk MKB-bedrijf met handmatige bottlenecks
   - Oplevert: Maatwerk oplossing, schaalbaar, minder fouten

**Bottom CTA:** "Weet je niet welke dienst past? Plan een gratis gesprek."

---

### cases.html — Cases & Resultaten

**Hero**
- Heading: "Resultaten die spreken"

**Case kaart: vuljevacature.nl**
- Bedrijfsnaam + sector (recruitment)
- Probleem: "Uren per week kwijt aan handmatig leads zoeken en screenen"
- Oplossing: Lead qualification systeem
- Resultaat (highlight stats):
  - ✓ Uren per week bespaard
  - ✓ 24/7 automatisch actief
  - ✓ Team focust op klantcontact
- Quote (optioneel placeholder)

**Placeholder sectie voor toekomstige cases:**
- "Meer cases komen binnenkort" — subtiel, niet storend

---

### over.html — Over Wessel

**Hero**
- Heading: "Wie zit er achter Loopless?"
- Foto placeholder (cirkel, 200x200)

**Tekst blok**
- Naam: Wessel Broeders
- "Laatste jaar Bedrijfskunde student aan Avans Breda. Naast mijn studie help ik bedrijven om hun processen te automatiseren."
- Aanpak sectie: "Ik combineer een bedrijfskundige blik met praktische AI-implementatie. Ik begin altijd bij het probleem, nooit bij de technologie."

**Waarom Loopless**
- Korte paragraaf over het patroon dat Wessel zag: teams die vastlopen in handmatig werk

**Skills/tools (subtiel)**
- Kleine badge-stijl labels: n8n · AI · Automatisering · Procesoptimalisatie · Bedrijfskunde

---

### contact.html — Contact

**Hero**
- Heading: "Laten we kennismaken"
- Subtext: "Plan een gratis gesprek van 30 minuten. Ik kijk graag mee naar waar jouw team vastloopt."

**Contactformulier**
- Naam (verplicht)
- Bedrijfsnaam
- E-mailadres (verplicht)
- Wat is het grootste knelpunt in jouw proces? (textarea)
- Verstuur knop

**Directe contactinfo**
- wessel@loopless.nl
- LinkedIn link (placeholder)

---

## 6. Footer (gedeeld)

- Logo + tagline links
- Links: Home · Diensten · Cases · Over · Contact
- Rechts: wessel@loopless.nl · loopless.nl
- Onderste balk: "© 2025 Loopless — Broeders Digital | KVK: [nummer]"
- Zeer subtiel, geen overdreven footer

---

## 7. Animaties & Interactiviteit

```javascript
// Scroll animaties
// Elementen fade-in van onder bij eerste keer in viewport
// IntersectionObserver gebruiken, geen zware libraries

// Hover effecten
// Cards: translateY(-4px) + box-shadow glow
// Knoppen: brightness + subtle scale

// Nav
// Sticky met backdrop-filter: blur(12px) op scroll
// Hamburger menu op mobiel met smooth open/close
```

---

## 8. Bestandsstructuur

```
loopless/
├── index.html
├── diensten.html
├── cases.html
├── over.html
├── contact.html
├── css/
│   ├── style.css        (globale stijlen, design system)
│   ├── nav.css          (navigatie)
│   └── components.css   (cards, buttons, badges)
├── js/
│   ├── main.js          (scroll animaties, nav gedrag)
│   └── contact.js       (formulier validatie)
└── assets/
    └── (logo, afbeeldingen)
```

---

## 9. Technische Vereisten

- Vanilla HTML5 / CSS3 / JavaScript (ES6+) — geen frameworks
- Google Fonts: Inter (weights: 400, 500, 600, 700)
- Fully responsive (mobile-first)
- Geen externe CSS libraries (geen Bootstrap, Tailwind)
- Formulier: client-side validatie, action kan placeholder zijn
- Semantische HTML (nav, main, section, article, footer)
- Meta tags voor SEO op elke pagina

---

## 10. GSD Instructie voor Claude Code

**Bouw in deze volgorde:**

1. **Design system** — `css/style.css` met alle CSS variabelen, reset, typografie en basis utility classes
2. **Components** — `css/components.css` met buttons, cards, badges, formulier stijlen
3. **Nav + Footer** — HTML partials als losse blokken om te kopiëren, inclusief `nav.css` en hamburger JS
4. **index.html** — Volledige homepage met alle secties
5. **diensten.html** — Diensten pagina
6. **cases.html** — Cases pagina
7. **over.html** — Over pagina
8. **contact.html** — Contact pagina met formulier validatie
9. **main.js** — Scroll animaties en nav gedrag
10. **Review** — Check alle pagina's op consistentie, responsiveness en stijl

**Bij elke stap:** bouw het volledig af voordat je verder gaat. Controleer of het design consistent is met het opgegeven design system.
