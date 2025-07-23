import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import Navbar from "../components/Navbar"
import NoteCard from "../components/NoteCard"
import NotesNotFound from "../components/NotesNotFound"
import RateLimitedUi from "../components/RateLimitedUi"
import api from "../lib/axios"

const HomePage = () => {
    const [IsRateLimited, setIsRateLimited] = useState(true)
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await api.get("/notes");
                console.log(res.data);
                setNotes(res.data);
                setIsRateLimited(false);
            } catch (error) {
                console.log("Error fetching notes");
                console.log(error);
                if (error.response && error.response?.status === 429) {
                    setIsRateLimited(true);
                } else {
                    toast.error("Error fetching notes");
                }
            } finally {
                setLoading(false);
            }
        };
        fetchNotes();
    }, [])
    return (
        <div className="min-h-screen ">
            <Navbar />

            {IsRateLimited && <RateLimitedUi />}
            <div className="max-w-7xl mx-auto p-4 mt-6">
                {loading && <div className="text-center text-lg py-10 ">Loading...</div>}
                {notes.length === 0 && !IsRateLimited && <NotesNotFound />}

                {notes.length > 0 && !IsRateLimited && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {notes.map(note => (
                            <NoteCard key={note.id} note={note} setNotes={setNotes} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage