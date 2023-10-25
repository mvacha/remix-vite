import type { MetaFunction } from "@remix-run/node";
import { useSearchParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [query, setQuery] = useSearchParams();

  const clickAction = () =>
    setQuery((q) => ({
      foo: "bar",
    }));

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <a onClick={clickAction}>Set query param</a>
    </>
  );
}
