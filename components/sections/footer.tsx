import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-12">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h3 className="mb-4 text-xl font-bold text-white">{profile.name}</h3>
        <p className="mb-6 text-sm text-neutral-400">{profile.title}</p>
        {/* Social links */}
        <div className="mb-8 flex items-center justify-center gap-4">
          {profile.socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 transition-colors hover:text-purple-400"
            >
              {link.name}
            </a>
          ))}
        </div>
        <p className="text-xs text-neutral-600">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
