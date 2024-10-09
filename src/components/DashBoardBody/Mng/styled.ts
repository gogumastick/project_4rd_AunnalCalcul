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
        /* justify-content: center; */
        /* border: 10px solid ; */
    }
    .emplBoxContents {
        width: 100px;
        /* background-color: gray; */
        display: flex; 
        justify-content: start; /* 가로축 정렬 */
        align-items: center; /* 세로축 정렬 */
        
    }
    .emplBoxContentsExp{
        width: 270px;
        /* background-color: gray; */
        display: flex; 
        justify-content: start; /* 가로축 정렬 */
        align-items: center; /* 세로축 정렬 */
    }
    .addEmplInputBox{
        width : 200px;
        flex-shrink: 0; /* 줄어들지 않도록 설정 */
        flex-grow: 0; /* 유연하게 크기 변동하지 않도록 */
        /* background-color: blue; */

    }
    .emplRetireTextBox {
        width: 100px;
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
    .emplRetireTextBox.hide {
        width: 0px; /* 텍스트 숨길 때 너비 */
        opacity: 1;
    }

    .emplRetireTextBox.show {
        width: 100%; /* 텍스트 보여질 때 너비 */
        opacity: 1;
    }

    .emplRetireContentsBox{
        display: flex;
        overflow: hidden;
        white-space: nowrap;
        opacity: 1;
        transition:
            width 0.3s ease,
            opacity 0.3s ease;
    }
    .emplRetireContentsBox.hide {
        width: 0px; /* 텍스트 숨길 때 너비 */
        opacity: 1;
    }

    .emplRetireContentsBox.show {
        width: 100%; /* 텍스트 보여질 때 너비 */
        opacity: 1;
    }
    .addComment{
        margin-left : 25px;
        display: flex; 
        justify-content: start; /* 가로축 정렬 */
        align-items: center; /* 세로축 정렬 */
    }
    .emplBtnBox{
        display: flex; 
        justify-content: end; /* 가로축 정렬 */
        align-items: center; /* 세로축 정렬 */
        /* emplBtnBox 안 버튼 */
        #closeBnt {
            margin: 5px;
        }
        #saveBnt {
            margin: 10px;
            color: white; 
            font-weight: bold; 
            background-color: #2979ff;
        }
    }

    .addEmplMuiModalBox{
        background-color: pink;

    }
`;
