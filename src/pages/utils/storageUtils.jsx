export const getData = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};

export const addData = (key, newItem) => {
    const data = getData(key);
    data.push(newItem);
    localStorage.setItem(key, JSON.stringify(data));
};

export const removeData = (key, id) => {
    const data = getData(key).filter(item => item.id !== id);
    localStorage.setItem(key, JSON.stringify(data));
};
  