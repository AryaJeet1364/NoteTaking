import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-8 max-w-md mx-auto text-center">
      {/* Icon container with neon red glow effect */}
      <div className="relative">
        <div className="bg-red-500/10 border border-red-500/30 rounded-full p-8 backdrop-blur-sm">
          <NotebookIcon className="size-12 text-red-500" />
        </div>
        <div className="absolute inset-0 bg-red-500/5 rounded-full blur-xl"></div>
      </div>

      {/* Heading */}
      <div className="space-y-4">
        <h3 className="text-3xl font-bold text-white">No notes yet</h3>
        <p className="text-gray-400 leading-relaxed">
          Ready to organize your thoughts? Create your first note to get started
          on your journey.
        </p>
      </div>

      {/* CTA Button */}
      <Link
        to="/create"
        className="group inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25 active:scale-95"
      >
        <NotebookIcon className="size-5 group-hover:scale-110 transition-transform duration-200" />
        Create Your First Note
      </Link>
    </div>
  );
};

export default NotesNotFound;
