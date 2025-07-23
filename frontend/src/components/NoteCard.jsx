import { PenSquareIcon, Trash2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import api from "../lib/axios";
import { formatDate } from "../lib/utils";

const NoteCard = ({ note, setNotes }) => {
    const handleDelete = async (e, id) => {
        e.preventDefault();

        if (!window.confirm("Are you sure you want to delete this note?")) return;

        try {
            await api.delete(`/notes/${id}`);
            setNotes((prev) => prev.filter((note) => note._id !== id));
            toast.success("Note deleted successfully");
        } catch (error) {
            console.log("Error in handleDelete", error);
            toast.error("Failed to delete note");
        }
    };

    return (
        <Link
            to={`/note/${note._id}`}
            className="group relative block rounded-xl bg-gradient-to-br from-[#23272F] to-[#1A1D23] border border-[#00FF9D]/30 shadow-[0_2px_24px_#00FF9D33] hover:shadow-[0_4px_32px_#00FF9D55] transition-all duration-200 overflow-hidden"
        >
            <span className="absolute inset-0 pointer-events-none border border-[#00FF9D] rounded-xl opacity-10 group-hover:opacity-30 transition"></span>
            <div className="p-5">
                <h3 className="text-lg font-semibold text-[#00FF9D] mb-2 tracking-wide">{note.title}</h3>
                <p className="text-base text-white/80 line-clamp-3 mb-4">{note.content}</p>
                <div className="flex justify-between items-center">
                    <span className="text-xs text-[#00FF9D]/60 font-mono">
                        {formatDate(new Date(note.createdAt))}
                    </span>
                    <div className="flex items-center gap-2">
                        <Link
                            to={`/note/${note._id}`}
                            className="p-2 rounded-lg bg-transparent hover:bg-[#00FF9D]/10 transition"
                            onClick={e => e.stopPropagation()}
                        >
                            <PenSquareIcon className="size-4 text-[#00FF9D]" />
                        </Link>
                        <button
                            className="p-2 rounded-lg bg-transparent hover:bg-[#FF005C]/10 transition"
                            onClick={e => {
                                e.stopPropagation();
                                handleDelete(e, note._id);
                            }}
                        >
                            <Trash2Icon className="size-4 text-[#FF005C]" />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};
export default NoteCard;