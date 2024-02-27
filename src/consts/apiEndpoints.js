const API_URL = import.meta.env.VITE_API_URL;
const AUTH_URL = `${API_URL}/auth`;
const ARTICLES_URL = `${API_URL}/articles`;

const apiEndpoints = {
    accounts: {
        login: () => `${AUTH_URL}/local`,
    },
    articles: {
        articles: () => ARTICLES_URL,
    },
};

export default apiEndpoints;
