import "@/globals.css";
import Link from "next/link";

export const metadata = {
  title: "Next.js 13 Features",
  description: "Demo of Next.js 13 features",
};

type LinkItemProps = {
  href: string;
  title: string;
};

const LinkItem = ({ href, title }: LinkItemProps) => {
  return (
    <Link href={href}>
      <p className="px-4 py-2 w-full rounded hover:bg-gray-800 transition-all">
        {title}
      </p>
    </Link>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white overflow-hidden">
        <div className="flex h-screen">
          <nav className="w-80 overflow-y-auto p-4 flex flex-col border-r border-gray-800 text-gray-300">
            <Link href="/features">
              <h2 className="text-white font-semibold text-lg">
                Next 13 Features
              </h2>
            </Link>

            <h5 className="mt-6 uppercase">Loading states</h5>
            <LinkItem href="/features/loading" title="Suspense" />
          </nav>
          <div className="overflow-y-auto flex-1 p-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
