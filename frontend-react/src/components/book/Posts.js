import React from 'react';

const posts = ({ posts, loading }) => {
    console.log(posts);
    if (loading) {
        return <h2>Loading...</h2>
    }



    return (
        <ul>
            {posts.map(post => (
                <li key={post.book_id}>
                    {post.book_title}
                </li>
            ))}
        </ul>
    )
}

export default posts