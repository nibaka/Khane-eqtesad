import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LatestNewsSection.css";
import SidebarNewsList from "./SidebarNewsList";
import PopularCategories from "./PopularCategories";
import InstagramIcon from "../assets/icons/instagram.png";
import TwitterIcon from "../assets/icons/twitter.png";
import TelegramIcon from "../assets/icons/telegram.png";

const LatestNewsSection = () => {
  // Store all fetched news items
  const [allNews, setAllNews] = useState([]);
  // Current page for server-side pagination
  const [page, setPage] = useState(1);
  // Whether there's still more data to load
  const [hasMore, setHasMore] = useState(true);

  // Fetch news from `/api/page/:page/` whenever `page` changes
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`http://194.26.195.4:8000/api/page/1/`);
        // If fewer than 4 items come back, likely no more pages
        if (res.data.length < 4) {
          setHasMore(false);
        }
        // Append to existing items
        setAllNews((prevNews) => [...prevNews, ...res.data]);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchNews();
  }, [page]);

  // "Load More" fetches the next page
  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <section className="latest-news-section">
      <div className="latest-news-container">
        {/* Main Content */}
        <div className="main-content-latest">
          <h2 className="section-title">آخرین اخبار</h2>

          {/* 
            Grid Posts = first 6 items 
            We'll assume each item has jalali_full_date if that's how your backend is returning the date 
          */}
          <div className="news-grid-latest">
            {allNews.slice(0, 6).map((news) => (
              <div key={news._id} className="news-card-latest">
                <div className="news-placeholder-latest"></div>
                <h3 className="news-title-latest">{news.title}</h3>
                {/* 
                  Display the date:
                  If your backend key is `jalali_full_date`, show that.
                  If your backend key is `date`, show `news.date`.
                */}
                <p className="news-date-latest">
                  {news.jalali_full_date || news.date}
                </p>
              </div>
            ))}
          </div>

          {/* 
            Detailed Posts = everything after the first 6 
          */}
          <div className="news-detailed-latest">
            {allNews.slice(6).map((news) => (
              <div key={news._id} className="news-detailed-card">
                <div className="news-detailed-image-placeholder"></div>
                <div className="news-detailed-content">
                  <span className="news-tag-latest">{news.tag}</span>
                  <h3 className="news-detailed-title">{news.title}</h3>
                  {/* Again, choose your date field: `jalali_full_date` or `date` */}
                  <p className="news-detailed-meta">
                    خانه اقتصاد | {news.jalali_full_date || news.date}
                  </p>
                  <p className="news-detailed-description">{news.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* LOAD MORE BUTTON */}
          {hasMore && (
            <button className="load-more-btn" onClick={handleLoadMore}>
              نمایش بیشتر
            </button>
          )}
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="connect-us">
            <h3 className="sidebar-title">تماس با ما</h3>
            <div className="social-box-latest">
              {/* Twitter */}
              <div className="social-item-latest">
                <a
                  href="https://twitter.com/khanehyeghtesad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-latest"
                >
                  <img
                    src={TwitterIcon}
                    alt="Twitter"
                    className="social-icon-latest"
                  />
                  <p>khanehyeghtesad</p>
                </a>
              </div>
              {/* Instagram */}
              <div className="social-item-latest">
                <a
                  href="https://instagram.com/khanehyeghtesad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-latest"
                >
                  <img
                    src={InstagramIcon}
                    alt="Instagram"
                    className="social-icon-latest"
                  />
                  <p>khanehyeghtesad</p>
                </a>
              </div>
              {/* Telegram */}
              <div className="social-item-latest">
                <a
                  href="https://t.me/khanehyeghtesad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-latest"
                >
                  <img
                    src={TelegramIcon}
                    alt="Telegram"
                    className="social-icon-latest"
                  />
                  <p>khanehyeghtesad</p>
                </a>
              </div>
            </div>
          </div>

          {/* <div className="world-news">
            <h3 className="sidebar-title">جهانی</h3>
            <div className="world-news-card">
              <div className="world-placeholder"></div>
              <h4 className="world-news-title">
                معترضان آمریکایی: "مهاجران اینجا خوش آمدید!
              </h4>
            </div>
          </div> */}

          <SidebarNewsList />
          <PopularCategories />
        </aside>
      </div>
    </section>
  );
};

export default LatestNewsSection;
