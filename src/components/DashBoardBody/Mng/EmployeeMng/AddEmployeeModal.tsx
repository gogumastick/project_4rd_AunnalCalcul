import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Input, Button } from 'antd';
import { useRecoilState } from 'recoil';
import { addEmployeeModalState } from '@/utill/atom';
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';

import { MngComponentsStyled, AddEmplModalBoxStyled } from '../styled';
import { useRouter } from 'next/router';
import { sideBarData } from '@/components/SideBar/controllor';

const AddEmployeeModal = () => {
    // F5 키 새로고침 차단(본 페이지로 이동)
    const router = useRouter();
    // menu이름찾기(module이름찾기 id===4 관리)
    // const moduleUrl = sideBarData.find((data) => data.id === 4);
    // console.log('AddEmployeeModal에서 moduleUrl',moduleUrl);
    // controllor에 있는 관리의 직원 찾기(id===1)
    // const childData = moduleUrl?.Children?.find((data) => data.id === 1);
    // const childDataUrl = childData?.url;
    // console.log('AddEmployeeModal에서 childDataUrl', childDataUrl);

    // Modal여닫기
    const [addEmployeeModalOpen, setaddEmployeeModalOpen] = useRecoilState(addEmployeeModalState);
    // console.log('AddEmployeeModal에서 addEmployeeModalOpen', addEmployeeModalOpen);

//    F5 키 새로고침 차단
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
                e.preventDefault();
                alert('페이지 새로고침은 곤란합니다.');
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // addEmployeeModalOpen의 상태가 바뀔 때마다 이 effect를 실행
    // useEffect(() => {
    //     const handleKeyDown = (e: KeyboardEvent) => {
    //         if ((e.key === 'F5' || (e.ctrlKey && e.key === 'r')) && addEmployeeModalOpen) {
    //             e.preventDefault(); 
    //             alert('페이지 새로고침이 차단되었습니다. 현재 모달이 열려 있습니다.');
    //         } else if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
    //             // 모달이 닫혀 있을 때는 새로고침 허용
    //             window.location.reload();
    //             router.push('/dashBoard/mng/employeeMng')
    //         }
    //     };

    //     window.addEventListener('keydown', handleKeyDown);

    //     return () => {
    //         window.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, [addEmployeeModalOpen]); 



    const style = {
        position: 'absolute',
        top: '10%',
        left: '10%',
        // transform: 'translate(-50%, -50%)',
        width: 1000,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [addedEmployee, setAddedEmployee] = useState<object[]>([]);
    // console.log('AddEmployeeModal에서 addedEmployee', addedEmployee);

    const addEmployeeFormik = useFormik({
        initialValues: {
            //사원번호
            emplNo: '',
            // 이름
            emplName: '',
            // 이메일
            emplEmail: '',
            // 소속조직이메일(선택사항)
            emplOrgEmail: '',
            // 직급(선택사항)
            emplRank: '',
            // 액세스 권한(선택으로 입력)
            emplAccessAuth: '',
            // 본조직(선택으로 입력)
            emplOrgOrganization: '',
            // 관리조직(선택으로 입력)
            emplMngOrganization: '',
            // 기초연차
            emplBeginningVacation: '',
            // 연차발생여부(체크박스 T/F 값)
            emplOccurrenceVacation: '',
            // 입사일
            emplJoinDate: '',
            // 퇴사여부
            emplRetire: '',
            // 퇴사일
            emplRetireDate: '',

            // 휴대폰번호
            emplPhoneNo: '',
        },
        onSubmit: (values) => {
            // if (values.empNo === '') {
            //     console.log('AddEmployeeModalDetail에서 뭐가 올까');

            //     return;
            // }
            const newAddedEmployee = { id: Date.now(), ...values };
            setAddedEmployee([...addedEmployee, newAddedEmployee]);
        },
    });
    // Modal창외 범위 클릭시 닫기
    const handleClose = () => {
        setaddEmployeeModalOpen(false);
    };

    // Modal 당기
    const registerEmpl = () => {
        setTimeout(() => {
            setaddEmployeeModalOpen(false);
        }, 0);
    };

    // 퇴사여부로 날짜 입력Box여닫기
    const [retireTextBoxClose, setRetireTextBoxClose] = useState<boolean>(false);
    // console.log('AddEmployeeModal에서 retireTextBoxClose', retireTextBoxClose);
    const [retireDateBoxOpen, setRetireDateBoxOpen] = useState<boolean>(false);
    // console.log('AddEmployeeModal에서 retireDateBoxOpen', retireDateBoxOpen);

    const retireBox = () => {
        setRetireTextBoxClose(!retireTextBoxClose);
        setRetireDateBoxOpen(!retireDateBoxOpen);
    };

    return (
        <MngComponentsStyled>
            <div>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal
                    open={addEmployeeModalOpen}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className="addEmplMuiModalBox">
                        <AddEmplModalBoxStyled>
                            {/* 입력 폼 */}
                            <form onSubmit={addEmployeeFormik.handleSubmit}>
                                <TextField
                                    className="addEmplTitleTextField"
                                    id="standard-basic"
                                    label="직원정보"
                                    variant="standard"
                                />
                                <div className="emplModalBox">
                                    <div className="emplBoxContents">사원 번호</div>

                                    <Input
                                        className="addEmplInputBox"
                                        name="emplNo"
                                        onChange={addEmployeeFormik.handleChange}
                                        value={addEmployeeFormik.values.emplNo}
                                        placeholder="사원번호(필수)"
                                    />
                                </div>

                                <div className="emplModalBox">
                                    <div className="emplBoxContents">직원 이름</div>
                                    <Input
                                        className="addEmplInputBox"
                                        name="emplName"
                                        onChange={addEmployeeFormik.handleChange}
                                        value={addEmployeeFormik.values.emplName}
                                        placeholder="직원 이름(필수)"
                                    />
                                </div>
                                <div className="emplModalBox">
                                    <div className="emplBoxContentsExp">
                                        직원
                                        <br />
                                        이메일 주소
                                    </div>
                                    <Input
                                        name="emplEmail"
                                        onChange={addEmployeeFormik.handleChange}
                                        value={addEmployeeFormik.values.emplEmail}
                                        placeholder="직원 이메일(필수)"
                                    />
                                    <div className="emplBoxContentsExp" style={{ marginLeft: 40 }}>
                                        소속 조직
                                        <br />
                                        이메일 주소
                                    </div>
                                    <Input
                                        name="emplOrgEmail"
                                        onChange={addEmployeeFormik.handleChange}
                                        value={addEmployeeFormik.values.emplOrgEmail}
                                        placeholder="소속 조직 이메일(선택)"
                                    />
                                </div>
                                <div className="emplModalBox">
                                    <div className="emplBoxContents">직급</div>
                                    <Input
                                        className="addEmplInputBox"
                                        name="emplRank"
                                        onChange={addEmployeeFormik.handleChange}
                                        value={addEmployeeFormik.values.emplRank}
                                        placeholder="직급(필수)"
                                    />
                                </div>
                                <div className="emplModalBox">
                                    <div className="emplBoxContents">액세스 권한</div>
                                    <Input
                                        className="addEmplInputBox"
                                        name="emplAccessAuth"
                                        onChange={addEmployeeFormik.handleChange}
                                        value={addEmployeeFormik.values.emplAccessAuth}
                                        placeholder="액세스 권한(필수)"
                                    />
                                </div>
                                <div className="emplModalBox">
                                    <div className="emplBoxContents">본조직</div>
                                    <Input
                                        className="addEmplInputBox"
                                        name="emplOrgOrganization"
                                        onChange={addEmployeeFormik.handleChange}
                                        value={addEmployeeFormik.values.emplOrgOrganization}
                                        placeholder="본조직(필수)"
                                    />
                                    <div className="emplBoxContents" style={{ marginLeft: 25, width: 100 }}>
                                        관리조직
                                    </div>
                                    <Input
                                        className="addEmplInputBox"
                                        name="emplMngOrganization"
                                        onChange={addEmployeeFormik.handleChange}
                                        value={addEmployeeFormik.values.emplMngOrganization}
                                        placeholder="관리조직(선택/조직장이라면 필수)"
                                    />
                                </div>
                                <div className="emplModalBox">
                                    <div className="emplBoxContents">기초연차</div>
                                    <Input
                                        className="addEmplInputBox"
                                        name="emplBeginningVacation"
                                        onChange={addEmployeeFormik.handleChange}
                                        value={addEmployeeFormik.values.emplBeginningVacation}
                                        placeholder="기초연차(필수/신규 입사는 0으로 입력)"
                                    />

                                    <FormControlLabel
                                        control={<Checkbox defaultChecked />}
                                        sx={{ marginLeft: 2, width: 600 }}
                                        label="연차발생여부(기본값:여)"
                                        name="emplMngOrganization"
                                        onChange={addEmployeeFormik.handleChange}
                                        value={addEmployeeFormik.values.emplOccurrenceVacation}
                                    />
                                </div>
                                <div className="emplModalBox">
                                    <div className="emplBoxContents" style={{ width: 160 }}>
                                        입사일
                                    </div>
                                    <Input
                                        className="addEmplInputBox"
                                        name="emplJoinDate"
                                        onChange={addEmployeeFormik.handleChange}
                                        value={addEmployeeFormik.values.emplJoinDate}
                                        placeholder="입사일(필수)"
                                    />
                                    <Checkbox
                                        // 퇴사여부 체크박스
                                        sx={{ marginLeft: 2 }}
                                        name="emplRetire"
                                        onChange={(e) => {
                                            addEmployeeFormik.handleChange(e);
                                            retireBox();
                                        }}
                                        value={addEmployeeFormik.values.emplRetire}
                                    />
                                    <div className={`emplRetireTextBox ${retireTextBoxClose ? 'hide' : 'show'}`}>
                                        퇴사여부
                                    </div>
                                    <div className={`emplRetireContentsBox ${retireDateBoxOpen ? 'show' : 'hide'}`}>
                                        <div className="emplBoxContents" style={{ width: 70 }}>
                                            퇴사일
                                        </div>
                                        <Input
                                            className="addEmplInputBox"
                                            name="emplRetireDate"
                                            onChange={addEmployeeFormik.handleChange}
                                            value={addEmployeeFormik.values.emplRetireDate}
                                            placeholder="퇴사일"
                                        />
                                    </div>
                                </div>
                                <div className="emplModalBox">
                                    <div className="emplBoxContents">전화번호</div>
                                    <Input
                                        className="addEmplInputBox"
                                        name="emplPhoneNo"
                                        onChange={addEmployeeFormik.handleChange}
                                        value={addEmployeeFormik.values.emplPhoneNo}
                                        placeholder="전화번호(필수)"
                                    />
                                    <div className="addComment">* 입력된 전화번호로 직원 합류 코드 발송 됩니다</div>
                                </div>
                                <br />
                                <div className="emplBtnBox">
                                    <Button id="closeBnt" htmlType="submit" onClick={handleClose}>
                                        닫기
                                    </Button>
                                    <Button id="saveBnt" htmlType="submit" onClick={registerEmpl}>
                                        저장
                                    </Button>
                                </div>
                            </form>
                        </AddEmplModalBoxStyled>
                    </Box>
                </Modal>
            </div>
        </MngComponentsStyled>
    );
};
export default AddEmployeeModal;
