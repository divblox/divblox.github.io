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
}
export {checkUrlScroll};