import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HeroSection.css";

const HeroSection = () => {
  const [mainArticle, setMainArticle] = useState(null);
  const [subtitleArticles, setSubtitleArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://194.26.195.4:8000/api/article/gettitr/", {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM1MDk4NDAyLCJpYXQiOjE3MzUwODA0MDIsImp0aSI6IjYxMDA2Y2NlYjU0NDQ0NDFiMWQwMDJjMWI1YzI3MTRkIiwidXNlcl9pZCI6MTczNTA4MDM5MDgxNn0.NJibSj3KPgEJeR20B0wQNA4L88uLTmqVdby7ZTfYQYw",
        },
      })
      .then((response) => {
        const data = response.data; // the object with keys "1", "2", etc.

        // Extract the main article (key = "1")
        const main = data["1"]?.article;

        // Extract the subtitle articles (keys = "2", "3", "4", "5")
        const sub2 = data["2"]?.article;
        const sub3 = data["3"]?.article;
        const sub4 = data["4"]?.article;
        const sub5 = data["5"]?.article;

        // Update state
        setMainArticle(main);
        setSubtitleArticles([sub2, sub3, sub4, sub5].filter(Boolean));
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  // If mainArticle is null, we can show a loading message or nothing
  if (!mainArticle) {
    return <div>Loading...</div>;
  }

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Featured (Main) Article Section */}
        <div className="featured-article">
          <div className="featured-image">
            <img
              src={
                mainArticle.image_file
                  ? mainArticle.image_file
                  : "https://placehold.co/600x400"
              }
              alt={mainArticle.title}
            />
          </div>
          <div className="featured-overlay">
            {/* Main Title */}
            <div className="main-title">
              {/* Show first category or default */}
              <span className="tag">
                {Array.isArray(mainArticle.category) && mainArticle.category.length
                  ? mainArticle.category[0]
                  : "دسته‌بندی"}
              </span>
              <h1>{mainArticle.title}</h1>
              <p className="meta">
                {/* Jalali full date or fallback text */}
                {mainArticle.jalali_full_date || "تاریخ نامشخص"}
              </p>
            </div>

            {/* Subtitles Section */}
            <div className="subtitles">
              {subtitleArticles.map((article, idx) => (
                <div className="subtitle" key={idx}>
                  <h3>{article.title}</h3>
                  <p>
                    {article.jalali_full_date ? article.jalali_full_date : "تاریخ نامشخص"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


