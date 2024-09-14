import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center gap-3 px-10">
      <Button className="px-6" variant='outline'>Văn Linh</Button>
      <Input  type="email" placeholder="Email"   />
    </div>
  );
}
