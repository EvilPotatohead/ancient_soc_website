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
      <div className="font-bold text-left p-2">AncientSoc</div>
    </HashLink>
  );
};
export default AncientSocLogo;
