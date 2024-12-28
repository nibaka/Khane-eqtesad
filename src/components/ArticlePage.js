import React from 'react';
import { useParams } from 'react-router-dom';
import SidebarNewsList from './SidebarNewsList';
import './ArticlePage.css';
import { useState } from 'react';

// Example data for demonstration
const articles = {
  1: {
    title: 'مدرسه بزرگداشت ژنرال کنفدراسیون به باراک اوباما تغییر نام داد',
    description: 'این یک تلاش عمدی و سیستماتیک است برای دسترسی به بخشی از مغز ما که ترس در آن قرار دارد',
    author: 'Bkninja',
    date: 'May 27, 2018',
    comments: 0,
    views: 2695,
    imageUrl: 'https://allthebestsofts.com/rubik-world/wp-content/uploads/2018/05/4-1000x540.jpg'
  }
};

function ArticlePage() {
    const { id } = useParams();
    const article = articles[id];
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      website: '',
      comment: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      alert('Comment submitted successfully!');
    };
  
    if (!article) {
      return (
        <div className="article-container">
          <h2>Article not found!</h2>
          <p>The article you are looking for does not exist.</p>
          <a href="/">Go back to homepage</a>
        </div>
      );
    }

  return (
    <div className="article-page-articles">
      {/* Full-width Intro Section */}
      <div className="article-intro-articles text-right-article-articles">
        <img src={article.imageUrl} alt={article.title} className="article-image-articles" />
        <span className="article-category-article-articles">سیاست</span>
        <h1 className="article-title-articles">{article.title}</h1>
        <p className="article-description-articles">{article.description}</p>
        <div className="article-meta-articles">
          <span className="article-author-articles">{article.author}</span>
          <span className="article-date-articles">{article.date}</span>
          <span className="article-comments-articles">{article.comments} نظر</span>
          <span className="article-views-articles">{article.views} بازدید</span>
        </div>
        <div className="social-share-article-articles">
        <button>Share on Instagram</button>
        <button>Share on Twitter</button>
        <button>Share on Telegram</button>
      </div>
      </div>

      {/* Flex Section with Sidebar */}
      <div className="article-flex-articles">
        <div className="article-body-articles">
          <p>بدون صبح و گاو وحشی مکان صورت فلکی، نهنگ ها را حرکت داد. مرد و صبح آوردند. این چهره قانون زندگی نیست که حرکت می کند. بدون گاو نر از چهارم زاییده می شود. ساحل زمین را تازه کنید. حیوان. باید دانه ای ببیند. باز به خلاء سوم باز خواهید شد که در آن شما روشن می شوید، بذر می گذارید و حرکت می کنید، عمیق زمین خشک است. مرد خشک شد. حیوان را جمع کرد.</p>
          <p><strong>وقتی برای یک هدف سخت تلاش می کنید و آن را به دست می آورید، احساس بسیار خوبی دارد.</strong></p>

        {/* Comment Section */}
      <div className="comment-section">
        <h3>نظر بگذارید</h3>
        <form onSubmit={handleSubmit} className="comment-form">
          <textarea
            name="comment"
            placeholder="نظر"
            value={formData.comment}
            onChange={handleChange}
            required
          ></textarea>
          <div className="comment-fields">
            <input
              type="text"
              name="name"
              placeholder="اسم*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="ایمیل*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="url"
              name="website"
              placeholder="وبسایت"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="send-button">SEND</button>
        </form>
      </div>

        </div>

         

        <aside className="article-sidebar-articles">
          <div className="contact-us-article-articles">
            <h3>تماس با ما</h3>
            <p>Instagram - 78K followers</p>
            <p>Twitter - 68K followers</p>
            <p>Telegram - 44K followers</p>
          </div>
          <div className="world-news-articles">
            <h3>WORLD NEWS</h3>
            <SidebarNewsList />
            </div>
            {/* most view sidebar */}

            <div class="most-viewed-article">
  <h3 class="most-viewed-title-article">بیشترین بازدید</h3>
  <div class="underline-article"></div>

  <div class="article-item-article">
    <span class="category-article design-article">صنعت</span>
    <h4 class="article-title-article">مزرعه ای متنوع در کالیفرنیا با الهام از طبیعت</h4>
    <p class="article-date-article">May 27, 2018</p>
  </div>

  <div class="article-item-article">
    <span class="category-article politics-article">کشاورزی</span>
    <h4 class="article-title-article">اوباما به دموکرات‌ها می‌گوید که حق دارند درباره ترامپ نگران باشند</h4>
    <p class="article-date-article">May 27, 2018</p>
  </div>

  <div class="article-item-article">
    <span class="category-article voices-article">انرژی</span>
    <h4 class="article-title-article">ملوان سابق نیروی دریایی آمریکا که توسط ترامپ مورد عفو قرار گرفت، قصد دارد از اوباما شکایت کند</h4>
    <p class="article-date-article">May 27, 2018</p>
  </div>

  <div class="article-item-article">
    <span class="category-article music-article">بورس</span>
    <h4 class="article-title-article">ویدیوی «High Five» یک موزیکال کوچک دبیرستانی است</h4>
    <p class="article-date-article">May 27, 2018</p>
  </div>

  <div class="pagination-article">
    <button class="pagination-btn-article">&lt;</button>
    <button class="pagination-btn-article">&gt;</button>
  </div>



          </div>
        </aside>
      </div>
    </div>
  );
}

export default ArticlePage;
