import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.image} // Replace with actual image source
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.company} - {product.category}
        </Typography>
        <Typography variant="body1" color="text.primary">
          ${product.price} - Rating: {product.rating}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
