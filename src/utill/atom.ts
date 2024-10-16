import { atom } from 'recoil';
import { EmplInfoDataInterface } from './interface';

// props drilling 없애보자
export const sideBarListTextState = atom({
    key : 'sideBarListTextClose',
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


// 등록된 직원 정보
export const addedEmployeeState = atom<object[]>({
    key : 'addedEmployee',
    default : [],
})

// 직원정보 조회에 사용할 props
export const EmplInfoDataState = atom<EmplInfoDataInterface[]>({
    key: 'EmplInfoDataState', // 고유한 키 설정
    default: [], // 초기 상태는 빈 배열로 설정
  });
