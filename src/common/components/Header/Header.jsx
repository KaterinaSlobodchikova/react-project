import { Username } from '../Username/Username';
import { StyledHeaderContainer } from './styled'

export const Header = (props) => {

    return (
        <StyledHeaderContainer>
            <Username name={"Phoebe Buffay"}/>
        </StyledHeaderContainer>
    );
};