import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-xl shadow-xl shadow-red-500/10">
        <div className="flex flex-col md:flex-row items-center p-8">
          {/* Icon with animated glow */}
          <div className="flex-shrink-0 relative mb-6 md:mb-0 md:mr-8">
            <div className="bg-red-500/20 border border-red-500/40 p-4 rounded-full backdrop-blur-sm">
              <ZapIcon className="size-10 text-red-500" />
            </div>
            <div className="absolute inset-0 bg-red-500/10 rounded-full blur-xl animate-pulse"></div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-3">
            <h3 className="text-2xl font-bold text-white">
              Rate Limit Reached
            </h3>
            <p className="text-gray-300 text-lg">
              You've made too many requests in a short period. Please wait a
              moment.
            </p>
            <p className="text-gray-400">
              Try again in a few seconds for the best experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
