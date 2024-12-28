import React from "react";
import "./VideoSection.css";

const VideoSection = () => {
  const videos = [
    { id: 1, title: "لحظه‌ای تعیین‌کننده برای نسل‌ها", duration: "02:15" },
    { id: 2, title: "مراسم ثبت نام - بازگرداندن آزادی سلامت", duration: "04:38" },
    { id: 3, title: "کنفرانس خبری سخنگوی مجلس", duration: "10:32" },
    { id: 4, title: "رهبری جمهوری خواهان - ۱/۰۶/۱۶", duration: "12:15" },
    { id: 5, title: "بحث های مجلس نمایندگان", duration: "09:10" },
  ];

  return (
    <section className="video-section">
      <h2 className="video-section-title">بخش ویدیوها</h2>
      <div className="video-section-container">
        {/* Large Placeholder Box */}
        <div className="video-large">
          <div className="video-placeholder-large"></div>
          <h3 className="video-large-title">{videos[0].title}</h3>
        </div>

        {/* Small Placeholder Boxes */}
        <div className="video-small-container">
          {videos.slice(1).map((video) => (
            <div key={video.id} className="video-small">
              <div className="video-placeholder-small"></div>
              <div className="video-small-details">
                <p className="video-small-title">{video.title}</p>
                <span className="video-small-duration">{video.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
