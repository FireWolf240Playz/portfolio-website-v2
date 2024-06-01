import Button from "../_components/Button";
import AboutText from "../_components/AboutText";

function Page() {
  return (
    <div className="flex bg-primary-800 px-8  items-center justify-around min-h-screen">
      <div className="max-600:flex max-600:flex-col flex flex-col ">
        <p className="text-primary-100 mb-10 text-center font-bold text-2xl">
          Front-end Developer based in Varna,Bulgaria! 🌊
        </p>
        <AboutText />

        <Button to="/portfolio">See my projects!</Button>
      </div>
    </div>
  );
}

export default Page;
