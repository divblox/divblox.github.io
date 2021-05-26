import React, {useEffect} from 'react';

const checkUrlScroll = () => {
    setTimeout(function () {
        if (typeof window !== "undefined") {
            let path_str = window.location.href;
            let path_array = path_str.split('#');
            if (path_array.length > 1) {
                let anchor = path_array[1];
                let element = document.getElementById(anchor);
                element.scrollIntoView();
            }
        }
    }, 500);
};

const loadTawkChatWidget = () => {
    let s1 = document.createElement("script");
    let s0 = document.getElementsByTagName("script")[0];

    s1.async = true;
    s1.src='https://embed.tawk.to/5e2aa42bdaaca76c6fcfa354/default';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
};
export {checkUrlScroll, loadTawkChatWidget};