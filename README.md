# Yasas Ekanayake, academic website

A one-page React (Vite) portfolio with a top navigation bar, project tiles you can filter, and a timeline for experience and education. **Every piece of text, image path and link lives in one file:
`src/data/content.js`.** You should not need to touch anything else to update the site.

## Run it on your computer

```bash
npm install
npm run dev        # opens a live preview, updates as you save
```

## Change the content

Open `src/data/content.js`.

| To do this | Do this |
|---|---|
| Edit text | Change the string |
| Add a publication, project, job, etc. | Copy an existing `{ ... }` block in that list and edit it |
| Remove one | Delete its `{ ... }` block |
| Add a repository or paper link | Replace `url: ""` with the address |
| Add a project | Copy a block in `projects`; `type` is `"Research"` or `"Software"` |
| Add a new link button | Add `{ label: "Slides", url: "https://..." }` to that item's `links` |
| Reorder the menu | Reorder the `nav` list |

## Replace the images

The portfolio only uses your photo, your CV and organisation logos. Projects and publications have
**no images**; they show tags and link buttons (repository, paper, demo) instead.
Put files in `public/assets/`:

```
public/assets/profile.jpg                      your photo (portrait, about 3:4 works best)
public/assets/logos/moratuwa.png               organisation logos (about 200 x 200 px)
public/assets/logos/iit.png
public/assets/logos/wso2.png
public/assets/logos/richmond.png
public/assets/Yasas_Ekanayake_CV.pdf           your CV
```

Use a different file name? Change the path in `content.js` to match. To hide a logo, delete its `logo:` line.

## Placeholders

While `SHOW_PLACEHOLDERS = true` (top of `content.js`), a missing photo or logo shows a dashed box naming the
file to add, and an empty link shows a dashed "add link" tag. Once everything is filled in, set it to
`false`. Anything still missing then disappears instead of showing a placeholder.

## Publish on GitHub Pages

1. Create a repository named `Yasas2000.github.io` (or any name) and push this folder to the `main` branch.
2. On GitHub go to **Settings, Pages, Build and deployment, Source** and choose **GitHub Actions**.
3. Every push to `main` now builds and publishes the site automatically (`.github/workflows/deploy.yml`).

Prefer manual? Run `npm run build` and upload the contents of the `dist/` folder.


