# Nalanda High School — Next.js Website

A production-ready Next.js website for Nalanda High School, adapted from the original design.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 📦 Deployment

### Deploy to Vercel (Recommended — Free)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign up / log in
3. Click **"Add New Project"** → Import your GitHub repo
4. Vercel auto-detects Next.js — just click **Deploy**
5. Your site will be live at `your-project.vercel.app`

### Deploy to Netlify

1. Run `npm run build` locally
2. Upload the `.next` folder to Netlify
3. Or connect your GitHub repo and set build command to `npm run build`

---

## 🗺️ Adding the Google Maps Embed

1. Go to [Google Maps](https://maps.google.com)
2. Search for your school location
3. Click **Share** → **Embed a map**
4. Copy the `src="..."` URL from the iframe code
5. Open `pages/index.js`
6. Find the comment `IMPORTANT: Replace the src below...`
7. Replace the placeholder `src` with your actual Google Maps embed URL

---

## 📁 Project Structure

```
nalanda-school/
├── pages/
│   ├── _app.js          # App wrapper (imports global CSS)
│   ├── _document.js     # Custom HTML document
│   └── index.js         # Main homepage
├── styles/
│   └── globals.css      # All styles (green theme)
├── public/
│   └── images/
│       ├── hero1.jpg    # Aerial view - slide 1
│       ├── hero2.jpg    # Aerial front - slide 2
│       ├── hero3.jpg    # Ground level - slide 3
│       ├── about.jpg    # About section
│       ├── split.jpg    # Split section
│       ├── campus.jpg   # Campus photo
│       └── logo.jpg     # NHS logo
├── package.json
├── next.config.js
└── README.md
```

---

## ✏️ Customization Checklist

- [ ] Add your full school address in `pages/index.js` (search for "Add your full address")
- [ ] Replace the Google Maps embed `src` with your actual link
- [ ] Update phone numbers if needed
- [ ] Update email address
- [ ] Add real testimonials from parents
- [ ] Add/update events in the "School Life" section
- [ ] Add actual establishment year

---

## 🎨 Theme

- **Primary Green:** `#256B3A`
- **Dark Green:** `#1B5E30`
- **Light Green:** `#6DC476`
- **Navy:** `#0D1F2D`
- **Background:** `#F4FAF5`
- **Fonts:** Nunito (body) + Merriweather (headings)
