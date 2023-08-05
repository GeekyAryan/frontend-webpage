import React, { useState } from 'react';
import { Grid, Container, Button, IconButton, Typography } from '@mui/material';
import { Add, Remove, AddShoppingCart, RemoveShoppingCart } from '@mui/icons-material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import './ProductDetailComponent.css';

const ProductDetailComponent = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <Container>
      <Grid container spacing={2}>
     
        <Grid item xs={12}>
          <Carousel showArrows={true}>
            {/* Carousel images */}
            <div>
              <img src="b3.webp" alt="Product" />
            </div>
            <div>
              <img src="b4.webp" alt="Product" />
            </div>

            <div>
              <img src="b5.webp" alt="Product" />
            </div>
            {/* Add more images here */}
          </Carousel>
        </Grid>

        <Grid item xs={12} md={6}>
          {/* Big product image */}
          <img src="logo3.webp" alt="Product" className="main-image" style={{width:'50%'}}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Headphones & Speakers</Typography>
          <Typography variant="body1" paragraph>
            Wireless The Over Ear Headsets
          </Typography>
          <Typography variant="h6">Price: $99.99</Typography>
          <div className="quantity-controls">
            <IconButton size="small" onClick={() => handleQuantityChange(quantity - 1)}>
              <Remove />
            </IconButton>
            <span>{quantity}</span>
            <IconButton size="small" onClick={() => handleQuantityChange(quantity + 1)}>
              <Add />
            </IconButton>
          </div>
          <div>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddShoppingCart />}
            className="add-to-cart"
          >
            Add to Cart
          </Button>

          <Button
           style={{margin:20}}
            variant="contained"
            color="secondary"
            startIcon={<RemoveShoppingCart />}
            className="buy-now"
          >
            Buy Now
          </Button>
          </div>

          <div>
       
          </div>

          <div className="product-features">
            <div className="feature">Choose a Color</div>
            <div className="feature">Free Delivery</div>
            <div className="feature">Return Policy</div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetailComponent;

