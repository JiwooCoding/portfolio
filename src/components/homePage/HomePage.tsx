import { useEffect, useMemo, useRef, useState } from 'react';
import myImage from '../../assets/KakaoTalk_20240113_195620876.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  const texts = useMemo(() => ['리액트 개발자입니다 | ', '프론트엔드 개발자입니다 | '], []);
  
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const chevronRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const addOrDeleteText = () => {
      const targetText = texts[currentIndex];
      let newText;

      if (isDeleting) {
        newText = currentText.slice(0, -1);
      } else {
        newText = targetText.substring(0, currentText.length + 1);
      }
      setCurrentText(newText);

      if (isDeleting && newText === '') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsDeleting(false);
      } else if (!isDeleting && newText === targetText) {
        setIsDeleting(true);
      }
    };

    const intervalId = setInterval(addOrDeleteText, 100);

    return () => clearInterval(intervalId);
  }, [currentText, currentIndex, texts, isDeleting]);




  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (chevronRef.current) {
        if (scrollY > 0) {
          chevronRef.current.style.display = 'none';
        } else {
          chevronRef.current.style.display = 'block';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [chevronRef]);

  // 스크롤
  const handleScrollClick = () => {
    window.scrollTo({
      top:700,
      behavior:'smooth'
    });
  };

  return (
      <section id='homePage' className='py-12 lg:pt-[5rem] lg:pb-[3rem] lg:minmin-h-screen h-full flex flex-col gap-x-8 flex-grow relative gap-[150px]'>
        <div className='flex justify-center gap-x-8'>
          {/* 소개 글 */}
          <div className='flex w-full flex-col justify-center mx-auto xl:mx-0 gap-y-1'>
            <h1 className='font-taeback mb-4 text-3xl lg:text-5xl text-start drop-shadow-lg !leading-normal'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-purple-600'>
                안녕하세요, 저는
              </span>
              <br />
              <div className="flex flex-col min-h-[5rem]">
                <span className="opacity-100">{currentText}</span>
              </div>
            </h1>
            <p className='font-noto text-[18px]'>
              항상 배우는 자세를 가지고 성장하려고 노력하는 <strong>채지우</strong>입니다.
            </p>
            <div className='flex gap-6 my-8'>
              <a href="https://github.com/JiwooCoding">
                <button className='text-white font-noto text-sm whitespace-nowrap  rounded-[50px] px-8 py-2 bg-purple-500 duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-1 hover:bg-[#9b30dfab]'>깃허브 둘러보기 <FontAwesomeIcon icon={faGithub} size={'xl' as SizeProp}/></button>
              </a>
              <a href="https://early-act-fd3.notion.site/ee131f92003b429abe985e97b0ef5549">
                <button className='font-noto text-sm whitespace-nowrap border border-solid border-gray-300 rounded-[50px] px-8 py-2 duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-1'>최근 프로젝트 <FontAwesomeIcon icon={faFile} /></button>
              </a>
            </div>
          </div>
          {/* 사진 */}
          <div className='hidden sm:block'>
            <img src={myImage} sizes='350' className='bg-[#8a2be242] rounded-full' />
          </div>
        </div>
        <div onClick={handleScrollClick} className='cursor-pointer hidden lg:block left-1/2 lg:bottom-0 transform -translate-x-1/2 animate-bounce'>
          <div className='text-center'>
            <p className='font-noto text-gray-400 text-sm hover:text-gray-600 hover:text-[13px] transition-all duration-200 ease-in-out'>저를 조금 더 알아보고 싶나요?</p>
            <p className='text-purple-500'><FontAwesomeIcon icon={faChevronDown} size={'lg' as SizeProp}/></p>
          </div>
        </div>
      </section>

  )
}

export default HomePage;
