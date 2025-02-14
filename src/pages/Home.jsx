import MainTitle from "../components/MainTitle";

const Home = () => {
  return (
    <>
      <div className="flex relative items-center justify-center h-screen bg-black">
        <MainTitle />
        <div className="flex-col">
          <section className="flex my-6 relative justify-center items-center bg-black rounded-xl">
            <div className="rounded-full absolute -left-2 -top-3 bg-white h-8 w-8 flex items-center justify-center">
              <h1 className="font-bold">1</h1>
            </div>

            <div className=" bg-blue-900 p-2.5 px-5 text-sm rounded-bl-2xl text-left mx-2">
              <label className="text-xs text-white flex pb-2">
                Select Player
              </label>
              <select name="region" id="region" className="rounded-lg w-full">
                <option value="">LAN</option>
                <option value="">LAS</option>
                <option value="">BR</option>
                <option value="">EUW</option>
                <option value="">EUNE</option>
                <option value="">LAN</option>
                <option value="">LAS</option>
                <option value="">BR</option>
                <option value="">EUW</option>
                <option value="">EUNE</option>
              </select>
            </div>
            <div className="bg-white p-2 rounded-br-2xl w-60 text-left">
              <h2 className="text-xs pb-2">Select Player</h2>
              <input type="text" className="rounded-lg w-full bg-gray-200" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
