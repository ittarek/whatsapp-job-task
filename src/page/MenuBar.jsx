import { Button } from "antd";
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2";

const navItem = [
  "antd",
  "Allbum",
  "Praak",
  "Natok",
  "Security Hacker",
  "Film Creation",
  "Tamil Cinema",
  "Recently Uploaded",
  "Watched",
  "Film Creation",
  "Tamil Cinema",
  "Recently Uploaded",
  "Watched",
];

const MenuBar = () => {

//slide Function
const sliderLeft = ()=>{

   document.getElementById("slider").scrollLeft += 20;
}
const sliderRight = ()=>{
    document.getElementById("slider").scrollLeft -= 20;
}


  return (
    <div   className='bg-[#0F0F0F] flex items-center justify-center'>
    
    <HiArrowSmallLeft onClick={sliderLeft} size={30} className="text-white my-2 ms-2"/>
      <ul
        id="slider"
        className="w-full py-2 overflow-x-scroll scrollbar-hide my-3 mx-9 px-4 scroll whitespace-nowrap scroll-smooth"
      >
       
        {navItem.map((nav, index) => (
          <Button
            key={index}
            className="inline-block rounded-lg bg-[#20212D] text-white cursor-pointer px-2 mx-5 font-bold border-none"
          >
            {nav}
          </Button>
        ))}{" "}
 
      </ul> 
      <HiArrowSmallRight onClick={sliderRight} size={30} className=" mx-2 text-white my-2"/>
       
    </div>
  );
};

export default MenuBar;
