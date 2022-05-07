import styled from 'styled-components';

export const StyledTextArea = styled.input`
    min-height: 300px;
    width: 100%;
    max-width: 544px;

    &:not(:last-of-type) {
        margin-bottom: 40px;
    }
`;
