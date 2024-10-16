

export const sideBarData = [

    {
        id: 1,
        name:'홈(N/A)',
        url: '/dashBoard/home'
    },
    {
        id:2,
        name:'기안서(N/A)',
        Children:[
            {
                id:1,
                name:'기안서 작성',
                url:'/dashBoard/documents/writingDocu'
            },
            {
                id:2,
                name:'미결재',
                url:'/dashBoard/documents/unapprovedDocu'
            },
            {
                id:3,
                name:'결재현황',
                url:'/dashBoard/documents/approvedDocu'
            },
            {
                id:4,
                name:'결재완료',
                url:'/dashBoard/documents/totalDocu'
            },

        ]
    },
    {
        id:3,
        name:'연차(N/A)',
        Children:[
            {
                id:1,
                name:'휴가현황',
                url:'/dashBoard/vacation/vacationStatus'
            },
            {
                id:2,
                name:'잔여연차',
                url:'/dashBoard/vacation/remainingVacation'
            },
            {
                id:3,
                name:'휴가신청',
                url:'/dashBoard/vacation/requestedVacation'
            },
            {
                id:4,
                name:'미결재',
                url:'/dashBoard/vacation/unapprovedVacation'
            },
            {
                id:5,
                name:'결재현황',
                url:'/dashBoard/vacation/approvedVacation'
            },
            {
                id:6,
                name:'알림현황',
                url:'/dashBoard/vacation/notiVacation'
            },

        ]
    },
    {
        id:4,
        name:'관리(개발ing)',
        Children:[
            {
                id:1,
                name:'직원',
                url:'/dashBoard/mng/employeeMng'
            },
            {
                id:2,
                name:'조직',
                url:'/dashBoard/mng/organizationMng'
            },
            {
                id:3,
                name:'연차설정',
                url:'/dashBoard/mng/vactionMng'
            },
 
        ]
    },
    {
        id:5,
        name:'회사설정(N/A)',
        Children:[
            {
                id:1,
                name:'일반',
                url:'/dashBoard/companyProfile/commonCompany'
            },
            {
                id:2,
                name:'결제수단 등록',
                url:'/dashBoard/companyProfile/paymentCompany'
            },
 
        ]
    },
    
]


