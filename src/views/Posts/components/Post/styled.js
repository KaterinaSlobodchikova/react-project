import styled from 'styled-components';

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    padding: 40px;
`;

export const PostText = styled.div`
	margin: 48px 0;
`;

export const PostPreview = styled.img`
    width: 992px;
    height: 518px;  
`;

export const PostActions = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

    .button-container {
        display: flex;
        gap: 6px;
    }
`;