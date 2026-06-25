# Forever Florists Website - Deployment Guide

## 🚀 Ready to Launch!

Your modern website for Forever Florists Boutique is complete and production-ready. Here's how to get it online.

---

## Option 1: Deploy to Vercel (Recommended)

Vercel is optimized for Next.js and requires zero configuration.

### Steps:
1. **Create a GitHub account** (if you don't have one): github.com
2. **Push your code to GitHub**:
   ```bash
   cd forever-florists
   git init
   git add .
   git commit -m "Initial commit: Forever Florists website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/forever-florists.git
   git push -u origin main
   ```

3. **Go to Vercel**: vercel.com
4. **Sign in with GitHub** and authorize Vercel
5. **Click "New Project"** and select your repository
6. **Deploy** - Vercel will automatically build and deploy!

Your site will be live at: `forever-florists.vercel.app`

### Add Custom Domain:
1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add your custom domain (e.g., `www.everfloristsboutique.com`)
4. Follow DNS configuration steps

---

## Option 2: Deploy to Netlify

### Steps:
1. **Build locally first**:
   ```bash
   pnpm build
   ```

2. **Go to Netlify**: netlify.com
3. **Sign up with GitHub**
4. **Click "New site from Git"**
5. **Select your repository** and authorize
6. **Build Settings**:
   - Build command: `pnpm build`
   - Publish directory: `.next`
7. **Deploy**

---

## Option 3: Self-Hosted (VPS/Dedicated Server)

If you have your own server:

### Requirements:
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx or Apache reverse proxy
- SSL certificate (Let's Encrypt)

### Steps:
1. **Clone your repository** on the server
2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Build for production**:
   ```bash
   pnpm build
   ```

4. **Start with PM2**:
   ```bash
   npm install -g pm2
   pm2 start "pnpm start" --name "forever-florists"
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx** (reverse proxy):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Enable HTTPS with Let's Encrypt**:
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

---

## Domain Name Registration

### Where to Buy:
- Namecheap (cheap, good support)
- GoDaddy (popular, full-featured)
- Google Domains (simple, integrated)

### Recommended for Forever Florists:
- `foreverflori sts.ca` (local, professional)
- `foreverflowersboutique.ca` (descriptive)
- `ffboutiqueflowers.ca` (short, memorable)

**Cost**: $10-15/year for .ca or .com

---

## Post-Deployment Checklist

- [ ] **Test on mobile**: Use dev tools to test all pages
- [ ] **Test contact methods**: Call number, email should work
- [ ] **Test social links**: Instagram and Facebook links working
- [ ] **Page speed**: Check Lighthouse score (aim for 90+)
- [ ] **SEO**: Google Search Console setup
- [ ] **Analytics**: Add Google Analytics or similar
- [ ] **Backup**: Set up automatic backups
- [ ] **SSL**: Verify HTTPS is working
- [ ] **Monitoring**: Set up uptime monitoring

---

## Updating the Website

### Making Changes:
1. **Edit component files** in `/components` or `/app`
2. **Test locally**:
   ```bash
   pnpm dev
   ```
3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push
   ```
4. **Vercel auto-deploys** on push!

### Common Updates:
- **Change phone number**: Edit `components/Header.tsx`, `components/Footer.tsx`, `components/CTA.tsx`
- **Update hours**: Edit `components/About.tsx`, `components/CTA.tsx`
- **Add new service**: Edit `components/Services.tsx`
- **Modify colors**: Edit `tailwind.config.ts`

---

## Analytics & Monitoring

### Add Google Analytics:
1. Go to analytics.google.com
2. Create a new property
3. Add tracking ID to your site
4. Monitor visitor behavior, traffic sources, etc.

### Email Notifications:
1. Set up Vercel notifications in project settings
2. Get alerts on failed deployments

### Uptime Monitoring:
Use Uptime Robot (free tier available) to get alerts if site goes down.

---

## Email Integration (Optional Future)

### For Contact Form:
- **Resend.io**: Easy Next.js integration
- **SendGrid**: Reliable, affordable
- **Mailgun**: Developer-friendly

### Setup:
```tsx
// Example with Resend
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'contact@yourdomain.com',
  to: 'foreverfloristspg@yahoo.ca',
  subject: 'New Inquiry',
  html: message,
});
```

---

## Performance Tips

### After Deployment:
1. **Enable image optimization**
   - Already done with Next.js Image component
   - Vercel handles automatic optimization

2. **Set cache headers**:
   ```js
   // next.config.js
   headers: {
     'Cache-Control': 'public, max-age=31536000, immutable'
   }
   ```

3. **Monitor Core Web Vitals**:
   - Lighthouse: https://PageSpeed.Insights
   - Web Vitals: Use `next/web-vitals`

---

## Troubleshooting

### Site Won't Load:
- Check Vercel/hosting status dashboard
- Check logs in Vercel console
- Verify domain DNS is pointing correctly

### Emails Not Working:
- Check environment variables are set
- Verify email service API key
- Check spam folder

### Slow Performance:
- Check Lighthouse report
- Verify images are optimized
- Check database queries (if applicable)

### Build Fails:
- Check for TypeScript errors: `pnpm type-check`
- Clear `.next` folder and rebuild
- Check dependencies are installed

---

## Cost Estimate (Monthly)

| Item | Cost | Notes |
|------|------|-------|
| **Hosting (Vercel)** | $0-20 | Free tier usually sufficient |
| **Domain** | ~$1 | Pro-rated yearly ($10-15/year) |
| **Email (Resend)** | $0-10 | Free 100 emails/day |
| **Analytics** | $0 | Google Analytics free |
| **CDN** | Included | Vercel includes worldwide CDN |
| **SSL** | Included | Automatic Let's Encrypt |
| **Backups** | Included | Git provides version control |
| **Total** | **$1-30** | Extremely affordable |

---

## Support & Help

### Vercel Support:
- Documentation: vercel.com/docs
- Status page: status.vercel.com
- Support: contact Vercel team

### Next.js Docs:
- Official docs: nextjs.org/docs
- Discord community: discord.gg/nextjs

### For Forever Florists Team:
- **Quick fix**: Edit files in GitHub web editor (no CLI needed)
- **Need help?**: Keep this guide handy
- **Major changes?**: Contact the developer

---

## Next Steps

1. **Register a domain** (today)
2. **Deploy to Vercel** (today)
3. **Test thoroughly** (before telling customers)
4. **Update business info** (everywhere: Google My Business, social media, etc.)
5. **Launch and monitor** (first week)

---

## Success Metrics

After launch, track these:
- **Traffic**: Google Analytics
- **Engagement**: Time on site, bounce rate
- **Conversions**: Phone clicks, email inquiries
- **Search**: Rankings for "florist Prince George"
- **Social**: Instagram followers, website shares

---

**You're ready to go live! 🌹**

Questions? Keep this guide handy or contact your developer.
