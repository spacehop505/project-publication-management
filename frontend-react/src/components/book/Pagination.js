import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNum = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNum.push(i);
    }



    return (

        <div className='pagination'>
            {pageNum.map(number => (
                <a key={number}>
                    <a onClick={() => paginate(number)} href="!#" >{number}</a>
                </a>
            ))}
        </div>

    )
}

export default Pagination