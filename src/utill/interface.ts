// 등록된 직원 정보(typescript)
export interface addedEmployeeInterface {
    id: number,

    //사원번호
    emplNo: number,
    // 이름
    emplName: string,
    // 직급
    emplRank: string,
    // 이메일
    emplEmail: string,
    // 소속조직이메일(선택사항)
    emplOrgEmail: string,
    // 액세스 권한(선택으로 입력)
    emplAccessAuth: string,
    // 본조직(선택으로 입력)
    emplOrgOrganization: string,
    // 관리조직(선택으로 입력)
    emplMngOrganization: string,
    // 기초연차
    emplBeginningVacation: number,
    // 연차발생여부(체크박스 T/F 값)
    emplOccurrenceVacation: boolean,
    // 입사일
    emplJoinDate: number,
    // 퇴사여부
    emplRetire: number,
    // 퇴사일
    emplRetireDate: number,
    // 휴대폰번호
    emplPhoneNo: number,
  }

  type Order = 'asc' | 'desc';
  // 직원 정보data
  export interface EmplInfoDataInterface {
    id: number;
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
}

// 조회된 직원 정보 HeadLine
export interface EmplInfoDataHeadCell {
  disablePadding: boolean;
  id: keyof EmplInfoDataInterface;
  label: string;
  numeric: boolean;
}

// 조회된 직원정보 테이블Props???
export interface EmplInfoDataTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof EmplInfoDataInterface) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

// 조회된 직원정보 테이블Toolbar
export interface EmplInfoTableToolbarProps {
  numSelected: number;
}