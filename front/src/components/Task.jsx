import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completeTask, deleteTask } from '../features/todoReducer';
import './Tasks.css'
const Task = ({ title, completed, id, loading, uId }) => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.userSlice.id)
    // console.log(userId, id, "test");
    const handlePriority = () => {
        dispatch(completeTask({ id, completed }))
    }
    const handleDelete = () => {
        dispatch(deleteTask({ id }))
    }
    if (loading) {
        return "↻"
    }
    return (
        <div className='main'>
            {userId === uId ? <button onClick={handlePriority}>✓</button> : null}
            {userId === uId ? <div className={completed ? 'taskP' : 'task'}>{title}</div> : null}
            {userId === uId ? <button onClick={handleDelete}>✗</button> :null}
        </div>
    );
};

export default Task;
