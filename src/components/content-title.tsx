import Link from "next/link";

type ContentTitleProps = {
  title: string;
  href: string;
};

export const ContentTitle = ({ title, href }: ContentTitleProps) => {
  return (
    <div className="flex items-center gap-4">
      <h4 className="text-xl font-bold">{title}</h4>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-500"
      >
        <p>View source</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </Link>
    </div>
  );
};
