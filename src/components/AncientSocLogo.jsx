import logo from '../assets/badge_only.png';
import { HashLink } from 'react-router-hash-link';

const AncientSocLogo = () => {
  return (
    <HashLink
      className="flex flex-row justify-items-center items-center p-2"
      to='/#'
      smooth
      tabIndex={0}
    >
      <img src={logo} alt="logo" className="h-full w-auto object-contain" />
      <h2 className="font-bold p-2">AncientSoc UNSW</h2>
    </HashLink>
  );
};
export default AncientSocLogo;
