import Category from "../models/category";
import Article from "../models/article";

export const CATEGORIES_DUMMY_DATA = [
  new Category(1, "Sport News", [1, 2]),
  new Category(2, "International News", [3, 4]),
];

export const ARTICLES_DUMMY_DATA = [
  new Article(1, "Article-1", "Desc-1"),
  new Article(2, "Article-2", "Desc-1"),
  new Article(3, "Article-3", "Desc-1"),
  new Article(4, "Article-4", "Desc-1"),
];
