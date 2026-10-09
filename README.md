# Manoj Gadamsetty - Professional Portfolio

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-blue?style=for-the-badge)](https://manojgadamsetty.com)

This repository contains the v2 portfolio for Manoj Gadamsetty, a Principal
Software Engineer specializing in AI-native engineering, enterprise identity,
and cybersecurity.

## Live Website

- **Portfolio**: [manojgadamsetty.com](https://manojgadamsetty.com)
- **Repository**: [github.com/manojgadamsetty/portfolio](https://github.com/manojgadamsetty/portfolio)

The root [`index.html`](./index.html) redirects to [`v2/index.html`](./v2/index.html),
so opening the root locally or visiting the deployed domain always loads the v2
portfolio.

## Features

- AI-native engineering, MCP orchestration, and RAG workflows
- Enterprise identity and secure platform architecture
- Responsive glassmorphism design with light and dark themes
- Experience, work, education, CV, resume, about, and contact pages
- GitHub Pages deployment through GitHub Actions

## Project Structure

```text
portfolio/
├── index.html                 # Root redirect to the v2 homepage
├── v2/                        # The only portfolio experience
│   ├── index.html             # Homepage
│   ├── experience.html
│   ├── work.html
│   ├── education.html
│   ├── cv.html
│   ├── resume.html
│   ├── about.html
│   ├── contact.html
│   ├── styles.css
│   └── theme.js
├── resume-cv.html             # Printable resume document
├── .github/workflows/deploy.yml
└── CNAME
```

## Local Development

Open `index.html` directly, or run a local server:

```bash
npm start
```

Then open the URL shown by the server. The root entry point redirects to the
v2 homepage automatically.

## Deployment

Push to the `main` branch to trigger the GitHub Actions deployment:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub Pages publishes the repository root, with [`CNAME`](./CNAME) configuring
the custom domain.

## Contact

- **Email**: [manojgadamsetty@zohomail.in](mailto:manojgadamsetty@zohomail.in)
- **LinkedIn**: [linkedin.com/in/manojgadamsetty](https://linkedin.com/in/manojgadamsetty)
- **GitHub**: [github.com/manojgadamsetty](https://github.com/manojgadamsetty)
