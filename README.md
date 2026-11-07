# 🌸 Royal Wedding E-Invitation | Sriraksha K R & Pannaga V Bhat

An interactive, luxury digital wedding invitation web app designed for mobile & desktop with authentic South Indian traditions, bilingual support (English & Kannada), sacred Akshatha shower, and personalized guest invitations.

---

## ✨ Features

1. **Auspicious Dual-Theme Experience**:
   * **Intro Cover (Light Ivory Card)**: Authentic *Lagna Patrike* motif with traditional **Arashina (turmeric) & Kunkuma (vermilion)** finger marks in all 4 corners, Lord Ganesha invocation, and ruled handwriting personalization.
   * **Content Page (Royal Burgundy & Gold)**: Deep maroon temple background with golden mandalas, couple spotlight, 3-column royal date banner, venue details, QR code, and photo gallery.

2. **Personalized "To" Field**:
   * Dynamic recipient names written in natural handwriting calligraphy (`Caveat`).
   * Supports custom links: `https://your-domain.com/?to=Manjunatha+Udupa+and+Family,+Bengaluru`
   * In-card ✏️ **Customize** modal with one-click **"Copy Link"** to easily send unique links to different relatives over WhatsApp.

3. **Sacred Akshatha (ಅಕ್ಷತೆ ಕಾಳು) Shower**:
   * Slender, tapered consecrated rice grains in vibrant turmeric yellow (`#FFC400`) and kunkuma red (`#C41829`) tumbling gently with 3D physics.
   * Smoothly fades out upon revelation of the Content Page to ensure clean readability.

4. **GSAP Luxury Reveal Animation**:
   * Automatic 5-second countdown with progress indicator.
   * "Open Invitation" skip button for instant access.
   * Unfolding envelope animation transitioning smoothly into the royal content card.

5. **Bilingual Support (English & ಕನ್ನಡ)**:
   * **Mobile-First FAB**: Positioned as a sleek Floating Action Button in the bottom-right corner for effortless thumb access on phones.
   * Instant transition between English and culturally authentic Kannada typography (`Noto Serif Kannada`).

6. **Interactive Guest Actions**:
   * 📅 **Add to Calendar**: 1-tap Google Calendar event & Apple/Outlook `.ics` download.
   * 💬 **Send Blessings on WhatsApp**: Pre-fills warm wedding congratulations.
   * 📍 **Venue Directions**: Embedded Location QR code + direct Google Maps navigation button.
   * 🖼️ **Photo Gallery & Lightbox**: Interactive pre-wedding moments with tap-to-enlarge.
   * ⏳ **Live Countdown**: Ticking down to **Sunday, Dec 6, 2026, 08:35 AM IST** (*Dhanur Lagna*).

---

## 📂 Project Structure

```text
SP-wedding e-invitation/
├── send.html                   # Primary short-link responsive wedding invitation
├── index.html                  # Seamless redirect to send.html (for root domain access)
├── itsmebride.html             # Bride's Portal: Link generator, guest management & tracking
├── firebase-config.js          # Firestore configuration for cloud database sync
├── style.css                   # Responsive layout, cards, gradients & animations
├── script.js                   # Multilingual i18n, Firestore code resolution & animations
├── assets/
│   ├── couple-cutout.png       # Optimized couple transparent portrait
│   ├── couple-main.jpg         # Full couple portrait
│   ├── couple-opt1.jpg         # Riverbank moment
│   ├── couple-opt2.jpg         # Traditional pose
│   ├── couple-opt3.jpg         # Nature & temple stone
│   ├── couple-sub.jpg          # Pre-wedding memories
│   ├── ganesha-gold.svg        # Gold Ganesha emblem
│   ├── ganesha-maroon.svg      # Maroon Ganesha emblem
│   └── location-qr.svg         # Venue QR code (Gayathri Mandira)
└── README.md                   # Documentation & deployment guide
```

---

## 🚀 How to Host & Share (100% Free)

### Option 1: Netlify Drop (Fastest — 1 minute)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the whole `SP-wedding e-invitation` folder into the browser.
3. Your wedding e-invitation is instantly live! You can set a custom subdomain like `sriraksha-weds-pannaga.netlify.app`.

### Option 2: GitHub Pages (Recommended for permanence)
1. Create a new GitHub repository (e.g. `wedding-invitation`).
2. Push all files from this folder to the repository.
3. Go to **Repository Settings → Pages → Source → Deploy from `main` branch**.
4. Your website will be live at `https://<username>.github.io/wedding-invitation/`.

---

## 💌 How to Share Personalized Links on WhatsApp

Once hosted online, simply add `?to=` followed by your guest's name:

* **Example 1**:
  `https://sriraksha-weds-pannaga.netlify.app/?to=Raghavendra+Uncle+and+Family`
* **Example 2**:
  `https://sriraksha-weds-pannaga.netlify.app/?to=Manjunatha+Udupa+and+Family,+Bengaluru`
* **Example 3 (in Kannada)**:
  `https://sriraksha-weds-pannaga.netlify.app/?to=ಮಂಜುನಾಥ+ಉಡುಪ+ಮತ್ತು+ಕುಟುಂಬ`

When the guest opens the link, the card will display their name scripted onto the invitation lines!

