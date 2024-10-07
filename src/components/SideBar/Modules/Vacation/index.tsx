import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import VacationMenu from './VacationMenu';

import { useRecoilState } from 'recoil';
import { vacationMenuState,sideBarListTextState } from '@/utill/atom';
import { sideBarData } from '../../controllor';


interface ModuleProps {
    // vacationOpen: boolean;
    // setVacationOpen: (value: boolean) => void;
    // sideBarListTextClose: boolean;
    // setSideBarListTextClose: (value: boolean) => void;
}

const VacationModule = (
    //  { vacationOpen, setVacationOpen,
    //  sideBarListTextClose,setSideBarListTextClose }: ModuleProps
    ) => {
    // console.log('VacationModule에 vacationOpen',vacationOpen);
    // console.log('VacationModule에 sideBarListTextClose', sideBarListTextClose);

    // module이름찾기 id===3 연차임
    const moduleName = sideBarData.find(((data) => data.id === 3))
    // console.log('module이름찾기',moduleName?.name);
    

    const [vacationMenuOpen, setVacationMenuOpen] =useRecoilState(vacationMenuState)
    const [sideBarListTextClose, setSideBarListTextClose] = useRecoilState(sideBarListTextState);

    const VacationMenuOpen = () => {
        // 모듈 하단 menu open
        // setVacationOpen(!vacationOpen);
        setVacationMenuOpen(!vacationMenuOpen)

        // TopBar에 있는 토글버튼 값이 false로 SideBar 텍스트를 열자
        setSideBarListTextClose(false)
    };

    return (
        <>
            <div className="moduleBox">
                <ListItem disablePadding onClick={VacationMenuOpen}>
                    <ListItemButton>
                        <ListItemIcon className="sideBarIcon">
                        {/* 해당 아이콘 그림 */}
                            <AirplanemodeActiveOutlinedIcon className="rotatedAirplanemodeActiveOutlinedIcon" />
                        </ListItemIcon>

                        <ListItemText
                        // sideBarListTextClose값이 true면 글자가 안보이게 하자
                            className={`sideBarListText ${sideBarListTextClose ? 'hide' : 'show'}`}
                            primary={moduleName?.name}
                        />
                    </ListItemButton>
                </ListItem>

                {/* sideBar > module 클릭해서 보여줄 내용 */}
                <VacationMenu 
                //  vacationOpen={vacationOpen} 
                 />
            </div>
        </>
    );
};
export default VacationModule;
