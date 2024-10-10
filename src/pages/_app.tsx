import Header from '@/features/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AppProvider } from '@toolpad/core/AppProvider';
// import { ThemeProvider } from '@mui/material/styles';
// Material-UI의 기본 스타일 초기화
import CssBaseline from '@mui/material/CssBaseline';
// 커스텀 테마 가져오기(아..안되네)
// import theme from '../theme/theme';
// fortawesome쓰고 싶어
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { RecoilRoot } from 'recoil';
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* <Provider store={}> */}
            {/* <Header /> */}

            <AppProvider>
                {/* ThemeProvider로 앱 전체에 테마 적용 */}
                {/* <ThemeProvider theme={theme}> */}
                {/* CssBaseline은 기본 Material-UI CSS 초기화 */}
                <CssBaseline />
                {/* Redux대체제인 Recoil로 전역변수를 관리하자  */}
                <RecoilRoot>
                    <NavBar />
                    {/* 전체적으로 감싸는 div == MainWrap*/}
                    <div className="MainWrap" style={{ display: 'flex' }}>
                        {/* leftSideDraw */}
                        {/* 좌측 SideBar */}
                        <div className="sidebarArea">
                            <SideBar />
                        </div>
                        <Component {...pageProps} />
                    </div>
                </RecoilRoot>

                {/* </ThemeProvider> */}
            </AppProvider>

            {/* </Provider> */}
        </>
    );
}

// import Header from '@/features/Header';
// import '@/styles/globals.css';
// import type { AppProps } from 'next/app';
// import {Provider} from 'react'
// import { AppProvider } from '@toolpad/core/AppProvider';

// export default function App({ Component, pageProps }: AppProps) {
//     return (
//         <>
//         {/* <Provider store={}> */}
//             {/* <Header /> */}
//             <AppProvider>
//             <Component {...pageProps} />
//             </AppProvider>

//             {/* </Provider> */}
//         </>
//     );
// }
