import { getRequest } from '@/http';
import { getFromLocalStorage, removeFromLocalStorage  } from '@/helpers/localStorage';
import apiEndpoints from '@/consts/apiEndpoints';
import router from '@/router/router';

const getArticlesList = () => {
    const token = getFromLocalStorage('token');

    return getRequest(apiEndpoints.articles.articles(), {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((data) => {
        if (data?.error?.status === 401) {
            removeFromLocalStorage('token')
            router.push({ name: 'auth' });

            return false;
        }

        return data;
    });
};

export { getArticlesList };
