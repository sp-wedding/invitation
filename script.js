/**
 * WEDDING E-INVITATION JAVASCRIPT LOGIC
 * Sriraksha K R & Pannaga V Bhat
 * Date: Sunday, 6th Dec 2026, 8:35 AM
 * Venue: Gayathri Mandira, Thirthahalli
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // GOOGLE ANALYTICS EVENT TRACKING HELPER
  // =========================================================================
  function trackEvent(name, params = {}) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params);
    }
  }

  // =========================================================================
  // 1. MULTILINGUAL DICTIONARY (ENGLISH & KANNADA)
  // =========================================================================
  const i18n = {
    en: {
      langBtn: "ಕನ್ನಡ",
      // Intro Card
      invocation: "|| Sri Ganeshaaya Namaha ||",
      weddingInvitation: "WEDDING INVITATION",
      weddingDateIntro: "ON 6TH DEC 2026, SUNDAY",
      introBrideName: "SRIRAKSHA K R",
      introGroomName: "PANNAGA V BHAT",
      toLabel: "TO",
      defaultGuest: "Writing your name digitally..\nplease wait..",
      revealTimer: "Revealing invitation in",
      seconds: "s",
      openNowBtn: "Open Invitation",
      editGuestTooltip: "Customize",
      backToIntroBtn: "View Cover Page",

      // Content Card
      togetherWithFamilies: "Together with our families",
      contentBrideName: "SRIRAKSHA K R",
      contentGroomName: "PANNAGA V BHAT",
      cordialInvite: "cordially invite you to join the occasion of our joyous commitment on",
      month: "DECEMBER",
      day: "SUNDAY",
      date: "06",
      time: "8:35 AM",
      year: "2026",
      muhurthamLabel: "Dhanur Lagna Auspicious Muhurtham",
      venueLabel: "Venue:",
      venueName: "Gayathri Mandira, Thirthahalli.",
      scanForLocation: "Scan QR code or click below to navigate",
      openInMapsBtn: "Get Directions on Google Maps",

      // Spotlight & Gallery
      coupleStoryTitle: "A Journey of Love & Tradition",
      coupleStoryText: "Two hearts, two souls, united in love and blessed by family. Join us as we begin our forever together in the pristine beauty of Malnad.",
      viewGallery: "Pre-Wedding Moments",

      // Countdown
      countdownTitle: "Counting Down to the Big Day",
      days: "Days",
      hours: "Hours",
      minutes: "Mins",
      secondsLabel: "Secs",

      // Actions
      addToCalendarBtn: "Add to Calendar",
      rsvpWhatsAppBtn: "Wish on WhatsApp",
      musicOn: "Music",
      musicOff: "Mute",
      petalsText: "Petals",
      whatsappMessage: "Dear Sriraksha and Pannaga, Heartiest Congratulations on your wedding! 🎉 Wishing you both a lifetime of love and joy. We look forward to celebrating with you on Dec 6th, 2026 at Thirthahalli!"
    },

    kn: {
      langBtn: "English",
      // Intro Card
      invocation: "|| ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ ||",
      weddingInvitation: "ವಿವಾಹ ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ",
      weddingDateIntro: "ದಿನಾಂಕ: ೦೬ ಡಿಸೆಂಬರ್ ೨೦೨೬, ಭಾನುವಾರ",
      introBrideName: "ಶ್ರೀರಕ್ಷಾ ಕೆ.ಆರ್",
      introGroomName: "ಪನ್ನಗ ವಿ. ಭಟ್",
      toLabel: "ಇವರಿಗೆ",
      defaultGuest: "ನಿಮ್ಮ ಹೆಸರನ್ನು ಬರೆಯಲಾಗುತ್ತಿದೆ..\nದಯವಿಟ್ಟು ನಿರೀಕ್ಷಿಸಿ..",
      revealTimer: "ಆಮಂತ್ರಣ ತೆರೆಯಲಾಗುತ್ತಿದೆ ಇನ್ನೇನು",
      seconds: "ಸೆಕೆಂಡ್",
      openNowBtn: "ಆಮಂತ್ರಣ ಪತ್ರಿಕೆ ತೆರೆಯಿರಿ",
      editGuestTooltip: "ಹೆಸರು ಬದಲಿಸಿ",
      backToIntroBtn: "ಮುಖಪುಟ ವೀಕ್ಷಿಸಿ",

      // Content Card
      togetherWithFamilies: "ನಮ್ಮ ಕುಟುಂಬಸ್ಥರೊಂದಿಗೆ",
      contentBrideName: "ಶ್ರೀರಕ್ಷಾ ಕೆ.ಆರ್",
      contentGroomName: "ಪನ್ನಗ ವಿ. ಭಟ್",
      cordialInvite: "ನಮ್ಮ ವಿವಾಹ ಮಹೋತ್ಸವದ ಶುಭ ಸಂದರ್ಭಕ್ಕೆ ತಾವುಗಳು ಸಕುಟುಂಬ ಸಮೇತರಾಗಿ ಆಗಮಿಸಿ, ನೂತನ ವಧು-ವರರನ್ನು ಆಶೀರ್ವದಿಸಬೇಕಾಗಿ ವಿನಮ್ರ ಪ್ರಾರ್ಥನೆ.",
      month: "ಡಿಸೆಂಬರ್",
      day: "ಭಾನುವಾರ",
      date: "೦೬",
      time: "ಬೆಳಗ್ಗೆ ೮:೩೫ ಕ್ಕೆ",
      year: "೨೦೨೬",
      muhurthamLabel: "ಧನುರ್ ಲಗ್ನ ಶುಭ ಮುಹೂರ್ತದಲ್ಲಿ",
      venueLabel: "ಸ್ಥಳ:",
      venueName: "ಗಾಯತ್ರಿ ಮಂದಿರ, ತೀರ್ಥಹಳ್ಳಿ.",
      scanForLocation: "ಸ್ಥಳದ ವಿವರಕ್ಕಾಗಿ QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಅಥವಾ ಕೆಳಗೆ ಒತ್ತಿ",
      openInMapsBtn: "ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ವೀಕ್ಷಿಸಿ",

      // Spotlight & Gallery
      coupleStoryTitle: "ಪ್ರೀತಿ ಮತ್ತು ಸಂಪ್ರದಾಯದ ಶುಭ ಸಂಗಮ",
      coupleStoryText: "ಮಲೆನಾಡಿನ ಹಸಿರಿನ ಮಡಿಲಲ್ಲಿ, ಕುಟುಂಬದ ಹಿರಿಯರ ಆಶೀರ್ವಾದದೊಂದಿಗೆ ಹೊಸ ಜೀವನಕ್ಕೆ ಹೆಜ್ಜೆಯಿಡುತ್ತಿರುವ ನಮಗೆ ತಮ್ಮ ಉಪಸ್ಥಿತಿ ಮತ್ತು ಹಾರೈಕೆಗಳೇ ಶ್ರೀರಕ್ಷೆ.",
      viewGallery: "ಪೂರ್ವ ವಿವಾಹದ ಸುಂದರ ಕ್ಷಣಗಳು",

      // Countdown
      countdownTitle: "ಶುಭ ಮುಹೂರ್ತಕ್ಕೆ ದಿನಗಣನೆ",
      days: "ದಿನಗಳು",
      hours: "ಗಂಟೆಗಳು",
      minutes: "ನಿಮಿಷಗಳು",
      secondsLabel: "ಕ್ಷಣಗಳು",

      // Actions
      addToCalendarBtn: "ಕ್ಯಾಲೆಂಡರ್‌ಗೆ ಸೇರಿಸಿ",
      rsvpWhatsAppBtn: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಶುಭ ಹಾರೈಸಿ",
      musicOn: "ಸಂಗೀತ",
      musicOff: "ಮ್ಯೂಟ್",
      petalsText: "ಹೂಮಳೆ",
      whatsappMessage: "ಆತ್ಮೀಯ ಶ್ರೀರಕ್ಷಾ ಮತ್ತು ಪನ್ನಗ ಅವರಿಗೆ ವಿವಾಹ ಮಹೋತ್ಸವದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು! 💐 ನಿಮ್ಮ ದಾಂಪತ್ಯ ಜೀವನ ಸದಾ ಸುಖ-ಶಾಂತಿಯಿಂದ ಕೂಡಿರಲಿ. ದಿನಾಂಕ ೦೬ ಡಿಸೆಂಬರ್ ೨೦೨೬ ರಂದು ತೀರ್ಥಹಳ್ಳಿಯಲ್ಲಿ ನಡೆಯುವ ನಿಮ್ಮ ವಿವಾಹಕ್ಕೆ ಖಂಡಿತ ಆಗಮಿಸುತ್ತೇವೆ!"
    }
  };

  let currentLang = 'en';

  // Apply Language to UI
  function updateLanguage(lang) {
    currentLang = lang;
    const t = i18n[lang];

    // Toggle body class for font styling
    if (lang === 'kn') {
      document.body.classList.add('lang-kn');
    } else {
      document.body.classList.remove('lang-kn');
    }

    // Update Language Toggle Button
    const langBtnText = document.getElementById('langBtnText');
    if (langBtnText) langBtnText.textContent = t.langBtn;

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Check if guest name has been customized. If still default, update default guest name
    const guestEl = document.getElementById('guestNameDisplay');
    if (guestEl && !window.hasCustomGuestName) {
      guestEl.innerHTML = t.defaultGuest.replace(/\n/g, '<br>');
    }
  }

  // =========================================================================
  // FAB IDLE / ACTIVE AUTO-COLLAPSE (5s INACTIVITY LOGIC)
  // =========================================================================
  const langToggleBtn = document.getElementById('langToggleBtn');
  let fabIdleTimer = null;

  function setFabIdle(idle) {
    if (!langToggleBtn) return;
    if (idle) {
      langToggleBtn.classList.add('is-idle');
      langToggleBtn.setAttribute('aria-expanded', 'false');
      langToggleBtn.setAttribute('title', currentLang === 'en' ? 'Switch Language (ಕನ್ನಡ)' : 'Switch Language (English)');
    } else {
      langToggleBtn.classList.remove('is-idle');
      langToggleBtn.setAttribute('aria-expanded', 'true');
      resetFabIdleTimer();
    }
  }

  function resetFabIdleTimer() {
    clearTimeout(fabIdleTimer);
    // After 5 seconds of inactivity, collapse into idle state
    fabIdleTimer = setTimeout(() => {
      setFabIdle(true);
    }, 5000);
  }

  // Start 5-second idle timer on initial load
  resetFabIdleTimer();

  // Language Switcher Button Listener
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', (e) => {
      // If FAB is currently in idle state: clicking it wakes it up to active state!
      if (langToggleBtn.classList.contains('is-idle')) {
        e.preventDefault();
        e.stopPropagation();
        setFabIdle(false);
        return;
      }

      // If already active: toggle the language and reset 5s idle countdown
      resetFabIdleTimer();
      const nextLang = currentLang === 'en' ? 'kn' : 'en';

      // Quick GSAP pulse on text change
      gsap.to('.card-wrapper', {
        opacity: 0.85,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          updateLanguage(nextLang);
          trackEvent('change_language', { language: nextLang });
        }
      });
    });
  }

  // =========================================================================
  // 2. PERSONALIZED GUEST "TO" FIELD (URL PARAM & EDIT MODAL)
  // =========================================================================
  window.hasCustomGuestName = false;
  const guestDisplay = document.getElementById('guestNameDisplay');
  const editGuestBtn = document.getElementById('editGuestBtn');
  const editModal = document.getElementById('editGuestModal');
  const guestInput = document.getElementById('guestNameInput');
  const saveGuestBtn = document.getElementById('saveGuestEditBtn');
  const cancelGuestBtn = document.getElementById('cancelGuestEditBtn');

    // =========================================================================
  // GATEKEEPER / VERIFIER LOADING & CODE RESOLUTION LOGIC
  // =========================================================================
  const verifierScreen = document.getElementById('verifierScreen');
  const verifierLoadingState = document.getElementById('verifierLoadingState');
  const verifierErrorState = document.getElementById('verifierErrorState');
  const verifierErrorDesc = document.getElementById('verifierErrorDesc');
  const verifierCodeTriedBox = document.getElementById('verifierCodeTriedBox');
  const verifierCodeTried = document.getElementById('verifierCodeTried');
  const verifierStatusText = document.getElementById('verifierStatusText');

  function showVerifierError(message, attemptedCode = null) {
    document.body.style.overflow = 'hidden';
    if (verifierLoadingState) verifierLoadingState.style.display = 'none';
    if (verifierErrorState) verifierErrorState.style.display = 'block';
    if (verifierErrorDesc && message) {
      verifierErrorDesc.innerHTML = message;
    }
    if (verifierCodeTriedBox && verifierCodeTried) {
      if (attemptedCode) {
        verifierCodeTried.textContent = attemptedCode;
        verifierCodeTriedBox.style.display = 'inline-block';
      } else {
        verifierCodeTriedBox.style.display = 'none';
      }
    }
  }

  async function initVerifierAndLoad() {
    // Lock body scroll while on verifier gatekeeper screen
    document.body.style.overflow = 'hidden';

    // 1. Extract alphanumeric code from query parameters or pathname
    const params = new URLSearchParams(window.location.search);
    let rawCode = params.get('to') || params.get('code') || params.get('id') || params.get('pass') || params.get('key');

    // Also check pathname (e.g. /invitation/at79hag6 or /at79hag6)
    if (!rawCode) {
      const pathMatch = window.location.pathname.match(/\/(?:invitation\/)?([a-zA-Z0-9]{4,24})\/?$/);
      if (pathMatch) {
        rawCode = pathMatch[1];
      }
    }

    // 2. CHECK 1: Does the link include a code? (Disallow bare links like ending with only index.html)
    if (!rawCode || !rawCode.trim()) {
      showVerifierError("The link might be broken or unable to fetch the e-invitation.", null);
      trackEvent('invitation_missing_code');
      return;
    }

    const code = rawCode.trim();

    // 3. CHECK 2: Is it a valid alphanumeric code?
    const isAlphanumeric = /^[a-zA-Z0-9]{4,24}$/.test(code);
    if (!isAlphanumeric) {
      showVerifierError("The link might be broken or unable to fetch the e-invitation.", code);
      trackEvent('invitation_invalid_format', { code: code });
      return;
    }

    // 4. CHECK WITH FIREBASE FIRESTORE & LOCAL REGISTRY
    let resolvedGuestName = null;
    let isCloudVerified = false;

    // A. Check Firestore if configured
    try {
      const config = window.FIREBASE_CONFIG || {};
      const savedProjectId = localStorage.getItem('sp_firebase_project_id');
      const savedApiKey = localStorage.getItem('sp_firebase_api_key');
      if (savedProjectId) config.projectId = savedProjectId;
      if (savedApiKey) config.apiKey = savedApiKey;

      const isConfigured = window.isFirebaseConfigured ? window.isFirebaseConfigured() : Boolean(
        config.apiKey &&
        config.apiKey !== "YOUR_API_KEY_HERE" &&
        config.projectId &&
        config.projectId !== "YOUR_PROJECT_ID"
      );

      if (isConfigured && typeof firebase !== 'undefined') {
        if (!firebase.apps.length) {
          firebase.initializeApp(config);
        }
        const firestore = firebase.firestore();
        const docRef = firestore.collection('invitations').doc(code);

        // Safety timeout of 6 seconds to prevent hanging on spotty connections
        const fetchPromise = docRef.get();
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Firestore network timeout')), 6000)
        );

        const docSnap = await Promise.race([fetchPromise, timeoutPromise]);

        if (docSnap && docSnap.exists) {
          const data = docSnap.data();
          if (data && data.guestName) {
            resolvedGuestName = data.guestName;
            isCloudVerified = true;
            // Increment view count in Firestore
            docRef.update({
              viewCount: firebase.firestore.FieldValue.increment(1),
              lastViewedAt: firebase.firestore.FieldValue.serverTimestamp()
            }).catch(e => console.warn("View counter notice:", e));
          }
        }
      }
    } catch (err) {
      console.warn("Firestore lookup notice:", err);
    }

    // B. Fallback to LocalStorage (for offline / bride portal demo testing)
    if (!resolvedGuestName) {
      try {
        const localData = localStorage.getItem('sp_wedding_invitations');
        if (localData) {
          const list = JSON.parse(localData);
          const found = list.find(item => item.code && item.code.toLowerCase() === code.toLowerCase());
          if (found && found.guestName) {
            resolvedGuestName = found.guestName;
            found.viewCount = (found.viewCount || 0) + 1;
            localStorage.setItem('sp_wedding_invitations', JSON.stringify(list));
          }
        }
      } catch (e) {
        console.warn("Local storage lookup notice:", e);
      }
    }

    // 5. EVALUATION: Did code match registered invitations?
    if (!resolvedGuestName) {
      showVerifierError("The link might be broken or unable to fetch the e-invitation.", code);
      trackEvent('invitation_verify_failed', { code: code });
      return;
    }

    // 6. SUCCESS: Personalize card, dismiss gatekeeper, start countdown & petals
    window.hasCustomGuestName = true;
    if (guestDisplay) {
      guestDisplay.innerHTML = escapeHtml(resolvedGuestName).replace(/,\s*/g, ',<br>');
    }
    if (guestInput) {
      guestInput.value = resolvedGuestName;
    }

    trackEvent('invitation_verified', {
      code: code,
      guest_name: resolvedGuestName,
      cloud: isCloudVerified
    });

    if (verifierStatusText) {
      verifierStatusText.textContent = "Invitation verified! Welcome...";
    }

    // Restore body scroll
    document.body.style.overflow = '';

    // Smoothly dismiss verifier screen
    if (verifierScreen) {
      gsap.to(verifierScreen, {
        opacity: 0,
        duration: 0.6,
        delay: 0.25,
        ease: 'power2.out',
        onComplete: () => {
          verifierScreen.style.display = 'none';
          verifierScreen.classList.add('hidden');
          startRevealCountdown();
          smoothlyStartPetals();
        }
      });
    } else {
      startRevealCountdown();
      smoothlyStartPetals();
    }
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Open Edit Modal
  if (editGuestBtn && editModal) {
    editGuestBtn.addEventListener('click', () => {
      editModal.classList.add('open');
      if (guestInput) {
        guestInput.value = guestDisplay.innerText.replace(/\n/g, ' ');
        guestInput.focus();
      }
    });
  }

  // Close Edit Modal
  if (cancelGuestBtn && editModal) {
    cancelGuestBtn.addEventListener('click', () => {
      editModal.classList.remove('open');
    });
  }

  // Save Custom Guest Name
  if (saveGuestBtn && editModal && guestInput) {
    saveGuestBtn.addEventListener('click', () => {
      const val = guestInput.value.trim();
      if (val) {
        window.hasCustomGuestName = true;
        guestDisplay.innerHTML = escapeHtml(val).replace(/,\s*/g, ',<br>');

        // Update browser URL query param without reloading page
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('to', val);
        window.history.replaceState({}, '', newUrl);
      }
      editModal.classList.remove('open');

      // Calligraphy Flourish animation
      gsap.fromTo(guestDisplay, { scale: 0.95, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.5)" });
    });
  }

  // Copy Personalized WhatsApp Share Link
  const copyShareLinkBtn = document.getElementById('copyShareLinkBtn');
  const copyFeedback = document.getElementById('copyFeedback');
  if (copyShareLinkBtn && guestInput) {
    copyShareLinkBtn.addEventListener('click', () => {
      const val = guestInput.value.trim() || guestDisplay.innerText.replace(/\n/g, ' ');
      const newUrl = new URL(window.location.origin + window.location.pathname);
      newUrl.searchParams.set('to', val);

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(newUrl.href).then(() => {
          if (copyFeedback) {
            copyFeedback.style.display = 'block';
            setTimeout(() => { copyFeedback.style.display = 'none'; }, 2500);
          }
        }).catch(() => {
          prompt('Copy this link to share on WhatsApp:', newUrl.href);
        });
      } else {
        prompt('Copy this link to share on WhatsApp:', newUrl.href);
      }
    });
  }

  // =========================================================================
  // 3. 5-SECOND COUNTDOWN & SMOOTH REVEAL GSAP ANIMATION
  // =========================================================================
  let revealCountdown = 5;
  let countdownTimerInterval = null;
  const timerNumEl = document.getElementById('revealTimerCount');
  const progressFillEl = document.getElementById('revealProgressFill');
  const openBtn = document.getElementById('openInvitationBtn');
  const introSection = document.getElementById('introSection');
  const introCard = document.getElementById('introCard');
  const contentSection = document.getElementById('contentSection');
  let hasRevealed = false;

  function triggerReveal() {
    if (hasRevealed) return;
    hasRevealed = true;
    trackEvent('invitation_revealed');
    if (countdownTimerInterval) clearInterval(countdownTimerInterval);

    // 1. Reveal content section into document flow
    if (contentSection) {
      contentSection.classList.remove('content-hidden');
    }
    if (window.ScrollTrigger) {
      ScrollTrigger.refresh();
    }

    // 2. Put intro card into idle state as we enter content
    if (introCard) {
      introCard.classList.add('is-idle');
    }

    // 3. Smoothly stop continuous rainfall effect once invitation is revealed
    smoothlyStopPetals();

    // 4. Trigger one-time celebratory flower burst
    burstCelebrationPetals();

    // 5. Smooth scroll into the content section
    if (contentSection) {
      setTimeout(() => {
        contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }

    // 6. GSAP Timeline for luxury unfolding reveal
    const tl = gsap.timeline();

    tl.fromTo('#contentCard',
      { y: 50, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.2)' }
    )
      .fromTo('.gs-reveal',
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
        "-=0.4"
      );
  }

  // Start 5-second automatic countdown
  function startRevealCountdown() {
    const totalMs = 5000;
    const intervalMs = 100;
    let elapsedMs = 0;

    countdownTimerInterval = setInterval(() => {
      elapsedMs += intervalMs;
      const progressPercent = (elapsedMs / totalMs) * 100;
      const remainingSeconds = Math.max(0, Math.ceil((totalMs - elapsedMs) / 1000));

      if (progressFillEl) progressFillEl.style.width = `${progressPercent}%`;
      if (timerNumEl) timerNumEl.textContent = remainingSeconds;

      if (elapsedMs >= totalMs) {
        clearInterval(countdownTimerInterval);
        triggerReveal();
      }
    }, intervalMs);
  }

  // Manual Open Button
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      triggerReveal();
    });
  }

  // =========================================================================
  // SCROLL OBSERVATION: RESTORE COVER AT TOP & IDLE WHEN IN CONTENT
  // =========================================================================
  let isScrollDebouncing = false;

  function updateCoverScrollState() {
    if (!hasRevealed || !introSection || !introCard) return;

    const introRect = introSection.getBoundingClientRect();
    // When user scrolls back up near the top cover page:
    const isAtTop = window.scrollY < 80 || introRect.bottom > (window.innerHeight * 0.45);

    if (isAtTop) {
      if (introCard.classList.contains('is-idle')) {
        introCard.classList.remove('is-idle');
        smoothlyStartPetals();
      }
    } else {
      if (!introCard.classList.contains('is-idle')) {
        introCard.classList.add('is-idle');
        smoothlyStopPetals();
      }
    }
  }

  window.addEventListener('scroll', () => {
    if (!isScrollDebouncing) {
      window.requestAnimationFrame(() => {
        updateCoverScrollState();
        isScrollDebouncing = false;
      });
      isScrollDebouncing = true;
    }
  }, { passive: true });

  // Clicking the idle cover card smoothly scrolls back to top
  if (introCard) {
    introCard.addEventListener('click', (e) => {
      if (hasRevealed && introCard.classList.contains('is-idle')) {
        if (e.target.closest('#editGuestBtn') || e.target.closest('.customize-btn')) return;
        introSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // =========================================================================
  // 4. GSAP SCROLLTRIGGER FOR IMMERSIVE LUXURY CONTENT
  // =========================================================================
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    // Animate content elements as user scrolls
    gsap.utils.toArray('.gs-reveal').forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out'
      });
    });

    // Date block gentle gold shimmer
    gsap.to('#dateBlock', {
      boxShadow: '0 0 25px rgba(229, 195, 120, 0.4)',
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });
  }

  // =========================================================================
  // 5. LIVE COUNTDOWN TIMER TO DEC 6, 2026, 8:35 AM IST
  // =========================================================================
  // Wedding Date: Dec 6, 2026, 08:35:00 IST (+05:30)
  const weddingDate = new Date("2026-12-06T08:35:00+05:30").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const daysEl = document.getElementById('timerDays');
    const hoursEl = document.getElementById('timerHours');
    const minsEl = document.getElementById('timerMinutes');
    const secsEl = document.getElementById('timerSeconds');

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
      if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
      if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
    } else {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minsEl) minsEl.textContent = '00';
      if (secsEl) secsEl.textContent = '00';
    }
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  // =========================================================================
  // 6. TRADITIONAL AMBIENT MUSIC (SYNTHESIZED SOOTHING DRONE & FLUTE)
  // =========================================================================
  let audioContext = null;
  let isPlayingMusic = false;
  let masterGain = null;
  let musicOscillators = [];

  function initTraditionalAudio() {
    if (!audioContext) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioContext();
    }
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
  }

  function startIndianFluteMelody() {
    initTraditionalAudio();
    if (isPlayingMusic) return;

    masterGain = audioContext.createGain();
    masterGain.gain.setValueAtTime(0.01, audioContext.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.12, audioContext.currentTime + 2);
    masterGain.connect(audioContext.destination);

    // Warm Tambura Tanpura Drones in C# (Sa - Pa)
    const droneFreqs = [138.59, 207.65, 277.18]; // C#3, G#3, C#4
    droneFreqs.forEach(freq => {
      const osc = audioContext.createOscillator();
      const oscGain = audioContext.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioContext.currentTime);
      oscGain.gain.setValueAtTime(0.04, audioContext.currentTime);
      osc.connect(oscGain);
      oscGain.connect(masterGain);
      osc.start();
      musicOscillators.push(osc);
    });

    isPlayingMusic = true;
    updateMusicButtonUI();
  }

  function stopIndianFluteMelody() {
    if (masterGain && audioContext) {
      masterGain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.8);
      setTimeout(() => {
        musicOscillators.forEach(osc => osc.stop());
        musicOscillators = [];
        isPlayingMusic = false;
        updateMusicButtonUI();
      }, 800);
    }
  }

  function toggleMusic() {
    if (isPlayingMusic) {
      stopIndianFluteMelody();
    } else {
      startIndianFluteMelody();
    }
  }

  function updateMusicButtonUI() {
    const musicBtn = document.getElementById('musicToggleBtn');
    const musicIcon = document.getElementById('musicIcon');
    const musicText = document.getElementById('musicBtnText');
    const t = i18n[currentLang];

    if (musicBtn) {
      if (isPlayingMusic) {
        musicBtn.classList.add('active');
        if (musicIcon) musicIcon.className = 'fa-solid fa-volume-high music-icon';
        if (musicText) musicText.textContent = t.musicOff;
      } else {
        musicBtn.classList.remove('active');
        if (musicIcon) musicIcon.className = 'fa-solid fa-music music-icon';
        if (musicText) musicText.textContent = t.musicOn;
      }
    }
  }

  const musicBtn = document.getElementById('musicToggleBtn');
  if (musicBtn) {
    musicBtn.addEventListener('click', toggleMusic);
  }

  // =========================================================================
  // 7. AMBIENT FLOWER PETALS SHOWER & CONFETTI
  // =========================================================================
  const petalsCanvas = document.getElementById('petalsCanvas');
  let petalsCtx = null;
  let petals = [];
  let isPetalsActive = false;
  let petalAnimationId = null;

  if (petalsCanvas) {
    petalsCtx = petalsCanvas.getContext('2d');
    resizePetalsCanvas();
    window.addEventListener('resize', resizePetalsCanvas);
    // Petals will smoothly start once invitation code is verified
  }

  function resizePetalsCanvas() {
    if (petalsCanvas) {
      petalsCanvas.width = window.innerWidth;
      petalsCanvas.height = window.innerHeight;
    }
  }

  function createInitialPetals() {
    // Akshata (Sacred consecrated rice grains in Turmeric Yellow and Kumkuma Red)
    const count = window.innerWidth < 600 ? 26 : 42;
    petals = [];

    // Sacred Yellow Turmeric (Arashina) & Deep Vermilion Red (Kunkuma)
    const turmericShades = ['#FFC400', '#F5A623', '#FFD13B', '#E59500'];
    const kunkumaShades = ['#C41829', '#B31224', '#D62839', '#960F1E'];

    for (let i = 0; i < count; i++) {
      const isTurmeric = Math.random() > 0.5;
      const palette = isTurmeric ? turmericShades : kunkumaShades;
      const chosenColor = palette[Math.floor(Math.random() * palette.length)];

      // Rice grain dimensions: slender & tapered (length ~ 11-15px, width ~ 3.2-4.2px)
      const grainLen = Math.random() * 4 + 11;
      const grainWidth = Math.random() * 0.9 + 3.2;

      petals.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        length: grainLen,
        width: grainWidth,
        speedX: Math.random() * 1.2 - 0.6,
        speedY: Math.random() * 1.4 + 1.2, // rice falls gently with gravity
        angle: Math.random() * 360,
        spin: Math.random() * 2.5 - 1.25,
        color: chosenColor,
        opacity: Math.random() * 0.3 + 0.7
      });
    }
  }

  function animatePetals() {
    if (!petalsCtx || !isPetalsActive) return;
    petalsCtx.clearRect(0, 0, petalsCanvas.width, petalsCanvas.height);

    petals.forEach(p => {
      p.x += p.speedX + Math.sin(p.angle * Math.PI / 180) * 0.4;
      p.y += p.speedY;
      p.angle += p.spin;

      if (p.y > petalsCanvas.height + 25) {
        p.y = -25;
        p.x = Math.random() * petalsCanvas.width;
      }

      petalsCtx.save();
      petalsCtx.translate(p.x, p.y);
      petalsCtx.rotate(p.angle * Math.PI / 180);

      // 3D tumbling flutter effect (rice grains turning in air)
      const scaleX = Math.cos(p.angle * Math.PI / 180) * 0.35 + 0.65;
      petalsCtx.scale(scaleX, 1);

      petalsCtx.fillStyle = p.color;
      petalsCtx.globalAlpha = p.opacity;

      // Draw authentic tapered slender rice grain (ಅಕ್ಷತೆ ಕಾಳು)
      const hl = p.length / 2;
      const hw = p.width / 2;
      petalsCtx.beginPath();
      petalsCtx.moveTo(-hl, 0); // pointed tip left
      petalsCtx.quadraticCurveTo(0, -hw, hl, 0); // curved belly top to right tip
      petalsCtx.quadraticCurveTo(0, hw, -hl, 0); // curved belly bottom to left tip
      petalsCtx.closePath();
      petalsCtx.fill();

      petalsCtx.restore();
    });

    petalAnimationId = requestAnimationFrame(animatePetals);
  }

  function smoothlyStopPetals() {
    if (!petalsCanvas) return;
    // Fade out the falling petals smoothly over 1.4 seconds
    gsap.to(petalsCanvas, {
      opacity: 0,
      duration: 1.4,
      ease: 'power2.out',
      onComplete: () => {
        isPetalsActive = false;
        if (petalAnimationId) cancelAnimationFrame(petalAnimationId);
        if (petalsCtx) petalsCtx.clearRect(0, 0, petalsCanvas.width, petalsCanvas.height);
      }
    });
  }

  function smoothlyStartPetals() {
    if (!petalsCanvas) return;
    if (isPetalsActive) return;
    isPetalsActive = true;
    createInitialPetals();
    animatePetals();
    gsap.to(petalsCanvas, {
      opacity: 1,
      duration: 1.0,
      ease: 'power2.in'
    });
  }

  function burstCelebrationPetals() {
    if (window.confetti) {
      window.confetti({
        particleCount: 55,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#FFC400', '#C41829', '#F5A623', '#B31224', '#FFE052']
      });
    }
  }

  const petalsBtn = document.getElementById('petalsToggleBtn');
  if (petalsBtn) {
    petalsBtn.addEventListener('click', () => {
      burstCelebrationPetals();
    });
  }

  // =========================================================================
  // 8. ADD TO CALENDAR (GOOGLE CALENDAR & .ICS DOWNLOAD)
  // =========================================================================
  const calendarBtn = document.getElementById('calendarBtn');
  if (calendarBtn) {
    calendarBtn.addEventListener('click', () => {
      trackEvent('add_to_calendar');
      // Event Details
      const title = encodeURIComponent("Wedding: Sriraksha K R & Pannaga V Bhat");
      const details = encodeURIComponent("Wedding ceremony of Sriraksha K R and Pannaga V Bhat.\n\nAuspicious Muhurtham: 8:35 AM.\nVenue: Gayathri Mandira, Thirthahalli.");
      const location = encodeURIComponent("Gayathri Mandira, Thirthahalli, Karnataka");

      // Dec 6, 2026, 08:35 AM IST = 03:05 AM UTC
      const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261206T030500Z/20261206T083000Z&details=${details}&location=${location}&sf=true&output=xml`;

      // Also generate .ics file for Apple Calendar / Outlook
      const icsData = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Sriraksha & Pannaga Wedding//EN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "BEGIN:VEVENT",
        "UID:wedding-sriraksha-pannaga-20261206",
        "SUMMARY:Wedding of Sriraksha K R & Pannaga V Bhat",
        "DESCRIPTION:Wedding ceremony with Auspicious Muhurtham at 8:35 AM at Gayathri Mandira\\, Thirthahalli.",
        "LOCATION:Gayathri Mandira\\, Thirthahalli\\, Karnataka",
        "DTSTART:20261206T030500Z",
        "DTEND:20261206T083000Z",
        "STATUS:CONFIRMED",
        "END:VEVENT",
        "END:VCALENDAR"
      ].join("\r\n");

      const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.setAttribute('download', 'Sriraksha-Pannaga-Wedding.ics');
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      // Open Google Calendar in new tab
      window.open(gcalUrl, '_blank');
    });
  }

  // =========================================================================
  // 9. WHATSAPP RSVP / BLESSINGS BUTTON
  // =========================================================================
  const whatsappBtn = document.getElementById('whatsappBtn');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      const msg = encodeURIComponent(i18n[currentLang].whatsappMessage);
      const whatsappUrl = `https://api.whatsapp.com/send?text=${msg}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // =========================================================================
  // 10. PHOTO LIGHTBOX MODAL
  // =========================================================================
  window.openPhotoModal = function (src) {
    trackEvent('view_photo', { photo_src: src });
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImg');
    if (modal && modalImg) {
      modalImg.src = src;
      modal.classList.add('open');
    }
  };

  window.closePhotoModal = function () {
    const modal = document.getElementById('photoModal');
    if (modal) modal.classList.remove('open');
  };

  // =========================================================================
  // INITIALIZATION RUN (GATED BY GATEKEEPER VERIFIER)
  // =========================================================================
  updateLanguage('en');
  initVerifierAndLoad();

});
