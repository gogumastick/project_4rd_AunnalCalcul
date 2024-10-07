import { transferIcon } from '@/utill/data';

// TopBar에 직원모드<>어드민모드 전환할 때 구분 될 수 있도록 만들려고
const ToChangeText = () => {
    return (
        <>
            <div className="toUserMode">
                {/* 로그아웃img Bnt */}
                {transferIcon && (
                    <img
                        className="transferBtn"
                        src={transferIcon.src.src}
                        alt={transferIcon.name}
                        // onClick={showModal}
                    />
                )}
                <div>데이터 새로고침</div>
            </div>
        </>
    );
};
export default ToChangeText;
