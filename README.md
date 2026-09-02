# Reality Herald

**Reality Herald** is an independent digital publication devoted to serious inquiry across news, science, technology, culture, ideas, history, theology, and scholarship.

The publication aims to distinguish reporting from analysis, argument from fact-checking, and satire from straight news. Its editorial focus emphasizes evidence, clear reasoning, historical context, and serious engagement with competing claims.

Reality Herald is intended to develop into a **multi-author publication rather than a personal blog**, with room for journalists, scholars, historians, theologians, critics, and other contributors.

## Project Status

Reality Herald is currently in the **prototype and early-development stage**.

The present repository contains a lightweight, responsive homepage prototype built with plain HTML, CSS, and JavaScript. The current stories and article text serve as sample editorial content for design and development purposes.

Current priorities include:

- refining the visual identity and homepage layout;
- building article, section, and author pages;
- establishing an editorial workflow for outside contributors;
- developing the Scholarship and Journal Guide areas;
- adding search, newsletter, podcast, and media functionality;
- selecting or building a content-management system;
- connecting the finished publication to **RealityHerald.com**.

The initial site deliberately avoids unnecessary technical complexity so that the publication's editorial structure and visual identity can develop before committing to a larger framework or CMS.

## Editorial Structure

Reality Herald is organized around several major sections:

- **News & Analysis** — reporting, explanatory journalism, and analysis of significant events and developments.
- **Science & Technology** — science, medicine, technology, artificial intelligence, research, and questions concerning how scientific claims should be understood.
- **Culture** — books, film, media, education, the arts, social trends, criticism, and cultural commentary.
- **Ideas** — essays and arguments concerning philosophy, politics, ethics, law, history, human nature, and other questions of enduring significance.
- **History & Theology** — church history, historical theology, doctrine, councils and creeds, biographies, primary sources, denominational history, Christianity and culture, and related scholarship.
- **Scholarship** — academic essays, research notes, book reviews, calls for papers, and resources connecting readers and writers with serious scholarly work.
- **Reality Check** — careful examination of disputed factual claims, popular assertions, misleading narratives, and questions where evidence deserves closer scrutiny.
- **Podcasts** — interviews, discussions, lectures, debates, and other audio or video programming.
- **Write for Us** — information and submission opportunities for prospective contributors.

### Scholarship and Journal Guide

A major long-term feature of Reality Herald will be a curated **Journal Guide** designed to help readers, researchers, and prospective authors discover serious academic publications.

The guide will include both:

- journals that explicitly operate within Christian intellectual or theological traditions; and
- broader academic journals in which Christian scholars publish and in which scholarship informed by Christian commitments can participate in wider academic conversation.

Potential journal-guide fields include academic discipline, publisher, peer-review status, editorial focus, submission information, calls for papers, and notes about the kinds of scholarship commonly published there.

## Contributing

Reality Herald is intended to welcome contributions from outside writers.

Potential submission categories include:

- reported articles;
- news analysis;
- essays and arguments;
- church history and historical theology;
- academic commentary;
- research notes;
- book reviews;
- journal and scholarship guides;
- responses and rejoinders;
- cultural criticism;
- Reality Check submissions;
- podcast or interview proposals.

As the publication develops, contributor guidelines will address originality, sourcing, citation practices, conflicts of interest, editorial review, corrections, republication, author biographies, and distinctions among reporting, analysis, opinion, fact-checking, and satire.

The goal is not to require contributors to agree with one another on every question. Reality Herald should provide room for serious disagreement while expecting writers to represent evidence and opposing arguments accurately and to distinguish assertion from demonstration.


## Project Structure

```text
realityherald.com/
├── index.html
├── README.md
├── write-for-us/
│   └── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── script.js
└── articles/
    └── ideas/
        └── the-argument-beneath-the-argument.html
```

As the publication grows, additional article categories can be added under `articles/`, such as:

- `news-analysis/`
- `science-technology/`
- `culture/`
- `history-theology/`
- `scholarship/`
- `reality-check/`

## Technical Setup

The current prototype is intentionally simple and dependency-free.

### Technology

- HTML5
- CSS3
- Vanilla JavaScript
- No framework
- No package manager required
- No build process required

This makes the first version easy to inspect, modify, version through GitHub, and publish through GitHub Pages.

### Run Locally

Open `index.html` directly in a browser, or serve the repository with a local static web server.

For example, with Python:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

### GitHub Pages

The prototype can be published directly with GitHub Pages:

1. Create or open the Reality Herald GitHub repository.
2. Place the site files at the repository root.
3. Commit and push them to the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)` folder.
7. Save the settings.

### Future Technical Development

Likely future additions include:

- article and author templates;
- section archive pages;
- a searchable Journal Guide database;
- contributor submission and editorial-review workflows;
- content-management-system support;
- newsletter integration;
- full-site search;
- podcast feeds and media embeds;
- structured metadata and search-engine optimization;
- accessibility review;
- analytics;
- custom-domain configuration for **RealityHerald.com**;
- migration to a framework such as Next.js if the publication's scale eventually justifies it.

## Repository Contents

The initial prototype includes:

- `index.html` — homepage structure and sample editorial content;
- `styles.css` — typography, layout, responsive design, and visual styling;
- `script.js` — lightweight interactive behavior;
- `README.md` — project, editorial, contribution, and technical documentation.

## Editorial Note

All article headlines, descriptions, bylines, and other editorial material currently displayed in the prototype are sample content created for design purposes unless explicitly identified otherwise.
