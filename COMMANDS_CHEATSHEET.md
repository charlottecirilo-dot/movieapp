# 📟 MovieApp - Command Reference & Cheat Sheet

Keep this for quick access to common commands.

---

## 🚀 Main Commands

### Develop Locally
```bash
# Start development server (Metro Bundler)
npm start

# Run on Android emulator
npm run android

# Run on iOS simulator (macOS only)
npm run ios

# Run on web (experimental)
npm start -- --web
```

### Install & Setup
```bash
# Install all dependencies
npm install

# Install with legacy peer deps (recommended)
npm install --legacy-peer-deps

# Update all packages
npm update

# Clear cache
npm cache clean --force
```

---

## 🏗️ Build Commands

### Development Build
```bash
# Local development build (fast, not optimized)
eas build --platform android --profile development

# Preview build (almost production, for testing)
eas build --platform android --profile preview
```

### Production Build (APK)
```bash
# Full production APK
eas build --platform android --profile production --build-type apk

# Production App Bundle (AAB - for Play Store)
eas build --platform android --profile production

# iOS production build
eas build --platform ios --profile production
```

### Build Locally (Advanced)
```bash
# Requires Android Studio SDK & Java
eas build --platform android --local

# Clean build (remove old artifacts)
npx expo prebuild --clean
```

---

## 🔐 Authentication

### Expo Account
```bash
# Login to Expo
npx expo-cli@latest login

# Logout
npx expo-cli@latest logout

# Check current user
npx expo@latest whoami
```

### EAS Setup
```bash
# Initialize EAS Build
npx eas-cli@latest init

# Configure credentials
eas credentials

# View build history
eas build:list --platform android

# View build logs
eas build:log <BUILD_ID>
```

---

## 🐛 Debugging & Troubleshooting

### Metro Bundler Issues
```bash
# Restart metro with cache clear
npm start -- --clear

# Run with verbose logging
npm start -- --verbose

# Kill all metro processes (Windows)
taskkill /IM node.exe /F

# Kill all metro processes (Mac/Linux)
pkill -f "react-native"
```

### npm Issues
```bash
# Clear all npm cache
npm cache clean --force

# Reinstall all packages
rm -r node_modules package-lock.json
npm install --legacy-peer-deps

# Check for outdated packages
npm outdated

# Fix security vulnerabilities
npm audit fix
```

### Gradle/Android Issues (Advanced)
```bash
# Clean Android build
cd android
./gradlew clean
cd ..

# Force rebuild
eas build --platform android --clear-cache --profile production
```

---

## 📱 Device & Emulator

### Android Emulator
```bash
# List Android devices
adb devices

# Install APK on device
adb install path/to/app.apk

# Uninstall app from device
adb uninstall com.yourcompany.movieapp

# Clear app data
adb shell pm clear com.yourcompany.movieapp

# View device logs
adb logcat

# Take screenshot
adb shell screencap -p /sdcard/screenshot.png
```

### iOS Simulator (macOS)
```bash
# List simulators
xcrun simctl list devices

# Launch specific simulator
xcrun simctl boot <SIMULATOR_ID>

# Install on simulator
xcrun simctl install booted path/to/app.app
```

---

## 📦 Testing & Validation

### Run Tests
```bash
# If test suite exists
npm test

# Watch mode
npm test -- --watch
```

### Code Quality
```bash
# Check for linting errors (if eslint configured)
npm run lint

# Format code (if prettier configured)
npm run format
```

### Build Validation
```bash
# Validate app.json
npx expo validate

# Check Expo SDK version
npx expo@latest --version

# Verify project setup
npx expo doctor
```

---

## 🌐 Publishing & Releases

### Git Commands (Version Control)
```bash
# Initialize git
git init

# Add all files
git add .

# Commit changes
git commit -m "Feature: Add gradients and posters"

# Create new branch
git branch feature/calendar-integration

# Switch branch
git checkout feature/calendar-integration

# Merge branch
git merge feature/calendar-integration

# Push to GitHub
git push -u origin main

# Create tag for release
git tag v1.0.0
git push --tags

# View commit history
git log --oneline
```

### NPM Publishing (if publishing to npm registry)
```bash
# Login to npm
npm login

# Publish package
npm publish

# Update version
npm version minor

# Publish pre-release
npm publish --tag beta
```

---

## 🔧 Configuration

### Environment Variables
```bash
# Create .env file with variables
EXPO_TOKEN=your_token_here
API_KEY=your_key_here

# Use in code
const token = process.env.EXPO_TOKEN;
```

### Update app.json
```bash
# Common changes
- Modify app name
- Update version number
- Change icon/splash screen
- Update permissions

# Example version bump
{
  "expo": {
    "version": "1.0.1"
  }
}
```

---

## 💾 Backup & Export

### Export Project
```bash
# Save development client for offline testing
eas export --platform android

# Export source for backup
tar -czf movieapp-backup.tar.gz movieapp/
```

### Build Artifacts
```bash
# Download APK from EAS
# 1. Go to https://expo.dev/builds
# 2. Click on build → Download
# 3. File saved to Downloads folder

# Or use CLI
eas build:log <BUILD_ID> --filter arn
```

---

## 🚨 Emergency Commands

### Hard Reset Everything
```bash
# CAUTION: Clears all local changes
git reset --hard HEAD
npm cache clean --force
rm -r node_modules package-lock.json
npm install --legacy-peer-deps
npm start -- --clear
```

### Kill Background Processes
```bash
# Windows
taskkill /IM node.exe /F
taskkill /IM java.exe /F

# Mac/Linux
pkill -f node
pkill -f java
```

### View Logs
```bash
# Expo logs
npx expo@latest install-expo-modules

# Build logs
eas build:view <BUILD_ID>

# Metro logs  
npm start -- --verbose
```

---

## 🎯 Pre-Deployment Checklist

```bash
# 1. Test locally
npm start

# 2. Run on device
npm run android

# 3. Check app.json version
cat app.json | grep version

# 4. Verify dependencies
npm ls

# 5. Create git tag
git tag v1.0.0

# 6. Build production
eas build --platform android --profile production --build-type apk

# 7. Test APK on real device
adb install -r app.apk

# 8. Upload to release
gh release create v1.0 ./app.apk

# 9. Celebrate! 🎉
```

---

## 📚 Useful npm Scripts

Add these to `package.json` for convenience:

```json
{
  "scripts": {
    "start": "expo start",
    "android": "expo run:android",
    "ios": "expo run:ios",
    "build:apk": "eas build --platform android --profile production --build-type apk",
    "build:aab": "eas build --platform android --profile production",
    "prebuild": "expo prebuild --clean",
    "doctor": "expo doctor",
    "clean": "npm cache clean --force && rm -rf node_modules package-lock.json"
  }
}
```

Then use:
```bash
npm run build:apk
npm run prebuild
npm run clean
```

---

## 🆘 Quick Help Links

| Issue | Command |
|-------|---------|
| npm won't run | `npm cache clean --force` |
| Metro won't start | `npm start -- --clear` |
| Android won't connect | `adb kill-server && adb start-server` |
| Permissions error | Check `app.json` permissions array |
| Build fails | `eas build:log <ID>` → check error |
| Emulator slow | Use higher RAM in Android Studio settings |

---

## 📞 Get Help

```bash
# View Expo help
npx expo@latest --help

# View EAS help
eas --help

# View npm help
npm help

# Check Expo doctor (diagnoses issues)
npx expo doctor
```

---

**Keep this file bookmarked!** Easier than searching each time. 📌

