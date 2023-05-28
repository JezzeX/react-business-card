import potrait from "../assets/potrait.jpg";
import Button from "./Button";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

function Card() {
  return (
    <>
      <div className="bg-gray-800 overflow-hidden m-auto w-[25rem] rounded-lg">
        <img src={potrait} />
        <div className=" my-5 text-center">
          <h1 className=" text-white text-2xl font-bold mb-1">Laura Smith</h1>
          <p className=" text-sm text-blue-200">Frontend Developer</p>
          <p className=" text-xs text-white">laurasmith.website</p>
        </div>
        <Button />
        <About />
        <Interests />
        <Footer />
      </div>
    </>
  );
}

export default Card;
