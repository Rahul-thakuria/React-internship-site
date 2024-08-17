import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaSlidersH, FaStar, FaRegStar, FaImage } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { MdCancel } from "react-icons/md"; 
import "./categorypage.css";
import { Link } from 'react-router-dom';

const CategoryPage = () => {
  const navigate = useNavigate(); 
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("mens-shirts");
  const [sortOption, setSortOption] = useState("most-popular");
  const [currentPage, setCurrentPage] = useState(1);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isStyleOpen, setIsStyleOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => console.error(error));
  }, [category]);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "price-low-high") return a.price - b.price;
    if (sortOption === "price-high-low") return b.price - a.price;
    return b.rating - a.rating; // 
  });

  const productsPerPage = 4;
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const productsToShow = sortedProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const shouldShowPagination = totalPages > 1;

  const handlePageChange = (pageNum) => {
    if (pageNum > 0 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); 
  };

  return (
    <div className="category-page">
      <div className="filters">
        <div className="filter-header">
          <h3>Filters</h3>
          <FaSlidersH />
        </div>
        <div className="filter-category">
          <div
            className="filter-title"
            onClick={() => setIsPriceOpen(!isPriceOpen)}
          >
            <h4>Price</h4>
            {isPriceOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </div>
          {isPriceOpen && (
            <div className="price-slider-container">
              <span className="price-label">$50</span>
              <input type="range" min="50" max="200" className="price-slider" />
              <span className="price-label">$200</span>
            </div>
          )}
        </div>
        <div className="filter-category">
          <div
            className="filter-title"
            onClick={() => setIsColorOpen(!isColorOpen)}
          >
            <h4>Colors</h4>
            {isColorOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </div>
          {isColorOpen && (
            <div className="color-options">
              {[
                "#00FF00",
                "#FF0000",
                "#FFFF00",
                "#FFA500",
                "#00FFFF",
                "#0000FF",
                "#FFFFFF",
                "#FF00FF",
                "#000000",
              ].map((color, index) => (
                <div
                  key={index}
                  className={`color-box ${
                    color === "#0000FF" ? "selected-color" : ""
                  }`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          )}
        </div>
        <div className="filter-category">
          <div
            className="filter-title"
            onClick={() => setIsSizeOpen(!isSizeOpen)}
          >
            <h4>Size</h4>
            {isSizeOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </div>
          {isSizeOpen && (
            <div className="size-options">
              {[
                "XX-Small",
                "X-Small",
                "Small",
                "Medium",
                "Large",
                "X-Large",
                "XX-Large",
                "3X-Large",
                "4X-Large",
              ].map((size) => (
                <label
                  key={size}
                  className={`size-option ${
                    size === "Large" ? "selected-size" : ""
                  }`}
                >
                  {size}
                </label>
              ))}
            </div>
          )}
        </div>
        <div className="filter-category">
          <div
            className="filter-title"
            onClick={() => setIsStyleOpen(!isStyleOpen)}
          >
            <h4>Dress Style</h4>
            {isStyleOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </div>
          {isStyleOpen && (
            <div className="style-options">
              {["Casual", "Formal", "Party", "Gym"].map((style) => (
                <label key={style}>{style}</label>
              ))}
            </div>
          )}
        </div>
        <button className="apply-filter-btn">Apply Filter</button>
      </div>

      <div className="products-section">
        <div className="category-header">
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <select
            onChange={(e) => setSortOption(e.target.value)}
            value={sortOption}
          >
            <option value="most-popular">Sort by price</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>

        <div className="product-list">
          {productsToShow.map((product) => (
            <div
              key={product.id}
              className="product-item"
              onClick={() => handleProductClick(product.id)} 
            >
              {product.thumbnail ? (
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="product-img"
                />
              ) : (
                <div className="product-img-placeholder">
                  <FaImage /> 
                </div>
              )}
              <h3>{product.title}</h3>

              <div className="product-rating">
                {[...Array(5)].map((_, index) =>
                  index < Math.round(product.rating) ? (
                    <FaStar key={index} className="star-icon" />
                  ) : (
                    <FaRegStar key={index} className="star-icon" />
                  )
                )}
                <span className="rating-number">
                  ({product.rating.toFixed(1)})
                </span>
              </div>

              <div className="product-price">
                ${product.price}{" "}
                {product.discountPercentage && (
                  <span className="original-price">
                    $
                    {(
                      product.price *
                      (1 + product.discountPercentage / 100)
                    ).toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {shouldShowPagination && (
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {[...Array(totalPages).keys()].map((num) => (
              <button
                key={num + 1}
                onClick={() => handlePageChange(num + 1)}
                className={currentPage === num + 1 ? "active" : ""}
              >
                {num + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
