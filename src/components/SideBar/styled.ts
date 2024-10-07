import styled, { keyframes, css } from 'styled-components';

export const SideBarStyled = styled.div`
    .noneSideBar {
        display: none !important;
    }
    /* width : 200px; */
    /* .moduleBox {
        width: 200px;
        transition: width 0.3s ease-in-out;
    }
    .Divider {
        width: 200px;
        transition: width 0.3s ease-in-out;
    } */

    .rotatedAirplanemodeActiveOutlinedIcon {
        /* 45도 회전 */
        transform: rotate(45deg);
    }
    .sideBarIcon {
        color: black;
    }
    .sideBarBox {
        overflow: hidden;
        white-space: nowrap;
        width: 180px; /* 기본 너비 */
        opacity: 1;
        transition:
            width 0.3s ease,
            opacity 0.3s ease;
        background-color: orange;
    }

    .sideBarBox.hide {
        width: 50px; /* 텍스트 숨길 때 너비 */
        opacity: 1;
    }

    .sideBarBox.show {
        width: 180px; /* 텍스트 보여질 때 너비 */
        opacity: 1;
    }
    .sideBarListText {
        overflow: hidden;
        white-space: nowrap;

        opacity: 1;
        transition: opacity 0.3s ease; /* 텍스트의 최대 너비와 불투명도를 부드럽게 전환 */
    }

    .sideBarListText.hide {
        width: 0px; /* 텍스트 숨길 때 너비 0 */
        opacity: 0; /* 투명하게 */
    }

    .sideBarListText.show {
        width: 200px; /* 텍스트 보여질 때 너비 */
        opacity: 1; /* 불투명하게 */
    }
    /* .moduleBox {
        width: 200px;
        overflow: hidden;
        transition: width 0.3s ease, opacity 0.3s ease; 

        &.hide {
            width: 80px; 
            opacity: 0; 
        }

        &.show {
            width: 200px; 
            opacity: 1; 
        }
    }

    .sideBarListText {
        overflow: hidden;
        white-space: nowrap;
        max-width: 200px;
        opacity: 1;
        transition: max-width 0.3s ease, opacity 0.3s ease;

        &.hide {
            max-width: 0;
            opacity: 0;
        }

        &.show {
            max-width: 200px;
            opacity: 1;
        }
    } */
    .menuBox {
        margin-left: 20px;
        overflow: hidden;
        max-height: 0; /* 처음엔 높이를 0으로 설정 */
        opacity: 0; /* 처음엔 투명하게 */

        transition:
            max-height 0.3s ease,
            opacity 0.3s ease; /* max-height와 opacity의 변화를 부드럽게 전환 */
    }
    .menuBox.show {
        /* 열릴 때 최대 높이 */
        max-height: 200px;
        /* 열릴 때 불투명하게 */
        opacity: 1;
    }
`;
