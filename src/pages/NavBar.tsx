import { Link } from "@tanstack/react-router";
import Cart from "@/pages/Cart";
import Profile from "@/pages/Profile";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <>
      <div className="p-2 flex justify-between">
        <div className="p-2 flex gap-5">
          <Logo />
          <div className="hidden md:flex gap-5">
            <Link to="/" className="[&.active]:font-bold">
              Collection
            </Link>{" "}
            <Link to="/men" className="[&.active]:font-bold">
              Men
            </Link>
            <Link to="/women" className="[&.active]:font-bold">
              Women
            </Link>
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>
            <Link to="/contact" className="[&.active]:font-bold">
              Contact
            </Link>
          </div>
        </div>
        <div className="p-2 flex gap-5">
          <Cart />
          <Profile />
        </div>
      </div>
    </>
  );
};
export default NavBar;
