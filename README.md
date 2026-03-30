# 🦷 Dental Clinic Website

Live website for a dental clinic built as a portfolio project.  
React + TypeScript, plain CSS, Vite.

## ✨ Features
- Responsive design (mobile hamburger menu)
- Image slideshow with navigation (arrows + dots)
- Services section with cards
- Contact section with embedded Google Maps
- Booking CTA with tel: link
- Environment-based config (no hardcoded clinic data)

## 🛠️ Stack
- React 19 + TypeScript
- React Router v7
- Vite 7
- CSS



## 🚀 Getting started
```bash
git clone https://github.com/pawli444/dental-clinic-website.git
cd dental-clinic-website
npm install
cp .env.example .env.local
# fill in .env.local
npm run dev
```

## ⚙️ Environment variables
See `.env.example` - copy to `.env.local` and fill in:
```
- VITE_CLINIC_NAME - clinic display name (used in nav/logo alt text)
- VITE_CLINIC_PHONE - main phone number (CTA, tel: link)
- VITE_CLINIC_ADDRESS - clinic address (Contact page)
- VITE_CLINIC_DENTIST - dentist / owner name (used in index.html meta)
- VITE_REGISTERED - registration/company number (Footer/meta)
- VITE_MAPS_EMBED_URL - full maps iframe src (Google Maps or other embed URL)
- VITE_CONTACT_FORM_URL - optional: URL to submit contact form (if not set, code uses the 
```

Notes:
- `index.html` contains `%VITE_CLINIC_*%` tokens which Vite replaces at build time - ensure values exist when building for production.
- `VITE_` vars are public. Do not include server secrets here.

### Example `.env.example`
```text
# Copy this file to .env.local and fill the values (do NOT commit .env.local)

VITE_CLINIC_NAME=Your Clinic Name
VITE_CLINIC_PHONE=+48 123 456 789
VITE_CLINIC_ADDRESS=Street 1, City
VITE_CLINIC_DENTIST=Dr. Name Surname
VITE_REGISTERED=Registration/Company number
VITE_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=... (full embed src)
```
## Scripts
- `npm run dev` - start dev server (vite)
- `npm run build` - runs `tsc -b` then `vite build`
- `npm run preview` - preview production build (`vite preview`)
- `npm run lint` - run eslint
