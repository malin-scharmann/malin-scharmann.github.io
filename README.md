# Malin Scharmann's Portfolio

A coded rebuild of Malin Scharmann's portfolio homepage, matching the layout, colors, type, and content from the original Wix site.

This project is plain **HTML and CSS** (plus a small script for the mobile menu and contact form). Open the folder in Visual Studio or Visual Studio Code to keep editing.

## Pages

- `index.html` — Home: hero portraits, about, featured stories, involvement logos
- `projects.html` — Project gallery from the original site
- `resume.html` — Resume and CV previews
- `contact.html` — Contact form

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (this repo is set to port `43123`).

To open files directly in Visual Studio / VS Code without a server, start with `index.html` and `css/styles.css`. Image paths work best when the site is served with `npm run dev`.

## Edit the look

- Layout and colors live in `css/styles.css`
- Homepage copy lives in `index.html`
- Photos and logos live in `images/`

The palette follows the original site: navy `#162b6f`, peach `#f59e50`, periwinkle `#b0bfef`, and Fraunces + Assistant type.
