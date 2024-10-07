import * as React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { SideBarStyled } from './styled';
import MngModule from './Modules/Mng';
import { useEffect } from 'react';
import CompanyProfileModule from './Modules/CompanyProfile';
import VacationModule from './Modules/Vacation';
import DocumentsModule from './Modules/Documents';
import HomeModule from './Modules/Home';
// Recoil 전역 변수 사용
import { useRecoilState } from 'recoil';
import {
    homeMenuState,
    documentsMenuState,
    vacationMenuState,
    mngMenuState,
    companyProfileMenuState,
    sideBarListTextState,
} from '@/utill/atom';
import { useRouter } from 'next/router';
import { sideBarData } from './controllor';

interface SideBarProps {
    // sideBarListTextClose: boolean;
    // setSideBarListTextClose: (value: boolean) => void;
}

// Material UI Draw(List)와 Icon IconMenu를 조합해보자
const SideBar = () =>
    // {sideBarListTextClose,setSideBarListTextClose }:SideBarProps
    {
        // console.log는 vacation을 만들면서 찍어보고 다른 module을 만들었음

        const router = useRouter();
        const path = router.asPath;
        // console.log('asPath 정체',path);

        // sideBarData에서 모든 URL 경로를 추출하여 경로 검사(allowedPaths에는 모든 URL이 담긴다)
        const allowedPaths = sideBarData.reduce((acc: string[], item) => {
            // item의 url을 먼저 넣고, Children이 있으면 그 안의 url들도 모두 acc에 넣어
            if (item.url) acc.push(item.url);
            // console.log('if함수에',item.url);

            if (item.Children) {
                const childUrls = item.Children.map((child) => child.url);
                acc.push(...childUrls);
            }
            // console.log('if Children함수에',item.Children);
            return acc;
        }, []);
        // console.log('allowedPaths',allowedPaths);

        // 현재 경로(path)가 allowedPaths 배열에 포함되어 있는지 검사
        const isPathAllowed = allowedPaths.includes(path);
        // console.log('isPathAllowed는?', isPathAllowed);

        // Menu 여닫기
        // const [homeOpen , setHomeOpen] = useState<boolean>(false);
        // const [documentsOpen, setDocumentsOpen] = useState<boolean>(false);
        // const [vacationOpen, setVacationOpen] = useState<boolean>(false);
        // const [mngOpen, setMngOpen] = useState<boolean>(false);
        // console.log('바뀌나?',mngOpen);
        // const [companyProfileOpen, setCompanyProfileOpen] = useState<boolean>(false);

        // Recoil로 변경(전환)
        const [homeMenuOpen, setHomeMenuOpen] = useRecoilState(homeMenuState);
        const [documentsMenuOpen, setDocumentsMenuOpen] = useRecoilState(documentsMenuState);
        const [vacationMenuOpen, setVacationMenuOpen] = useRecoilState(vacationMenuState);
        const [mngMenuOpen, setMngMenuOpen] = useRecoilState(mngMenuState);
        const [companyProfileMenuOpen, setCompanyProfileMenuOpen] = useRecoilState(companyProfileMenuState);

        // sideBarListText 닫자
        const [sideBarListTextClose] = useRecoilState(sideBarListTextState);

        // sideBar module를 클릭하면 다른 module menu 닫기
        useEffect(() => {
            if (sideBarListTextClose) {
                setHomeMenuOpen(false);
                setDocumentsMenuOpen(false);
                setVacationMenuOpen(false);
                setMngMenuOpen(false);
                setCompanyProfileMenuOpen(false);
            }
        }, [sideBarListTextClose]);

        useEffect(() => {
            if (homeMenuOpen) {
                setDocumentsMenuOpen(false);
                setVacationMenuOpen(false);
                setMngMenuOpen(false);
                setCompanyProfileMenuOpen(false);
            }
        }, [homeMenuOpen]);

        useEffect(() => {
            if (documentsMenuOpen) {
                setHomeMenuOpen(false);
                setVacationMenuOpen(false);
                setMngMenuOpen(false);
                setCompanyProfileMenuOpen(false);
            }
        }, [documentsMenuOpen]);

        useEffect(() => {
            if (vacationMenuOpen) {
                setHomeMenuOpen(false);
                setDocumentsMenuOpen(false);
                setMngMenuOpen(false);
                setCompanyProfileMenuOpen(false);
            }
        }, [vacationMenuOpen]);

        useEffect(() => {
            if (mngMenuOpen) {
                setHomeMenuOpen(false);
                setDocumentsMenuOpen(false);
                setVacationMenuOpen(false);
                setCompanyProfileMenuOpen(false);
            }
        }, [mngMenuOpen]);

        useEffect(() => {
            if (companyProfileMenuOpen) {
                setHomeMenuOpen(false);
                setDocumentsMenuOpen(false);
                setVacationMenuOpen(false);
                setMngMenuOpen(false);
            }
        }, [companyProfileMenuOpen]);

        return (
            <SideBarStyled>
                <div className={`${isPathAllowed || path === '/dashBoard' ? '' : 'noneSideBar'}`}>
                    {/* TopBar에 있는 토글버튼을 클릭하면 SideBar의 글씨가 안보이게  */}
                    <div className={`sideBarBox ${sideBarListTextClose ? 'hide' : 'show'}`}>
                        <List>
                            {/* 뭐 어떻게든 쓸 module */}
                            <HomeModule
                            // sideBarListTextClose={sideBarListTextClose}
                            // setSideBarListTextClose={setSideBarListTextClose}
                            // homeOpen={homeOpen} setHomeOpen={setHomeOpen}
                            />
                            <DocumentsModule
                            // sideBarListTextClose={sideBarListTextClose}
                            // setSideBarListTextClose={setSideBarListTextClose}
                            // documentsOpen={documentsOpen} setDocumentsOpen={setDocumentsOpen}
                            />
                            <VacationModule
                            // sideBarListTextClose={sideBarListTextClose}
                            // setSideBarListTextClose={setSideBarListTextClose}
                            // vacationOpen={vacationOpen} setVacationOpen={setVacationOpen}
                            />
                            {/* Divider == 구분선 같은 선 */}
                            <Divider className="Divider" />
                            {/* 관리용 module */}
                            <MngModule
                            // sideBarListTextClose={sideBarListTextClose}
                            // setSideBarListTextClose={setSideBarListTextClose}
                            // mngOpen={mngOpen} setMngOpen={setMngOpen}
                            />
                            <CompanyProfileModule
                            // sideBarListTextClose={sideBarListTextClose}
                            // setSideBarListTextClose={setSideBarListTextClose}
                            // companyProfileOpen={companyProfileOpen}
                            // setCompanyProfileOpen={setCompanyProfileOpen}
                            />
                        </List>

                        {/* module 안에 Menu 넣을려니깐 안되겠다. 하나씩 컴포넌트로 넣어야지. 코드는 위에 입력*/}
                        {/* <Divider />
                <List>
                    {['관리', '회사설정'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                            <ListItemIcon className='sideBarIcon'>{[<SettingsSuggestOutlinedIcon />, <ManageAccountsOutlinedIcon />][index]}</ListItemIcon>

                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <List>
                    {['홈', '기안서', '연차'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                아이콘 배열을 만들어 index에 맞춰 아이콘을 출력
                                <ListItemIcon className='sideBarIcon'>{[<HomeOutlinedIcon />, <DescriptionOutlinedIcon />, <AirplanemodeActiveOutlinedIcon className='rotatedAirplanemodeActiveOutlinedIcon'/>][index]}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['관리', '회사설정'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                            <ListItemIcon className='sideBarIcon'>{[<SettingsSuggestOutlinedIcon />, <ManageAccountsOutlinedIcon />][index]}</ListItemIcon>

                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List> */}
                    </div>
                </div>
            </SideBarStyled>
        );
    };
export default SideBar;

