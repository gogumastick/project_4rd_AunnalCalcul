import { useFormik } from 'formik';
import { Button, Input, message, notification } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { addEmployeeModalState} from '@/utill/atom';



const AddEmployeeModalDetail =()=>{
    // const [addEmployeeModalOpen, setaddEmployeeModalOpen] =useRecoilState(addEmployeeModalState)

    const [addedEmployee, setAddedEmployee] = useState<object[]>([]);
    // console.log('AddEmployeeModalDetail에서 addEmployee', addedEmployee);

    // 직원추가 양식
     const addEmployeeFormik = useFormik({
        initialValues: {
            //사원번호
            empNo: '',
            // 이름
            empName: '',
            // 이메일
            empEmail: '',
            // 액세스 권한(선택으로 입력)
            empAccessAuth: '',
            //  본조직(선택으로 입력)
            empOrgOrganization: '',
            // 관리조직(선택으로 입력)
            empMngOrganization: '',
            // 기초연차
            empBeginningVacation: '',
            // 입사일
            empJoinDate: '',
            // 퇴사일
            empRetirementDate: '',
            // 연차발생여부(체크박스 T/F 값)
            empOccurrenceVacation: '',
            // 직급
            empRank: '',
            // 휴대폰번호
            empPhoneNo: '',

        },
        onSubmit: (values) => {
            // if (values.empNo === '') {
            //     console.log('AddEmployeeModalDetail에서 뭐가 올까');

            //     return;
            // }
            const newAddedEmployee = { id: Date.now(), ...values };
            setAddedEmployee([...addedEmployee, newAddedEmployee]);


            // 모달 닫기
            // handleClose();
        },
        // onSubmit: (values) => {
        //     const newAddEmployee = { id: Date.now(), ...values };
        //     setAddedEmployee((prev) => {
        //         const updatedList = [...prev, newAddEmployee];
        //         // 업데이트된 직원 목록을 로그에 출력
        //         // console.log('업데이트된 직원 목록:', updatedList); 
        //         return updatedList;
        //     });

        //     // 모달 닫기
        //     // handleClose();
        // },
        
    });

    // const handleClose = () => setaddEmployeeModalOpen(false);
    return(<>
        <div>
        {/* 입력 폼 */}
        <form onSubmit={addEmployeeFormik.handleSubmit}>
                <Input
                    name="empNo"
                    onChange={addEmployeeFormik.handleChange}
                    value={addEmployeeFormik.values.empNo}
                    placeholder="직원 이름(필수)"
                    // required
                />
                <Button htmlType="submit"
                 
                 >등록</Button>
                
            </form>
        </div>
       
       
        </>)
    
}
export default AddEmployeeModalDetail