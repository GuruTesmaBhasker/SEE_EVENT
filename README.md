# 🎉 SEE EVENT - Professional Event Management Platform

<div align="center">
  <h3>🌟 Discover • Create • Manage Events 🌟</h3>
  <p>A modern, responsive event management application built with cutting-edge web technologies</p>
  
  ![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
  ![License](https://img.shields.io/badge/license-MIT-green.svg)
  ![Status](https://img.shields.io/badge/status-active-success.svg)
</div>

## ✨ Features

### 🎯 **Core Functionality**
- **🔐 User Authentication** - Secure login/signup with Firebase
- **📅 Event Discovery** - Browse and search events by location, date, type
- **✨ Event Creation** - Create and manage your own events
- **📱 Responsive Design** - Optimized for mobile, tablet, and desktop
- **🔖 Event Bookmarking** - Save events for later
- **📝 Event Registration** - Easy registration with form validation
- **👤 Profile Management** - User profiles and preferences

### 🎨 **User Experience**
- **Clean UI/UX** with professional design
- **Smooth Animations** and transitions
- **Intuitive Navigation** between pages
- **Mobile-First** responsive design
- **Accessibility** features built-in

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (recommended for development)

### Installation
```bash
# Clone the repository
git clone https://github.com/GuruTesmaBhasker/SEE_EVENT.git

# Navigate to project directory
cd SEE_EVENT

# Install dependencies (if using package.json)
npm install

# Start development server
npm run dev

# Or use simple HTTP server
npx http-server . -p 3000 -o
```

### 🌐 **Access the Application**
- **Local Development**: `http://localhost:3000`
- **Entry Point**: `/pages/onboarding/onboarding-1.html`

## 📁 Project Structure

```
SEE_EVENT/
├── 📂 assets/
│   ├── 📂 css/
│   │   └── styles.css          # Global styles and components
│   └── 📂 js/
│       └── common.js           # Shared JavaScript utilities
├── 📂 pages/
│   ├── 📂 auth/                # Authentication pages
│   │   ├── login.html          # User login
│   │   ├── signup.html         # User registration
│   │   └── forgot-password.html # Password recovery
│   ├── 📂 onboarding/          # App introduction
│   │   ├── onboarding-1.html   # Welcome screen
│   │   ├── onboarding-2.html   # Features overview
│   │   └── onboarding-3.html   # Get started
│   ├── 📂 home/                # Main application
│   │   ├── home.html           # Dashboard/event feed
│   │   ├── event-details.html  # Event information
│   │   ├── create-event.html   # Event creation
│   │   ├── register.html       # Event registration
│   │   └── filters/            # Search filters
│   └── 📂 profile/             # User management
│       ├── profile.html        # User profile
│       ├── edit-profile.html   # Profile editing
│       ├── my-events.html      # User's events
│       └── settings/           # App settings
├── 📄 firebase.js             # Firebase configuration
├── 📄 index.html              # Application entry point
├── 📄 package.json            # Project configuration
└── 📄 README.md               # Documentation
```

## 🛠️ Technologies Used

### **Frontend**
- **HTML5** - Semantic markup
- **CSS3** - Custom styles + TailwindCSS
- **JavaScript (ES6+)** - Modern JavaScript features
- **TailwindCSS** - Utility-first CSS framework
- **Google Fonts** - Poppins font family

### **Backend & Database**
- **Firebase Authentication** - User management
- **Firebase Firestore** - NoSQL database
- **LocalStorage** - Client-side data persistence

### **Tools & Development**
- **Git** - Version control
- **VS Code** - Development environment
- **NPM** - Package management

## 🎨 Design System

### **Color Palette**
- **Primary**: `#D66D4B` (Warm Orange)
- **Secondary**: `#3B3B3B` (Charcoal)
- **Background**: `#FAF9F6` (Warm White)
- **Accent**: `#667eea` (Blue Gradient)

### **Typography**
- **Font Family**: Poppins (400, 500, 600, 700, 800)
- **Responsive Text**: Fluid typography for all devices

## 🚀 Deployment

### **Development**
```bash
npm run dev
```

### **Production Build**
```bash
npm run build
```

### **Hosting Options**
- **Firebase Hosting** (Recommended)
- **Netlify**
- **Vercel**
- **GitHub Pages**

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**GuruTesmaBhasker**
- GitHub: [@GuruTesmaBhasker](https://github.com/GuruTesmaBhasker)
- Project: [SEE_EVENT](https://github.com/GuruTesmaBhasker/SEE_EVENT)

## 🙏 Acknowledgments

- TailwindCSS for the utility framework
- Firebase for backend services
- Google Fonts for typography
- The open-source community

---

<div align="center">
  <p>⭐ Star this repository if you found it helpful!</p>
  <p>🐛 Found a bug? <a href="https://github.com/GuruTesmaBhasker/SEE_EVENT/issues">Report it here</a></p>
</div> – College & Local Event Discovery App

SeeEvent is a website designed to help students and users discover, register for, and manage events happening around their college and city. The app provides a user-friendly experience for both participants and event organizers.

---

## Features

### For Users
- Discover events based on location, category, and date
- View detailed event information (description, date, time, venue, organizer)
- Bookmark or save events
- Generate event passes (QR Code)
- View upcoming and past events
- Form teams and communicate through discussion/chat pages
- Submit feedback and event ratings
- Receive notifications about events

### For Organizers
- Create and post new events with full details
- Manage events via a dedicated event dashboard
- View registration data and control participant flow
- Scan event passes using QR code scanner
- Send notifications to registered users

---

## Design & UI

- Background color: `#FAF9F6`
- Font: Poppins
- Text color:
  - "See": `#D66D4B`
  - "Event": `#3b3b3b`

---

## App Pages

- Splash Screen  
- Onboarding Pages  
- Login Page  
- Sign Up Page  
- Home Page  
- Event Details Page  
- Search / Filter Page  
- Profile Page  
- Edit Profile Page  
- My Events Page  
- Create Event Page (Organizers)  
- Event Management Dashboard (Organizers)  
- Team Formation Page  
- Chat / Event Discussion Page  
- Bookmarks / Saved Events Page  
- Event Pass / QR Code Page  
- QR Code Scanner Page (Organizers)  
- Upcoming & Past Events Page  
- Feedback & Ratings Page  
- Notifications Page  
- Error / No Internet Page  
- About Us Page  
- Terms & Conditions / Privacy Policy Page



---

## License

This project is open for learning, academic, and portfolio purposes.
