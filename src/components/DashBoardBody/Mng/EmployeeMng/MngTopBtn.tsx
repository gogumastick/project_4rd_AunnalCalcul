import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import VisuallyHiddenInput from './VisuallyHiddenInput';
import { MngComponentsStyled } from '../styled';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import {    addEmployeeModalState} from '@/utill/atom';

const EmployeeMngTopBtn = () => {

    // 직원추가 모달창 여닫기
    // const [addEmployeeModalOpen, setaddEmployeeModalOpen] = useState(false)
    const [addEmployeeModalOpen, setaddEmployeeModalOpen] =useRecoilState(addEmployeeModalState)

    const addEmployeeShowModal=()=>{
        setaddEmployeeModalOpen(true);

    }

    return (
        <>
            <MngComponentsStyled>
                <Button className="EmployeeMngTopBtn" variant="outlined" startIcon={<DownloadIcon />} >
                    직원명단 다운로드
                </Button>
                <Button className="EmployeeMngTopBtn" variant="outlined" startIcon={<AssignmentOutlinedIcon />} >
                    직원추가 양식 다운로드
                </Button>
                <Button className="EmployeeMngTopBtn" variant="outlined" startIcon={<UploadIcon />} >
                    업로드
                    <VisuallyHiddenInput type="file" onChange={(event) => console.log(event.target.files)} multiple />
                </Button>
                <Button
                    className="EmployeeMngTopBtnAdd"
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<AddToPhotosIcon />}
                    onClick={addEmployeeShowModal}

                >
                    직원추가
                </Button>
            </MngComponentsStyled>
        </>
    );
};
export default EmployeeMngTopBtn;
