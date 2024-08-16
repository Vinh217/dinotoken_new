import Paragraph from '../components/common/Paragraph';

export default function Footer() {
    return (
        <div>
            <div
                className="bg-footer text-text-white w-full bg-100% bg-center bg-no-repeat px-[16px] h-[200px] md:h-[390px] md:px-[130px]"
                id="footer"
            >
                <div className="h-full w-full items-center justify-center hidden md:flex">
                    <div className="flex flex-col items-start gap-[24px]">
                        <div className="font-poppins text-[4rem] font-[700] text-white">
                            Start earning today
                        </div>
                        <Paragraph classes={'text-white opacity-70'}>
                            0 trading fee on selected Bitcoin (BTC) spot trading
                            pairs now
                        </Paragraph>
                        <Paragraph classes={'text-white opacity-70'}>
                            Lowest transactions fees &lt; 0.10%
                        </Paragraph>
                        <Paragraph
                            classes={
                                'text-white px-[20px] py-[12px] bg-[#FC9F4F] rounded-[4px] cursor-pointer'
                            }
                        >
                            Sign Up Now
                        </Paragraph>
                    </div>
                </div>
            </div>
            <div className='w-full px-[16px] bg-bg-footer md:hidden py-[30px]'>
                <div className="flex h-full w-full items-center justify-center">
                    <div className="flex flex-col items-start gap-[24px]">
                        <div className="font-poppins text-[4rem] font-[700] text-white">
                            Start earning today
                        </div>
                        <Paragraph classes={'text-white opacity-70'}>
                            0 trading fee on selected Bitcoin (BTC) spot trading
                            pairs now
                        </Paragraph>
                        <Paragraph classes={'text-white opacity-70'}>
                            Lowest transactions fees &lt; 0.10%
                        </Paragraph>
                        <Paragraph
                            classes={
                                'text-white px-[20px] py-[12px] bg-[#FC9F4F] rounded-[4px] cursor-pointer'
                            }
                        >
                            Sign Up Now
                        </Paragraph>
                    </div>
                </div>
            </div>
            <div className="bg-bg-footer px-[16px] py-[50px] md:px-[130px]">
                <div className="flex h-[48px] items-center justify-center border-b border-t border-white opacity-70">
                    <Paragraph classes={'text-white opacity-40'}>
                        @copyright2024
                    </Paragraph>
                </div>
                <Paragraph classes={'text-white pt-[40px]'}>
                    At Project Dino, we believe that laughter is timeless—just
                    like dinosaurs. So, let’s dig up the past and resurrect it
                    with humor, one meme at a time. Get ready to embark on a
                    comedic journey through the Mesozoic era and beyond with
                    Project Dino! Get Dino tokens now!
                </Paragraph>
            </div>
        </div>
    );
}
