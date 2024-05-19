import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {

    const users = useLoaderData();

    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>Our Users Here</p>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px'
        }}>
                {
                    users.map(user => <User key={user.id} user={user} />)
                }
            </div>  
        </div>
    );
};

export default Users;