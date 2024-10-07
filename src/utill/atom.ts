import { atom } from 'recoil';

// props drilling 없애보자
export const sideBarListTextState = atom({
    key : 'uniqueSideBarListTextClose',
    default : false,
})

export const homeMenuState = atom({
    key : 'homeMenuOpen',
    default : false,
})
export const documentsMenuState = atom({
    key : 'documentsMenuOpen',
    default : false,
})
export const vacationMenuState = atom({
    key : 'vacationMenuOpen',
    default : false,
})
export const mngMenuState = atom({
    key : 'mngMenuOpen',
    default : false,
})
export const companyProfileMenuState = atom({
    key : 'companyProfileMenuOpen',
    default : false,
})

// 직원추가 모달창
export const addEmployeeModalState = atom({
    key : 'addEmployeeModalOpen',
    default : false,
})
