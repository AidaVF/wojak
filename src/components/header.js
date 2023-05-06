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
      <img src="/wojak.png" alt="logo" className="h-24"/>
      <div>
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
