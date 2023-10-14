import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Link href="/Home">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/Demo">Demo</Link>
      <Link href="/Contact">Contact</Link>
    </>
  )
}
