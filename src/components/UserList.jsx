import { useState, useEffect } from 'react';
import { getUsers } from '../services/api';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const feature=()=>{
      
    }
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await getUsers();
        setUsers(response.data);
      } catch (err) {
        setError(err.message || 'Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="loading">Loading users...</div>;

  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="user-list">
      <h2>Users (from JSONPlaceholder)</h2>

      <div className="cards">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p className="username">@{user.username}</p>
            <p>{user.email}</p>
            <p className="company">{user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}