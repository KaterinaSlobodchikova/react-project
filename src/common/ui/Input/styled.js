import styled from 'styled-components';

export const StyledInput = styled.input`
    background: #FFFFFF;
    border-radius: 2px;
    border: none;

    height: 56px;
    width: 100%;
    max-width: 544px;
    padding-left: 20px;

    &:not(:last-of-type) {
        margin-bottom: 40px;
    }
`;
