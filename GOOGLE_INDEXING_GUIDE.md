# Google Search Console Indexing Fix Guide

## Issue Identified
Pages returning 404 in Google Search Console with validation failed messages.

## Root Causes Fixed

### 1. Hardcoded Domain Issue
- **Problem**: Sitemap had hardcoded `https://follownesia.id` which may not match actual deployment URL
- **Solution**: Created dynamic `app/sitemap.ts` using environment variables

### 2. Non-existent Blog Pages
- **Problem**: Sitemap referenced `/blog/1`, `/blog/2`, etc. which don't exist as pages
- **Solution**: Removed non-existent blog post URLs from sitemap

### 3. Missing Environment Variables
- **Problem**: No way to set actual domain and Google verification code
- **Solution**: Added environment variable support for:
  - `NEXT_PUBLIC_SITE_URL` - Your actual domain
  - `GOOGLE_SITE_VERIFICATION` - Google verification code

## Setup Instructions

### Step 1: Set Environment Variables in Vercel

1. Go to your Vercel Project Settings
2. Navigate to **Environment Variables**
3. Add these variables:

```
NEXT_PUBLIC_SITE_URL = https://follownesia.id
GOOGLE_SITE_VERIFICATION = [Your verification code from Google Search Console]
```

### Step 2: Get Google Verification Code

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter your domain: `follownesia.id`
4. Choose verification method: **HTML tag**
5. Copy the verification code (the part after `content="`)
6. Add it to Vercel environment variables

### Step 3: Verify Domain Ownership

1. Deploy your changes to Vercel
2. Google will automatically detect the meta tag in `<head>`
3. Click "Verify" in Search Console
4. Wait for verification confirmation

### Step 4: Submit Sitemap

1. In Google Search Console, go to **Sitemaps**
2. Enter: `https://follownesia.id/sitemap.xml`
3. Click Submit
4. Monitor the sitemaps report

## Sitemap Configuration

Your dynamic sitemap now includes:
- ✓ Homepage (priority: 1.0)
- ✓ Blog page (priority: 0.8)
- ✓ About page (priority: 0.7)
- ✓ Contact page (priority: 0.7)
- ✓ Privacy Policy (priority: 0.5)
- ✓ Terms of Service (priority: 0.5)

Dynamic generation ensures URLs always match your actual deployment.

## Robots.txt Configuration

Configured for optimal crawling:
- Allows all pages for indexing
- Blocks `/admin` and `/api/internal`
- Sets appropriate crawl delays
- Points to sitemap.xml

## Canonical URLs

All pages now have correct canonical URLs pointing to your primary domain using the environment variable.

## Testing

### Test Sitemap URL
Visit: `https://follownesia.id/sitemap.xml`
Should return XML with 6 URLs

### Test Robots.txt
Visit: `https://follownesia.id/robots.txt`
Should display robots.txt content

### Check Indexability
In Google Search Console:
1. Go to **URL Inspection**
2. Enter each URL from the sitemap
3. Verify "URL is on Google" status
4. Check for any crawl issues

## If Issues Persist

1. **Clear Cache**: Request re-index in Search Console for each page
2. **Check Robots Meta**: Ensure pages have `robots: { index: true, follow: true }`
3. **Check Servers**: Visit each URL directly - they should return 200 OK
4. **Resubmit Sitemap**: Sometimes Google needs fresh submission
5. **Wait**: New sites can take 1-2 weeks for full indexing

## Files Changed

- `app/sitemap.ts` - Dynamic sitemap generation
- `app/robots.ts` - Dynamic robots.txt generation
- `app/layout.tsx` - Updated with environment variable support
- `.env.example` - Documentation for required environment variables

## Next Steps

1. Set environment variables in Vercel
2. Redeploy the application
3. Wait 24 hours for verification
4. Submit sitemap to Google Search Console
5. Monitor indexing progress in Search Console
