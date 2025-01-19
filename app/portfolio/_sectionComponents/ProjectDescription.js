import Button from "@/app/_components/Button";
import classNames from "classnames";

function ProjectDescription({
  description,
  title,
  githubLink,
  demoLink,
  optionalText = "",
  noLiveDemo = false,
}) {
  return (
    <div className="text-left p-4">
      <h3 className="text-lg mb-5 font-bold">{title}</h3>
      <p className="mb-5">{description}</p>
      <div
        className={classNames("flex gap-6", {
          "justify-start": noLiveDemo,
          "justify-center": !noLiveDemo,
        })}
      >
        <Button to={githubLink} newTab={true}>
          See the git repo!
        </Button>
        {!noLiveDemo && (
          <Button to={demoLink} newTab={true}>
            {optionalText ? optionalText : "See live demo"}
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProjectDescription;
