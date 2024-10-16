import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DocumentsMenu from './DocumentsMenu';
import { useRecoilState } from 'recoil';
import { documentsMenuState,sideBarListTextState } from '@/utill/atom';
import { sideBarData } from '../../controllor';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface ModuleProps {
    // documentsOpen: boolean;
    // setDocumentsOpen: (value: boolean) => void;
    // sideBarListTextClose: boolean;
    // setSideBarListTextClose: (value: boolean) => void;
}

const DocumentsModule = ( 
    // {documentsOpen, setDocumentsOpen, 
    // sideBarListTextClose, setSideBarListTextClose }: ModuleProps
) => {
    // console.log('DocumentsModule에 documentsOpen',documentsOpen);
    // module이름찾기 id===2 기안서임
    const moduleName = sideBarData.find(((data) => data.id === 2))

    const [documentsMenuOpen, setDocumentsMenuOpen] = useRecoilState(documentsMenuState)
    const [sideBarListTextClose, setSideBarListTextClose] = useRecoilState(sideBarListTextState);

    const DocumentsMenuOpen = () => {
        setDocumentsMenuOpen(!documentsMenuOpen);
        setSideBarListTextClose(false)
    };

    return (
        <>
            <div className="moduleBox">
                <ListItem disablePadding onClick={DocumentsMenuOpen}>
                    <ListItemButton>
                        <ListItemIcon className="sideBarIcon">
                            <DescriptionOutlinedIcon />
                        </ListItemIcon>

                        <ListItemText
                            className={`sideBarListText ${sideBarListTextClose ? 'hide' : 'show'}`}
                            primary={moduleName?.name}
                        />
                        {documentsMenuOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>

                {/* sideBar > module 클릭해서 보여줄 내용 */}
                <DocumentsMenu
                //  documentsOpen={documentsOpen}
                  />
            </div>
        </>
    );
};
export default DocumentsModule;
