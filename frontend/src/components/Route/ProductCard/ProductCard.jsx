import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import { addTocart } from "../../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "../../Products/Ratings";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
SwiperCore.use([Navigation, Pagination, Autoplay]);
const ProductCard = ({ data, isEvent }) => {
  const storeImage =
    "https://res.cloudinary.com/dejass0mo/image/upload/v1697877601/store_nnsnlc.webp";
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const productId = data._id;

  const handleNavigateToProductPage = () => {
    navigate(`/product/${productId}`);

    // Reload the window after 2 seconds
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
    toast.error("Item remove from wishlist successfully!", {
      autoClose: 1500,
    });
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
    toast.success("Item added to wishlist successfully!", {
      autoClose: 1500,
    });
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart !", {
        autoClose: 1500,
      });
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!", {
          autoClose: 1500,
        });
      }
    }
  };
  const swiperRef = useRef(null);
  useEffect(() => {
    swiperRef.current.swiper.autoplay.stop();
  }, [swiperRef]);

  return (
    <>
      <div
        className={`w-full h-[460px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer product-card  border  border-gray-500`}
        onMouseEnter={() => {
          swiperRef.current.swiper.autoplay.start();
        }}
        onMouseLeave={() => {
          swiperRef.current.swiper.autoplay.stop();
          swiperRef.current.swiper.slideTo(0);
        }}
      >
        <Swiper
          ref={swiperRef}
          centeredSlides={true}
          autoplay={{ delay: 500, stopOnLastSlide: false }}
          speed={500}
          className="w-[full] h-[210px] object-contain !rounded-lg"
        >
          {data.images.map((image, index) => (
            <SwiperSlide key={index}>
              <Link
                to={`/product/${data._id}`}
                onClick={handleNavigateToProductPage}
              >
                {" "}
                {/* Add Link to the product page */}
                <img
                  src={image.url}
                  alt=""
                  className="w-[100%] h-[100%] object-contain  rounded-lg "
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <Link
          to={
            isEvent === true
              ? `/product/${data._id}?isEvent=true`
              : `/product/${data._id}`
          }
        >
          <h4 className="pb-3 mt-5  font-extrabold  text-[#333]">
            {data.name.length > 40 ? data.name.slice(0, 40) + ".." : data.name}
          </h4>

          <div className="flex">
            <Ratings rating={5} />
          </div>

          <div className="flex items-center justify-between py-2 font-bold">
            <div className="flex">
              <h5 className={`${styles.productDiscountPrice}`}>
                {data.originalPrice === 0
                  ? data.originalPrice
                  : data.discountPrice}{" "}
                RS
              </h5>
              <h4 className={`${styles.price}`}>
                {data.originalPrice ? data.originalPrice + " RS " : null}
              </h4>
            </div>
            <span className="font-[400] text-[17px] text-[#68d284]">
              {data?.sold_out} sold
            </span>
          </div>
        </Link>

        {/* Bottom icons */}
        <div className="flex items-center justify-center pt-3 bottom-10 right-3 space-x-14">
          {click ? (
            <AiFillHeart
              size={28}
              onClick={() => removeFromWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
              className=""
            />
          ) : (
            <AiOutlineHeart
              size={28}
              onClick={() => addToWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}

          <AiOutlineEye
            size={28}
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick view"
          />
          <AiOutlineShoppingCart
            size={28}
            onClick={() => addToCartHandler(data._id)}
            color="#444"
            title="Add to cart"
          />
        </div>

        {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
      </div>
    </>
  );
};

export default ProductCard;
