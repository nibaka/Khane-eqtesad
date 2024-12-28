import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WorldNewsSection.css";

const WorldNewsSection = () => {
  // 1) Local state to hold the fetched data
  const [newsItems, setNewsItems] = useState([]);

  // 2) useEffect to fetch data from your endpoint when component mounts
  useEffect(() => {
    axios
      .get("http://194.26.195.4:8000/api/article/top/") 
      .then((response) => {
        // response.data is your array of articles
        setNewsItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching top articles:", error);
      });
  }, []); // Empty deps array => runs once on mount

  return (
    <section className="world-news-section-word">
      {/* Section Title */}
      <h2 className="section-title-word">
        اخبار جهانی
        <span className="underline-word"></span>
      </h2>

      {/* News Grid */}
      <div className="news-grid-word">
        {newsItems.map((item) => (
          <div key={item._id} className="news-item-word">
            {/* 
              The response you posted doesn't provide an image URL. 
              If you want a placeholder image, you can do so:
            */}
            <img
              src="https://via.placeholder.com/300x200"
              alt={item.title}
              className="news-image-word"
            />
            <h3 className="news-title-word">{item.title}</h3>
            <p className="news-date-word">{item.jalali_full_date}</p>
            {/* 
              If you also want to show category, you can do:
              <p>{item.category.join(" - ")}</p>
            */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorldNewsSection;
