import React, { useEffect, useState } from 'react';

const GitHubUser = () => {
    const [username, setUsername] = useState('GeoffMahugu');
    // useEffect(()=>{
    //     setUsername();
    // },[username]);
    const handleInput = (event) => {
        setUsername(event.target.value);
    }
    return (
        <>
            <h4>Fetch User profile</h4>
            <input type="text" value={username} onChange={handleInput} />
            <div>
                <p>UserName: {username}</p>
            </div>
        </>
    )
}
export default GitHubUser