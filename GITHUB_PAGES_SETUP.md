# GitHub Pages Deployment Setup Guide

## 🚨 Current Issue
The GitHub Actions deployment is failing with:
```
remote: Permission to thesahebi/afghankar.git denied to github-actions[bot].
fatal: unable to access 'https://github.com/thesahebi/afghankar.git/': The requested URL returned error: 403
```

## ✅ Solutions Provided

I've created multiple workflow files to fix this issue:

### 1. **Updated Main Workflow** (`.github/workflows/build.yml`)
- Uses the new GitHub Pages deployment actions
- Includes proper permissions and environment setup
- More secure and recommended approach

### 2. **Alternative Workflow** (`.github/workflows/deploy-pages.yml`)
- Simplified version using official GitHub Pages actions
- Clean and minimal configuration

### 3. **Simple Workflow** (`.github/workflows/deploy-simple.yml`)
- Uses the traditional peaceiris action
- Fallback option if the new actions don't work

## 🔧 Manual Setup Steps

### Step 1: Enable GitHub Pages
1. Go to your repository: `https://github.com/thesahebi/afghankar`
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### Step 2: Configure Repository Permissions
1. In repository **Settings**
2. Go to **Actions** → **General**
3. Under **Workflow permissions**, select:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
4. Save changes

### Step 3: Enable Actions
1. Go to **Actions** tab in your repository
2. Make sure GitHub Actions are enabled
3. You should see the workflow files listed

## 🚀 Deployment Options

### Option A: Use New GitHub Pages Actions (Recommended)
The updated `build.yml` workflow uses the official GitHub Pages deployment actions:
- `actions/configure-pages@v4`
- `actions/upload-pages-artifact@v3`
- `actions/deploy-pages@v4`

### Option B: Use Simple Deployment
The `deploy-simple.yml` workflow uses the traditional approach:
- `peaceiris/actions-gh-pages@v3`
- Simpler configuration
- More widely used

### Option C: Manual Deployment
If automated deployment doesn't work:
1. Build locally: `npm run build`
2. Upload `dist/` folder contents to GitHub Pages manually

## 📋 Testing the Fix

### 1. Commit and Push Changes
```bash
git add .
git commit -m "Fix GitHub Pages deployment permissions"
git push origin master
```

### 2. Check GitHub Actions
1. Go to **Actions** tab in your repository
2. Look for the workflow run
3. Check if it completes successfully

### 3. Verify Deployment
1. Go to **Settings** → **Pages**
2. Check if the site is deployed
3. Visit your GitHub Pages URL

## 🔍 Troubleshooting

### If Still Getting Permission Errors:

#### 1. Check Repository Settings
- Ensure GitHub Pages is enabled
- Source should be set to "GitHub Actions"
- Workflow permissions should be "Read and write"

#### 2. Check Workflow Permissions
Add this to your workflow file:
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

#### 3. Use Personal Access Token (Alternative)
If the above doesn't work:
1. Create a Personal Access Token with `repo` and `pages` permissions
2. Add it as a repository secret named `GH_TOKEN`
3. Update workflow to use `${{ secrets.GH_TOKEN }}`

#### 4. Check Branch Protection
- Make sure the `master` branch allows GitHub Actions
- Go to **Settings** → **Branches** → **Branch protection rules**

## 📊 Expected Results

After successful deployment:
- ✅ GitHub Actions workflow completes without errors
- ✅ GitHub Pages shows "Your site is published at..."
- ✅ Website is accessible at: `https://thesahebi.github.io/afghankar`
- ✅ All pages (Home, About, Services, Contact) work correctly
- ✅ RTL layout and Persian text display properly

## 🎯 Next Steps

1. **Push the updated workflows** to GitHub
2. **Enable GitHub Pages** in repository settings
3. **Configure permissions** as described above
4. **Monitor the Actions tab** for successful deployment
5. **Test the live website** to ensure everything works

## 📞 Support

If you continue to have issues:
1. Check the GitHub Actions logs for specific error messages
2. Verify all repository settings are configured correctly
3. Try the alternative workflow files provided
4. Consider using a different deployment method (Netlify, Vercel, etc.)

The website is fully built and ready for deployment - it's just a matter of configuring the GitHub Pages permissions correctly.
