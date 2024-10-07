import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import MngMenu from './MngMenu';
import { useRecoilState } from 'recoil';
import { mngMenuState,sideBarListTextState } from '@/utill/atom';
import { sideBarData } from '../../controllor';

interface ModuleProps {
    // mngOpen: boolean;
    // setMngOpen: (value: boolean) => void;
    // sideBarListTextClose: boolean;
    // setSideBarListTextClose: (value: boolean) => void;
}

const MngModule = (
    //  { mngOpen, setMngOpen, 
    //  sideBarListTextClose,setSideBarListTextClose }: ModuleProps
    ) => {
    // console.log('MngModule에 mngOpen',mngOpen);

    // module이름찾기 id===4 관리임
    const moduleName = sideBarData.find(((data) => data.id === 4))

    const [mngMenuOpen, setMngMenuOpen] = useRecoilState(mngMenuState)
    const [sideBarListTextClose, setSideBarListTextClose] = useRecoilState(sideBarListTextState);

    const MngMenuOpen = () => {
        setMngMenuOpen(!mngMenuOpen);
        setSideBarListTextClose(false)
    };

    return (
        <>
            <div className="moduleBox">
                <ListItem disablePadding onClick={MngMenuOpen}>
                    <ListItemButton>
                        <ListItemIcon className="sideBarIcon">
                            <SettingsSuggestOutlinedIcon />
                        </ListItemIcon>

                        <ListItemText
                            className={`sideBarListText ${sideBarListTextClose ? 'hide' : 'show'}`}
                            primary={moduleName?.name}
                        />
                    </ListItemButton>
                </ListItem>

                {/* sideBar > module 클릭해서 보여줄 내용 */}
                <MngMenu 
                // mngOpen={mngOpen}
                 />
            </div>
        </>
    );
};
export default MngModule;
