import { Icon, StyledButton } from './styled';

export const IconButton = (props) => {
    const { disabled, icon, title, onClick } = props;

    return (
        <StyledButton
            onClick={onClick}
            disabled={disabled}
        >
            <Icon src={icon} />
            {title}
        </StyledButton>
    )
}