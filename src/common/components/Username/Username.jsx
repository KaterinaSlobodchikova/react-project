import { StyledUsername } from './styled'

export const Username = (props) => {
    const { name } = props;

    return (
        <StyledUsername>
            Hello, {name}!
        </StyledUsername>
    );
};