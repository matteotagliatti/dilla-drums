import { motion } from "framer-motion";

function truncate(str) {
  return str.replace(/^.*[\\\/]/, "");
}

export default function Screen({ active }) {
  return (
    <div className="bg-black col-span-4 mb-2 py-3 px-6 rounded-lg border-4 border-white border-opacity-20 ring-2 ring-slate-300">
      <motion.div
        className="w-full transition opacity-0 h-16 rounded-md bg-gradient-to-t from-cyan-900 via-cyan-800 to-cyan-900 text-xs text-cyan-400 p-3 font-mono relative after:content-['*'] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t after:z-10 after:from-black after:via-transparent after:to-black after:opacity-10 border-2 border-white border-opacity-5"
        animate={{ opacity: [0, 0.5, 0.3, 0.7, 0.6, 1] }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div
          className="absolute top-0 bottom-0 right-0 left-0 bg-red-500 rounded-lg z-10"
          style={{
            backgroundSize: "5px auto",
            mixBlendMode: "overlay",
            opacity: 0.1,
          }}
        />
        {active !== null ? (
          <div className="flex items-center">
            <div className="h-7 w-7">{active.icon}</div>
            <div className="flex flex-col flex-1 pl-2">
              <span>{active.name}</span>
              <span className="truncate">{truncate(active.src)}</span>
            </div>
          </div>
        ) : (
          <>
            <motion.div
              className="h-3.5 w-1.5 bg-cyan-600 opacity-0"
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                repeat: Infinity,
              }}
            />
          </>
        )}
      </motion.div>
    </div>
  );
}
