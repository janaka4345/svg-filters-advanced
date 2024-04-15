import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 w-fit">
      <h1>home</h1>
      <Link className={buttonVariants({variant:"default"})} href='/svgrTest'>svgrTest</Link>
      <Link className={buttonVariants({variant:"default"})} href='/svgFilter1'>svg Filter 1</Link>
    </div>
  );
}
