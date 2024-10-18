import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleEmailVisibility } from '../../features/userSlice';
import { RootState } from '@/store';


interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}

export default function Users() {
    const [users, setUsers] = useState<User[]>([]); // Array of User objects
    const [loading, setLoading] = useState<boolean>(true); // Loading state
    const dispatch = useDispatch();
    const emailVisible = useSelector((state: RootState) => state.user.emailVisible); // Type Redux state

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                let allUsers: User[] = []; // Create a list for storing users
                let page = 1;
                let response;

                do {
                    response = await axios.get(`https://reqres.in/api/users?page=${page}`);
                    allUsers = [...allUsers, ...response.data.data]; // Append the users
                    page += 1;
                } while (response.data.total_pages >= page);

                // Filter users by first name or last name
                const filteredUsers = allUsers.filter(
                    (user) =>
                        user.first_name.startsWith('G') || user.last_name.startsWith('W')
                );
                setUsers(filteredUsers);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.first_name} {user.last_name}{' '}
                        {emailVisible ? user.email : '***@***.***'}{' '}
                        <button onClick={() => dispatch(toggleEmailVisibility())}>
                            {emailVisible ? 'Hide' : 'Show'} Email
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}