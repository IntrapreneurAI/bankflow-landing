# BankFlow - Netlify Deployment Guide

## Quick Deploy to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. **Go to Netlify**: https://app.netlify.com/
2. **Click "Add new site"** → **"Import an existing project"**
3. **Connect to GitHub**: Select `IntrapreneurAI/bankflow-landing`
4. **Configure build settings** (should auto-detect from `netlify.toml`):
   - Build command: `pnpm install && pnpm run build`
   - Publish directory: `dist/public`
   - Node version: `22.13.0`
5. **Add environment variables** (if needed):
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key
6. **Click "Deploy site"**

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Configuration Files

- **netlify.toml**: Build configuration and redirects for SPA routing
- **.nvmrc**: Specifies Node.js version (22.13.0)

## Environment Variables Required

The following environment variables need to be set in Netlify:

### Supabase (for lead capture)
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

### Optional (for branding)
- `VITE_APP_TITLE`: "BankFlow" (default)
- `VITE_APP_LOGO`: Path to logo (default: "/bankflow-shield-icon.svg")

## Custom Domain Setup

After deployment:

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `bankflow.ai`)
4. Follow DNS configuration instructions
5. Enable HTTPS (automatic with Netlify)

## Build Output

- **Build command**: `pnpm install && pnpm run build`
- **Output directory**: `dist/public`
- **SPA routing**: Configured via redirects in `netlify.toml`

## Troubleshooting

### Build fails with "command not found: pnpm"
- Netlify should auto-install pnpm based on `packageManager` in package.json
- If issues persist, add to netlify.toml: `NPM_FLAGS = "--version"` under `[build.environment]`

### 404 errors on page refresh
- Ensure `netlify.toml` redirects are in place (already configured)

### Environment variables not working
- Make sure all `VITE_*` variables are set in Netlify UI under Site settings → Environment variables
- Rebuild the site after adding variables

## Post-Deployment

✅ Test the website at your Netlify URL (e.g., `https://bankflow-landing.netlify.app`)
✅ Configure custom domain (bankflow.ai)
✅ Set up Supabase environment variables for lead capture
✅ Test contact forms to ensure Supabase integration works
✅ Enable HTTPS (automatic)

## Repository

GitHub: https://github.com/IntrapreneurAI/bankflow-landing
