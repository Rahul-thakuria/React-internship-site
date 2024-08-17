import React from 'react';

const SortOptions = ({ onChange }) => {
  return (
    <div className="sort-options">
      <label>Sort by:</label>
      <select onChange={(e) => onChange(e.target.value)}>
        <option value="most-popular">Most Popular</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortOptions;
