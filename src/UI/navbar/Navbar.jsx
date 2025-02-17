import BtnNavbar from "./BtnNavbar";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="bg-blue-900  mb-8 m-auto rounded-full flex items-center justify-center w-auto mx-5 p-2 text-white ">
          <BtnNavbar text={"Solo"} />
          <BtnNavbar text={"Flex"} />
          <BtnNavbar text={"ARAM"} />
          <BtnNavbar text={"All"} />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
