# Offline Learning Platform 🌟

An interactive, offline-first learning web application designed specifically for lower-grade students. This platform enables children to master vocabulary, phonics, and foundational concepts through structured visual cards, localized audio guidance, and modular reinforcement quizzes—all working completely without an internet connection.

---

## ✨ Features

- **Offline-First Architecture**: Fully functional Progressive Web App (PWA) that caches resources locally so students can learn anytime, anywhere without data costs.
- **Structured Learning Modules**: Organized into thematic sections, including an extensive **Family Dictionary** broken down into Immediate and Extended family circles.
- **Card-Based Discovery UI**: Beautiful, compact horizontal cards displaying clear definitions alongside specific images to maximize visual memory.
- **Interactive Local Phonics**: Individual sound triggers mapped to each vocabulary card, allowing students to click and listen to accurate pronunciations repeatedly.
- **Gamified Progress Tracking**: Immediate knowledge verification via 3-stage modular quizzes after each concept group, complete with instant visual feedback and a star-reward system.

---

## 🛠️ Tech Stack

- **Frontend**: React (Functional Components, Hooks like `useMemo`, `useEffect`, `useRef`)
- **Styling**: Tailwind CSS v4 & Custom CSS3 Transitions
- **Build Tool**: Vite 8
- **Offline Capabilities**: `vite-plugin-pwa` (Service Workers & Asset Caching Manifest)

---

## 🚀 Getting Started Locally

Follow these steps to set up your local development environment.

### Prerequisites

Ensure you have **Node.js** installed on your system.

### 1. Installation

Clone this repository to your local machine, navigate to the project directory, and install the required dependencies:

```bash
cd offline-learning-app-1
npm install --legacy-peer-deps