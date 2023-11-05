import ListItem from './ListItem.tsx';

interface Props {
    items: string[]
}

function ListGroup({ items }: Props) {
    return (
        <>
            <div>
                <ul>
                    {items.map((item, index) => (
                        <ListItem key={index} label={item} />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ListGroup;