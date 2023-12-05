import { useState } from 'react';

import ITask from '../interfaces/ITasks.tsx';

interface Props {
    item: ITask
}

function ListItem({ item }: Props) {
    const [, setForceUpdate] = useState(false);

    const handleClick = () => {
        item.is_done = !item.is_done;
        setForceUpdate((prev) => !prev);

        updateTask(item);
    };

    const updateTask = (item: ITask) => {
        fetch(`http://localhost:8000/todolist`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: item.id, is_done: item.is_done })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <>
            <li>
                <input type="checkbox" checked={item.is_done} onChange={handleClick} />
                <label>{ item.label }</label>
            </li>
        </>
    )
}

export default ListItem;