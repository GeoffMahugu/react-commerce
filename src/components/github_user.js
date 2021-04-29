import React, { useEffect, useCallback, useState, useRef } from 'react';
import { debounce } from 'lodash';
import axios from 'axios';

const GITHUB_API = 'https://api.github.com/users/';

const GitHubUser = () => {
    const [username, setUserName] = useState('');
    const [userdata, setUserData] = useState('');
    const [loading, setLoading] = useState(false);
    const fetchGitUser = useRef(debounce((searchValue) => { console.log('FETCHING', searchValue); fetchGitUserApi(searchValue); }, 2000)).current;

    useEffect(() => {
        fetchGitUser(username);
    }, [username]);


    const handleInput = (event) => {
        const { value: searchValue } = event.target;
        setLoading(true);
        setUserName(searchValue);
    };

    const fetchGitUserApi = async (name) => {
        if (!name) {
            setLoading(false);
            setUserData(null);
            return;
        };
        try {
            const response = await axios.get(`${GITHUB_API}${name}`);
            const data = await response.data;
            setLoading(false);
            setUserData(data);
        } catch (e) {
            console.log('ERROR::', e);
        }
    };

    return (
        <>
            <h4>Fetch User profile</h4>
            <div>
                <label htmlFor="search-git-user"><b>Search GitHub User</b> </label>
                <input type="text" id="search-git-user" value={username} onChange={handleInput} />
            </div>
            <div>
                {loading ? <div>Fetching...</div> : <div>{userdata && <div><img src={userdata.avatar_url} alt={userdata.login} height="200" /><pre>{JSON.stringify(userdata, null, 4)}</pre></div>}</div>}

            </div>
        </>
    )
}
export default GitHubUser