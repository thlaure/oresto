import { useState } from 'react';

import ITask from '../interfaces/ITasks.tsx';

interface Props {
    item: ITask
}

function ListItem( { item }: Props ) {
    const [checked, setChecked] = useState(false);

    function handleClick(item: ITask) {
        setChecked(!checked);

        if (item.is_done) {
            item.is_done = false;
        } else {
            item.is_done = true;
        }
    }

    return (
        <>
            <li>
                <input type="checkbox" checked={item.is_done ? true : false} onChange={() => handleClick(item)} />
                <label>{ item.label }</label>
            </li>
        </>
    )
}

export default ListItem;