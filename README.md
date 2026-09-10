# Malin Scharmann's Portfolio

A coded rebuild of Malin Scharmann's portfolio homepage, matching the layout, colors, type, and content from the original Wix site.

This is a GitHub project: HTML, CSS, and a small script for the mobile menu and contact form. Edit in Cursor, then commit and push to GitHub.

## Pages

- `index.html` — Home: hero, about, featured stories, involvement logos
- `projects.html` — Project gallery
- `resume.html` — Resume and CV previews
- `contact.html` — Contact form

## Publish on GitHub Pages

After this repo is on GitHub:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set Source to **GitHub Actions**.
4. The included workflow publishes the site on every push to `main`.
5. The live URL will look like `https://<your-github-username>.github.io/<repo-name>/`.

You can also serve the files from the `main` branch (root folder) if you prefer branch-based Pages instead of Actions.

## Run locally

```bash
git clone <your-github-repo-url>
cd <repo-name>
npm install
npm run dev
```

Then open the local URL Vite prints (port `43123`).

## Edit the look

- Layout and colors: `css/styles.css`
- Homepage copy: `index.html`
- Photos and logos: `images/`

The palette follows the original site: navy `#162b6f`, peach `#f4b29b`, cyan `#4dc9e6`, and Fraunces + Assistant type.
