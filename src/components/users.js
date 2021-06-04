/**
 * ASSESSMENT 
 * 1) Clearly identify what the 3 core issues are, and how they violate the principles of React Suspense;
 * 
 * SOLUTION
 *  - fetchUserProfile is not defined
 *  - No fallback call for the Suspense
 *  - No module export for UserProfileList which is the main module for the component
 *  - No loading component
*/

import { Suspense, useState, useEffect } from 'react';

const Loading = () => {
    return (
        <div>Loading...</div>
    )
}

function fetchUserProfile(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
}

const SuspensefulUserProfile = ({ userId }) => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetchUserProfile(userId).then((profile) => setData(profile));
    }, [userId, setData]);

    if (!data) {
        return <Loading />
    }

    return (
        <Suspense fallback={<Loading />}>
            <UserProfile data={data} />
        </Suspense>
    );
};

const UserProfile = ({ data }) => {
    return (
        <>
            <h1>{data.name}</h1>
            <h2>{data.email}</h2>
        </>
    );
};

const UserProfileList = () => (
    <>
        <SuspensefulUserProfile userId={1} />
        <SuspensefulUserProfile userId={2} />
        <SuspensefulUserProfile userId={3} />
    </>
);

export default UserProfileList;