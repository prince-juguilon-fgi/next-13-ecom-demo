import "@/globals.css";
import Link from "next/link";
import { LinkItem } from "@/components/link-item";

export const metadata = {
  title: "Next.js 13 Features",
  description: "Demo of Next.js 13 features",
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
          <nav className="w-80 overflow-y-auto p-4 flex flex-col border-r border-gray-800 text-gray-400">
            <Link href="/features">
              <h2 className="text-white font-semibold text-lg">
                Next 13 Features
              </h2>
            </Link>
            <h5 className="mt-6 uppercase text-gray-200">Data fetching</h5>
            <LinkItem
              href="/features/async-components"
              title="Async components"
            />

            <h5 className="mt-6 uppercase text-gray-200">Loading states</h5>
            <LinkItem href="/features/loading-state" title="loading.tsx" />
            <LinkItem href="/features/suspense" title="Suspense" />
            <LinkItem
              href="/features/file-conventions"
              title="File conventions"
            />

            <h5 className="mt-6 uppercase text-gray-200">Routing Comparison</h5>
            <LinkItem href="/app-dir" title="App router" />
            <LinkItem href="/pages-dir" title="Pages router" />
          </nav>
          <div className="overflow-y-auto flex-1 p-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
