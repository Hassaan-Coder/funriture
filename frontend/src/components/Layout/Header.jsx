import React, { useState, useRef, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import { categoriesData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";
const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // State for search bar open/close
  const searchInputRef = useRef(null);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(3);
  const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false);

  const closeSearch = () => {
    setSearchOpen(false);
  };
  const productsPerPage = 3;
  useEffect(() => {
    if (searchData) {
      setDisplayedProducts(searchData.slice(0, displayedCount));
    }
  }, [searchData, displayedCount]);

  // const handleLoadMore = () => {
  //   const nextIndex = displayedProducts.length + productsPerPage;
  //   const nextProducts = searchData.slice(0, nextIndex);
  //   setDisplayedProducts(nextProducts);
  // };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target)
      ) {
        closeSearch();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    console.log(filteredProducts); // Add this line to check if filteredProducts are correct

    setSearchData(filteredProducts);
    setSearchOpen(true);
  };

  const navigate = useNavigate();

  const handleMobileHeaderClose = () => {
    open(false);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  // const handleLinkClick = () => {
  //   window.location.reload(); // This will trigger a full page reload
  // };
  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <div className="">
                <img
                  src="https://res.cloudinary.com/dejass0mo/image/upload/v1698416216/WhatsApp_Image_2023-10-27_at_18.56.09_f57182b7_ieq1d9.jpg"
                  alt=""
                  className="w-40 h-20 scale-150 scale-y-110 rounded-lg scale-x-350"
                />
              </div>
            </Link>
          </div>
          {/* search box */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className={`h-[40px] w-full px-2 border-[#000000] border-[2px]  rounded-3xl ${
                searchOpen ? "" : "disabled"
              }`}
              ref={searchInputRef}
            />

            {searchTerm && searchOpen && (
              <button
                className="absolute right-2 top-1.5 cursor-pointer"
                onClick={() => {
                  setSearchTerm(""); // Clear the search term
                  setSearchOpen(false); // Close the search bar
                }}
              >
                <RxCross1 size={24} />
              </button>
            )}
            {searchData && searchOpen && searchData.length !== 0 ? (
              <div className="absolute min-h-[22vh] max-h-[200px] bg-slate-50 shadow-sm-2 z-[9] p-4">
                <div style={{ maxHeight: "120px", overflowY: "auto" }}>
                  {searchData.map((i, index) => (
                    <Link
                      to={`/product/${i._id}`}
                      key={i._id}
                      onClick={() => navigate(`/product/${i._id}`)}
                    >
                      <div className="flex items-start w-full py-3">
                        <img
                          src={`${i.images[0]?.url}`}
                          alt=""
                          className="w-[40px] h-[40px] mr-[10px]"
                        />
                        <h1>{i.name}</h1>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className={`${styles.button}`}>
            <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
              <h1 className="text-[#fff] flex items-center">
                {isSeller ? "Go Dashboard" : "Become Seller"}{" "}
                <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#504f4f] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute cursor-pointer right-2 top-4"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* navitems */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[19px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={36} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#fafafa]  w-4 h-4 top right p-0 m-0 text-[#000]  font-extrabold text-[14px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[19px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={36}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#fcfffd]  w-4 h-4 top right p-0 m-0 text-[#000]  font-extrabold text-[14px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${user?.avatar?.url}`}
                      className="w-[35px] h-[35px] rounded-full"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )}
              </div>
            </div>

            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
        </div>
      </div>

      {/* mobile header */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        }
      w-full h-[80px] bg-[#ffffff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="flex items-center justify-between w-full">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
              style={{ zIndex: 2 }}
            />
          </div>
          <div>
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dejass0mo/image/upload/v1698416216/WhatsApp_Image_2023-10-27_at_18.56.09_f57182b7_ieq1d9.jpg"
                alt=""
                className="h-20 mb-2 cursor-pointer w-80"
              />
            </Link>
          </div>
          <div>
            <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
              style={{ zIndex: 2 }}
            >
              <AiOutlineShoppingCart size={30} />
              <span class="absolute right-0 top-0 rounded-full bg-[#898f8c]  w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                {cart && cart.length}
              </span>
            </div>
          </div>
          {/* cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* wishlist popup */}
          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
        </div>

        {/* header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="flex justify-between w-full pr-3">
                <div>
                  <div
                    className="relative mr-[15px]"
                    onClick={() => setOpenWishlist(true) || setOpen(false)}
                  >
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span class="absolute right-0 top-0 rounded-full bg-[#898f8c] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                      {wishlist && wishlist.length}
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="mt-5 ml-4"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px relative]">
                <input
                  type="search"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2 border-[#000000] border-[2px] rounded-md"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />

                {searchData && searchOpen && searchData.length !== 0 ? (
                  <div className="absolute min-h-[10vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                    <button
                      className="absolute cursor-pointer top-2 right-2"
                      onClick={() => {
                        setSearchTerm(""); // Clear the search term
                        setSearchOpen(false); // Close the search bar
                      }}
                    >
                      <RxCross1 size={24} />
                    </button>
                    <div style={{ maxHeight: "120px", overflowY: "auto" }}>
                      {searchData.map((i, index) => (
                        <Link to={`/product/${i._id}`} key={i._id}>
                          <div className="flex items-start w-full py-3">
                            <img
                              src={`${i.images[0]?.url}`}
                              alt=""
                              className="w-[40px] h-[40px] mr-[10px]"
                            />
                            <h1>{i.name}</h1>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <Navbar active={activeHeading} />
              <div className={`${styles.button} ml-4 !rounded-[4px]`}>
                <Link to="/shop-create">
                  <h1 className="text-[#fff] flex items-center">
                    Become Seller <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
              <br />
              <br />
              <br />

              <div className="flex justify-center w-full">
                {isAuthenticated ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={`${user.avatar?.url}`}
                        alt=""
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] text-[#000000b7]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
