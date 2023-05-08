function Token() {
  return (
    <div id="token" className="w-full bg-[#2d5d3e]">
      <div className="container mx-auto py-8">
        <p className="text-4xl mb-8 text-white font-bold">Tokenomics</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          <div className="text-white text-left">
            <img src="/up.png" alt="up.png"></img>
          </div>
          <div className="flex flex-col gap-4 justify-evenly">
            <div className="rounded-full bg-white text-xl font-bold py-4 px-12 cursor-pointer hover:bg-[#bada55]">Circulating Supply: 6900000000</div>
            <div className="rounded-full bg-white text-xl font-bold py-4 px-12 cursor-pointer hover:bg-[#bada55]">3% Buy Sell Tax (No tax for first 15 days)</div>
            <div className="rounded-full bg-white text-xl font-bold py-4 px-12 cursor-pointer hover:bg-[#bada55]">2% LP Add, 1% Burn</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Token;
