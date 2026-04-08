import { ThemeToggle } from "./components/ThemeToggle";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { ChatBubble } from "./components/ChatBubble";
import { Footer } from "./components/Footer";

export default function App() {
	return (
		<div className="min-h-screen bg-background text-foreground transition-colors duration-300">
			<ThemeToggle />

			<main>
				<Hero />
				<Skills />
				<Projects />
				<Experience />
				<Contact />
				<ChatBubble />
			</main>

			{/* <Footer /> */}
		</div>
	);
}
