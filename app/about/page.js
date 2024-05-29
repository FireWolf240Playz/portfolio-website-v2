import Image from "next/image";
import Button from "../_components/Button";
import TechStackList from "../_components/TechStackList";
import AboutText from "../_components/AboutText";
import image from "@/public/picture.jpg";

function Page() {
  return (
    <div className="flex bg-primary-800 px-8  items-center justify-around min-h-screen">
      <div
        className="mt-[5rem] 
      "
      >
        <p className="text-primary-100 text-xl mb-10 leading-relaxed break-all">
          <span className="font-bold ">Hello y&apos;all! 😃</span>
          <br /> My name is Alexander Yordanov - Front-end developer!
        </p>
        <AboutText />

        <p className="mb-10 font-bold">And this is my tech stack...</p>
        <TechStackList />
        <Button to="/portfolio">See my projects!</Button>
      </div>

      <div className="w-[20rem]  ">
        <Image
          src={image}
          placeholder="blur"
          quality={90}
          alt="Picture of me"
        />
      </div>
    </div>
  );
}

export default Page;
