import auth from "./auth.js";
import home from "./home.js";
import articles from './articles.js';
import notices from "./notices.js";

export default {
    ...auth,
    ...home,
    ...articles,
    ...notices
};
