interface Props {
    label: string
}

function ListItem( { label }: Props ) {
    return (
        <>
            <li>{ label }</li>
        </>
    )
}

export default ListItem;