import logo from "/assets/logo.svg";
import menu from "/assets/icon-menu.svg";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2 ">
      <img src={menu} alt="" className="md:hidden " />
      <img src={logo} alt="Logo" />
    </div>
  );
};
export default Logo;
