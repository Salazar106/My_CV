import Image from "next/image";
import { Header } from "./ui/header";
import { SectionInformation } from "./ui/aboutMe";
import Skills from "./ui/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
        <Header/>
        <SectionInformation/>
        <Skills/>
    </main>
  );
}
