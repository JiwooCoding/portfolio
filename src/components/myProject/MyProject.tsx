import image1 from '../../assets/img_portfolio5.png'
import image2 from '../../assets/img_portfolio2.png'
import image3 from '../../assets/img_portfolio3.png'
import image4 from '../../assets/img_portfolio4.png'
import image5 from '../../assets/img_portfolio1.png'
import '../../index.css'




const MyProject = () => {
    return (
        <section className='font-noto pt-[90px]' id="myProject">
            <div className='text-center pb-5 lg:pb-12'>
                <h2 className='lg:text-3xl sm:text-xl font-taeback lg:pb-3'>개인 및 팀 프로젝트</h2>
                <p className='text-gray-500 text-md'>
                    <span className='inline-block animate-bounce text-lg text-purple-500'>클릭</span>하시면 프로젝트를 자세히 보시 수 있어요!
                </p>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-[70px] gap-y-[70px] lg:px-[180px]'>
                <div className='border border-[#e9e9e9] rounded-lg transition-all duration-300 ease-in-out transform hover:shadow-lg hover:scale-105 relative'>
                        <a href='https://early-act-fd3.notion.site/ee131f92003b429abe985e97b0ef5549' className='relative block'>
                            <img src={image5} alt='image1' className='opacity-100 hover:opacity-50 transition-opacity duration-300 ease-in-out rounded-t-lg'/>
                            <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-t-lg bg-gray-500 bg-opacity-60'>
                                <p className='text-white text-base font'>클릭하면 Notion으로 이동합니다</p>
                            </div>
                        </a>
                        <div className='grid justify-start px-4 py-3 gap-6 bg-white rounded-b-lg'>
                            <div>
                                <h2 className='text-xl font-bold'>갓생챌린지<span className='text-xs ml-2 pl-1 pr-1 text-white rounded-sm font-light bg-purple-500'>팀 프로젝트</span></h2>
                                <span className='text-gray-500 text-[14px]'>사용자들이 어려운 습관 형성이나 목표 달성을 위해 포인트를 예치하고, 그 예치금을 동기부여로 삼아 도전하는 챌린지 웹사이트입니다.</span>
                            </div>
                            <div className='flex gap-4'>
                                <span className='text-sm'>#React</span><span className='text-sm'>#Typescript</span>
                            </div>
                        </div>
                    </div>
                <div className='border border-[#e9e9e9] rounded-lg transition-all duration-300 ease-in-out transform hover:shadow-lg hover:scale-105 relative'>
                    <a href='https://www.notion.so/e3d4e17609694ca687d49086eab7d058' className='relative block'>
                        <img src={image1} alt='image1' className='opacity-100 hover:opacity-50 transition-opacity duration-300 ease-in-out rounded-t-lg'/>
                        <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-t-lg bg-gray-500 bg-opacity-60'>
                            <p className='text-white text-base font'>클릭하면 Notion으로 이동합니다</p>
                        </div>
                    </a>
                    <div className='grid justify-start px-4 py-3 gap-6 bg-white rounded-b-lg'>
                        <div>
                            <h2 className='text-xl font-bold'>당근마켓<span className='text-xs ml-2 pl-1 pr-1 text-white rounded-sm font-light bg-purple-500'>개인 프로젝트</span></h2>
                            <span className='text-gray-500 text-[14px]'>지역 기반 중고거래 서비스인 당근마켓의 기능을 PC버전으로 구현해보았습니다.</span>
                        </div>
                        <div className='flex gap-4'>
                            <span className='text-sm'>#React</span><span className='text-sm'>#Next.js</span><span className='text-sm'>#Typescript</span><span className='text-sm'>#PostgreSQL</span>
                        </div>
                    </div>
                </div>
                <div className='border border-[#e9e9e9] rounded-lg transition-all duration-300 ease-in-out transform hover:shadow-lg hover:scale-105 relative'>
                    <a href='https://www.notion.so/Keep-Notes-986c5245fc66433ca2dbf517025fdf92' className='relative block'>
                        <img src={image2} alt='image2' className='opacity-100 hover:opacity-50 transition-opacity duration-300 ease-in-out rounded-t-lg'/>
                        <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-t-lg bg-gray-500 bg-opacity-60'>
                            <p className='text-white text-base'>클릭하면 Notion으로 이동합니다</p>
                        </div>
                    </a>
                    <div className='grid justify-start px-4 py-3 gap-6 bg-white rounded-b-lg'>
                        <div>
                            <h2 className='text-xl font-bold'>Keep Notes<span className='text-xs ml-2 pl-1 pr-1 text-white rounded-sm font-light bg-purple-500'>개인 프로젝트</span></h2>
                            <span className='text-gray-500 text-[14px]'>구글킵 기능을 구현한 프로젝트로, 사용자들이 간편하게 메모와 리스트를 관리할 수 있는 경험을 제공합니다.</span>
                        </div>
                        <div className='flex gap-4'>
                            <span className='text-sm'>#React</span><span className='text-sm'>#Next.js</span><span className='text-sm'>#Typescript</span>
                        </div>
                    </div>
                </div>
                <div className='border border-[#e9e9e9] rounded-lg transition-all duration-300 ease-in-out transform hover:shadow-lg hover:scale-105 relative'>
                    <a href='https://early-act-fd3.notion.site/SHOP-f535001063ba4cc3856592cd602ee423' className='relative block'>
                        <img src={image3} alt='image3' className='opacity-100 hover:opacity-50 transition-opacity duration-300 ease-in-out rounded-t-lg'/>
                        <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-t-lg bg-gray-500 bg-opacity-60'>
                            <p className='text-white text-base'>클릭하면 Notion으로 이동합니다</p>
                        </div>
                    </a>
                    <div className='grid justify-start px-4 py-3 gap-6 bg-white rounded-b-lg'>
                        <div>
                            <h2 className='text-xl font-bold'>지우SHOP<span className='text-xs ml-2 pl-1 pr-1 text-white rounded-sm font-light bg-purple-500'>개인 프로젝트</span></h2>
                            <span className='text-gray-500 text-[14px]'>Axios를 사용하여 API에서 실시간 상품 데이터를 가져와 쇼핑몰를 제작한 프로젝트입니다.</span>
                        </div>
                        <div className='flex gap-4'>
                            <span className='text-sm'>#React</span><span className='text-sm'>#Javascript</span><span className='text-sm'>#Typescript</span>
                        </div>
                    </div>
                </div>
                <div className='border border-[#e9e9e9] rounded-lg transition-all duration-300 ease-in-out transform hover:shadow-lg hover:scale-105 relative'>
                    <a href='https://early-act-fd3.notion.site/3e7b31b833ac4f11b2eb9c776caf94ac' className='relative block'>
                        <img src={image4} alt='image4' className='opacity-100 hover:opacity-50 transition-opacity duration-300 ease-in-out rounded-t-lg'/>
                        <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-t-lg bg-gray-500 bg-opacity-60'>
                            <p className='text-white text-base'>클릭하면 Notion으로 이동합니다</p>
                        </div>
                    </a>
                    <div className='grid justify-start px-4 py-3 gap-6 bg-white rounded-b-lg'>
                        <div>
                            <h2 className='text-xl font-bold'>포켓몬 도감<span className='text-xs ml-2 pl-1 pr-1 text-white rounded-sm font-light bg-purple-500'>개인 프로젝트</span></h2>
                            <span className='text-gray-500 text-[14px]'>Axios를 활용하여 포켓몬 API에서 데이터를 가져와 UI를 구성하고, 구글 로그인을 사용한 포트폴리오 프로젝트입니다.</span>
                        </div>
                        <div className='flex gap-4'>
                        <span className='text-sm'>#React</span><span className='text-sm'>#Javascript</span><span className='text-sm'>#Typescript</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default MyProject