Latest direction supersedes folding prototype: folding state, controls and all 3D/height transitions removed. All benefits stay visible. Three paper tickets use subtle fibre texture, restrained edge highlights, smaller corner radii and warm existing plan colors. Independent CSS translate lifts cards 8px on hover without conflicting with Motion entrance transforms. Cards and action baselines align at desktop/tablet widths. Build and updated membership browser test passed; checked 1440/768/390/320px for overflow and desktop hover.

# Latest revision — open paper tickets and footer

All three tickets now start open and toggle independently. Removed the disclosure beneath pricing, the FAQ and closing CTA. Fold paper rotates outward from a hinge aligned to the perforation (180° to 0°), with a separate blank reverse face, subdued crease shading and no opacity fade. Paper and cover are separate surfaces so the background is exposed during folding. Footer now contains brand copy, six verified section anchors and return-to-top controls; no fabricated social or contact links. Build passed. Six browser tests passed with the updated independent/default-open behavior; footer checked at 1440, 768, 390 and 320px with no horizontal overflow. Normal-motion intermediate 3D transforms verified; final paper and footer screenshots reviewed in .taste-skill/footer.

# Three membership tickets

Ticket-unfold prototype: all tickets start collapsed. Clicking the perforation's real button unfolds its benefit paper from the top edge using perspective/rotateX, a .72s grid-height expansion and a temporary crease shade. Only one plan opens at a time, and the same button closes it. Collapsed panels are inert and aria-hidden; buttons expose aria-expanded and aria-controls. Existing prices, exact benefits and themed shimmer actions remain unchanged. CSS reduced motion removes meaningful travel. No new dependency or popup was added. Fresh build passed; all six current browser tests passed. Additional checks at 1440, 768, 390 and 320px confirmed a non-identity intermediate 3D transform, real height growth with full benefits, only one open panel, no horizontal overflow and near-zero reduced-motion transition. Reviewed desktop/mobile captures in `.taste-skill/ticket-fold/`.

Latest user-provided authoritative content supersedes proposed allocations below: all three plans now contain exactly the supplied 8/8/7 benefits, with separate inheritance statements for Gắn kết and Trọn vẹn. Updated preview dialog uses the same data. Removed extra introductory lines inside the ticket headers, reduced plan names to 22–27px at weight 500 and descriptions to 14px/400. Main section title remains editorial serif per the user's correction. Buttons retain each plan's themed Shimmer Button. Removed the inaccurate “proposed benefits” disclaimer; registration/payment remains explicitly unavailable. Fresh build passed; browser checks at 1440, 768, 390 and 320px confirmed benefit counts, compact headings, absence of extra lines, matching dialog items/focus return and no overflow. Reviewed `exact-benefits.png`.

Rebuilt the previous two large rounded price cards as three paper companion tickets with inset perforation details, distinct warm surfaces, Flamee mascots, editorial typography and flat actions. Cơ bản uses warm white; Gắn Kết uses peach; Trọn Vẹn uses cocoa. Common page-width tokens and paper background are retained. Desktop shows three aligned tickets, tablet uses compact vertical ticket headers, mobile stacks them.

User-supplied plans/prices: Cơ bản Free / 0đ, Gắn Kết 79.000đ, Trọn Vẹn 129.000đ. Assumed monthly billing, stated to the user before implementation. Removed annual switch and prior invented annual amount. Feature allocations are design proposals, visibly identified as pending confirmation, and no checkout or real subscription was implemented. Each action opens the matching plan's preview with the correct price and benefits. Focus explicitly returns to the actual trigger after closing a multi-trigger Radix dialog. Existing Lenis preview locking remains.

Proposed allocations needing confirmation: Cơ bản includes pairing, introductory Mood Check-in and first memories; Gắn Kết proposes care suggestions, Tiny Mission and expanded memories; Trọn Vẹn proposes personalization, themes/mascots and additional storage. No numeric storage limits, usage quotas, discounts or popularity/customer claims were invented.

Validation: fresh TypeScript/Vite build passed. Browser checks at 1920, 1440, 1280, 1024, 768, 390 and 320px confirmed three cards, no horizontal overflow, exact prices, all plan previews and focus return. Axe section checks at 1440 and 390px: zero A/AA violations after darkening this section's badge text. Existing memories browser suite: five passed. Existing large bundle warning remains. No new image generation or dependency was needed; reuses happy, connection-pair and care-nudge stickers.

Screenshots: `.taste-skill/membership-redesign/`. Element captures can include the existing fixed nav over parts of tall sections; actual scrolling and plan controls were checked separately. Taste full-page findings remain from established/user-requested badges, shadows, palette, rounded panels, label sizes and original hero issues; this work does not claim a clean full-site taste gate.

Final full-page inspector: 10 FAIL / 10 WARN. Reviewed all ten final desktop/tablet/mobile inspection images after the last style adjustment.

ROUND 1
Seen in one second: three warm paper tickets with increasing levels of commitment and clear price differences.
Idea (one sentence): membership becomes a companion ticket for the couple's shared story.
Live thing: plan actions open the selected offer's preview with keyboard dismissal and focus return.
Layout words by section: hero=split-artwork / features=alternating-device-story / memories=timeline / membership=paper-tickets / FAQ=list / closing=statement.
Scores: design 7.5 · usability 8 · creativity 7 · content 7 → overall 6.0 after whole-page cap.
Caps applied: existing full-page taste findings and explicitly retained brand treatments.
Top three problems and fixes:
1. Original plans/prices were obsolete; replaced with the user's exact three levels and removed annual pricing.
2. First tablet draft wrapped one price period and unbalanced ticket baselines; added a shared minimum price-row height and note height.
3. Multiple dialog triggers returned focus to the wrong button; fixed by tracking the actual clicked trigger and verified all three plans.
