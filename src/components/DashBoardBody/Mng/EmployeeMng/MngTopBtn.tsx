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
import { addEmployeeModalState } from '@/utill/atom';
// import { Button, message, Upload } from 'antd';
// import type { GetProp, UploadFile, UploadProps } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';

// type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const EmployeeMngTopBtn = () => {
    // 직원추가 모달창 여닫기
    // const [addEmployeeModalOpen, setaddEmployeeModalOpen] = useState(false)
    const [addEmployeeModalOpen, setaddEmployeeModalOpen] = useRecoilState(addEmployeeModalState);
    // console.log('EmployeeMngTopBtn의 addEmployeeModalOpen', addEmployeeModalOpen);

    const addEmployeeShowModal = () => {
        setaddEmployeeModalOpen(true);
    };

    // 파일 업로드
    // const [fileList, setFileList] = useState<UploadFile[]>([]);
    // const [uploading, setUploading] = useState(false);

    // const handleUpload = () => {
    //     const formData = new FormData();
    //     fileList.forEach((file) => {
    //         formData.append('files[]', file as FileType);
    //     });
    //     setUploading(true);
    //     // You can use any AJAX library you like
    //     fetch('https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload', {
    //         method: 'POST',
    //         body: formData,
    //     })
    //         .then((res) => res.json())
    //         .then(() => {
    //             setFileList([]);
    //             message.success('upload successfully.');
    //         })
    //         .catch(() => {
    //             message.error('upload failed.');
    //         })
    //         .finally(() => {
    //             setUploading(false);
    //         });
    // };

    // const props: UploadProps = {
    //     onRemove: (file) => {
    //         const index = fileList.indexOf(file);
    //         const newFileList = fileList.slice();
    //         newFileList.splice(index, 1);
    //         setFileList(newFileList);
    //     },
    //     beforeUpload: (file) => {
    //         setFileList([...fileList, file]);

    //         return false;
    //     },
    //     fileList,
    // };

    return (
        <>
            <MngComponentsStyled>
                {/* <Button className="EmployeeMngTopBtn" icon={<DownloadIcon />}>
                    직원명단 다운로드
                </Button>
                <Button className="EmployeeMngTopBtn" icon={<AssignmentOutlinedIcon />}>
                    직원추가 양식 다운로드
                </Button>
                <Button className="EmployeeMngTopBtn" icon={<UploadIcon />}>
                    대량 업로드
                    <VisuallyHiddenInput type="file" onChange={(event) => console.log(event.target.files)} multiple />
                </Button> */}

                {/* antD 업로드 Btn */}
                {/* <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
                <Button
                    type="primary"
                    onClick={handleUpload}
                    disabled={fileList.length === 0}
                    loading={uploading}
                    style={{ marginTop: 16 }}
                ></Button> */}

                {/* 기존 MUI */}
                
                <Button className="EmployeeMngTopBtn" variant="outlined" startIcon={<DownloadIcon />} >
                    직원명단 다운로드
                </Button>
                <Button className="EmployeeMngTopBtn" variant="outlined" startIcon={<AssignmentOutlinedIcon />} >
                    직원추가 양식 다운로드
                </Button>
                <Button className="EmployeeMngTopBtn" variant="outlined" startIcon={<UploadIcon />} component="label">
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
