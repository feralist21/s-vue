import { getRequest } from '@/http';
import { getFromLocalStorage } from '@/helpers/localStorage';
import apiEndpoints from '@/consts/apiEndpoints';


const getArticlesList = () => {
    const token = getFromLocalStorage('jwt');

    return getRequest(apiEndpoints.articles.articles(), {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export { getArticlesList };
