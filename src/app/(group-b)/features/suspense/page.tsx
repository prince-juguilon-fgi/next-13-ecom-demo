import { Suspense } from "react";

import { wait } from "@/lib/utils";
import { ContentTitle } from "@/components/content-title";

export const dynamic = "force-dynamic";

const DashBox = (props: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={`${props.className} border-2 border-blue-500 p-4 rounded-md border-dashed`}
    >
      {props.children}
    </div>
  );
};

const AsyncComponent = async (props: { wait: number }) => {
  await wait(props.wait);
  return <DashBox className="border-green-500">Waited {props.wait}ms</DashBox>;
};

const SuspenseLoadingPage = () => {
  return (
    <div>
      <ContentTitle
        title="With <Suspense />"
        href="https://github.com/prince-juguilon-fgi/next-13-ecom-demo/blob/main/src/app/(group-b)/features/suspense/page.tsx"
      />

      <DashBox className="flex gap-4 mt-6 overflow-x-auto border-white">
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
          <pre className="bg-gray-800 p-2 rounded overflow-x-auto">
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
      </DashBox>
    </div>
  );
};

export default SuspenseLoadingPage;
