interface Props {
    label: string
}

function Title( props: Props ) {
    return (
        <>
            <h1>{ props.label }</h1>
        </>
    )
}

export default Title;