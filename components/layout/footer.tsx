import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6 py-10 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
