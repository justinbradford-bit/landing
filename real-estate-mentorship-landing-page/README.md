# Real Estate Development Mentorship Landing Page

Static, responsive landing page for Vercel. No framework or build step required.

## Add checkout links
Edit `script.js` and replace the placeholder URLs in `CHECKOUT_URLS`:
- `general`: your $5 recurring checkout link
- `oneonone`: your $500 one-on-one checkout link

The page currently assumes $5/month recurring and $500 one-time. Make sure these match your actual offer and checkout configuration.

## Add your VSL
In `index.html`, find the `.video-frame` / `.video-content` placeholder and replace the placeholder content with the embed iframe supplied by your video host.

## Deploy
1. Unzip the project.
2. Push the folder to a GitHub repository or import it into Vercel.
3. Create a new Vercel project and select the repository.
4. Choose a static/Other project if prompted. No build command is required; use `.` as the output directory.
5. Deploy.

Before going live, update the checkout links, embed your VSL, verify all offer claims and terms, and add your privacy policy and required business disclosures.
