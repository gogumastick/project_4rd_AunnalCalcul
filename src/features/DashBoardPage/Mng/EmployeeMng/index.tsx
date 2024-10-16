import * as React from 'react';
import EmployeeMngTopBtn from '@/components/DashBoardBody/Mng/EmployeeMng/MngTopBtn';
import { DashBoardPageStyled } from '../../styled';
import { MngPageStyled } from '../styled';
import { sideBarData } from '@/components/SideBar/controllor';
// import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import AddEmployeeModal from '@/components/DashBoardBody/Mng/EmployeeMng/AddEmployeeModal';
import EmployeeInfo from '@/components/DashBoardBody/Mng/EmployeeMng/EmployeeInfo';
import CallTest from '@/components/DashBoardBody/Mng/EmployeeMng/EmployeeInfo/callTest';


const EmployeeMngPage = () => {
    // module이름찾기 id===4 관리임
    const moduleName = sideBarData.find((data) => data.id === 4);
    const menuName = moduleName?.Children?.find((data) => data.id === 1);
    // console.log('menuName 이름 찾기', menuName);

    return (
        <DashBoardPageStyled>
            <div className="MainWrap">
                
                <MngPageStyled>
                    {/* 페이지 상단 이름과 Btn */}
                    <div className="TopArea">
                        <div className="pageTile">
                            {moduleName?.name && menuName?.name
                                ? `⚡ ${menuName.name} ${moduleName.name}`
                                : '이름을 잃었습니다.'}
                        </div>
                        <div><EmployeeMngTopBtn /></div>
                        
                    </div>

                    {/* 직원 정보 조회된 화면 */}
                    <div className="bodyArea">
                        <EmployeeInfo/>
                        {/* <CallTest/> */}
                    </div>
                    
                    <AddEmployeeModal/>
                </MngPageStyled>
            </div>
        </DashBoardPageStyled>
    );
};
export default EmployeeMngPage;
