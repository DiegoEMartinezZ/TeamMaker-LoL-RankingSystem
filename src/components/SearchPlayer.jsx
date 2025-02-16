import InputText from "../UI/text/InputText";
import Label from "../UI/text/Label";

const Searchplayer = ({ position }) => {
  return (
    <>
      <section className="flex my-6 relative justify-center items-center bg-black rounded-xl">
        <div className="rounded-full absolute -left-2 -top-3 bg-white h-8 w-8 flex items-center justify-center">
          <h1 className="font-bold">{position}</h1>
        </div>
        <div className=" bg-blue-900 p-2.5 px-5 text-sm rounded-bl-2xl text-left mx-2">
          <Label text="Region" />
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
          <InputText text="Player's Name" />
          <input type="text" className="rounded-lg w-full px-2 bg-gray-200" />
        </div>
      </section>
    </>
  );
};

export default Searchplayer;
