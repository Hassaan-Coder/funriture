import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import { server } from "../../server";
import styles from "../../styles/styles";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlist";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "./Ratings";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbPlus, TbMinus } from "react-icons/tb";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const ProductDetails = ({ data }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    dispatch(getAllProductsShop(data && data?.shop._id));
    if (wishlist && wishlist.find((i) => i._id === data?._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [data, wishlist]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

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

    // Set the autoClose option to 1500 (1.5 seconds) to make the toast disappear after 1.5 seconds.
    toast.success("Item added to wishlist successfully!", {
      autoClose: 1500,
    });
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.success("Item already in cart ", {
        autoClose: 1500,
      });
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!", {
          autoClose: 1500,
        });
      }
    }
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings =
    products &&
    products.reduce(
      (acc, product) =>
        acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const avg = totalRatings / totalReviewsLength || 0;

  const paginationStyles = {
    color: "black",
  };
  const averageRating = avg.toFixed(2);

  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <Swiper
                  pagination={{
                    clickable: true,
                    // style: paginationStyles, // Apply paginationStyles to change pagination color
                  }}
                  navigation={{}}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  onSwiper={(swiper) => {
                    // Access Swiper instance and use it if needed
                  }}
                  onSlideChange={(swiper) => {
                    // Keep track of the selected image index
                    setSelectedImage(swiper.activeIndex);
                  }}
                >
                  {data.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img src={image.url} alt="" className="w-[100%]" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p className="ml-10 font-Poppins ">{data.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice} ml-10`}>
                    {data.discountPrice} RS
                  </h4>
                  <h3 className={`${styles.price} `}>
                    {data.originalPrice ? data.originalPrice + " RS" : null}
                  </h3>
                </div>

                <div className="flex items-center justify-between pr-3 mt-12">
                  <div>
                    <button
                      className="px-4 py-2 ml-10 font-bold text-white transition duration-300 shadow-lg rounded-3xl bg-gradient-to-r from-slate-500 to-slate-600 hover:opacity-75 ease-in-ou"
                      onClick={decrementCount}
                    >
                      <TbMinus />
                    </button>
                    <span className="px-4   font-[20px] !mt-10 font-extrabold text-gray-800 ">
                      {count}
                    </span>
                    <button
                      className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out shadow-lg rounded-3xl bg-gradient-to-r from-slate-500 to-slate-600 hover:opacity-75 "
                      onClick={incrementCount}
                    >
                      <TbPlus />
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => removeFromWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => addToWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} !mt-6 !rounded !h-11 flex items-center ml-10`}
                  onClick={() => addToCartHandler(data._id)}
                >
                  <span className="flex items-center text-white">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <ProductDetailsInfo data={data} products={products} />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
};

const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
      <div className="flex justify-between w-full pt-10 pb-2 border-b">
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-Poppins  cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5  font-Poppins cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] font-Poppins  leading-8 pb-10 whitespace-pre-line">
            {data.description}
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <div className="w-full min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll">
          {data &&
            data.reviews.map((item, index) => (
              <div className="flex w-full my-2">
                <img
                  src={`${item.user.avatar?.url}`}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="pl-2 ">
                  <div className="flex items-center w-full">
                    <h1 className="font-[500] mr-3">{item.user.name}</h1>
                    <Ratings rating={data?.ratings} />
                  </div>
                  <p>{item.comment}</p>
                </div>
              </div>
            ))}

          <div className="flex justify-center w-full">
            {data && data.reviews.length === 0 && (
              <h5>No Reviews have for this product!</h5>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
