import mail from "../assets/mail.svg";
import linkedin from "../assets/linkedin.svg";

function Button() {
  return (
    <div className=" m-auto flex w-2/3 justify-around">
      <button className=" bg-white py-2 px-5 rounded-md flex justify-between">
        <img src={mail} width={"20px"} className="self-center" />
        Email
      </button>
      <button className=" bg-blue-300 py-2 px-5 rounded-md flex">
        <img src={linkedin} alt="" width={"20px"} className="self-center" />
        LinkedIn
      </button>
    </div>
  );
}

export default Button;
