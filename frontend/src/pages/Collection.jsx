import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Title from '../componnets/Title'
import { ShopContext } from '../context/Shopcontext'
import { assets } from '../assets/assets'

const Collection = () => {
    const{products, search, showSearch} = usecontext(Shopcontext);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [showFilter, setShowFilter] = useStatec(false);
    const[sortType, setSortType] = useState('relevant')
    
  return (
    <div>
      
    </div>
  )
}

export default Collection
