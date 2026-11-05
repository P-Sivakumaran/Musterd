# European design directions for Musterd

Research brief for evaluating and directing a desktop multi-bot operator UI: local harness, sidebar + chat desk, token skins (Midnight / Daylight with mustard accent). Claims cite high-trust primary sources (museum / foundation archives, school histories, first-party design organisations, original essays) where possible. Secondary blogs are avoided.

**Product context (not a source claim):** Musterd is a lean local multi-bot harness — chat, rooms, approvals, skins — designed as one desk (sidebar + chat), not SaaS marketing chrome. The current P0 handoff proposes mustard accent skins, unboxed bot turns, a mono step ledger, 16px composer radius, and an empty-state brand hero. This document asks which European lineages that proposal already serves, and which named directions to choose among next.

---

## 1. Traditions → UI-actionable implications

### 1.1 Bauhaus / New Typography (Germany)

**Principles (primary).** Bauhaus-Archiv Berlin characterises Bauhaus typography as moving from Itten’s early expressive lettering toward New Typography via Moholy-Nagy, Bayer, and Schmidt: clear text blocks, concise characters, standardised formats, mingling of image and type, and strong contrasts of colour, size, and position ([Bauhaus-Archiv, *Bauhaus.Typography*](https://www.bauhaus.de/en/research/publications/bauhaus-typography/)). MoMA’s New Typography installation summarises the 1920s–30s Central European movement: reject symmetrical column tradition; treat the page as an open field; arrange type and illustration (often photomontage) in harmonious asymmetrical compositions; Tschichold’s *Die neue Typographie* (1928) codified accessible guidelines ([MoMA, *The New Typography*](https://www.moma.org/calendar/exhibitions/1013)).

**Implies for a chat / sidebar desk**

| Principle | UI action |
| --- | --- |
| Page as open field + asymmetry | Chat column as a typed field, not a stack of identical cards; sidebar as a strong vertical counter-mass |
| Clear blocks + size contrast | Hierarchy by type scale (bot name / body / mono ledger), not by chrome boxes |
| Image + type mingled | Avatars and status as typographic companions, not floating badges |
| Standardised formats | Tokenised skins and shared control primitives over one-off widgets |
| Strong contrast | Mustard accent as *positional* emphasis (caret, approval border, focus), not decoration everywhere |

### 1.2 Swiss International Typographic Style / Weingart critique

**Principles (primary).** The Swiss National Library defines the postwar International Typographic Style (Swiss Style) as emphasising typographic elements, mathematical order, a typographic grid, sans-serif type, simple typography, high visual impact, zero ornament, and (mostly) black-and-white photography in place of illustration — “highly structured, harmonious and easily readable” with restrained colour ([Swiss National Library, *The International style 1950–1970*](https://www.nb.admin.ch/en/the-international-style-1950-1970)). Museum für Gestaltung Zürich frames Josef Müller-Brockmann as an advocate of constructive graphic art whose teaching principles guided Zurich training ([Museum für Gestaltung Zürich](https://museum-gestaltung.ch/en/article/teaching-activities-josef-muller-brockmann)).

**Weingart critique (primary).** Teaching at Basel from 1968, Wolfgang Weingart argued Swiss Typography had become “almost repetitious,” needing a new impact while remaining parallel to Ruder’s values — more complex and open ([Emigre interview with Weingart, 1989/1994](https://www.emigre.com/Essays/Magazine/AnInterviewwithWolfgangWeingart)). In *My Way to Typography* he describes Basel typography as approaching stagnation — “sterile and anonymous” — and sets out to reexamine assumed principles: know the rules in order to break them; experiment with letterspacing and limits of readability while retaining hidden structure ([excerpts via neugraphic Weingart archive](https://www.neugraphic.com/weingart/weingart-text3.html)). Cooper Hewitt / MoMA hold his *Typographic Process* poster series documenting Basel class results moving “from simple to complex text structures” ([Cooper Hewitt object](https://collection.cooperhewitt.org/objects/18673527/); [MoMA collection](https://www.moma.org/collection/works/86504)).

**Implies for a chat / sidebar desk**

| Principle | UI action |
| --- | --- |
| Grid + sans clarity | Align sidebar rows, header, composer, and transcript to one column grid; Geist Sans / Mono already fit |
| Zero ornament | Prefer hairlines and type weight over glass, pills, and decorative shadows |
| Restrained colour | One accent family (mustard) on near-neutral surfaces |
| Weingart: complex *from* basics | Mono ledger may densify (letterspace, weight shifts, collapsed “Ran N steps”) without abandoning order |
| Avoid sterile uniformity | Skins differentiate atmosphere; structure stays consistent |

### 1.3 Ulm HfG / Braun–Dieter Rams (10 principles; Tokyo Manifesto)

**Ulm (primary).** HfG Ulm (1953–1968), founded by Inge Scholl, Otl Aicher, and Max Bill, aimed to combine scientific-technical and artistic skills with socio-political responsibility; after Bill’s departure the “ulm model” cast the designer as equal partner in industrial production, not autonomous artist; teaching favoured *systems* (e.g. transport from railcar to ticket machine) over isolated objects, and “frees objects from the ballast of all ‘superfluous’ things” ([HfG Ulm history](https://www.hfg-ulm.de/en/hfg-ulm/history/); founding intent [HfG Ulm overview](https://www.hfg-ulm.de/en/hfg-ulm/)). Braun’s early phono devices designed under Hans Gugelot at Ulm are cited among the school’s first product successes ([same history](https://www.hfg-ulm.de/en/hfg-ulm/history/)).

**Rams 10 principles (primary, Vitsœ).** Rams’s answer to “is my design good design?” — innovative; useful; aesthetic; understandable; unobtrusive; honest; long-lasting; thorough to the last detail; environmentally friendly; as little design as possible (“Less, but better”) ([Vitsœ, *Good design*](https://www.vitsoe.com/us/about/good-design); overview [rams foundation](https://rams-foundation.org/foundation/design-comprehension/)).

**Tokyo Manifesto (primary, 2009).** Rams urges young designers toward truly better proposals, not fashion; restates the ten principles; warns that branding hype distracts from product quality; expands concern from product to surrounding infrastructure; “Less is only more if it is also better” ([rams foundation, *Tokyo Manifesto*](https://rams-foundation.org/foundation/design-comprehension/tokyo-manifesto/)).

**Implies for a chat / sidebar desk**

| Principle | UI action |
| --- | --- |
| Systems, not isolated widgets | One desk system: sidebar status + header status; kill duplicate composer strips |
| Unobtrusive / as little design | Unboxed bot turns; chrome yields to content |
| Understandable / honest | Local edition honesty (no cloud upsell); tool steps as readable ledger |
| Thorough detail | Token contrast, focus rings, collapse rules for steps |
| Long-lasting / anti-fashion | Avoid purple-AI and Memphis-like fashion skins as *default* |
| Infrastructure (Tokyo) | Design the harness around `~/.musterd`, approvals, MCP — not brand theatre |

### 1.4 Dutch De Stijl / functional modernism

**Principles (primary).** Kunstmuseum Den Haag situates *De Stijl* (journal from 1917, Theo van Doesburg) as aspiring to a new awareness of beauty and abolishing hierarchy between artistic disciplines so the lived environment could be redesigned via an abstract, geometric, asymmetrical idiom ([Kunstmuseum Den Haag, *De Stijl*](https://www.kunstmuseum.nl/en/collections/de-stijl)). Mondriaanhuis summarises the shared rule set: primary colours plus black / grey / white; straight lines and right angles; art meant to modernise society ([Mondriaanhuis](https://www.mondriaanhuis.nl/en/about/mondrian-and-the-style/)). Stedelijk notes the journal’s hope to unify art and life through pure abstraction expressing harmony ([Stedelijk, *De Stijl at the Stedelijk*](https://www.stedelijk.nl/en/exhibitions/de-stijl-at-the-stedelijk)).

**Implies for a chat / sidebar desk**

| Principle | UI action |
| --- | --- |
| Orthogonal modular planes | Sidebar / chat / composer as clear rectangular modules with hairline joins — not rounded “product cards” |
| Limited palette | Neutrals + one strong accent (mustard as “primary” substitute); resist rainbow identity chrome |
| Asymmetry with balance | Wider chat field vs narrower bot list — Mondrian-like counterweight, not mirrored panels |
| Unify disciplines | Same language for chat, approvals, skins, rooms — one style, many surfaces |
| Risk | Literal primary red/blue/yellow UI reads as theme park, not operator tool |

### 1.5 Scandinavian democratic design / Nordic restraint

**Sweden — Svensk Form (primary).** Svensk Form (formerly Svenska Slöjdföreningen, founded 1845) pushed “Artists to industry”: everyday goods should be artistically designed, practical, and easy to handle; the 1917 Liljevalchs home exhibition targeted working and lower-middle-class rooms; later work stressed consumer knowledge, comparison, and critical reflection rather than finger-wagging ([Svensk Form, *History*](https://svenskform.se/en/historia/)). The association’s own reporting still lists publications such as *Vackrare vardagsvaror* among formative initiatives ([Svensk Form verksamhetsberättelse PDF](https://svenskform.se/wp-content/uploads/Verksamhetsberattelse-2025-Foreningen-Svensk-Form-sign.pdf)).

**Denmark — Designmuseum Danmark (primary).** *Danish Modern* is framed as rebellion against Victorian clutter and “style confusion”; methodical process, craft + comfort + restraint; later Danish industrial work often “more understated and rational” than international High Tech ([Designmuseum Danmark, *Danish Modern*](https://designmuseum.dk/en/exhibition/danish-modern/)). The museum explicitly contrasts postmodern Memphis / Alchimia — revolt against functional, production-friendly style toward playful colour and storytelling — noting few Danish designers followed that path ([same](https://designmuseum.dk/en/exhibition/danish-modern/)).

**Implies for a chat / sidebar desk**

| Principle | UI action |
| --- | --- |
| Beautiful everyday tools | Desk should feel like a well-made daily instrument, not a launch event |
| Accessible to many | Clear empty states, readable density, AA contrast (already gated) |
| Anti-clutter | Farewell to pill clusters and knick-knack chrome |
| Warm restraint | Mustard as human warmth on cool Midnight / clean Daylight — Nordic, not neon |
| Democratic honesty | Local-first features as the “everyday goods”; cloud edition optional |

### 1.6 Italian postwar industrial design / Memphis as CONTRAST

**Postwar industrial culture (primary).** ADI (Associazione per il Disegno Industriale), founded Milan 1956, promotes design as culturally conscious interface between social demand and production — products, services, visual communication — and has organised the Compasso d’Oro since 1958 ([ADI Design Museum on ADI](https://www.adidesignmuseum.org/en/compasso-d-oro/adi-system/); [ADI association](https://www.adi-design.org/associazione.html)). Triennale Milano’s history of Italian design at the Triennale emphasises postwar unity of arts and industry, mass production, and exhibiting objects with drawings and mechanisms so form links to function and manufacture ([Triennale Milano](https://triennale.org/en/magazine/a-brief-history-of-italian-design-at-triennale1)).

**Memphis (primary — contrast).** Memphis Milano’s own history: founded around Sottsass in 1980–81; first show September 1981; challenged industrial-design aesthetics and functionalist dogmas; objects charged with symbolic, poetic, emotional value; laminates, kitsch/elegance mix, decoration as qualifying value; “disobedience” toward “good design” ([Memphis Milano, *History*](https://memphis.it/en/history/)). Triennale summarises the collective as blending daring colour, plastic laminates, and postmodern forms into playful, symbolic objects against standardised furniture ([Triennale Milano on Memphis](https://triennale.org/en/magazine/a-graphic-story-about-the-italian-design-collective)).

**What to avoid / borrow carefully for Musterd**

| Avoid as default desk | Borrow carefully (skins / moments only) |
| --- | --- |
| Laminate chaos, pattern overload, totemic chrome | One seasonal skin with controlled pattern (not Midnight/Daylight) |
| Emotional spectacle over operator clarity | Approval “needs you” may use stronger accent — still readable |
| Fashion obsolescence | Token skins already allow character; keep system skins durable |
| Fragmenting the desk into competing objects | Rooms / bots stay one composition |

Italian *industrial* seriousness (Compasso lineage: clarity of mechanism, cultural quality of tools) can inform honesty of local harness chrome; Memphis belongs in the “anti-goal” column for the default desk — Designmuseum Danmark already positions it as the break with functional modernism ([Danish Modern](https://designmuseum.dk/en/exhibition/danish-modern/)).

### 1.7 Optional: British Utility / GOV.UK civic UX

**Utility furniture (primary).** V&A collection notes: Board of Trade Utility Furniture Scheme (from ~1941–42) rationed production; straight-edged, plain, unembellished; form followed function and construction; solid, durable, distinctly modern, appropriate to wartime scarcity ([V&A, Utility sideboard](https://collections.vam.ac.uk/item/O123774/sideboard-heal--son/); [V&A, General Specification catalogue](https://collections.vam.ac.uk/item/O20144/general-specification-for-utility-furniture-catalogue-board-of-trade/)).

**GOV.UK Design Principles (primary).** UK Government Digital Service principles include: start with user needs; do less; design with data; do the hard work to make it simple; iterate; this is for everyone; understand context; build services not websites; be consistent not uniform; make things open; minimise environmental impact ([GOV.UK, *Government Design Principles*](https://www.gov.uk/guidance/government-design-principles)).

**Implies for a chat / sidebar desk**

| Principle | UI action |
| --- | --- |
| Scarcity / Utility | Ship irreducible core for local edition; no decorative material waste in UI |
| Do less / hard work to make simple | Collapse tool steps; remove duplicate status; simple composer |
| For everyone / accessibility | Contrast gates, reduced motion, readable type over elegance theatre |
| Consistent not uniform | Shared `.ui-*` primitives; skins vary colour, not interaction grammar |
| Services not websites | Desk = run bots / approve / inspect ledger — not a brochure |

---

## 2. How the current mustard Midnight/Daylight desk aligns

Evaluated features: mustard accent; unboxed bot turns; mono step ledger; 16px composer radius; empty-state brand hero (mark + wordmark at hero scale).

| Tradition | Aligns | Clashes |
| --- | --- | --- |
| **Bauhaus / New Typography** | Unboxed turns = field composition; mono ledger = typographic block; mustard as strong positional contrast; hero as type+image field | 16px radius softens hard Bauhaus geometry; hero risk of poster theatre if oversized vs desk use |
| **Swiss Style** | Mono ledger, hairline discipline, restrained accent, sans clarity | Brand hero at 56–96px is more expressive than classic Swiss restraint; Weingart would allow denser ledger play — current collapse-to-pill is already a controlled complexity |
| **Ulm / Rams** | Unboxed turns, removed duplicate chrome, honest local empty state, thorough tokens, “tool not artwork” | Empty-state brand hero at hero scale tensions *unobtrusive* / “as little design as possible” — acceptable if it appears once then recedes; mustard accent must stay sparse (Vitsœ: unobtrusive tools) |
| **De Stijl** | Orthogonal sidebar/chat; limited accent-on-neutral | Soft 16px radius and organic avatar circles dilute right-angle dogma; mustard ≠ primary triad |
| **Nordic democratic** | Everyday desk, anti-clutter, warm mustard, accessible contrast, beautiful useful tool | Hero branding is stronger than quiet Danish industrial understatement — still fits “beautiful everyday” if copy stays humble |
| **Italian industrial (Compasso)** | Mechanism-visible ledger; quality of construction in tokens | — |
| **Memphis (contrast)** | Almost none as *default* | Mustard-only accent is fine; pattern laminates, multi-accent chaos, and card totems would clash hard with unboxed turns |
| **Utility / GOV.UK** | Do less, simple composer, consistent patterns, accessibility | Brand hero is more product-identity than civic anonymity; OK if content hierarchy still starts with user need (“start a team”) |

**Net reading:** The handoff is already closest to **Swiss typographic discipline + Rams/Ulm tool ethics + Nordic everyday warmth**, with a Bauhaus-like open transcript field. The main philosophical tension is the **empty-state brand hero** vs Rams unobtrusiveness — resolve by treating it as a single onboarding composition, not persistent chrome.

---

## 3. Named directions (choose among — not mashups)

Each direction is a distinct choice. Do not blend signatures; skins can later explore the non-chosen lineages.

### Direction A — *Ulm Operator Desk*

- **Lineage:** HfG Ulm systems model + Rams / Braun / Vitsœ ethics ([HfG history](https://www.hfg-ulm.de/en/hfg-ulm/history/); [Vitsœ good design](https://www.vitsoe.com/us/about/good-design); [Tokyo Manifesto](https://rams-foundation.org/foundation/design-comprehension/tokyo-manifesto/)).
- **Visual signature:** Neutral surfaces; one restrained accent; sans + mono; low radius (8–16px); density with air; motion only for state change (message in, caret, one empty-state rise). Minimal ornament; structure self-explanatory.
- **Fit to local operator desk:** Excellent — harness as background tool; bots and work stay foreground; systems thinking maps to sidebar ↔ transcript ↔ approvals.
- **Risks:** Feels “Apple-generic” if accent and type lack character; over-minimising can hide bot identity; brand hero must be temporary or it violates unobtrusiveness.
- **Inspiration references:**
  1. Vitsœ / Rams ten principles pages — [vitsoe.com/us/about/good-design](https://www.vitsoe.com/us/about/good-design)
  2. Braun SK 4 / Rams product photography via rams foundation — [rams-foundation.org/foundation/design-comprehension/](https://rams-foundation.org/foundation/design-comprehension/)
  3. HfG Ulm campus as architectural manifesto of utility — [hfg-ulm.de/en/hfg-ulm/architecture/](https://www.hfg-ulm.de/en/hfg-ulm/architecture/)

### Direction B — *Basel Ledger Desk*

- **Lineage:** Swiss International Typographic Style, with optional Weingart-level *controlled* complexity on the step ledger only ([Swiss National Library](https://www.nb.admin.ch/en/the-international-style-1950-1970); [Weingart Emigre interview](https://www.emigre.com/Essays/Magazine/AnInterviewwithWolfgangWeingart); [Museum für Gestaltung on Müller-Brockmann](https://museum-gestaltung.ch/en/article/teaching-activities-josef-muller-brockmann)).
- **Visual signature:** Explicit modular grid; hairline rules; typographic hierarchy as the UI; near-mono colour with one accent; photographer’s black/white attitude toward imagery (avatars desaturated or small); ledger may use weight/spacing variation when expanded.
- **Fit:** Excellent for tool-step inspection, streaming, and multi-bot scanning; sidebar becomes a typographic index.
- **Risks:** Sterility / anonymity (Weingart’s charge against late Swiss); empty-state hero fights grid quietness unless treated as a poster block *on* the grid; coldness vs mustard warmth if colour is too suppressed.
- **Inspiration references:**
  1. Swiss National Library International Style chapter — [nb.admin.ch/en/the-international-style-1950-1970](https://www.nb.admin.ch/en/the-international-style-1950-1970)
  2. Müller-Brockmann estate / Museum für Gestaltung editions — [museum-gestaltung.ch](https://museum-gestaltung.ch/en/article/teaching-activities-josef-muller-brockmann)
  3. Weingart *Typographic Process* posters (Basel class documentation) — [cooperhewitt.org/objects/18673527](https://collection.cooperhewitt.org/objects/18673527/)

### Direction C — *Nordic Everyday Desk*

- **Lineage:** Svensk Form democratic everyday goods + Designmuseum Danmark Danish Modern restraint ([Svensk Form history](https://svenskform.se/en/historia/); [Designmuseum Danmark Danish Modern](https://designmuseum.dk/en/exhibition/danish-modern/)).
- **Visual signature:** Soft-neutral Daylight / deep calm Midnight; mustard as warm craft accent; slightly more tactile radius (16–20px); generous empty-state air; comfortable density for all-day sitting; human-scaled type; almost no glass spectacle.
- **Fit:** Strong for “desk you live at”; brand name as welcoming everyday mark; local-first honesty.
- **Risks:** Slips into cream/terracotta brochure cliché if warmth is overplayed (explicit anti-goal in Musterd brief); may under-signal “operator / harness” seriousness vs Kepler peer.
- **Inspiration references:**
  1. Svensk Form organisational history — [svenskform.se/en/historia](https://svenskform.se/en/historia/)
  2. Designmuseum Danmark *Danish Modern* — [designmuseum.dk/en/exhibition/danish-modern](https://designmuseum.dk/en/exhibition/danish-modern/)
  3. Bang & Olufsen understated industrial lineage as cited in Danish Modern High Tech section — via [Designmuseum Danmark](https://designmuseum.dk/en/exhibition/danish-modern/)

### Direction D — *Elemental Field Desk* (Bauhaus / New Typography)

- **Lineage:** Bauhaus-Archiv typographic characterisation + MoMA New Typography / Tschichold field ([Bauhaus-Archiv](https://www.bauhaus.de/en/research/publications/bauhaus-typography/); [MoMA](https://www.moma.org/calendar/exhibitions/1013)).
- **Visual signature:** Asymmetric masses; strong scale jumps (hero wordmark vs dense mono); accent blocks; harder corners; poster logic on empty state; transcript as photomontage-like mix of avatar, type, and ledger rules.
- **Fit:** Strong brand differentiation and empty-state drama; good for “Musterd” as typographic product.
- **Risks:** Poster energy fights all-day calm; asymmetry can look unfinished if grid discipline slips; easy to confuse with trendy “editorial AI” layouts.
- **Inspiration references:**
  1. Bauhaus-Archiv typography collection framing — [bauhaus.de/.../bauhaus-typography](https://www.bauhaus.de/en/research/publications/bauhaus-typography/)
  2. MoMA *The New Typography* — [moma.org/calendar/exhibitions/1013](https://www.moma.org/calendar/exhibitions/1013)
  3. Herbert Bayer / Bauhaus print workshop lineage as discussed in Bauhaus-Archiv materials — same Bauhaus.de publication page

### Direction E — *Civic Utility Desk*

- **Lineage:** British Utility plain construction + GOV.UK service principles ([V&A Utility](https://collections.vam.ac.uk/item/O123774/sideboard-heal--son/); [GOV.UK Design Principles](https://www.gov.uk/guidance/government-design-principles)).
- **Visual signature:** Plain edges; highly consistent components; maximal clarity copy; accent only for state (error / needs you); brand quiet; density without fashion; “do less” IA.
- **Fit:** Excellent for local harness honesty, approvals, and accessibility; weak for distinctive brand romance.
- **Risks:** Looks governmental / generic admin; mustard hero branding conflicts with civic anonymity; may undersell product identity vs OpenMausBot forks.
- **Inspiration references:**
  1. GOV.UK Government Design Principles — [gov.uk/guidance/government-design-principles](https://www.gov.uk/guidance/government-design-principles)
  2. V&A Utility furniture scheme objects — [collections.vam.ac.uk/item/O123774](https://collections.vam.ac.uk/item/O123774/sideboard-heal--son/)
  3. V&A Utility specification catalogue — [collections.vam.ac.uk/item/O20144](https://collections.vam.ac.uk/item/O20144/general-specification-for-utility-furniture-catalogue-board-of-trade/)

**Explicit non-direction:** *Memphis Skin Party* — valid as a single optional skin exploring decoration and emotional codes ([memphis.it/en/history](https://memphis.it/en/history/)), never as the system Midnight/Daylight default.

---

## 4. Recommended shortlist (2)

### 1) *Ulm Operator Desk* (Direction A)

Best match for Musterd’s stated job: a local multi-bot harness used all day, peer to Kepler, anti-SaaS-neon. Rams’s unobtrusive / honest / thorough / “as little design as possible” principles ([Vitsœ](https://www.vitsoe.com/us/about/good-design)) and Ulm’s systems focus ([HfG](https://www.hfg-ulm.de/en/hfg-ulm/history/)) already describe unboxed turns, dual status loci, mono ledger, and token skins. Mustard stays a functional signal (focus, caret, approval), not lifestyle décor. Tokyo Manifesto’s warning against brand hype over product quality ([rams foundation](https://rams-foundation.org/foundation/design-comprehension/tokyo-manifesto/)) supports local-edition honesty.

### 2) *Basel Ledger Desk* (Direction B)

Best match for the *information* shape of the product: streaming turns, tool steps, multi-bot index, approvals in-flow. Swiss Style’s grid, sans clarity, and restrained colour ([Swiss National Library](https://www.nb.admin.ch/en/the-international-style-1950-1970)) lock the desk into scannable typography; Weingart licenses denser ledger expression without abandoning structure ([Emigre / Weingart](https://www.emigre.com/Essays/Magazine/AnInterviewwithWolfgangWeingart)). Choose this if differentiation should come from typographic precision rather than product-tool minimalism alone.

**Why not the others as primary:** *Nordic Everyday* is a close third (and a good emotional temperature for mustard) but risks soft-lifestyle drift. *Elemental Field* over-weights empty-state poster energy. *Civic Utility* under-weights brand and operator craft. Keep Memphis out of the default path.

**Practical decision rule:** If the next design pass must pick one north star — prefer **A** for overall chrome ethics, **B** for transcript/ledger craft. The current handoff already sits between them; committing to one will prevent accidental mashup.

---

## 5. Source index (high-trust)

| Topic | Source | URL |
| --- | --- | --- |
| Bauhaus typography | Bauhaus-Archiv / Museum für Gestaltung | https://www.bauhaus.de/en/research/publications/bauhaus-typography/ |
| New Typography | MoMA | https://www.moma.org/calendar/exhibitions/1013 |
| Swiss Style | Swiss National Library | https://www.nb.admin.ch/en/the-international-style-1950-1970 |
| Müller-Brockmann teaching | Museum für Gestaltung Zürich | https://museum-gestaltung.ch/en/article/teaching-activities-josef-muller-brockmann |
| Weingart critique | Emigre interview | https://www.emigre.com/Essays/Magazine/AnInterviewwithWolfgangWeingart |
| Weingart process posters | Cooper Hewitt / MoMA | https://collection.cooperhewitt.org/objects/18673527/ · https://www.moma.org/collection/works/86504 |
| HfG Ulm | HfG Ulm official history | https://www.hfg-ulm.de/en/hfg-ulm/history/ |
| Rams 10 principles | Vitsœ | https://www.vitsoe.com/us/about/good-design |
| Tokyo Manifesto | rams foundation | https://rams-foundation.org/foundation/design-comprehension/tokyo-manifesto/ |
| De Stijl | Kunstmuseum Den Haag · Mondriaanhuis · Stedelijk | https://www.kunstmuseum.nl/en/collections/de-stijl · https://www.mondriaanhuis.nl/en/about/mondrian-and-the-style/ · https://www.stedelijk.nl/en/exhibitions/de-stijl-at-the-stedelijk |
| Swedish democratic design | Svensk Form | https://svenskform.se/en/historia/ |
| Danish Modern | Designmuseum Danmark | https://designmuseum.dk/en/exhibition/danish-modern/ |
| Italian industrial / ADI | ADI Design Museum | https://www.adidesignmuseum.org/en/compasso-d-oro/adi-system/ |
| Triennale Italian design | Triennale Milano | https://triennale.org/en/magazine/a-brief-history-of-italian-design-at-triennale1 |
| Memphis | Memphis Milano · Triennale | https://memphis.it/en/history/ · https://triennale.org/en/magazine/a-graphic-story-about-the-italian-design-collective |
| Utility furniture | V&A | https://collections.vam.ac.uk/item/O123774/sideboard-heal--son/ |
| Civic UX principles | GOV.UK | https://www.gov.uk/guidance/government-design-principles |

---

*Research only — no app source changes. Written for Musterd design direction selection.*
