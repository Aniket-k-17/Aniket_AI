# Deployment Audit & Compatibility Report

This document reports on the deployment compatibility, routing behavior, resume download paths, and link sanitization for the **Aniket Kondhalkar Portfolio**.

---

## 1. Project Architecture & Deployment Audit
* **Application Framework**: TanStack Start (Beta SSR powered by Vite, Vinxi, and Nitro).
* **Rendering Paradigm**: Server-Side Rendering (SSR). Pages are rendered dynamically on the server and hydrated on the client.
* **Vercel Build Behavior**: 
  - Originally, when running `npm run build`, the custom configuration `@lovable.dev/vite-tanstack-config` was skipping the Nitro deploy plugin because no active Lovable context was detected.
  - Since the deploy plugin was skipped, the project only generated static bundles in `dist/client` and server bundles in `dist/server`. It failed to produce the routing and runtime configurations expected by Vercel (specifically, the `.vercel/output` folder conforming to Vercel's Build Output API).
  - As a result, Vercel treated the project as a static website, but because there was no static `index.html` at the root output directory, any navigation or refresh to the site immediately returned a **404 Page Not Found** error.

---

## 2. Compatibility Fixes Applied

### Vercel Deployment Configuration
* **Vite Config Modification**: We updated [vite.config.ts](file:///c:/Users/Anike/OneDrive/Desktop/aniket_pf/Aniket_AI/vite.config.ts) to pass `nitro: { preset: 'vercel' }` directly inside `defineConfig`.
* **Build Impact**: 
  - Running `npm run build` now forces the Nitro bundler to run and compile for the `vercel` preset.
  - The build process now generates the `.vercel/output` directory at the project root. This output contains:
    - `.vercel/output/static/`: Static assets (including stylesheets, fonts, pictures, and the resume file).
    - `.vercel/output/functions/__server.func/`: A compiled Node.js Serverless Function containing the SSR entry handler.
    - `.vercel/output/config.json`: The Vercel Build Output routing configuration that forwards requests to the SSR function and assets automatically.
  - This completely solves routing and reload 404 issues on Vercel because Vercel native routers now know to delegate page rendering to the serverless function.

---

## 3. Link Sanitization & External Links Audit

### LinkedIn
* **Issue**: Verify LinkedIn profile links are formatted to open in a new tab without intercepting or embedding behaviors.
* **Files Checked**: 
  - [Hero.tsx](file:///c:/Users/Anike/OneDrive/Desktop/aniket_pf/Aniket_AI/src/components/portfolio/Hero.tsx) (Hero section icons)
  - [Footer.tsx](file:///c:/Users/Anike/OneDrive/Desktop/aniket_pf/Aniket_AI/src/components/portfolio/Footer.tsx) (Footer icons)
  - [Contact.tsx](file:///c:/Users/Anike/OneDrive/Desktop/aniket_pf/Aniket_AI/src/components/portfolio/Contact.tsx) (Connect channels list)
  - [Chatbot.tsx](file:///c:/Users/Anike/OneDrive/Desktop/aniket_pf/Aniket_AI/src/components/portfolio/Chatbot.tsx) (AI recommendations/contact suggestions)
* **Settings**: All LinkedIn links correctly target `https://www.linkedin.com/in/aniket-kondhalkar-174a0a258/` and include `target="_blank"` and `rel="noopener noreferrer"`.

### GitHub
* **Profile Link**: `https://github.com/Aniket-k-17`
* **Project Repository Links**:
  - InsightGen AI: `https://github.com/Aniket-k-17/InsightGen-AI`
  - Retail Marketing Analytics Dashboard: `https://github.com/Aniket-k-17/retail-marketing-analytics-dashboard`
  - CineMatch Movie Recommender: `https://github.com/Aniket-k-17/Cinematch`
* **Settings**: All GitHub links include `target="_blank"` and `rel="noopener noreferrer"` for a seamless tab transition.

### Live Demos & Certifications
* **Demos**: InsightGen AI (`https://insightgen-ai-by-aniket.streamlit.app/`), Retail Marketing Dashboard (`https://retail-marketing-analytics-dashboard-by-aniket.streamlit.app/`), CineMatch (`https://huggingface.co/spaces/aniket17k/Cinematch`).
* **Certifications**: Verification links point to `https://www.aiadventures.in/certificate/?certificate=[ID]`.
* **Settings**: All open in new tabs correctly with `target="_blank"` and `rel="noopener noreferrer"`.

---

## 4. Resume Download Integration
* **File Location**: `public/Aniket_Kondhalkar_Resume.pdf`.
* **Build Handling**: Nitro copies the files in `/public` to the static assets destination of Vercel (`.vercel/output/static/Aniket_Kondhalkar_Resume.pdf`).
* **Routing**: The download link matches `/Aniket_Kondhalkar_Resume.pdf` and contains the HTML5 `download` attribute to force local download instead of loading inside the tab. Tested and verified on both dev and build output.

---

## 5. Deployment Instructions on Vercel
To deploy this project to Vercel:
1. Connect your repository to Vercel.
2. Vercel will auto-detect the framework. Set the **Framework Preset** to **Other** (or let it auto-detect Vinxi/Nitro if available).
3. Ensure the **Build Command** is set to `npm run build`.
4. Ensure the **Output Directory** is set to `.vercel/output` (Vercel automatically detects this directory name if it exists after building).
5. Deploy. Routing, SSR rendering, assets, and sitemaps will run out-of-the-box.
