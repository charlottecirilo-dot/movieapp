# 📱 MovieApp - Complete Step-by-Step Build & Deployment Guide

## 🎯 Overview

This guide walks you through installing, running, building, and deploying the MovieApp to production. The project is a fully-featured React Native (Expo) TV show tracker with animated gradients, posters, calendar integration, and notifications.

**Timeline**: ~2-3 hours for first-time setup including APK build.

---

## ✅ Pre-Flight Checklist

Before you start, ensure you have:

- [ ] Windows 10 or later
- [ ] **Administrator access** (for installing software)
- [ ] ~5 GB free disk space
- [ ] Reliable internet connection

---

# PART 1: Environment Setup (30 minutes)

## Step 1: Install Node.js & npm

### Why?
Node.js provides JavaScript runtime; npm manages project dependencies.

### How:

1. Visit https://nodejs.org
2. Click **"LTS"** (Long Term Support) - currently v20.x
3. Download `node-v20.x.x-x64.msi` (Windows 64-bit)
4. Run the installer:
   - Click **Next** through prompts
   - Check ✅ "Automatically install necessary tools"
   - Click **Install**
5. Restart your computer
6. Verify in PowerShell/Command Prompt:
   ```bash
   node -v
   npm -v
   ```
   You should see: `v20.x.x` and `10.x.x` (or higher)

**✅ Done!**

---

## Step 2: Install Git (Optional but Recommended)

Git helps you version control and push code to GitHub.

1. Download from https://git-scm.com
2. Install with defaults
3. Verify:
   ```bash
   git --version
   ```

**✅ Done!**

---

# PART 2: Project Setup (20 minutes)

## Step 3: Navigate to Project

Open **PowerShell** (Windows key → type "PowerShell" → right-click → **Run as Administrator**):

```powershell
cd C:\Users\gabal\movieapp
```

## Step 4: Install Expo CLI (Global)

```bash
npm install -g expo-cli
npx expo --version
```

Should output Expo version (e.g., `@expo/cli@X.Y.Z`)

## Step 5: Install Project Dependencies

This downloads all npm packages the app needs (React, React Navigation, etc.):

```bash
npm install --legacy-peer-deps
```

**⏳ This may take 3-5 minutes. Let it finish.**

Output should end with:
```
added XXX packages
```

**✅ Done!**

---

# PART 3: Run App Locally (15 minutes)

## Step 6: Start Development Server

```bash
npm start
```

You should see:
```
Expo Go
Starting with Expo Go...
> Metro Bundler started on tcp://192.168.x.x:8081
> Tunnel connected.
Press 'a' to open Android...
Press 'i' to open iOS...
Press 'w' to open web...
```

**✅ Server is running!**

## Step 7: Run on Android Emulator (Option A)

### Requirements:
- Android Studio installed (download from https://developer.android.com/studio)

### Steps:

1. Open **Android Studio**
2. Click **Virtual Device Manager** (right sidebar)
3. If no emulator exists:
   - Click **+ Create Device**
   - Select **Pixel 5** (recommended)
   - Click **Next**
   - Select **Android 12** → **Next** → **Finish**
4. Click **Play** button to launch emulator
5. Go back to your terminal (from Step 6) and press **`a`**

The app should build and open in the emulator! 

**Note**: First build takes ~2-3 minutes.

---

## Alternative: Run on Your Phone (Option B)

### Steps:

1. Install **Expo Go** app from:
   - Google Play Store (Android)
   - Apple App Store (iOS)
2. From your terminal (Step 6), scan the **QR code** with your phone camera
3. App opens in Expo Go

**✅ App is running!**

---

# PART 4: Build Production APK (45-60 minutes)

## Step 8: Create Expo Account

Expo Build Service requires an account to generate signed APKs.

```bash
npx expo-cli@latest login
```

Prompts:
- Email: (your email)
- Password: (create a password)

**✅ Logged in!**

## Step 9: Initialize EAS Build

```bash
npx eas-cli@latest init
```

Prompts:
- "Which service would you like to use?"
  → Select **"Expo"**
- "Create new Expo app?"
  → Select **"Yes, create a new Expo app for the project"** (or login if exists)

**✅ EAS initialized!**

## Step 10: Generate Production APK

This builds an optimized, signed APK in the cloud (~5-15 minutes):

```bash
eas build --platform android --profile production --build-type apk
```

You'll see:
```
✔ Configured EAS Build
✔ Published to Expo
✔ Build request sent...
```

**⏳ Wait for build to complete. Link will appear to view progress.**

### Monitor Build:

Go to https://expo.dev/builds
- Log in with your Expo account
- You'll see the build progress
- When done (**Green checkmark**), click **Download**

File: `movieapp-release.apk` (typically 90-120 MB)

**✅ APK is ready!**

---

# PART 5: Test & Deploy APK (15 minutes)

## Step 11: Test APK on Android Device

### Option A: Real Phone

1. Connect Android phone via USB
2. Enable **Developer Mode**:
   - Settings → About phone → Tap **Build Number** 7 times
   - Settings → Developer Options → Enable **USB Debugging**
3. In PowerShell:
   ```bash
   adb install path\to\movieapp-release.apk
   ```
4. App appears on your home screen 🎉

### Option B: Emulator

1. Start Android emulator (Step 7)
2. Drag APK file into emulator window
3. App installs automatically

**✅ App is working!**

---

## Step 12: Upload to GitHub Releases

### Setup Git & GitHub:

1. Create GitHub account at https://github.com
2. Create new repository:
   - Name: `movieapp`
   - Click **Create repository**
3. In your project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: MovieApp with gradients, posters, calendar"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/movieapp.git
   git push -u origin main
   ```

### Upload APK to Release:

1. Go to your GitHub repo
2. Click **Releases** (right sidebar)
3. Click **Create a new release**
4. Tag: `v1.0.0`
5. Title: `MovieApp v1.0 - Production Release`
6. Description:
   ```markdown
   ## Features
   - Animated gradient UI
   - TV show search with posters
   - Calendar integration
   - Episode notifications
   
   ## Download
   - movieapp-release.apk (Android)
   
   ## Installation
   1. Download APK
   2. Enable "Unknown Sources" in phone settings
   3. Install & open MovieApp
   ```
7. **Attach files**: Drag `movieapp-release.apk`
8. Click **Publish release**

**✅ Release published!**

---

## Step 13: (Optional) Deploy to Google Play Store

### Requirements:
- Google Play Developer Account: $25 one-time fee (https://play.google.com/console/signup)

### Steps:

1. Go to Play Console
2. Create app:
   - App type: **App**
   - Default language: **English**
3. Upload APK:
   - Internal testing → Upload `movieapp-release.aab` (note: use .aab, not .apk for Play Store)
   - To generate .aab: `eas build --platform android --profile production`
4. Fill app details (description, screenshots, category)
5. Submit for review (~24-48 hours approval)
6. **Published!** 🎉

---

# PART 6: Continuous Integration (Optional, 30 minutes)

## Step 14: Setup GitHub Actions (Auto-builds)

Automatically build APK on every push to main branch.

### Steps:

1. In your repo, create file: `.github/workflows/build.yml`
2. Expose EAS token:
   ```bash
   eas secret create --platform all --name EXPO_TOKEN
   # Provide your Expo token (from https://expo.dev/settings/tokens)
   ```
3. GitHub Actions runs on every push
4. APK auto-downloads to Releases

**✅ CI/CD setup!**

---

# PART 7: Updates & Maintenance

## Releasing New Versions

1. Edit code locally
2. Test with `npm start`
3. Commit & push:
   ```bash
   git add .
   git commit -m "Added feature X"
   git push
   ```
4. Build new APK:
   ```bash
   eas build --platform android --profile production --build-type apk
   ```
5. Tag release:
   ```bash
   git tag v1.0.1
   git push --tags
   ```
6. Upload APK to new GitHub Release

---

# 📋 Troubleshooting

## Problem: npm install fails

```bash
npm cache clean --force
rm -r node_modules package-lock.json
npm install --legacy-peer-deps
```

## Problem: Metro won't start

```bash
npx expo@latest start --clear
```

## Problem: Emulator won't connect

```bash
adb kill-server
adb start-server
npm run android
```

## Problem: Calendar permissions error

- **Android**: Grant permissions in app settings after install
- **iOS**: System asks on first calendar access

## Problem: Build fails in EAS

1. Check logs: https://expo.dev/builds
2. Try:
   ```bash
   npx expo prebuild --clean
   eas build --platform android --profile development
   ```
3. Check Expo status: https://status.expo.dev

---

# 🎯 Next Steps for Production

- [ ] Set up Google Play Store account
- [ ] Add app icon & screenshots
- [ ] Write app description
- [ ] Set up privacy policy & terms
- [ ] Launch on Play Store
- [ ] Monitor crash reports
- [ ] Plan feature updates

---

# 📚 Useful Links

| Resource | URL |
|----------|-----|
| **Node.js** | https://nodejs.org |
| **Expo Docs** | https://docs.expo.dev |
| **React Native** | https://reactnative.dev |
| **GitHub** | https://github.com |
| **Google Play Console** | https://play.google.com/console |
| **Expo Dashboard** | https://expo.dev |
| **TVmaze API** | https://www.tvmaze.com/api |

---

## 🚀 You're Ready!

You now have:
✅ A fully functional React Native app  
✅ Beautiful animated UI with gradients  
✅ TV show search with posters  
✅ Calendar integration & notifications  
✅ Production APK ready for deployment  
✅ GitHub repository with releases  
✅ (Optional) CI/CD pipeline for auto-builds  

**Next command to run:**
```bash
npm start
```

**Happy coding!** 🎉

