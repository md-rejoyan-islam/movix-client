import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import usePopupControl from "../../hook/popupControl/usePopupControl";

function SearchField() {
  const { isOpen, toggleMenu, dropDownRef } = usePopupControl();
  return (
    <>
      <div className="">
        <button
          onClick={() => {
            toggleMenu();
          }}
        >
          <BiSearch className="text-xl mt-3" />
        </button>
      </div>
      <div
        className={`${
          isOpen
            ? "translate-y-[61px] md:translate-y-[12px] "
            : "translate-y-[-61px] md:translate-y-[-110px] "
        } fixed z-50 w-full right-0 overflow-hidden bg-white transition-transform duration-300  `}
      >
        <div className=" h-[60px] w-full  px-4 relative max-w-container">
          <input
            type="text"
            className="h-full w-full px-4 border-none focus:outline-none"
            placeholder="Search  for a movie or tv show..."
          />

          <RxCross2
            className="text-black text-xl z-10 inset-y-0 h-full right-7 cursor-pointer hover:text-pink  absolute"
            onClick={() => {
              toggleMenu();
            }}
          />
        </div>
      </div>
    </>
  );
}

export default SearchField;
