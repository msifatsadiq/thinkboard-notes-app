import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";

const NoteDetailPage = () => {
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const res = await api.get(`/notes/${id}`);
                setNote(res.data);
                // eslint-disable-next-line no-unused-vars
            } catch (error) {
                toast.error("Failed to fetch the note");
            } finally {
                setLoading(false);
            }
        };
        fetchNote();
    }, [id]);

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this note?")) return;
        try {
            await api.delete(`/notes/${id}`);
            toast.success("Note deleted");
            navigate("/");
        } catch {
            toast.error("Failed to delete note");
        }
    };

    const handleSave = async () => {
        if (!note.title.trim() || !note.content.trim()) {
            toast.error("Please add a title or content");
            return;
        }
        setSaving(true);
        try {
            await api.put(`/notes/${id}`, note);
            toast.success("Note updated successfully");
            navigate("/");
        } catch {
            toast.error("Failed to update note");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black flex items-center justify-center">
                <LoaderIcon className="animate-spin size-12 text-indigo-400 drop-shadow-lg" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <Link to="/" className="flex items-center gap-2 text-indigo-400 hover:text-white transition">
                            <ArrowLeftIcon className="h-6 w-6" />
                            <span className="font-medium tracking-wide">Notes</span>
                        </Link>
                        <button
                            onClick={handleDelete}
                            className="rounded-full p-2 bg-transparent border border-indigo-500 hover:bg-indigo-500 hover:text-white transition text-indigo-400"
                            title="Delete"
                        >
                            <Trash2Icon className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-tr from-gray-800 via-indigo-950 to-gray-900 shadow-xl p-8 border border-indigo-700/30">
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Title"
                                className="w-full bg-transparent border-b border-indigo-500 text-2xl font-semibold outline-none py-2 px-1 text-white placeholder:text-indigo-400 focus:border-indigo-300 transition"
                                value={note.title}
                                onChange={(e) => setNote({ ...note, title: e.target.value })}
                                autoFocus
                            />
                        </div>
                        <div className="mb-8">
                            <textarea
                                placeholder="Write your note here..."
                                className="w-full bg-transparent border-b border-indigo-500 text-base outline-none py-2 px-1 text-white placeholder:text-indigo-400 focus:border-indigo-300 transition resize-none h-40"
                                value={note.content}
                                onChange={(e) => setNote({ ...note, content: e.target.value })}
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="px-6 py-2 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={saving}
                                onClick={handleSave}
                            >
                                {saving ? "Saving..." : "Save"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NoteDetailPage;
