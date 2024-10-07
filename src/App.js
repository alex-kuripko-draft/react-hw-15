import {useCallback, useMemo, useState} from "react";
import UserList from "./components/user-list";

import './App.css';

function App() {
    const userList = [
        {id: 1, name: 'Alex Test'},
        {id: 2, name: 'Oleksandr Kuripko'},
        {id: 3, name: 'Some User'},
        {id: 4, name: 'New User'},
    ];

    const [filter, setFilter] = useState('');

    const filterUsers = useCallback((users, filterText) => {
        return users.filter((user) =>
            user.name.toLowerCase().includes(filterText.toLowerCase())
        );
    }, []);

    const filteredUsers = useMemo(() => {
        return filterUsers(userList, filter);
    }, [filter, filterUsers]);

    return (
        <div>
            <h1>User List</h1>
            <input
                type="text"
                placeholder="Filter users"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <UserList users={filteredUsers}/>
        </div>
    );
}

export default App;
