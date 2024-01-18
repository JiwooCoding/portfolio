import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faUser,faCakeCandles,faBriefcase,faSchoolFlag,faEnvelope,faMobileScreenButton,faWrench } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import java from '../../assets/icons/JAVA.png'
import js from '../../assets/icons/JS.png'
import ts from '../../assets/icons/TS.png'
import jq from '../../assets/icons/JQ.png'
import spr from '../../assets/icons/SPRING.png'
import spb from '../../assets/icons/SPRINGBOOT.png'
import rd from '../../assets/icons/REDUX.png'
import ec from '../../assets/icons/ECLL.png'
import html from '../../assets/icons/HTML.png'
import css from '../../assets/icons/CSS.png'
import scss from '../../assets/icons/SCSS.png'
import my from '../../assets/icons/MYSQL.png'
import ora from '../../assets/icons/ORACLE.png'
import post from '../../assets/icons/POST.png'
import next from '../../assets/icons/next.svg'
import slack from '../../assets/icons/slack.png'
import fire from '../../assets/icons/FIRE.png'
import notion from '../../assets/png-transparent-notion-logo.png'
import ajax from '../../assets/icons/ajax.png'

interface MyInfoDetailProps{
    data:string[];
    activeButton:string;
}


const MyInfoDetail = ({data, activeButton}:MyInfoDetailProps) => {


return (
    <div className='font-noto'>
        {activeButton === data[0] ? 
        (<div className="lg:border-2 rounded-[2rem] p-4 grid gap-y-8">
            <p className='text-[15px]'>
            새로운 <b className='text-purple-700'>도전</b>을 두려워하지 않으며 현재와 미래의 목표를 위해 과감하게 도전하는 것을 좋아합니다.<br/>
            <b className='text-purple-700'>책임감</b>을 가지고 맡은 일에 헌신하며, 어려움에 부딪히더라도 쉽게 포기하지 않고 끝까지 해내려는 노력을 기울입니다.<br/>
            사람들과의 <b className='text-purple-700'>소통</b>을 중요시하며, 주변의 이야기에 귀 기울이고 진심으로 대화하는 데에 즐거움을 느낍니다.
            항상 소통을 통해 서로를 이해하고 존중하는 태도를 갖고 있습니다. <br/>
            또한, 규칙적인 생활습관을 갖춰 건강한 삶을 유지하고 있습니다. 수영과 테니스를 즐기면서 <b className='text-purple-700'>체력</b>을 관리하고, 몸과 마음의 균형을 중요시하고 있습니다. <br/>
            함께 성장하고 배우는 것을 즐기는 개발자로서, 새로운 기회와 도전을 기다리고 있습니다.
            </p>
            <div className="lg:grid lg:grid-cols-2 gap-4 sm:flex sm:flex-col">
                <div className='flex gap-2'>
                    <span className='sm:text-[13px] lg:text-[14px]'><FontAwesomeIcon className='text-purple-500' icon={faUser}/></span>
                    <span className='sm:text-[13px] lg:text-[14px]'>채지우</span>
                </div>
                <div className='flex gap-2'>
                    <span className='sm:text-[13px] lg:text-[14px]'><FontAwesomeIcon className='text-purple-500' icon={faCakeCandles} /></span>
                    <span className='sm:text-[13px] lg:text-[14px]'>1997년 6월 17일</span>
                </div>
                <div className='flex gap-2'>
                    <span className='sm:text-[13px] lg:text-[14px]'><FontAwesomeIcon className='text-purple-500' icon={faEnvelope} /></span>
                    <span className='sm:text-[13px] lg:text-[14px]'>ekdlslove1@naver.com</span>
                </div>
                <div className='flex gap-2'>
                    <span className='sm:text-[13px] lg:text-[14px]'><FontAwesomeIcon className='text-purple-500' icon={faMobileScreenButton} /></span>
                    <span className='sm:text-[13px] lg:text-[14px]'>010-5553-8215</span>
                </div>
            </div>
                <div className='grid grid-cols-4 gap-y-2 text-gray-600 text-[14px] text-center whitespace-nowrap'>
                    <span># 긍정적</span>
                    <span># 성실함</span>
                    <span># 책임감</span>
                    <span># 밝은 에너지</span>
                    <span># 도전적</span>
                    <span># 열정적</span>
                    <span># 배려심</span>
                    <span># 조화로운</span>
                </div>
        </div>) 
        : ''}
        {activeButton === data[1] ? 
        (<div className='grid lg:grid-cols-2 gap-4'>
            <div>
                <div className='flex gap-3 items-center text-purple-700 mb-2'>
                    <FontAwesomeIcon icon={faBriefcase} />
                    <h2>업무 경험</h2>
                </div>
                <ul className=''>
                    <li className='bg-[#905cea0f] px-3 py-3 rounded-md  grid'>
                        <span className='font-bold text-md'>(주)골든비</span>
                        <span className='text-gray-500 text-[15px] mb-2'>비서사무직</span>
                        <span className='text-[14px]'>2021.05 - 2022.06</span>
                    </li>
                </ul>
            </div>
            <div>
                <div className='flex gap-3 items-center text-purple-700 mb-2'>
                    <FontAwesomeIcon icon={faSchoolFlag} />
                    <h2>교육</h2>
                </div>
                <ul className='grid gap-3'>
                    <li className='bg-[#905cea0f] px-3 py-3 rounded-md grid'>
                        <span className='font-bold text-md'>패스트캠퍼스</span>
                        <span className='text-gray-500 text-[15px] mb-2'>프론트엔드 개발 online강의</span>
                        <span className='text-[14px]'>2023.09 - 2024.01</span>
                    </li>
                    <li className='bg-[#905cea0f] px-3 py-3 rounded-md grid'>
                        <span className='font-bold text-md'>KOSMO</span>
                        <span className='text-gray-500 text-[15px] mb-2'>Java/Python 활용 빅데이터 서비스 개발자 과정</span>
                        <span className='text-[14px]'>2023.04 - 2023.09</span>
                    </li>
                    <li className='bg-[#905cea0f] px-3 py-3 rounded-md grid'>
                        <span className='font-bold text-md'>극동대학교</span>
                        <span className='text-gray-500 text-[15px] mb-2'>항공운항서비스학과</span>
                        <span className='text-[14px]'>2016.03 - 2020.08</span>
                    </li>
                </ul>
            </div>
        </div>) 
        : ''}
        {activeButton === data[2] ? 
        (<div className='grid gap-3'>
            <h2 className='border-b border-[#e9e9e9] pb-1 text-[19px] font-black'><FontAwesomeIcon icon={faWrench} /> 기술 스택</h2>
                <div className='bg-[#905cea0f] px-3 py-3 rounded-md'>
                    <span className='font-bold'>React</span>
                    <p className='text-sm'>CRA 나 Vite, Next.js 등의 프레임워크를 사용해서 웹사이트를 구현할 수 있습니다.</p>
                </div>
                <div className='bg-[#905cea0f] px-3 py-3 rounded-md'>
                    <span className='font-bold'>CSS Framework</span>
                    <p className='text-sm'>TailwindCSS, Styled Component 등을 사용할 수 있습니다.</p>
                </div>
                <hr/>
                <div className='grid gap-3 bg-[#5c99ea0f] px-3 py-3 rounded-md'>
                    <span className='font-bold'>Language</span>
                    <div className='grid sm:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-2 text-sm'>
                        <span className='text-gray-500 rounded-sm whitespace-nowrap text-center flex justify-center items-center bg-[#c3c0ff57] gap-1'><img src={java} width={25}/>JAVA</span>
                        <span className='text-gray-500 rounded-sm whitespace-nowrap text-center flex justify-center items-center bg-[#c3c0ff57] gap-1'><img src={js} width={17}/>Javascript</span>
                        <span className='text-gray-500 rounded-sm whitespace-nowrap text-center flex justify-center items-center bg-[#c3c0ff57] gap-1'><img src={ts} width={15}/>Typescript</span>
                        <span className='text-gray-500 rounded-sm whitespace-nowrap text-center flex justify-center items-center bg-[#c3c0ff57] gap-1'><img src={jq} width={17}/>JQuery</span>
                        <span className='text-gray-500 rounded-sm whitespace-nowrap text-center flex justify-center items-center bg-[#c3c0ff57] gap-1'><img src={ajax} width={25}/>Ajax</span>
                    </div>
                </div>
                <div className='grid gap-3 bg-[#5c99ea0f] px-3 py-3 rounded-md'>
                    <span className='font-bold'>Framework / Library</span>
                    <div className='grid sm:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-2 text-sm'>
                        <span className='text-gray-500 rounded-sm whitespace-nowrap text-center flex justify-center items-center bg-[#ca96f33d] gap-1'><img src={next} width={17}/>Next.js</span>
                        <span className='text-gray-500 rounded-sm whitespace-nowrap text-center flex justify-center items-center bg-[#ca96f33d] gap-1'><img src={spr} width={20}/>Spring</span>
                        <span className='text-gray-500 rounded-sm whitespace-nowrap text-center flex justify-center items-center bg-[#ca96f33d] gap-1'><img src={spb} width={20}/>Spring boot</span>
                        <span className='text-gray-500 rounded-sm whitespace-nowrap text-center flex justify-center items-center bg-[#ca96f33d] gap-1'><img src={ec} width={20}/>Eclipse</span>
                        <span className='text-gray-500 rounded-sm whitespace-nowrap text-center flex justify-center items-center bg-[#ca96f33d] gap-1'><img src={rd} width={25}/>Redux</span>
                    </div>
                </div>
                <div className='grid gap-3 bg-[#5c99ea0f] px-3 py-3 rounded-md'>
                    <span className='font-bold'>MarkUp</span>
                    <div className='grid sm:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-2 text-sm'>
                        <span className='text-gray-500 rounded-sm whitespace-nowrap text-center flex justify-center items-center bg-[#ecbbd04f] gap-1'><img src={html} width={20}/>HTML</span>
                        <span className='text-gray-500 rounded-sm whitespace-nowrap text-center flex justify-center items-center bg-[#ecbbd04f] gap-1'><img src={css} width={20}/>CSS</span>
                        <span className='text-gray-500 rounded-sm whitespace-nowrap text-center flex justify-center items-center bg-[#ecbbd04f] gap-1'><img src={scss} width={25}/>SCSS</span>
                    </div>
                </div>
                <div className='grid gap-3 bg-[#5c99ea0f] px-3 py-3 rounded-md'>
                    <span className='font-bold'>Database</span>
                    <div className='grid sm:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-2 text-sm'>
                        <span className='text-gray-500 rounded-sm whitespace-nowrap text-center flex justify-center items-center bg-[#c0cfff57] gap-1'><img src={my} width={25}/>My-SQL</span>
                        <span className='text-gray-500 rounded-sm whitespace-nowrap text-center flex justify-center items-center bg-[#c0cfff57] gap-1'><img src={ora} width={20}/>Oracle</span>
                        <span className='text-gray-500 rounded-sm whitespace-nowrap text-center flex justify-center items-center bg-[#c0cfff57] gap-1'><img src={post} width={20}/>PostgreSQL</span>
                    </div>
                </div>
                <h2 className='px-2 font-bold'>Other</h2>
                <hr/>
                    <div className='flex gap-3 text-sm'>
                        <span className='px-3 py-1 whitespace-nowrap border border-gray-300 text-center rounded-2xl flex items-center gap-1'><img src={fire} width={25}/>firebase</span>
                        <span className='px-3 whitespace-nowrap border border-gray-300 text-center rounded-2xl flex items-center gap-1'><FontAwesomeIcon icon={faGithub} size={'xl' as SizeProp}/>Github</span>
                        <span className='px-3 whitespace-nowrap border border-gray-300 text-center rounded-2xl flex items-center gap-1'><img src={notion} width={20}/>Notion</span>
                        <span className='px-3 py-1 whitespace-nowrap border border-gray-300 text-center rounded-2xl flex items-center gap-1'><img src={slack} width={25}/>Slack</span>
                    </div>
        </div>) 
        : ''}
    </div>
)
}

export default MyInfoDetail