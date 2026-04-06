import { motion } from "motion/react";
import { Code2, Server, Bot, Cloud } from "lucide-react";

export function Skills() {
	const services = [
		{
			icon: Code2,
			title: "Frontend Development",
			description:
				"Building modern, responsive user interfaces with cutting-edge technologies",
			technologies: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS"],
			gradient: "from-blue-500 to-cyan-500"
		},
		{
			icon: Server,
			title: "Backend Development",
			description:
				"Creating scalable server-side applications and APIs with containerization",
			technologies: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
			gradient: "from-purple-500 to-pink-500"
		},
		{
			icon: Bot,
			title: "AI Chatbot Development",
			description:
				"Designing custom intelligent chatbots powered by advanced AI models",
			technologies: ["Chainlit", "OpenAI SDK", "Google Gemini"],
			gradient: "from-emerald-500 to-teal-500"
		},
		{
			icon: Cloud,
			title: "Cloud & DevOps",
			description:
				"Deploying and managing applications on cloud infrastructure",
			technologies: ["AWS", "Docker", "Git", "Vercel"],
			gradient: "from-orange-500 to-amber-500"
		}
	];

	return (
		<section id="skills" className="py-24 px-6 bg-white/30 dark:bg-white/5">
			<div className="max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
						What I Do
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						I bring ideas to life through hands-on experience in full-stack
						development, AI integration, and cloud infrastructure.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8">
					{services.map((service, index) => {
						const Icon = service.icon;
						return (
							<motion.div
								key={service.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="group p-8 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl"
							>
								<div
									className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
								>
									<Icon className="w-7 h-7 text-white" />
								</div>

								<h3 className="mb-3">{service.title}</h3>

								<p className="text-sm text-muted-foreground mb-4">
									{service.description}
								</p>

								<div className="flex flex-wrap gap-2">
									{service.technologies.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 text-xs rounded-full bg-white/50 dark:bg-white/10 border border-white/20"
										>
											{tech}
										</span>
									))}
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
