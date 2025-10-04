# Azure Static Website Deployment Guide for Afghankar.com

## 🚀 Azure Deployment Setup

The Azure Web Apps workflow is now configured and ready to deploy your Afghankar.com website to Azure Static Website.

## 📋 Prerequisites

### 1. Azure Storage Account
- **Storage Account Name**: `angursweb01` (configured in workflow)
- **Static Website**: Must be enabled
- **Container**: `$web` (for static website hosting)

### 2. Azure Storage Account Key
Get your Azure Storage Account access key:

```bash
# Get storage account key
az storage account keys list \
  --resource-group {your-resource-group} \
  --account-name angursweb01 \
  --query '[0].value' \
  --output tsv
```

### 3. GitHub Secrets
Add the following secrets to your GitHub repository:
- **Secret Name**: `AZURE_STORAGE_ACCOUNT_KEY`
- **Value**: Your Azure Storage Account access key
- **Variable Name**: `AZURE_STORAGE_ACCOUNT_NAME` (already configured)
- **Value**: `angursweb01`

## 🔧 Configuration

### Workflow Configuration
The workflow is configured with:
- **Node.js Version**: 18.x
- **Storage Account**: angursweb01
- **Build Command**: `npm run build`
- **Deploy Directory**: `dist/`

### SEO Files Created
The following SEO files have been created in the `public/` directory:
- ✅ `robots.txt` - Search engine crawler instructions
- ✅ `sitemap.xml` - Site structure for search engines
- ✅ `404.html` - Custom 404 error page in Persian
- ✅ `staticwebapp.config.json` - Azure Static Web Apps configuration
- ✅ `web.config` - IIS configuration for Windows hosting
- ✅ `_redirects` - Netlify-style redirects

## 🚀 Deployment Process

### 1. Automatic Deployment
The workflow triggers on:
- Push to `master` branch
- Manual workflow dispatch

### 2. Build Process
1. **Checkout Code**: Gets the latest code
2. **Setup Node.js**: Installs Node.js 18.x
3. **Install Dependencies**: Runs `npm ci`
4. **Build Project**: Runs `npm run build`
5. **Copy SEO Files**: Copies SEO files from `public/` to `dist/`
6. **Verify Build**: Checks that all files are present

### 3. Deploy Process
1. **Download Artifacts**: Gets the built files
2. **Deploy Files**: Uploads all files to Azure Storage using account key
3. **Verify Deployment**: Checks that files are accessible
4. **Test URLs**: Verifies SEO files are accessible via HTTP

## 🌐 Website URLs

After successful deployment, your website will be available at:
- **Primary URL**: `https://angursweb01.z13.web.core.windows.net`
- **Custom Domain**: (if configured) `https://afghankar.com`

## 📊 SEO Features

### Search Engine Optimization
- **Robots.txt**: Guides search engine crawlers
- **Sitemap.xml**: Lists all pages for search engines
- **Meta Tags**: Proper meta tags in HTML
- **Structured Data**: JSON-LD structured data
- **RTL Support**: Proper RTL markup for Persian content

### Performance Optimization
- **Static Files**: All assets are static for fast loading
- **CDN**: Azure CDN for global content delivery
- **Compression**: Gzip compression enabled
- **Caching**: Proper cache headers for static assets

## 🔍 Monitoring and Verification

### Deployment Verification
The workflow includes verification steps:
- ✅ File upload verification
- ✅ SEO file accessibility testing
- ✅ CDN propagation checks
- ✅ URL accessibility testing

### Monitoring URLs
- **robots.txt**: `https://angursweb01.z13.web.core.windows.net/robots.txt`
- **sitemap.xml**: `https://angursweb01.z13.web.core.windows.net/sitemap.xml`
- **404 page**: `https://angursweb01.z13.web.core.windows.net/404.html`

## 🛠️ Troubleshooting

### Common Issues

#### 1. Azure Storage Key Error
```
Error: Storage account key authentication failed
```
**Solution**: Check that `AZURE_STORAGE_ACCOUNT_KEY` secret is properly set in GitHub repository settings.

#### 2. Storage Account Access Error
```
Error: Storage account not found or access denied
```
**Solution**: Verify the storage account name and ensure the storage account key is correct.

#### 3. Build Failure
```
Error: npm run build failed
```
**Solution**: Check that all dependencies are properly installed and the build process works locally.

#### 4. SEO Files Not Accessible
```
Error: robots.txt not accessible
```
**Solution**: Check that SEO files are properly copied to the `dist/` directory during build.

### Debug Steps
1. **Check GitHub Actions Logs**: Review the workflow execution logs
2. **Verify Azure Resources**: Ensure storage account and static website are properly configured
3. **Test Locally**: Run `npm run build` locally to ensure it works
4. **Check Storage Key**: Verify that the storage account key is correct and has proper permissions

## 📈 Performance Monitoring

### Key Metrics to Monitor
- **Page Load Time**: Should be under 3 seconds
- **Core Web Vitals**: LCP, FID, CLS scores
- **SEO Score**: Google PageSpeed Insights
- **Accessibility**: WCAG compliance

### Tools for Monitoring
- **Google PageSpeed Insights**: Performance and SEO analysis
- **Google Search Console**: Search performance monitoring
- **Azure Monitor**: Infrastructure monitoring
- **GTmetrix**: Performance testing

## 🎯 Next Steps

1. **Add Azure Storage Account Key** to GitHub secrets
2. **Enable Static Website** on your Azure Storage Account
3. **Push changes** to trigger the deployment
4. **Monitor the deployment** in GitHub Actions
5. **Test the live website** to ensure everything works
6. **Configure custom domain** (optional)
7. **Set up monitoring** and analytics

## 📞 Support

If you encounter any issues:
1. Check the GitHub Actions logs for specific error messages
2. Verify Azure storage account and key permissions
3. Test the build process locally
4. Review the troubleshooting section above

The website is fully configured and ready for Azure deployment!
