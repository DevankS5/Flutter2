# Veo 3 Video Generation Prompts
### AJW Studio — Flutter Agency Website

Generate each video at the specified settings. Use these prompts verbatim in Veo 3. Save files to `public/videos/` with the exact filenames listed.

All videos must be:
- **Format:** MP4 (H.264 codec, silent — no audio track)
- **Playback:** Intended for `<video autoplay muted loop playsInline>` HTML tag
- **Style:** Smooth, seamless loop (last frame matches first frame)
- **Duration:** 6–10 seconds per loop
- **Frame Rate:** 60fps preferred, 30fps minimum

---

## 1. Hero Card Video — Atoon Music App

**Filename:** `public/videos/app-atoon.mp4`  
**Dimensions:** 390 × 760 px (9:19.5 portrait, phone screen ratio)  
**Duration:** 8 seconds looping

**Prompt:**
> A smooth looping mobile UI animation of a music streaming app. Deep purple/violet dark background. The "Now Playing" screen animates: an album cover art (abstract neon wave illustration) gently pulses with a slow breathing scale animation. Below it, a waveform equalizer bar animation plays — 5 bars bouncing softly in rhythm. A seek/progress bar slowly advances from left to right across the 8 seconds, then seamlessly loops back. The song title "Neon Drift" fades in and the artist name "Kira Voss" is already visible. Soft purple ambient glow behind the album art shifts slightly. Everything is fluid, premium, hypnotic. NO UI transitions, just subtle looping micro-animations on a static screen layout. Photorealistic UI rendering, not cartoon.

---

## 2. Hero Card Video — FinTrack Finance App

**Filename:** `public/videos/app-fintrack.mp4`  
**Dimensions:** 390 × 760 px  
**Duration:** 8 seconds looping

**Prompt:**
> A smooth looping mobile UI animation of a personal finance/portfolio app. Clean white background with blue accents (#2563EB). The main portfolio chart (a smooth area/line chart) animates: the line "draws" from left to right over 4 seconds revealing portfolio growth, then fades and redraws — creating a perfect loop. The balance number "₹ 4,82,300" counts up rapidly from zero to the final value in the first 2 seconds. A green "+12.4%" badge pulses gently with a soft glow. Transaction list rows subtly fade/slide in from the bottom one by one. The animation is clean, professional, trustworthy. Numbers appear crisp on a bright white UI. NO camera movement. Photorealistic UI rendering.

---

## 3. Hero Card Video — MediConnect Health App

**Filename:** `public/videos/app-mediconnect.mp4`  
**Dimensions:** 390 × 760 px  
**Duration:** 8 seconds looping

**Prompt:**
> A smooth looping mobile UI animation of a telemedicine/healthcare app. Soft white and mint green background. The main animation: a video consultation screen simulates a doctor call — a circular avatar of a female doctor ("Dr. Sarah Kim") is visible on a light green split screen. A subtle "connecting…" animation with 3 pulsing dots transitions into a "Connected" state with a soft green ring appearing around the doctor avatar. A floating health metric card slides up from the bottom showing "Heart Rate 72 bpm" with a tiny animated ECG line drawing across it. Status indicator rotates from orange "Waiting" to green "Connected". Everything loops seamlessly at the end of 8 seconds. Calm, safe, clean healthcare aesthetic. Photorealistic UI rendering.

---

## 4. Hero Card Video — LocalRide Transport App

**Filename:** `public/videos/app-localride.mp4`  
**Dimensions:** 390 × 760 px  
**Duration:** 10 seconds looping

**Prompt:**
> A smooth looping mobile UI animation of a ride-hailing booking app. Dark navy map background simulating a real map. The animation sequence: a blue car icon smoothly moves along a route path (dotted white line) from pickup point to destination in 5 seconds then resets. An ETA chip "3 mins away" counts down — 3…2…1 — then resets to 3. Route highlight on map glows with a moving progress dot. Bottom sheet shows driver card with rating stars that briefly shimmer/sparkle. A subtle "Arriving Soon" notification card slides up from the bottom and slides down. Map background has very slight parallax drift (slow pan). Loop is seamless. Bold, modern transport tech UI. Dark navy and electric blue color scheme. Photorealistic UI rendering.

---

## 5. Hero Card Video — EduVerse Learning App

**Filename:** `public/videos/app-eduverse.mp4`  
**Dimensions:** 390 × 760 px  
**Duration:** 8 seconds looping

**Prompt:**
> A smooth looping mobile UI animation of a gamified e-learning app. Warm cream/off-white background with coral and indigo accents. The animation: a course lesson is "in progress" — a video lesson player thumbnail at the top has a pulsing play button with subtle bloom/glow effect. A circular progress ring below (for the course "Advanced Flutter Development") slowly fills from 67% to 100% over 6 seconds with a micro-celebration sparkle effect when it completes (small star particles burst), then resets to 67%. A XP notification chip "🔥 +50 XP" bounces up and fades, then reappears. A streak counter "12 🔥" pulses gently with an orange glow. Everything loops perfectly. Encouraging, energetic, gamified aesthetic. Warm coral and indigo color palette. Photorealistic UI rendering.

---

## 6. Hero Background — Ambient Particle Mesh (Fallback)

**Filename:** `public/videos/ambient-bg.mp4`  
**Dimensions:** 1920 × 1080 px (landscape, full HD)  
**Duration:** 15 seconds looping

**Prompt:**
> An abstract, looping animated background for a premium tech agency website. Deep navy blue background (#0F172A). Subtle glowing mesh grid lines in electric blue (#2563EB at 15% opacity) softly animate — vertices of the mesh nodes slowly pulse with a soft blue glow. A few larger soft radial blue gradient blobs drift very slowly across the frame (speed: extremely slow, barely perceptible drift). The overall effect is calm, premium, futuristic — like a neural network or constellation map breathing gently. NO text, NO logos, NO camera motion other than the slowly drifting elements. 15-second seamless loop. Output is pure ambiance, meant to sit behind white text. Cinematic quality.

---

## 7. Process / How It Works — Animated Timeline (Optional Enhancement)

**Filename:** `public/videos/process-timeline.mp4`  
**Dimensions:** 1280 × 720 px  
**Duration:** 10 seconds looping

**Prompt:**
> An abstract looping animation illustrating a software development workflow. Clean white background. A horizontal dashed timeline line animates from left to right. Five circular milestone nodes appear one by one along the line with soft pop-in animation: Node 1 "Discovery" (magnifying glass icon), Node 2 "Design" (paintbrush icon), Node 3 "Build" (code brackets icon), Node 4 "Test" (checkmark icon), Node 5 "Launch" (rocket icon). Each node glows briefly in electric blue when activated. The sequence plays through all 5 nodes in 8 seconds, then seamlessly loops. Minimal, clean, corporate-tech aesthetic. Blue and white only. Icons are simple line art.

---

## 8. Contact / CTA Section — Success Animation (Optional)

**Filename:** `public/videos/success-confetti.mp4`  
**Dimensions:** 600 × 400 px  
**Duration:** 3 seconds (no loop required)

**Prompt:**
> A short 3-second celebration animation. A large blue checkmark icon draws itself with a stroke animation (circle then checkmark) in the center on a white background. After the checkmark completes, a burst of small confetti particles in blue, indigo, and white colors rains down for 1.5 seconds. Clean, satisfying, professional. Used as a form submission success state. Minimal and elegant — not childish confetti, but refined and subtle. 3 seconds, no loop.

---

## Technical Export Settings for Veo 3

| Setting | Value |
|---------|-------|
| Format | MP4 (H.264) |
| Audio | None (muted) |
| Color Space | sRGB |
| Bit Rate | 4–8 Mbps for phone screens, 12–16 Mbps for full HD |
| Loop | Seamless (for all except file #8) |
| Background | Transparent NOT needed — solid backgrounds only |

---

## File Placement

```
c:\Users\devan\Downloads\AJW\public\videos\
├── app-atoon.mp4           # Hero card — Atoon music app (390×760)
├── app-fintrack.mp4        # Hero card — FinTrack finance app (390×760)
├── app-mediconnect.mp4     # Hero card — MediConnect health app (390×760)
├── app-localride.mp4       # Hero card — LocalRide transport app (390×760)
├── app-eduverse.mp4        # Hero card — EduVerse learning app (390×760)
├── ambient-bg.mp4          # Full-page ambient background fallback (1920×1080)
├── process-timeline.mp4    # Optional how-it-works enhancement (1280×720)
└── success-confetti.mp4    # Optional form success animation (600×400)
```

---

## Integration Notes

Videos are used in `src/components/effects/LazyVideo.tsx` which handles:
- **IntersectionObserver** lazy loading (only loads when 80px from viewport)
- **Auto-play on enter, pause on exit** (no wasted bandwidth)
- **`playsInline`** attribute for iOS Safari compatibility
- **Poster image fallback** — pair each video with a static poster:

| Video | Poster Image (from Nanobanana) |
|-------|-------------------------------|
| `app-atoon.mp4` | `mockup-atoon.png` |
| `app-fintrack.mp4` | `mockup-fintrack.png` |
| `app-mediconnect.mp4` | `mockup-mediconnect.png` |
| `app-localride.mp4` | `mockup-localride.png` |
| `app-eduverse.mp4` | `mockup-eduverse.png` |

The poster images are generated in `IMAGE_PROMPTS_NANOBANANA.md` (files #3–7).
