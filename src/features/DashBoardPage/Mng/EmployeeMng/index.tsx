import * as React from 'react';
import EmployeeMngTopBtn from '@/components/DashBoardBody/Mng/EmployeeMng/MngTopBtn';
import { DashBoardPageStyled } from '../../styled';
import { MngPageStyled } from '../styled';
import { sideBarData } from '@/components/SideBar/controllor';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import AddEmployeeModal from '@/components/DashBoardBody/Mng/EmployeeMng/AddEmployeeModal';

const EmployeeMngPage = () => {
    // module이름찾기 id===4 관리임
    const moduleName = sideBarData.find((data) => data.id === 4);
    const menuName = moduleName?.Children?.find((data) => data.id === 1);
    // console.log('menuName 이름 찾기', menuName);

    return (
        <DashBoardPageStyled>
            <div className="MainWrap">
                
                <MngPageStyled>
                    <div className="TopArea">
                        <div className="pageTile">
                            {moduleName?.name && menuName?.name
                                ? `⚡ ${menuName.name} ${moduleName.name}`
                                : '이름을 잃었습니다.'}
                        </div>
                        <div><EmployeeMngTopBtn /></div>
                        
                    </div>
                    <div className="bodyArea"></div>
                    <AddEmployeeModal/>
                </MngPageStyled>
            </div>
        </DashBoardPageStyled>
    );
};
export default EmployeeMngPage;
