import { useEffect } from "react";

export default function Lightbox({ image, onClose }) {
  // Close the lightbox when the "Escape" key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex items-center justify-center w-screen-lg w-full h-auto  rounded-full"
      >
        <img src={image} alt="Enlarged view" className="rounded-lg shadow-lg" />
        <button
          className="absolute top-4 right-4 text-white bg-gray-700 px-3 py-1 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
