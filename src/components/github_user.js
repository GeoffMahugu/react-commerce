import React, { useEffect, useCallback, useState } from 'react';
import { debounce } from 'lodash';
import axios from 'axios';

const GITHUB_API = 'https://api.github.com/users/';

const GitHubUser = () => {
    const [username, setUsername] = useState('GeoffMahugu');
    useEffect(() => {
        console.log('USEEFFECT', username);
        debounce(() => fetchApi(username), 500);
        // debounce(() => {
        //     console.log('PRE::::', username);
        //     fetchApi(username);
        // }, 500);
    }, [username]);
    const handleInput = (event) => {
        setUsername(event.target.value);
    };
    useCallback(() => {
        fetchApi(username);
    }, [username]);

    const fetchApi = (searchStr) => {
        // debounce(() => {
        //     console.log('SEARCH ITEM::', searchStr);
        // }, 500);

        console.log('SEARCH ITEM::', searchStr);
    };

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