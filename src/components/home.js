function Home() {
  return (
    <div id="home" className="w-full bg-[#6a9f55]">
      <div className="container mx-auto py-8">
        <p className="text-white text-xl sm:text-5xl font-bold p-8">
          The WOJAK coin is based on the famous Wojak internet meme that emerged in 2009.
        </p>

        <div className="relative max-w-lg mx-auto flex justify-center">
          <img src="logo.png" alt="logo" />
          <img className="absolute hidden sm:block w-48 left-10 bottom-4" src="wojak.png" alt="wojak" />
          <img className="absolute hidden sm:block w-48 -left-10 top-4" src="cap.png" alt="wojak" />
          <img className="absolute hidden sm:block w-48 -right-20 bottom-4" src="bread.png" alt="wojak" />
          <img className="absolute hidden sm:block w-48 left-40 -top-14" src="glass.png" alt="wojak" />
          <img className="absolute hidden sm:block w-48 -right-10 -top-4" src="bnb.png" alt="wojak" />
          <img className="absolute hidden sm:block w-48 -right-10 top-24" src="uparrow.png" alt="wojak" />
        </div>
        <div className="mt-4 text-white font-bold rounded-full px-5 py-2 bg-[#2d5d3e] inline-block">Buy $Wojak</div>
        <a href="https://bscscan.com/token/0xc8bad1e2a992e585e6c7f31649b6e95140682f9a" target="_blank" className="mt-4 block text-white font-bold">0xc8bad1e2a992e585e6c7f31649b6e95140682f9a</a>
      </div>
    </div>
  );
}

export default Home;
