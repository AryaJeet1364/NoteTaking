import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault(); // get rid of the navigation behaviour
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); // get rid of the deleted one
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="group block bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-red-500/50 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:bg-gray-900/70 border-t-4 border-t-red-500"
    >
      <div className="space-y-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors duration-200 line-clamp-2">
          {note.title}
        </h3>

        {/* Content preview */}
        <p className="text-gray-400 line-clamp-3 leading-relaxed">
          {note.content}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-800/50">
          <span className="text-sm text-gray-500">
            {formatDate(new Date(note.createdAt))}
          </span>

          <div className="flex items-center gap-2">
            {/* Edit icon */}
            <div className="p-1 rounded-md hover:bg-gray-800 transition-colors duration-200">
              <PenSquareIcon className="size-4 text-gray-400 group-hover:text-red-400 transition-colors duration-200" />
            </div>

            {/* Delete button */}
            <button
              className="p-1 rounded-md hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-all duration-200"
              onClick={(e) => handleDelete(e, note._id)}
              title="Delete note"
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
