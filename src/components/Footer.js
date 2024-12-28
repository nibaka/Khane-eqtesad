import React from "react";
import "./Footer.css";

const Footer = () => {
  const travelNews = [
    { id: 1, title: "روح جزیره: چگونه رام موریس در حال تسخیر جهان است", date: "۲۷ می ۲۰۱۸" },
    { id: 2, title: "یک روستای ایتالیایی به شما ۲,۰۰۰ یورو می‌پردازد تا به آنجا نقل مکان کنید", date: "۲۷ می ۲۰۱۸" },
    { id: 3, title: "این‌ها ارزان‌ترین خطوط هوایی جهان بر اساس مسافت هستند", date: "۲۷ می ۲۰۱۸" },
  ];

  const politicsNews = [
    { id: 1, title: "اوباما به دموکرات‌ها می‌گوید که حق دارند نگران باشند’", date: "۲۷ می ۲۰۱۸" },
    { id: 2, title: "مدرسه‌ای که به افتخار یک ژنرال کنفدراسیون نامگذاری شده بود، به ابتدایی باراک اوباما تغییر نام داد", date: "۲۷ می ۲۰۱۸" },
    { id: 3, title: "آنگلا مرکل با بحران جدید مهاجرت پس از تهدید اتریش مواجه است", date: "۲۷ می ۲۰۱۸" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us */}
        <div className="footer-section about-us">
          <h3 className="footer-title">درباره ما</h3>
          <h2 className="footer-logo">
            <span className="logo-bold">خانه </span>اقتصاد<span className="logo-dot">.</span>
          </h2>
          <p>
          این سایت با استفاده از فریم‌ورک‌های ری‌اکت و جنگو ساخته شده است و برای وب‌سایت‌های خبری، مجله و وبلاگ شخصی طراحی شده است. ساخت یک وب‌سایت حرفه‌ای و کارآمد هیچ‌وقت به این سادگی نبوده است.
          </p>
        </div>

        {/* Travel News */}
        <div className="footer-section travel-news">
          <h3 className="footer-title">اخبار سفر</h3>
          <ul>
            {travelNews.map((news) => (
              <li key={news.id} className="footer-news-item">
                <span>{news.title}</span>
                <p className="news-date">{news.date}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Politics */}
        <div className="footer-section politics">
          <h3 className="footer-title">سیاست</h3>
          <ul>
            {politicsNews.map((news) => (
              <li key={news.id} className="footer-news-item">
                <span>{news.title}</span>
                <p className="news-date">{news.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© Copyright khanehyeghtesad. All Rights Reserved.</p>
        <nav className="footer-nav">
          <a href="/">خانه</a>
          <a href="/">بورس</a>
          <a href="/">کشاورزی</a>
          <a href="/">صنعت</a>
          <a href="/">تماس با ما</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
