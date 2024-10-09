import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { documentsMenuState } from '@/utill/atom';
import { sideBarData } from '../../controllor';


interface MenuProps {
    // documentsOpen: boolean;
    
}

const DocumentsMenu = (
    // { documentsOpen }: MenuProps
) => {
    // console.log('DocumentsMenu에서 documentsOpen 값', documentsOpen);

    const [documentsMenuOpen] = useRecoilState(documentsMenuState)

    // sideBar > module > menu에 들어 갈 텍스트
    // const menuText = ['기안서 작성', '미결재', '결재현황'];
    // menu이름찾기(module이름찾기 id===4 관리임)
    const moduleName = sideBarData.find((data) => data.id === 4);
    const menuNames = moduleName?.Children || [];

    const router = useRouter();
    const choiceMenu = (url: string) => {
        // console.log('선택한 메뉴의 URL:', url);
        router.push(url);
    };

    return (
        // DopBox 만들어보자. menu에 보여질 항목들
        <div className={`${documentsMenuOpen ? 'menuBox show' : 'menuBox'}`}>
            <Box sx={{ maxWidth: '100%' }} >
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
export default DocumentsMenu;
