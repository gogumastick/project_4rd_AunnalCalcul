import styled from 'styled-components';

export const NavBarStyled = styled.div`
    width: 100%;
    .noneNavBar {
        display: none !important;
    }

    img {
        width: 30px;
        height: 30px;
        margin-right: 18px;
    }

    .toUserMode {
        display: flex;
        /* 세로 정렬 가운데 */
        align-items: center;

        /* 가로 정렬 왼쪽 정렬 */
        justify-content: flex-start;

        /* 텍스트와 이미지 사이에 간격 추가 */
        div {
            margin-left: -15px;
        }
    }
`;
