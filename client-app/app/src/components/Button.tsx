interface Props {
    onClickButton: (text: string) => void,
    item: string,
    label: string
}

function Button({ onClickButton, item, label }: Props) {

    return (
        <>
            <button onClick={() => { onClickButton(item) }}>{label}</button>
        </>
    )
}

export default Button;