function commonRequestFetch(url, options) {
    return fetch(url, options)
        .then((res) => res.json())
        .catch((error) => {
            throw error;
        });
}

const getRequest = (url, options) => {
    return commonRequestFetch(url, options);
};

const postRequest = (url, body) => {
    return commonRequestFetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
};

export { getRequest, postRequest };
