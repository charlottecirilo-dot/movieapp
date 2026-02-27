# MovieApp - Complete Setup & Build Guide 🚀

A React Native (Expo) mobile app for discovering TV shows, tracking episodes, and scheduling notifications with animated gradient UI.

## ✨ Features

- **Login Screen** with animated gradient background
- **Bottom Tab Navigation** (Home, Calendar)
- **TV Show Posters** instead of plain text (TVmaze API)
- **Animated BL/GL Gradient Themes** on all screens
- **Episode Calendar Integration** - add episodes to device calendar
- **Local Notifications** - get notified about upcoming episodes
- **Search functionality** powered by TVmaze open API
- **Favorites management** with global state (MovieContext)

---

## 📋 Prerequisites

**Your System:**
- **Windows 10+**
- **Node.js 20.x+** (download from [nodejs.org](https://nodejs.org))
- **Android Studio** (for local Android builds) OR use **EAS Build** (cloud, recommended)
- **Expo CLI** (install via npm)

**Device/Emulator:**
- **Android emulator** (via Android Studio) OR real Android phone with Expo Go app
- **iOS**: Requires macOS + Xcode, or use EAS Build

---

## 🏗️ Installation & Local Setup

### Step 1: Install Node.js & npm

1. Download Node.js 20 LTS from https://nodejs.org
2. Run the installer and follow defaults
3. Verify installation:
```bash
node -v
npm -v
```

### Step 2: Install Expo CLI Globally

```bash
npm install -g expo-cli
```

### Step 3: Clone & Install Project

```bash
cd c:\Users\gabal\movieapp
npm install --legacy-peer-deps
```

(Use `--legacy-peer-deps` if you get peer dependency warnings)

### Step 4: Run Locally (Metro Bundler)

```bash
npm start
```

Output will show:
```
This will open the Metro Bundler. Then:
- Press 'a' to open Android emulator
- Press 'i' to open iOS (macOS only)
- Scan QR code with Expo Go app on your phone
```

---

## 📱 Run on Android (3 Options)

### **Option A: Emulator (Requires Android Studio)**

1. Open Android Studio → Virtual Device Manager → Start emulator
2. From project directory:
```bash
npm run android
```

### **Option B: Real Phone**

1. Install **Expo Go** app from Google Play
2. Run:
```bash
npm start
```
3. Scan QR code with Expo Go app on your phone

### **Option C: Build APK Locally (Advanced)**

Requirements:
- Android Studio SDK Manager (SDK 30+)
- Java Development Kit (JDK)
```bash
eas build --platform android --local
```

---

## 🏗️ Generate Production APK/AAB (EAS - Recommended)

### **Setup EAS (Cloud Build)**

Best for: clean, signed, production-ready builds

#### 1. Create Expo Account

```bash
npx expo-cli@latest login
# Enter email & password
```

#### 2. Configure EAS

```bash
npx eas-cli@latest init
# Follow prompts - select "Continue with Expo Account"
```

#### 3. Update `eas.json` (already created in project)

```json
{
  "cli": {
    "version": ">= 8.0.0"
  },
  "build": {
    "production": {
      "node": "20.x"
    }
  }
}
```

#### 4. Build APK (for Google Play)

```bash
eas build --platform android --profile production
```

Or **AAB (Android App Bundle)** - recommended for Play Store:

```bash
eas build --platform android --profile production --build-type apk
```

**Note:** Your Expo account must have credits or use free build tier (limited). Builds take 5-15 min.

#### 5. Download APK

- Go to https://expo.dev/builds
- Find your build → click download
- File: `movieapp-release.apk` (or `.aab`)

---

## 📦 Build for iOS (macOS Only or EAS)

### Local Build (macOS Only)

```bash
npm run ios
```

Or use EAS:

```bash
eas build --platform ios --profile production
```

Output: `.ipa` file (upload to TestFlight or App Store)

---

## 📤 Release & Distribution

### Android

**For Google Play Store:**

1. Create developer account: https://play.google.com/console
2. Create app entry
3. Upload `movieapp-release.aab` (AAB format) to Play Store
4. Fill store listing, screenshots, description
5. Submit for review

**For GitHub Release:**

```bash
# Upload APK to GitHub repo Releases
gh release create v1.0 ./movieapp-release.apk --title "MovieApp v1.0"
```

### iOS

1. Create App Store Connect account
2. Upload `.ipa` to TestFlight
3. Submit for review

---

## 🔧 Troubleshooting

### npm install fails

```bash
npm cache clean --force
rm -r node_modules package-lock.json
npm install --legacy-peer-deps
```

### Metro Bundler won't start

```bash
npx expo-cli@latest start --clear
```

### Calendar permissions not working

- **Android**: Grant calendar permissions in app settings
- **iOS**: Allow Calendar access in system settings

### App crashes on startup

Check Metro console for errors:
```bash
npm start -- --verbose
```

---

## 📝 Project Structure

```
movieapp/
├── App.js                      # Root app entry
├── app.json                    # Expo config
├── package.json                # Dependencies
├── eas.json                    # EAS build config
├── src/
│   ├── screens/
│   │   ├── LoginScreen.js      # Auth screen
│   │   ├── HomeScreen.js       # Search & posters
│   │   ├── DetailsScreen.js    # Show details & calendar
│   │   └── CalendarScreen.js   # Calendar events
│   ├── components/
│   │   └── MovieCard.js        # Poster card UI
│   ├── context/
│   │   ├── AuthContext.js      # Auth state
│   │   └── MovieContext.js     # Favorites state
│   └── navigation/
│       └── TabNavigator.js     # Bottom tabs + stack
└── README.md                   # This file
```

---

## 🔑 API Keys

**TVmaze API** - No key required! Free, open API.

**Calendar & Notifications** - Uses Expo built-in modules (no setup needed).

---

## 📚 Dependencies

Key packages:

- **expo** - React Native framework
- **@react-navigation/native** - Navigation
- **@react-navigation/bottom-tabs** - Tab navigation
- **expo-linear-gradient** - Animated gradients
- **axios** - HTTP requests
- **expo-calendar** - Device calendar access
- **expo-notifications** - Local notifications

---

## 🎯 Next Steps

1. ✅ Install Node.js & npm
2. ✅ Run `npm install --legacy-peer-deps`
3. ✅ Test with `npm start`
4. 📱 Build APK: `eas build --platform android --profile production`
5. 📤 Upload to GitHub Releases & Play Store

---

## 💬 Support

- **Expo Docs**: https://docs.expo.dev
- **React Native**: https://reactnative.dev
- **TVmaze API**: https://www.tvmaze.com/api

---

## 📄 License

MIT - Feel free to use and modify!

