import React, { useState } from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNum = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNum.push(i);
    };
    const [getActive, setActive] = useState({ activeIndex: 1 });
    console.log('--Pagination-- Number of pages:', getActive.activeIndex, 'page numbers:', pageNum);

    return (
        <div className='box-p1'>
            {pageNum.map(number => (
                <button className={number === getActive.activeIndex ? "pagination-active" : "pagination-inactive"} key={number} onClick={() => {
                    paginate(number);
                    setActive({ activeIndex: number });
                }}>{number}</button>
            ))}
        </div>
    );
};

export default Pagination;