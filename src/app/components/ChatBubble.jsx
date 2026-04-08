import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X } from "lucide-react";

export function ChatBubble() {
	const [isOpen, setIsOpen] = useState(false);

	const handleVisitFiverr = () => {
		window.open("https://www.fiverr.com/s/WEy6R4x", "_blank");
	};

	return (
		<>
			<AnimatePresence>
				{isOpen && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
							onClick={() => setIsOpen(false)}
						/>

						<motion.div
							initial={{ opacity: 0, scale: 0.8, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.8, y: 20 }}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 25
							}}
							className="fixed bottom-28 right-6 z-50 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 p-6 w-80 max-w-[calc(100vw-3rem)]"
						>
							<button
								onClick={() => setIsOpen(false)}
								className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
							>
								<X size={20} />
							</button>

							<div className="space-y-4">
								<div className="flex items-center gap-3">
									<div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-semibold text-lg">
										F
									</div>
									<div>
										<h3 className="font-semibold text-zinc-900 dark:text-white">
											Available for Work
										</h3>
										<p className="text-sm text-zinc-600 dark:text-zinc-400">
											Hire me on Fiverr
										</p>
									</div>
								</div>

								<p className="text-sm text-zinc-600 dark:text-zinc-400">
									Let's work together on your next project. I offer professional
									development services tailored to your needs.
								</p>

								<button
									onClick={handleVisitFiverr}
									className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30"
								>
									Visit Fiverr Profile
								</button>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>

			<motion.button
				onClick={() => setIsOpen(!isOpen)}
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				transition={{
					type: "spring",
					stiffness: 400,
					damping: 17
				}}
				className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/40 dark:hover:shadow-purple-500/40 flex items-center justify-center text-white transition-shadow duration-300"
			>
				<motion.div
					animate={{ rotate: isOpen ? 90 : 0 }}
					transition={{ duration: 0.3 }}
				>
					{isOpen ? <X size={24} /> : <MessageCircle size={24} />}
				</motion.div>

				<motion.div
					className="absolute inset-0 bg-white/20 rounded-full"
					initial={{ scale: 1, opacity: 0 }}
					animate={{
						scale: [1, 1.5, 1],
						opacity: [0.5, 0, 0.5]
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
			</motion.button>
		</>
	);
}
