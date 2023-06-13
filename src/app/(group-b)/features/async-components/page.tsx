const AsyncComponentsPage = () => {
  return (
    <div>
      <h4 className="text-xl font-bold">Async Components</h4>
      <p className="indent-6 mt-4">
        In next 13, we can already define components as async functions. Async
        components are `server` components by default. This allows us to fetch
        data without using `useEffect` when a component mounts or 3rd party
        fetching libraries like `react-query`
      </p>
    </div>
  );
};

export default AsyncComponentsPage;
