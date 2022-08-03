import { useEffect } from "react";
import Link from "next/link";

export default function IndexPage() {
  useEffect(() => {
    console.log("index page did mount");
  }, []);

  return (
    <div>
      <h1>welcome !!!</h1>
      <ul>
        <li>
          <Link href="/page1">
            <a>page 1</a>
          </Link>
        </li>
        <li>
          <Link href="/terms-of-use">
            <a>terms of use</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/showRequest">
            <a>showRequest</a>
          </Link>
        </li>
        <li>
          <Link href="/Campuses">
            <a>Campuses</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
