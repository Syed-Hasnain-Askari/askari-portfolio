import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
	const experiences = [
		{
			title: "Junior Full Stack Developer",
			company: "Simplicore",
			period: "2024 - Present",
			description:
				"Worked on Tenforty, a U.S.-based tax automation platform using MERN Stack. Implemented microservices architecture and reduced API response time by 40%.",
			skills: ["Next.js", "Node.js", "AWS", "PostgreSQL", "OpenAI API"]
		},
		{
			title: "MERN Stack Developer",
			company: "3Const",
			period: "2023 - 2024",
			description:
				"Built and maintained multiple client projects, from e-commerce platforms to internal tools. Collaborated with design team to implement pixel-perfect UIs.",
			skills: ["React", "Express", "MongoDB", "Tailwind CSS"]
		},
		{
			title: "Full Stack Developer",
			company: "Epaging",
			period: "2022 - 2023",
			description:
				"Developed responsive web applications for various clients. Improved website performance and implemented modern UI/UX best practices.",
			skills: ["React", "JavaScript", "SASS", "Webpack"]
		}
	];

	return (
		<section id="experience" className="py-24 px-6 bg-white/30 dark:bg-white/5">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
						Work Experience
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						My professional journey in software development, building impactful
						solutions for various industries.
					</p>
				</motion.div>

				<div className="relative">
					{/* Timeline line */}
					<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

					<div className="space-y-8">
						{experiences.map((exp, index) => (
							<motion.div
								key={exp.title}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="relative pl-0 md:pl-20"
							>
								{/* Timeline dot */}
								<div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hidden md:block" />

								<div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
									<div className="flex flex-wrap items-start justify-between gap-4 mb-3">
										<div>
											<h3 className="mb-1">{exp.title}</h3>
											<div className="flex items-center gap-2 text-muted-foreground">
												<Briefcase className="w-4 h-4" />
												<span>{exp.company}</span>
											</div>
										</div>
										<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/10 border border-white/20">
											<Calendar className="w-4 h-4 text-muted-foreground" />
											<span className="text-sm text-muted-foreground">
												{exp.period}
											</span>
										</div>
									</div>

									<p className="text-muted-foreground mb-4">
										{exp.description}
									</p>

									<div className="flex flex-wrap gap-2">
										{exp.skills.map((skill) => (
											<span
												key={skill}
												className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-xs"
											>
												{skill}
											</span>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
