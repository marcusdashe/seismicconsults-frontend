import Image from "next/image";
import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg min-h-screen text-[.7rem]">
      <main className="container mx-auto py-10 px-4 flex flex-col items-center justify-start">
        <h1 className="text-4xl font-bold mb-8 px-0 text-fuchsia-800">
          Welcome to Seismic Consults
        </h1>
      </main>
    </div>
  );
}
