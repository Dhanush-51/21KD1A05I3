import React, { useState } from 'react';
import { TextField, MenuItem, Select, FormControl, InputLabel, Button, Grid } from '@mui/material';

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    rating: '',
    priceRange: '',
    availability: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select name="category" value={filters.category} onChange={handleChange}>
            <MenuItem value="">All</MenuItem>
            {/* Add more categories as needed */}
            <MenuItem value="electronics">Electronics</MenuItem>
            <MenuItem value="fashion">Fashion</MenuItem>
            <MenuItem value="home">Home</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <FormControl fullWidth>
          <InputLabel>Company</InputLabel>
          <Select name="company" value={filters.company} onChange={handleChange}>
            <MenuItem value="">All</MenuItem>
            {/* Add more companies as needed */}
            <MenuItem value="amazon">Amazon</MenuItem>
            <MenuItem value="ebay">eBay</MenuItem>
            <MenuItem value="walmart">Walmart</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          fullWidth
          label="Rating"
          name="rating"
          value={filters.rating}
          onChange={handleChange}
          type="number"
          InputProps={{ inputProps: { min: 0, max: 5, step: 0.1 } }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          fullWidth
          label="Price Range"
          name="priceRange"
          value={filters.priceRange}
          onChange={handleChange}
          placeholder="e.g. 10-50"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <FormControl fullWidth>
          <InputLabel>Availability</InputLabel>
          <Select name="availability" value={filters.availability} onChange={handleChange}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="true">In Stock</MenuItem>
            <MenuItem value="false">Out of Stock</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Button fullWidth variant="contained" color="primary" onClick={applyFilters}>
          Apply Filters
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filters;
