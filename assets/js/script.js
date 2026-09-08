const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
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
