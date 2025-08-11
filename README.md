# 🚀 Neural Network Chat - Real-Time Chat Application

<div align="center">

![Cyberpunk Chat](https://img.shields.io/badge/Status-ONLINE-00ff41?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-2.1.0-00ff41?style=for-the-badge)
![Protocol](https://img.shields.io/badge/Protocol-WSS/2.0-00ff41?style=for-the-badge)

_A futuristic, cyberpunk-themed real-time chat application with neural network aesthetics_

</div>

## ⚡ Features

### 🎨 **Cyberpunk UI/UX**

- **Futuristic Design**: Dark theme with neon glows and cyberpunk aesthetics
- **Animated Effects**: Scanning lines, data streams, and holographic overlays
- **Responsive Layout**: Optimized for all device sizes
- **Custom Typography**: Orbitron and Share Tech Mono fonts

### 💬 **Real-Time Communication**

- **Instant Messaging**: Real-time chat powered by Firebase Firestore
- **User Authentication**: Secure Google OAuth integration
- **Message Persistence**: All messages stored in cloud database
- **Auto-scroll**: Smart scrolling to latest messages

### 🖥️ **System Monitoring**

- **Live System Stats**: CPU, memory, and network usage displays
- **Connection Info**: Real-time network protocol information
- **Active Users**: Live user status and presence indicators
- **System Logs**: Real-time activity and security logs

### 🔒 **Security Features**

- **Encrypted Communication**: AES-256 encryption protocol
- **Secure Authentication**: OAuth 2.0 with Google
- **Neural Link**: Secure connection handshake
- **Access Control**: Terminal-style authentication interface

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern UI library with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Lightning-fast build tool
- **Custom CSS Animations** - Cyberpunk effects and transitions

### Backend & Services

- **Firebase Firestore** - Real-time NoSQL database
- **Firebase Auth** - User authentication service
- **Google OAuth** - Secure login provider

### Development Tools

- **ESLint** - Code linting and formatting
- **PropTypes** - Runtime type checking
- **React Firebase Hooks** - Firebase integration hooks

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- Firebase project with Firestore and Auth enabled
- Google OAuth credentials

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/FilipElznic/RealTimeChatAplication.git
   cd RealTimeChatAplication/ChattingApp
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Firebase**

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Firestore Database and Authentication
   - Add Google as sign-in provider
   - Copy your config to `src/components/ChatApp.jsx`

4. **Start Development Server**

   ```bash
   npm run dev
   ```

5. **Access Neural Network Chat**
   ```
   http://localhost:5173
   ```

## 🎯 Usage Guide

### 🔐 **Authentication**

1. Navigate to the Neural Chat Interface
2. Click "INITIALIZE CONNECTION"
3. Authenticate with your Google account
4. Access granted - enter the neural network!

### 💬 **Chatting**

- Type messages in the secure terminal
- Press SEND or Enter to transmit
- Messages appear in real-time for all users
- Your messages appear on the right (green), others on the left (purple)

### 📊 **System Monitoring**

- **Left Panel**: System status, connection info, network stats
- **Right Panel**: Active users and system logs
- **Header**: Live system status indicator

## 🎨 Customization

### Color Scheme

The cyberpunk color palette can be customized in `tailwind.config.js`:

```javascript
colors: {
  'cyber-green': '#00ff41',    // Primary neon green
  'cyber-blue': '#0080ff',     // Secondary blue
  'cyber-purple': '#8000ff',   // Accent purple
  'cyber-pink': '#ff0080',     // Highlight pink
  'cyber-dark': '#0a0a0a',     // Deep black background
  'cyber-gray': '#1a1a2e',     // Dark gray panels
  'cyber-light': '#16213e',    // Lighter accent
}
```

### Animations

Custom animations are defined in `index.css` and can be modified:

- `neonGlow` - Text glow effect
- `scanLine` - Scanning line animation
- `dataStream` - Flowing data streams
- `glitch` - Cyberpunk glitch effect

## 📁 Project Structure

```
ChattingApp/
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   │   └── ChatApp.jsx  # Main application component
│   ├── App.css          # Legacy styles (replaced by Tailwind)
│   ├── index.css        # Tailwind directives and custom CSS
│   └── main.jsx         # Application entry point
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies and scripts
```

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint code analysis
```

## 🌟 Key Components

### **ChatApp** - Main Application

- Renders the complete cyberpunk interface
- Handles user authentication state
- Manages real-time data streams

### **ChatRoom** - Messaging Interface

- Real-time message display and input
- Firebase Firestore integration
- Auto-scrolling message container

### **SystemStatus** - Live Monitoring

- CPU, memory, and network metrics
- Animated progress bars
- Real-time status indicators

### **ActiveUsers** - User Presence

- Live user status tracking
- Online/away/offline indicators
- Neural network node simulation

## 🔒 Security & Privacy

- **End-to-End Security**: All communication encrypted
- **No Personal Data Storage**: Only display names and profile photos stored
- **OAuth Security**: Industry-standard Google authentication
- **Firebase Security Rules**: Configured for authenticated users only

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
npx vercel --prod
```

### Netlify

```bash
npm run build
# Deploy dist/ folder to Netlify
```

### Firebase Hosting

```bash
npm run build
firebase init hosting
firebase deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📞 Support

Having issues? Check these common solutions:

### **Connection Problems**

- Verify Firebase configuration
- Check internet connectivity
- Ensure Google OAuth is properly configured

### **Styling Issues**

- Clear browser cache
- Ensure Tailwind CSS is properly installed
- Check for CSS conflicts

### **Build Errors**

- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Ensure Node.js version 16+

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Firebase** - For real-time backend services
- **React Team** - For the amazing React framework
- **Tailwind Labs** - For the utility-first CSS framework
- **Cyberpunk Aesthetic** - Inspired by futuristic neural networks

---

<div align="center">

**⚡ NEURAL NETWORK INITIALIZED ⚡**

_Stay connected to the future of communication_

![Matrix](https://img.shields.io/badge/MATRIX-ONLINE-00ff41?style=for-the-badge)

</div>
