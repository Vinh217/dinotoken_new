export default function Footer() {
    return (
        <div
            className="footer_bg_color w-full px-[16px] py-[20px] text-text-white md:px-[130px]"
            id="footer"
        >
            <div className="flex flex-col gap-[16px] border-b border-[#1D2E27] md:flex-row">
                <div className="flex-1 border-r border-[#1D2E27] py-[20px]">
                    <div className="flex flex-col gap-[16px]">
                        <div className="flex items-center gap-[10px]">
                            <img
                                src="/assets/logo-social.svg"
                                alt="social"
                                className="h-[30px] w-[30px] md:h-[46px] md:w-[46px]"
                            />
                            <div className="text-[32px] font-[900] md:text-[32px]">
                                Social
                            </div>
                        </div>
                        <div className="flex gap-[20px]">
                            <img
                                src="/assets/ig.svg"
                                alt="ig"
                                className="w-[30px] md:w-[40px]"
                            />
                            <img
                                src="/assets/fb.svg"
                                alt="ig"
                                className="w-[30px] md:w-[40px]"
                            />
                            <img
                                src="/assets/in.svg"
                                alt="ig"
                                className="w-[30px] md:w-[40px]"
                            />
                        </div>
                        <div>
                            <div className="text-[12px] md:text-[14px]">
                                Website:
                            </div>
                            <div className="text-[12px] md:text-[14px]">
                                Telegram:
                            </div>
                            <div className="text-[12px] md:text-[14px]">
                                Telegram Global Chat:
                            </div>
                            <div className="text-[12px] md:text-[14px]">
                                Telegram Announcement Channel:
                            </div>
                            <div className="text-[12px] md:text-[14px]">
                                Instagram:
                            </div>
                            <div className="text-[12px] md:text-[14px]">
                                Memebank:
                            </div>
                            <div className="text-[12px] md:text-[14px]">
                                Discord:
                            </div>
                            <div className="text-[12px] md:text-[14px]">
                                Farcaster:
                            </div>
                            <div className="text-[12px] md:text-[14px]">
                                Reddit:
                            </div>
                        </div>
                        <div>
                            <div className="text-[12px] md:text-[14px]">
                                Save DINO
                            </div>
                            <div className="text-[12px] md:text-[14px]">
                                Grow DINO
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 py-[20px] text-[12px] md:text-[14px]">
                    Join the dino-mite revolution by following us on our social
                    media platforms, sharing our memes, and contributing your
                    own creations. Whether you’re a paleontology buff or just
                    someone who loves a good laugh, Project Dino welcomes
                    everyone to the prehistoric party.
                </div>
            </div>
            <div className="py-[20px] text-[12px] md:text-[14px]">
                At Project Dino, we believe that laughter is timeless—just like
                dinosaurs. So, let’s dig up the past and resurrect it with
                humor, one meme at a time. Get ready to embark on a comedic
                journey through the Mesozoic era and beyond with Project Dino!
                Get Dino tokens now!
            </div>
            <div className="text-[12px] md:text-[14px]">
                RISK WARNING: Any activity with Crypto assets entails risks and could result in a complete or partial loss of your Crypto assets and / or fiat funds and you should not expect to be protected if something goes wrong. Only you are responsible for your decisions and actions performed on Crypto assets wallets and platforms.
            </div>
        </div>
    );
}
