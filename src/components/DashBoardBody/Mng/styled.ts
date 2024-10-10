import styled from 'styled-components';

export const MngComponentsStyled = styled.div`
    .EmployeeMngTopBtn {
        margin: 5px;
        color: black;
        border-color: black;
        height: 28px;
    }
    .EmployeeMngTopBtnAdd {
        margin: 5px;
        height: 28px;
    }
`;

export const AddEmplModalBoxStyled = styled.div`
    .addEmplTitleTextField {
        .MuiFormLabel-root {
            color: blue;
            font-weight: bold;
        }

        /* TextField가 포커스를 받을 때 라벨 색상도 변경하려면 */
        .MuiFormLabel-root.Mui-focused {
            color: blue;
        }
    }
    .emplModalBox {
        padding: 5px;
        display: flex;
        flex-wrap: nowrap; /* 요소가 줄 바꿈되지 않도록 설정 */
        align-items: center; /* 세로축 정렬 */
        /* justify-content: center; */
        /* border: 10px solid ; */
    }

    .addEmplInputBox {
        margin: 10px 10px 0px 5px;
        width: 200px;
        flex-shrink: 0; /* 줄어들지 않도록 설정 */
        flex-grow: 0; /* 유연하게 크기 변동하지 않도록 */
        /* background-color: blue; */
    }

    .addEmplInputBoxExp {
        margin: 10px 10px 0px 5px;
        width: 400px;

        flex-shrink: 0; /* 줄어들지 않도록 설정 */
        flex-grow: 0; /* 유연하게 크기 변동하지 않도록 */
        /* background-color: blue; */
    }
    .addEmplRetireTextBox {
        width: 150px;
        /* background-color: gray; */
        display: flex;
        justify-content: start; /* 가로축 정렬 */
        align-items: center; /* 세로축 정렬 */
        overflow: hidden;
        white-space: nowrap;
        opacity: 1;
        transition:
            width 0.3s ease,
            opacity 0.3s ease;
    }
    .addEmplRetireTextBox.hide {
        width: 0px; /* 텍스트 숨길 때 너비 */
        opacity: 1;
    }

    .addEmplRetireTextBox.show {
        width: 100%; /* 텍스트 보여질 때 너비 */
        opacity: 1;
    }

    .addEmplRetireDateBox {
        margin: 10px 10px 0px 5px;
        width: 200px;
        display: flex;
        overflow: hidden;
        white-space: nowrap;
        opacity: 1;
        transition:
            width 0.3s ease,
            opacity 0.3s ease;
    }
    .addEmplRetireDateBox.hide {
        width: 0px; /* 텍스트 숨길 때 너비 */
        opacity: 1;
    }

    .addEmplRetireDateBox.show {
        width: 200px; /* 텍스트 보여질 때 너비 */
        opacity: 1;
    }
    .addComment {
        margin-left: 25px;
        display: flex;
        justify-content: start; /* 가로축 정렬 */
        align-items: center; /* 세로축 정렬 */
    }
    .emplBtnBox {
        display: flex;
        justify-content: end; /* 가로축 정렬 */
        align-items: center; /* 세로축 정렬 */
        /* emplBtnBox 안 버튼 */
    }
    .closeBnt {
        width: 100px;
        margin: 10px;
        /* background-color: green; */
    }
    .saveBnt {
        width: 100px;
        /* margin: 50px; */
        margin-right: 40px;
        color: white;
        font-weight: bold;
        background-color: #2979ff;
    }

    .addEmplMuiModalBox {
        background-color: pink;
    }
`;
