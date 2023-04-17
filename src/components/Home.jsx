import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h1>This is home {user&& <span>{user.displayName}</span>}</h1>
        </div>
        
    );
};

export default Home;