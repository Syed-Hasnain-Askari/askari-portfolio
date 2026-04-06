import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import Project01 from "../../assets/project01.png";
export function Projects() {
	const projects = [
		{
			title: "Gym Management System",
			description:
				"A dashboard build on React.js and Node.js application for managing gym memberships registration and fees overview,",
			tech: ["React.js", "Tailwind CSS", "MongoDB"],
			image: Project01,
			gradient: "from-blue-500 to-cyan-500",
			github: "https://github.com",
			demo: "https://gym-management-system-liard-nu.vercel.app"
		}
		// {
		// 	title: "E-Commerce Platform",
		// 	description:
		// 		"Full-stack e-commerce solution with real-time inventory, payment processing, and advanced analytics dashboard.",
		// 	tech: ["React", "Node.js", "Stripe", "MongoDB"],
		// 	image:
		// 		"https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
		// 	gradient: "from-purple-500 to-pink-500",
		// 	github: "https://github.com",
		// 	demo: "https://demo.com"
		// },
		// {
		// 	title: "Smart Task Manager",
		// 	description:
		// 		"AI-powered task management app with natural language processing for smart categorization and priority suggestions.",
		// 	tech: ["Next.js", "LangChain", "Supabase", "Tailwind CSS"],
		// 	image:
		// 		"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
		// 	gradient: "from-orange-500 to-red-500",
		// 	github: "https://github.com",
		// 	demo: "https://demo.com"
		// },
		// {
		// 	title: "Real-Time Collaboration Tool",
		// 	description:
		// 		"Collaborative workspace with live editing, video calls, and AI-assisted note-taking using WebRTC and WebSockets.",
		// 	tech: ["React", "WebRTC", "Socket.io", "Express"],
		// 	image:
		// 		"https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
		// 	gradient: "from-green-500 to-teal-500",
		// 	github: "https://github.com",
		// 	demo: "https://demo.com"
		// }
	];

	return (
		<section id="projects" className="py-24 px-6">
			<div className="max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
						Featured Projects
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						A selection of recent projects showcasing my expertise in full-stack
						development and AI integration.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group rounded-2xl overflow-hidden bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300"
						>
							<div className="relative h-56 overflow-hidden">
								<div
									className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
								/>
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
							</div>

							<div className="p-6">
								<h3 className="mb-3">{project.title}</h3>
								<p className="text-muted-foreground text-sm mb-4">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-6">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 rounded-full bg-white/50 dark:bg-white/10 text-xs border border-white/20"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex items-center gap-4">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-sm hover:text-blue-500 transition-colors duration-300"
									>
										<Github className="w-4 h-4" />
										<span>Code</span>
									</a>
									<a
										href={project.demo}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-sm hover:text-blue-500 transition-colors duration-300"
									>
										<ExternalLink className="w-4 h-4" />
										<span>Live Demo</span>
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
