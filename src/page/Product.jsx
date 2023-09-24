import { useEffect, useState } from "react";
import { HiEye,HiHeart } from "react-icons/hi2";

const Product = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("db.json")
      .then(res => res.json())
      .then(data => {
        setAllData(data);
      });
  }, []);
  return (

      <div className="grid lg:grid-cols-3 w-full lg:mx-5 mx-3  gap-5 my-5">
        {allData.map(({ id, title, image }) => (
        
            <div key={id} className="card w-96 h-full bg-base-100 shadow-xl">
              <div  className="card-body">
                <h2 className="card-title">{title}</h2>
              </div>
              <HiEye size={35} className=" bg-cyan-600 p-1 rounded-full text-white absolute ml-5 mt-[400px]"/>
              <figure>
              
                <img className="image-fluid h-96 w-full" src={image} alt="product" />
              </figure>
              <HiHeart size={35} className=" text-red-600 p-1 rounded-full  ml-[330px]  absolute   mt-[400px]"/>
            </div>
       
        ))}
      </div>
  
  );
};

export default Product;
