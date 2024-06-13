import React from 'react';

const landingpage = () => {
window.addEventListener('resize', () => {
    
    if (window.innerWidth <= 768) {
        document.querySelector('nav .search-box').style.display = 'none';
        document.querySelector('nav ul').style.display = 'none';
        document.querySelector('.campaign-btn').style.display = 'block';
    } else {
        document.querySelector('nav .search-box').style.display = 'block';
        document.querySelector('nav ul').style.display = 'flex';
        document.querySelector('.campaign-btn').style.display = 'none';
    }
});
}

export default landingpage;