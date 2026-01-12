# 📝 Noxira

A modern, full-stack note-taking application built with Next.js and MongoDB. Create, read, update, and delete notes with a clean and intuitive interface.

## 🔗 Live Demo

👉 **[View Live Application](https://noxira.vercel.app/)**

## ✨ Features

- 📱 Responsive design for all devices
- ✏️ Create and manage notes
- 🗑️ Delete notes with ease
- 🎨 Modern UI with Tailwind CSS
- 🔔 Toast notifications for user feedback
- ⚡ Fast and optimized with Next.js 16
- 🗄️ MongoDB database integration

## 🛠️ Tech Stack

### Frontend

- ⚛️ **React 19** - UI library
- ⚡ **Next.js 16** - React framework with App Router
- 🎨 **Tailwind CSS 4** - Utility-first CSS framework
- 🔔 **React Hot Toast** - Elegant notifications

### Backend

- 🟢 **Node.js** - JavaScript runtime
- 🔄 **Next.js API Routes** - Serverless API endpoints
- 🗄️ **MongoDB** - NoSQL database
- 🐱 **Mongoose** - MongoDB object modeling

### Development Tools

- 🔍 **ESLint** - Code linting
- 📦 **PostCSS** - CSS processing
- 🔧 **Babel React Compiler** - React optimization
- 🌐 **dotenv** - Environment variable management

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or higher)
- MongoDB database (local or MongoDB Atlas)
- npm, yarn, pnpm, or bun package manager

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd notetaking
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
notetaking/
├── app/
│   ├── api/              # API routes
│   │   └── create/       # Note CRUD operations
│   ├── components/       # React components
│   │   └── Create.jsx    # Main note component
│   ├── globals.css       # Global styles
│   ├── layout.js         # Root layout
│   └── page.jsx          # Home page
├── lib/
│   └── db.js            # Database connection
├── models/
│   └── note.js          # Mongoose note schema
└── public/              # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 API Endpoints

- `POST /api/create` - Create a new note
- `GET /api/create` - Get all notes
- `PUT /api/create/[id]` - Update a note
- `DELETE /api/create/[id]` - Delete a note

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a Git repository
2. Import your repository to Vercel
3. Add your environment variables
4. Deploy!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn React
- [MongoDB Documentation](https://docs.mongodb.com) - MongoDB guides
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Tailwind CSS reference

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

Made with ❤️ by Nirmal Kharal | [Live Demo](https://your-deployment-url.vercel.app)

Made with ❤️ using Next.js and MongoDB
