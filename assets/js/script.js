// Explicitly set the Reality Herald favicon on every page and add a version
// query so browsers request the current icon instead of a cached older one.
const faviconLink = document.querySelector('link[rel="icon"]') || document.createElement('link');
faviconLink.setAttribute('rel', 'icon');
faviconLink.setAttribute('type', 'image/x-icon');
faviconLink.setAttribute('href', '/favicon.ico?v=20260908b');
if (!faviconLink.parentNode) document.head.appendChild(faviconLink);

const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Keep the main topical navigation pointed at the dedicated journal sections.
const journalSectionLinks = {
  'Science & Technology': '/science-tech/',
  'History & Theology': '/history-theology/',
  'Law': '/law/',
  'Culture': '/culture/',
  'Ideas': '/ideas/'
};

document.querySelectorAll('.nav-links > a').forEach((link) => {
  const destination = journalSectionLinks[link.textContent.trim()];
  if (destination) link.setAttribute('href', destination);
});

// On the homepage, point each section's "View all" or "Explore" link to the
// matching journal landing page while leaving News & Analysis unchanged.
const homepageJournalLinks = [
  ['#science .section-heading-row a', '/science-tech/'],
  ['#history .section-heading-row a', '/history-theology/'],
  ['#culture .section-heading-row a', '/culture/'],
  ['#ideas .section-heading-row a', '/ideas/']
];

homepageJournalLinks.forEach(([selector, destination]) => {
  const link = document.querySelector(selector);
  if (link) link.setAttribute('href', destination);
});

// Add a deliberately small Political Cartoon / Humor & Satire strip directly
// below News & Analysis on the homepage. Keep this module limited to one item
// per column so the page remains visually restrained.
const newsSection = document.querySelector('#news');
if (newsSection && !document.querySelector('#humor-satire')) {
  const humorSection = document.createElement('section');
  humorSection.id = 'humor-satire';
  humorSection.className = 'section-block ruled-section';
  humorSection.innerHTML = `
    <div class="rh-humor-grid">
      <article class="rh-humor-card">
        <div class="section-kicker">POLITICAL CARTOON</div>
        <h2>Political Cartoon</h2>
        <p class="rh-humor-muted">The first Reality Herald political cartoon will appear here.</p>
      </article>
      <article class="rh-humor-card">
        <div class="section-kicker">HUMOR &amp; SATIRE</div>
        <h2><a href="/articles/humor/national-partial-radio-explores-christianity.html">National Partial Radio Explores Christianity by Interviewing Two People Who Agree With National Partial Radio</a></h2>
        <p>A parody of selective media framing and the curious art of representing a broad tradition with a very narrow sample.</p>
      </article>
    </div>`;

  const humorStyles = document.createElement('style');
  humorStyles.textContent = `
    .rh-humor-grid { display:grid; grid-template-columns:1fr 1fr; gap:32px; }
    .rh-humor-card { min-width:0; }
    .rh-humor-card + .rh-humor-card { border-left:1px solid #c8c1b6; padding-left:32px; }
    .rh-humor-card h2 { margin:8px 0 10px; font-size:clamp(1.3rem,2vw,1.8rem); line-height:1.12; }
    .rh-humor-card p { margin:0; }
    .rh-humor-muted { color:#6b655d; font-style:italic; }
    @media (max-width:700px) {
      .rh-humor-grid { grid-template-columns:1fr; gap:24px; }
      .rh-humor-card + .rh-humor-card { border-left:0; border-top:1px solid #c8c1b6; padding-left:0; padding-top:24px; }
    }`;
  document.head.appendChild(humorStyles);
  newsSection.insertAdjacentElement('afterend', humorSection);
}

const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]');
    if (!email.value.trim()) {
      email.focus();
      return;
    }
    alert('Prototype only: newsletter signup is not connected yet.');
  });
}

const copyLinkButton = document.getElementById('copy-link');
if (copyLinkButton) {
  copyLinkButton.addEventListener('click', async () => {
    const url = window.location.href;
    const originalText = copyLinkButton.textContent;

    try {
      await navigator.clipboard.writeText(url);
    } catch (error) {
      const temporaryInput = document.createElement('textarea');
      temporaryInput.value = url;
      temporaryInput.setAttribute('readonly', '');
      temporaryInput.style.position = 'fixed';
      temporaryInput.style.opacity = '0';
      document.body.appendChild(temporaryInput);
      temporaryInput.select();
      document.execCommand('copy');
      temporaryInput.remove();
    }

    copyLinkButton.textContent = 'Copied';
    window.setTimeout(() => {
      copyLinkButton.textContent = originalText;
    }, 1500);
  });
}

// Capture article Print clicks before any legacy inline window.print() handler runs.
document.addEventListener('click', (event) => {
  const button = event.target.closest('.article-actions button');
  if (!button || button.textContent.trim().toLowerCase() !== 'print') return;

  event.preventDefault();
  event.stopImmediatePropagation();

  const article = document.querySelector('.article-shell');
  if (!article) {
    window.print();
    return;
  }

  // Keep a usable reference long enough to build the print page.
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    window.print();
    return;
  }

  // Disconnect the new tab from the source page after opening while retaining
  // the local JavaScript reference needed to write and print the article.
  printWindow.opener = null;

  const stylesheetUrl = new URL('/assets/css/styles.css', window.location.origin).href;
  const articleCopy = article.cloneNode(true);
  const actions = articleCopy.querySelector('.article-actions');
  if (actions) actions.remove();

  printWindow.document.open();
  printWindow.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${document.title}</title>
  <link rel="stylesheet" href="${stylesheetUrl}">
  <style>
    body { margin: 0; }
    .article-shell { width: min(900px, calc(100% - 48px)); margin: 32px auto; }
    .article-hero { display: none; }
  </style>
</head>
<body>${articleCopy.outerHTML}</body>
</html>`);
  printWindow.document.close();

  const startPrint = () => {
    printWindow.focus();
    printWindow.print();
  };

  if (printWindow.document.readyState === 'complete') {
    window.setTimeout(startPrint, 250);
  } else {
    printWindow.addEventListener('load', () => window.setTimeout(startPrint, 250), { once: true });
  }
}, true);
