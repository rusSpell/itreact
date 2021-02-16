import React from 'react'
import style from './FormsControls.module.scss'

const FormControl = ({ input, meta:{touched, error}, ...props }) => {
    const hasError = touched && error
    return (
        <div className={hasError ? style.error : ''}>
            {props.children}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, ...restProps } = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input = (props) => {
    const { input, meta, ...restProps } = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}