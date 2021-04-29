import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <h3>Oops, seams you are lost.</h3>
            <h1>404</h1>
            <Link to={`/`}>Back Home</Link>
        </div>
    )
}

export default Page404;