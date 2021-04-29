import React, { useEffect, useCallback, useState, useRef } from 'react';
import { debounce } from 'lodash';
import axios from 'axios';

const GITHUB_API = 'https://api.github.com/users/';

const GitHubUser = () => {
    const [username, setUserName] = useState('');
    const [userdata, setUserData] = useState('');
    const fetchGitUser = useRef(debounce(() => { console.log('FETCHING', username); fetchApi(username); }, 2000)).current;

    useEffect(() => {
        fetchGitUser();
    }, [username]);


    const handleInput = (event) => {
        setUserName(event.target.value);
    };

    const fetchApi = async () => {
        // console.log('::::::::::::::::::::::');
        // console.log('SearchSTR', searchStr);
        // console.log('USERNAME', username);
        if (!username) return;
        try {
            const response = await axios.get(`${GITHUB_API}${username}`);
            const data = await response.data;
            setUserData(data);
            console.log('RESPONSE::', data);
        } catch (e) {
            console.log('ERROR::', e);
        }
    };

    return (
        <>
            <h4>Fetch User profile</h4>
            <div>
                <label htmlFor="search-git-user">Search GitHub User </label>
                <input type="text" id="search-git-user" value={username} onChange={handleInput} />
            </div>
            <div>{username}</div>
            <div>
                {userdata ? <div><pre>{userdata}</pre></div> : <p>No user data to display</p>}
            </div>
        </>
    )
}
export default GitHubUser