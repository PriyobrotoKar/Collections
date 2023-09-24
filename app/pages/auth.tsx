import '../globals.css';
import Image from 'next/image';

import Thumbnail from '../../public/imgs/thumbnail.png';

export default function Auth() {
    return (
        <main className='lg:ml-[32rem] auth-wrapper'>

            <Image
            src={Thumbnail}
            width={468}
            height={674}
            alt='thumbnail'
            className='absolute invisible lg:visible mt-[0] md:ml-[-5rem] lg:ml-[-65rem] lg:mt-[1.5rem] xl:ml-[-75rem] xl:mt-[0] auth-img'
            />

            <h1 className="text-center pl-[25px] pr-[25px] text-[55px] leading-[100%] sm:text-[85px] lg:text-[97.75px] lg:max-w-[550px] lg:text-left xl:max-w-[700px]">sign in and start showcasing!</h1>
            <p className='text-center mt-[15px] pl-[25px] pr-[25px] text-[20px] text-black max-w-[400px] sm:text-[26.08px] sm:max-w-[599px] lg:text-[29px] lg:text-left lg:max-w-[550px] lg:ml-[-1rem] xl:max-w-[666px]'>Collections.bio respects your privacy and does not use your account data anywhere. We only use your Google account’s icon for personalization.</p>
            <button className='rounded-[4.56px] max-w-[325px] w-[100%] bg-black pl-[42px] pt-[12px] pb-[12px] mt-[18px] pr-[42px] text-white sm:max-w-[562px] sm:text-[26.08px] lg:max-w-[550px] xl:max-w-[666px]'>Click here to login with google</button>
        </main>
    )
}