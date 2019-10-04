import React, { useState, useEffect } from 'react';


const LocalStorageHook = (key, initialValue) => {
    const [storedStyle, setStoredStyle] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item? JSON.parse(item) : initialValue;
});

const setStyle = style =>{
    setStoredStyle(style);
    window.localStorage.setItem(key, JSON.stringify(style));
};
return [storedStyle, setStyle];
};

export default LocalStorageHook
