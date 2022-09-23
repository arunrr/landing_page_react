import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMedia = ({ icon }) => {
  return (
    <span className="mx-auto mb-5 text-gray-400 hover:text-sky-700">
      <FontAwesomeIcon icon={icon} />
    </span>
  );
};

export default SocialMedia;
