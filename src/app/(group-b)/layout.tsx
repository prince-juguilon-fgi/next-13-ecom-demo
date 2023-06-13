import "@/globals.css";

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
      <body className="bg-gray-900 text-white mx-auto w-full max-w-4xl py-10 px-4">
        {children}
      </body>
    </html>
  );
}
