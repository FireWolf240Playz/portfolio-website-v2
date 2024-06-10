import Button from "./_components/Button";
import image2 from "@/public/image.jpg";
import TechStack from "./_components/TechStackList";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen gap-[20rem] max-800:gap-[5rem] max-800:flex-col-reverse max-1000:gap-[2rem] relative z-0">
      <div className="flex flex-col max-600:">
        <p className="text-[3.5rem] font-bold mb-10 text-start max-1000:text-[2.5rem] max-800:text-center text-primary-100 leading-[3rem] tracking-wider">
          Front-End React <br /> Developer 👋
        </p>
        <p className="max-800:text-center text-start text-2xl mb-10 max-800:mb-5 max-1000:text-xl">
          Hi, I&apos;m Alexander Yordanov!
          <br /> A passionate Front-end React Developer based in Varna, Bulgaria
        </p>
        <div className="max-800:flex max-800:justify-center mb-5">
          <div className="flex gap-5 max-1000:flex-col">
            <p className="inline-block mt-2 border-r-2px max-800:text-center">
              Tech stack...
            </p>
            <TechStack />
          </div>
        </div>
        <div className="max-1000:flex max-800:justify-center">
          <Button to="/portfolio" extension="max-800:mb-5">
            Explore projects!
          </Button>
        </div>
      </div>

      <div
        className="relative w-[20rem] h-[20rem] bg-cover bg-center bg-no-repeat border-4 border-accent-500 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] transition-all duration-1000 ease-in-out max-600:mt-[3rem] z-0"
        style={{
          animation: "morph 8s ease-in-out infinite",
          backgroundImage: `url(${image2.src})`,
        }}
      ></div>
    </div>
  );
}
