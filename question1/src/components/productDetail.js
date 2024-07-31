import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductDetail = ({ product }) => {
  if (!product) return null;

  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={product.image} 
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h4" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.company} - {product.category}
        </Typography>
        <Typography variant="body1" color="text.primary">
          ${product.price} - Rating: {product.rating}
        </Typography>
        <Typography variant="body1" color="text.primary">
          Discount: {product.discount}% - Availability: {product.availability ? 'In Stock' : 'Out of Stock'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
