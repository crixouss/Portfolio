import Image from "next/image";
import bg from "../../public/background/home-background.jpeg"
import RenderModel from "@/components/render-model";
import Ogre from "@/components/models/Ogre";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} fill alt={"background"} className={"w-full h-full object-cover object-center opacity-50"}/>
        <div className={"w-full h-screen"}>
          <RenderModel>
            <Ogre/>
          </RenderModel>
        </div>
    </main>
  );
}
