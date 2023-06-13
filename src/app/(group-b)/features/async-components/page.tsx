import { ContentTitle } from "@/components/content-title";

const AsyncComponentsPage = () => {
  return (
    <div>
      <ContentTitle
        title="Async Components"
        href="https://github.com/prince-juguilon-fgi/next-13-ecom-demo/blob/main/src/app/(group-b)/features/async-components/page.tsx"
      />

      <p className="indent-6 mt-4 text-gray-300">
        In next 13, we can already define components as async functions. Async
        components are `server` components by default. This allows us to fetch
        data without using `useEffect` when a component mounts or 3rd party
        fetching libraries like `react-query`. Async components also give us the
        ability to use `sensitive` variables since it is executed in the server.
        This allows us to call our API route/DB directly like how we used to do
        in `getServerSideProps`
      </p>

      <p className="indent-6 mt-4 text-gray-400 border-l-4 border-gray-700 bg-gray-800 py-2">
        NOTE: this does not mean that we can&apos;t use `useEffect` anymore or
        not have the need to do so.
      </p>
    </div>
  );
};

export default AsyncComponentsPage;
