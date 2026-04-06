import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Alex Morgan
          <span className="mx-2">•</span>
          <span>{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}
