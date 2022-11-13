import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import actionTypes from "../redux/actions/actionTypes";
import Error from "./Error";
const ProductDetails = () => {
  const { productId } = useParams();
  const {products}=useSelector(state=>state.allProducts)  
  // console.log(products[productId]);
  const [product, setProduct]=useState('')
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        // setSelectProduct(res.data)
          console.log(res.data);
          setProduct(res.data)
      })
      .catch((err) => console.log(err));
  }, []);

  return <div className="ui grid container">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={product.image} />
              </div>
              <div className="column rp">
                <div  className="d-flex justify-content-end">
                  <Link to="/" className="btn btn-danger ">Home Page</Link>
                </div>
                <h1>{product.title}</h1>
                <h2>
                  <a className="ui teal tag label">${product.price}</a>
                </h2>
                <h3 className="ui brown block header">{product.category}</h3>
                <p>{product.description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
  </div>;
};

export default ProductDetails;
