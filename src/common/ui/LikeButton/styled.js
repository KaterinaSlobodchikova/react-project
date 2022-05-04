import styled from 'styled-components';

export const StyledLikeButton = styled.button`
    padding: 16px 32px;

    width: 88px;
    height: 56px;

    background: #E8E8E8;
    border-radius: 2px;
`;

export const ButtonImage = styled.img`
    &.dislike {
		transform: rotate(180deg);
	}
`;