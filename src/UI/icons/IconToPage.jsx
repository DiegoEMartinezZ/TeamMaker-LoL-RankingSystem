import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconToPage = ({ page, icon }) => {
  return (
    <>
      <a href={page}>
        <FontAwesomeIcon
          icon={icon}
          className="text-white rounded-full p-2 bg-blue-900 text-sm font-bold"
        />
      </a>
    </>
  );
};

export default IconToPage;
