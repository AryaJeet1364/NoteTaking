import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-black/80 backdrop-blur-md border-b border-red-500/20 sticky top-0 z-50">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          {/* Logo with neon red accent */}
          <h1 className="text-3xl font-bold text-white font-mono tracking-tight">
            Idea<span className="text-red-500">Grid</span>
          </h1>

          <div className="flex items-center gap-4">
            {/* New Note button with neon red styling */}
            <Link
              to={"/create"}
              className="group flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25 active:scale-95"
            >
              <PlusIcon className="size-5 group-hover:rotate-90 transition-transform duration-200" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
