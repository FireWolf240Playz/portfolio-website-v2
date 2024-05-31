import Button from "../_components/Button";

function Page() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <p className="text-2xl uppercase">Thank you for reaching out!</p>
      <Button to="/">Go back to home page</Button>
    </div>
  );
}

export default Page;
