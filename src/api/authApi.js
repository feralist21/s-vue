import { postRequest } from '@/http';
import apiEndpoints from '@/consts/apiEndpoints';

const authUser = (userData) => {
    return postRequest(apiEndpoints.accounts.login(), userData);
};

export { authUser };
