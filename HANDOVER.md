# TradeMind AI Website Handover Guide

Congratulations on your new AI trading algorithm marketplace! Your website is fully developed, refactored for dynamic management, and pushed to your GitHub repository.

## 🔗 Project Links
- **GitHub Repository:** [https://github.com/zondiboyfxtraders/trademind-ai](https://github.com/zondiboyfxtraders/trademind-ai)
- **Live Preview (Dev):** `http://spongebob.killer.com` (Note: Ensure your DNS is pointed to your hosting provider).

## 🛠 Management & Updates
The website is built to be "Code-Free" for daily management. You can update key business data by editing JSON files in the `/public/data/` folder directly on GitHub or locally.

### 1. Update Brand & Contact Details
Edit `public/data/brand.json`:
- **name**: Your business name.
- **domain**: Your website URL.
- **whatsapp**: The number for the "Contact Support" buttons.
- **tagline** & **description**: Site-wide marketing text.

### 2. Update Pricing & Robot Names
Edit `public/data/pricing.json`:
- Change robot names (e.g., "Mobile Lifetime").
- Update prices (ZAR and USD).
- Add/Remove features for each plan.

### 3. Update Bank Details (Crucial!)
Edit `public/data/payment-info.json`:
- **accountNumber**, **bankName**, **holderName**, **branchCode**, **swiftCode**.
- **whatsappForProof**: The number where users should send their payment screenshots.

### 4. Upload Verified Trading Results
- **Images:** Add your MT4/MT5 screenshots to `public/images/results/`.
- **Data:** Update `public/data/results.json` with the new image filenames, captions, and dates.

## 🚀 Deployment Instructions
To make your site public:
1. Sign up for a free account at [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. Click **"New Project"** and connect your GitHub account.
3. Select the `trademind-ai` repository.
4. Keep all default build settings (Framework: Vite).
5. Click **"Deploy"**.
6. Once deployed, add your custom domain (`spongebob.killer.com`) in the hosting dashboard.

## 📱 Support
All support buttons on the site lead directly to your WhatsApp number. Ensure you have the WhatsApp Desktop app or a dedicated phone ready to handle "Proof of Payment" submissions.

---
*Handover completed by Team TradeMind AI.*
