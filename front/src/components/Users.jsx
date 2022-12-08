import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/userReducer';

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector((initialState) => initialState.userSlice.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    console.log(users)
    return (
        <ul>
            {users.map((user) => {
                return <li key={user._id}>{user.login}</li>
            }
            )}
        </ul>
    );
};

export default Users;