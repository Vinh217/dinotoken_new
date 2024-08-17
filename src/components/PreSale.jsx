import TextHeader from './common/TextHeader';
import CountdownTimer from './CountdownTimer';
import Paragraph from './common/Paragraph';

export default function PreSale() {
    // const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;
    // const NOW_IN_MS = new Date().getTime();
    // const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;
    const dateTimeAfter30_8 = new Date('2024-08-30T00:00:00').getTime();

    return (
        <div
            id="presale"
            className="flex w-full flex-col items-center justify-center bg-bg-primary px-[16px] py-[50px] md:px-[130px]"
        >
            <TextHeader classes={'font-potta-one text-center py-[30px]'}>
                Presale detail
            </TextHeader>
            <div className="flex h-[270px] w-full items-center justify-center bg-plant-dino bg-100% bg-center bg-no-repeat md:h-[600px]">
                <div className="flex flex-col items-center justify-center gap-[10px] py-[20px] md:gap-[24px]">
                    <CountdownTimer targetDate={dateTimeAfter30_8} />
                    <Paragraph>MIN: TBA</Paragraph>
                    <Paragraph>MAX: TBA</Paragraph>
                    <div className="flex gap-[12px]">
                        <div className="flex h-[20px] w-[20px] items-center justify-center rounded-[30px] bg-[#FC9F4F] text-[14px] text-white">
                            <img src="/assets/arrow-right.svg" alt="" />
                        </div>
                        <Paragraph>0xxxxxxxxxx</Paragraph>
                    </div>
                    <Paragraph
                        classes={
                            'text-white px-[20px] py-[12px] bg-[#FC9F4F] font-[600] rounded-[4px] cursor-pointer'
                        }
                    >
                        Buy $Dino Now
                    </Paragraph>
                </div>
            </div>
        </div>
    );
}
