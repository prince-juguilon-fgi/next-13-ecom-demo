"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkItemProps = {
  href: string;
  title: string;
  isExternal?: boolean;
};

export const LinkItem = ({
  href,
  title,
  isExternal = false,
}: LinkItemProps) => {
  const pathname = usePathname();
  const isActive = pathname?.endsWith(href);
  const linkProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} {...linkProps}>
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
