
import { trpc } from "@/trpc/server";


export default async function Home() {
  const data = await trpc.hello({text:"Aai"});
  return (
    <div>
      Client component says : {data?.greeting}
    </div>
  );
}
