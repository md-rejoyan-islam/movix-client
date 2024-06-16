import { Link, NavLink, useLocation } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import logo from "../../assets/movix-logo.svg";
import usePopupControl from "../../hook/popupControl/usePopupControl";
import { useEffect } from "react";
import SearchField from "../header/SearchField";

const Header = () => {
  const { isOpen, toggleMenu, dropDownRef } = usePopupControl();
  // const { isOpen:sear, toggleMenu, dropDownRef } = usePopupControl();

  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`${
          isOpen && "bg-secondary"
        }  fixed inset-x-0   z-50 top-0 bg-[rgba(0,0,0,.25)]  backdrop-blur-sm border-b md:border-none border-[#231d43] text-white  transition-colors duration-300 `}
      >
        <header className=" w- max-w-container flex items-center justify-between md:px-6">
          {/* logo */}
          <Link>
            <img src={logo} alt="" className="py-1 h-[60px] md:px-0 px-4" />
          </Link>

          {/* horizontal nav */}
          <div className="horizontal-menu md:block hidden">
            <ul className="flex items-center justify-center space-x-8  horizontal-menu">
              <li className="relative">
                <Link
                  to={"#"}
                  className={`${
                    pathname.includes("/movie/") && "active"
                  } px-1 py-3`}
                >
                  Movies
                </Link>
                <ul className="absolute bg-bg_primary shadow-sm shadow-black-light border border-black-light  top-[130%] w-[140px] text-white flex flex-col gap-2 py-3 px-4 rounded-md">
                  <li>
                    <NavLink to={"/movie/popular"} className="py-1 block">
                      Popular
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/movie/now-playing"} className="py-1  block">
                      Now Playing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/movie/top-rated"} className="py-1 block">
                      {" "}
                      Top Rated
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="relative">
                <Link
                  to={"#"}
                  className={`${
                    pathname.includes("/tv/") && "active"
                  } px-1 py-3`}
                >
                  Tv Shows
                </Link>
                <ul className="absolute bg-bg_primary shadow-sm shadow-black-light border border-black-light  top-[130%] w-[140px] text-white flex flex-col gap-2 py-3 px-4 rounded-md">
                  <li>
                    <NavLink to={"/tv/popular"} className="py-1 block">
                      Popular
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/tv/on-the-air"} className="py-1  block">
                      On Tv
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/tv/top-rated"} className="py-1 block">
                      {" "}
                      Top Rated
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to={"/login"} className="px-1 py-3">
                  Login
                </NavLink>
              </li>

              <li>
                <SearchField />
              </li>
            </ul>
          </div>

          {/* vertical  menu */}
          <div
            className="vertical-menu flex items-center  space-x-4 relative md:hidden px-4  z-50"
            ref={dropDownRef}
          >
            <SearchField />
            <button
              onClick={() => {
                toggleMenu();
              }}
            >
              <RxCross2 className={`${isOpen ? "" : "hidden"}`} />
              <AiOutlineMenu className={`${isOpen ? "hidden" : ""}`} />
            </button>
            <ul
              className={`${
                isOpen ? "translate-y-[97px] " : "translate-y-[-100px] "
              } fixed text-white transition-transform duration-300  bg-[#020c1b] w-screen flex flex-col px-7 text-lg box-border  z-50  right-0  py-3`}
            >
              <li>
                <Link className="py-1 block">Movies</Link>
              </li>
              <li>
                <Link className="py-1 block">Tv Shows</Link>
              </li>
              <li>
                <Link className="py-1 block">Login</Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
