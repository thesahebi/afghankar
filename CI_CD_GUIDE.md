# CI/CD Build Guide for Afghankar.com

## ✅ Build Issue Fixed

The GitHub CI/CD build error has been resolved by switching from `terser` to `esbuild` for minification.

## 🔧 Changes Made

### 1. Updated Vite Configuration
- **File**: `vite.config.ts`
- **Change**: `minify: 'terser'` → `minify: 'esbuild'`
- **Reason**: esbuild is more reliable in CI/CD environments and doesn't require additional dependencies

### 2. Added CI/CD Scripts
- **File**: `package.json`
- **Added**: `build:ci` script for CI/CD environments
- **Added**: `type-check` script for TypeScript checking

### 3. Created GitHub Actions Workflow
- **File**: `.github/workflows/build.yml`
- **Features**: 
  - Node.js 18 setup
  - Dependency caching
  - TypeScript checking
  - Build artifacts upload
  - GitHub Pages deployment

### 4. Added Build Script
- **File**: `build.sh`
- **Features**: 
  - Node.js version checking
  - Clean build process
  - Error handling
  - Build verification

### 5. Added Node Version File
- **File**: `.nvmrc`
- **Version**: Node.js 18
- **Purpose**: Ensures consistent Node.js version across environments

## 🚀 Build Commands

### Local Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### CI/CD Environment
```bash
npm run build:ci     # Build with TypeScript check (no emit)
npm run type-check   # TypeScript type checking only
```

### Manual Build Script
```bash
./build.sh           # Complete build process with checks
```

## 📋 CI/CD Pipeline Steps

1. **Checkout Code**
   - Uses `actions/checkout@v4`

2. **Setup Node.js**
   - Version: 18 (from .nvmrc)
   - Cache: npm dependencies

3. **Install Dependencies**
   - Command: `npm ci`
   - Uses package-lock.json for exact versions

4. **TypeScript Check**
   - Command: `npm run build:ci`
   - Checks types without emitting files

5. **Build Project**
   - Command: `npm run build`
   - Creates optimized production build

6. **Deploy (on main/master)**
   - Uses `peaceiris/actions-gh-pages@v3`
   - Publishes `dist/` directory to GitHub Pages

## 🔍 Troubleshooting

### Common Issues

#### 1. Terser Not Found
- **Error**: `terser not found`
- **Solution**: ✅ Fixed by switching to esbuild
- **Prevention**: Use `minify: 'esbuild'` in vite.config.ts

#### 2. Node.js Version Issues
- **Error**: Node.js version mismatch
- **Solution**: Use Node.js 18+ (specified in .nvmrc)
- **Check**: `node -v` should show v18.x.x or higher

#### 3. TypeScript Errors
- **Error**: TypeScript compilation errors
- **Solution**: Run `npm run type-check` locally first
- **Fix**: Address TypeScript errors before pushing

#### 4. Dependency Issues
- **Error**: Package installation failures
- **Solution**: Use `npm ci` instead of `npm install`
- **Prevention**: Keep package-lock.json in version control

### Build Verification

#### Local Testing
```bash
# Test the exact CI/CD build process
npm ci
npm run build:ci
```

#### Check Build Output
```bash
# Verify build files exist
ls -la dist/
# Should show: index.html, assets/ directory
```

#### Test Production Build
```bash
# Test the production build locally
npm run build
npm run preview
# Visit http://localhost:4173
```

## 📊 Build Performance

### Current Build Stats
- **CSS**: 12.68 kB (gzipped: 3.41 kB)
- **JavaScript**: 316.30 kB (gzipped: 100.88 kB)
- **HTML**: 5.16 kB (gzipped: 1.65 kB)
- **Build Time**: ~9-11 seconds

### Optimization Tips
1. **Use esbuild**: Faster than terser
2. **Enable caching**: npm cache in CI/CD
3. **Parallel builds**: GitHub Actions runs in parallel
4. **Minimal dependencies**: Only install what's needed

## 🎯 Best Practices

### For Developers
1. **Test locally**: Always run `npm run build` before pushing
2. **Type checking**: Use `npm run type-check` for quick checks
3. **Dependencies**: Keep package-lock.json updated
4. **Node version**: Use Node.js 18+ (check .nvmrc)

### For CI/CD
1. **Use npm ci**: Faster and more reliable than npm install
2. **Cache dependencies**: Reduces build time
3. **Fail fast**: Run type checks before build
4. **Artifact upload**: Save build artifacts for debugging

## 🔄 Deployment

### GitHub Pages
- **Trigger**: Push to main/master branch
- **Source**: `dist/` directory
- **URL**: `https://username.github.io/afghankar`

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy dist/ directory to your hosting service
# (e.g., Netlify, Vercel, AWS S3, etc.)
```

## 📞 Support

If you encounter any CI/CD issues:

1. **Check the logs**: Review GitHub Actions logs
2. **Test locally**: Run the same commands locally
3. **Verify dependencies**: Ensure all packages are installed
4. **Check Node version**: Use Node.js 18+
5. **Review configuration**: Check vite.config.ts and package.json

The build process is now optimized for CI/CD environments and should work reliably across different platforms.
