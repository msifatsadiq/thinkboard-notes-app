import { Route, Routes } from 'react-router'
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'
import NoteDetailPage from './pages/NoteDetailPage'
const App = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#24243e] flex flex-col items-center justify-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#43cea2]/40 via-[#185a9d]/30 to-transparent opacity-70" />
      <div className="relative z-10 w-full max-w-2xl mx-auto shadow-2xl rounded-2xl bg-white/10 backdrop-blur-2xl p-10 mt-16 mb-16 border border-white/20">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#43cea2] to-[#185a9d] mb-10 tracking-tight drop-shadow-lg">
          Notes App
        </h1>
        <nav className="flex justify-center gap-6 mb-8">
          <a
            href="/"
            className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-[#43cea2] to-[#185a9d] bg-size-200 bg-pos-0 transition-all duration-300 hover:bg-pos-100 hover:scale-105 shadow-md hover:shadow-xl"
          >
            Home
          </a>
          <a
            href="/create"
            className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-[#185a9d] to-[#43cea2] bg-size-200 bg-pos-0 transition-all duration-300 hover:bg-pos-100 hover:scale-105 shadow-md hover:shadow-xl"
          >
            Create
          </a>
        </nav>
        <div className="rounded-xl bg-white/5 p-6 shadow-inner border border-white/10 transition-all duration-300 hover:shadow-lg">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/note/:id" element={<NoteDetailPage />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App