function Roadmap() {
  const ph1 = [
    "Website completed",
    "Community created",
    "Pinksale Presale",
    "Pancakeswap Launched ",
    "CoinGecko/Coinmarketcap Listings",
  ];
  const ph2 = [
    "Post-launch marketing",
    "Community Partnerships Wojak Times digital newsletter",
    "Formation of token gated discord group, Wojak Palace, for holders, more details tba",
    "Influencer Awareness Partnerships",
    "CEX Listings 5000+holders",
  ];
  const ph3 = [
    "Wojak AAA online Game (Play to Earn) ",
    "Wojak Academy",
    "Wojak Tools, Wojak merch, Wojak NFTs",
    "T1 Exchange Listings 10,000+ holders",
    "Meme Takeover",
  ];
  return (
    <div id="roadmap" className="w-full bg-[#82ac65]">
      <div className="container mx-auto py-8">
        <p className="text-5xl font-bold text-white">Roadmap</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex-1 p-8 bg-[#4c7e4a] rounded-lg">
            <div className="text-black text-2xl rounded-full py-2 px-10 bg-white font-bold">Phase 1</div>
            <div className="mt-6 text-left">
              {
              ph1.map((ele,index)=>{
                return <p key={index} className="mt-2 text-white font-bold">{ele}</p>
              })
              }
            </div>
          </div>
          <div className="flex-1 p-8 bg-[#4c7e4a] rounded-lg">
            <div className="text-black text-2xl rounded-full py-2 px-10 bg-white font-bold">Phase 2</div>
            <div className="mt-6 text-left">
              {
              ph2.map((ele,index)=>{
                return <p key={index} className="mt-2 text-white font-bold">{ele}</p>
              })
              }
            </div>
          </div>
          <div className="flex-1 p-8 bg-[#4c7e4a] rounded-lg">
            <div className="text-black text-2xl rounded-full py-2 px-10 bg-white font-bold">Phase 3</div>
            <div className="mt-6 text-left">
              {
              ph3.map((ele,index)=>{
                return <p key={index} className="mt-2 text-white font-bold">{ele}</p>
              })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
