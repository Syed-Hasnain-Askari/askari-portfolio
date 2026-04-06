import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import profileImage from "../../assets/profileImage.png";

export function Hero() {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="min-h-screen relative overflow-hidden">
			{/* Navigation */}
			<nav className="relative z-20 px-8 md:px-16 py-6">
				<div className="flex items-center justify-between max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="flex items-center gap-8"
					>
						<button
							onClick={() => scrollToSection("skills")}
							className="text-muted-foreground hover:text-foreground transition-colors duration-300"
						>
							Services
						</button>
						<button
							onClick={() => scrollToSection("projects")}
							className="text-muted-foreground hover:text-foreground transition-colors duration-300"
						>
							Works
						</button>
						<button
							onClick={() => scrollToSection("contact")}
							className="text-muted-foreground hover:text-foreground transition-colors duration-300"
						>
							Contact
						</button>
					</motion.div>
				</div>
			</nav>

			{/* Hero Content */}
			<div className="relative z-10 px-8 md:px-16 py-12 md:py-20">
				<div className="max-w-7xl mx-auto">
					<div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
						{/* Left Side - Name, Description and Social */}
						<div className="flex flex-col justify-between h-full">
							<div>
								<motion.div
									initial={{ opacity: 0, x: -30 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.8, delay: 0.3 }}
								>
									<h1 className="text-2xl mb-2 leading-tight">HELLO, I AM</h1>
									<h1 className="text-5xl md:text-6xl lg:text-6xl mb-8 leading-tight">
										Syed Hasnain Askari
									</h1>
								</motion.div>

								{/* Description */}
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.8, delay: 0.5 }}
									className="max-w-md"
								>
									<div className="border-l-2 border-blue-500 pl-4 mb-4">
										<p className="text-lg mb-2">
											<span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
												Full Stack Developer
											</span>
										</p>
										<p className="text-sm text-muted-foreground">
											Based in Pakistan.
										</p>
									</div>

									<p className="text-sm text-muted-foreground mb-4">
										I'm a full-stack developer specializing in building
										exceptional digital experiences with Next.js, React,
										Node.js, and AI applications.
									</p>

									<button
										onClick={() => scrollToSection("skills")}
										className="flex items-center gap-2 text-sm group"
									>
										<span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
											View Services
										</span>
										<ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform duration-300" />
									</button>
								</motion.div>
							</div>

							{/* Social Icons */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.8 }}
								className="flex items-center gap-4 mt-8"
							>
								<a
									href="https://github.com/Syed-Hasnain-Askari"
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 hover:text-blue-500 transition-colors duration-300"
								>
									<Github className="w-5 h-5" />
								</a>
								<a
									href="https://www.linkedin.com/in/syedhasnainaskari/"
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 hover:text-blue-500 transition-colors duration-300"
								>
									<Linkedin className="w-5 h-5" />
								</a>
								<a
									href="mailto:hasnainaskari32@gmail.com"
									className="p-2 hover:text-blue-500 transition-colors duration-300"
								>
									<Mail className="w-5 h-5" />
								</a>
							</motion.div>
						</div>

						{/* Right Side - Image */}
						<div className="relative">
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.8, delay: 0.5 }}
								className="relative"
							>
								{/* Gradient Background Circle */}
								<div className="absolute -inset-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30" />

								{/* Profile Image */}
								<div className="relative">
									<img
										src={profileImage}
										alt="Profile"
										className="w-full max-w-md mx-auto rounded-full relative z-10"
									/>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
