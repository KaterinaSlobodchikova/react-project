import { StyledMainContainer } from './styled'

export const Main = (props) => {
    const { children } = props;

    return (
        <StyledMainContainer>
            {children}
        </StyledMainContainer>
    );
}