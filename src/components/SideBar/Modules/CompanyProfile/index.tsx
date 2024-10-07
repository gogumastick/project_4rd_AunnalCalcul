import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import CompanyProfileMenu from './CompanyProfileMenu';
import { useRecoilState } from 'recoil';
import { companyProfileMenuState,sideBarListTextState } from '@/utill/atom';
import { sideBarData } from '../../controllor';

interface ModuleProps {
    // companyProfileOpen: boolean;
    // setCompanyProfileOpen: (value: boolean) => void;
    // sideBarListTextClose: boolean;
    // setSideBarListTextClose: (value: boolean) => void;
}

const CompanyProfileModule = ( 
    // {companyProfileOpen, setCompanyProfileOpen,
    // sideBarListTextClose,  setSideBarListTextClose }: ModuleProps
) => {
    // console.log('CompanyProfileModule에 companyProfileOpen', companyProfileOpen);

    // module이름찾기 id===5 연차임
    const moduleName = sideBarData.find(((data) => data.id === 5))

    const [companyProfileMenuOpen, setCompanyProfileMenuOpen] = useRecoilState(companyProfileMenuState)
    const [sideBarListTextClose, setSideBarListTextClose] = useRecoilState(sideBarListTextState);

    const CompanyProfileMenuOpen = () => {
        setCompanyProfileMenuOpen(!companyProfileMenuOpen);
        setSideBarListTextClose(false)
    };

    return (
        <>
            <div className="moduleBox">
                <ListItem disablePadding onClick={CompanyProfileMenuOpen}>
                    <ListItemButton>
                        <ListItemIcon className="sideBarIcon">
                            <ManageAccountsOutlinedIcon />
                        </ListItemIcon>

                        <ListItemText
                            className={`sideBarListText ${sideBarListTextClose ? 'hide' : 'show'}`}
                            primary={moduleName?.name}
                        />
                    </ListItemButton>
                </ListItem>

                {/* sideBar > module 클릭해서 보여줄 내용 */}
                <CompanyProfileMenu 
                // companyProfileOpen={companyProfileOpen} 
                />
            </div>
        </>
    );
};
export default CompanyProfileModule;
