# 🤖 Web LLM - Local AI Chat Assistant

![1745386969978](https://github.com/user-attachments/assets/24966f65-30e8-49f6-9003-b4c9047c9520)

![1745386969744](https://github.com/user-attachments/assets/9f29d7af-6a14-4bc0-81d4-83f5687c8a2a)

![1745386969630](https://github.com/user-attachments/assets/f8a02e77-d319-42be-9960-be2f436d214e)


- A sleek, secure, and customizable local AI chatbot interface powered by WebLLM — running entirely in your browser with no server or internet required.

- Built with React, Vite, TailwindCSS, and Sass

- Mobile-friendly, customizable themes, persona presets, and chat history

## 📋 Table of Contents
- Introduction
- Features
- Project Implementation Process
- File Structure
- Technology Stack
- Installation
- Usage
- Screenshots
- Contributing
- License
- Contact

## 📘 Introduction

- Web LLM Chat Assistant is a powerful, local AI chatbot interface built using WebLLM, designed to run large language models natively in your browser using WebGPU.

- Fully offline

- Fast local inference

- Custom persona presets

- Beautiful chat interface with animations and features like editable messages, saved threads, and more

- Ideal for privacy-conscious users, developers, and productivity geeks who want AI capabilities without the cloud.



## ✨ Features

💬 AI Chat — Talk to your AI offline with WebLLM

🧠 Persona Presets — Switch between different AI personalities

🕘 Chat History — Save and revisit past conversations

🎯 Message Tagging & Editing — Mark key points, edit responses

📱 Mobile-Responsive — Optimized for every screen

🔔 Reply Notifications — Sound alerts on AI reply

🌙 Light/Dark Mode — Toggle theme to suit your vibe

🎨 Custom UI — Built with Tailwind + Sass for rapid styling

⚡ Local Inference — Powered entirely via WebGPU in-browser

## 🛠 Project Implementation Process

#### 1. Setup & WebLLM Integration
- Initialized Vite + React project for blazing-fast dev
- Integrated WebLLM with model loading and chat execution

#### 2. Core Features
- Implemented chat UI with message bubbles, animations
- Added sound notifications, persona switcher, theme toggle

#### 3. Chat Tools
- Local chat history saving with timestamps
- Editable messages and tags
- Thread saving for long-term memory

#### 4. UI & Polishing
- TailwindCSS for layout
- Sass for component-level styles
- Framer Motion animations
- Mobile responsive & optimized for local use

## 📁 File Structure

```bash
web-llm-chat/
├── public/                # Icons, models (if static), favicon
├── src/
│   ├── assets/            # Images, sound files
│   ├── components/        # ChatBox, Sidebar, Navbar, Message, etc.
│   ├── context/           # ThemeContext, ChatContext
│   ├── pages/             # Home, Settings, History
│   ├── styles/            # Tailwind & SCSS files
│   ├── utils/             # WebLLM integration, chat helpers
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md     
```

## 💻 Technology Stack

Category	Tech Used

⚛️ Framework	- React + Vite

🧠 AI Engine -	WebLLM (MLC AI)

💄 Styling -	Tailwind CSS + Sass

🎨 Animation -	Framer Motion

📱 UX -	Fully Responsive UI

💾 Storage -	LocalStorage / IndexedDB

📦 Deploy -	Optional: GitHub Pages / Vercel

## 🛠 Installation

Follow these steps to set up and run the Techny project locally:

#### 1. Clone the repository
```bash
git clone https://github.com/YourUsername/web-llm-chat.git
cd web-llm-chat
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Run the frontend

```bash
npm run dev
```

## 🚀 Usage
- Open the app in your browser
- Start chatting with your offline AI assistant
- Switch personas from the sidebar
- Edit, tag, or save key messages
- Use light or dark mode
- Works completely offline after initial setup


## 📸 Screenshots

![1745386969978](https://github.com/user-attachments/assets/24966f65-30e8-49f6-9003-b4c9047c9520)

![1745386969744](https://github.com/user-attachments/assets/9f29d7af-6a14-4bc0-81d4-83f5687c8a2a)

![1745386969630](https://github.com/user-attachments/assets/f8a02e77-d319-42be-9960-be2f436d214e)

![1745386969600](https://github.com/user-attachments/assets/8f406a5a-8b29-4974-87ae-37ee1c8cb3c9)

![1745386969156](https://github.com/user-attachments/assets/979a3147-8c08-4965-845b-b851a7e6074c)


## 🤝 Contributing
We welcome community contributions! Follow the steps below to contribute:

#### Fork the repository
- Create a new branch:
```bash
git checkout -b feature/YourFeature
```

- Commit your changes:
```bash
git commit -m 'Add your feature'
```

- Push to the branch:
```bash
git push origin feature/YourFeature
```

- Open a pull request with detailed explanations of your changes.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact
For any questions or suggestions, feel free to reach out:

- Email: rohansh0808@gmail.com
- GitHub: Rohansh0808
