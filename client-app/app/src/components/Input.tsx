import { ChangeEvent } from 'react'

interface Props {
    type: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: string
}

function Input({ type, onChange, value }: Props) {
    return (
        <>
            <input type={type} onChange={onChange} value={value} />
        </>
    )
}

export default Input;