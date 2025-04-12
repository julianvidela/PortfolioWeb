import Link from "next/link";
import { socialLinks } from "./SocialMediaData";

export const Tags = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center  gap-3 mt-3">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`inline-block p-3 border rounded-lg ${link.className}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={link.icon} alt={link.name} />
        </Link>
      ))}
      </div>
    </div>
  );
};
