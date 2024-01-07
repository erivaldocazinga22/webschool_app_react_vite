import { twMerge } from "tailwind-merge";

type SearchNarInputProps = {
    id?: string,
    value?: string,
    name: string,
    placeholder?: string,
    className?: string,
    onChange?: ()=> void
}

export default function SearchBarInput({placeholder, id, value, name, onChange, className }: SearchNarInputProps) {
    return (
        <input 
            id={id}  
            type="search" 
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder} 
            className={twMerge("flex-1 text-white bg-transparent outline-none", className)}
        />
    )
}

