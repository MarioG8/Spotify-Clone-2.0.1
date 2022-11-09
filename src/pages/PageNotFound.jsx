import { TbError404, TbFaceIdError } from "react-icons/tb";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-3">
      <TbError404 className="text-red-500" size={50} />
      <TbFaceIdError className="text-red-500" size={50} />
      <h1 className="lg:text-5xl font-bold text-white">
        Ups Something Went Wrong!
      </h1>
      <p className="lg:text-2xl font-semibold text-white">Page Not Found!</p>

      <Link
        to="/"
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-5 rounded transition duration-400 ease-in-out"
      >
        Home
      </Link>
    </div>
  );
}

export default PageNotFound;
