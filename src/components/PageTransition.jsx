import { motion } from 'framer-motion';

const variants = {
    initial: { opacity: 0, y: 24, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -16, scale: 0.98 },
};

const transition = { duration: 0.35, ease: [0.4, 0, 0.2, 1] };

export default function PageTransition({ children }) {
    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            className="w-full"
        >
            {children}
        </motion.div>
    );
}
