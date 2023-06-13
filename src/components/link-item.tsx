"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkItemProps = {
  href: string;
  title: string;
};

export const LinkItem = ({ href, title }: LinkItemProps) => {
  const pathname = usePathname();
  const isActive = pathname?.includes(href);

  return (
    <Link href={href}>
      <p
        className={`px-4 py-2 w-full rounded transition-all ${
          isActive ? "bg-gray-800 text-white" : "hover:text-white"
        }`}
      >
        {title}
      </p>
    </Link>
  );
};
