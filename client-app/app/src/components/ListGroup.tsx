import ListItem from './ListItem.tsx';
import ITask from '../interfaces/ITasks.tsx';

interface Props {
    items: ITask[]
}

function ListGroup({ items }: Props) {
    return (
        <>
            <div>
                <ul>
                    {items.map((item, index) => (
                        <ListItem key={index} item={item} />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ListGroup;