import Link from "next/link";


export default function Home() {
  return (
    <main className="m-5">
      <h1>Home page</h1>
      <div className="flex gap-3 mt-3">
        <Link href='/login'>
          <button className="p-2 bg-green-400 text-[#fff] font-semibold rounded-md">Login</button>
        </Link>
        <Link href='/register'>
          <button className="p-2 bg-red-400 text-[#fff] font-semibold rounded-md">Register</button>
        </Link>
      </div>
    </main>
  );
}
