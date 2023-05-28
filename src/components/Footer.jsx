import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";

function Footer() {
  return (
    <div className=" flex justify-around px-20 mb-5">
      <img src={facebook} width={"30px"} />
      <img src={twitter} width={"30px"} />
      <img src={instagram} width={"30px"} />
      <img src={github} width={"30px"} />
    </div>
  );
}

export default Footer;
