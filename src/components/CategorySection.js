// export default Category;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CategorySection.css";

const Category = () => {
  // Step 1: Hardcode your categories (or fetch them if needed)
  const categories = [
    "اقتصاد ایران",
    "بورس",
    "بانک، بیمه و بورس",
    "صنعت",
    "کشاورزی",
    "راه و ساختمان",
    "انرژی",
    
  ];

  // State for the **currently selected** category
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // State to hold the array of articles for the **selected** category
  const [newsData, setNewsData] = useState([]);

  // A separate piece of state for the "featured" article
  const [featuredNews, setFeaturedNews] = useState(null);

  // Fetch data for the selectedCategory when the component mounts
  // or whenever selectedCategory changes
  useEffect(() => {
    axios
      .get(`http://194.26.195.4:8000/api/category/اسلایدر/page/1/`)
      .then((response) => {
        const data = response.data; // The array returned by the backend
        setNewsData(data);

        // The first item in the array can be considered "featured"
        if (data && data.length > 0) {
          setFeaturedNews(data[0]);
        } else {
          setFeaturedNews(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
      });
  }, [selectedCategory]);

  // otherNews = everything except the first item
  const otherNews = newsData.slice(1);

  return (
    <div className="category-container-category">
      {/* ----------- Navbar for categories ----------- */}
      <nav className="navbar-category">
        <ul className="navbar-list-category">
          {categories.map((category) => (
            <li key={category} className="navbar-item-category">
              <button
                className={`navbar-button-category ${
                  selectedCategory === category ? "active-category" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ----------- Main Content ----------- */}
      <div className="content-category">
        {/* ----------- Featured Section ----------- */}
        {featuredNews && (
          <div className="featured-section-category">
            <h2 className="section-title-category">باید دید</h2>
            <div className="article-category">
              {/* category array might contain multiple categories, e.g. ["بورس","اسلایدر"] */}
              <span className="tag-category">
                {featuredNews.category?.join(" - ")}
              </span>

              {featuredNews.image_file ? (
                <img
                  src={featuredNews.image_file}
                  alt="Featured"
                  className="featured-image-category"
                />
              ) : (
                <div className="no-image-placeholder">
  
</div>
              )}

              <h3 className="featured-title-category">{featuredNews.title}</h3>
              <div className="meta-category">
                <span>{featuredNews.creator_username || "بدون نویسنده"}</span>
                {" - "}
                <span>{featuredNews.jalali_full_date || ""}</span>
              </div>
              <p className="summary-category">{featuredNews.caption}</p>
            </div>
          </div>
        )}

        {/* ----------- The rest of the articles ----------- */}
        <div className="post-list-category">
          <h2 className="section-title-category">{selectedCategory}</h2>
          <ol className="post-list-items-category">
            {otherNews.map((post) => (
              <li key={post._id} className="post-item-category">
                <span className="tag-category">
                  {post.category?.join(" - ")}
                </span>
                <a href={`#${post.slug}`} className="post-link-category">
                  {post.title}
                </a>
                <span className="post-date-category">
                  {post.jalali_full_date}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Category;
