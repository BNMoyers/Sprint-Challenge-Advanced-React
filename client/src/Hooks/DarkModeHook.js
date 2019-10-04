import React, { useState, useEffect } from 'react';
import LocalStorageHook from './LocalStorageHook';

const DarkModeHook = () => {
    const [mode, setMode] = LocalStorageHook('key1')

    useEffect(() => {
        return mode? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    },[mode]);

    return [mode, setMode]
}

export default DarkModeHook