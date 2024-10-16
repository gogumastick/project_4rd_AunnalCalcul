import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

// 함수
import { GetComparatorFnc } from '@/utill/Fnc';
// 인터페이스
import { EmplInfoDataInterface } from '@/utill/interface';

import { useRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';
import { addedEmployeeState } from '@/utill/atom';

// 등록된 직원정보 addedEmployee값
import CreatedEmplList from './CreatedEmplList';
// 조회된 직원 정보 HeadLine
import { EmplInfoHeadCells } from './EmplInfoHeadCells';
// console.log('EmployeeInfo에 EmplInfoHeadCells이 어떻게 와?',EmplInfoHeadCells);
// Table Sort??
import EmplInfoDataTableHead from './EmplInfoTableHead';
// 직원조회 테이블head글자와 버튼
import EmplInfoTableToolbar from './EmplInfoTableToolbar';

type Order = 'asc' | 'desc';

const rows = [
    CreatedEmplList(1, 'Cupcake', 305, 3.7, 67, 4.3),
    CreatedEmplList(2, 'Donut', 452, 25.0, 51, 4.9),
    CreatedEmplList(3, 'Eclair', 262, 16.0, 24, 6.0),
    CreatedEmplList(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
    CreatedEmplList(5, 'Gingerbread', 356, 16.0, 49, 3.9),
    CreatedEmplList(6, 'Honeycomb', 408, 3.2, 87, 6.5),
    CreatedEmplList(7, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
    CreatedEmplList(8, 'Jelly Bean', 375, 0.0, 94, 0.0),
    CreatedEmplList(9, 'KitKat', 518, 26.0, 65, 7.0),
    CreatedEmplList(10, 'Lollipop', 392, 0.2, 98, 0.0),
    CreatedEmplList(11, 'Marshmallow', 318, 0, 81, 2.0),
    CreatedEmplList(12, 'Nougat', 360, 19.0, 9, 37.0),
    CreatedEmplList(13, 'Oreo', 437, 18.0, 63, 4.0),
];

// MUI table
const EmployeeInfo = () => {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof EmplInfoDataInterface>('calories');
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof EmplInfoDataInterface) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            [...rows]
                .sort(GetComparatorFnc(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [order, orderBy, page, rowsPerPage]
    );
    return (
        <>
            <div> 직원 정보가 조회되게</div>

            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                    <EmplInfoTableToolbar numSelected={selected.length} />
                    <TableContainer>
                        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
                            <EmplInfoDataTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {visibleRows.map((row, index) => {
                                    const isItemSelected = selected.includes(row.id);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.id)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isItemSelected}
                                            sx={{ cursor: 'pointer' }}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                        </TableRow>
                                    );
                                })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: (dense ? 33 : 53) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
                <FormControlLabel
                    control={<Switch checked={dense} onChange={handleChangeDense} />}
                    label="Dense padding"
                />
            </Box>
        </>
    );
};
export default EmployeeInfo;
