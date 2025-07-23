import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import api from "../lib/axios";

const CreatePage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            toast.error("All fields are required");
            return;
        }

        setLoading(true);
        try {
            await api.post("/notes", {
                title,
                content,
            });

            toast.success("Note created successfully!");
            navigate("/");
        } catch (error) {
            console.log("Error creating note", error);
            if (error.response?.status === 429) {
                toast.error("Slow down! You're creating notes too fast", {
                    duration: 4000,
                    icon: "💀",
                });
            } else {
                toast.error("Failed to create note");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526]">
            <div className="relative w-full max-w-xl p-8 rounded-3xl shadow-2xl bg-[#181c23] border border-[#2c5364] overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-tr from-[#00f2fe] to-[#4facfe] opacity-30 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-[#43e97b] to-[#38f9d7] opacity-20 rounded-full blur-2xl pointer-events-none" />
                <h2 className="text-3xl font-bold text-white mb-8 tracking-wide text-center drop-shadow-lg">
                    <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] bg-clip-text text-transparent">
                        Create New Note
                    </span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-[#b2becd] mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter a catchy title..."
                            className="w-full px-4 py-3 rounded-xl bg-[#23272f] border border-[#2c5364] text-white focus:outline-none focus:ring-2 focus:ring-[#00f2fe] transition-all duration-200 placeholder-[#6c7a89]"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#b2becd] mb-2">
                            Content
                        </label>
                        <textarea
                            placeholder="Write your futuristic note here..."
                            className="w-full px-4 py-3 rounded-xl bg-[#23272f] border border-[#2c5364] text-white focus:outline-none focus:ring-2 focus:ring-[#43e97b] transition-all duration-200 h-36 resize-none placeholder-[#6c7a89]"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="relative inline-flex items-center px-8 py-3 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-white font-semibold shadow-lg hover:from-[#43e97b] hover:to-[#38f9d7] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00f2fe] disabled:opacity-60"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                                    </svg>
                                    Creating...
                                </span>
                            ) : (
                                <>
                                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                    Create Note
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default CreatePage;