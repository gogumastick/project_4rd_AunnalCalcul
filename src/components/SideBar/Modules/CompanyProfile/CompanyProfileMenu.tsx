import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { companyProfileMenuState } from '@/utill/atom';
import { sideBarData } from '../../controllor';

interface MenuProps {
    // companyProfileOpen: boolean;
}

const CompanyProfileOpenMenu = () =>
    // { companyProfileOpen }: MenuProps
    {
        // console.log('CompanyProfileMenu에서 companyProfileOpen 값', companyProfileOpen);

        const [companyProfileMenuOpen] = useRecoilState(companyProfileMenuState);

        // sideBar > module > menu에 들어 갈 텍스트
        // const menuText = ['일반', '초기화'];
        // menu이름찾기
        const moduleName = sideBarData.find((data) => data.id === 5);
        const menuNames = moduleName?.Children || [];
        // console.log('menu찾기(배열로)', menuNames);

        // 해당 menu를 클릭했을 때 원하는 내용이 MainArea에 나오게 만들어 보자
        const router = useRouter();
        // menu에서 선택
        const choiceMenu = (url: string) => {
            // console.log('선택한 메뉴의 URL:', url);
            router.push(url);
        };

        return (
            // DopBox 만들어보자. menu에 보여질 항목들
            <div className={`${companyProfileMenuOpen ? 'menuBox show' : 'menuBox'}`}>
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
export default CompanyProfileOpenMenu;
