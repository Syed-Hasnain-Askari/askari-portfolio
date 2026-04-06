import { motion } from "motion/react";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: ""
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log("Form submitted:", formData);
		alert("Thank you for your message! I'll get back to you soon.");
		setFormData({ name: "", email: "", message: "" });
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	return (
		<section id="contact" className="py-24 px-6">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
						Get In Touch
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Have a project in mind or want to collaborate? Feel free to reach
						out!
					</p>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8 mb-12">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-white/20 text-center"
					>
						<div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
							<Mail className="w-6 h-6 text-white" />
						</div>
						<h4 className="mb-2">Email</h4>
						<p className="text-sm text-muted-foreground">
							hasnainaskari32@gmail.com
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-white/20 text-center"
					>
						<div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
							<MapPin className="w-6 h-6 text-white" />
						</div>
						<h4 className="mb-2">Location</h4>
						<p className="text-sm text-muted-foreground">Pakistan</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-white/20 text-center"
					>
						<div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
							<Send className="w-6 h-6 text-white" />
						</div>
						<h4 className="mb-2">Response Time</h4>
						<p className="text-sm text-muted-foreground">Within 24 hours</p>
					</motion.div>
				</div>

				<motion.form
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					viewport={{ once: true }}
					onSubmit={handleSubmit}
					className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-white/20"
				>
					<div className="grid md:grid-cols-2 gap-6 mb-6">
						<div>
							<label htmlFor="name" className="block mb-2 text-sm">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-white/20 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
								placeholder="Your name"
							/>
						</div>
						<div>
							<label htmlFor="email" className="block mb-2 text-sm">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-white/20 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
								placeholder="your.email@example.com"
							/>
						</div>
					</div>

					<div className="mb-6">
						<label htmlFor="message" className="block mb-2 text-sm">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
							rows={6}
							className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-white/20 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
							placeholder="Tell me about your project..."
						/>
					</div>

					<button
						type="submit"
						className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
					>
						<Send className="w-5 h-5" />
						<span>Send Message</span>
					</button>
				</motion.form>
			</div>
		</section>
	);
}
