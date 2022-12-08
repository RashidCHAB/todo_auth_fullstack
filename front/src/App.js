import './App.css';
import Tasks from './components/Tasks';
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login';
import Auth from './components/Auth';
import Users from './components/Users';
import { useSelector } from 'react-redux';
function App() {
  const error = useSelector((state) => state.userSlice.error)
  const token = useSelector((state) => state.userSlice.token)
  if (error) {
    return <div>{error}</div>
  }
  if (!token) {
    return (
      <Routes>
        <Route path="/task" element={<Navigate to="/login" />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    )
  }
  return (

    <div className="App">
      <Routes>
        <Route path="/task" element={<Tasks />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
