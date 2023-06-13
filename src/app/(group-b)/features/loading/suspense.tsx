import { wait } from "@/lib/utils";
import { Suspense } from "react";

const DashBox = (props: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={`${props.className} border border-blue-500 p-4 rounded-md border-dashed`}
    >
      {props.children}
    </div>
  );
};

const AsyncComponent = async (props: { wait: number }) => {
  await wait(props.wait);
  return <DashBox className="border-white">Waited {props.wait}ms</DashBox>;
};

const SuspenseLoadingPage = () => {
  return (
    <div className="border border-dashed rounded-md p-4">
      <h1 className="text-center w-full">
        With{" "}
        <span className="bg-gray-700 px-2 py-1 rounded font-mono">
          {"<Suspense />"}
        </span>
      </h1>

      <section className="flex gap-4 mt-6">
        <div className="flex flex-col justify-between gap-4 py-2 w-1/3">
          <Suspense fallback={<DashBox>Waiting for 1000ms</DashBox>}>
            <AsyncComponent wait={1000} />
          </Suspense>

          <Suspense fallback={<DashBox>Waiting for 2000ms</DashBox>}>
            <AsyncComponent wait={2000} />
          </Suspense>

          <Suspense fallback={<DashBox>Waiting for 3000ms</DashBox>}>
            <AsyncComponent wait={3000} />
          </Suspense>

          <Suspense fallback={<DashBox>Waiting for 4000ms</DashBox>}>
            <AsyncComponent wait={4000} />
          </Suspense>

          <Suspense fallback={<DashBox>Waiting for 5000ms</DashBox>}>
            <AsyncComponent wait={5000} />
          </Suspense>
        </div>

        <div className="text-base w-3/4">
          <pre className="bg-gray-700 p-2 rounded">
            {`<Suspense fallback={<DashBox>Waiting for 1000ms</DashBox>}>
  <AsyncComponent wait={1000} />
</Suspense>

<Suspense fallback={<DashBox>Waiting for 2000ms</DashBox>}>
  <AsyncComponent wait={2000} />
</Suspense>

<Suspense fallback={<DashBox>Waiting for 3000ms</DashBox>}>
  <AsyncComponent wait={3000} />
</Suspense>

<Suspense fallback={<DashBox>Waiting for 4000ms</DashBox>}>
  <AsyncComponent wait={4000} />
</Suspense>

<Suspense fallback={<DashBox>Waiting for 5000ms</DashBox>}>
  <AsyncComponent wait={5000} />
</Suspense>
`}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default SuspenseLoadingPage;
