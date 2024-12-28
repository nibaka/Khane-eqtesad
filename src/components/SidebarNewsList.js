import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SidebarNewsList.css";

const SidebarNewsList = () => {
  // We'll store all items from /api/article/top/ here
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    axios
      .get("http://194.26.195.4:8000/api/article/top/")
      .then((res) => {
        // res.data is the array of items from your backend
        setNewsList(res.data);
      })
      .catch((err) => {
        console.error("Error fetching top articles:", err);
      });
  }, []);

  // If there's at least 1 item, that's our "جهانی" block's item
  const firstItem = newsList[0];

  // The next 3 items after the first
  const nextThree = newsList.slice(1, 4);

  return (
    <div>
      {/* (1) "جهانی" block - uses the FIRST item from API */}
      {firstItem && (
        <div className="world-news">
          <h3 className="sidebar-title">جهانی</h3>
          <div className="world-news-card">
            <div className="world-placeholder"></div>
            <h4 className="world-news-title">
              {/* show the first item's title */}
              {firstItem.title}
            </h4>
          </div>
        </div>
      )}

      {/* (2) Then the NEXT 3 items */}
      <div className="sidebar-news-list-latest">
        {nextThree.map((newsItem) => (
          <div key={newsItem._id} className="news-item-latest">
            <div className="news-thumbnail-latest"></div>
            <div className="news-details-latest">
              <h4 className="news-title-latest">{newsItem.title}</h4>
              <p className="news-date-latest">
                {/* Show jalali_full_date or any date field you have */}
                {newsItem.jalali_full_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarNewsList;
