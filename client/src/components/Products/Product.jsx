import React, { useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import Skeleton from "react-loading-skeleton";
import "../Products/product.css";
// import { Provider, LikeButton } from "@lyket/react";
import { FaShoppingCart, FaHeart,FaChevronRight } from "react-icons/fa";
// import Men from "../../asset/images/male.jpg";
import { useState, useReducer } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
const firstState = {
  likes: 100,
  dislikes: 5,
};
const appReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_LIKE":
      return {
        ...state,
        likes: state.likes + action.payload,
      };
    case "HANDLE_DISLIKE":
      return {
        ...state,
        dislikes: state.dislikes - action.payload,
      };
    default:
      return state;
  }
};
const Product = () => {
  const [state, dispatch] = useReducer(appReducer, firstState);
  const { likes, dislikes } = state;
  const [status, setStatus] = useState(null);

  const handleClickLike = () => {
    if (status === "like") {
      setStatus(null);
      dispatch({
        type: "HANDLE_LIKE",
        payload: -1,
      });
    } else {
      setStatus("like");
      if (status === "dislike") {
        dispatch({
          type: "HANDLE_DISLIKE",
          payload: -1,
        });
      }
      dispatch({
        type: "HANDLE_LIKE",
        payload: 1,
      });
    }
  };
  const handleClickDislike = () => {
    if (status === "dislike") {
      setStatus(null);
      dispatch({
        type: "HANDLE_DISLIKE",
        payload: -1,
      });
    } else {
      setStatus("dislike");
      if (status === "like") {
        dispatch({
          type: "HANDLE_LIKE",
          payload: -1,
        });
      }
      dispatch({
        type: "HANDLE_DISLIKE",
        payload: 1,
      });
    }
  };
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispat=useDispatch();
   const addProduct=(product)=>{
    dispat(addCart(product))
   }

  const getPorduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setLoading(false);
        setProduct(json);
      });
  };
  useEffect(() => {
    getPorduct();
  }, []);

  const Loading = () => {
    return (
      <>
        Loading ....
        {/* <div className="md:col-span-6" style={{lineHeight:2}}>
          <Skeleton height={50} width={300}/>
          <Skeleton height={75} width={400} />
          <Skeleton height={25}  width={150}/>
          <Skeleton height={50} />
          <Skeleton height={150} width={100} />
          <Skeleton height={50} width={100} style={{marginLeft:6}}/>
        </div> */}
      </>
    );
  };

  const norefresh=(e)=>{
    e.preventDefault();
  }
  const ShowProducts = () => {
    return (
      <>
          <div className="relative mx-auto max-w-screen-xl px-4 py-8">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
              <div className="grid  gap-4 md:grid-cols-1 ">
                <img
                  alt={product.title}
                  src={product.image}
                  className="aspect-square w-full rounded-xl object-cover w-[90%] "
                />
  
                <div className="flex gap-4 lg:mt-4 h-[50%]">
                  <img
                    alt={product.title}
                    src={product.image}
                    className="aspect-square  w-[25%] h-full rounded-xl object-cover"
                  />
                  <img
                    alt={product.title}
                    src={product.image}
                    className="aspect-square ml-[8%] w-[25%] h-full rounded-xl object-cover"
                  />
  
                  <img
                    alt={product.title}
                    src={product.image}
                    className="aspect-square ml-[8%] w-[25%] h-full rounded-xl object-cover"
                  />
                </div>
              </div>
  
              <div className="sticky top-0">
                  <Link to="/category" className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">{product.category}</Link>
  
                <div className="mt-8 flex justify-between">
                  <div className="max-w-[35ch]">
                    <h1 className="text-2xl font-bold">
                      {product.title}
                    </h1>
  
                    <p className="mt-0.5 text-sm">Highest Rated Product</p>
  
                    <div className="mt-2 -ml-0.5 flex flex-row">
                      <svg
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
  
                      <svg
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
  
                      <svg
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
  
                      <svg
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
  
                      <svg
                        className="h-5 w-5 text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
  
                  <p className="text-lg font-bold">{product.price} $</p>
                </div>
  
                <details className="group relative mt-4">
                  <summary className="block">
                    <div>
                      <div className="prose max-w-none group-open:hidden">
                        <p>
                          {product.description}
                        </p>
                      </div>
  
                      <span className="mt-4 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                        Read More
                      </span>
                    </div>
                  </summary>
  
                  <div className="prose max-w-none pb-6">
                    <p>
                     {product.description}
                    </p>
                  </div>
                </details>
  
                <form className="mt-8">
                  <fieldset>
                    <legend className="mb-1 text-sm font-medium">Color</legend>
  
                    <div className="flow-root">
                      <div className="-m-0.5 flex flex-wrap">
                        <label
                          htmlFor="color_tt"
                          className="cursor-pointer p-0.5"
                        >
                          <input
                            type="checkbox"
                            name="color"
                            id="color_tt"
                            className="peer sr-only"
                          />
  
                          <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                            Black
                          </span>
                        </label>
  
                        <label
                          htmlFor="color_fr"
                          className="cursor-pointer p-0.5"
                        >
                          <input
                            type="checkbox"
                            name="color"
                            id="color_fr"
                            className="peer sr-only"
                          />
  
                          <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-red-500 peer-checked:text-white  ">
                            Red
                          </span>
                        </label>
  
                        <label
                          htmlFor="color_cb"
                          className="cursor-pointer p-0.5"
                        >
                          <input
                            type="checkbox"
                            name="color"
                            id="color_cb"
                            className="peer sr-only"
                          />
  
                          <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-blue-500 peer-checked:text-white">
                            Blue
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
  
                  <fieldset className="mt-4">
                    <legend className="mb-1 text-sm font-medium">Size</legend>
  
                    <div className="flow-root">
                      <div className="-m-0.5 flex flex-wrap">
                        <label htmlFor="size_xs" className="cursor-pointer p-0.5">
                          <input
                            type="checkbox"
                            name="size"
                            id="size_xs"
                            className="peer sr-only"
                          />
  
                          <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                            XS
                          </span>
                        </label>
  
                        <label htmlFor="size_s" className="cursor-pointer p-0.5">
                          <input
                            type="checkbox"
                            name="size"
                            id="size_s"
                            className="peer sr-only"
                          />
  
                          <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                            S
                          </span>
                        </label>
  
                        <label htmlFor="size_m" className="cursor-pointer p-0.5">
                          <input
                            type="checkbox"
                            name="size"
                            id="size_m"
                            className="peer sr-only"
                          />
  
                          <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                            M
                          </span>
                        </label>
  
                        <label htmlFor="size_l" className="cursor-pointer p-0.5">
                          <input
                            type="checkbox"
                            name="size"
                            id="size_l"
                            className="peer sr-only"
                          />
  
                          <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                            L
                          </span>
                        </label>
  
                        <label htmlFor="size_xl" className="cursor-pointer p-0.5">
                          <input
                            type="checkbox"
                            name="size"
                            id="size_xl"
                            className="peer sr-only"
                          />
  
                          <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                            XL
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
  
                  <div className="mt-8 flex max-w-md gap-3">
                    <div className="w-[20%]">
                      <select className=" w-[100%] h-12 border text-center">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="1">5</option>
                        <option value="1">6</option>
                      </select>
                    </div>
                 <form onSubmit={norefresh} className="flex gap-4">
                    <p
                      type="submit"
                      className="rounded bg-black px-5 py-3 text-xs font-medium text-white flex gap-3 cursor-pointer"
                    onClick={()=>(
                      addProduct(product)
                     )}>
                      Add to Cart <FaShoppingCart />
                    </p>
                    <p type="submit" className="text-black py-3 font-normal text-xs border px-4 flex gap-3 cursor-pointer">
                      Wishlist <FaHeart className="text-slate-400 " />
                    </p>
                    </form>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="nav nav-tabs nav-overflow justify-content-start justify-content-md-center border-bottom">
            <Link
              className="nav-link"
              data-bs-toggle="tab"
              to="#descriptionTab"
              active
            >
              Description
            </Link>
            <Link className="nav-link" data-bs-toggle="tab" to="#sizeTab">
              Size & Fit
            </Link>
            <Link className="nav-link" data-bs-toggle="tab" to="#shippingTab">
              Shipping & Return
            </Link>
          </div>
          <div className="tab-content max-w-6xl mx-auto px-[13%]">
            <div className="tab-pane fade show active" id="descriptionTab">
              <div className="row justify-content-center py-9">
                <div className="col-12 col-lg-10 col-xl-8">
                  <div className="row">
                    <div className="col-12">
                      {/* <!-- Text --> */}
                      <p className="text-gray-500">
                        Won't herb first male seas, beast. Let upon, female upon
                        third fifth every. Man subdue rule after years herb after
                        form. And image may, morning. Behold in tree day sea that
                        together cattle whose. Fifth gathering brought bearing.
                        Abundantly creeping whose. Beginning form have void two. A
                        whose.
                      </p>
                    </div>
                    <div className="flex">
                      <div className="col-6 col-md-6">
                        {/* <!-- List --> */}
                        <ul className="list list-unstyled mb-md-0 text-gray-500">
                          <li>
                            <strong className="text-body">SKU</strong>: #61590437
                          </li>
                          <li>
                            <strong className="text-body">Occasion</strong>:
                            Lifestyle, Sport
                          </li>
                          <li>
                            <strong className="text-body">Country</strong>: Italy
                          </li>
                        </ul>
                      </div>
                      <div className="col-6 col-md-6">
                        {/* <!-- List --> */}
                        <ul className="list list-unstyled mb-0">
                          <li>
                            <strong>Outer</strong>: Leather 100%, Polyamide 100%
                          </li>
                          <li>
                            <strong>Lining</strong>: Polyester 100%
                          </li>
                          <li>
                            <strong>CounSoletry</strong>: Rubber 100%
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade flex" id="sizeTab">
              <div className="row justify-content-center py-9">
                <div className="col-12 col-lg-10 col-xl-8">
                  <div className=" flex gap-x-16">
                    <div className=" col-md-6">
                      {/* <!-- Text --> */}
                      <p className="mb-4">
                        <strong>Fitting information:</strong>
                      </p>
  
                      {/* List --> */}
                      <ul className="mb-md-0 text-gray-500">
                        <li className="list-disc">
                          Upon seas hath every years have whose subdue creeping
                          they're it were.
                        </li>
                        <li className="list-disc">Make great day bearing.</li>
                        <li className="list-disc">
                          For the moveth is days don't said days.
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-6">
                      {/* Text */}
                      <p className="mb-4">
                        <strong>Model measurements:</strong>
                      </p>
  
                      {/* List  */}
                      <ul className="list-unstyled text-gray-500">
                        <li>Height: 1.80 m</li>
                        <li>Bust/Chest: 89 cm</li>
                        <li>Hips: 91 cm</li>
                        <li>Waist: 65 cm</li>
                        <li>Model size: M</li>
                      </ul>
  
                      {/* Size */}
                      <p className="mb-0 flex">
                        <img
                          src="https://yevgenysim-turkey.github.io/shopper/assets/img/icons/icon-ruler.svg"
                          alt="..."
                          className="img-fluid object-contain"
                        />
                        <Link
                          className="text-reset text-decoration-underline ms-3"
                          data-bs-toggle="modal"
                          to="#modalSizeChart"
                        >
                          Size chart
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="shippingTab">
              <div className="row justify-content-center py-9">
                <div className="col-12 col-lg-10 col-xl-8">
                  {/* Table  */}
                  <div className="table-responsive">
                    <table className="table table-bordered table-sm table-hover">
                      <thead>
                        <tr>
                          <th>Shipping Options</th>
                          <th>Delivery Time</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Standard Shipping</td>
                          <td>Delivery in 5 - 7 working days</td>
                          <td>$8.00</td>
                        </tr>
                        <tr>
                          <td>Express Shipping</td>
                          <td>Delivery in 3 - 5 working days</td>
                          <td>$12.00</td>
                        </tr>
                        <tr>
                          <td>1 - 2 day Shipping</td>
                          <td>Delivery in 1 - 2 working days</td>
                          <td>$12.00</td>
                        </tr>
                        <tr>
                          <td>Free Shipping</td>
                          <td>
                            Living won't the He one every subdue meat replenish
                            face was you morning firmament darkness.
                          </td>
                          <td>$0.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
  
                  {/* Caption --> */}
                  <p className="mb-0 text-gray-500">
                    May, life blessed night so creature likeness their, for.{" "}
                    <Link className="text-body text-decoration-underline" to="#!">
                      Find out more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h4 className="mb-10 mt-28 text-center font-medium text-3xl">
            You might also like
          </h4>
          <div className="items">
            <div className="item item-1">
              <img
                src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-7.jpg"
                alt=""
              />
              <span className="badge">New</span>
              <div className="item-info">
                <Link to="#shoes"> Shoes</Link>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">{product.price}</span>
              </div>
            </div>
            <div className="item item-1">
              <img
                src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-4.jpg"
                alt=""
              />
              <span className="badge">New</span>
              <div className="item-info">
                <Link to="#shoes"> Shoes</Link>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">{product.price} $</span>
              </div>
            </div>
            <div className="item item-1">
              <img
                src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-11.jpg"
                alt=""
              />
              <span className="badge">New</span>
              <div className="item-info">
                <Link to="#shoes"> Shoes</Link>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">{product.price} $</span>
              </div>
            </div>
            <div className="item item-1">
              <img
                src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-12.jpg"
                alt=""
              />
              <span className="badge">New</span>
              <div className="item-info">
                <Link to="#shoes"> Shoes</Link>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">{product.price} $</span>
              </div>
            </div>
          </div>
          <div className="serhler mr-[13%] ml-[13%]">
            <h1 className="text-center mb-16">Customer Reviews</h1>
            <div className="section-1 flex justify-between mb-10">
              <div className="section-1-1 flex gap-1">
                <p className="my-auto">Sort by:</p>
                <select name="" id="">
                  <option value="" className="w-16  text-black -ml-40px">
                    Newest
                  </option>
                  <option value="" className="w-16 text-black">
                    Oldest
                  </option>
                </select>
              </div>
              <div className="section-1-2 flex justify-between">
                <div className="stars flex justify-center items-center">
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg
                    className="h-5 w-5 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <p className="ml-2 my-auto">Reviews (2)</p>
                </div>
              </div>
              <div className="section-1-3">
                <button className="px-6 py-3 bg-black text-white font-medium text-base">
                  Write Review
                </button>
              </div>
            </div>
            <div className="section-2 flex p-10 border mb-5">
              <div className="col-12 col-md-auto mr-4">
                {/* <!-- Avatar --> */}
                <div className="avatar avatar-xxl mb-6 mb-md-0">
                  <span className="avatar-title mx-4">
                    <img
                      src="https://images.pexels.com/photos/220456/pexels-photo-220456.jpeg?auto=compress&cs="
                      className="w-24 h-24 rounded-full object-cover "
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="col-12 col-md">
                {/* <!-- Header --> */}
                <div className="row mb-6">
                  <div className="col-12">
                    {/* <!-- Rating --> */}
                    <div className="rating fs-sm text-dark flex" data-value="5">
                      <div className="rating-item">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
                          ></path>
                        </svg>
                        {/* <!-- <i className="fas fa-star"></i> Font Awesome fontawesome.com --> */}
                      </div>
                      <div className="rating-item">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
                          ></path>
                        </svg>
                        {/* <!-- <i className="fas fa-star"></i> Font Awesome fontawesome.com --> */}
                      </div>
                      <div className="rating-item">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
                          ></path>
                        </svg>
                        {/* <!-- <i className="fas fa-star"></i> Font Awesome fontawesome.com --> */}
                      </div>
                      <div className="rating-item">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
                          ></path>
                        </svg>
                        {/* <!-- <i className="fas fa-star"></i> Font Awesome fontawesome.com --> */}
                      </div>
                      <div className="rating-item">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
                          ></path>
                        </svg>
                        {/* <!-- <i className="fas fa-star"></i> Font Awesome fontawesome.com --> */}
                      </div>
                      <p>Rating {product.rating && product.rating.rate}</p>
                    </div>
                  </div>
                  <div className="col-12">
                    {/* <!-- Time --> */}
                    <span className="fs-xs text-muted">
                      Logan Edwards,{" "}
                      <time dateTime="2019-07-25">25 Jul 2019</time>
                    </span>
                  </div>
                </div>
  
                {/* <!-- Title --> */}
                <p className="mb-2 fs-lg fw-bold">So cute!</p>
  
                {/* <!-- Text --> */}
                <p className="text-gray-500">
                  Justo ut diam erat hendrerit. Morbi porttitor, per eu. Sodales
                  curabitur diam sociis. Taciti lobortis nascetur. Ante laoreet
                  odio hendrerit. Dictumst curabitur nascetur lectus potenti dis
                  sollicitudin habitant quis vestibulum.
                </p>
  
                {/* <!-- Footer --> */}
                <div className="row align-items-center">
                  <div className="col-auto d-none d-lg-block">
                    {/* <!-- Text --> */}
                    <p className="mb-0 fs-sm">Was this review helpful?</p>
                  </div>
                  <div className="col-auto me-auto">
                    {/* <!-- Rate --> */}
                    <div className="like-btn flex gap-4 justify-center items-center">
                      <button
                        className={`${
                          status === "like" ? "btn active" : "btn"
                        } flex`}
                        onClick={handleClickLike}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <aiOutlineLike />
                        <span>{likes}</span>
                      </button>
                      <button
                        className={`status === "dislike" ? "btn active" : "btn"}
                         flex gap-2 `}
                        onClick={handleClickDislike}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <aiOutlineDislike />
                        <span>{dislikes}</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    {/* <!-- Text --> */}
                    <p className="mb-0 fs-sm">Comments (0)</p>
                  </div>
                  <div className="col-auto">
                    {/* <!-- Button --> */}
                    <Link className="btn btn-xs btn-outline-border border" to="#!">
                      Comment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-2 flex p-10 border mb-20">
              <div className="col-12 col-md-auto mr-4">
                {/* <!-- Avatar --> */}
                <div className="avatar avatar-xxl mb-6 mb-md-0">
                  <span className="avatar-title mx-4">
                    <img
                      src="https://images.pexels.com/photos/220454/pexels-photo-220454.jpeg?auto=compress&cs="
                      className="w-24 h-24 rounded-full object-cover "
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div className="col-12 col-md">
                {/* <!-- Header --> */}
                <div className="row mb-6">
                  <div className="col-12">
                    {/* <!-- Rating --> */}
                    <div className="rating fs-sm text-dark flex" data-value="5">
                      <div className="rating-item">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
                          ></path>
                        </svg>
                        {/* <!-- <i className="fas fa-star"></i> Font Awesome fontawesome.com --> */}
                      </div>
                      <div className="rating-item">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
                          ></path>
                        </svg>
                        {/* <!-- <i className="fas fa-star"></i> Font Awesome fontawesome.com --> */}
                      </div>
                      <div className="rating-item">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
                          ></path>
                        </svg>
                        {/* <!-- <i className="fas fa-star"></i> Font Awesome fontawesome.com --> */}
                      </div>
                      <div className="rating-item">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
                          ></path>
                        </svg>
                        {/* <!-- <i className="fas fa-star"></i> Font Awesome fontawesome.com --> */}
                      </div>
                      <div className="rating-item">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
                          ></path>
                        </svg>
                        {/* <!-- <i className="fas fa-star"></i> Font Awesome fontawesome.com --> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    {/* <!-- Time --> */}
                    <span className="fs-xs text-muted">
                      Logan Edwards,{" "}
                      <time dateTime="2019-07-25">25 Jul 2019</time>
                    </span>
                  </div>
                </div>
  
                {/* <!-- Title --> */}
                <p className="mb-2 fs-lg fw-bold">So cute!</p>
  
                {/* <!-- Text --> */}
                <p className="text-gray-500">
                  Justo ut diam erat hendrerit. Morbi porttitor, per eu. Sodales
                  curabitur diam sociis. Taciti lobortis nascetur. Ante laoreet
                  odio hendrerit. Dictumst curabitur nascetur lectus potenti dis
                  sollicitudin habitant quis vestibulum.
                </p>
  
                {/* <!-- Footer --> */}
                <div className="row align-items-center">
                  <div className="col-auto d-none d-lg-block">
                    {/* <!-- Text --> */}
                    <p className="mb-0 fs-sm">Was this review helpful?</p>
                  </div>
                  <div className="col-auto me-auto">
                    {/* <!-- Rate --> */}
                    <div className="rate flex gap-3 justify-center items-center">
                      <div className="like-btn flex gap-4 justify-center items-center">
                        <button
                          className={`${
                            status === "like" ? "btn active" : "btn"
                          } flex`}
                          onClick={handleClickLike}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <aiOutlineLike />
                          <span>{likes}</span>
                        </button>
                        <button
                          className={`status === "dislike" ? "btn active" : "btn"}
                         flex gap-2 `}
                          onClick={handleClickDislike}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <aiOutlineDislike />
                          <span>{dislikes}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    {/* <!-- Text --> */}
                    <p className="mb-0 fs-sm">Comments (0)</p>
                  </div>
                  <div className="col-auto">
                    {/* <!-- Button --> */}
                    <Link className="btn btn-xs btn-outline-border border" to="#!">
                      Comment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="d-flex justify-content-center mt-9 mb-14">
            <ul className="pagination pagination-sm text-gray-400">
              <li className="page-item">
                <Link className="page-link page-link-arrow" to="#">
                  <svg
                    className="svg-inline--fa fa-caret-left"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link hover:text-orange-500" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link hover:text-orange-500" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link page-link-arrow" to="#">
                  <svg
                    className="svg-inline--fa fa-caret-right"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
                    ></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
      </>
    );
}
  return (
    <>
      <section>
        <hr />
        <div className="flex ml-[13%] items-center text-center gap-2">
        <Link to="/home">Home</Link>
        <FaChevronRight className="" style={{color:'#bababa'}}/>
        <Link to="/category">{product.category}</Link>
        </div>
        {loading ? <Loading /> : <ShowProducts />}
      </section>
    </>
  );
};

export default Product;
