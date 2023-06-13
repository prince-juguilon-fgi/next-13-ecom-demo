import Link from "next/link";

const FileConventionsPage = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <h4 className="text-xl font-bold">File conventions</h4>
        <Link
          href="https://github.com/prince-juguilon-fgi/next-13-ecom-demo/blob/main/src/app/(group-b)/features/file-conventions/page.tsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-blue-500">View source</p>
        </Link>
      </div>
    </div>
  );
};

export default FileConventionsPage;
