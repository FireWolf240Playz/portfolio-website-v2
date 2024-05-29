import Image from "next/image";

function ProjectImage({ image }) {
  return (
    <div className="relative flex items-center justify-center">
      <Image src={image} alt="Project preview" className="w-8/12 " />;
    </div>
  );
}

export default ProjectImage;
