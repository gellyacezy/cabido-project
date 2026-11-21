import React from "react";
import Link from "next/link";

const contacts = [
  {
    name: "Email",
    value: "angelmaecabido@gmail.com",
    href: "mailto:youremail@example.com",
  },
  {
    name: "Phone",
    value: "+63 912 345 6789",
    href: "tel:+123456789",
  },
  {
    name: "Instagram",
    value: "@gelly",
    href: "https://instagram.com/yourhandle",
  },
  {
    name: "Facebook",
    value: "Angel Mae C. Cabido",
    href: "https://facebook.com/yourprofile",
  },
  {
    name: "GitHub",
    value: "@gellysea",
    href: "https://github.com/yourusername",
  },
];

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>reach out anytime, cutie</p>

      <ul>
        {contacts.map((c) => (
          <li key={c.name}>
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {c.name}: {c.value}
            </a>
          </li>
        ))}
      </ul>

      <Link href="/">← back home</Link>
    </div>
  );
}