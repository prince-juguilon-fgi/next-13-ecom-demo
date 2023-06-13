import Link from "next/link";

const AsyncComponentsPage = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <h4 className="text-xl font-bold">Async Components</h4>
        <Link
          href="https://github.com/prince-juguilon-fgi/next-13-ecom-demo/blob/main/src/app/(group-b)/features/async-components/page.tsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-blue-500">View source</p>
        </Link>
      </div>

      <p className="indent-6 mt-4 text-gray-300">
        In next 13, we can already define components as async functions. Async
        components are `server` components by default. This allows us to fetch
        data without using `useEffect` when a component mounts or 3rd party
        fetching libraries like `react-query`
      </p>
    </div>
  );
};

export default AsyncComponentsPage;
