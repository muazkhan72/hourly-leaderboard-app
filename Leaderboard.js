import React, { useEffect, useState } from 'react';
import { fetchLeaderboard } from '../services/api';
import './Leaderboard.css';

const Leaderboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchLeaderboard().then(res => setUsers(res.data));
    }, []);

    return (
        <div className="leaderboard-container">
            <h2>Hourly Ranking</h2>
            <div className="top-3">
                {users.slice(0, 3).map((user, index) => (
                    <div key={user._id} className={`rank-card rank-${index + 1}`}>
                        <img src={user.avatar} alt="avatar" />
                        <h4>{user.name}</h4>
                        <p>🔥 {user.fire}</p>
                    </div>
                ))}
            </div>
            <div className="other-ranks">
                {users.slice(3).map((user, index) => (
                    <div key={user._id} className="rank-row">
                        <span>#{index + 4}</span>
                        <img src={user.avatar} alt="avatar" />
                        <span>{user.name}</span>
                        <span>🔥 {user.fire}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;