import BtnNavbar from "./BtnNavbar";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="bg-blue-900 absolute left-0 right-0 top-44 m-auto rounded-full flex items-center justify-center w-fit px-10 p-2 text-white ">
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
