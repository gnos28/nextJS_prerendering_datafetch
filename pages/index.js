import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <h1>welcome !!!</h1>
      <Link>
        <a href="/page1">page 1</a>
      </Link>
    </div>
  );
}
