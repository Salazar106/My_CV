import { SectionInformation } from "./ui/aboutMe";
import Acordeon from "./ui/acordeon";

export default function Home() {
 

  return (
    <main className="flex flex-col items-center  ">
      <SectionInformation/>
      
      <div className="flex w-full max-h-[30%]  justify-center items-center gap-10 mb-[40%]">
          <Acordeon/>
      </div>
      
    </main>
  );
}
