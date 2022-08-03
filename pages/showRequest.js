import React from "react";
import getRawBody from "raw-body";
import Link from "next/link";

export async function getServerSideProps(context) {
  let body = "";
  const reqDate = new Date();

  if (context.req.method == "POST") {
    body = await getRawBody(context.req);
    console.log(body.toString("utf-8"));
  }

  return {
    props: {
      body,
      headers: context.req.headers,
      query: context.query,
      reqDate: reqDate.toString(),
    },
  };
}

export default function showRequest({ body, headers, query, reqDate }) {
  return (
    <div>
      <pre>body{JSON.stringify(body)}</pre>
      <pre>headers{JSON.stringify(headers)}</pre>
      <pre>query{JSON.stringify(query)}</pre>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      {reqDate}
    </div>
  );
}
