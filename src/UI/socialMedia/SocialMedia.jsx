import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMedia = ({ url, icon }) => {
  return (
    <>
      <li>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={icon} className="mx-2" />
        </a>
      </li>
    </>
  );
};

export default SocialMedia;
