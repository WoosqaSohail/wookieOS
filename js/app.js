/* =============================================================
   wookieOS  v.0.3  —  app.js
   Multi-window manager: open, focus, drag, minimize, close.
   ============================================================= */

(() => {
  'use strict';
  history.scrollRestoration = 'manual';

  /* ---------- Window definitions ---------- */
  const WINDOWS = {
    consultly: {
      chrome: 'browser', icon: '◐', label: 'consultly',
      title: 'consultly — case study',
      width: 960, height: 720,
      urlbar: 'woosqa.work/consultly',
      body: `
        <div class="cs-root" data-consultly>
          <div class="cs-viewport">
            <div class="cs-canvas">

              <!-- ========== HERO ========== -->
              <section class="cs-hero" data-cs-stage="hero">
                <img class="cs-hero-img" src="images/consultly/sec-hero.png" alt="Consultly hero — Case Study 2026, designed on Figma" draggable="false" />
                <div class="cs-hero-hint">
                  <span>scroll to explore</span>
                  <span class="cs-hero-hint-arrow">↓</span>
                </div>
              </section>

              <!-- ========== PROJECT INTRO ========== -->
              <section class="cs-intro" data-cs-stage="intro">
                <div class="cs-intro-row">
                  <div class="cs-intro-left">
                    <p class="cs-intro-label">PROJECT NAME</p>
                    <h1 class="cs-intro-title">Consultly</h1>
                  </div>
                  <p class="cs-intro-tagline">A multi-sided platform connecting users with verified experts through real-time paid consultations.</p>
                </div>
                <div class="cs-intro-tags">
                  <span class="cs-tag">iOS &amp; Android</span>
                  <span class="cs-tag">Web Dashboard</span>
                  <span class="cs-tag">Fintech Integration</span>
                </div>
              </section>

              <!-- ========== USER GOALS (HTML + phone PNG) ========== -->
              <section class="cs-goal" data-cs-stage="goal-user">
                <div class="cs-goal-row">
                  <div class="cs-goal-card">
                    <img src="images/consultly/phone-user.png" alt="" draggable="false" />
                  </div>
                  <div class="cs-goal-text">
                    <h2 class="cs-goal-title">User Goals<span class="cs-goal-dot">.</span></h2>
                    <ul class="cs-goal-list">
                      <li>Discover the right expert quickly</li>
                      <li>Book sessions with clear pricing and availability</li>
                      <li>Pay securely and confidently</li>
                      <li>Review experts after sessions</li>
                    </ul>
                  </div>
                </div>
              </section>

              <!-- ========== EXPERT GOALS ========== -->
              <section class="cs-goal" data-cs-stage="goal-expert">
                <div class="cs-goal-row cs-goal-row--reverse">
                  <div class="cs-goal-card">
                    <img src="images/consultly/phone-expert.png" alt="" draggable="false" />
                  </div>
                  <div class="cs-goal-text">
                    <h2 class="cs-goal-title">Expert Goals<span class="cs-goal-dot">.</span></h2>
                    <ul class="cs-goal-list">
                      <li>Simple onboarding and profile setup</li>
                      <li>Flexible availability and pricing control</li>
                      <li>Reliable payouts</li>
                      <li>Visibility and credibility through reviews</li>
                    </ul>
                  </div>
                </div>
              </section>

              <!-- ========== BUSINESS GOALS ========== -->
              <section class="cs-goal" data-cs-stage="goal-business">
                <div class="cs-goal-row">
                  <div class="cs-goal-card">
                    <img src="images/consultly/phone-business.png" alt="" draggable="false" />
                  </div>
                  <div class="cs-goal-text">
                    <h2 class="cs-goal-title">Business Goals<span class="cs-goal-dot">.</span></h2>
                    <ul class="cs-goal-list">
                      <li>Monetize through platform commission</li>
                      <li>Maintain content and expert quality</li>
                      <li>Enable admin oversight and reporting</li>
                      <li>Ensure security and regulatory compliance</li>
                    </ul>
                  </div>
                </div>
              </section>

              <!-- ========== APP ARCHITECTURE (HTML + per-pill PNGs) ========== -->
              <section class="cs-arch" data-cs-stage="arch">
                <div class="cs-arch-head">
                  <h2 class="cs-arch-title">Application Architecture<span class="cs-goal-dot">.</span></h2>
                  <p class="cs-arch-sub">High-level user flow and system structure.</p>
                </div>
                <div class="cs-arch-stage">
                  <svg class="cs-arch-lines" aria-hidden="true" preserveAspectRatio="none"></svg>
                  <div class="cs-arch-col cs-arch-col--left">
                    <div class="cs-arch-mod" data-cs-mod>
                      <ul class="cs-arch-list"><li>Login</li><li>Sign up</li><li>Forgot password</li><li>Email verification</li><li>Social login</li></ul>
                      <img class="cs-arch-pill" src="images/consultly/pill-registration.png" alt="Registration / Login" draggable="false" style="height:42px;width:auto" />
                    </div>
                    <div class="cs-arch-mod" data-cs-mod>
                      <ul class="cs-arch-list"><li>Browse experts</li><li>Search by name</li><li>Categories</li><li>Expert profile</li><li>Availability</li></ul>
                      <img class="cs-arch-pill" src="images/consultly/pill-discovery.png" alt="Expert Discovery" draggable="false" style="height:42px;width:auto" />
                    </div>
                    <div class="cs-arch-mod" data-cs-mod>
                      <ul class="cs-arch-list"><li>Select time slot</li><li>Session duration</li><li>Price breakdown</li><li>Instant booking</li><li>Reschedule</li></ul>
                      <img class="cs-arch-pill" src="images/consultly/pill-booking.png" alt="Booking & Scheduling" draggable="false" style="height:42px;width:auto" />
                    </div>
                    <div class="cs-arch-mod" data-cs-mod>
                      <ul class="cs-arch-list"><li>Payment auth</li><li>Stripe checkout</li><li>Payment success</li><li>Refunds</li><li>Platform commission</li></ul>
                      <img class="cs-arch-pill" src="images/consultly/pill-payments.png" alt="Payments & Billing" draggable="false" style="height:42px;width:auto" />
                    </div>
                    <div class="cs-arch-mod" data-cs-mod>
                      <ul class="cs-arch-list"><li>In-app video</li><li>Call timer</li><li>Mute / controls</li><li>End call</li></ul>
                      <img class="cs-arch-pill" src="images/consultly/pill-consultation.png" alt="Live Consultation" draggable="false" style="height:42px;width:auto" />
                    </div>
                  </div>
                  <img class="cs-arch-hub" src="images/consultly/pill-hub.png" alt="Consultly" draggable="false" style="height:80px;width:auto" />
                  <div class="cs-arch-col cs-arch-col--right">
                    <div class="cs-arch-mod" data-cs-mod>
                      <img class="cs-arch-pill" src="images/consultly/pill-profile.png" alt="User Profile" draggable="false" style="height:42px;width:auto" />
                      <ul class="cs-arch-list"><li>Personal details</li><li>Time zone setup</li><li>Payment methods</li><li>Notifications</li><li>Delete account</li></ul>
                    </div>
                    <div class="cs-arch-mod" data-cs-mod>
                      <img class="cs-arch-pill" src="images/consultly/pill-expertmode.png" alt="Expert Mode" draggable="false" style="height:42px;width:auto" />
                      <ul class="cs-arch-list"><li>Become an expert</li><li>Profile setup</li><li>Availability</li><li>Earnings</li><li>Payouts</li></ul>
                    </div>
                    <div class="cs-arch-mod" data-cs-mod>
                      <img class="cs-arch-pill" src="images/consultly/pill-reviews.png" alt="Reviews & Ratings" draggable="false" style="height:42px;width:auto" />
                      <ul class="cs-arch-list"><li>Post-call review</li><li>Star rating</li><li>Written feedback</li><li>View past reviews</li></ul>
                    </div>
                    <div class="cs-arch-mod" data-cs-mod>
                      <img class="cs-arch-pill" src="images/consultly/pill-notifications.png" alt="Notifications" draggable="false" style="height:42px;width:auto" />
                      <ul class="cs-arch-list"><li>Booking updates</li><li>Call reminders</li><li>Payment alerts</li><li>System notifications</li></ul>
                    </div>
                    <div class="cs-arch-mod" data-cs-mod>
                      <img class="cs-arch-pill" src="images/consultly/pill-admin.png" alt="Admin Dashboard" draggable="false" style="height:42px;width:auto" />
                      <ul class="cs-arch-list"><li>User management</li><li>Transactions</li><li>Reports</li><li>Content moderation</li><li>Platform settings</li></ul>
                    </div>
                  </div>
                </div>
              </section>

              <!-- ========== TYPOGRAPHY ========== -->
              <section class="cs-typo" data-cs-stage="typo">
                <h2 class="cs-typo-title">Typography<span class="cs-goal-dot">.</span></h2>
                <img class="cs-typo-img" src="images/consultly/sec-typo.svg" alt="Poppins — Regular, Medium, Semi bold, Bold" draggable="false" style="width:1020px;height:auto" />
              </section>

              <!-- ========== PHONE GALLERY + OUTRO (combined composite) ========== -->
              <section class="cs-gallery" data-cs-stage="gallery">
                <img class="cs-gallery-img" src="images/consultly/sec-gallery-outro.png" alt="Consultly app screens — thanks for watching!" draggable="false" />
              </section>

            </div>
          </div>
        </div>`
    },
    frenzly: {
      chrome: 'browser', icon: '◐', label: 'frenzly',
      title: 'frenzly — case study',
      width: 960, height: 720,
      urlbar: 'woosqa.work/frenzly',
      body: `
        <div class="fz-root" data-frenzly>
          <div class="fz-viewport">
            <div class="fz-canvas">

              <!-- ========== HERO (scroll-driven assembly) ========== -->
              <section class="fz-hero">
                <div class="fz-hero-sticky">
                  <div class="fz-hero-base"></div>
                  <div class="fz-hero-purple"></div>
                  <div class="fz-hero-title">FRENZLY</div>
                  <div class="fz-hero-stage">
                    <img class="fz-hero-mountains" src="images/frenzly/mountains.png" alt="" draggable="false" />
                    <img class="fz-hero-screen" src="images/frenzly/hero-screen.png" alt="" draggable="false" />
                  </div>
                  <header class="fz-hero-head">
                    <div class="fz-hero-tag">
                      <p class="fz-hero-tag-title">Case Study</p>
                      <p class="fz-hero-tag-year">2026</p>
                    </div>
                    <div class="fz-hero-design">
                      <span>Designed on</span>
                      <svg class="fz-figma-logo" viewBox="0 0 38 57" fill="none" aria-hidden="true">
                        <path d="M19 28.5C19 23.25 23.25 19 28.5 19S38 23.25 38 28.5 33.75 38 28.5 38 19 33.75 19 28.5Z" fill="#1ABCFE"/>
                        <path d="M0 47.5C0 42.25 4.25 38 9.5 38H19v9.5C19 52.75 14.75 57 9.5 57S0 52.75 0 47.5Z" fill="#0ACF83"/>
                        <path d="M19 0v19h9.5C33.75 19 38 14.75 38 9.5S33.75 0 28.5 0H19Z" fill="#FF7262"/>
                        <path d="M0 9.5C0 14.75 4.25 19 9.5 19H19V0H9.5C4.25 0 0 4.25 0 9.5Z" fill="#F24E1E"/>
                        <path d="M0 28.5C0 33.75 4.25 38 9.5 38H19V19H9.5C4.25 19 0 23.25 0 28.5Z" fill="#A259FF"/>
                      </svg>
                    </div>
                  </header>
                  <div class="fz-hero-mist fz-hero-mist--a"></div>
                  <div class="fz-hero-mist fz-hero-mist--b"></div>
                  <div class="fz-hero-flare"></div>
                  <div class="fz-hero-hint">
                    <span class="fz-hero-hint-text">scroll to explore</span>
                    <span class="fz-hero-hint-arrow">↓</span>
                  </div>
                </div>
              </section>

              <!-- ========== DARK SCROLLING SECTION ========== -->
              <div class="fz-dark">
                <div class="fz-blob fz-blob--1"></div>
                <div class="fz-blob fz-blob--2"></div>
                <div class="fz-blob fz-blob--3"></div>

                <!-- OVERVIEW -->
                <section class="fz-section fz-overview" data-fz-stage="overview">
                  <h2 class="fz-display">
                    <span class="fz-display-text">Overview</span><span class="fz-display-dot">.</span>
                  </h2>
                  <div class="fz-underline"></div>
                  <p class="fz-paragraph">Frenzly is a mobile-first language-learning app designed for users who want to master French in small daily steps. Combining gamification, structured courses, and interactive exercises, the app motivates learners with streaks, badges, and progress tracking.</p>
                </section>

                <!-- CHALLENGE & SOLUTION -->
                <section class="fz-section fz-cs" data-fz-stage="cs">
                  <h2 class="fz-display">
                    <span class="fz-display-text">THE CHALLENGE</span>
                    <span class="fz-display-amp">&amp;</span>
                    <span class="fz-display-text">SOLUTION</span><span class="fz-display-dot">.</span>
                  </h2>
                  <div class="fz-underline"></div>
                  <div class="fz-cs-grid">

                    <div class="fz-cs-col fz-cs-col--problems">
                      <div class="fz-cs-head">
                        <div class="fz-cs-icon fz-cs-icon--problem">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                        </div>
                        <h3 class="fz-cs-head-text">The Pain Points</h3>
                      </div>
                      <article class="fz-card fz-card--problem" data-fz-slide="left">
                        <span class="fz-card-bar"></span>
                        <h4 class="fz-card-title">The Motivation Gap</h4>
                        <p class="fz-card-text">Traditional textbooks are boring and lonely. Users drop out because learning feels like a chore rather than a game.</p>
                      </article>
                      <article class="fz-card fz-card--problem" data-fz-slide="left">
                        <span class="fz-card-bar"></span>
                        <h4 class="fz-card-title">The Confidence Barrier</h4>
                        <p class="fz-card-text">Beginners feel overwhelmed by complex grammar immediately. The "fear of being wrong" stops them from speaking.</p>
                      </article>
                      <article class="fz-card fz-card--problem" data-fz-slide="left">
                        <span class="fz-card-bar"></span>
                        <h4 class="fz-card-title">Content Chaos</h4>
                        <p class="fz-card-text">Learning materials are scattered across YouTube, PDFs, and random sites. There is no clear path.</p>
                      </article>
                    </div>

                    <div class="fz-cs-col fz-cs-col--fix">
                      <div class="fz-cs-head">
                        <div class="fz-cs-icon fz-cs-icon--fix">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14a5 5 0 1 0-6.18 0c.51.4 1.09 1.16 1.09 2h4c0-.84.58-1.6 1.09-2Z"/></svg>
                        </div>
                        <h3 class="fz-cs-head-text">The Frenzly Fix</h3>
                      </div>
                      <article class="fz-card fz-card--fix" data-fz-slide="right">
                        <div class="fz-card-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
                        </div>
                        <div class="fz-card-body">
                          <h4 class="fz-card-title">Gamified Streaks</h4>
                          <p class="fz-card-text">Build habits with daily goals, streaks, and rewards. Addictive by design.</p>
                        </div>
                      </article>
                      <article class="fz-card fz-card--fix" data-fz-slide="right">
                        <div class="fz-card-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18l-4-2-4 2-4-2-4 2V4z"/><path d="M9 8h6"/><path d="M9 12h4"/></svg>
                        </div>
                        <div class="fz-card-body">
                          <h4 class="fz-card-title">Structured Modules</h4>
                          <p class="fz-card-text">Step-by-step path designed for progress. Know exactly what to learn next.</p>
                        </div>
                      </article>
                      <article class="fz-card fz-card--fix" data-fz-slide="right">
                        <div class="fz-card-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3v1a3 3 0 0 0-2 2.83V14a3 3 0 0 0 3 3 3 3 0 0 0 3 3 3 3 0 0 0 4 0 3 3 0 0 0 3-3 3 3 0 0 0 3-3v-1.17A3 3 0 0 0 18 10V9a3 3 0 0 0-3-3V5a3 3 0 0 0-3-3z"/><path d="M12 8v8"/><path d="M8.5 11.5h7"/></svg>
                        </div>
                        <div class="fz-card-body">
                          <h4 class="fz-card-title">Smart AI Teacher</h4>
                          <p class="fz-card-text">Instant feedback and personalized guidance 24/7. Your pocket tutor.</p>
                        </div>
                      </article>
                    </div>

                  </div>
                </section>

                <!-- TYPOGRAPHY -->
                <section class="fz-section fz-typo" data-fz-stage="typo">
                  <h2 class="fz-display">
                    <span class="fz-display-text">TYPOGRAPHY</span><span class="fz-display-dot">.</span>
                  </h2>
                  <div class="fz-underline"></div>
                  <div class="fz-typo-block">
                    <div class="fz-typo-aa-wrap">
                      <span class="fz-typo-aa">Aa</span>
                      <span class="fz-typo-label">Montserrat</span>
                    </div>
                    <div class="fz-typo-alphabet">
                      <p>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
                      <p class="fz-typo-numbers">1234567890!@#$%^&amp;*</p>
                    </div>
                  </div>
                  <div class="fz-typo-phones">
                    <div class="fz-typo-card fz-typo-card--plain">
                      <div class="fz-typo-phone-stage fz-typo-phone-stage--a">
                        <img class="fz-typo-phone-body fz-typo-phone-body--a" src="images/frenzly/phone1-main.png" alt="" draggable="false" />
                        <img class="fz-typo-phone-screen fz-typo-phone-screen--a" src="images/frenzly/phone1-screen.png" alt="" draggable="false" />
                      </div>
                    </div>
                    <div class="fz-typo-card fz-typo-card--purple">
                      <div class="fz-typo-phone-stage fz-typo-phone-stage--b">
                        <img class="fz-typo-phone-body fz-typo-phone-body--b" src="images/frenzly/phone2-stones.png" alt="" draggable="false" />
                        <img class="fz-typo-phone-screen fz-typo-phone-screen--b" src="images/frenzly/phone2-screen.png" alt="" draggable="false" />
                      </div>
                    </div>
                  </div>
                </section>

                <!-- SMART TEACHER AI -->
                <section class="fz-section fz-teacher" id="fz-teacher" data-fz-stage="teacher">
                  <div class="fz-teacher-grid">
                    <div class="fz-teacher-phone-col">
                      <div class="fz-teacher-sticky">
                        <div class="fz-teacher-phone-card">
                          <img class="fz-teacher-phone-img" src="images/frenzly/phone3-hand.png" alt="" draggable="false" />
                          <img class="fz-teacher-screen-img" src="images/frenzly/phone3-screen.png" alt="" draggable="false" />
                        </div>
                      </div>
                    </div>
                    <div class="fz-teacher-text-col">
                      <div class="fz-teacher-text">
                        <h2 class="fz-teacher-h">
                          <span class="fz-teacher-h-1">SMART</span>
                          <span class="fz-teacher-h-2">TEACHER AI</span>
                        </h2>
                        <h3 class="fz-teacher-sub">Your 24/7 Personal Tutor</h3>
                        <p class="fz-teacher-body">The Smart Teacher isn't just a chatbot. It's an intelligent AI companion that analyzes your weak points, corrects your conjugation in real-time, and simulates real-world conversations without the fear of judgment.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- OUTRO -->
                <section class="fz-outro" data-fz-stage="outro">
                  <h2 class="fz-outro-text">THAT'S ALL FOLKS!</h2>
                </section>
              </div>
            </div>
          </div>
        </div>`
    },
    storyloop: {
      chrome: 'browser', icon: '◐', label: 'storyloop',
      title: 'storyloop — case study',
      width: 1100, height: 760,
      urlbar: 'storyloop.work',
      body: `
        <div class="sl-root" data-storyloop data-mode="cover">
          <div class="sl-stage">

            <!-- ============ MODE 1 — COVER ============ -->
            <section class="sl-mode sl-mode--cover is-active" data-mode-pane="cover">
              <div class="sl-cover">
                <div class="sl-cover-bg" aria-hidden="true"></div>
                <div class="sl-cover-glow-top" aria-hidden="true"></div>
                <div class="sl-cover-glow-bot" aria-hidden="true"></div>

                <div class="sl-cover-topbar">
                  <div class="sl-wordmark">Storyloop</div>
                  <button class="sl-btn-primary sl-btn-primary--sm" data-sl-goto="landing" type="button">
                    explore the platform
                    <span aria-hidden="true">→</span>
                  </button>
                </div>

                <div class="sl-cover-headline">
                  <h1>Content Curation &amp; Storytelling Platform</h1>
                  <p>Storyloop is a curated scrollytelling platform that delivers immersive, long-form content through a visually engaging gallery and a streamlined admin dashboard for creating and managing featured stories.</p>
                </div>

                <div class="sl-cover-ipad">
                  <img src="images/storyloop/cover-ipad.png" alt="Storyloop reader landing on an iPad" draggable="false" />
                </div>
              </div>
            </section>

            <!-- ============ MODE 2 — READER LANDING ============ -->
            <section class="sl-mode sl-mode--landing" data-mode-pane="landing">
              <div class="sl-landing">
                <div class="sl-hero-block">
                  <div class="sl-hero-clusters" aria-hidden="true"></div>
                  <div class="sl-hero-glow" aria-hidden="true"></div>
                  <div class="sl-hero-fade" aria-hidden="true"></div>

                  <nav class="sl-nav">
                    <div class="sl-wordmark sl-wordmark--small">Storyloop</div>
                    <div class="sl-nav-right">
                      <button class="sl-nav-signin" data-sl-goto="signin" type="button">Sign in</button>
                      <button class="sl-nav-search" type="button" aria-label="Search">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                      </button>
                    </div>
                  </nav>

                  <header class="sl-hero">
                    <div class="sl-hero-inner">
                      <h1>Discover Stories That Scroll With You.</h1>
                      <p>Dive into visual narratives crafted by creators from the Storyloop ecosystem. Elegant, immersive, and endlessly scrollable.</p>
                      <button class="sl-btn-primary" data-sl-scroll-to="grid" type="button">
                        Explore Stories
                        <span aria-hidden="true">↓</span>
                      </button>
                    </div>
                  </header>
                </div>

                <div class="sl-filter-row" data-sl-grid-section>
                  <div class="sl-filter-tabs" role="tablist">
                    <button class="sl-filter-tab is-active" data-cat="all" type="button">All</button>
                    <button class="sl-filter-tab" data-cat="design" type="button">Design</button>
                    <button class="sl-filter-tab" data-cat="culture" type="button">Culture</button>
                    <button class="sl-filter-tab" data-cat="tech" type="button">Tech</button>
                    <button class="sl-filter-tab" data-cat="travel" type="button">Travel</button>
                    <button class="sl-filter-tab" data-cat="more" type="button">More</button>
                  </div>
                  <button class="sl-filter-search" type="button" aria-label="Search">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </button>
                </div>

                <div class="sl-grid">
                  <article class="sl-card" data-cat="design">
                    <div class="sl-card-thumb" style="background-image:url('images/consultly.png')"><span class="sl-card-cat">Design</span></div>
                    <h3 class="sl-card-title">Behind the Bezel: The Consultly Case</h3>
                    <p class="sl-card-byline">by Mira K. · 9 min read</p>
                  </article>
                  <article class="sl-card" data-cat="design">
                    <div class="sl-card-thumb" style="background-image:url('images/frenzly.png')"><span class="sl-card-cat">Design</span></div>
                    <h3 class="sl-card-title">From Frenzly to Fluent: A Language App's Story</h3>
                    <p class="sl-card-byline">by Hugo Vale · 7 min read</p>
                  </article>
                  <article class="sl-card" data-cat="more">
                    <div class="sl-card-thumb" style="background-image:url('images/storyloop.png')"><span class="sl-card-cat">Meta</span></div>
                    <h3 class="sl-card-title">Storyloop: Designing the Scroll</h3>
                    <p class="sl-card-byline">by the editors · 12 min read</p>
                  </article>
                  <article class="sl-card" data-cat="tech">
                    <div class="sl-card-thumb" style="background-image:url('images/storyloop/story-04.jpg')"><span class="sl-card-cat">Tech</span></div>
                    <h3 class="sl-card-title">The Quiet Death of the Mouse</h3>
                    <p class="sl-card-byline">by R. Tanaka · 6 min read</p>
                  </article>
                  <article class="sl-card" data-cat="culture">
                    <div class="sl-card-thumb" style="background-image:url('images/storyloop/story-05.jpg')"><span class="sl-card-cat">Culture</span></div>
                    <h3 class="sl-card-title">Why We Crave Long-Form Again</h3>
                    <p class="sl-card-byline">by Anika Sole · 10 min read</p>
                  </article>
                  <article class="sl-card" data-cat="culture">
                    <div class="sl-card-thumb" style="background-image:url('images/storyloop/story-06.jpg')"><span class="sl-card-cat">Culture</span></div>
                    <h3 class="sl-card-title">The Aesthetics of Permanence</h3>
                    <p class="sl-card-byline">by Lev Markov · 8 min read</p>
                  </article>
                  <article class="sl-card" data-cat="design">
                    <div class="sl-card-thumb" style="background-image:url('images/storyloop/story-07.jpg')"><span class="sl-card-cat">Design</span></div>
                    <h3 class="sl-card-title">What Brutalism Got Right</h3>
                    <p class="sl-card-byline">by Pia Renz · 7 min read</p>
                  </article>
                  <article class="sl-card" data-cat="tech">
                    <div class="sl-card-thumb" style="background-image:url('images/storyloop/story-08.jpg')"><span class="sl-card-cat">Tech</span></div>
                    <h3 class="sl-card-title">How Static Pages Won</h3>
                    <p class="sl-card-byline">by Devon Park · 11 min read</p>
                  </article>
                  <article class="sl-card" data-cat="travel">
                    <div class="sl-card-thumb" style="background-image:url('images/storyloop/story-09.jpg')"><span class="sl-card-cat">Travel</span></div>
                    <h3 class="sl-card-title">Notes from a Slow Train through Hokkaido</h3>
                    <p class="sl-card-byline">by Yuki Mori · 14 min read</p>
                  </article>
                  <article class="sl-card" data-cat="travel">
                    <div class="sl-card-thumb" style="background-image:url('images/storyloop/story-10.jpg')"><span class="sl-card-cat">Travel</span></div>
                    <h3 class="sl-card-title">Lisbon at the Edge of Sleep</h3>
                    <p class="sl-card-byline">by Inês Costa · 9 min read</p>
                  </article>
                  <article class="sl-card" data-cat="more">
                    <div class="sl-card-thumb" style="background-image:url('images/storyloop/story-11.jpg')"><span class="sl-card-cat">More</span></div>
                    <h3 class="sl-card-title">On Reading Without Optimizing</h3>
                    <p class="sl-card-byline">by Ada Wren · 13 min read</p>
                  </article>
                  <article class="sl-card" data-cat="tech">
                    <div class="sl-card-thumb" style="background-image:url('images/storyloop/story-12.jpg')"><span class="sl-card-cat">Tech</span></div>
                    <h3 class="sl-card-title">The Year We Forgot the Cursor</h3>
                    <p class="sl-card-byline">by Sami Ho · 8 min read</p>
                  </article>
                </div>

                <div class="sl-pagination" aria-label="Pagination (visual only)">
                  <button class="sl-page" type="button">‹</button>
                  <button class="sl-page is-active" type="button">1</button>
                  <button class="sl-page" type="button">2</button>
                  <button class="sl-page" type="button">3</button>
                  <button class="sl-page" type="button">›</button>
                </div>

                <footer class="sl-landing-footer">All rights reserved © 2026 · Storyloop</footer>
              </div>
            </section>

            <!-- ============ MODE 3 — ADMIN TOUR ============ -->
            <section class="sl-mode sl-mode--admin" data-mode-pane="admin">

              <!-- AUTH (fullscreen) -->
              <div class="sl-admin-auth-screen" data-step="signin">
                <div class="sl-auth-wrap">
                  <div class="sl-auth-brand">
                    <div class="sl-wordmark">Storyloop</div>
                  </div>
                  <form class="sl-auth-card" data-sl-form="signin">
                    <h2>Sign In</h2>
                    <p class="sl-auth-sub">Welcome back. Sign in to continue.</p>
                    <div class="sl-field">
                      <label for="sl-email">Email</label>
                      <input class="sl-input" id="sl-email" type="email" placeholder="johndoe@email.com" autocomplete="off" />
                    </div>
                    <div class="sl-field">
                      <label for="sl-pw">Password</label>
                      <input class="sl-input" id="sl-pw" type="password" placeholder="enter password (try 'wrong')" autocomplete="off" />
                    </div>
                    <div class="sl-auth-row">
                      <label class="sl-checkbox">
                        <input type="checkbox" />
                        <span>Keep me logged in</span>
                      </label>
                      <a data-sl-goto="reset">Forgot password?</a>
                    </div>
                    <button class="sl-auth-btn" type="submit">Sign In</button>
                  </form>
                </div>
              </div>

              <!-- APP SHELL -->
              <div class="sl-admin-shell" data-step="app" style="display:none;">
                <aside class="sl-sidebar">
                  <div class="sl-sidebar-brand">
                    Storyloop
                  </div>
                  <button class="sl-sidebar-item is-active" data-screen-target="dashboard" type="button">
                    <span class="sl-sidebar-item-glyph">▦</span><span>All Stories</span>
                  </button>
                  <button class="sl-sidebar-item" data-screen-target="addstory" type="button">
                    <span class="sl-sidebar-item-glyph">＋</span><span>Add New Story</span>
                  </button>
                  <button class="sl-sidebar-item" data-screen-target="featured" type="button">
                    <span class="sl-sidebar-item-glyph">★</span><span>Featured Stories</span>
                  </button>
                  <button class="sl-sidebar-item" data-screen-target="settings" type="button">
                    <span class="sl-sidebar-item-glyph">⚙</span><span>Settings &amp; Profile</span>
                  </button>
                  <div class="sl-sidebar-user">
                    <div class="sl-sidebar-avatar"></div>
                    <div class="sl-sidebar-user-info">
                      <div class="sl-sidebar-user-name">Wookie K.</div>
                      <div class="sl-sidebar-user-role">Admin</div>
                    </div>
                  </div>
                </aside>

                <main class="sl-content">
                  <div class="sl-topbar">
                    <div class="sl-topbar-title">
                      <h2 data-sl-screen-title>All Stories</h2>
                      <span class="sl-topbar-crumb" data-sl-screen-crumb>Manage all published, draft, and suspended stories.</span>
                    </div>
                  </div>

                  <!-- Dashboard / All Stories -->
                  <div class="sl-screen is-active" data-screen="dashboard">
                    <div class="sl-dash-actions">
                      <div class="sl-dash-search"><input type="text" placeholder="Search stories…" /></div>
                      <button class="sl-btn-primary" data-screen-target="addstory" type="button">＋ Add New Story</button>
                    </div>
                    <table class="sl-table">
                      <thead>
                        <tr><th>Title</th><th>Category</th><th>Author</th><th>Status</th><th>Created</th><th style="width:60px;"></th></tr>
                      </thead>
                      <tbody data-sl-stories-body>
                        <tr data-row-status="published">
                          <td>The Quiet Death of the Mouse</td><td>Tech</td><td>R. Tanaka</td>
                          <td><span class="sl-status sl-status--published">Published</span></td><td>May 14, 2026</td>
                          <td><div class="sl-row-actions"><button class="sl-row-actions-btn" type="button" data-sl-row-menu>⋮</button><div class="sl-row-menu"><button data-sl-row-action="publish" type="button">Publish</button><button data-sl-row-action="suspend" type="button">Suspend</button><button data-sl-row-action="delete" class="is-danger" type="button">Delete</button></div></div></td>
                        </tr>
                        <tr data-row-status="published">
                          <td>Notes from a Slow Train through Hokkaido</td><td>Travel</td><td>Yuki Mori</td>
                          <td><span class="sl-status sl-status--published">Published</span></td><td>May 11, 2026</td>
                          <td><div class="sl-row-actions"><button class="sl-row-actions-btn" type="button" data-sl-row-menu>⋮</button><div class="sl-row-menu"><button data-sl-row-action="publish" type="button">Publish</button><button data-sl-row-action="suspend" type="button">Suspend</button><button data-sl-row-action="delete" class="is-danger" type="button">Delete</button></div></div></td>
                        </tr>
                        <tr data-row-status="draft">
                          <td>What Brutalism Got Right</td><td>Design</td><td>Pia Renz</td>
                          <td><span class="sl-status sl-status--draft">Draft</span></td><td>May 09, 2026</td>
                          <td><div class="sl-row-actions"><button class="sl-row-actions-btn" type="button" data-sl-row-menu>⋮</button><div class="sl-row-menu"><button data-sl-row-action="publish" type="button">Publish</button><button data-sl-row-action="suspend" type="button">Suspend</button><button data-sl-row-action="delete" class="is-danger" type="button">Delete</button></div></div></td>
                        </tr>
                        <tr data-row-status="published">
                          <td>Why We Crave Long-Form Again</td><td>Culture</td><td>Anika Sole</td>
                          <td><span class="sl-status sl-status--published">Published</span></td><td>May 04, 2026</td>
                          <td><div class="sl-row-actions"><button class="sl-row-actions-btn" type="button" data-sl-row-menu>⋮</button><div class="sl-row-menu"><button data-sl-row-action="publish" type="button">Publish</button><button data-sl-row-action="suspend" type="button">Suspend</button><button data-sl-row-action="delete" class="is-danger" type="button">Delete</button></div></div></td>
                        </tr>
                        <tr data-row-status="suspended">
                          <td>The Year We Forgot the Cursor</td><td>Tech</td><td>Sami Ho</td>
                          <td><span class="sl-status sl-status--suspended">Suspended</span></td><td>Apr 27, 2026</td>
                          <td><div class="sl-row-actions"><button class="sl-row-actions-btn" type="button" data-sl-row-menu>⋮</button><div class="sl-row-menu"><button data-sl-row-action="publish" type="button">Publish</button><button data-sl-row-action="suspend" type="button">Suspend</button><button data-sl-row-action="delete" class="is-danger" type="button">Delete</button></div></div></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <!-- Add new story -->
                  <div class="sl-screen" data-screen="addstory">
                    <form class="sl-form" data-sl-form="addstory">
                      <div class="sl-field sl-form-full">
                        <label for="sl-story-title">Title</label>
                        <input class="sl-input" id="sl-story-title" type="text" placeholder="Give your story a headline…" required />
                      </div>
                      <div class="sl-field">
                        <label for="sl-story-cat">Category</label>
                        <select class="sl-select" id="sl-story-cat">
                          <option>Design</option><option>Culture</option><option>Tech</option><option>Travel</option><option>More</option>
                        </select>
                      </div>
                      <div class="sl-field">
                        <label for="sl-story-author">Author</label>
                        <input class="sl-input" id="sl-story-author" type="text" placeholder="e.g. Wookie K." />
                      </div>
                      <div class="sl-field sl-form-full">
                        <label>Thumbnail</label>
                        <label class="sl-upload" data-sl-upload>
                          <input type="file" accept="image/*" />
                          <svg class="sl-upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                          <div class="sl-upload-text"><strong>Click to upload</strong> or drag a file<br/><span style="opacity:0.6">PNG / JPG · 16:9 recommended</span></div>
                        </label>
                      </div>
                      <div class="sl-field sl-form-full">
                        <label for="sl-story-body">Story body</label>
                        <textarea class="sl-input" id="sl-story-body" placeholder="Write the long-form content here…"></textarea>
                      </div>
                      <div class="sl-form-actions">
                        <button class="sl-btn-ghost" type="button" data-screen-target="dashboard">Cancel</button>
                        <button class="sl-btn-ghost" type="button" data-sl-action="savedraft">Save as Draft</button>
                        <button class="sl-btn-primary" type="submit">Publish Story</button>
                      </div>
                    </form>
                  </div>

                  <!-- Featured stories (static placeholder) -->
                  <div class="sl-screen" data-screen="featured">
                    <div class="sl-static-screen">
                      <div class="sl-static-screen-glyph">★</div>
                      <h3>Featured Stories Manager</h3>
                      <p>Curate the homepage carousel: re-order, schedule publish windows, and preview the hero layout before pushing live. Static preview — try the Publish action below.</p>
                      <div style="display:flex;gap:10px;margin-top:10px;">
                        <button class="sl-btn-ghost" type="button" data-screen-target="dashboard">Back to Dashboard</button>
                        <button class="sl-btn-primary" type="button" data-sl-action="publish-featured">Publish Featured Story</button>
                      </div>
                      <div class="sl-static-screen-note">screen 5 of 6 · static demo</div>
                    </div>
                  </div>

                  <!-- Settings & Profile -->
                  <div class="sl-screen" data-screen="settings">
                    <div class="sl-settings-tabs">
                      <button class="sl-settings-tab is-active" type="button">Profile</button>
                      <button class="sl-settings-tab" type="button" disabled>Change Password</button>
                      <button class="sl-settings-tab" type="button" disabled>Edit Profile</button>
                    </div>
                    <form class="sl-form" data-sl-form="profile">
                      <div class="sl-profile-row sl-form-full">
                        <div class="sl-profile-avatar"></div>
                        <div>
                          <h3 class="sl-profile-meta-name">Wookie K.</h3>
                          <div class="sl-profile-meta-role">Admin · wookie@storyloop.work</div>
                        </div>
                      </div>
                      <div class="sl-field">
                        <label for="sl-profile-name">Display name</label>
                        <input class="sl-input" id="sl-profile-name" type="text" value="Wookie K." />
                      </div>
                      <div class="sl-field">
                        <label for="sl-profile-email">Email</label>
                        <input class="sl-input" id="sl-profile-email" type="email" value="wookie@storyloop.work" />
                      </div>
                      <div class="sl-field sl-form-full">
                        <label for="sl-profile-bio">Bio</label>
                        <textarea class="sl-input" id="sl-profile-bio" placeholder="A short bio for your author page…">Designer · editor · curator at Storyloop. I like long-form, slow scrolls, and the smell of a freshly compiled stylesheet.</textarea>
                      </div>
                      <div class="sl-form-actions">
                        <button class="sl-btn-primary" type="submit">Save Changes</button>
                      </div>
                    </form>
                  </div>
                </main>
              </div>

              <!-- DONE screen -->
              <div class="sl-admin-done-screen" data-step="done" style="display:none;">
                <div class="sl-done">
                  <div class="sl-done-glyph">✓</div>
                  <h2>That's the demo.</h2>
                  <p>You walked the full Storyloop flow — cover, reader landing, admin auth, dashboard, story authoring, and profile. Real HTML, real interactions. Thanks for clicking around.</p>
                  <div style="display:flex;gap:10px;">
                    <button class="sl-btn-ghost" type="button" data-sl-goto="cover">Back to Cover</button>
                    <button class="sl-btn-primary" type="button" data-screen-target="dashboard">Restart Admin Tour</button>
                  </div>
                </div>
              </div>

              <!-- MODALS -->
              <div class="sl-modal-backdrop" data-modal="login-warn">
                <div class="sl-modal">
                  <div class="sl-modal-icon sl-modal-icon--warning">!</div>
                  <h3>Couldn't sign you in</h3>
                  <p>That email or password doesn't match our records. Try again, or reset your password.</p>
                  <div class="sl-modal-actions">
                    <button class="sl-modal-btn sl-modal-btn--primary" type="button" data-sl-modal-close>Try again</button>
                  </div>
                </div>
              </div>

              <div class="sl-modal-backdrop" data-modal="publish-confirm">
                <div class="sl-modal">
                  <div class="sl-modal-icon sl-modal-icon--info">↑</div>
                  <h3>Publish this Story?</h3>
                  <p>It'll appear on the public reader landing immediately.</p>
                  <div class="sl-modal-actions">
                    <button class="sl-modal-btn sl-modal-btn--ghost" type="button" data-sl-modal-close>Cancel</button>
                    <button class="sl-modal-btn sl-modal-btn--primary" type="button" data-sl-modal-confirm="publish">Publish</button>
                  </div>
                </div>
              </div>

              <div class="sl-modal-backdrop" data-modal="suspend-confirm">
                <div class="sl-modal">
                  <div class="sl-modal-icon sl-modal-icon--warning">⏸</div>
                  <h3>Suspend this Story?</h3>
                  <p>It'll be hidden from the public reader landing but stay in your dashboard.</p>
                  <div class="sl-modal-actions">
                    <button class="sl-modal-btn sl-modal-btn--ghost" type="button" data-sl-modal-close>Cancel</button>
                    <button class="sl-modal-btn sl-modal-btn--primary" type="button" data-sl-modal-confirm="suspend">Suspend</button>
                  </div>
                </div>
              </div>

              <div class="sl-modal-backdrop" data-modal="delete-confirm">
                <div class="sl-modal">
                  <div class="sl-modal-icon sl-modal-icon--danger">✕</div>
                  <h3>Delete this Story?</h3>
                  <p>This can't be undone. The story and its analytics will be removed permanently.</p>
                  <div class="sl-modal-actions">
                    <button class="sl-modal-btn sl-modal-btn--ghost" type="button" data-sl-modal-close>Cancel</button>
                    <button class="sl-modal-btn sl-modal-btn--danger" type="button" data-sl-modal-confirm="delete">Delete</button>
                  </div>
                </div>
              </div>

              <!-- TOAST -->
              <div class="sl-toast" data-sl-toast>
                <span data-sl-toast-text>Saved.</span>
              </div>

            </section>

          </div>

          <!-- ============ FOOTER CHROME (admin only) ============ -->
          <div class="sl-chrome">
            <button class="sl-chrome-home" type="button" data-sl-goto="cover">← back to cover</button>
            <div class="sl-chrome-center">
              <span class="sl-chrome-indicator" data-sl-chrome-indicator>step 1 of 5</span>
            </div>
            <div style="display:flex;gap:8px;">
              <button class="sl-chrome-btn" type="button" data-sl-chrome="prev">‹ prev</button>
              <button class="sl-chrome-btn sl-chrome-btn--primary" type="button" data-sl-chrome="next">next ›</button>
            </div>
          </div>
        </div>`
    },
    wisdom: {
      chrome: 'wordpad', icon: '\u{1F4D6}', label: 'wisdom',
      title: 'wisdom.doc — WordPad',
      width: 820, height: 640,
      menubar: ['file', 'edit', 'view', 'format', 'help'],
      toolbar: '<span>📖 Wisdom Case Study</span><span class="toolbar-status">case-study.doc</span>',
      body: `
        <div class="wd-root">

          <!-- ========== COVER ========== -->
          <div class="wd-cover">
            <div class="wd-cover-tag">CASE STUDY · WIP · MAY 2026</div>
            <h1>Wisdom: The World of Emotions</h1>
            <p class="wd-cover-sub">Better Kids · Landing page rebuild, end-to-end</p>
          </div>

          <!-- ========== BRIEF ========== -->
          <div class="wd-section">
            <p class="wd-section-label">00 — The Brief</p>
            <h3 class="wd-section-title">Real product. Lost website.</h3>
            <p style="font-size:13px;margin:0 0 12px;">Better Kids makes Wisdom — an SEL game for kids 4–8 that <strong>actually works</strong>. Apple "App of the Day." 4 stars on Common Sense Media. HundrED-recognized. CASEL-aligned. Backed by a randomized controlled trial.</p>
            <p style="font-size:13px;margin:0 0 0;">Their site? A stock Shopify template, ten cramped screenshots, and a tagline you scroll past. The product earns trust. The site burns it.</p>
            <p class="wd-pull">Most landing-page work is fixing pixels. This was fixing the gap between what the product is and what the site says it is.</p>
          </div>

          <!-- ========== AUDIT ========== -->
          <div class="wd-section">
            <p class="wd-section-label">01 — The Audit</p>
            <h3 class="wd-section-title">What the old site got wrong.</h3>
            <ul class="wd-problem-list">
              <li class="wd-problem-item"><span class="wd-problem-icon">✗</span><span><strong>Generic Shopify template.</strong> No design system, no point of view.</span></li>
              <li class="wd-problem-item"><span class="wd-problem-icon">✗</span><span><strong>10-screenshot hero grid.</strong> Zero focal point. The eye bounces and bails.</span></li>
              <li class="wd-problem-item"><span class="wd-problem-icon">✗</span><span><strong>Credentials hidden below the fold.</strong> App of the Day, RCT, CASEL — all buried.</span></li>
              <li class="wd-problem-item"><span class="wd-problem-icon">✗</span><span><strong>Single funnel for two audiences.</strong> Parents and educators routed identically.</span></li>
              <li class="wd-problem-item"><span class="wd-problem-icon">✗</span><span><strong>Broken inner pages.</strong> /parents and /educators 404 from the nav.</span></li>
              <li class="wd-problem-item"><span class="wd-problem-icon">✗</span><span><strong>No motion, no rhythm, no story.</strong> Nothing earned the next scroll.</span></li>
            </ul>
            <div class="wd-screenshot">
              <img src="images/wisdom/before-hero.png" alt="Original betterkids.education hero" />
              <p class="wd-screenshot-caption">betterkids.education · captured May 2026</p>
            </div>
          </div>

          <!-- ========== RESEARCH ========== -->
          <div class="wd-section">
            <p class="wd-section-label">02 — The Research</p>
            <h3 class="wd-section-title">Pulled from the real product.</h3>
            <p style="font-size:13px;margin:0 0 14px;">Before designing anything I went hunting for what was already there. Trust badges from the actual brand owners, screenshots straight from the App Store, copy lifted from real parent and counselor reviews.</p>
            <div class="wd-badge-row">
              <span class="wd-badge"><span class="wd-badge-icon">🍎</span> Apple App of the Day</span>
              <span class="wd-badge"><span class="wd-badge-icon">⭐</span> 4★ Common Sense Media</span>
              <span class="wd-badge"><span class="wd-badge-icon">🌍</span> HundrED Innovation</span>
              <span class="wd-badge"><span class="wd-badge-icon">📚</span> CASEL-Aligned</span>
              <span class="wd-badge"><span class="wd-badge-icon">🧪</span> RCT-Validated</span>
            </div>
            <p style="font-size:12px;margin:14px 0 8px;color:#666;">Logos sourced from Wikimedia (Common Sense), each org's own CDN (CASEL, HundrED), and Apple's SVG marks. Screenshots pulled live from the iTunes lookup API. No mocks, no fakes.</p>
            <div class="wd-wip">
              <span class="wd-wip-tag">WIP</span>
              <div><strong>Heads up on the App Store screenshots —</strong> the ones currently in the marquee and the hero phone are pulled straight from the live App Store listing and they're, honestly, not great. Heavy text overlays, busy poster backgrounds, screenshot-of-a-screenshot framing. They're placeholders. Next pass on this case study: redo all ten screens as clean iPhone-native captures (or AI-regenerated) so the phone mockup actually sells the product instead of a 2018-era App Store poster.</div>
            </div>
          </div>

          <!-- ========== PALETTE ========== -->
          <div class="wd-section">
            <p class="wd-section-label">03 — The Palette</p>
            <h3 class="wd-section-title">Extracted from a hero image.</h3>
            <p style="font-size:13px;margin:0 0 8px;">First pass leaned all-green (pulled from Better Kids' brand). Felt monochrome. Pivoted: lifted a Gemini-generated hero illustration of the four kingdoms and pulled the palette from <em>that</em> — wine berries, golden sun, deep teal sky, rust-orange characters.</p>
            <div class="wd-palette">
              <div class="wd-swatch"><div class="wd-swatch-fill" style="background:#102C3A"></div><div class="wd-swatch-meta"><span class="wd-swatch-name">INK</span><span class="wd-swatch-hex">#102C3A</span></div></div>
              <div class="wd-swatch"><div class="wd-swatch-fill" style="background:#F4E9D2"></div><div class="wd-swatch-meta"><span class="wd-swatch-name">CREAM</span><span class="wd-swatch-hex">#F4E9D2</span></div></div>
              <div class="wd-swatch"><div class="wd-swatch-fill" style="background:#7A2E3F"></div><div class="wd-swatch-meta"><span class="wd-swatch-name">BERRY</span><span class="wd-swatch-hex">#7A2E3F</span></div></div>
              <div class="wd-swatch"><div class="wd-swatch-fill" style="background:#D26336"></div><div class="wd-swatch-meta"><span class="wd-swatch-name">RUST</span><span class="wd-swatch-hex">#D26336</span></div></div>
              <div class="wd-swatch"><div class="wd-swatch-fill" style="background:#F2C849"></div><div class="wd-swatch-meta"><span class="wd-swatch-name">GOLD</span><span class="wd-swatch-hex">#F2C849</span></div></div>
              <div class="wd-swatch"><div class="wd-swatch-fill" style="background:#2A6F7F"></div><div class="wd-swatch-meta"><span class="wd-swatch-name">TEAL</span><span class="wd-swatch-hex">#2A6F7F</span></div></div>
              <div class="wd-swatch"><div class="wd-swatch-fill" style="background:#133845"></div><div class="wd-swatch-meta"><span class="wd-swatch-name">TEAL-DEEP</span><span class="wd-swatch-hex">#133845</span></div></div>
              <div class="wd-swatch"><div class="wd-swatch-fill" style="background:#4D8A4A"></div><div class="wd-swatch-meta"><span class="wd-swatch-name">MOSS</span><span class="wd-swatch-hex">#4D8A4A</span></div></div>
            </div>
          </div>

          <!-- ========== DECISIONS ========== -->
          <div class="wd-section">
            <p class="wd-section-label">04 — Design Moves</p>
            <h3 class="wd-section-title">Six choices that did the heavy lifting.</h3>

            <div class="wd-decision">
              <div class="wd-decision-num">1</div>
              <div class="wd-decision-body">
                <h4>Editorial-brutalist, not toy-store.</h4>
                <p>Archivo display, DM Sans body, Space Mono accents. Hard 4px shadows on cards. Magazine-style numbered sections. Warm enough for kids, confident enough for school district buyers.</p>
              </div>
            </div>

            <div class="wd-decision">
              <div class="wd-decision-num">2</div>
              <div class="wd-decision-body">
                <h4>One hero image. One promise.</h4>
                <p>Replaced the 10-screenshot grid with a single painterly hero, headline highlighted with a rust marker mark, and the official App Store + Google Play badges side by side. No more scanning.</p>
              </div>
            </div>

            <div class="wd-decision">
              <div class="wd-decision-num">3</div>
              <div class="wd-decision-body">
                <h4>Phone mockup floating in the hero.</h4>
                <p>Pure-CSS iPhone frame, real App Store screenshot inside, gentle 6s float loop. Sells the product without needing a video.</p>
              </div>
            </div>

            <div class="wd-decision">
              <div class="wd-decision-num">4</div>
              <div class="wd-decision-body">
                <h4>Trust strip directly under the hero.</h4>
                <p>Real Apple / Common Sense / HundrED / CASEL marks on cream — no fakes, no text-only badges. First scroll-stop intentionally includes both hero <em>and</em> trust strip so visitors see the receipts before the pitch.</p>
              </div>
            </div>

            <div class="wd-decision">
              <div class="wd-decision-num">5</div>
              <div class="wd-decision-body">
                <h4>"Inside Wisdom" marquee.</h4>
                <p>All ten App Store screenshots in CSS phone frames, slow-scrolling left at 60s/cycle with edge mask fades. Pauses on hover. The product, in motion, without a single video tag.</p>
              </div>
            </div>

            <div class="wd-decision">
              <div class="wd-decision-num">6</div>
              <div class="wd-decision-body">
                <h4>Split the audience, split the CTA.</h4>
                <p>Rust panel for parents → free download. Ink panel for educators → request a demo. Each side gets its own eyebrow, list, and primary action. No more shared funnel.</p>
              </div>
            </div>
          </div>

          <!-- ========== MECHANICS ========== -->
          <div class="wd-section">
            <p class="wd-section-label">05 — Conversion Mechanics</p>
            <h3 class="wd-section-title">The JS that earns the next scroll.</h3>
            <div class="wd-mechanics">
              <div class="wd-mechanic"><span class="wd-mechanic-dot"></span><span><strong>Section-lock scroll.</strong>One wheel gesture = one section advance. 950ms cooldown. Each slide gets its moment.</span></div>
              <div class="wd-mechanic"><span class="wd-mechanic-dot"></span><span><strong>Free-zone reveal.</strong>Lock releases on the final CTA so the footer scrolls naturally. Re-engages on scroll-up.</span></div>
              <div class="wd-mechanic"><span class="wd-mechanic-dot"></span><span><strong>Sticky "Get the app".</strong>Pill appears after the hero, hides at the final CTA where it'd compete.</span></div>
              <div class="wd-mechanic"><span class="wd-mechanic-dot"></span><span><strong>Animated stat counters.</strong>300, 50, 4, 5 count up from zero with easeOutCubic when the row enters view.</span></div>
              <div class="wd-mechanic"><span class="wd-mechanic-dot"></span><span><strong>Exclusive FAQ accordion.</strong>Native <code>&lt;details name&gt;</code> keeps the slide height locked.</span></div>
              <div class="wd-mechanic"><span class="wd-mechanic-dot"></span><span><strong>Hash-strip on refresh.</strong><code>scrollRestoration='manual'</code> + replaceState — page always lands at top.</span></div>
            </div>
          </div>

          <!-- ========== STACK ========== -->
          <div class="wd-section">
            <p class="wd-section-label">06 — The Stack</p>
            <h3 class="wd-section-title">No framework. No build step.</h3>
            <p style="font-size:13px;margin:0 0 10px;">One HTML file. One inline stylesheet. One inline script. Loads instantly, runs offline, deploys anywhere.</p>
            <div class="wd-stack">
              <span class="wd-stack-chip">HTML</span>
              <span class="wd-stack-chip">CSS</span>
              <span class="wd-stack-chip">VANILLA JS</span>
              <span class="wd-stack-chip">INLINE SVG</span>
              <span class="wd-stack-chip">INTERSECTION OBSERVER</span>
              <span class="wd-stack-chip">CSS GRID</span>
              <span class="wd-stack-chip">SCROLL-SNAP-LITE</span>
              <span class="wd-stack-chip">PREFERS-REDUCED-MOTION</span>
            </div>
          </div>

          <!-- ========== COMPARISON ========== -->
          <div class="wd-section">
            <p class="wd-section-label">07 — Before / After</p>
            <h3 class="wd-section-title">Side by side.</h3>
            <div class="wd-comparison-grid">
              <div class="wd-comparison-card">
                <div class="wd-comparison-label wd-comparison-label--before">BEFORE</div>
                <img src="images/wisdom/before-hero.png" alt="Before — original Better Kids site" />
              </div>
              <div class="wd-comparison-card">
                <div class="wd-comparison-label wd-comparison-label--after">AFTER</div>
                <img src="images/wisdom/after-hero.png" alt="After — redesigned Wisdom site" />
              </div>
            </div>
          </div>

          <!-- ========== CTA ========== -->
          <div class="wd-cta-section">
            <p class="wd-cta-eyebrow">▸ THE REAL THING</p>
            <h3 class="wd-cta-title">Open the live redesign.</h3>
            <p class="wd-cta-sub">Hover, scroll, click. The mockup runs in your actual browser — section snap, animated stats, sticky CTA, the whole thing.</p>
            <button class="wd-cta-btn" type="button" data-wd-open>
              View the redesigned site
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>
            </button>
            <span class="wd-cta-domain">wisdom.html · opens in a new tab</span>
          </div>

          <!-- ========== FOOTER ========== -->
          <div class="wd-footer">
            <span>case study by <a href="#" data-app="contact">woosqa</a> · may 2026</span>
            <span>wisdom.doc · wookieOS</span>
          </div>

        </div>`
    },
    about: {
      chrome: 'notepad', icon: '✎', label: 'about.me', pinned: true,
      title: 'about.me — notepad',
      width: 480, height: 520,
      menubar: ['file', 'edit', 'format', 'view', 'help'],
      body: `
        <h2>// hi, i'm wookie</h2>
        <p><span class="notepad-tag">designer</span><span class="notepad-tag">illustrator</span><span class="notepad-tag">→ product</span></p>
        <p>i make things that are pretty <em>and</em> work. recent design grad, painting/illustration background, now pivoting toward shipping product design that engineers can actually build.</p>
        <p><strong>what i care about:</strong></p>
        <p>· figuring out <em>why</em> people don't convert before pushing pixels<br/>
        · designing with implementation in mind — components, states, real responsive thinking<br/>
        · building toward product management over the next few years</p>
        <p><strong>tools:</strong> figma · figma · also figma · pen + paper · increasingly, code</p>
        <p style="opacity: 0.55; font-size: 12px; margin-top: 24px;">[last saved 2026 · wookie]</p>
      `
    },
    contact: {
      chrome: 'mail', icon: '✉', label: 'contact', pinned: true,
      title: 'outlook express — mail',
      width: 520, height: 480,
      menubar: ['file', 'edit', 'view', 'help'],
      body: `
        <div class="mail-tabs">
          <button class="mail-tab active" data-mail-tab="compose" type="button">compose</button>
          <button class="mail-tab" data-mail-tab="inbox" type="button">inbox (3)</button>
        </div>
        <div class="mail-inbox" style="display:none">
          <div class="mail-row unread" data-mail-id="0">
            <div class="mail-row-head"><span class="mail-from">recruiter@designco.com</span><span class="mail-date">may 20</span></div>
            <span class="mail-subject">re: your portfolio</span>
          </div>
          <div class="mail-row unread" data-mail-id="1">
            <div class="mail-row-head"><span class="mail-from">niko@friends.net</span><span class="mail-date">may 18</span></div>
            <span class="mail-subject">weekend plans?</span>
          </div>
          <div class="mail-row" data-mail-id="2">
            <div class="mail-row-head"><span class="mail-from">system@wookieos</span><span class="mail-date">may 15</span></div>
            <span class="mail-subject">welcome to wookieOS</span>
          </div>
        </div>
        <div class="mail-read" style="display:none">
          <button class="mail-back" type="button">&larr; inbox</button>
          <div class="mail-read-head">
            <strong class="mail-read-from"></strong>
            <span class="mail-read-date"></span>
            <span class="mail-read-subject"></span>
          </div>
          <div class="mail-read-body"></div>
        </div>
        <div class="mail-compose">
          <div class="mail-compose-to"><strong>to:</strong> <a href="mailto:woosqa.sohail@gmail.com">woosqa.sohail@gmail.com</a></div>
          <div class="mail-compose-fields">
            <input type="text" class="mail-input" placeholder="your name" />
            <input type="email" class="mail-input" placeholder="your email" />
            <textarea class="mail-textarea" placeholder="write your message…"></textarea>
          </div>
          <div class="mail-compose-actions">
            <button class="mail-send" type="button">send &rarr;</button>
          </div>
          <div class="mail-sending" style="display:none">
            <div class="mail-sending-bar"><div class="mail-sending-fill"></div></div>
            <span>sending…</span>
          </div>
          <div class="mail-sent" style="display:none">
            <span class="mail-sent-icon" aria-hidden="true">&#9993;</span>
            <span>message sent.</span>
          </div>
        </div>
      `
    },
    trash: {
      chrome: 'trash', icon: '▤', label: 'trash',
      title: 'trash',
      width: 380, height: 240,
      body: `
        <h3>1 item</h3>
        <p>files i'm not opening back up.</p>
        <div class="trash-file">▢ illustrator-career-2018-2025.txt</div>
        <p style="margin-top: 16px; font-size: 12px; opacity: 0.55;">// empty? never. for the archive.</p>
      `
    },
    settings: {
      chrome: 'settings', icon: '⚙', label: 'settings',
      title: 'settings',
      width: 460, height: 520,
      body: `
        <div class="settings-pane">
          <section class="settings-section">
            <h3 class="settings-heading">wallpaper</h3>
            <div class="settings-swatches" id="settings-wallpapers"></div>
          </section>
          <section class="settings-section">
            <h3 class="settings-heading">accent color</h3>
            <div class="settings-swatches" id="settings-accents"></div>
          </section>
          <section class="settings-section">
            <h3 class="settings-heading">sticky note</h3>
            <div class="settings-swatches" id="settings-sticky"></div>
          </section>
          <section class="settings-section">
            <h3 class="settings-heading">display</h3>
            <div class="settings-row">
              <label class="settings-label" for="settings-crt">CRT scanlines</label>
              <input type="checkbox" id="settings-crt" checked />
            </div>
            <div class="settings-row">
              <label class="settings-label" for="settings-crt-int">intensity</label>
              <input type="range" id="settings-crt-int" min="0" max="100" value="55" />
            </div>
            <div class="settings-row">
              <label class="settings-label" for="settings-night-toggle">night light</label>
              <input type="checkbox" id="settings-night-toggle" />
            </div>
            <div class="settings-row">
              <label class="settings-label" for="settings-night">warmth</label>
              <input type="range" id="settings-night" min="5" max="40" value="22" />
            </div>
          </section>
          <section class="settings-section">
            <h3 class="settings-heading">system info</h3>
            <div class="settings-info">
              <div class="settings-info-row"><span>version</span><span>wookieOS v.0.3</span></div>
              <div class="settings-info-row"><span>user</span><span>visitor</span></div>
              <div class="settings-info-row"><span>resolution</span><span id="settings-res">--</span></div>
              <div class="settings-info-row"><span>uptime</span><span id="settings-uptime">0m 0s</span></div>
            </div>
          </section>
        </div>
      `
    },
    start: {
      chrome: 'start', icon: '★', label: 'menu', noTaskbar: true, noDrag: true,
      title: '',
      width: 260, height: 'auto',
      body: `
        <div class="start-profile">
          <span class="start-avatar">
            <svg viewBox="0 0 16 16" shape-rendering="crispEdges">
              <rect x="5" y="1" width="6" height="1" fill="#2A1B40"/>
              <rect x="4" y="2" width="8" height="1" fill="#2A1B40"/>
              <rect x="3" y="3" width="10" height="2" fill="#2A1B40"/>
              <rect x="10" y="2" width="1" height="2" fill="#9C7DF0"/>
              <rect x="3" y="4" width="3" height="2" fill="#2A1B40"/>
              <rect x="9" y="4" width="4" height="1" fill="#2A1B40"/>
              <rect x="4" y="5" width="8" height="6" fill="#F5D2DE"/>
              <rect x="3" y="5" width="1" height="6" fill="#2A1B40"/>
              <rect x="12" y="5" width="1" height="6" fill="#2A1B40"/>
              <rect x="5" y="7" width="2" height="1" fill="#1F1430"/>
              <rect x="9" y="7" width="2" height="1" fill="#1F1430"/>
              <rect x="5" y="7" width="1" height="1" fill="#FBF6E8"/>
              <rect x="9" y="7" width="1" height="1" fill="#FBF6E8"/>
              <rect x="4" y="8" width="2" height="1" fill="#FF7AA8" opacity="0.4"/>
              <rect x="10" y="8" width="2" height="1" fill="#FF7AA8" opacity="0.4"/>
              <rect x="7" y="9" width="2" height="1" fill="#E5BBC9"/>
              <rect x="7" y="11" width="2" height="1" fill="#FBF6E8"/>
              <rect x="3" y="11" width="4" height="1" fill="#9C7DF0"/>
              <rect x="9" y="11" width="4" height="1" fill="#9C7DF0"/>
              <rect x="2" y="12" width="12" height="2" fill="#9C7DF0"/>
              <rect x="2" y="13" width="12" height="1" fill="#6E4FCC"/>
            </svg>
          </span>
          <span class="start-profile-info">
            <span class="start-profile-name">wookie</span>
            <span class="start-profile-role">illustrator &rarr; product designer</span>
          </span>
        </div>
        <div class="start-divider"></div>
        <div class="start-section">
          <span class="start-section-label">// pinned</span>
          <button class="start-menu-item" data-jump="consultly"><span class="start-menu-glyph">◐</span>consultly</button>
          <button class="start-menu-item" data-jump="frenzly"><span class="start-menu-glyph">◐</span>frenzly</button>
          <button class="start-menu-item" data-jump="storyloop"><span class="start-menu-glyph">◐</span>storyloop</button>
          <button class="start-menu-item" data-jump="wisdom"><span class="start-menu-glyph">📖</span>wisdom</button>
        </div>
        <div class="start-divider"></div>
        <div class="start-section">
          <span class="start-section-label">// system</span>
          <button class="start-menu-item" data-jump="about"><span class="start-menu-glyph">✎</span>about.me</button>
          <button class="start-menu-item" data-jump="contact"><span class="start-menu-glyph">✉</span>contact</button>
        </div>
        <div class="start-footer">
          <span class="start-footer-line"></span>
          <button class="start-power" type="button" aria-label="Shutdown">
            <svg viewBox="0 0 8 10" shape-rendering="crispEdges">
              <rect x="3" y="0" width="2" height="3" fill="currentColor"/>
              <rect x="1" y="3" width="1" height="1" fill="currentColor"/>
              <rect x="6" y="3" width="1" height="1" fill="currentColor"/>
              <rect x="0" y="4" width="1" height="2" fill="currentColor"/>
              <rect x="7" y="4" width="1" height="2" fill="currentColor"/>
              <rect x="1" y="6" width="1" height="1" fill="currentColor"/>
              <rect x="6" y="6" width="1" height="1" fill="currentColor"/>
              <rect x="2" y="7" width="4" height="1" fill="currentColor"/>
            </svg>
          </button>
        </div>
      `
    }
  };

  /* ---------- Boot sequence: personality text + resource loader ---------- */
  (() => {
    const FLAVOR = [
      'caffeine level: adequate',
      'figma is open in another tab, probably',
      'mood: ship it energy',
      'fonts: loaded. patience: loading...',
      'initializing dusk.exe',
      'vibes: locally optimal',
      'calibrating aesthetic ... done',
      'one moment, applying gradient',
      'confidence.exe not found · continuing anyway',
      'panic mode: disabled for now',
      'compiling portfolio ... almost',
    ];
    const pick = () => FLAVOR[Math.floor(Math.random() * FLAVOR.length)];

    const lines = [
      'wookieOS v.0.3',
      'checking display.sys ... ok',
      'loading fonts ... dotgothic · vt323 · pixelify',
      pick(),
      'found: 1 designer · slightly caffeinated',
      'scanning portfolio ... 4 case studies · 1 sticky note',
      'trash: 1 item (not opening that back up)',
      'loading user: wookie',
      'ready.',
    ];

    // Personality text
    const container = document.getElementById('boot-lines');
    if (container) {
      const delays = [0.1, 0.3, 0.5, 0.7, 0.9, 1.1, 1.3, 1.5, 1.7];
      lines.forEach((text, i) => {
        const p = document.createElement('p');
        p.style.animationDelay = `${delays[i]}s`;
        if (i === lines.length - 1) {
          p.innerHTML = `&gt; <span class="boot-ok">${text}</span>`;
        } else if (i === 3) {
          p.innerHTML = `&gt; <span class="boot-flavor">${text}</span>`;
        } else {
          p.textContent = `> ${text}`;
        }
        container.appendChild(p);
      });
    }

    // Spinner + loading
    const pctEl = document.getElementById('boot-pct');
    const circleEl = document.getElementById('boot-spin-circle');
    const overlay = document.getElementById('boot-overlay');
    if (!pctEl || !circleEl || !overlay) return;

    const CIRCUMFERENCE = 2 * Math.PI * 16; // ~100.5
    let displayPct = 0;

    function setPct(pct) {
      pct = Math.min(100, Math.max(0, Math.round(pct)));
      displayPct = pct;
      pctEl.textContent = pct + '%';
      const offset = CIRCUMFERENCE - (CIRCUMFERENCE * pct / 100);
      circleEl.style.strokeDashoffset = offset;
    }

    function finish() {
      setPct(100);
      // Wait one frame after 100% so the browser paints the loaded backgrounds
      requestAnimationFrame(() => {
        setTimeout(() => overlay.classList.add('done'), 300);
      });
    }

    // Phase 1: mock progress while text plays out (2.5s)
    const MIN_DISPLAY = 2500;
    const mockInterval = setInterval(() => {
      if (displayPct < 45) setPct(displayPct + Math.random() * 8 + 2);
    }, 180);

    // Phase 2: real resource tracking
    let resLoaded = 0;
    const imgs = document.querySelectorAll('img');
    const preloadUrls = [
      'images/wallpaper-purple.jpg',
      'images/wallpaper-dusk.jpg',
      'images/consultly.png',
      'images/frenzly.png',
      'images/storyloop.png',
      // Consultly case-study assets
      'images/consultly/bg-master.png',
      'images/consultly/sec-hero.png',
      'images/consultly/phone-user.png',
      'images/consultly/phone-expert.png',
      'images/consultly/phone-business.png',
      'images/consultly/sec-typo.svg',
      'images/consultly/sec-gallery-outro.png',
      'images/consultly/pill-registration.png',
      'images/consultly/pill-discovery.png',
      'images/consultly/pill-booking.png',
      'images/consultly/pill-payments.png',
      'images/consultly/pill-consultation.png',
      'images/consultly/pill-profile.png',
      'images/consultly/pill-expertmode.png',
      'images/consultly/pill-reviews.png',
      'images/consultly/pill-notifications.png',
      'images/consultly/pill-admin.png',
      'images/consultly/pill-hub.png',
      // Storyloop case-study assets
      'images/storyloop/bg-cover.png',
      'images/storyloop/bg-auth-grid.png',
      'images/storyloop/landing-hero-clusters.png',
      'images/storyloop/cover-ipad.png',
      'images/storyloop/story-04.jpg',
      'images/storyloop/story-05.jpg',
      'images/storyloop/story-06.jpg',
      'images/storyloop/story-07.jpg',
      'images/storyloop/story-08.jpg',
      'images/storyloop/story-09.jpg',
      'images/storyloop/story-10.jpg',
      'images/storyloop/story-11.jpg',
      'images/storyloop/story-12.jpg',
    ];
    const resTotal = imgs.length + preloadUrls.length + 1;

    function onResource() {
      resLoaded++;
      // Map real loading to 45%–100% range (first 45% was mocked)
      const realPct = 45 + (resLoaded / resTotal) * 55;
      setPct(realPct);
      if (resLoaded >= resTotal) {
        clearInterval(mockInterval);
        const elapsed = Date.now() - bootStartTime;
        const wait = Math.max(0, MIN_DISPLAY - elapsed);
        setTimeout(finish, wait);
      }
    }

    const bootStartTime = Date.now();

    imgs.forEach(img => {
      if (img.complete) onResource();
      else { img.addEventListener('load', onResource); img.addEventListener('error', onResource); }
    });

    preloadUrls.forEach(src => {
      const im = new Image();
      im.addEventListener('load', onResource);
      im.addEventListener('error', onResource);
      im.src = src;
    });

    document.fonts.ready.then(onResource);

    // Safety: force done after 10s
    setTimeout(() => {
      if (!overlay.classList.contains('done')) {
        clearInterval(mockInterval);
        finish();
      }
    }, 10000);
  })();

  /* ---------- DOM refs ---------- */
  const stage = document.getElementById('window-stage');
  const taskbarWindowsEl = document.getElementById('taskbar-windows');
  const clockEl = document.getElementById('clock');

  /* ---------- Start menu footer lines ---------- */
  const FOOTER_LINES = [
    'uptime: 2h 14m',
    'playing: late night algebra',
    'mood: deadline mode',
    'weather: purple skies',
    'task: ship portfolio',
    'status: caffeinated',
    'vibes: dusk.exe',
    'loading: creative juices…',
    'entropy: locally optimal',
    'signal: strong',
  ];

  /* ---------- Fake emails for contact window ---------- */
  const EMAILS = [
    {
      from: 'recruiter@designco.com',
      subject: 're: your portfolio',
      date: 'may 20, 2026',
      body: `hey wookie,\n\nstumbled on your wookieOS portfolio and honestly? the consultly case study caught my eye. clean systems thinking, real interaction design, not just pretty mockups.\n\nwe're hiring product design interns at designco for fall 2026. the role is hybrid, pays well, and you'd be working on our consumer mobile app.\n\nwould love to chat this week if you're free.\n\ncheers,\nalex (they/them) · senior product designer`
    },
    {
      from: 'niko@friends.net',
      subject: 'weekend plans?',
      date: 'may 18, 2026',
      body: `yo!\n\ncoffee this saturday? that new place on 5th has matcha lattes and free wifi. bring your sketchbook.\n\nalso did you push the portfolio updates? i wanna see\n\n- n`
    },
    {
      from: 'system@wookieos',
      subject: 'welcome to wookieOS',
      date: 'may 15, 2026',
      body: `hello, wookie.\n\nwelcome to your desktop. your files are safe here.\n\na few reminders:\n· the best portfolios tell stories, not just show screens\n· case studies > gallery dumps\n· ship it before it's perfect\n· have fun\n\n— wookieOS v.0.2`
    }
  ];

  /* ---------- Settings data ---------- */
  const WALLPAPERS = {
    purple:  { label: 'purple haze', bg: "linear-gradient(180deg,rgba(20,8,38,.45) 0%,rgba(20,8,38,.15) 35%,transparent 65%,rgba(20,8,38,.35) 100%),url('images/wallpaper-purple.jpg') center/cover no-repeat", thumb: "url('images/wallpaper-purple.jpg') center/cover" },
    dusk:    { label: 'dusk',         bg: "linear-gradient(180deg,rgba(20,8,38,.45) 0%,rgba(20,8,38,.15) 35%,transparent 65%,rgba(20,8,38,.35) 100%),url('images/wallpaper-dusk.jpg') center/cover no-repeat", thumb: "url('images/wallpaper-dusk.jpg') center/cover" },
    void:    { label: 'void',         bg: 'radial-gradient(ellipse at 50% 40%,#2A1B40 0%,#150B22 100%)', thumb: 'radial-gradient(circle,#2A1B40,#150B22)' },
    plasma:  { label: 'plasma',       bg: 'linear-gradient(135deg,#1F1430 0%,#3D2A5C 30%,#2A1B40 60%,#150B22 100%)', thumb: 'linear-gradient(135deg,#3D2A5C,#150B22)' },
    acidwash:{ label: 'acid wash',    bg: 'linear-gradient(160deg,#150B22 0%,#1F1430 40%,rgba(198,240,44,.12) 80%,#150B22 100%)', thumb: 'linear-gradient(160deg,#1F1430,rgba(198,240,44,.12))' }
  };

  const ACCENTS = {
    lavender:{ label:'lavender', swatch:'#9C7DF0', vars:{ '--lav-100':'#EDE6FF','--lav-200':'#D7CBFA','--lav-400':'#9C7DF0','--lav-600':'#6E4FCC','--lav-glow':'rgba(156,125,240,.7)' }},
    pink:    { label:'sakura',   swatch:'#FF7AA8', vars:{ '--lav-100':'#FFD6E8','--lav-200':'#FFB8D4','--lav-400':'#FF7AA8','--lav-600':'#E84D82','--lav-glow':'rgba(255,122,168,.7)' }},
    teal:    { label:'teal',     swatch:'#7DC9B5', vars:{ '--lav-100':'#D4F0E8','--lav-200':'#A8DDCA','--lav-400':'#7DC9B5','--lav-600':'#4FA68F','--lav-glow':'rgba(125,201,181,.7)' }},
    acid:    { label:'acid',     swatch:'#C6F02C', vars:{ '--lav-100':'#F0FCD4','--lav-200':'#E0F8A0','--lav-400':'#C6F02C','--lav-600':'#9ABF10','--lav-glow':'rgba(198,240,44,.7)' }},
    cyan:    { label:'cyber',    swatch:'#5EE6FF', vars:{ '--lav-100':'#D4FAFF','--lav-200':'#A0F0FF','--lav-400':'#5EE6FF','--lav-600':'#20C4E0','--lav-glow':'rgba(94,230,255,.7)' }}
  };

  const STICKY_COLORS = {
    yellow:{ label:'lemon', swatch:'#F7EFD8', vars:{ '--paper':'#F7EFD8','--paper-line':'rgba(197,154,170,.35)' }},
    pink:  { label:'rose',  swatch:'#FFD6E8', vars:{ '--paper':'#FFD6E8','--paper-line':'rgba(200,120,150,.3)' }},
    blue:  { label:'sky',   swatch:'#D6ECFF', vars:{ '--paper':'#D6ECFF','--paper-line':'rgba(100,140,180,.3)' }},
    green: { label:'mint',  swatch:'#D6FFE8', vars:{ '--paper':'#D6FFE8','--paper-line':'rgba(100,180,140,.3)' }}
  };

  /* ---------- State ---------- */
  const openWindows = new Map();   // key → { el, btn, def, minimized }
  const pinnedButtons = new Map(); // key → btn element
  let zCounter = 200;
  let activeKey = null;
  let cascadeIndex = 0;
  const bootTime = Date.now();

  /* ---------- Load saved settings ---------- */
  const SAVED = (() => {
    try { return JSON.parse(localStorage.getItem('wookie-settings')) || {}; } catch { return {}; }
  })();
  let currentWallpaper = SAVED.wallpaper || 'purple';
  let currentAccent = SAVED.accent || 'lavender';
  let currentSticky = SAVED.sticky || 'yellow';
  let currentNightWarmth = SAVED.nightWarmth || 0;
  let currentCrtOn = SAVED.crtOn !== undefined ? SAVED.crtOn : true;
  let currentCrtIntensity = SAVED.crtIntensity || 55;

  function saveSettings() {
    localStorage.setItem('wookie-settings', JSON.stringify({
      wallpaper: currentWallpaper,
      accent: currentAccent,
      sticky: currentSticky,
      nightWarmth: currentNightWarmth,
      crtOn: currentCrtOn,
      crtIntensity: currentCrtIntensity
    }));
  }

  /* ---------- Settings apply functions ---------- */
  function applyWallpaper(key) {
    const wp = WALLPAPERS[key];
    if (!wp) return;
    const desktop = document.getElementById('desktop');
    const login = document.getElementById('login-screen');
    const mobile = document.querySelector('.mobile-view');
    if (desktop) desktop.style.background = wp.bg;
    if (login) login.style.background = `radial-gradient(ellipse at center,transparent 20%,rgba(20,8,38,.8) 100%),linear-gradient(180deg,rgba(20,8,38,.75) 0%,rgba(20,8,38,.5) 40%,rgba(20,8,38,.65) 100%),${wp.bg}`;
    if (mobile) mobile.style.background = `linear-gradient(180deg,rgba(20,8,38,.4) 0%,rgba(20,8,38,.65) 60%,#150B22 100%),${wp.bg}`;
    saveSettings();
  }

  function applyAccent(key) {
    const pal = ACCENTS[key];
    if (!pal) return;
    const root = document.documentElement;
    for (const [prop, val] of Object.entries(pal.vars)) root.style.setProperty(prop, val);
    saveSettings();
  }

  function applyStickyColor(key) {
    const pal = STICKY_COLORS[key];
    if (!pal) return;
    const root = document.documentElement;
    for (const [prop, val] of Object.entries(pal.vars)) root.style.setProperty(prop, val);
    saveSettings();
  }

  function applyNightLight(warmth) {
    if (warmth <= 0) {
      document.body.style.filter = '';
    } else {
      const brightness = Math.max(0.82, 1 - (warmth / 100) * 0.18);
      const saturate = 100 + (warmth / 40) * 10;
      document.body.style.filter = `sepia(${warmth}%) saturate(${saturate}%) brightness(${brightness})`;
    }
    saveSettings();
  }

  function applyCrtIntensity(val) {
    const scanlines = document.querySelector('.crt-scanlines');
    if (scanlines) scanlines.style.opacity = val / 100;
    currentCrtIntensity = val;
    saveSettings();
  }

  /* ---------- Restore saved settings ---------- */
  if (currentWallpaper !== 'purple') applyWallpaper(currentWallpaper);
  if (currentAccent !== 'lavender') applyAccent(currentAccent);
  if (currentSticky !== 'yellow') applyStickyColor(currentSticky);
  if (!currentCrtOn) document.body.classList.add('no-crt');
  applyCrtIntensity(currentCrtIntensity);
  if (currentNightWarmth > 0) applyNightLight(currentNightWarmth);

  /* ---------- Builders ---------- */
  function buildTitlebar(def) {
    return `
      <header class="window-titlebar">
        <span class="window-title-icon" aria-hidden="true">${def.icon}</span>
        <span class="window-title">${def.title}</span>
        <div class="window-controls">
          <button class="window-min" type="button" aria-label="Minimize">_</button>
          <button class="window-close" type="button" aria-label="Close">×</button>
        </div>
      </header>`;
  }

  function buildUrlbar(def) {
    if (!def.urlbar) return '';
    return `<div class="window-urlbar"><span class="urlbar-pill">${def.urlbar}</span></div>`;
  }

  function buildMenubar(def) {
    if (!def.menubar) return '';
    const items = def.menubar.map(m => `<span>${m}</span>`).join('');
    return `<div class="window-menubar">${items}</div>`;
  }

  function buildToolbar(def) {
    if (!def.toolbar) return '';
    return `<div class="window-toolbar">${def.toolbar}</div>`;
  }

  /* ---------- Open / focus / minimize / restore / close ---------- */
  function openWindow(key, triggerEl) {
    const def = WINDOWS[key];
    if (!def) return;

    // Already open → focus or restore
    if (openWindows.has(key)) {
      const entry = openWindows.get(key);
      if (entry.minimized) restoreWindow(key);
      else focusWindow(key);
      return;
    }

    // Create
    const win = document.createElement('section');
    win.className = `window window--${def.chrome}`;
    win.setAttribute('role', 'dialog');
    win.setAttribute('aria-label', def.title || key);
    win.dataset.windowKey = key;

    win.style.width = typeof def.width === 'number' ? `${def.width}px` : def.width;
    if (def.height) win.style.height = typeof def.height === 'number' ? `${def.height}px` : def.height;
    win.style.maxWidth = 'calc(100vw - 40px)';
    win.style.maxHeight = 'calc(100vh - 80px)';

    win.innerHTML = `
      ${def.chrome !== 'start' ? buildTitlebar(def) : ''}
      ${buildMenubar(def)}
      ${buildUrlbar(def)}
      ${buildToolbar(def)}
      <div class="window-body">${def.body}</div>
    `;

    positionWindow(win, def);
    stage.appendChild(win);

    // Taskbar button — reuse pinned button if one exists
    let btn = null;
    if (!def.noTaskbar) {
      if (pinnedButtons.has(key)) {
        btn = pinnedButtons.get(key);
      } else {
        btn = createTaskbarButton(key, def);
      }
    }

    // Wire close/min
    win.querySelector('.window-close')?.addEventListener('click', (e) => {
      e.stopPropagation();
      closeWindow(key);
    });
    win.querySelector('.window-min')?.addEventListener('click', (e) => {
      e.stopPropagation();
      minimizeWindow(key);
    });

    // Start-menu jump items
    win.querySelectorAll('[data-jump]').forEach(b => {
      b.addEventListener('click', () => {
        const target = b.dataset.jump;
        closeWindow(key);
        setTimeout(() => openWindow(target, b), 40);
      });
    });

    // Start-menu extras: random footer line + power button
    if (def.chrome === 'start') {
      const fl = win.querySelector('.start-footer-line');
      if (fl) fl.textContent = FOOTER_LINES[Math.floor(Math.random() * FOOTER_LINES.length)];
      const pw = win.querySelector('.start-power');
      if (pw) pw.addEventListener('click', () => {
        closeWindow(key);
        playShutdown();
      });
    }

    // Contact window: inbox / compose / read views
    if (key === 'contact') {
      const inbox = win.querySelector('.mail-inbox');
      const read = win.querySelector('.mail-read');
      const compose = win.querySelector('.mail-compose');
      const fields = compose.querySelector('.mail-compose-fields');
      const actions = compose.querySelector('.mail-compose-actions');
      const toLine = compose.querySelector('.mail-compose-to');
      const sending = compose.querySelector('.mail-sending');
      const sent = compose.querySelector('.mail-sent');

      // Tab switching
      win.querySelectorAll('.mail-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          win.querySelectorAll('.mail-tab').forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          const target = tab.dataset.mailTab;
          inbox.style.display = target === 'inbox' ? '' : 'none';
          read.style.display = 'none';
          compose.style.display = target === 'compose' ? 'flex' : 'none';
        });
      });

      // Email row click → read view
      win.querySelectorAll('.mail-row').forEach(row => {
        row.addEventListener('click', () => {
          const id = parseInt(row.dataset.mailId);
          const email = EMAILS[id];
          if (!email) return;
          row.classList.remove('unread');
          read.querySelector('.mail-read-from').textContent = email.from;
          read.querySelector('.mail-read-date').textContent = email.date;
          read.querySelector('.mail-read-subject').textContent = email.subject;
          read.querySelector('.mail-read-body').textContent = email.body;
          inbox.style.display = 'none';
          read.style.display = 'flex';
        });
      });

      // Back button
      read.querySelector('.mail-back').addEventListener('click', () => {
        read.style.display = 'none';
        inbox.style.display = '';
      });

      // Send button
      compose.querySelector('.mail-send').addEventListener('click', () => {
        const name = compose.querySelector('input[type="text"]').value.trim();
        const email = compose.querySelector('input[type="email"]').value.trim();
        const message = compose.querySelector('textarea').value.trim();
        if (!message) return;

        // Open mailto: with form data pre-filled
        const subject = encodeURIComponent(`portfolio inquiry — ${name || 'anonymous'}`);
        const body = encodeURIComponent(`${message}\n\n— ${name || ''}${email ? ` <${email}>` : ''}`);
        window.location.href = `mailto:woosqa.sohail@gmail.com?subject=${subject}&body=${body}`;

        // Play send animation
        fields.style.display = 'none';
        actions.style.display = 'none';
        toLine.style.display = 'none';
        sending.style.display = 'flex';
        // Force re-trigger the progress bar animation
        const fill = sending.querySelector('.mail-sending-fill');
        fill.style.animation = 'none';
        fill.offsetHeight;
        fill.style.animation = '';

        setTimeout(() => {
          sending.style.display = 'none';
          sent.style.display = 'flex';
          setTimeout(() => {
            // Switch back to inbox
            win.querySelector('.mail-tab[data-mail-tab="inbox"]').click();
            // Reset compose form
            fields.style.display = '';
            actions.style.display = '';
            toLine.style.display = '';
            sent.style.display = 'none';
            compose.querySelector('textarea').value = '';
            compose.querySelectorAll('input').forEach(i => i.value = '');
          }, 1500);
        }, 1500);
      });
    }

    /* ---- Wisdom CTA wiring ---- */
    if (key === 'wisdom') {
      win.querySelectorAll('[data-wd-open]').forEach(btn => {
        btn.addEventListener('click', () => {
          window.open('wisdom.html', '_blank', 'noopener');
        });
      });
      win.querySelectorAll('[data-app]').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const target = link.getAttribute('data-app');
          if (target) openWindow(target, link);
        });
      });
    }

    /* ---- Settings wiring ---- */
    if (key === 'settings') {
      // Populate wallpaper swatches
      const wpContainer = win.querySelector('#settings-wallpapers');
      Object.entries(WALLPAPERS).forEach(([k, wp]) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'settings-swatch' + (k === currentWallpaper ? ' active' : '');
        btn.style.background = wp.thumb;
        btn.setAttribute('aria-label', wp.label);
        const lbl = document.createElement('span');
        lbl.className = 'settings-swatch-label';
        lbl.textContent = wp.label;
        btn.appendChild(lbl);
        btn.addEventListener('click', () => {
          wpContainer.querySelectorAll('.settings-swatch').forEach(s => s.classList.remove('active'));
          btn.classList.add('active');
          currentWallpaper = k;
          applyWallpaper(k);
        });
        wpContainer.appendChild(btn);
      });

      // Populate accent swatches
      const accContainer = win.querySelector('#settings-accents');
      Object.entries(ACCENTS).forEach(([k, pal]) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'settings-swatch' + (k === currentAccent ? ' active' : '');
        btn.style.background = pal.swatch;
        btn.setAttribute('aria-label', pal.label);
        const lbl = document.createElement('span');
        lbl.className = 'settings-swatch-label';
        lbl.textContent = pal.label;
        btn.appendChild(lbl);
        btn.addEventListener('click', () => {
          accContainer.querySelectorAll('.settings-swatch').forEach(s => s.classList.remove('active'));
          btn.classList.add('active');
          currentAccent = k;
          applyAccent(k);
        });
        accContainer.appendChild(btn);
      });

      // Populate sticky color swatches
      const stkContainer = win.querySelector('#settings-sticky');
      Object.entries(STICKY_COLORS).forEach(([k, pal]) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'settings-swatch' + (k === currentSticky ? ' active' : '');
        btn.style.background = pal.swatch;
        btn.setAttribute('aria-label', pal.label);
        const lbl = document.createElement('span');
        lbl.className = 'settings-swatch-label';
        lbl.textContent = pal.label;
        btn.appendChild(lbl);
        btn.addEventListener('click', () => {
          stkContainer.querySelectorAll('.settings-swatch').forEach(s => s.classList.remove('active'));
          btn.classList.add('active');
          currentSticky = k;
          applyStickyColor(k);
        });
        stkContainer.appendChild(btn);
      });

      // CRT toggle + slider
      const crtCheck = win.querySelector('#settings-crt');
      const crtSlider = win.querySelector('#settings-crt-int');
      crtCheck.checked = currentCrtOn;
      crtSlider.value = currentCrtIntensity;
      crtSlider.disabled = !currentCrtOn;

      crtCheck.addEventListener('change', () => {
        currentCrtOn = crtCheck.checked;
        document.body.classList.toggle('no-crt', !currentCrtOn);
        crtSlider.disabled = !currentCrtOn;
        saveSettings();
        const qpBtn = document.getElementById('toggle-crt');
        if (qpBtn) qpBtn.classList.toggle('active', currentCrtOn);
      });
      crtSlider.addEventListener('input', () => {
        applyCrtIntensity(parseInt(crtSlider.value, 10));
      });

      // Night light toggle + slider
      const nightToggle = win.querySelector('#settings-night-toggle');
      const nightSlider = win.querySelector('#settings-night');
      nightToggle.checked = currentNightWarmth > 0;
      nightSlider.value = currentNightWarmth > 0 ? currentNightWarmth : 22;
      nightSlider.disabled = currentNightWarmth <= 0;

      nightToggle.addEventListener('change', () => {
        const on = nightToggle.checked;
        currentNightWarmth = on ? parseInt(nightSlider.value, 10) : 0;
        nightSlider.disabled = !on;
        applyNightLight(currentNightWarmth);
        const qpBtn = document.getElementById('toggle-night');
        if (qpBtn) qpBtn.classList.toggle('active', on);
      });
      nightSlider.addEventListener('input', () => {
        if (!nightToggle.checked) return;
        currentNightWarmth = parseInt(nightSlider.value, 10);
        applyNightLight(currentNightWarmth);
      });

      // System info
      const resEl = win.querySelector('#settings-res');
      if (resEl) resEl.textContent = `${window.innerWidth} x ${window.innerHeight}`;
      const uptimeEl = win.querySelector('#settings-uptime');
      if (uptimeEl) {
        const iv = setInterval(() => {
          if (!openWindows.has('settings')) { clearInterval(iv); return; }
          const s = Math.floor((Date.now() - bootTime) / 1000);
          const m = Math.floor(s / 60);
          const h = Math.floor(m / 60);
          uptimeEl.textContent = h > 0 ? `${h}h ${m % 60}m ${s % 60}s` : `${m}m ${s % 60}s`;
        }, 1000);
      }
    }

    // Frenzly case study: scale-to-fit canvas + scroll-driven animations
    if (key === 'frenzly') {
      const viewport = win.querySelector('.fz-viewport');
      const canvas = win.querySelector('.fz-canvas');
      const body = win.querySelector('.window-body');
      const CANVAS_W = 1440;
      let currentScale = 1;
      let lastFitW = 0;

      function fitCanvas() {
        const containerW = viewport.clientWidth || body.clientWidth;
        if (!containerW) return;
        // Skip if width hasn't meaningfully changed (prevents scroll-triggered reflows)
        if (Math.abs(containerW - lastFitW) < 1) return;
        lastFitW = containerW;
        currentScale = containerW / CANVAS_W;
        canvas.style.transform = `scale(${currentScale})`;
        canvas.style.width = `${CANVAS_W}px`;
        canvas.style.transformOrigin = 'top left';
        requestAnimationFrame(() => {
          const naturalH = canvas.offsetHeight;
          viewport.style.height = `${naturalH * currentScale}px`;
        });
      }

      fitCanvas();

      // Refit after all images load (heights change)
      const imgs = canvas.querySelectorAll('img');
      let pending = imgs.length;
      const onImg = () => { if (--pending <= 0) { lastFitW = 0; fitCanvas(); } };
      imgs.forEach(img => {
        if (img.complete) onImg();
        else { img.addEventListener('load', onImg); img.addEventListener('error', onImg); }
      });

      // Refit on window resize/drag (debounced)
      let resizeTimer;
      const ro = new ResizeObserver(() => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => { lastFitW = 0; fitCanvas(); }, 50);
      });
      ro.observe(body);

      // ============ SCROLL-LINKED ANIMATIONS ============
      const heroEl = canvas.querySelector('.fz-hero');
      const stageEls = canvas.querySelectorAll('[data-fz-stage]');

      const clamp01 = (v) => v < 0 ? 0 : v > 1 ? 1 : v;
      const remap = (v, a, b) => b === a ? 0 : clamp01((v - a) / (b - a));
      const easeOut = (x) => 1 - Math.pow(1 - x, 3);
      const easeInOut = (x) => x < 0.5 ? 4*x*x*x : 1 - Math.pow(-2*x+2, 3)/2;

      // Hero: wheel-driven scroll hijacking with lerp smoothing
      let heroTarget = 0;   // where scroll wants to go
      let heroCurrent = 0;  // where the animation actually is
      const HERO_ANIM_PX = 1800;
      const LERP = 0.09;    // smoothing factor (lower = smoother/slower catch-up)

      function applyHeroProgress(p) {
        if (!heroEl) return;
        heroEl.style.setProperty('--hp', p);
        heroEl.style.setProperty('--p-phone',    easeOut(remap(p, 0.00, 0.35)));
        heroEl.style.setProperty('--p-frenzly',  easeOut(remap(p, 0.25, 0.55)));
        heroEl.style.setProperty('--p-head',     easeOut(remap(p, 0.50, 0.75)));
        heroEl.style.setProperty('--p-settled',  easeInOut(remap(p, 0.70, 1.00)));
      }

      // rAF loop: smoothly interpolate current toward target
      let heroAnimRunning = false;
      function heroAnimLoop() {
        const diff = heroTarget - heroCurrent;
        if (Math.abs(diff) > 0.0005) {
          heroCurrent += diff * LERP;
          applyHeroProgress(heroCurrent);
          heroAnimRunning = true;
          requestAnimationFrame(heroAnimLoop);
        } else {
          heroCurrent = heroTarget;
          applyHeroProgress(heroCurrent);
          heroAnimRunning = false;
        }
      }
      function kickHeroAnim() {
        if (!heroAnimRunning) {
          heroAnimRunning = true;
          requestAnimationFrame(heroAnimLoop);
        }
      }
      applyHeroProgress(0);

      body.addEventListener('wheel', (e) => {
        const atTop = body.scrollTop <= 2;
        const dy = e.deltaY;

        if (atTop && heroTarget < 1 && dy > 0) {
          e.preventDefault();
          heroTarget = clamp01(heroTarget + dy / HERO_ANIM_PX);
          kickHeroAnim();
          return;
        }

        if (atTop && heroTarget > 0 && dy < 0) {
          e.preventDefault();
          heroTarget = clamp01(heroTarget + dy / HERO_ANIM_PX);
          kickHeroAnim();
          return;
        }
      }, { passive: false });

      // Mouse parallax on hero (only when settled)
      const heroStage = canvas.querySelector('.fz-hero-stage');
      let mxTarget = 0, myTarget = 0, mxCurrent = 0, myCurrent = 0;
      let parallaxRunning = false;

      heroEl.addEventListener('mousemove', (e) => {
        if (heroCurrent < 0.7) return; // only after mostly settled
        const rect = heroEl.getBoundingClientRect();
        // Normalized -1 to 1 from center
        mxTarget = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        myTarget = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        if (!parallaxRunning) {
          parallaxRunning = true;
          requestAnimationFrame(parallaxLoop);
        }
      });
      heroEl.addEventListener('mouseleave', () => {
        mxTarget = 0; myTarget = 0;
        if (!parallaxRunning) {
          parallaxRunning = true;
          requestAnimationFrame(parallaxLoop);
        }
      });

      function parallaxLoop() {
        const dx = mxTarget - mxCurrent;
        const dy = myTarget - myCurrent;
        if (Math.abs(dx) > 0.001 || Math.abs(dy) > 0.001) {
          mxCurrent += dx * 0.06;
          myCurrent += dy * 0.06;
          heroStage.style.setProperty('--mx', `${mxCurrent * 20}px`);
          heroStage.style.setProperty('--my', `${myCurrent * 14}px`);
          parallaxRunning = true;
          requestAnimationFrame(parallaxLoop);
        } else {
          mxCurrent = mxTarget;
          myCurrent = myTarget;
          heroStage.style.setProperty('--mx', `${mxCurrent * 20}px`);
          heroStage.style.setProperty('--my', `${myCurrent * 14}px`);
          parallaxRunning = false;
        }
      }

      // Dark sections: lerp-smoothed scroll reveals
      const sectionTargets = new Map();
      const sectionCurrents = new Map();
      let darkAnimRunning = false;

      function computeSectionTargets() {
        const bodyRect = body.getBoundingClientRect();
        const viewportH = body.clientHeight;
        stageEls.forEach(sec => {
          const r = sec.getBoundingClientRect();
          const topRel = r.top - bodyRect.top;
          const enterStart = viewportH * 0.95;
          const enterEnd   = viewportH * 0.25;
          const pEnter = easeOut(clamp01((enterStart - topRel) / (enterStart - enterEnd)));
          const exitStart = viewportH * 0.05;
          const exitEnd   = -r.height * 0.4;
          const pExit = easeInOut(clamp01((exitStart - topRel) / (exitStart - exitEnd)));
          const pVis = Math.max(0, Math.min(pEnter, 1 - pExit));
          sectionTargets.set(sec, { enter: pEnter, exit: pExit, vis: pVis });
          if (!sectionCurrents.has(sec)) sectionCurrents.set(sec, { enter: 0, exit: 0, vis: 0 });
        });
      }

      function darkAnimLoop() {
        let moving = false;
        sectionCurrents.forEach((cur, sec) => {
          const t = sectionTargets.get(sec);
          if (!t) return;
          const dl = 0.1;
          const de = t.enter - cur.enter;
          const dx = t.exit - cur.exit;
          const dv = t.vis - cur.vis;
          if (Math.abs(de) > 0.001 || Math.abs(dx) > 0.001 || Math.abs(dv) > 0.001) {
            cur.enter += de * dl;
            cur.exit += dx * dl;
            cur.vis += dv * dl;
            moving = true;
          } else {
            cur.enter = t.enter;
            cur.exit = t.exit;
            cur.vis = t.vis;
          }
          sec.style.setProperty('--p-enter', cur.enter);
          sec.style.setProperty('--p-exit', cur.exit);
          sec.style.setProperty('--p-vis', cur.vis);
        });
        if (moving) {
          darkAnimRunning = true;
          requestAnimationFrame(darkAnimLoop);
        } else {
          darkAnimRunning = false;
        }
      }

      function kickDarkAnim() {
        if (!darkAnimRunning) {
          darkAnimRunning = true;
          requestAnimationFrame(darkAnimLoop);
        }
      }

      let scrollRAF = null;
      body.addEventListener('scroll', () => {
        if (scrollRAF) return;
        scrollRAF = requestAnimationFrame(() => {
          computeSectionTargets();
          kickDarkAnim();
          scrollRAF = null;
        });
      }, { passive: true });
      computeSectionTargets();
      kickDarkAnim();
    }

    // Consultly case study: scale-to-fit canvas (Phase 1 — static, no scroll hijack yet)
    if (key === 'consultly') {
      const viewport = win.querySelector('.cs-viewport');
      const canvas = win.querySelector('.cs-canvas');
      const body = win.querySelector('.window-body');
      const CANVAS_W = 1440;
      let currentScale = 1;
      let lastFitW = 0;

      function fitCanvas() {
        const containerW = viewport.clientWidth || body.clientWidth;
        if (!containerW) return;
        if (Math.abs(containerW - lastFitW) < 1) return;
        lastFitW = containerW;
        currentScale = containerW / CANVAS_W;
        canvas.style.transform = `scale(${currentScale})`;
        canvas.style.width = `${CANVAS_W}px`;
        canvas.style.transformOrigin = 'top left';
        requestAnimationFrame(() => {
          const naturalH = canvas.offsetHeight;
          viewport.style.height = `${naturalH * currentScale}px`;
          drawArchLines();
        });
      }

      // Architecture: draw curved bezier paths from each module pill to the center hub
      function drawArchLines() {
        const svg = canvas.querySelector('.cs-arch-lines');
        const stage = canvas.querySelector('.cs-arch-stage');
        const hub = canvas.querySelector('.cs-arch-hub');
        if (!svg || !stage || !hub || !currentScale) return;
        const pills = canvas.querySelectorAll('.cs-arch-pill');
        if (!pills.length) return;

        const stageRect = stage.getBoundingClientRect();
        const hubRect = hub.getBoundingClientRect();
        const stageW = stageRect.width / currentScale;
        const stageH = stageRect.height / currentScale;
        svg.setAttribute('viewBox', `0 0 ${stageW} ${stageH}`);

        const pos = (r) => ({
          left:   (r.left   - stageRect.left) / currentScale,
          right:  (r.right  - stageRect.left) / currentScale,
          cx:     ((r.left + r.right) / 2 - stageRect.left) / currentScale,
          cy:     ((r.top + r.bottom) / 2 - stageRect.top)  / currentScale,
        });

        const hubP = pos(hubRect);
        let paths = '';
        pills.forEach(pill => {
          const p = pos(pill.getBoundingClientRect());
          const isLeft = p.cx < hubP.cx;
          const start = { x: isLeft ? p.right : p.left, y: p.cy };
          const end   = { x: isLeft ? hubP.left : hubP.right, y: hubP.cy };
          const dx = end.x - start.x;
          const dy = end.y - start.y;
          // Control points create a smooth S-curve that connects cleanly
          const cp1 = { x: start.x + dx * 0.4, y: start.y };
          const cp2 = { x: end.x - dx * 0.4, y: end.y };
          paths += `<path d="M ${start.x},${start.y} C ${cp1.x},${cp1.y} ${cp2.x},${cp2.y} ${end.x},${end.y}" />`;
        });
        svg.innerHTML = paths;
      }

      // ── Utility ──
      const clamp01 = v => v < 0 ? 0 : v > 1 ? 1 : v;
      const remap = (v, a, b) => b === a ? 0 : clamp01((v - a) / (b - a));
      const easeOut = x => 1 - Math.pow(1 - x, 3);
      const easeInOut = x => x < 0.5 ? 4*x*x*x : 1 - Math.pow(-2*x+2, 3)/2;

      // ── Hero scroll hijack ──
      const heroEl = canvas.querySelector('.cs-hero');
      const heroImg = canvas.querySelector('.cs-hero-img');
      const HERO_ANIM_PX = 1800;
      const LERP = 0.09;
      let heroTarget = 0;
      let heroCurrent = 0;
      let heroAnimRunning = false;

      function applyHeroProgress(p) {
        if (!heroEl) return;
        heroEl.style.setProperty('--hp', p);
        heroEl.style.setProperty('--p-phone',   easeOut(remap(p, 0.00, 0.35)));
        heroEl.style.setProperty('--p-settled',  easeInOut(remap(p, 0.70, 1.00)));
      }

      function heroAnimLoop() {
        const diff = heroTarget - heroCurrent;
        if (Math.abs(diff) > 0.0005) {
          heroCurrent += diff * LERP;
          applyHeroProgress(heroCurrent);
          heroAnimRunning = true;
          requestAnimationFrame(heroAnimLoop);
        } else {
          heroCurrent = heroTarget;
          applyHeroProgress(heroCurrent);
          heroAnimRunning = false;
        }
      }
      function kickHeroAnim() {
        if (!heroAnimRunning) {
          heroAnimRunning = true;
          requestAnimationFrame(heroAnimLoop);
        }
      }

      body.addEventListener('wheel', (e) => {
        const atTop = body.scrollTop <= 2;
        const dy = e.deltaY;
        if (atTop && heroTarget < 1 && dy > 0) {
          e.preventDefault();
          heroTarget = clamp01(heroTarget + dy / HERO_ANIM_PX);
          kickHeroAnim();
          return;
        }
        if (atTop && heroTarget > 0 && dy < 0) {
          e.preventDefault();
          heroTarget = clamp01(heroTarget + dy / HERO_ANIM_PX);
          kickHeroAnim();
          return;
        }
      }, { passive: false });

      // ── Mouse parallax on hero ──
      let mxTarget = 0, myTarget = 0, mxCurrent = 0, myCurrent = 0;
      let parallaxRunning = false;

      if (heroEl) {
        heroEl.addEventListener('mousemove', (e) => {
          if (heroCurrent < 0.7) return;
          const rect = heroEl.getBoundingClientRect();
          mxTarget = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
          myTarget = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
          if (!parallaxRunning) {
            parallaxRunning = true;
            requestAnimationFrame(parallaxLoop);
          }
        });
        heroEl.addEventListener('mouseleave', () => {
          mxTarget = 0; myTarget = 0;
          if (!parallaxRunning) {
            parallaxRunning = true;
            requestAnimationFrame(parallaxLoop);
          }
        });
      }

      function parallaxLoop() {
        const dx = mxTarget - mxCurrent;
        const dy = myTarget - myCurrent;
        if (Math.abs(dx) > 0.001 || Math.abs(dy) > 0.001) {
          mxCurrent += dx * 0.06;
          myCurrent += dy * 0.06;
          if (heroEl) {
            heroEl.style.setProperty('--mx', `${mxCurrent * 20}px`);
            heroEl.style.setProperty('--my', `${myCurrent * 14}px`);
          }
          parallaxRunning = true;
          requestAnimationFrame(parallaxLoop);
        } else {
          mxCurrent = mxTarget; myCurrent = myTarget;
          if (heroEl) {
            heroEl.style.setProperty('--mx', `${mxCurrent * 20}px`);
            heroEl.style.setProperty('--my', `${myCurrent * 14}px`);
          }
          parallaxRunning = false;
        }
      }

      // ── Section scroll reveals ──
      const stageEls = canvas.querySelectorAll('[data-cs-stage]:not([data-cs-stage="hero"])');
      const sectionTargets = new Map();
      const sectionCurrents = new Map();
      let darkAnimRunning = false;

      function computeSectionTargets() {
        const bodyRect = body.getBoundingClientRect();
        const viewportH = body.clientHeight;
        stageEls.forEach(sec => {
          const r = sec.getBoundingClientRect();
          const topRel = r.top - bodyRect.top;
          const enterStart = viewportH * 0.95;
          const enterEnd   = viewportH * 0.25;
          const pEnter = easeOut(clamp01((enterStart - topRel) / (enterStart - enterEnd)));
          const exitStart = viewportH * 0.05;
          const exitEnd   = -r.height * 0.4;
          const pExit = easeInOut(clamp01((exitStart - topRel) / (exitStart - exitEnd)));
          const pVis = Math.max(0, Math.min(pEnter, 1 - pExit));
          sectionTargets.set(sec, { enter: pEnter, exit: pExit, vis: pVis });
          if (!sectionCurrents.has(sec)) sectionCurrents.set(sec, { enter: 0, exit: 0, vis: 0 });
        });
      }

      function darkAnimLoop() {
        let moving = false;
        sectionCurrents.forEach((cur, sec) => {
          const t = sectionTargets.get(sec);
          if (!t) return;
          const dl = 0.1;
          const de = t.enter - cur.enter;
          const dx = t.exit - cur.exit;
          const dv = t.vis - cur.vis;
          if (Math.abs(de) > 0.001 || Math.abs(dx) > 0.001 || Math.abs(dv) > 0.001) {
            cur.enter += de * dl;
            cur.exit += dx * dl;
            cur.vis += dv * dl;
            moving = true;
          } else {
            cur.enter = t.enter; cur.exit = t.exit; cur.vis = t.vis;
          }
          sec.style.setProperty('--p-enter', cur.enter);
          sec.style.setProperty('--p-exit', cur.exit);
          sec.style.setProperty('--p-vis', cur.vis);
        });
        if (moving) {
          darkAnimRunning = true;
          requestAnimationFrame(darkAnimLoop);
        } else {
          darkAnimRunning = false;
        }
      }
      function kickDarkAnim() {
        if (!darkAnimRunning) {
          darkAnimRunning = true;
          requestAnimationFrame(darkAnimLoop);
        }
      }

      let scrollRAF = null;
      body.addEventListener('scroll', () => {
        if (scrollRAF) return;
        scrollRAF = requestAnimationFrame(() => {
          computeSectionTargets();
          kickDarkAnim();
          requestAnimationFrame(drawArchLines);
          scrollRAF = null;
        });
      }, { passive: true });

      // ── Init ──
      applyHeroProgress(0);
      fitCanvas();

      // Refit after all images load (heights change)
      const imgs = canvas.querySelectorAll('img');
      let pending = imgs.length;
      const onImg = () => {
        if (--pending <= 0) {
          lastFitW = 0;
          fitCanvas();
          computeSectionTargets();
          kickDarkAnim();
        }
      };
      imgs.forEach(img => {
        if (img.complete) onImg();
        else { img.addEventListener('load', onImg); img.addEventListener('error', onImg); }
      });

      // Refit on window resize/drag (debounced)
      let resizeTimer;
      const ro = new ResizeObserver(() => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          lastFitW = 0;
          fitCanvas();
          computeSectionTargets();
          kickDarkAnim();
        }, 50);
      });
      ro.observe(body);

      // Initial section computation
      computeSectionTargets();
      kickDarkAnim();
    }

    // Storyloop case study: three-mode interactive demo
    if (key === 'storyloop') {
      const root = win.querySelector('.sl-root');
      const urlPill = win.querySelector('.urlbar-pill');
      if (!root) { /* template missing */ }

      // Tour order inside admin mode
      const TOUR = ['signin', 'dashboard', 'addstory', 'featured', 'settings', 'done'];
      // Map admin step → URL hint
      const URL_MAP = {
        cover:    'storyloop.work',
        landing:  'storyloop.work',
        signin:   'app.storyloop.work/auth/sign-in',
        dashboard:'app.storyloop.work/admin/stories',
        addstory: 'app.storyloop.work/admin/stories/new',
        featured: 'app.storyloop.work/admin/featured',
        settings: 'app.storyloop.work/admin/settings',
        done:     'app.storyloop.work/admin/done',
      };

      let mode = 'cover';     // cover | landing | admin
      let adminStep = 'signin';

      const $$ = sel => root.querySelectorAll(sel);
      const $ = sel => root.querySelector(sel);

      function updateUrl(stepKey) {
        if (urlPill && URL_MAP[stepKey]) urlPill.textContent = URL_MAP[stepKey];
      }

      const entered = new Set();
      function setMode(next) {
        mode = next;
        root.dataset.mode = next;
        $$('.sl-mode').forEach(el => {
          el.classList.toggle('is-active', el.dataset.modePane === next);
          el.scrollTop = 0;
        });
        // First-time entrance: stagger the inside elements once
        if (!entered.has(next)) {
          entered.add(next);
          const pane = $(`.sl-mode[data-mode-pane="${next}"]`);
          if (pane) requestAnimationFrame(() => pane.classList.add('has-entered'));
        }
        if (next !== 'admin') updateUrl(next);
        else updateUrl(adminStep);
        updateChrome();
      }

      function setAdminStep(step) {
        if (!TOUR.includes(step)) return;
        adminStep = step;
        updateUrl(step);

        const auth = $('.sl-admin-auth-screen');
        const shell = $('.sl-admin-shell');
        const done = $('.sl-admin-done-screen');

        const inShell = step !== 'signin' && step !== 'done';
        auth.style.display = step === 'signin' ? '' : 'none';
        shell.style.display = inShell ? '' : 'none';
        done.style.display = step === 'done' ? '' : 'none';

        if (inShell) {
          $$('[data-screen]').forEach(s => s.classList.toggle('is-active', s.dataset.screen === step));
          $$('.sl-sidebar-item').forEach(item => {
            item.classList.toggle('is-active', item.dataset.screenTarget === step);
          });
          updateTopbar(step);
        }
        updateChrome();
      }

      function updateTopbar(step) {
        const titleEl = $('[data-sl-screen-title]');
        const crumbEl = $('[data-sl-screen-crumb]');
        const map = {
          dashboard: ['All Stories', 'Manage all published, draft, and suspended stories.'],
          addstory:  ['Add New Story', 'Author a new long-form piece for the reader landing.'],
          featured:  ['Featured Stories', 'Curate the homepage carousel.'],
          settings:  ['Settings & Profile', 'Account, preferences, and editor profile.'],
        };
        const entry = map[step];
        if (entry && titleEl && crumbEl) { titleEl.textContent = entry[0]; crumbEl.textContent = entry[1]; }
      }

      function updateChrome() {
        const indicator = $('[data-sl-chrome-indicator]');
        const prev = $('[data-sl-chrome="prev"]');
        const next = $('[data-sl-chrome="next"]');
        if (mode !== 'admin') return;
        const idx = TOUR.indexOf(adminStep);
        if (indicator) indicator.textContent = `step ${idx + 1} of ${TOUR.length}`;
        if (prev) prev.toggleAttribute('disabled', idx <= 0);
        if (next) {
          next.toggleAttribute('disabled', idx >= TOUR.length - 1);
          next.textContent = idx >= TOUR.length - 1 ? 'finished ›' : 'next ›';
        }
      }

      // ── Toast helper ──
      const toastEl = $('[data-sl-toast]');
      const toastTextEl = $('[data-sl-toast-text]');
      let toastTimer;
      function showToast(text, variant) {
        if (!toastEl) return;
        toastTextEl.textContent = text;
        toastEl.classList.remove('sl-toast--danger', 'sl-toast--warning');
        if (variant === 'danger') toastEl.classList.add('sl-toast--danger');
        if (variant === 'warning') toastEl.classList.add('sl-toast--warning');
        toastEl.classList.add('is-open');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toastEl.classList.remove('is-open'), 2400);
      }

      // ── Modal helpers ──
      function openModal(name) {
        const m = $(`[data-modal="${name}"]`);
        if (m) m.classList.add('is-open');
      }
      function closeModal(el) {
        if (!el) {
          $$('.sl-modal-backdrop.is-open').forEach(m => m.classList.remove('is-open'));
        } else {
          el.classList.remove('is-open');
        }
      }
      root.addEventListener('click', (e) => {
        if (e.target.matches('[data-sl-modal-close]')) {
          closeModal(e.target.closest('.sl-modal-backdrop'));
        }
        // backdrop click (outside the modal box)
        if (e.target.classList.contains('sl-modal-backdrop')) {
          closeModal(e.target);
        }
      });

      // ── Goto links (CTAs that jump between modes/steps) ──
      root.addEventListener('click', (e) => {
        const goto = e.target.closest('[data-sl-goto]');
        if (!goto) return;
        const target = goto.dataset.slGoto;
        if (target === 'cover') { adminStep = 'signin'; setMode('cover'); }
        else if (target === 'landing') { setMode('landing'); }
        else if (target === 'signin') { setMode('admin'); setAdminStep('signin'); }
        else if (target === 'reset') { showToast('Reset password flow — static screens only in this demo.', 'warning'); }
      });

      // ── Landing CTA → smooth-scroll to grid ──
      const heroBtn = $('[data-sl-scroll-to="grid"]');
      if (heroBtn) {
        heroBtn.addEventListener('click', () => {
          const section = $('[data-sl-grid-section]');
          const landing = $('.sl-mode--landing');
          if (section && landing) {
            const top = section.offsetTop - 12;
            landing.scrollTo({ top, behavior: 'smooth' });
          }
        });
      }

      // ── Landing category filter ──
      $$('.sl-filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          const cat = tab.dataset.cat;
          $$('.sl-filter-tab').forEach(t => t.classList.toggle('is-active', t === tab));
          $$('.sl-grid .sl-card').forEach(card => {
            const match = cat === 'all' || card.dataset.cat === cat;
            card.classList.toggle('is-hidden', !match);
          });
        });
      });

      // ── Sign-in form ──
      const signinForm = $('[data-sl-form="signin"]');
      if (signinForm) {
        signinForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const pw = $('#sl-pw').value;
          const email = $('#sl-email').value.trim();
          if (!email || pw === 'wrong') {
            openModal('login-warn');
            return;
          }
          showToast('Welcome back, Wookie.');
          setAdminStep('dashboard');
        });
      }

      // ── Sidebar navigation + cross-screen jump buttons ──
      root.addEventListener('click', (e) => {
        const t = e.target.closest('[data-screen-target]');
        if (!t) return;
        const next = t.dataset.screenTarget;
        if (mode !== 'admin') setMode('admin');
        setAdminStep(next);
      });

      // ── Row action dropdown menu ──
      root.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-sl-row-menu]');
        const insideMenu = e.target.closest('.sl-row-menu');
        // close other open menus
        if (!insideMenu) $$('.sl-row-menu.is-open').forEach(m => { if (m !== trigger?.nextElementSibling) m.classList.remove('is-open'); });
        if (trigger) {
          const menu = trigger.nextElementSibling;
          if (menu) menu.classList.toggle('is-open');
          e.stopPropagation();
        }
      });
      // close menus on outside click
      root.addEventListener('click', (e) => {
        if (!e.target.closest('.sl-row-actions')) {
          $$('.sl-row-menu.is-open').forEach(m => m.classList.remove('is-open'));
        }
      });

      // ── Row actions → modals ──
      let pendingRow = null;
      let pendingAction = null;
      root.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-sl-row-action]');
        if (!btn) return;
        const action = btn.dataset.slRowAction;
        pendingRow = btn.closest('tr');
        pendingAction = action;
        if (action === 'publish') openModal('publish-confirm');
        else if (action === 'suspend') openModal('suspend-confirm');
        else if (action === 'delete') openModal('delete-confirm');
        // close the dropdown
        $$('.sl-row-menu.is-open').forEach(m => m.classList.remove('is-open'));
      });

      // ── Modal confirms ──
      root.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-sl-modal-confirm]');
        if (!btn) return;
        const which = btn.dataset.slModalConfirm;
        if (!pendingRow) {
          // featured publish (no row)
          if (which === 'publish') showToast('Featured story published.');
          closeModal(btn.closest('.sl-modal-backdrop'));
          return;
        }
        if (which === 'publish') {
          const cell = pendingRow.children[3];
          if (cell) cell.innerHTML = '<span class="sl-status sl-status--published">Published</span>';
          pendingRow.dataset.rowStatus = 'published';
          showToast('Story published.');
        } else if (which === 'suspend') {
          const cell = pendingRow.children[3];
          if (cell) cell.innerHTML = '<span class="sl-status sl-status--suspended">Suspended</span>';
          pendingRow.dataset.rowStatus = 'suspended';
          showToast('Story suspended.', 'warning');
        } else if (which === 'delete') {
          pendingRow.style.transition = 'opacity 200ms ease, transform 200ms ease';
          pendingRow.style.opacity = '0';
          pendingRow.style.transform = 'translateX(-12px)';
          setTimeout(() => pendingRow.remove(), 220);
          showToast('Story deleted.', 'danger');
        }
        pendingRow = null;
        pendingAction = null;
        closeModal(btn.closest('.sl-modal-backdrop'));
      });

      // ── Featured publish button (static screen) ──
      root.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-sl-action="publish-featured"]');
        if (!btn) return;
        openModal('publish-confirm');
      });

      // ── Add-story form ──
      const addForm = $('[data-sl-form="addstory"]');
      if (addForm) {
        addForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const title = $('#sl-story-title').value.trim();
          if (!title) { showToast('Title is required.', 'warning'); return; }
          const cat = $('#sl-story-cat').value;
          const author = $('#sl-story-author').value.trim() || 'Wookie K.';
          // prepend a row to the dashboard table
          const tbody = $('[data-sl-stories-body]');
          if (tbody) {
            const tr = document.createElement('tr');
            tr.dataset.rowStatus = 'published';
            tr.innerHTML = `<td>${escapeHtml(title)}</td><td>${escapeHtml(cat)}</td><td>${escapeHtml(author)}</td><td><span class="sl-status sl-status--published">Published</span></td><td>just now</td><td><div class="sl-row-actions"><button class="sl-row-actions-btn" type="button" data-sl-row-menu>⋮</button><div class="sl-row-menu"><button data-sl-row-action="publish" type="button">Publish</button><button data-sl-row-action="suspend" type="button">Suspend</button><button data-sl-row-action="delete" class="is-danger" type="button">Delete</button></div></div></td>`;
            tbody.prepend(tr);
          }
          addForm.reset();
          const up = addForm.querySelector('.sl-upload');
          if (up) up.classList.remove('is-filled');
          showToast('Story published.');
          setAdminStep('dashboard');
        });
        addForm.querySelector('[data-sl-action="savedraft"]').addEventListener('click', () => {
          const title = $('#sl-story-title').value.trim();
          if (!title) { showToast('Title is required.', 'warning'); return; }
          const cat = $('#sl-story-cat').value;
          const author = $('#sl-story-author').value.trim() || 'Wookie K.';
          const tbody = $('[data-sl-stories-body]');
          if (tbody) {
            const tr = document.createElement('tr');
            tr.dataset.rowStatus = 'draft';
            tr.innerHTML = `<td>${escapeHtml(title)}</td><td>${escapeHtml(cat)}</td><td>${escapeHtml(author)}</td><td><span class="sl-status sl-status--draft">Draft</span></td><td>just now</td><td><div class="sl-row-actions"><button class="sl-row-actions-btn" type="button" data-sl-row-menu>⋮</button><div class="sl-row-menu"><button data-sl-row-action="publish" type="button">Publish</button><button data-sl-row-action="suspend" type="button">Suspend</button><button data-sl-row-action="delete" class="is-danger" type="button">Delete</button></div></div></td>`;
            tbody.prepend(tr);
          }
          addForm.reset();
          const up = addForm.querySelector('.sl-upload');
          if (up) up.classList.remove('is-filled');
          showToast('Draft saved.');
          setAdminStep('dashboard');
        });
        // File upload affordance
        const upload = addForm.querySelector('[data-sl-upload]');
        const fileInput = upload?.querySelector('input[type="file"]');
        if (fileInput) {
          fileInput.addEventListener('change', () => {
            const name = fileInput.files?.[0]?.name;
            if (name) {
              upload.classList.add('is-filled');
              upload.querySelector('.sl-upload-text').innerHTML = `<strong>${escapeHtml(name)}</strong> ready to upload<br/><span style="opacity:0.6">click to replace</span>`;
            }
          });
        }
      }

      // ── Profile save ──
      const profileForm = $('[data-sl-form="profile"]');
      if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
          e.preventDefault();
          showToast('Profile saved.');
        });
      }

      // ── Chrome prev/next ──
      $('[data-sl-chrome="prev"]')?.addEventListener('click', () => {
        const idx = TOUR.indexOf(adminStep);
        if (idx > 0) setAdminStep(TOUR[idx - 1]);
      });
      $('[data-sl-chrome="next"]')?.addEventListener('click', () => {
        const idx = TOUR.indexOf(adminStep);
        if (idx < TOUR.length - 1) setAdminStep(TOUR[idx + 1]);
      });

      // ── Helpers ──
      function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
      }

      // ── ESC closes any open modal or row menu ──
      function onKey(e) {
        if (e.key !== 'Escape') return;
        const open = root.querySelector('.sl-modal-backdrop.is-open');
        if (open) { closeModal(open); e.stopPropagation(); return; }
        const menu = root.querySelector('.sl-row-menu.is-open');
        if (menu) { menu.classList.remove('is-open'); e.stopPropagation(); }
      }
      document.addEventListener('keydown', onKey);
      // Cleanup when window is removed from DOM
      const cleanupObserver = new MutationObserver(() => {
        if (!document.body.contains(win)) {
          document.removeEventListener('keydown', onKey);
          cleanupObserver.disconnect();
        }
      });
      cleanupObserver.observe(stage, { childList: true });

      // ── Demo-only tooltip on inert search buttons ──
      $$('.sl-nav-search, .sl-filter-search').forEach(btn => {
        // ensure relative positioning context exists on the parent
        const host = btn.classList.contains('sl-nav-search') ? btn.parentElement : btn;
        host.style.position = host.style.position || 'relative';
        const hint = document.createElement('div');
        hint.className = 'sl-search-hint';
        hint.textContent = 'search is demo-only';
        host.appendChild(hint);
        let hintTimer;
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          hint.classList.add('is-open');
          clearTimeout(hintTimer);
          hintTimer = setTimeout(() => hint.classList.remove('is-open'), 1800);
        });
      });

      // Init: cover mode, fresh state
      setMode('cover');
    }

    // Focus on mousedown anywhere in window
    win.addEventListener('mousedown', () => focusWindow(key));

    // Enable drag if not a non-draggable chrome (start menu)
    if (!def.noDrag) enableDrag(win);

    openWindows.set(key, { el: win, btn, def, minimized: false });
    focusWindow(key);

    // Initial focus to close button for keyboard users
    requestAnimationFrame(() => {
      win.querySelector('.window-close')?.focus({ preventScroll: true });
    });
  }

  function focusWindow(key) {
    const entry = openWindows.get(key);
    if (!entry || entry.minimized) return;
    zCounter++;
    entry.el.style.zIndex = zCounter;

    // Visual states
    document.querySelectorAll('.window').forEach(w => w.classList.add('window--blurred'));
    entry.el.classList.remove('window--blurred');

    document.querySelectorAll('.tbar-btn, .tbar-pin').forEach(b => b.classList.remove('active'));
    if (entry.btn) entry.btn.classList.add('active');

    // Running dot on pinned buttons with open windows
    pinnedButtons.forEach((pinBtn, k) => {
      if (openWindows.has(k) && k !== key) pinBtn.classList.add('running');
      else pinBtn.classList.remove('running');
    });

    activeKey = key;
  }

  function minimizeWindow(key) {
    const entry = openWindows.get(key);
    if (!entry) return;
    entry.el.classList.add('window--minimized');
    entry.minimized = true;
    if (entry.btn) {
      entry.btn.classList.add('minimized');
      entry.btn.classList.remove('active');
      if (entry.def.pinned) entry.btn.classList.add('running');
    }
    if (activeKey === key) {
      activeKey = null;
      // Focus next-topmost
      let topKey = null, topZ = -1;
      openWindows.forEach((e, k) => {
        if (!e.minimized) {
          const z = parseInt(e.el.style.zIndex, 10) || 0;
          if (z > topZ) { topZ = z; topKey = k; }
        }
      });
      if (topKey) focusWindow(topKey);
    }
  }

  function restoreWindow(key) {
    const entry = openWindows.get(key);
    if (!entry) return;
    entry.el.classList.remove('window--minimized');
    entry.minimized = false;
    if (entry.btn) entry.btn.classList.remove('minimized');
    focusWindow(key);
  }

  function closeWindow(key) {
    const entry = openWindows.get(key);
    if (!entry) return;
    entry.el.classList.add('window--closing');
    entry.el.addEventListener('animationend', () => entry.el.remove(), { once: true });
    if (entry.btn) {
      if (entry.def.pinned) {
        entry.btn.classList.remove('active', 'minimized', 'running');
      } else {
        entry.btn.remove();
      }
    }
    openWindows.delete(key);
    if (activeKey === key) {
      activeKey = null;
      // Focus next-topmost
      let topKey = null, topZ = -1;
      openWindows.forEach((e, k) => {
        if (!e.minimized) {
          const z = parseInt(e.el.style.zIndex, 10) || 0;
          if (z > topZ) { topZ = z; topKey = k; }
        }
      });
      if (topKey) focusWindow(topKey);
    }
  }

  /* ---------- Positioning ---------- */
  function positionWindow(win, def) {
    const vw = window.innerWidth;
    const vh = window.innerHeight - 44;

    let w = parseInt(win.style.width, 10) || 480;
    let h = parseInt(win.style.height, 10) || 400;
    if (w > vw - 40) w = vw - 40;
    if (h > vh - 40) h = vh - 40;

    // Start menu pins above the start button, grows upward from taskbar
    if (def.chrome === 'start') {
      win.style.left = '8px';
      win.style.bottom = '52px';
      win.style.top = 'auto';
      return;
    }

    // Cascade subsequent windows
    const baseLeft = Math.round((vw - w) / 2);
    const baseTop  = Math.round(vh * 0.06);
    const offset   = (cascadeIndex % 6) * 28;
    cascadeIndex++;

    win.style.left = `${Math.max(20, baseLeft + offset - 80)}px`;
    win.style.top  = `${Math.max(36, baseTop + offset)}px`;
  }

  /* ---------- Dragging ---------- */
  function enableDrag(win) {
    const titlebar = win.querySelector('.window-titlebar');
    if (!titlebar) return;

    let dragging = false, offsetX = 0, offsetY = 0;

    titlebar.addEventListener('mousedown', (e) => {
      // Don't start drag on window controls (close, minimize)
      if (e.target.closest('.window-controls')) return;
      dragging = true;
      const rect = win.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      win.classList.add('window--dragging');
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      const rect = win.getBoundingClientRect();
      const w = rect.width, h = rect.height;
      const maxX = window.innerWidth - 60;
      const maxY = window.innerHeight - 44 - 24;
      let x = e.clientX - offsetX;
      let y = e.clientY - offsetY;
      // Allow drag mostly off-screen but keep title bar grabbable
      x = Math.max(-(w - 80), Math.min(maxX, x));
      y = Math.max(0, Math.min(maxY, y));
      win.style.left = `${x}px`;
      win.style.top  = `${y}px`;
    });

    document.addEventListener('mouseup', () => {
      if (dragging) {
        dragging = false;
        win.classList.remove('window--dragging');
      }
    });
  }

  /* ---------- Taskbar button ---------- */
  let tbarDragInfo = null;   // { btn, startX, key }
  let tbarWasDragged = false;

  function createTaskbarButton(key, def) {
    const btn = document.createElement('button');
    btn.className = 'tbar-btn';
    btn.type = 'button';
    btn.dataset.windowKey = key;
    btn.innerHTML = `
      <span class="tbar-btn-icon" aria-hidden="true">${def.icon || '▢'}</span>
      <span class="tbar-btn-label">${def.label || key}</span>
    `;

    btn.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      tbarDragInfo = { btn, startX: e.clientX, key };
      tbarWasDragged = false;
    });

    btn.addEventListener('click', () => {
      if (tbarWasDragged) { tbarWasDragged = false; return; }
      cancelPreview();
      const entry = openWindows.get(key);
      if (!entry) { openWindow(key, btn); return; }
      if (entry.minimized) restoreWindow(key);
      else if (activeKey === key) minimizeWindow(key);
      else focusWindow(key);
    });

    btn.addEventListener('mouseenter', () => {
      if (!tbarWasDragged && openWindows.has(key)) schedulePreview(key, btn);
    });
    btn.addEventListener('mouseleave', () => cancelPreview());

    taskbarWindowsEl.appendChild(btn);
    return btn;
  }

  // Taskbar drag-reorder: document-level handlers
  document.addEventListener('mousemove', (e) => {
    if (!tbarDragInfo) return;
    if (!tbarWasDragged && Math.abs(e.clientX - tbarDragInfo.startX) < 5) return;

    if (!tbarWasDragged) {
      tbarWasDragged = true;
      tbarDragInfo.btn.classList.add('tbar-dragging');
      cancelPreview();
    }

    const siblings = [...taskbarWindowsEl.children];
    let insertBefore = null;
    for (const sib of siblings) {
      if (sib === tbarDragInfo.btn) continue;
      const mid = sib.getBoundingClientRect().left + sib.offsetWidth / 2;
      if (e.clientX < mid) { insertBefore = sib; break; }
    }

    // Bail if position hasn't changed
    const currentNext = tbarDragInfo.btn.nextElementSibling;
    if (insertBefore === currentNext) return;
    if (!insertBefore && tbarDragInfo.btn === taskbarWindowsEl.lastElementChild) return;

    // FLIP: snapshot old positions before DOM move
    const oldLefts = new Map();
    for (const sib of siblings) {
      oldLefts.set(sib, sib.getBoundingClientRect().left);
    }

    // Reorder DOM
    if (insertBefore) {
      taskbarWindowsEl.insertBefore(tbarDragInfo.btn, insertBefore);
    } else {
      taskbarWindowsEl.appendChild(tbarDragInfo.btn);
    }

    // FLIP: animate siblings from old positions to new
    for (const sib of taskbarWindowsEl.children) {
      if (sib === tbarDragInfo.btn) continue;
      const oldLeft = oldLefts.get(sib);
      if (oldLeft === undefined) continue;
      const newLeft = sib.getBoundingClientRect().left;
      const dx = oldLeft - newLeft;
      if (Math.abs(dx) < 0.5) continue;
      sib.style.transition = 'none';
      sib.style.transform = `translateX(${dx}px)`;
      sib.offsetHeight;
      sib.style.transition = 'transform 0.18s ease-out';
      sib.style.transform = '';
    }
  });

  document.addEventListener('mouseup', () => {
    if (tbarDragInfo) {
      tbarDragInfo.btn.classList.remove('tbar-dragging');
      // Clean up any lingering inline transition/transform on siblings
      for (const sib of taskbarWindowsEl.children) {
        sib.style.transition = '';
        sib.style.transform = '';
      }
      tbarDragInfo = null;
    }
  });

  /* ---------- Taskbar preview (Aero-peek style) ---------- */
  let previewTimer = null;
  let activePreview = null;
  const PREVIEW_DELAY_MS = 240;
  const PREVIEW_MAX_WIDTH = 280;

  function schedulePreview(key, btn) {
    cancelPreview();
    previewTimer = setTimeout(() => showPreview(key, btn), PREVIEW_DELAY_MS);
  }

  function cancelPreview() {
    if (previewTimer) {
      clearTimeout(previewTimer);
      previewTimer = null;
    }
    if (activePreview) {
      activePreview.remove();
      activePreview = null;
    }
  }

  async function showPreview(key, btn) {
    const entry = openWindows.get(key);
    if (!entry || !entry.def) return;
    const def = entry.def;

    // Use configured dimensions (avoids issues with minimized windows)
    const realW = typeof def.width === 'number' ? def.width : 480;
    const realH = typeof def.height === 'number' ? def.height : 400;
    const scale = Math.min(PREVIEW_MAX_WIDTH / realW, 1);
    const previewW = Math.round(realW * scale);
    const previewH = Math.round(realH * scale);

    // Build a fresh mini-window from the definition
    const mini = document.createElement('div');
    mini.className = `window window--${def.chrome}`;
    mini.setAttribute('aria-hidden', 'true');
    mini.style.cssText =
      `position:absolute;left:0;top:0;z-index:0;` +
      `width:${realW}px;height:${realH}px;` +
      `transform:scale(${scale});transform-origin:top left;` +
      `max-width:none;max-height:none;` +
      `box-shadow:none;animation:none;cursor:default;overflow:hidden;`;

    mini.innerHTML =
      (def.chrome !== 'start' ? buildTitlebar(def) : '') +
      buildMenubar(def) +
      buildUrlbar(def) +
      buildToolbar(def) +
      `<div class="window-body">${def.body}</div>`;

    // Disable interaction in preview
    mini.querySelectorAll('button, a').forEach(el => {
      el.style.pointerEvents = 'none';
    });

    // Wait for any images to decode before showing the preview.
    // Cached images resolve near-instantly; this prevents a blank body.
    const imgs = mini.querySelectorAll('img');
    if (imgs.length) {
      await Promise.all([...imgs].map(img =>
        img.decode().catch(() => {})
      ));
    }

    // Abort if user already left the button while we waited
    if (previewTimer === null) { mini.remove(); return; }

    const wrap = document.createElement('div');
    wrap.className = 'tbar-preview';
    wrap.setAttribute('aria-hidden', 'true');

    const label = document.createElement('div');
    label.className = 'tbar-preview-label';
    label.textContent = def.title || def.label || key;

    const frame = document.createElement('div');
    frame.className = 'tbar-preview-frame';
    frame.style.width = `${previewW}px`;
    frame.style.height = `${previewH}px`;
    frame.appendChild(mini);

    wrap.appendChild(label);
    wrap.appendChild(frame);

    // Position above button, centered, then clamp to viewport
    const rect = btn.getBoundingClientRect();
    document.body.appendChild(wrap);
    const totalH = wrap.offsetHeight;

    let left = Math.round(rect.left + rect.width / 2 - previewW / 2);
    left = Math.max(8, Math.min(window.innerWidth - previewW - 8, left));
    const top = Math.max(8, Math.round(rect.top - totalH - 10));

    wrap.style.left = `${left}px`;
    wrap.style.top  = `${top}px`;

    activePreview = wrap;
  }

  /* ---------- CRT shutdown → login ---------- */
  function playShutdown() {
    // Pause music on shutdown
    if (ytPlayer && typeof ytPlayer.pauseVideo === 'function') {
      ytPlayer.pauseVideo();
    }
    if (musicProgressTimer) { clearInterval(musicProgressTimer); musicProgressTimer = null; }
    // Reset UI state
    const playBtn = document.getElementById('music-play');
    if (playBtn) playBtn.textContent = '▶';
    const trackEl = document.getElementById('music-track');
    if (trackEl) trackEl.textContent = '—';
    const progEl = document.getElementById('music-progress');
    if (progEl) progEl.style.width = '0%';
    // Dismiss toast if showing
    const toast = document.querySelector('.np-toast');
    if (toast) toast.remove();

    const ov = document.createElement('div');
    ov.className = 'shutdown-overlay off';
    document.body.appendChild(ov);

    // Phase 1: CRT off (0.7s) — white flash collapses to a dot over opaque dark bg
    ov.addEventListener('animationend', () => {
      // Phase 2: hold black, then reveal login screen
      ov.className = 'shutdown-overlay black';
      showLoginScreen();

      setTimeout(() => {
        ov.style.transition = 'opacity 0.5s ease-out';
        ov.style.opacity = '0';
        setTimeout(() => ov.remove(), 550);
      }, 800);
    }, { once: true });
  }

  function showLoginScreen() {
    const ls = document.getElementById('login-screen');
    if (!ls) return;
    ls.classList.remove('hidden');
    // Re-trigger card entrance animation
    const card = ls.querySelector('.login-content');
    if (card) {
      card.style.animation = 'none';
      card.offsetHeight;
      card.style.animation = '';
    }
  }

  function doLogin() {
    const ls = document.getElementById('login-screen');
    if (ls) ls.classList.add('hidden');
    if (musicApiReady) {
      // Already initialized — shuffle and play a new song
      musicToastShown = false;
      ytPlayer.setShuffle(true);
      ytPlayer.nextVideo();
    } else {
      initMusic();
    }
  }

  /* ---------- Music player (YouTube IFrame API) ---------- */
  let ytPlayer = null;
  let musicProgressTimer = null;
  let musicApiReady = false;
  let musicShowRemaining = false;

  function fmtMusicTime(s) {
    if (!isFinite(s) || s < 0) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  }

  function initMusic() {
    // Wire widget controls regardless of API state
    document.getElementById('music-play').addEventListener('click', toggleMusic);
    document.getElementById('music-next').addEventListener('click', () => ytPlayer?.nextVideo());
    document.getElementById('music-prev').addEventListener('click', () => ytPlayer?.previousVideo());
    document.getElementById('music-volume').addEventListener('input', (e) => {
      ytPlayer?.setVolume(parseInt(e.target.value, 10));
    });

    // Seek bar: click + drag
    const bar = document.getElementById('music-bar');
    function seekFromEvent(e) {
      if (!ytPlayer || typeof ytPlayer.getDuration !== 'function') return;
      const dur = ytPlayer.getDuration();
      if (!dur || dur <= 0) return;
      const rect = bar.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
      const pct = x / rect.width;
      ytPlayer.seekTo(pct * dur, true);
      // Visual update immediately so it feels snappy
      document.getElementById('music-progress').style.width = `${pct * 100}%`;
      document.getElementById('music-thumb').style.left = `${pct * 100}%`;
    }
    bar.addEventListener('mousedown', (e) => {
      bar.classList.add('dragging');
      seekFromEvent(e);
      const onMove = (ev) => seekFromEvent(ev);
      const onUp = () => {
        bar.classList.remove('dragging');
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });

    // Time display toggle (elapsed/total ↔ elapsed/-remaining)
    document.getElementById('music-time-toggle').addEventListener('click', () => {
      musicShowRemaining = !musicShowRemaining;
      updateMusicProgress();
    });

    // Set callback BEFORE loading script
    window.onYouTubeIframeAPIReady = () => {
      ytPlayer = new YT.Player('yt-player', {
        height: '1', width: '1',
        playerVars: {
          list: 'PLWhL-mqIwngl1nULTfYVNd5RCQvwZY7R5',
          listType: 'playlist',
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: onMusicReady,
          onStateChange: onMusicState,
          onError: () => {
            document.getElementById('music-track').textContent = 'unavailable';
          },
        },
      });
    };

    const s = document.createElement('script');
    s.src = 'https://www.youtube.com/iframe_api';
    s.onerror = () => {
      document.getElementById('music-track').textContent = 'unavailable';
    };
    document.head.appendChild(s);

    // Show loading state, then fallback if nothing happens
    setTimeout(() => {
      if (!musicApiReady) document.getElementById('music-track').textContent = 'loading...';
    }, 3000);
    setTimeout(() => {
      if (!musicApiReady) document.getElementById('music-track').textContent = 'unavailable';
    }, 12000);
  }

  function onMusicReady() {
    musicApiReady = true;
    ytPlayer.setVolume(20);
    ytPlayer.setShuffle(true);
    ytPlayer.nextVideo();
  }

  function toggleMusic() {
    if (!ytPlayer || typeof ytPlayer.getPlayerState !== 'function') return;
    const s = ytPlayer.getPlayerState();
    if (s === YT.PlayerState.PLAYING) ytPlayer.pauseVideo();
    else ytPlayer.playVideo();
  }

  let musicToastShown = false;

  function showNowPlayingToast(trackName) {
    const existing = document.querySelector('.np-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'np-toast';
    toast.innerHTML = `
      <span class="np-toast-icon" aria-hidden="true">&#9835;</span>
      <div class="np-toast-body">
        <span class="np-toast-label">now playing</span>
        <span class="np-toast-track">${trackName || '—'}</span>
        <span class="np-toast-hint">click the clock to control &rarr;</span>
      </div>
    `;
    toast.addEventListener('click', (e) => {
      e.stopPropagation();
      toast.classList.add('out');
      setTimeout(() => toast.remove(), 300);
      const qp = document.getElementById('quick-panel');
      if (qp) {
        qp.classList.remove('hidden');
        buildCalendar();
        updatePanelClock();
      }
    });
    document.body.appendChild(toast);

    // Auto-dismiss after 5s
    setTimeout(() => {
      if (toast.parentNode) {
        toast.classList.add('out');
        setTimeout(() => toast.remove(), 300);
      }
    }, 5000);
  }

  function onMusicState(e) {
    const btn = document.getElementById('music-play');
    if (e.data === YT.PlayerState.PLAYING) {
      btn.textContent = '||';
      const data = ytPlayer.getVideoData();
      const title = data.title || '—';
      document.getElementById('music-track').textContent = title;
      if (!musicProgressTimer) musicProgressTimer = setInterval(updateMusicProgress, 500);
      // Show toast on first play
      if (!musicToastShown) {
        musicToastShown = true;
        showNowPlayingToast(title);
      }
    } else {
      btn.textContent = '▶';
      if (musicProgressTimer) { clearInterval(musicProgressTimer); musicProgressTimer = null; }
    }
  }

  function updateMusicProgress() {
    if (!ytPlayer || !ytPlayer.getCurrentTime) return;
    const cur = ytPlayer.getCurrentTime();
    const dur = ytPlayer.getDuration();
    const pct = dur > 0 ? (cur / dur) * 100 : 0;
    const fill = document.getElementById('music-progress');
    const thumb = document.getElementById('music-thumb');
    if (fill) fill.style.width = `${pct}%`;
    if (thumb) thumb.style.left = `${pct}%`;
    const curEl = document.getElementById('music-current');
    const durEl = document.getElementById('music-duration');
    if (curEl) curEl.textContent = musicShowRemaining
      ? `-${fmtMusicTime(Math.max(0, dur - cur))}`
      : fmtMusicTime(cur);
    if (durEl) durEl.textContent = fmtMusicTime(dur);
  }

  /* ---------- Sticky note drag ---------- */
  (() => {
    const note = document.querySelector('.sticky-note');
    if (!note) return;
    let dragging = false, offX = 0, offY = 0;

    note.addEventListener('mousedown', (e) => {
      dragging = true;
      const r = note.getBoundingClientRect();
      offX = e.clientX - r.left;
      offY = e.clientY - r.top;
      note.classList.add('dragging');
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      const maxX = window.innerWidth - 40;
      const maxY = window.innerHeight - 44 - 20;
      let x = e.clientX - offX;
      let y = e.clientY - offY;
      x = Math.max(0, Math.min(maxX, x));
      y = Math.max(0, Math.min(maxY, y));
      note.style.left = `${x}px`;
      note.style.top  = `${y}px`;
    });

    document.addEventListener('mouseup', () => {
      if (dragging) {
        dragging = false;
        note.classList.remove('dragging');
        // Drop rotation settles to a slight random tilt
        const tilt = (Math.random() - 0.5) * 3;
        note.style.transform = `rotate(${tilt.toFixed(1)}deg)`;
      }
    });
  })();

  /* ---------- Quick panel ---------- */
  const MONTHS = ['january','february','march','april','may','june','july','august','september','october','november','december'];
  const DAYS = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

  function buildCalendar() {
    const cal = document.getElementById('qp-cal');
    if (!cal) return;
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const today = now.getDate();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const startOffset = firstDay === 0 ? 6 : firstDay - 1;
    let html = `<div class="qp-cal-header">${MONTHS[month]} ${year}</div><div class="qp-cal-grid">`;
    ['mo','tu','we','th','fr','sa','su'].forEach(d => { html += `<span class="qp-cal-day">${d}</span>`; });
    for (let i = 0; i < startOffset; i++) html += '<span class="qp-cal-empty"></span>';
    for (let d = 1; d <= daysInMonth; d++) {
      html += d === today
        ? `<span class="qp-cal-num qp-cal-today">${d}</span>`
        : `<span class="qp-cal-num">${d}</span>`;
    }
    html += '</div>';
    cal.innerHTML = html;
  }

  function updatePanelClock() {
    const timeEl = document.getElementById('qp-time');
    const dateEl = document.getElementById('qp-date');
    if (!timeEl || !dateEl) return;
    const d = new Date();
    timeEl.textContent = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
    dateEl.textContent = `${DAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }

  /* ---------- Desktop icon drag + position persistence ---------- */
  const ICON_POS_KEY = 'wookie-icon-positions';
  const ICON_W = 92, ICON_H = 108, ICON_GAP_X = 28, ICON_GAP_Y = 24;
  const ICON_RIGHT_MARGIN = 36, ICON_TOP_MARGIN = 44;

  let iconPositions = (() => {
    try {
      const saved = JSON.parse(localStorage.getItem(ICON_POS_KEY));
      return (saved && typeof saved === 'object') ? saved : {};
    } catch { return {}; }
  })();

  function saveIconPositions() {
    try { localStorage.setItem(ICON_POS_KEY, JSON.stringify(iconPositions)); } catch {}
  }

  function defaultIconPositions() {
    const container = document.querySelector('.desktop-icons');
    if (!container) return {};
    const cw = container.clientWidth;
    const col1Left = Math.max(8, cw - ICON_RIGHT_MARGIN - ICON_W);
    const col0Left = Math.max(8, col1Left - ICON_GAP_X - ICON_W);
    const icons = container.querySelectorAll('.desktop-icon');
    const pos = {};
    icons.forEach((icon, i) => {
      const key = icon.dataset.window;
      if (!key) return;
      const col = i % 2;
      const row = Math.floor(i / 2);
      pos[key] = {
        x: col === 0 ? col0Left : col1Left,
        y: ICON_TOP_MARGIN + row * (ICON_H + ICON_GAP_Y)
      };
    });
    return pos;
  }

  function clampIconPos(x, y) {
    const container = document.querySelector('.desktop-icons');
    if (!container) return { x, y };
    const cw = container.clientWidth, ch = container.clientHeight;
    const maxX = Math.max(0, cw - ICON_W - 4);
    const maxY = Math.max(0, ch - ICON_H - 4);
    return {
      x: Math.max(4, Math.min(maxX, Math.round(x))),
      y: Math.max(4, Math.min(maxY, Math.round(y)))
    };
  }

  function applyIconPositions() {
    const defaults = defaultIconPositions();
    document.querySelectorAll('.desktop-icon').forEach(icon => {
      const key = icon.dataset.window;
      if (!key) return;
      const stored = iconPositions[key];
      const base = stored || defaults[key] || { x: 0, y: 0 };
      const pos = clampIconPos(base.x, base.y);
      icon.style.left = pos.x + 'px';
      icon.style.top = pos.y + 'px';
    });
  }

  function wireIconDrag() {
    document.querySelectorAll('.desktop-icon').forEach(icon => {
      let startX = 0, startY = 0, originX = 0, originY = 0;
      let dragging = false, suppressClick = false;
      const THRESHOLD = 5;

      icon.addEventListener('pointerdown', (e) => {
        if (e.button !== 0) return;
        startX = e.clientX; startY = e.clientY;
        originX = parseFloat(icon.style.left) || 0;
        originY = parseFloat(icon.style.top) || 0;
        dragging = false;
        suppressClick = false;
        try { icon.setPointerCapture(e.pointerId); } catch {}
      });

      icon.addEventListener('pointermove', (e) => {
        if (!icon.hasPointerCapture || !icon.hasPointerCapture(e.pointerId)) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        if (!dragging && Math.hypot(dx, dy) < THRESHOLD) return;
        if (!dragging) {
          dragging = true;
          icon.classList.add('dragging');
        }
        const { x, y } = clampIconPos(originX + dx, originY + dy);
        icon.style.left = x + 'px';
        icon.style.top = y + 'px';
      });

      const endDrag = (e) => {
        try { if (icon.hasPointerCapture(e.pointerId)) icon.releasePointerCapture(e.pointerId); } catch {}
        if (dragging) {
          icon.classList.remove('dragging');
          const key = icon.dataset.window;
          if (key) {
            iconPositions[key] = {
              x: parseFloat(icon.style.left) || 0,
              y: parseFloat(icon.style.top) || 0
            };
            saveIconPositions();
          }
          suppressClick = true;
        }
        dragging = false;
      };
      icon.addEventListener('pointerup', endDrag);
      icon.addEventListener('pointercancel', endDrag);

      icon.addEventListener('click', (e) => {
        if (suppressClick) {
          e.stopImmediatePropagation();
          e.preventDefault();
          suppressClick = false;
        }
      }, true);
    });
  }

  applyIconPositions();
  wireIconDrag();
  window.addEventListener('resize', applyIconPositions);

  // After the boot entry animation finishes, freeze the icon's animation
  // property so future class toggles can't re-trigger icon-in (which would
  // replay the translateY + blur glitch). Must pin opacity inline first —
  // the base rule sets opacity:0 and `forwards` only holds while the
  // animation is applied.
  document.querySelectorAll('.desktop-icon').forEach(icon => {
    icon.addEventListener('animationend', function onceIn(e) {
      if (e.animationName !== 'icon-in') return;
      icon.style.opacity = '1';
      icon.style.animation = 'none';
      icon.removeEventListener('animationend', onceIn);
    });
  });

  /* ---------- Event wiring ---------- */
  const loginBtn = document.getElementById('login-btn');
  if (loginBtn) loginBtn.addEventListener('click', doLogin);

  document.querySelectorAll('[data-window]').forEach(el => {
    el.addEventListener('click', () => {
      const key = el.dataset.window;
      // Start menu toggles closed if already open
      if (key === 'start' && openWindows.has(key)) {
        closeWindow(key);
        return;
      }
      openWindow(key, el);
    });
  });

  // Quick panel: toggle on taskbar-right click (tray + clock area)
  const taskbarRight = document.querySelector('.taskbar-right');
  if (taskbarRight) {
    taskbarRight.addEventListener('click', (e) => {
      e.stopPropagation();
      // Dismiss toast if showing
      const toast = document.querySelector('.np-toast');
      if (toast) { toast.classList.add('out'); setTimeout(() => toast.remove(), 300); }
      const qp = document.getElementById('quick-panel');
      if (!qp) return;
      qp.classList.toggle('hidden');
      if (!qp.classList.contains('hidden')) {
        buildCalendar();
        updatePanelClock();
      }
    });
  }

  // Close quick panel on outside click
  document.addEventListener('click', (e) => {
    const qp = document.getElementById('quick-panel');
    if (qp && !qp.classList.contains('hidden') && !qp.contains(e.target) && !e.target.closest('.taskbar-right')) {
      qp.classList.add('hidden');
    }
  });

  // Desktop right-click context menu
  const ctxMenu = document.getElementById('ctx-menu');
  const desktopEl = document.getElementById('desktop');
  if (desktopEl && ctxMenu) {
    desktopEl.addEventListener('contextmenu', (e) => {
      if (e.target.closest('.desktop-icon, .recycle-bin, .sticky-note')) return;
      e.preventDefault();
      ctxMenu.classList.remove('hidden');
      // Clamp to viewport
      let x = e.clientX, y = e.clientY;
      const mr = ctxMenu.getBoundingClientRect();
      if (x + mr.width > window.innerWidth) x = window.innerWidth - mr.width - 8;
      if (y + mr.height > window.innerHeight - 44) y = window.innerHeight - 44 - mr.height - 8;
      ctxMenu.style.left = `${x}px`;
      ctxMenu.style.top = `${y}px`;
    });

    // Close on any left-click outside
    document.addEventListener('click', (e) => {
      if (!ctxMenu.contains(e.target)) ctxMenu.classList.add('hidden');
    });

    // Menu actions
    ctxMenu.querySelectorAll('.ctx-item').forEach(item => {
      item.addEventListener('click', () => {
        ctxMenu.classList.add('hidden');
        const action = item.dataset.ctx;
        if (action === 'refresh') {
          desktopEl.classList.remove('refreshing');
          void desktopEl.offsetWidth;
          desktopEl.classList.add('refreshing');
          desktopEl.addEventListener('animationend', () => desktopEl.classList.remove('refreshing'), { once: true });

          // Reset icon positions and blink them in place — inline animation
          // avoids re-triggering the base icon-in keyframes via cascade.
          iconPositions = {};
          saveIconPositions();
          applyIconPositions();
          document.querySelectorAll('.desktop-icon').forEach(icon => {
            icon.style.opacity = '1';
            icon.style.animation = 'none';
            void icon.offsetWidth;
            icon.style.animation = 'icon-refresh-blink 0.12s steps(2, end) 1';
            icon.addEventListener('animationend', function done(e) {
              if (e.animationName !== 'icon-refresh-blink') return;
              icon.style.opacity = '1';
              icon.style.animation = 'none';
              icon.removeEventListener('animationend', done);
            });
          });
        } else if (action === 'about') {
          openWindow('about');
        } else if (action === 'settings') {
          openWindow('settings');
        }
      });
    });
  }

  // Quick panel toggle buttons
  // Init quick panel button states from saved settings
  const crtBtnInit = document.getElementById('toggle-crt');
  if (crtBtnInit && !currentCrtOn) crtBtnInit.classList.remove('active');
  const nightBtnInit = document.getElementById('toggle-night');
  if (nightBtnInit && currentNightWarmth > 0) nightBtnInit.classList.add('active');

  document.querySelectorAll('.qp-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.classList.toggle('active');
      if (btn.id === 'toggle-crt') {
        const crtOn = btn.classList.contains('active');
        currentCrtOn = crtOn;
        document.body.classList.toggle('no-crt', !crtOn);
        saveSettings();
        const sw = openWindows.get('settings');
        if (sw) {
          const t = sw.el.querySelector('#settings-crt');
          const s = sw.el.querySelector('#settings-crt-int');
          if (t) t.checked = crtOn;
          if (s) s.disabled = !crtOn;
        }
      }
      if (btn.id === 'toggle-night') {
        const on = btn.classList.contains('active');
        currentNightWarmth = on ? (parseInt(document.querySelector('#settings-night')?.value, 10) || 22) : 0;
        applyNightLight(currentNightWarmth);
        const sw = openWindows.get('settings');
        if (sw) {
          const t = sw.el.querySelector('#settings-night-toggle');
          if (t) t.checked = on;
        }
      }
    });
  });

  // ESC closes quick panel first, then active window
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const qp = document.getElementById('quick-panel');
      if (qp && !qp.classList.contains('hidden')) {
        e.preventDefault();
        qp.classList.add('hidden');
        return;
      }
      if (activeKey) {
        e.preventDefault();
        closeWindow(activeKey);
      }
    }
  });

  /* ---------- Clock ---------- */
  function tickClock() {
    if (!clockEl) return;
    const d = new Date();
    clockEl.textContent = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
    updatePanelClock();
  }
  tickClock();
  setInterval(tickClock, 1000 * 20);

  /* ---------- Mobile no-op ---------- */
  document.querySelectorAll('[data-window-mobile]').forEach(el => {
    el.addEventListener('click', (e) => e.preventDefault());
  });

  /* ---------- Resize: update settings resolution ---------- */
  window.addEventListener('resize', () => {
    const sw = openWindows.get('settings');
    if (sw) {
      const el = sw.el.querySelector('#settings-res');
      if (el) el.textContent = `${window.innerWidth} x ${window.innerHeight}`;
    }
  });

  /* ---------- Pinned taskbar icons ---------- */
  const taskbarPinned = document.getElementById('taskbar-pinned');
  ['about', 'contact'].forEach(key => {
    const def = WINDOWS[key];
    if (!def || !def.pinned) return;
    const desktopIcon = document.querySelector(`[data-window="${key}"] .px`);
    const btn = document.createElement('button');
    btn.className = 'tbar-pin';
    btn.type = 'button';
    btn.dataset.windowKey = key;
    btn.setAttribute('aria-label', def.label);
    if (desktopIcon) btn.innerHTML = desktopIcon.outerHTML;

    btn.addEventListener('click', () => {
      cancelPreview();
      const entry = openWindows.get(key);
      if (!entry) { openWindow(key, btn); return; }
      if (entry.minimized) restoreWindow(key);
      else if (activeKey === key) minimizeWindow(key);
      else focusWindow(key);
    });
    btn.addEventListener('mouseenter', () => {
      if (openWindows.has(key)) schedulePreview(key, btn);
    });
    btn.addEventListener('mouseleave', () => cancelPreview());

    taskbarPinned.appendChild(btn);
    pinnedButtons.set(key, btn);
  });
})();
