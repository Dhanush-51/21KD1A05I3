import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import Filters from '../components/Filters';
import ProductList from '../components/productList';
import { Pagination, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts(filters, sort, page);
      setProducts(data.products);
      setTotalPages(data.totalPages); // Update the total pages from backend response
    };
    fetchData();
  }, [filters, sort, page]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <Filters onFilterChange={handleFilterChange} />
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel>Sort By</InputLabel>
            <Select value={sort} onChange={(e) => setSort(e.target.value)}>
              <MenuItem value="">None</MenuItem>
              <MenuItem value="price">Price</MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
              <MenuItem value="discount">Discount</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <ProductList products={products} />
      <Pagination
        count={totalPages} // Adjust the count based on the total number of pages from the backend
        page={page}
        onChange={(e, value) => setPage(value)}
      />
    </div>
  );
};

export default AllProducts;
