# JW Golf Website - Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended) - FREE

#### Via Vercel Dashboard
1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Sign in with GitHub
3. Click "Import Project"
4. Find and select `beebox196-art/jwgolf-prototype`
5. Click "Import"
6. Click "Deploy"

#### Via Vercel CLI
```bash
cd /Users/openclaw/Projects/JWGolf-Prototype
vercel login
vercel --prod
```

### Option 2: Automated Vercel Deploy
I've prepared a ZIP build: `jwgolf-prototype-build.zip`

1. Go to [https://vercel.com/import/zip](https://vercel.com/import/zip)
2. Upload `jwgolf-prototype-build.zip`
3. Configure and deploy

## After Deployment

Once deployed, you'll get a URL like:
```
https://jwgolf-prototype.vercel.app
```

## Custom Domain Setup

1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add your custom domain (e.g., `jameswhittakergolf.com`)
4. Update DNS records as instructed
5. Wait for SSL provisioning (usually 5-10 minutes)

## Recommended Next Steps

### 1. Update Placeholder Content
- Replace `public/globe.svg` with actual golf course photos
- Update testimonials with real client quotes
- Add James Whittaker headshot photo

### 2. Configure Analytics (Optional)
Add Google Analytics:
1. In Vercel dashboard, go to "Environment Variables"
2. Add `NEXT_PUBLIC_GA_ID` with your GA property ID
3. Add analytics code to `src/app/layout.tsx`

### 3. Configure Forms
Set up backend for lead capture:
- Use Formspree, Netlify Forms, or Web3Forms
- Or integrate with Mailchimp/ConvertKit directly

### 4. Calendly Integration
The contact page has links to Calendly. To enable:
1. Create a Calendly account
2. Update the links in contact page to your Calendly URL
3. Or add Calendly embed code

## Monitoring

After deployment:
1. Check Vercel Analytics for performance metrics
2. Monitor Core Web Vitals:
   - LCP < 2.5s ✓
   - FID < 100ms ✓
   - CLS < 0.1 ✓

## Support

For questions:
- GitHub Issues: https://github.com/beebox196-art/jwgolf-prototype/issues
- Vercel Documentation: https://vercel.com/docs

---

**Built with:** Next.js 15 + Tailwind CSS  
**Deployed to:** Vercel (Free Tier)  
**Repository:** https://github.com/beebox196-art/jwgolf-prototype  
