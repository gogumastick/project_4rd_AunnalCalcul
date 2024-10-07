import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { vacationMenuState } from '@/utill/atom';
import { sideBarData } from '../../controllor';

interface MenuProps {
    // vacationOpen: boolean;
    // sideBarListTextClose: boolean;
}

const VacationMenu = () =>
    // { vacationOpen }: MenuProps
    {
        // console.log('VacationMenu에서 vacationOpen 값', vacationOpen);

        const [vacationMenuOpen] = useRecoilState(vacationMenuState);

        // sideBar > module > menu에 들어 갈 텍스트
        // const menuText = ['휴가현황', '잔여연차', '휴가신청', '미결재', '결재현황'];
        // menu이름찾기
        const moduleName = sideBarData.find((data) => data.id === 3);
        const menuNames = moduleName?.Children || [];
        // console.log('menu찾기(배열로)', menuNames);

        // 해당 menu를 클릭했을 때 원하는 내용이 MainArea에 나오게 만들어 보자
        const router = useRouter();
        // const path = router.asPath;

        // menu에서 선택
        const choiceMenu = (url: string) => {
            // console.log('선택한 메뉴의 URL:', url);
            router.push(url);
        };
        // const choiceMenu = (moduleName: string, menuName: string) => {
        //     console.log('choiceMenu에 무슨 값이 오지?',moduleName, menuName);
        //     router.push(`/dashBoard/${moduleName}`);
        //     console.log('choiceMenu 작동은 되는가?');

        // };

        return (
            // DopBox 만들어보자. menu에 보여질 항목들
            <div className={`${vacationMenuOpen ? 'menuBox show' : 'menuBox'}`}>
                <Box sx={{ maxWidth: '100%' }}>
                    {/* Menu에 들어갈 Icon과 텍스트를 담아서 map으로 풀자 */}
                    <MenuList>
                        {menuNames.map((menuName, index) => (
                            // key 속성으로 index 또는 고유한 값 사용
                            <MenuItem
                                key={index}
                                onClick={() => {
                                    choiceMenu(menuName.url);
                                }}
                            >
                                <ListItemIcon>
                                    <ArrowRightOutlinedIcon fontSize="small" />
                                </ListItemIcon>
                                {/* 텍스트 상속(primary) 받아서 */}
                                <ListItemText primary={menuName.name} />
                            </MenuItem>
                        ))}
                    </MenuList>
                </Box>
            </div>
        );
    };
export default VacationMenu;
