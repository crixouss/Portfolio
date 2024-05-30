import Image from "next/image";
import bg from "../../public/background/home-background.jpeg"
import RenderModel from "@/components/render-model";
import Ogre from "@/components/models/Ogre";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
          priority
          sizes="100vw"
          src={bg}
          alt="background-image"
          fill
          className="-z-50 w-full h-full object-cover object-center opacity-40"
      />
        <div className={"w-full h-screen"}>
          <Navigation/>
          <RenderModel>
            <Ogre/>
          </RenderModel>
        </div>
    </main>
  );
}
