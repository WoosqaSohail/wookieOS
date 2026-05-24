/* =============================================================
   wookieOS  v.0.3  —  app.js
   Multi-window manager: open, focus, drag, minimize, close.
   ============================================================= */

(() => {
  'use strict';

  /* ---------- Window definitions ---------- */
  const WINDOWS = {
    consultly: {
      chrome: 'browser', icon: '◐', label: 'consultly',
      title: 'consultly — woosqa.work',
      width: 880, height: 720,
      urlbar: 'woosqa.work/consultly',
      body: `<img src="images/consultly.png" alt="Consultly case study" />`
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
      title: 'storyloop — woosqa.work',
      width: 880, height: 720,
      urlbar: 'woosqa.work/storyloop',
      body: `
        <div class="browser-stub">
          <svg class="browser-stub-art" viewBox="0 0 16 16" shape-rendering="crispEdges">
            <rect x="2" y="3" width="12" height="10" fill="#9C7DF0"/>
            <rect x="2" y="3" width="12" height="1" fill="#C4B5FD"/>
            <rect x="1" y="3" width="1" height="10" fill="#1F1430"/>
            <rect x="14" y="3" width="1" height="10" fill="#1F1430"/>
            <rect x="2" y="2" width="12" height="1" fill="#1F1430"/>
            <rect x="2" y="13" width="12" height="1" fill="#1F1430"/>
            <rect x="4" y="6" width="3" height="1" fill="#FFF6E0"/>
            <rect x="4" y="8" width="5" height="1" fill="#FFF6E0"/>
            <rect x="4" y="10" width="2" height="1" fill="#FFF6E0"/>
            <rect x="9" y="6" width="3" height="1" fill="#FFF6E0"/>
            <rect x="9" y="8" width="2" height="1" fill="#FFF6E0"/>
          </svg>
          <h3>storyloop // loading</h3>
          <p>scrollytelling platform case study. write-up coming soon — figma source is being pulled from the archive.</p>
          <span class="stub-tag">draft · v0.1</span>
        </div>`
    },
    more: {
      chrome: 'folder', icon: '▤', label: 'more.work',
      title: 'more.work — folder',
      width: 540, height: 380,
      body: `
        <button class="folder-item" type="button">
          <span class="folder-item-thumb">
            <svg viewBox="0 0 16 16" shape-rendering="crispEdges"><rect x="2" y="3" width="12" height="10" fill="#FF7AA8"/><rect x="2" y="3" width="12" height="1" fill="#FFC8DC"/><rect x="2" y="13" width="12" height="1" fill="#C2256E"/><rect x="1" y="3" width="1" height="10" fill="#1F1430"/><rect x="14" y="3" width="1" height="10" fill="#1F1430"/><rect x="2" y="2" width="12" height="1" fill="#1F1430"/><rect x="4" y="5" width="3" height="3" fill="#FBF6E8"/><rect x="9" y="5" width="3" height="3" fill="#FBF6E8"/><rect x="4" y="10" width="8" height="1" fill="#1F1430"/></svg>
          </span>
          <span class="folder-item-label">store_01</span>
        </button>
        <button class="folder-item" type="button">
          <span class="folder-item-thumb">
            <svg viewBox="0 0 16 16" shape-rendering="crispEdges"><rect x="2" y="2" width="12" height="12" fill="#7DC9B5"/><rect x="2" y="2" width="12" height="1" fill="#A5DCCB"/><rect x="2" y="13" width="12" height="1" fill="#4FA68F"/><rect x="1" y="2" width="1" height="12" fill="#1F1430"/><rect x="14" y="2" width="1" height="12" fill="#1F1430"/><rect x="4" y="5" width="8" height="1" fill="#FBF6E8"/><rect x="4" y="7" width="6" height="1" fill="#FBF6E8"/><rect x="4" y="9" width="7" height="1" fill="#FBF6E8"/></svg>
          </span>
          <span class="folder-item-label">landing_02</span>
        </button>
        <button class="folder-item" type="button">
          <span class="folder-item-thumb">
            <svg viewBox="0 0 16 16" shape-rendering="crispEdges"><rect x="5" y="2" width="6" height="12" fill="#C4B5FD"/><rect x="5" y="2" width="6" height="1" fill="#EDE6FF"/><rect x="5" y="13" width="6" height="1" fill="#6E4FCC"/><rect x="4" y="2" width="1" height="12" fill="#1F1430"/><rect x="11" y="2" width="1" height="12" fill="#1F1430"/><rect x="6" y="4" width="4" height="7" fill="#FBF6E8"/><rect x="7" y="12" width="2" height="1" fill="#1F1430"/></svg>
          </span>
          <span class="folder-item-label">app_02</span>
        </button>
        <button class="folder-item" type="button">
          <span class="folder-item-thumb">
            <svg viewBox="0 0 16 16" shape-rendering="crispEdges"><rect x="2" y="2" width="12" height="12" fill="#F2E5C8"/><rect x="2" y="2" width="12" height="1" fill="#FBF6E8"/><rect x="2" y="13" width="12" height="1" fill="#E8D8B2"/><rect x="1" y="2" width="1" height="12" fill="#1F1430"/><rect x="14" y="2" width="1" height="12" fill="#1F1430"/><rect x="4" y="5" width="6" height="1" fill="#C49AAA"/><rect x="4" y="7" width="8" height="1" fill="#9C7DF0"/><rect x="4" y="9" width="5" height="1" fill="#C49AAA"/></svg>
          </span>
          <span class="folder-item-label">landing_03</span>
        </button>
        <button class="folder-item" type="button">
          <span class="folder-item-thumb">
            <svg viewBox="0 0 16 16" shape-rendering="crispEdges"><rect x="3" y="3" width="10" height="10" fill="#9C7DF0"/><rect x="3" y="3" width="10" height="1" fill="#C4B5FD"/><rect x="3" y="12" width="10" height="1" fill="#6E4FCC"/><rect x="2" y="3" width="1" height="10" fill="#1F1430"/><rect x="13" y="3" width="1" height="10" fill="#1F1430"/><rect x="6" y="6" width="2" height="2" fill="#FBF6E8"/><rect x="9" y="6" width="2" height="2" fill="#FBF6E8"/><rect x="5" y="10" width="6" height="1" fill="#FBF6E8"/></svg>
          </span>
          <span class="folder-item-label">landing_04</span>
        </button>
        <button class="folder-item" type="button">
          <span class="folder-item-thumb">
            <svg viewBox="0 0 16 16" shape-rendering="crispEdges"><rect x="2" y="2" width="12" height="12" fill="#1F1430"/><rect x="3" y="3" width="10" height="10" fill="#3D2A5C"/><rect x="5" y="5" width="2" height="2" fill="#FF7AA8"/><rect x="9" y="5" width="2" height="2" fill="#7DC9B5"/><rect x="5" y="9" width="2" height="2" fill="#C6F02C"/><rect x="9" y="9" width="2" height="2" fill="#5EE6FF"/></svg>
          </span>
          <span class="folder-item-label">illust_archive</span>
        </button>
      `
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
        </div>
        <div class="start-divider"></div>
        <div class="start-section">
          <span class="start-section-label">// system</span>
          <button class="start-menu-item" data-jump="about"><span class="start-menu-glyph">✎</span>about.me</button>
          <button class="start-menu-item" data-jump="more"><span class="start-menu-glyph">▤</span>more.work</button>
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

  /* ---------- Boot sequence ---------- */
  (() => {
    const FLAVOR = [
      'caffeine level: adequate',
      'figma is open in another tab, probably',
      'loading pixels ... ████████░░ 80%',
      'mood: ship it energy',
      'fonts: loaded. patience: loading...',
      'initializing dusk.exe',
      'vibes: locally optimal',
      'calibrating aesthetic ... done',
      'one moment, applying gradient',
      'confidence.exe not found · continuing anyway',
      'panic mode: disabled for now',
      'compiling portfolio ... almost',
      'loading late night algebra ...',
      'coffee: 2nd cup · deadline: approaching',
      'rendering at maximum effort',
      'checking vibes ... pass',
    ];
    const pick = () => FLAVOR[Math.floor(Math.random() * FLAVOR.length)];

    const lines = [
      'wookieOS v.0.3',
      'checking display.sys ... ok',
      'loading fonts ... dotgothic · vt323 · pixelify',
      pick(),
      'found: 1 designer · slightly caffeinated',
      'scanning portfolio ... 3 case studies · 1 sticky note',
      'trash: 1 item (not opening that back up)',
      'loading user: wookie',
      'ready.',
    ];

    const container = document.getElementById('boot-lines');
    if (!container) return;

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
