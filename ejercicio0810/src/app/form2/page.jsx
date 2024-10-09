'use client';

import { useEffect, useState } from "react";


export default function Counter () {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await fetch ("https://jsonplaceholder.typicode.com/users");
            if (result.ok) {
                const user = await result.json();
                setData(user);
            }

        }
        fetchData();

    }, [])
    return (
        <div>
            <p>User</p>
            <div>
               {data.map((user, index) => {
						return (
						<tr key={index}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.username}</td>
						</tr>
						);
					})}
            </div>

        </div>
    )
}

