import { FaTelegram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div>
      <div className="w-full bg-[#ffa500]">
        <div className="container mx-auto py-8 flex justify-evenly">
          <img src="/Logo_Pinksale.webp" alt="pinksale"/>
          <img src="/Logo_Dexview.webp" alt="pinksale"/>
          <img src="/Logo_Dextools.webp" alt="pinksale"/>
        </div>
      </div>
      <div className="w-full bg-[#2d5d3e]">
        <div className="container mx-auto py-8 flex justify-evenly text-white">
          <p className="text-2xl">© 2023 Wojak<br/> All rights reserved</p>
          <div className="text-2xl">
            Follow Us
            <br />
            <div className="flex gap-3">
              <FaTelegram />
              <a href="https://twitter.com/wojakbsc"><FaTwitter /></a>
              <MdEmail />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
