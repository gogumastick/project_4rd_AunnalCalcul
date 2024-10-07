import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ToChangeText from './ToChangeText';
import { settingIcon, logoutIcon } from '@/utill/data';
import { NavBarStyled } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRecoilState } from 'recoil';
import { sideBarListTextState } from '@/utill/atom';
import { useRouter } from 'next/router';
import { sideBarData } from '../../components/SideBar/controllor';

interface NavBarProps {
    // sideBarListTextClose: boolean;
    // setSideBarListTextClose: (value: boolean) => void;

    // settingIcon: {
    //     id: number;
    //     name: string;
    //     src: {
    //         src: string;
    //     };
    // }[];
}

// Material UI출신
const NavBar = (
    // {sideBarListTextClose,setSideBarListTextClose}:NavBarProps
) => {
    const [sideBarListTextClose, setSideBarListTextClose] = useRecoilState(sideBarListTextState);

    // id값이 1인 settingIcon 찾기
    const settingImg = settingIcon.find((img) => img.id === 1);
    // console.log('아이콘 옵니까?',setIcon);

    const logoutImg = logoutIcon;
    // console.log('로그아웃 뭐라고 와?', logoutImg);

    // NavBar에 있는 토글버튼으로 SideBar 텍스트를 여닫자
    const SideBarTextClose =()=>{
        setSideBarListTextClose(!sideBarListTextClose)
    }

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
    // console.log('isPathAllowed는?',isPathAllowed);
    
    

    return (
        // <ThemeProvider theme={theme}>
        <NavBarStyled>
            <div className={`${isPathAllowed || path === '/dashBoard' ? '' : 'noneNavBar'}`}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="static"
                    // sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}
                    color="transparent"
                    // color="primary"
                >
                    {/* 배경색을 투명으로 설정 */}
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            // contrastText의 검은색 상속(부모 컴포넌트 색상을 내릴려했는데 이게 안되네)
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={SideBarTextClose}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        {/* contrastText의 검은색 상속 */}
                        {/* <Button color="inherit">Login</Button> */}

                        {/* MUI Icon 많네...일단 그냥 냅두자*/}
                        {/* https://mui.com/material-ui/material-icons/ */}
                        {/* 로그아웃img Bnt */}
                        {logoutIcon && (
                            <img
                                className="logoutBtn"
                                src={logoutIcon.src.src}
                                alt={logoutIcon.name}
                                // onClick={showModal}
                            />
                        )}
                        {/* 톱니바퀴img Bnt*/}
                        {settingImg && (
                            <img
                                className="settingsForNavBar"
                                src={settingImg.src.src}
                                alt={settingImg.name}
                                // onClick={showModal}
                            />
                        )}

                        <ToChangeText />
                    </Toolbar>
                </AppBar>
            </Box>
            </div>
            
        </NavBarStyled>

        // </ThemeProvider>
    );
};

export default NavBar;
