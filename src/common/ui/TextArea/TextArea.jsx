import { StyledTextArea } from "./styled";

export const TextArea = (props) => {
    const { disabled, value, onChange, placeholder } = props;

    return (
        <StyledTextArea 
            disabled = {disabled}
            value = {value}
            onChange = {onChange}
            placeholder = {placeholder}
        />
    );
};