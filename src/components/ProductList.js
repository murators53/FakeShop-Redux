import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios'
import  actionTypes  from '../redux/actions/actionTypes';

const ProductList = () => {
    const products=useSelector((state)=>state)
    const dispatch=useDispatch()

    useEffect(()=>{
           
            axios.get('https://fakestoreapi.com/products')
            .then(res=>{
                    dispatch({type:actionTypes.SET_PRODUCTS,payload:res.data})
            })
            .catch(err=>console.log(err))
    },[])

    return(
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    )
}

export default ProductList