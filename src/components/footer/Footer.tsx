

const Footer = () => {
  return (
    <footer className="mt-24 font-noto h-full grid justify-center items-center px-[32px] py-[20px] border border-t-[#e9e9e9e9]">
        <div className="flex gap-3 text-sm py-2">
            <span>@2024</span>
            <span className='font-bold'>채지우</span>
            <span>All rights reserved.</span>
        </div>
        {/* <div className='flex justify-center gap-3 py-2'>
            <a href='#'><img src={notion} width={25}/></a>
            <a href='#'><FontAwesomeIcon icon={faGithub} size={'xl' as SizeProp}/></a>
        </div> */}
    </footer>
  )
}

export default Footer