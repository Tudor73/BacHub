import React from 'react';

export default function PostDetails({ match }) {
    return (
        <div>This is the post details page {match.params.id} </div>
    )
}