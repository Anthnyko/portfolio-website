# Anthony Co Portfolio

A modern, responsive portfolio website for showcasing my software projects, technical skills, education, internship experience, resume, and contact links.

Live site: <https://anthnyko.github.io/portfolio-website>

## Overview

This portfolio is built as a static website with no build step, making it easy to host on GitHub Pages. It includes a dark professional visual theme, animated scroll reveals, project filtering, responsive navigation, resume access, and recruiter-focused project summaries.

## Featured Sections

- Hero introduction with resume and contact calls to action
- About section focused on software engineering interests
- Technical skills grouped by language, tools, and workflow
- Featured project cards for web, Java, Python, and full-stack work
- Experience and education timeline
- Contact form and social links

## Project Structure

```text
portfolio-website/
├── index.html
├── README.md
├── LICENSE.txt
└── assets/
    ├── documents/
    │   └── Anthony_Resume.pdf
    ├── images/
    │   ├── apex-legends.png
    │   ├── christeencothumbnail.png
    │   ├── image.png
    │   ├── spreadsheet.png
    │   └── weather-tracker.png
    ├── scripts/
    │   └── portfolio.js
    ├── styles/
    │   └── portfolio.css
    └── vendor/
        └── fontawesome/
            ├── css/
            └── webfonts/
```

## Built With

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Formspree
- AI-assisted development tools for planning, copy refinement, and implementation support

## AI Usage

AI tools were used as part of the development workflow for this portfolio website, including assistance with layout planning, content refinement, code generation, and iterative improvements. Final content, project details, and design direction were reviewed and customized by Anthony Co.

## Local Development

Because this is a static site, it can be opened directly in a browser:

```text
index.html
```

For a local server, you can also run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

This project is ready for GitHub Pages. The root-level `index.html` should remain at the repository root so GitHub Pages can serve the site correctly.
