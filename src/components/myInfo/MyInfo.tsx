import 'animate.css/animate.css';
import { useEffect, useState } from 'react'
import myImage from '../../assets/KakaoTalk_20240116_201249973.jpg'
import MyInfoDetail from './MyInfoDetail';

const MyInfo = () => {

    const data = ['자기소개', '경험', '스킬'];
    const [activeButton, setActiveButton] = useState(data[0]);

    const handleButtonClick = (button:string) => {
        setActiveButton(button);
    }

    const buttonStyle = `whitespace-nowrap bg-purple-500 text-white py-[6px] px-8 w-auto rounded-[25px]`;

    useEffect(() => {
        const handleScroll = () => {
        const scrollThreshold = 200;
        const currentScroll = window.scrollY;
    
        // animate__animated 클래스를 가진 요소를 찾기
        const animatedElement = document.querySelector('.animate__animated');
    
        if (animatedElement && currentScroll > scrollThreshold) {
            animatedElement.classList.add('animate__tada');
            window.removeEventListener('scroll', handleScroll);
            }
        };
    
        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', handleScroll);
    
        // 컴포넌트가 언마운트되면 이벤트 리스너 제거
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
            <section id='myInfo' className="flex flex-col lg:pt-[90px] lg:pb-[230px] sm:py-[30px]">
                <h2 className="animate__animated text-2xl lg:text-4xl font-taeback text-center mb-4">
                    저를 소개합니다
                </h2>
                <div>
                    <div className='text-gray-500 text-center mx-auto border sm:text-sm lg:max-w-sm sm:max-w-xs flex gap-4 rounded-[25px] sm:py-1 lg:py-[7px] px-2 font-noto'>
                        {data.map((button) => (
                            <button key={button} onClick={() => handleButtonClick(button)}
                            className={`whitespace-nowrap ${activeButton === button ? buttonStyle : ''}`}
                            style={{width:'150px'}}
                            >
                                {button}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex mt-11 justify-center">
                    <div className='hidden lg:flex flex-1 items-center justify-center'>
                        <img src={myImage} className='w-[300px] relative top-9'/>
                    </div>
                    <div className='flex-1'>
                        <MyInfoDetail data={data} activeButton={activeButton}/>
                    </div>
                </div>
            </section>
    )
}

export default MyInfo