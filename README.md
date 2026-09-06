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

The initial site deliberately avoids unnecessary technical complexity so that the publication's editorial structure and visual identity can develop before committing to a larger structure or CMS.

## Editorial Structure

Reality Herald is organized around several major sections:

- **News & Analysis** — reporting, explanatory journalism, and analysis of significant events and developments.
- **Science & Technology** — science, medicine, technology, artificial intelligence, research, and questions concerning how scientific claims should be understood.
- **Culture** — books, film, media, education, the arts, social trends, criticism, and cultural commentary.
- **Ideas** — essays and arguments concerning intellectual inquiry, politics, ethics, law, history, human nature, and other questions of enduring significance.
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
├── archive/
│   └── index.html
├── contributors/
│   └── index.html
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
- No structure
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
- migration to a structure such as Next.js if the publication's scale eventually justifies it.

## Repository Contents

The initial prototype includes:

- `index.html` — homepage structure and sample editorial content;
- `styles.css` — typography, layout, responsive design, and visual styling;
- `script.js` — lightweight interactive behavior;
- `README.md` — project, editorial, contribution, and technical documentation.

## Editorial Note

All article headlines, descriptions, bylines, and other editorial material currently displayed in the prototype are sample content created for design purposes unless explicitly identified otherwise.


### Funding
Reality Herald plans to remain freely accessible and seek support through voluntary contributions, grants, and selective sponsorships rather than memberships, hard paywalls, or email fundraising campaigns.


## Mission Emphasis

Reality Herald seeks to introduce intellectually curious readers to the world of serious academic scholarship and help emerging writers participate in that world.

Reality Herald also plans to showcase the work of Christian law unions and legal organizations, connecting practical legal work with serious academic scholarship and open argument.


## Publication Policies

The project now includes:
- Editorial Standards
- Corrections Policy
- Privacy Policy
- Terms of Use

These pages provide an operational starting point and should receive legal review before Reality Herald begins substantial reporting on contentious matters or activates payment and data-collection systems.


## Student Argumentation

Reality Herald includes a student-facing hub for speech and debate, Model United Nations, Global Issues Network, and mock trial. The hub links to NSDA, Tabroom, GIN, AMTA, and selected 2026–27 Model UN conferences, with a conference-calendar page intended for continued updates.


## Teacher Resources

Reality Herald now includes a teacher-facing hub for WebQuests, classroom argument assignments, student-club preparation, and external teaching tools. The WebQuest guide links to PBworks, Google Sites, Teachers Pay Teachers, and the existing Student Argumentation section.


## Colleges & Scholars
Reality Herald now includes a searchable guide built around current scholars, departments, centers, intellectual challenge, and the distinction between active faculty and emeriti/intellectual lineage.


## Apologetics Programs

The Colleges & Scholars hub now includes a separate Apologetics Programs section. Universities, seminaries, and churches appear in that section solely because they offer structured apologetics education or recurring apologetics classes; inclusion does not imply broader endorsement. Hillsdale College has also been added to the main scholar-driven college directory based on current intellectual inquiry and religion faculty and research.


## Submission Infrastructure

Reality Herald now has four submission paths: Articles & Essays, Peer-Reviewed Scholarship, Student Arguments, and Teacher Resources. Secure upload processing is not yet connected.


## Navigation update

The primary menu now follows this order:

News & Analysis · Reality Check · Science & Technology · History & Theology · Law · Culture · Ideas · Find Scholars · Student Arguments · Podcasts · Write for Us

Archive appears only once in the top utility bar, alongside Support and Write for Us.


## Section dropdown navigation

The main navigation now uses two expandable sections:

- Student Section: Find Scholars, Colleges, Popular Arguments, Common Fallacies, Argument & Debate Resources, Conference Calendar, and Apologetics Programs.
- Teacher Section: Union Propaganda, Resources, WebQuests, Teaching Argument, Debate/MUN/Mock Trial, and Student Conference Calendar.

Standalone Find Scholars, Colleges, and Student Arguments links were removed from the main bar.


## Site search

A Google-powered site search appears in the top utility bar. Searches are limited to Reality Herald using Google's `site:realityherald.com` operator. No Google Programmable Search Engine ID is required.


## Starter editorial package

Reality Herald now launches with eight substantive pieces across Ideas, Law, History & Theology, Science & Technology, Reality Check, the Student Section, and the Teacher Section. Placeholder contributor identities were replaced with the institutional byline “Reality Herald Editorial Desk,” and the homepage and Archive now link to the published starter content.


## Law section

Reality Herald now has a dedicated Law landing page covering Christian legal thought, natural law, religious liberty, church-state questions, constitutional interpretation, family and education law, major cases, legal organizations, and responses/rejoinders. The main navigation now links directly to `/law/`.


## Expanded Colleges & Scholars directory

The scholar-driven college guide now contains 20 institutions across the United States and United Kingdom. Entries emphasize current faculty, realistic student access, fields of strength, and intellectual challenge. Famous emeriti remain separated from scholars students may actually study with. The separate Apologetics Programs section remains intact and follows a different inclusion rule.


## Sitewide vocabulary rule

Reality Herald follows the author's established banned-vocabulary rules throughout visible site copy, including articles, directory descriptions, resource pages, and navigation text. External URLs may retain provider-defined path strings.


## Podcast infrastructure

Reality Herald now includes a Podcasts landing page, reusable episode template, and sample episode page. The structure supports future audio embeds, RSS distribution, guests, show notes, transcripts, related reading, and listener support. No feed URL or platform account has been invented.
