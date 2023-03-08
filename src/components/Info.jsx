import { motion } from "framer-motion";
import { Keyboard, Sound } from "./Icons";

export default function Info() {
  const iconClasses = "h-4 w-4 text-neutral700";

  const info = [
    {
      text: "Use keyboard",
      icon: <Keyboard className={iconClasses} />,
    },
    {
      text: "Turn sound on",
      icon: <Sound className={iconClasses} />,
    },
  ];

  return (
    <div className="flex justify-center">
      {info.map((item, i) => (
        <motion.div
          key={i}
          className="inline-flex items-center mb-4 text-sm px-3 py-1 border border-slate-300 shadow-sm rounded-lg mx-1 scale-0 opacity-0"
          animate={{ scale: [1.2, 0.9, 1.1, 0.95, 1], opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.4 }}
        >
          {item.icon}
          <span className="pl-1 text-neutral-700">{item.text}</span>
        </motion.div>
      ))}
    </div>
  );
}
