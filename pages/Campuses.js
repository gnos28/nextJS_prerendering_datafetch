import React from "react";
import { getCampusesFromDb } from "../lib/db";
import Link from "next/link";

export async function getStaticProps() {
  console.log("getStaticProps");

  const campuses = await getCampusesFromDb();
  const reqDate = new Date();

  return {
    props: {
      campus: campuses,
      reqDate: reqDate.toString(),
    },
  };
}

export default function Campuses({ campus, reqDate }) {
  return (
    <div>
      List of campus :
      {campus.map((camp) => (
        <p key={camp.id}>{camp.name}</p>
      ))}
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      {reqDate}
    </div>
  );
}
