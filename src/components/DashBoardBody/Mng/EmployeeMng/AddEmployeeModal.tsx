import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useRecoilState } from 'recoil';
import { addEmployeeModalState} from '@/utill/atom';
import AddEmployeeModalDetail from './AddEmployeeModaldetail';

const AddEmployeeModal =()=>{
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      // Modal여닫기
      const [addEmployeeModalOpen, setaddEmployeeModalOpen] =useRecoilState(addEmployeeModalState)
      // Modal창외 범위 클릭시 닫기 
      const handleClose = () => setaddEmployeeModalOpen(false);

    return(<div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={addEmployeeModalOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          
        >
          <Box sx={style}>
            {/* <AddEmployeeModalDetail/> */}
            
          </Box>
        </Modal>
      </div>);
}
export default AddEmployeeModal
