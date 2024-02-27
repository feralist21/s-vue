const saveToLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error('Ошибка при сохранении данных в localStorage:', error);
        return false;
    }
};

const getFromLocalStorage = (key) => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Ошибка при получении данных из localStorage:', error);
        return null;
    }
};

const removeFromLocalStorage = (key) => {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error('Ошибка при удалении данных из localStorage:', error);
        return false;
    }
};

const clearLocalStorage = () => {
    try {
        localStorage.clear();
        return true;
    } catch (error) {
        console.error('Ошибка при очистке данных в localStorage:', error);
        return false;
    }
};

export { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage, clearLocalStorage };
