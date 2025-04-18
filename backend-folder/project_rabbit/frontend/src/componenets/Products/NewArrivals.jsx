import React, { useEffect, useState, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {

    // using useState hook and useRef hook
    const scrollRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight,setCanScrollRight] = useState(true);

    const [scrollLeft, setScrollLeft] = useState(false);

  //creating array
  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Stylish Jacket",
        },
      ],
    },

    {
      _id: "7",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Stylish Jacket",
        },
      ],
    },
    
  ];

  //mouse function
  const handleMouseDown = (e) =>{
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }

  const handleMouseMove = () =>{
    if(!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrolLeft = scrollLeft-walk;
  }

  const handleMouseUpOrLeave = () =>{
    setIsDragging(false);

  }

  const scroll = (direction) =>{
    const scrollAmount = direction === "left"? -300 : 300;
    scrollRef.current.scrollBy({left:scrollAmount, behaviour:"smooth"});
  };

  //update scroll button function
  const updateScrollButtons = () =>{
    const container = scrollRef.current;

    if(container){
      const leftScroll = container.scrollLeft;
      const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;
      
      //condition applying that, user can scroll left or not
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }

    console.log({
      scrollLeft:container.scrollLeft,
      clientWidth: container.clientWidth,
      containerScrollWidth: container.scrollWidth,
      offsetLeft: scrollRef.current.offsetLeft,
    })
  }

  //using useEffect hook
  useEffect(()=>{
    const container = scrollRef.current;
    if(container){
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll",updateScrollButtons);
    }
  },[]);


  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        {/* Scroll Button */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2 ">
          {/* left side button - < */}
          <button onClick={()=>scroll("left")} 
          disabled={!canScrollLeft}
           className={`p-2 rounded border ${canScrollLeft ? "bg-white text-black":"bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
            <FiChevronLeft />
          </button>

          {/* right side button - > */}
          <button onClick={()=>scroll("right")}
           className={`p-2 rounded border ${canScrollRight ? "bg-white text-black":"bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div 
      ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging?"cursor-grabbing":"cursor-grab"}`}
       onMouseDown={handleMouseDown}
       onMouseMove={handleMouseMove}
       onMouseUp={handleMouseUpOrLeave}
       onMouseLeave={handleMouseUpOrLeave}
       >
        {newArrivals.map((product) => (
          <div key={product._id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
            <img className="w-full h-[500px] object-cover rounded-lg" draggable="false"
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
            />

            <div className="absolute bottom-0 left-0 right-0 opacity-50 backdrop:blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>

                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
