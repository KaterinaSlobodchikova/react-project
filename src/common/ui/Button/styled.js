import styled from 'styled-components';

export const StyledButton = styled.button`
    color: ${(props) => props.theme.palette.system.primary};
    font-size: 20px;
    background: #2231AA;
    border-radius: 2px;
    border: none;
    color: #fff;

    height: 56px;
    width: 544px;
    margin: 5px;
`;