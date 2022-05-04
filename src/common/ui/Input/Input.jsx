import { StyledInput } from "./styled";

export const Input = (props) => {
    const { type, disabled, value, onChange, placeholder } = props;

    return (
            <StyledInput 
                type = {type} 
                disabled = {disabled}
                value = {value}
                onChange = {onChange}
                placeholder = {placeholder}
            />
    );
};