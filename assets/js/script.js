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

const navDropdowns = Array.from(document.querySelectorAll('.nav-dropdown'));
navDropdowns.forEach((dropdown) => {
  dropdown.addEventListener('toggle', () => {
    if (!dropdown.open) return;
    navDropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) otherDropdown.open = false;
    });
  });
});
document.addEventListener('click', (event) => {
  if (navDropdowns.some((dropdown) => dropdown.contains(event.target))) return;
  navDropdowns.forEach((dropdown) => { dropdown.open = false; });
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  navDropdowns.forEach((dropdown) => { dropdown.open = false; });
});

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
[
  ['#science .section-heading-row a', '/science-tech/'],
  ['#history .section-heading-row a', '/history-theology/'],
  ['#culture .section-heading-row a', '/culture/'],
  ['#ideas .section-heading-row a', '/ideas/']
].forEach(([selector, destination]) => {
  const link = document.querySelector(selector);
  if (link) link.setAttribute('href', destination);
});

// Current Farm Bill report as the lead homepage story.
const homepageLeadStory = document.querySelector('.lead-story');
if (homepageLeadStory) {
  const farmBillUrl = '/articles/news/farm-bill-stalls-senate.html';
  const eyebrow = homepageLeadStory.querySelector('.eyebrow');
  const imageLink = homepageLeadStory.querySelector('.story-image');
  const headlineLink = homepageLeadStory.querySelector('h2 a');
  const dek = homepageLeadStory.querySelector('.dek');
  const byline = homepageLeadStory.querySelector('.byline');

  if (eyebrow) eyebrow.textContent = 'NEWS & ANALYSIS';
  if (imageLink) {
    imageLink.setAttribute('href', farmBillUrl);
    imageLink.setAttribute('aria-label', 'Open Farm Bill Stalls in Senate story');
    imageLink.style.backgroundImage = "url('/assets/images/farm-bill-homepage-final.jpg?v=20260909')";
    imageLink.style.backgroundSize = 'cover';
    imageLink.style.backgroundPosition = 'center';
    imageLink.style.backgroundRepeat = 'no-repeat';
  }
  if (headlineLink) {
    headlineLink.setAttribute('href', farmBillUrl);
    headlineLink.textContent = 'Farm Bill Stalls in Senate as SNAP Fight Threatens Another Extension';
  }
  if (dek) dek.textContent = 'Republicans and Democrats agree farmers need a new law. They remain divided over how quickly states should begin sharing SNAP benefit costs when payment error rates run high.';
  if (byline) byline.innerHTML = 'Reality Herald Editorial Desk <span>•</span> 7 min read';
  const homepageDate = document.querySelector('.utility-bar > div:first-child');
  if (homepageDate) homepageDate.textContent = 'Wednesday, September 9, 2026';
}

// Use the AI citation artwork wherever that article appears on the homepage.
const aiStoryUrl = '/articles/science-tech/ai-citations-and-evidence.html';
[
  document.querySelector('.secondary-story .story-image.image-two'),
  document.querySelector('.large-feature .story-image.image-six')
].filter(Boolean).forEach((imageBlock) => {
  if (imageBlock.tagName === 'A') {
    imageBlock.setAttribute('href', aiStoryUrl);
    imageBlock.setAttribute('aria-label', 'Open AI citation article');
  }
  imageBlock.style.backgroundImage = "url('/assets/images/ai-citation-student-professor-dean.jpg?v=20260909')";
  imageBlock.style.backgroundSize = 'cover';
  imageBlock.style.backgroundPosition = 'center';
  imageBlock.style.backgroundRepeat = 'no-repeat';
});

// Replace the AI article placeholder hero with the finished illustration.
if (window.location.pathname.endsWith('/articles/science-tech/ai-citations-and-evidence.html')) {
  const aiHero = document.querySelector('.article-hero');
  if (aiHero) {
    aiHero.innerHTML = '<img src="/assets/images/ai-citation-student-professor-dean.jpg?v=20260909" alt="Professor and dean confronting a student over a paper containing an incorrect citation." width="1200" height="900" decoding="async" style="display:block;width:100%;height:auto;">';
  }
}

const newsSection = document.querySelector('#news');
if (newsSection && !document.querySelector('#humor-satire')) {
  const humorSection = document.createElement('section');
  humorSection.id = 'humor-satire';
  humorSection.className = 'section-block ruled-section';
  humorSection.innerHTML = `
    <div class="rh-humor-grid">
      <article class="rh-humor-card">
        <div class="section-kicker">POLITICAL CARTOON</div>
        <a class="rh-cartoon-link" href="/articles/humor/national-partial-radio-explores-christianity.html" aria-label="Open Covering Christianity This Week cartoon and satire article">
          <img class="rh-cartoon-image" src="/assets/images/scholars-reporter-radio-preacher.jpg" width="320" height="240" loading="lazy" decoding="async" alt="Black-and-white political cartoon showing a radio reporter interviewing an eccentric street preacher while academic experts in graduation gowns stand nearby." />
        </a>
        <h2><a href="/articles/humor/national-partial-radio-explores-christianity.html">Covering Christianity This Week</a></h2>
        <p class="rh-cartoon-caption">Media professional hard at work.</p>
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
    .rh-cartoon-link { display:block; margin-top:10px; }
    .rh-cartoon-image { display:block; width:100%; height:auto; border:1px solid #d8d1c7; }
    .rh-cartoon-caption { color:#6b655d; font-style:italic; }
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
    window.setTimeout(() => { copyLinkButton.textContent = originalText; }, 1500);
  });
}

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
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    window.print();
    return;
  }
  printWindow.opener = null;
  const stylesheetUrl = new URL('/assets/css/styles.css', window.location.origin).href;
  const articleCopy = article.cloneNode(true);
  const actions = articleCopy.querySelector('.article-actions');
  if (actions) actions.remove();
  printWindow.document.open();
  printWindow.document.write(`<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${document.title}</title><link rel="stylesheet" href="${stylesheetUrl}"><style>body{margin:0}.article-shell{width:min(900px,calc(100% - 48px));margin:32px auto}.article-hero{display:none}</style></head><body>${articleCopy.outerHTML}</body></html>`);
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
