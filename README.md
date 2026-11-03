# Peter Karlos — portfolio

A simple static website with four main pages and a separate page for each project. No JavaScript, framework, dependencies, or build step required.

## GitHub Pages

1. Extract this ZIP and upload its contents to the root of your `YOUR_USERNAME.github.io` repository. Keep the `projects` and `assets` folders intact.
2. Under Settings → Pages, select Deploy from a branch, then your main branch and / (root).
3. After deployment, open https://YOUR_USERNAME.github.io/.

All paths are relative, so this also works under a project repository URL.

## Files

- `index.html`: About me and skills
- `experience.html`: Work and engineering experience
- `projects.html`: Project links and relevant coursework
- `projects/*.html`: Individual project descriptions
- `resume.html`: PDF resume viewer and download
- `styles.css`: Shared styling
- `assets/Peter_Karlos_Resume.pdf`: Resume

Edit HTML files directly to add descriptions, photos, diagrams, or repository links. Replace the PDF with the same filename when updating the resume.

## Add your photo

1. Put your photo at `assets/peter-karlos.jpg` (a portrait crop works best).
2. In `index.html`, change `src="assets/profile-placeholder.svg"` to `src="assets/peter-karlos.jpg"`.
3. Change `alt="Profile photo placeholder"` to `alt="Peter Karlos"`.

The photo area automatically crops to fit. Adjust `object-position` in `.profile-photo img` in `styles.css` if needed. The small skill icons are inline SVGs and need no external library.
