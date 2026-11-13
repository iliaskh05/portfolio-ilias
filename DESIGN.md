# Design system — référence moncy.dev → portfolio Ilias Kharbouch

Analyse basée sur les captures fournies (Hero, Experience, What I Do, About, Work, Tech Stack, Contact).

---

## 1. Palette

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#000000` | Fond page, plein écran, sans texture dominante |
| `--ink` | `#FFFFFF` | Titres principaux, logo, nav active, chiffres projets |
| `--ink-soft` | `#E0E0E0` | Titres secondaires (jobs, sous-titres) |
| `--muted` | `#8A8A8A` | Body, labels, catégories, outils |
| `--muted-2` | `#B0B0B0` | Labels intermédiaires / descriptions cards |
| `--line` | `rgba(255,255,255,0.12)` | Séparateurs verticaux Work, traits timeline faibles |
| `--accent` | `#C084FC` | Lilas primaire (glow, liens company, gradients) |
| `--accent-soft` | `#D8B4FE` | Eyebrows hero (“Hello! I'm”, “A Creative”), “I DO” |
| `--accent-deep` | `#6B21A8` / `#4B2A63` | Titres discrets type “ABOUT ME” (basse luminosité) |
| `--accent-glow` | `rgba(192,132,252,0.35–0.55)` | Orbes / rim light / points timeline |
| `--danger-soft` | n/a | Pas d’erreur UI visible sur la ref |

**Règle couleur :** pas de glassmorphism, pas d’indigo/cyan maritime, pas de carte “blur”. Le violet n’apparaît qu’en accent typographique, glow et timeline — jamais en fond de section plein.

---

## 2. Typographie

| Rôle | Famille | Poids | Casse | Tracking | Tailles repères (desktop) |
|---|---|---|---|---|---|
| Logo | Sans géométrique (Inter / Satoshi-like) | 700 | lowercase brand | 0 | ~18–20px |
| Nav / email header | Même famille | 500–600 | UPPERCASE nav | `0.08–0.14em` | 12–13px |
| Eyebrow hero | Même | 500 | Sentence | normal | 14–16px, couleur `--accent-soft` |
| Nom hero | Même | 700–800 | UPPERCASE | `-0.02em` | clamp 48–88px, 2 lignes |
| Role hero (DESIGNER / DEVELOPER) | Même | 800 | UPPERCASE | `-0.03em` | clamp 40–72px ; 1er mot opacity ~0.35 + glow violet |
| Titre section | Même | 600–700 | Title case ou UPPER | serré | 40–64px ; mot clé en gradient blanc → lilas |
| Body | Même | 400 | Sentence | normal | 14–16px, line-height 1.6–1.75, `--muted` |
| Labels (Email, Social…) | Même | 400 | Sentence | normal | 12–13px, gris |
| Chiffres projets | Même | 700 | — | serré | 48–72px blanc |
| Mono / tags | Non utilisé en UI principale | — | — | — | (JetBrains Mono hors ref → retiré) |

**Police projet :** `Inter` (Google Fonts) pour logo, nav, titres et body — une seule famille, comme la ref.

---

## 3. Grille & chrome global

```
┌──────────────────────────────────────────────────────────┐
│  logo          email (center)           ABOUT WORK CONTACT│  ← header fixed, h ~64–72px, padding x ~32–48px
├──┬───────────────────────────────────────────────────────┤
│S │                                                       │
│o │              CONTENT (max ~1200–1280px centered)       │
│c │                                                       │
│i │                                                       │
│a │                                                       │
│l │                                                       │
├──┴───────────────────────────────────────────────────────┤
```

- **Header** : 3 zones (logo | email | nav). Fond transparent / noir, pas de pill glass.
- **Social rail** : colonne fixe à gauche (~48–56px), icônes outline blanches ~18px, gap ~20–24px, centrée verticalement. Ligne verticale grise fine possible (Work).
- **Marges** : content inset ~80–120px left (pour laisser place au rail), ~48–80px right.
- **Espacement sections** : padding vertical très généreux ~120–160px.
- **Pas de** barre de progression boussole, preloader cinéma, grain animé lourd, aurora multi-couleur indigo/cyan.

---

## 4. Sections (structure fidèle)

### 4.1 Hero
- Avatar / sujet **centré** (3D sur moncy → **portrait Ilias** traité avec rim purple + glow).
- Texte **gauche** : eyebrow accent + nom 2 lignes blanc.
- Texte **droite** : eyebrow accent + 2 lignes rôle (1re ligne fade+glow, 2e solide).
- Glow violet doux derrière le sujet ; orbe lilas près du visage.
- Interactions : léger parallax curseur sur le sujet ; fade-in stagger des textes.

### 4.2 Experience / Caps (timeline)
- Titre centré : “My career & experience” (mot “experience” en gradient blanc→lilas).
- Grille 3 colonnes : rôle+company (company en `--accent`) | année | description.
- Ligne verticale violette fine + point lumineux en bas (scrub scroll).
- Reveal : opacity gris → plus clair au viewport.

### 4.3 What I Do
- Titre monumental gauche “WHAT / I DO” (I DO en lilas), chevauche le visuel.
- Visuel personnage / setup au centre-gauche.
- Droite : cadre **traits pointillés + coins L** (viewfinder) avec 2 blocs DEVELOP / DESIGN séparés par tirets.

### 4.4 About
- Sujet 3D/portrait gauche + laptop glow (adapté : portrait + glow).
- “ABOUT ME” en violet profond discret.
- Body gris moyen, max-width ~420px.

### 4.5 Work
- Titre “My Work” (Work en gradient).
- **Scroll horizontal** : colonnes séparées par traits verticaux.
- Par projet : grand numéro, image, titre, catégorie, “Tools and features” + liste tech.
- Orbe glow lilas au survol / près du focus.

### 4.6 Tech Stack
- Titre “MY TECH STACK” en grand derrière / sous un cluster.
- Cluster de **sphères 3D** blanches avec logos (R3F) — interaction souris (physique légère ou float).

### 4.7 Contact
- Titre “CONTACT” large.
- 3 colonnes : Email+Location | Social (liens soulignés + flèche ↗) | Crédits.
- Footer minimal, accent lilas sur le nom.

---

## 5. Boutons, liens, cartes

| Élément | Style |
|---|---|
| Nav links | Texte seul, uppercase, hover → opacity 0.6 ou underline fine |
| Email header | Texte blanc soft, hover → accent |
| Social icons | Stroke blanc, hover → accent + scale 1.08 |
| “Cards” What I Do | Pas de fill glass : cadre dashed 1px + coins L, fond transparent |
| Work items | Colonnes border-left, pas de card radius/shadow |
| Contact social | Underline full-width 1px, hover → accent |
| CTA primaire | Quasi absent sur la ref (navigation + email suffisent) |

---

## 6. Effets & animations visibles

1. **Glow ambiant** violet/magenta soft en coins (opacity basse, blur large) — pas aurora indigo/cyan.
2. **Orbe lilas** (cursor-follow léger ou highlight section).
3. **Timeline** : trait + dot qui progressent au scroll.
4. **Scroll reveal** : fade/up court (0.6–0.9s, ease out) sur titres et blocs.
5. **Work** : scroll horizontal pin ou overflow-x drag/wheel.
6. **Tech spheres** : float / réaction souris.
7. **Hover scramble** : non dominant sur moncy ; priorité opacity / accent color.
8. **Reduced motion** : désactiver parallax, physique, scrub.

---

## 7. Mapping contenu Ilias

| moncy | Ilias |
|---|---|
| moncy.dev | ilias.kh / Ilias Kharbouch |
| connect@moncy.dev | iliaskharbouch17@gmail.com |
| ABOUT / WORK / CONTACT | ABOUT / WORK / CONTACT (+ CAPS si besoin) |
| Social GH/LI/X/IG | GitHub, LinkedIn (pas X/IG si absents) |
| Avatar 3D | Portrait `ilias-portrait.jpg` + traitement glow |
| Experience jobs | `caps` / projets comme parcours |
| DEVELOP / DESIGN | Full-Stack / IA appliquée (ou Develop / Automate) |
| Work projects | `projects` (Salis, CommoHedge, VetoCRM, AutoLinkedIn, Radiology) |
| Tech spheres | TypeScript, Next, React, Node, Python, n8n, PostgreSQL… |
| Location Mumbai | Mohammedia, Maroc |

---

## 8. À supprimer du design actuel

- Aurora indigo/cyan, grain overlay animé, glassmorphism, spotlight cards
- Preloader compteur + monogramme stroke cinéma
- ProgressCompass / boussole 3D hero
- Marquee maritime, vocabulaire “cap” en UI chrome
- Space Grotesk + JetBrains Mono comme identité visuelle principale
- Curseur custom mix-blend (optionnel plus tard ; moncy = curseur système + orbe)

---

## 9. Plan d’implémentation section par section

1. **Shell + Hero** ← validation requise avant suite  
2. Experience (Caps timeline)  
3. What I Do  
4. About  
5. Work (horizontal)  
6. Tech Stack (sphères)  
7. Contact  
8. Polish bugs / perf / i18n  

Chaque étape : contenu uniquement via `content/data.ts` + `messages/*`.
