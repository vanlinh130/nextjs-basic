import Card from "@/app/Card/Card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center gap-3 px-10">
      <Button className="px-6 text-mini" variant='outline'>Văn Linh</Button>
      <Input  type="email" placeholder="Email"   />
      <h1>dfdf</h1>

      <Card />
    </div>
  );
}
