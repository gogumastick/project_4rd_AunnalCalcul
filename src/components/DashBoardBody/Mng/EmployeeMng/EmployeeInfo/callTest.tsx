import { useRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';
import { addedEmployeeState } from '@/utill/atom';

const CallTest = () => {
    const [addedEmployee, setAddedEmployee] = useRecoilState(addedEmployeeState);
// Recoil에서 addedEmployeeState 값을 가져옴
// const addedEmployee = useRecoilValue(addedEmployeeState); 
const emplList = addedEmployee ;
console.log('EmployeeInfo에서 받는 addedEmployee값',emplList);
    return (
        <>
            <div>테스트중</div>
        </>
    );
};
export default CallTest;
