import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useRecoilState } from 'recoil';
import { sideBarListTextState } from '@/utill/atom';
import { sideBarData } from '../../controllor';
import { useRouter } from 'next/router';

interface ModuleProps {
    // homeOpen: boolean;
    // setHomeOpen: (value: boolean) => void;
    sideBarListTextClose: boolean;
    // setSideBarListTextClose: (value: boolean) => void;
}

const HomeModule = () =>
    // { homeOpen, setHomeOpen,
    // sideBarListTextClose, setSideBarListTextClose }: ModuleProps
    {
        // console.log('HomeModule에 homeOpen',homeOpen);

        // module이름찾기 id===1 홈임
        const moduleName = sideBarData.find((data) => data.id === 1);
        // console.log('moduleURL찾기', moduleName?.url);

        // const [homeMenuOpen , setHomeMenuOpen] = useRecoilState(homeMenuState)
        const [sideBarListTextClose, setSideBarListTextClose] = useRecoilState(sideBarListTextState);

        // const HomeMenuOpen = () => {
        //     setHomeMenuOpen(!homeMenuOpen);
        //     setSideBarListTextClose(false)
        // };

        // module에서 선택
        const router = useRouter();
        const choiceModule = (url: string) => {
            // console.log('선택한 메뉴의 URL:', url);
            router.push(url);
        };

        return (
            <>
                <div className="moduleBox">
                    <ListItem
                        disablePadding
                        onClick={() => {
                            // moduleName?.url이 존재하는 경우에만 choiceModule 실행
                            if (moduleName?.url) {
                                choiceModule(moduleName.url);
                            } else {
                                console.warn('URL이 정의되지 않았습니다.');
                            }
                        }}
                    >
                        <ListItemButton>
                            <ListItemIcon className="sideBarIcon">
                                <HomeOutlinedIcon />
                            </ListItemIcon>

                            <ListItemText
                                className={`sideBarListText ${sideBarListTextClose ? 'hide' : 'show'}`}
                                primary={moduleName?.name}
                            />
                        </ListItemButton>
                    </ListItem>
                </div>
                {/* sideBar > module 클릭해서 보여줄 내용 */}
                
            </>
        );
    };
export default HomeModule;
