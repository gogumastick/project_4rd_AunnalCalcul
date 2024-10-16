
// 직원 조회 화면 만드는 함수
// 내림차순 비교 함수
export const DescendFnc = <T>(a: T, b: T, orderBy: keyof T): 1 | -1 | 0 => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

// 직원 조회 화면에서 사용하는 비교 함수
type Order = 'asc' | 'desc';
export const GetComparatorFnc = <Key extends keyof any>(
    order: Order,
    orderBy: Key
): ((a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number) => {
    return order === 'desc'
        ? (a, b) => DescendFnc(a, b, orderBy)
        : (a, b) => -DescendFnc(a, b, orderBy);
};



