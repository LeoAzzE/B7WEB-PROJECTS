import { SignUpForm } from "@/types/SignUpForm"
import { UseControllerProps, useController } from "react-hook-form"

export const Input = (props: UseControllerProps<SignUpForm>) => {

    const { field, fieldState } = useController(props)

    return (
        <div className="my-3">
            <input {...field}
            placeholder={props.name}
            className={`border ${fieldState.invalid ? 'border-red' : 'border-red'} p-3 text-black`} />
            {fieldState.error?.type === 'required' && <p>Campo obrigatório</p>}
        </div>
    )
}