import { Button } from '@mui/material';
import { MainPageStyled } from './styled';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { orange } from '@mui/material/colors';

const MainPage = () => {
    const router = useRouter();
    // const path = router.asPath;

    // servicePage로 이동 시키는 함수
    // const choicedPage =()=>{
    //     router.push(`/dashBoard/${type}`);
    // }

    return (
        <>
            <MainPageStyled>
                <div>
                    mainPage는 개발 중입니다.
                    <br />
                    servicePage 바로가기
                    <br />
                    <div style={{backgroundColor:'orange'}}
                        onClick={() => {
                            // choicedPage()
                            router.push('/dashBoard/home');
                        }}
                    >
                        servicePage 이동버튼
                    </div>
                </div>
            </MainPageStyled>
        </>
    );
};
export default MainPage;
