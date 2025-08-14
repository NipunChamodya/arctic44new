"use client";

import Head from "next/head";
import UnderDevelopment from "@/components/UnderDevelopment";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog – Arctic44</title>
        <meta
          name="description"
          content="Our blog is currently under development."
        />
      </Head>

      <UnderDevelopment
        title="blogs"
        description="This page is currently under development."
      />
    </>
  );
}
