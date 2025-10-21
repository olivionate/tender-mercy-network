# Deployment Guide for Tender Mercy Network

This guide explains how to fix 404 errors when deploying your Single Page Application (SPA) to different hosting platforms.

## The Problem

React Router handles navigation on the client side. When you refresh a page or directly visit a URL like `/about` or `/programs`, the server looks for that file and returns a 404 error because these routes only exist on the client side.

## The Solution

Configure your server to redirect all requests to `index.html`, allowing React Router to handle the routing.

---

## Configuration Files Included

### 1. **Netlify** (Recommended for Lovable projects)
- **File**: `public/_redirects`
- **Status**: ✅ Already configured
- No additional setup needed - Netlify automatically reads this file

### 2. **Vercel**
- **File**: `vercel.json`
- **Status**: ✅ Already configured
- No additional setup needed - Vercel automatically reads this file

### 3. **GitHub Pages**
- **Files**: `public/404.html` + script in `index.html`
- **Status**: ✅ Already configured
- Works automatically when deployed to GitHub Pages

### 4. **Apache Server** (Shared hosting, cPanel, etc.)
- **File**: `public/.htaccess`
- **Status**: ✅ Already configured
- This file will be included in your build automatically
- Ensure `mod_rewrite` is enabled on your server

### 5. **Nginx Server**
- **File**: `nginx.conf`
- **Status**: ✅ Sample configuration provided
- You need to manually configure your Nginx server
- Copy the configuration to your Nginx config file
- Restart Nginx after updating: `sudo systemctl restart nginx`

---

## Deployment Instructions by Platform

### Lovable Cloud (Custom Domain)
1. Build your project: `npm run build`
2. The configuration files are already in place
3. Deploy through Lovable's domain settings
4. All routes will work automatically

### Netlify
1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The `_redirects` file will handle routing automatically

### Vercel
1. Import your project to Vercel
2. The `vercel.json` will be detected automatically
3. All routes will work after deployment

### Apache/cPanel Hosting
1. Build your project: `npm run build`
2. Upload contents of `dist` folder to your `public_html` or `www` directory
3. The `.htaccess` file will be included automatically
4. Ensure your hosting supports `.htaccess` and has `mod_rewrite` enabled

### Nginx Server
1. Update your Nginx configuration file (usually `/etc/nginx/sites-available/default`)
2. Use the configuration from `nginx.conf` as a reference
3. Update the `server_name` and `root` paths for your setup
4. Test configuration: `sudo nginx -t`
5. Reload Nginx: `sudo systemctl reload nginx`

### Other Platforms
- **Firebase**: Add rewrite rules to `firebase.json`
- **AWS S3**: Configure error document to redirect to `index.html`
- **Azure**: Add `web.config` with rewrite rules

---

## Testing Your Deployment

After deployment, test these scenarios:
1. Visit the home page: `https://yourdomain.com/`
2. Navigate to another page: `https://yourdomain.com/about`
3. **Refresh the page** - it should stay on `/about` (not 404)
4. Directly visit: `https://yourdomain.com/programs`
5. **Refresh again** - should work without errors

---

## Troubleshooting

### Still Getting 404 Errors?

1. **Check your build output**: Ensure all config files are in the `dist` folder after build
2. **Verify server configuration**: Confirm your hosting provider supports the configuration method
3. **Check file paths**: Ensure your app is deployed to the correct directory
4. **Clear cache**: Clear browser cache and try again
5. **Check server logs**: Look for any error messages in your hosting provider's logs

### Apache-Specific Issues
- Ensure `mod_rewrite` is enabled: Contact your hosting provider
- Check file permissions: `.htaccess` should be readable (644)
- Verify `AllowOverride All` is set in your Apache config

### Nginx-Specific Issues
- Test configuration before reloading: `sudo nginx -t`
- Check error logs: `sudo tail -f /var/log/nginx/error.log`
- Ensure the `root` path points to your actual build directory

---

## Support

If you continue to experience issues:
1. Check which hosting provider you're using
2. Verify the appropriate configuration file is present
3. Contact your hosting provider's support for server-specific help
4. Review Lovable documentation for custom domain setup

---

## Files Reference

- `public/_redirects` - Netlify configuration
- `vercel.json` - Vercel configuration
- `public/404.html` - GitHub Pages redirect handler
- `index.html` - Contains GitHub Pages script
- `public/.htaccess` - Apache server configuration
- `nginx.conf` - Nginx server configuration (reference only)
