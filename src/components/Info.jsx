import { motion } from "framer-motion";

export default function Info() {
  return (
    <div className="flex justify-center">
      <motion.div
        className="inline-flex items-center mb-4 text-sm px-3 py-1 border border-slate-300 shadow-sm rounded-lg mx-1 scale-0 opacity-0"
        animate={{ scale: [1.2, 0.9, 1.1, 0.95, 1], opacity: 1 }}
        transition={{ duration: 0.2, delay: 0 }}
      >
        <svg
          className="h-4 w-4 text-neutral-700"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z"
            fill="currentColor"
          />
          <path
            d="M9 15C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17H15C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15H9Z"
            fill="currentColor"
          />
          <path
            d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"
            fill="currentColor"
          />
          <path
            d="M12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z"
            fill="currentColor"
          />
          <path
            d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
            fill="currentColor"
          />
          <path
            d="M16 9C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8C15 8.55228 15.4477 9 16 9Z"
            fill="currentColor"
          />
          <path
            d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z"
            fill="currentColor"
          />
        </svg>
        <span className="pl-1 text-neutral-700">Use keyboard</span>
      </motion.div>
      <motion.div
        className="inline-flex items-center mb-4 text-sm px-3 py-1 border border-slate-300 shadow-sm rounded-lg mx-1 scale-0 opacity-0"
        animate={{ scale: [1.2, 0.9, 1.1, 0.95, 1], opacity: 1 }}
        transition={{ duration: 0.2, delay: 0 }}
      >
        <svg
          className="h-4 w-4 text-neutral-700"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 96 960 960"
          width="48"
        >
          <path d="M560 925v-62q97-28 158.5-107.5T780 575q0-101-61-181T560 287v-62q124 28 202 125.5T840 575q0 127-78 224.5T560 925ZM120 696V456h160l200-200v640L280 696H120Zm420 48V407q55 17 87.5 64T660 576q0 57-33 104t-87 64ZM420 408 307 516H180v120h127l113 109V408Zm-94 168Z" />
        </svg>
        <span className="pl-1 text-neutral-800">Turn sound on</span>
      </motion.div>
    </div>
  );
}
