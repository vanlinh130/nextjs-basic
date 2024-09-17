import React from 'react'
import Link from 'next/link';

export default function page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}
