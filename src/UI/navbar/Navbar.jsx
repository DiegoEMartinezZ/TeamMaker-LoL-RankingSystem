import BtnNavbar from "../buttons/BtnNavbar";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center ">
        <ul className="bg-blue-900 mb-8 m-auto rounded-full flex items-center justify-center mx-5 p-2 text-white w-fit ">
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
