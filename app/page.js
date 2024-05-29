import HeroScene from "./_components/HeroScene";
import Button from "./_components/Button";

export default function Home() {
  return (
    <div className="flex-grow flex items-center  mt-8">
      <div className="flex flex-col">
        <p className="uppercase text-3xl text-center mb-10 ml-10 text-primary-100 leading-[3rem] tracking-wider ">
          Let&apos;s craft as
          <span className="bg-accent-500  py-2 px-2">magic</span> your next
          <span className="bg-accent-500 py-2 px-2">project</span>!
        </p>
        <Button to="/portfolio">Explore projects!</Button>
      </div>

      <div>
        <HeroScene />
      </div>
    </div>
  );
}
