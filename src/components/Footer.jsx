import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import SocialMedia from "./SocialMedia";

const Footer = () => {
  const icons = [faFacebook, faTwitter, faInstagram];

  return (
    <div className="absolute bottom-0 mb-5 xl:mt-3">
      <div className="flex justify-center">
        {icons.map((icon, index) => (
          <SocialMedia key={index} icon={icon} className="basis-1/3" />
        ))}
      </div>
      <p className="text-xs text-gray-400">
        &copy; Copyright Creed. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
