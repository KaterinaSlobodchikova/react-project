import { StyledInput } from "./styled";

export const Input = (props) => {
    const { type, value, onChange, placeholder } = props;

    return (
            <StyledInput 
                type = {type} 
                value = {value}
                onChange = {onChange}
                placeholder = {placeholder}
            >
            </StyledInput>
    );
};