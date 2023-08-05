import React from 'react'
 import ProductDetailComponent from '../usercomponents/ProductDetailComponent'
import Header from '../usercomponents/Header'
import ProductDetails from '../usercomponents/ProductDetails'
import ProductImageComponent from '../usercomponents/ProductImageComponent'
import ProductNamePrice from '../usercomponents/ProductNamePrice'
import AboutProduct from '../usercomponents/AboutProduct'
import Quantity from '../usercomponents/Quantity'
import Footer from '../usercomponents/Footer'

const Home2 = () => {
  return (
    <div>

    <Header />
        
    
      <ProductDetailComponent />
      {/* <div style={{marginTop:20}}>
      <ProductNamePrice />
      </div>

      <div style={{width:'100%',height:'50%'}}>
      <ProductImageComponent  />
      </div>
   

      
  <div >
  <Quantity />
  </div>
  

  
  
  <AboutProduct /> */}

  <div style={{width:'100%'}}>
        <Footer />
      </div> 



  
       {/* <ProductDetails /> */}
    

   



    </div>
  )
}

export default Home2
