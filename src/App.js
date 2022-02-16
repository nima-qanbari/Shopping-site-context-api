import React from 'react'
//react router
import {Routes, Route, Navigate} from "react-router-dom"

//context
import ProductContextProvider from './Context/ProductContextProvider'
import CartContextProvider from './Context/CartContextProvider'

//Store
import Store from './Store/Store'

//components
import ProductDetail from './components/ProductDetail/ProductDetail'
import NotFound from './components/NotFound/NotFound'

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/notfound" />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App