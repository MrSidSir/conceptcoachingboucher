import React from "react";
import Head from "next/head"; // Import Head from Next.js

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <Head>
          <title> Thank you for visiting concept coaching classes </title>
        </Head>
        <h1 className="text-4xl font-bold text-blue-500"> syed irshad ahmad </h1>
      </div>
    </div>
  );
};

export default Page;
