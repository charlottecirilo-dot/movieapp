# 🎬 MovieApp - React Native TV Show Tracker

A feature-rich React Native (Expo) mobile app for discovering, tracking, and scheduling notifications for your favorite TV shows with stunning animated gradient UI.

![License: MIT](https://img.shields.io/badge/License-MIT-blue)
![Platform: React Native](https://img.shields.io/badge/Platform-React%20Native-61DAFB)
![Expo: 47.0+](https://img.shields.io/badge/Expo-47.0%2B-black)

## ✨ Features

✅ **Animated Gradient UI** - BL/GL gradient themes with smooth animations  
✅ **TV Show Posters** - Beautiful poster thumbnails from TVmaze API  
✅ **Bottom Tab Navigation** - Home (search) & Calendar  
✅ **Login Screen** - Simple user authentication with gradient overlay  
✅ **Episode Search** - Search & discover TV shows (powered by TVmaze API)  
✅ **Episode Calendar** - Add upcoming episodes to device calendar  
✅ **Local Notifications** - Get alerted about new episodes (Expo Notifications)  
✅ **Global State Management** - React Context for auth & favorites  
✅ **Favorites Tracking** - Save and manage favorite shows  

## 📋 Quick Start

### Prerequisites

- **Node.js 20+** - [Download](https://nodejs.org)
- **npm or yarn**
- **Android emulator** (Android Studio) or **Expo Go app** (phone)

### Installation

```bash
# Clone or navigate to project
cd movieapp

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm start

# Run on Android emulator
npm run android

# Or scan QR code with Expo Go
```

**First time?** Read the [full BUILD_GUIDE.md](BUILD_GUIDE.md) for detailed setup! 

## 🏗️ Build & Deploy

### Local Build (Android)

```bash
# Requires Android Studio SDK
npm run android
```

### Production APK (Recommended: EAS Build)

```bash
# Setup EAS (one-time)
npx eas-cli@latest login
npx eas-cli@latest init

# Build APK for production
eas build --platform android --profile production --build-type apk

# Download from https://expo.dev/builds
```

### iOS (macOS or EAS)

```bash
eas build --platform ios --profile production
```

For **full build instructions**, see [BUILD_GUIDE.md](BUILD_GUIDE.md)

## 📁 Project Structure

```
movieapp/
├── App.js                      # Root component
├── app.json                    # Expo configuration
├── eas.json                    # EAS build config
├── package.json                # Dependencies
├── BUILD_GUIDE.md              # Complete setup/build guide
├── src/
│   ├── screens/
│   │   ├── LoginScreen.js      # Gradient login UI
│   │   ├── HomeScreen.js       # Show search & posters
│   │   ├── DetailsScreen.js    # Show details + calendar
│   │   └── CalendarScreen.js   # Calendar events
│   ├── components/
│   │   └── MovieCard.js        # Poster card component
│   ├── context/
│   │   ├── AuthContext.js      # Auth state (React Context)
│   │   └── MovieContext.js     # Favorites state (React Context)
│   └── navigation/
│       └── TabNavigator.js     # Tab + Stack navigation
```

## 🎨 UI/UX Highlights

- **Animated Gradients**: Linear gradients (purple → pink → blue) on Home, Details, Calendar
- **Poster Images**: 120x160px show posters from TVmaze API
- **Smooth Animations**: Fade transitions, button press effects
- **Dark Theme**: Modern dark UI with white/light text
- **Card-Based Layout**: Episode cards in Calendar with rounded corners

## 🔧 Stack & Technologies

| Tech | Purpose |
|------|---------|
| **Expo** | React Native framework & CLI |
| **React Navigation** | Bottom tabs + stack navigation |
| **Expo Linear Gradient** | Animated gradient backgrounds |
| **Axios** | HTTP requests (TVmaze API) |
| **Expo Calendar** | Device calendar integration |
| **Expo Notifications** | Local device notifications |
| **React Context** | Global state management |

## 📡 APIs Used

### TVmaze (Free, No Key Required)

- **Search shows**: `GET https://api.tvmaze.com/search/shows?q={query}`
- **Get episodes**: `GET https://api.tvmaze.com/shows/{id}/episodes`

Response includes posters, episode air dates, network info, and summaries.

## 🖥️ Permissions Required

- **Calendar** - Add episodes to device calendar
- **Notifications** - Send local notifications about episodes

Both permissions are requested on-demand (when user clicks "Add to Calendar").

## 🚀 CI/CD Ready

Project includes:
- ✅ `eas.json` configured for production builds
- ✅ Ready for GitHub Actions automation
- ✅ Support for Play Store & App Store deployment

## 🐛 Troubleshooting

**See [BUILD_GUIDE.md](BUILD_GUIDE.md) for troubleshooting** or:

```bash
# Clear cache and reinstall
npm cache clean --force
rm -r node_modules
npm install --legacy-peer-deps

# Restart Metro with verbose logging
npm start -- --verbose
```

## 📦 Installation Size

- **APK size**: ~100-120 MB (optimized)
- **IPA size**: ~150-180 MB (iOS)

Sizes can be reduced with:
```bash
npx expo prebuild --clean
```

## 📄 License

MIT - Free to use, modify, and distribute.

## 🙌 Credits

- **API**: [TVmaze](https://www.tvmaze.com/api)
- **Framework**: [Expo](https://expo.dev)
- **Icons**: Built-in emoji + React Native icons

## 📞 Support

- **Expo**: https://docs.expo.dev
- **React Native**: https://reactnative.dev
- **Build Issues**: See [BUILD_GUIDE.md](BUILD_GUIDE.md)

---

**Ready to build?** Start with:
```bash
npm install --legacy-peer-deps && npm start
```
