import auth from "./auth.js";
import home from "./home.js";
import articles from './articles.js';

export default {
    ...auth,
    ...home,
    ...articles
};
