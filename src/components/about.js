function About() {
  return (
  <div id="about">
    <div className="w-full bg-[#ffa500]">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-4">
            <div className="rounded-full bg-white text-2xl font-bold py-2 px-5 cursor-pointer hover:bg-[#bada55]">Hyper-deflationary</div>
            <div className="rounded-full bg-white text-2xl font-bold py-2 px-5 cursor-pointer hover:bg-[#bada55]">Daily 0.25% Wojak Rewards</div>
            <div className="rounded-full bg-white text-2xl font-bold py-2 px-5 cursor-pointer hover:bg-[#bada55]">2% of Buy/sell Goes to Liquidity </div>
            <div className="rounded-full bg-white text-2xl font-bold py-2 px-5 cursor-pointer hover:bg-[#bada55]">1% burn From Buy/Sell Transactions</div>
          </div>
          <div className="text-white text-left">
          <p className="text-3xl font-bold">Wojak!... To the Moon</p>
          <p className="text-xl font-bold pt-4">Wojak is a deflationary token here to reward traders with bonuses on trading and volume. 3% tax in which 2% goes to liquidity and 1% burn (No Tax For first 15 Days). Wojak Holders will get daily 0.25% Wojak Rewards.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full bg-[#82ac65]">
      <div className="container mx-auto py-8 text-white">
        <p className="text-5xl font-bold">How Does it work?</p>
        <p className="text-2xl font-bold pt-8">Wojak has created an innovative Auto-Staking token which provides users a simpler way to receive staking rewards. Simply hold $Wojak in your wallet and you will automatically receive staking rewards 0.25% daily.</p>
      </div>
    </div>
  </div>
  );
}

export default About;
