import React from "react";
import "./PopularCategories.css";

const PopularCategories = () => {
  const categories = [
    { id: 1, name: "اقتصاد ایران", count: 10 },
    { id: 2, name: "بورس", count: 10 },
    { id: 3, name: "بانک، بیمه، بورس", count: 10 },
    { id: 4, name: "صنعت", count: 10 },
    { id: 5, name: "کشاورزی", count: 10 },
    { id: 6, name: "راه و ساختمان", count: 10 },
    { id: 7, name: "انرژی", count: 7 },
  ];

  return (
    <div className="popular-categories-latest">
      <h3 className="categories-title-latest">دسته‌بندی‌های محبوب</h3>
      <ul className="categories-list-latest">
        {categories.map((category) => (
          <li key={category.id} className="category-item-latest">
            <span className="category-name-latest">{category.name}</span>
            <span className="category-count-latest">{category.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularCategories;
