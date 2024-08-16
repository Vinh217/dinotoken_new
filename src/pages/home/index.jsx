import { useState } from 'react';
import CountdownTimer from '../../components/CountdownTimer';
import Sliders from '../../components/Sliders';
import SliderFooter from '../../components/Sliderfooter';
import LazyLoad from 'react-lazyload';

export default function Home() {
    const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;
    const [textToCopy] = useState('TBA');
    return (
        <div>
            <div className="relative">
                <LazyLoad height={200} once>
                    <img
                        src="/assets/bannertop.png"
                        alt="banner"
                        className="w-full"
                    />
                </LazyLoad>
                <div className="triangle-left relative flex h-[50px] w-[350px] items-center justify-center bg-bg-base text-center text-[24px] font-[900] text-[#2A4C75] before:absolute before:left-[9px] before:top-[20px] before:rotate-[135deg] before:border-b-[15px] before:border-r-[15px] before:border-t-[15px] before:border-b-transparent before:border-r-[#42ad68] before:border-t-transparent">
                    PRESALE $DINO
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-[10px] bg-[#2A4C75] px-[16px] py-[20px]">
                <div className="text-[30px] font-[900] text-text-white">
                    PRESALE DETAILS
                </div>
                <CountdownTimer targetDate={dateTimeAfterSevenDays} />
                <div className="mt-[10px] flex min-w-[350px] max-w-[450px] items-center justify-between rounded-full border bg-white px-[16px] py-[10px]">
                    <div className="text-[18px] font-bold text-bg-base">
                        {textToCopy}
                    </div>
                    <div
                        className="cursor-pointer rounded-full bg-[#2A4C75] px-[20px] py-[5px] text-center text-[16px] font-bold text-text-white"
                        onClick={() => {
                            navigator.clipboard.writeText(textToCopy);
                        }}
                    >
                        COPY
                    </div>
                </div>
                <div className="text-[24px] font-[900] text-bg-base">
                    MIN: TBA
                </div>
                <div className="text-[24px] font-[900] text-bg-base">
                    MAX: TBA
                </div>
                <div className="hidden cursor-pointer items-center justify-center rounded-[14px] border-2 border-[#000000] bg-bg-base px-[20px] py-[5px] md:flex">
                    <div className="cursor-pointer text-[24px] font-bold text-text-white">
                        BUY $DINO NOW
                    </div>
                </div>
                <div className="text-[24px] font-[900] text-bg-base">
                    {/* CONTRACT ADDRESS */}
                </div>
            </div>

            <div className="px-[16px] md:px-[130px]" id="feature">
                <div className="flex flex-col items-center justify-center gap-[10px] py-[30px] md:flex-row">
                    <div className="order-2 flex flex-col gap-[10px] md:order-1">
                        <div className="w-[300px] cursor-pointer rounded-full border-[2px] border-bg-base py-[10px] text-center text-small font-bold text-bg-base">
                            Create DINO
                        </div>
                        <div className="w-[300px] cursor-pointer rounded-full border-[2px] border-bg-base py-[10px] text-center text-small font-bold text-bg-base">
                            Nurture DINO
                        </div>
                        <div className="w-[300px] cursor-pointer rounded-full border-[2px] border-bg-base py-[10px] text-center text-small font-bold text-bg-base">
                            Grow DINO
                        </div>
                    </div>
                    <div className="order-1 flex flex-col gap-[10px] md:order-2">
                        <div className="flex items-center">
                            <LazyLoad height={200} once>
                                <img src="/assets/left-title-icon.svg" alt="" />
                            </LazyLoad>
                            <div className="flex flex-col justify-center">
                                <div className="text-center text-pre-medium font-super-bold text-[#2A4C75] md:text-big">
                                    KEY FEATURES:
                                </div>
                                <div className="text-center text-pre-medium font-super-bold text-bg-base md:text-big">
                                    $DINO
                                </div>
                            </div>
                            <LazyLoad height={200} once>
                                <img
                                    src="/assets/right-title-icon.svg"
                                    alt=""
                                />
                            </LazyLoad>
                        </div>
                        <div className="text-center text-para text-bg-base">
                            Our goal is to bring DINO back to the world via Web3
                            <div className="text-para text-bg-base">
                                Tokenomics: 2024,2024,2024 DINO token
                            </div>
                            <div className="text-para text-bg-base">
                                30% presale + bonus
                            </div>
                            <div className="text-para text-bg-base">
                                20% Treasury & Marketing
                            </div>
                            <div className="text-para text-bg-base">
                                20% Liquidity, cex, dex, MM
                            </div>
                            <div className="text-para text-bg-base">
                                5% Early contributors
                            </div>
                            <div className="text-para text-bg-base">
                                10% DINO Fund
                            </div>
                        </div>
                    </div>
                    <div className="order-3 flex flex-col gap-[10px] md:order-3">
                        <div className="w-[300px] cursor-pointer rounded-full border-[2px] border-bg-base py-[10px] text-center text-small font-bold text-bg-base">
                            DINO Launchpad
                        </div>
                        <div className="w-[300px] cursor-pointer rounded-full border-[2px] border-bg-base py-[10px] text-center text-small font-bold text-bg-base">
                            DINO Game
                        </div>
                    </div>
                </div>
            </div>
            {/* section 1 */}
            <div className="px-[16px] py-[30px] md:px-[130px]">
                <div className="flex w-full flex-col justify-center gap-[24px] md:flex-row">
                    <div className="max-w-[590px] rounded-[14px] border-[3px] border-[#58b7e7] p-[20px]">
                        <div>
                            <LazyLoad height={200} once>
                                <img
                                    src="/assets/dino_content.gif"
                                    alt=""
                                    className="rounded-[14px] border"
                                />
                            </LazyLoad>
                        </div>
                        <div className="pt-[20px]">
                            <div className="text-[20px] font-[900] uppercase text-bg-base">
                                Charity FIRST
                            </div>
                            <div className="pt-[10px] text-[16px]">
                                Global charity and conservation initiatives
                                inspired by the majestic dinosaurs. $DINO aims
                                to have a net-positive impact on the real world
                                by supporting wildlife conservation and
                                educational research.
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 justify-items-center gap-[16px] md:grid-cols-2">
                        <div className="min-h-[230px] max-w-[370px] rounded-[14px] border-[3px] border-[#57bb7a] p-[16px]">
                            <div>
                                <LazyLoad height={200} once>
                                    <img src="/assets/benefit-1.svg" alt="" />
                                </LazyLoad>
                            </div>
                            <div className="text-[20px] font-[900] uppercase text-bg-base">
                                No Perpetuals
                            </div>
                            <div className="text-[16px]">
                                To prevent market manipulation, we avoid
                                perpetual contracts at the beginning stage of
                                the project, reducing volatility.
                            </div>
                        </div>
                        <div className="min-h-[230px] max-w-[370px] rounded-[14px] border-[3px] border-[#57bb7a] p-[16px]">
                            <div>
                                <LazyLoad height={200} once>
                                    <img src="/assets/heavy.svg" alt="" />
                                </LazyLoad>
                            </div>
                            <div className="text-[20px] font-[900] uppercase text-bg-base">
                                Heavy Presale Limits:
                            </div>
                            <div className="text-[16px]">
                                Limited to 100 Solana (SOL) per wallet. Each
                                wallet can invest up to 100 SOL.
                            </div>
                        </div>
                        <div className="min-h-[230px] max-w-[370px] rounded-[14px] border-[3px] border-[#57bb7a] p-[16px]">
                            <div>
                                <LazyLoad height={200} once>
                                    <img src="/assets/heavy_1.svg" alt="" />
                                </LazyLoad>
                            </div>
                            <div className="text-[20px] font-[900] uppercase text-bg-base">
                                CEXs and MM
                            </div>
                            <div className="text-[16px]">
                                Many top Dexs are ready to list and cooperate
                                with airdrop campaigns. Dino&apos;s Market Maker
                                has experience bringing many large projects up
                                to 1B Market Cap
                            </div>
                        </div>
                        <div className="min-h-[230px] max-w-[370px] rounded-[14px] border-[3px] border-[#57bb7a] p-[16px]">
                            <div>
                                <LazyLoad height={200} once>
                                    <img src="/assets/heavy_2.svg" alt="" />
                                </LazyLoad>
                            </div>
                            <div className="text-[20px] font-[900] uppercase text-bg-base">
                                KOLs and Partners
                            </div>
                            <div className="text-[16px]">
                                Over 200+ Kols and partners join to support the
                                project. All have limited tokens vesting,
                                ensuring long-term support.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 2 */}
            <div className="py-[30px]" id="utility">
                <div className="mb-[40px] flex flex-col items-center justify-center px-[16px] md:px-[130px]">
                    <div className="text-center text-[32px] font-[900] uppercase text-[#2A4C75] md:text-[64px]">
                        Holder
                        <span className="text-[32px] font-[900] text-bg-base md:text-[64px]">
                            $DINO
                        </span>
                        <br />
                        get special reward
                    </div>
                    <div className="w-full text-para font-bold text-bg-base">
                        <div className="text-center text-para font-bold text-bg-base">
                            Limited NFTs: Win NFTs that are the only special
                            dinosaurs in this world
                        </div>
                        <div className="text-center text-para font-bold text-bg-base">
                            Airdrop: Receive airdrops from partner projects,
                            DINO
                        </div>
                        <div className="text-center text-para font-bold text-bg-base">
                            Access rights: Access to special Dino features like
                            Launchpad, Games,...
                        </div>
                    </div>
                </div>
                <Sliders />
            </div>

            {/* section 3 */}
            <div id="roadmap">
                <LazyLoad height={200} once>
                    <img
                        src="/assets/manydino_web.svg"
                        alt=""
                        className="hidden w-full md:block"
                    />
                </LazyLoad>
                <LazyLoad height={200} once>
                    <img
                        src="/assets/manydino_ip.png"
                        alt=""
                        className="block w-full md:hidden"
                    />
                </LazyLoad>
            </div>

            {/* section 4  */}
            <div className="px-[16px] py-[30px] md:px-[130px]">
                <div className="flex w-full flex-col items-center justify-center gap-[16px] py-[30px] md:flex-row">
                    <div className="min-h-[1110px] max-w-[670px] rounded-[14px] border border-[#40beff] p-[40px]">
                        <div className="flex flex-col items-center justify-center gap-[16px]">
                            <div className="flex">
                                <LazyLoad height={200} once>
                                    <img src="/assets/ice.png" alt="" />
                                </LazyLoad>
                            </div>
                            <div className="text-center text-[32px] font-[900] uppercase text-[#2A4C75]">
                                Freezing (Staking)
                            </div>
                            <div className="text-center text-[20px] text-[#2A4C75]">
                                Just as dino turns into ice when it gets cold,
                                $DINO tokens can be staked (iced) to earn
                                rewards. Stakers are rewarded with additional
                                $DINO tokens over time, simulating the process
                                of accumulating ice
                            </div>
                        </div>
                        <div className="mt-[16px] rounded-[14px] border bg-[#9264c021] p-[20px]">
                            <div className="flex flex-col gap-[30px]">
                                <div className="text-center text-[24px] font-[900] uppercase text-[#2A4C75] md:text-start">
                                    Mechanism
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="flex w-full max-w-[32px]">
                                        <LazyLoad height={200} once>
                                            <img
                                                src="/assets/cal.svg"
                                                alt=""
                                                className="w-full"
                                            />
                                        </LazyLoad>
                                    </div>
                                    <div className="text-[20px] text-[#2A4C75]">
                                        Users stake $DINO tokens for a specified
                                        period.
                                    </div>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="flex w-full max-w-[32px]">
                                        <LazyLoad height={200} once>
                                            <img
                                                src="/assets/clock.svg"
                                                alt=""
                                                className="w-full"
                                            />
                                        </LazyLoad>
                                    </div>
                                    <div className="text-[20px] text-[#2A4C75]">
                                        Users stake $DINO tokens for a specified
                                        period.
                                    </div>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="flex w-full max-w-[32px]">
                                        <LazyLoad height={200} once>
                                            <img
                                                src="/assets/pig.svg"
                                                alt=""
                                                className="w-full"
                                            />
                                        </LazyLoad>
                                    </div>
                                    <div className="text-[20px] text-[#2A4C75]">
                                        Users stake $DINO tokens for a specified
                                        period.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[16px] rounded-[14px] border bg-[#649ac021] p-[20px]">
                            <div className="flex flex-col gap-[30px]">
                                <div className="text-[24px] font-[900] uppercase text-[#2A4C75]">
                                    Simple Math
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="flex w-full max-w-[32px]">
                                        <LazyLoad height={200} once>
                                            <img
                                                src="/assets/cal_1.svg"
                                                alt=""
                                                className="w-full"
                                            />
                                        </LazyLoad>
                                    </div>
                                    <div className="text-[20px] text-[#2A4C75]">
                                        4.5% total allocated for a year between
                                        3 pools: daily, weekly, and monthly
                                    </div>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="flex w-full max-w-[32px]">
                                        <LazyLoad height={200} once>
                                            <img
                                                src="/assets/up_arrow.svg"
                                                alt=""
                                                className="w-full"
                                            />
                                        </LazyLoad>
                                    </div>
                                    <div className="text-[20px] text-[#2A4C75]">
                                        At 20% of the presale tokens evenly
                                        staked to these pools, users will get
                                        50% APR
                                    </div>
                                </div>
                                <div className="rounded-full border border-dotted border-[#40beff] bg-white p-[10px] font-[900]">
                                    <span className="text-[14px] font-[900] text-[#2A4C75] md:text-[18px]">
                                        APR ={' '}
                                    </span>{' '}
                                    <span className="text-[14px] uppercase text-[#B55AD5] md:text-[18px]">
                                        % total staking rewards /
                                    </span>{' '}
                                    <span className="text-[14px] uppercase text-bg-base md:text-[18px]">
                                        % of total supply
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[1110px] max-w-[670px] rounded-[14px] border border-[#40beff] p-[40px]">
                        <div className="flex flex-col items-center justify-center gap-[16px]">
                            <div className="flex">
                                <LazyLoad height={200} once>
                                    <img src="/assets/ice2.png" alt="" />
                                </LazyLoad>
                            </div>
                            <div className="text-center text-[32px] font-[900] uppercase text-[#2A4C75]">
                                Vaporizing (Burning)
                            </div>
                            <div className="text-center text-[20px] text-[#2A4C75]">
                                When dino is heated, it turns into vapor and
                                disappears. Similarly, $DINO tokens can be
                                burned (vaporized) to reduce the total supply,
                                increasing scarcity and potentially the value of
                                the remaining tokens.
                            </div>
                        </div>
                        <div className="mt-[16px] rounded-[14px] border bg-[#64c06d21] p-[20px]">
                            <div className="flex flex-col gap-[30px]">
                                <div className="text-center text-[24px] font-[900] uppercase text-[#2A4C75] md:text-start">
                                    Mechanism
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="flex w-full max-w-[32px]">
                                        <LazyLoad height={200} once>
                                            <img
                                                src="/assets/contact.svg"
                                                alt=""
                                                className="w-full"
                                            />
                                        </LazyLoad>
                                    </div>
                                    <div className="text-[20px] text-[#2A4C75]">
                                        Users can send $DINO tokens to burn
                                        contract
                                    </div>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <div className="flex w-full max-w-[32px]">
                                        <LazyLoad height={200} once>
                                            <img
                                                src="/assets/cal_2.svg"
                                                alt=""
                                                className="w-full"
                                            />
                                        </LazyLoad>
                                    </div>
                                    <div className="text-[20px] text-[#2A4C75]">
                                        Every week, 25% of these tokens burned,
                                        25% sent to charity, and 50% are rained
                                        (raffled) among all participants giving
                                        them back from 0.1x to 10x of tokens
                                        they burned (with 2 times higher odds
                                        for getting less than 1x)
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <video
                                autoPlay={'autoplay'}
                                preload="auto"
                                loop
                                muted
                                className="mt-[80px] w-full rounded-[14px]"
                            >
                                <source
                                    src="/assets/dino_run.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 5 tokenomics */}
            <div className="px-[16px] md:px-[130px]" id="tokenomics">
                <div className="item-center flex w-full flex-col justify-center bg-bgdino3 bg-100% bg-center bg-no-repeat py-[100px]">
                    <div className="flex flex-col items-center justify-center">
                        <div className="max-w-[600px] text-center text-[32px] font-[900] text-[#2A4C75] md:text-[64px]">
                            <span className="text-[32px] text-bg-base md:text-[64px]">
                                $DINO
                            </span>
                            IS AN IMPACT TOKEN
                        </div>
                        <div className="max-w-[600px] text-center text-[20px] text-bg-base">
                            $DINO is something essential for everyone, so we
                            created the first meme tokenomics focused on funding
                            global charity and research organisations to use the
                            power of meme community to collectively change the
                            world for better
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <LazyLoad height={200} once>
                            <img src="/assets/threedino.svg" alt="" />
                        </LazyLoad>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[20px] md:flex-row">
                        <div className="flex flex-1 flex-col items-center justify-center gap-[16px]">
                            <div className="text-[60px] font-super-bold text-bg-base md:text-[64px]">
                                01
                            </div>
                            <div className="text-center text-[32px] font-[900] text-[#2A4C75]">
                                30% PRESALE + BONUS
                            </div>
                            <div className="text-center text-[20px] text-[#2A4C75]">
                                30% of DINO tokens are allocated for the presale
                                with attactive bonuses for early investors.
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-center gap-[16px]">
                            <div className="text-[60px] font-super-bold text-bg-base md:text-[64px]">
                                02
                            </div>
                            <div className="text-center text-[32px] font-[900] text-[#2A4C75]">
                                10% TEAM
                            </div>
                            <div className="text-center text-[20px] text-[#2A4C75]">
                                10% of DINO tokens are designated for the
                                development are management team to recognize
                                their contributors and ensure long-team
                                motivation.
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-center gap-[16px]">
                            <div className="text-[60px] font-super-bold text-bg-base md:text-[64px]">
                                03
                            </div>
                            <div className="text-center text-[32px] font-[900] text-[#2A4C75]">
                                40% LIQUIDITY, CEX, MM
                            </div>
                            <div className="text-center text-[20px] text-[#2A4C75]">
                                40% of DINO tokens are decidated to providing
                                liquidity, listing on centralized exchanges
                                (CEX), and market-making activities (MM) to
                                ensure token stability and ease of trading.
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-center gap-[16px]">
                            <div className="text-[60px] font-super-bold text-bg-base md:text-[64px]">
                                04
                            </div>
                            <div className="text-center text-[32px] font-[900] text-[#2A4C75]">
                                20% MARKETING
                            </div>
                            <div className="text-center text-[20px] text-[#2A4C75]">
                                20% of DINO tokens are allocated for marketing
                                and promotional activites to enhance brand
                                recognition and grow the dinosaur enthusiast
                                community.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 6 */}
            <div className="py-[30px]" id="faq">
                <div className="mb-[40px] flex flex-col items-center justify-center px-[16px] md:px-[130px]">
                    <div className="text-center text-[32px] font-super-bold text-[#2A4C75] md:text-[64px]">
                        CAMPAIGNS & PROGRAMS
                    </div>
                    <div className="text-[16px] font-bold text-bg-base">
                        Participate in contents and games for a chance to win
                        amazing dinosaur-themed prizes as books, toys, and
                        museum tickets.
                    </div>
                </div>
                <SliderFooter />
            </div>
            <LazyLoad height={200} once>
                <img
                    src="/assets/imgfooter.png"
                    alt=""
                    className="mt-[50px] w-full"
                />
            </LazyLoad>
        </div>
    );
}
