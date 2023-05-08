import { FaTelegram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Header() {
  const arr = [
    {
      link:"#home",
      title:"Home"
    },
    {
      link:"#about",
      title:"About"
    },
    {
      link:"#token",
      title:"Tokenomics"
    },
    {
      link:"#roadmap",
      title:"Roadmap"
    }
  ]
  return (
    <div className="w-full bg-[#ffa500] h-24 flex justify-between text-white items-center px-8">
      <div className="flex gap-5 items-center">
        <img src="/wojak.png" alt="logo" className="h-[70px]"/>
        <a target="_blank" className="text-5xl" href="https://t.me/WojakOriginal"><FaTelegram /></a>
        <a target="_blank" className="text-5xl" href="https://twitter.com/wojakbsc"><FaTwitter /></a>

      </div>
      <div className="hidden sm:block">
        {
          arr.map((ele,index)=>{
            return <a className="text-xl font-bold p-2" href={ele.link} key={index}>{ele.title}</a>
          })
        }
      </div>
    </div>
  );
}

export default Header;
