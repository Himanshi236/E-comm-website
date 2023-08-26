import React, { useEffect, useState } from 'react'
import '../productPage/productPage.css'
import SingleProduct from '../singleProduct/SingleProduct';
import Loading from '../loading/Loading'
import Categories from '../categories/Categories';
import { Link} from "react-router-dom";



const ProductPage = () => {

    const url = "https://fakestoreapi.com/products";
    const [list,setList]=useState([]);
    const [loading,setLoading]=useState(true)
    const [categories, setCategories] = useState([]);
    const [masterList,setMasterList]=useState([]);
    // console.log(typeof list);
    

    const fetchProducts=async ()=>{
      setLoading(true);
        try{
            const data=await fetch(url);
            const res=await data.json();
            setLoading(false);
            setList(res);
            setMasterList(res);
            const allCategories = [
              "all",
              ...new Set(res.map((item) => item.category)),
            ];
            setCategories(allCategories)
            console.log(categories);
            
            

        }catch(err){
          setLoading(false);
            console.log('There is error')
            console.log(err);
        }

    }

    useEffect(()=>{
        fetchProducts();
        
    },[])
    

    
    

    

    if(loading){
      return (
        <Loading/>
      )
    }
    const filterItems = (category) => {
      if (category === "all") {
        setList(masterList);
        return;
      }
      const newItems = masterList.filter((item) => item.category === category);
      setList(newItems);
    };

    const handleFilter=(rating)=>{

      const newItems=list.filter((item)=>Math.ceil(item.rating.rate)===rating)
      setList(newItems);
      
      console.log('btn clicked')
      console.log(newItems)

    }

    if (list.length === 0) {
      return (
        <>
          <div className="noFoundContBig">
            <div className="noFoundCont">
              <h1>Oops! No item Found</h1>

             
                <button className="backHome">Go Back</button>
              
            </div>
          </div>
        </>
      );
    } 


  return (
    <div className="container">
      <div className="leftContainer">
        <p className="filterhead">Filter by rating</p>
        <button className="btnStar" onClick={() => handleFilter(5)}>
          5 ⭐
        </button>
        <button className="btnStar" onClick={() => handleFilter(4)}>
          4 ⭐
        </button>
        <button className="btnStar" onClick={() => handleFilter(3)}>
          3 ⭐
        </button>
        <button className="btnStar" onClick={() => handleFilter(2)}>
          2 ⭐
        </button>
        <button className="btnStar" onClick={() => handleFilter(1)}>
          1 ⭐
        </button>
        
      
      </div>

      <div className="rightContainer">
        <div className="heading">
          Explore our handpicked collection of exceptional products
        </div>

        <div className="buttonBar">
          <Categories filterItems={filterItems} categories={categories} />
        </div>

        <div className="productContainer">
          {list.map((item) => {
            return <SingleProduct key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductPage