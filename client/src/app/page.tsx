import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button>Home</Button>
      <ul>
        <li>
          <Link href='/login'>LOGIN</Link>
        </li>
        <li>
          <Link href='/register'>REGISTER</Link>
        </li>
      </ul>
    </main>
  );
}
