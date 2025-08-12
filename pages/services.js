"use client";

import Head from "next/head";
import UnderDevelopment from "@/components/UnderDevelopment";

export default function Service() {
  return (
    <>
      <Head>
        <title>Services – Arctic44</title>
        <meta
          name="description"
          content="Our services are currently under development."
        />
      </Head>
      <UnderDevelopment
        title="Services"
        description="This page is currently under development."
      />
    </>
  );
}
