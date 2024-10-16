import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import Box from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';
import { EmplInfoDataInterface, EmplInfoDataTableProps } from '@/utill/interface'
// 조회된 직원 정보 HeadLine
import { EmplInfoHeadCells } from './EmplInfoHeadCells';
// console.log('EmployeeInfo에 EmplInfoHeadCells이 어떻게 와?',EmplInfoHeadCells);

// 테이블의 열 헤더와 선택/정렬
const EmplInfoDataTableHead=(props: EmplInfoDataTableProps)=> {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property: keyof EmplInfoDataInterface) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {EmplInfoHeadCells.map((EmplInfoHeadCells) => (
                    <TableCell
                        key={EmplInfoHeadCells.id}
                        align={EmplInfoHeadCells.numeric ? 'right' : 'left'}
                        padding={EmplInfoHeadCells.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === EmplInfoHeadCells.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === EmplInfoHeadCells.id}
                            direction={orderBy === EmplInfoHeadCells.id ? order : 'asc'}
                            onClick={createSortHandler(EmplInfoHeadCells.id)}
                        >
                            {EmplInfoHeadCells.label}
                            {orderBy === EmplInfoHeadCells.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
export default EmplInfoDataTableHead