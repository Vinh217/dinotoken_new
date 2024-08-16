import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import LazyLoad from 'react-lazyload';

function SliderFooter() {
    let sliderRef = useRef(null);
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    return (
        <div className="slider-container">
            <Slider
                ref={(slider) => {
                    sliderRef = slider;
                }}
                {...settings}
            >
                <div>
                    <div className="flex flex-col gap-[5px]">
                        <LazyLoad height={200} once>
                            <img
                                src="/assets/1.png"
                                alt="1"
                                className="h-[240px] rounded-[14px] border md:h-[300px]"
                            />
                        </LazyLoad>
                        <div className="min-h-[250px] rounded-[15px] border bg-[#F7F7F7] px-[16px] py-[16px]">
                            <div className="flex flex-col items-start gap-[5px] text-[32px] font-[900] text-[#2A4C75] md:flex-row md:items-center">
                                DINO{' '}
                                <span className="text-[32px] font-[900] text-bg-base">
                                    TOURS
                                </span>
                            </div>
                            <div className="text-[18px]">
                                Escape to paradise with a luxury trip to the
                                Maldives. Stay in the best hotels, enjoy
                                crystal-clear waters, pristine beaches, and
                                indulge in world-class spa treatments.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-[5px]">
                        <LazyLoad height={200} once>
                            <img
                                src="/assets/2.png"
                                alt="1"
                                className="h-[240px] rounded-[14px] border md:h-[300px]"
                            />
                        </LazyLoad>
                        <div className="min-h-[250px] rounded-[15px] border bg-[#F7F7F7] px-[16px] py-[16px]">
                            <div className="flex flex-col items-start gap-[5px] text-[32px] font-[900] text-[#2A4C75] md:flex-row md:items-center">
                                DINO{' '}
                                <span className="text-[32px] font-[900] text-bg-base">
                                    MUSEUMS
                                </span>
                            </div>
                            <div className="text-[18px]">
                                Explore renowned dinosaur museums, where you can
                                see fossil collections, exhibitions, and engage
                                in educational activities about the ancient
                                world of dinosaurs.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-[5px]">
                        <LazyLoad height={200} once>
                            <img
                                src="/assets/3.png"
                                alt="1"
                                className="h-[240px] rounded-[14px] border md:h-[300px]"
                            />
                        </LazyLoad>
                        <div className="min-h-[250px] rounded-[15px] border bg-[#F7F7F7] px-[16px] py-[16px]">
                            <div className="flex flex-col items-start gap-[5px] text-[32px] font-[900] text-[#2A4C75] md:flex-row md:items-center">
                                DINO{' '}
                                <span className="text-[32px] font-[900] uppercase text-bg-base">
                                    Stickers
                                </span>
                            </div>
                            <div className="text-[18px]">
                                Collect and trade unique dinosaur sticker
                                collections, featuring images of various
                                dinosaur species and scenes depicting their
                                lives.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-[5px]">
                        <LazyLoad height={200} once>
                            <img
                                src="/assets/4.png"
                                alt="1"
                                className="h-[240px] rounded-[14px] border md:h-[300px]"
                            />
                        </LazyLoad>
                        <div className="min-h-[250px] rounded-[15px] border bg-[#F7F7F7] px-[16px] py-[16px]">
                            <div className="flex flex-col items-start gap-[5px] text-[32px] font-[900] text-[#2A4C75] md:flex-row md:items-center">
                                DINO{' '}
                                <span className="text-[32px] font-[900] text-bg-base">
                                    MERCH
                                </span>
                            </div>
                            <div className="text-[18px]">
                                Shop for dinosaur-related products and
                                accessories like T-shirts, hats, backpacks, and
                                toys to show off your passion for these
                                mysterious creatures.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-[5px]">
                        <LazyLoad height={200} once>
                            <img
                                src="/assets/5.png"
                                alt="1"
                                className="h-[240px] rounded-[14px] border md:h-[300px]"
                            />
                        </LazyLoad>
                        <div className="min-h-[250px] rounded-[15px] border bg-[#F7F7F7] px-[16px] py-[16px]">
                            <div className="flex flex-col items-start gap-[5px] text-[32px] font-[900] text-[#2A4C75] md:flex-row md:items-center">
                                DINO{' '}
                                <span className="text-[32px] font-[900] text-bg-base">
                                    BOOKS
                                </span>
                            </div>
                            <div className="text-[18px]">
                                Immerse yourself in the world of dinosaurs
                                through a variety of books, from illustrated
                                books and comics to detailed scientific studies,
                                suitable for all ages.
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
            <div className="flex w-full justify-center gap-[150px] pt-[40px]">
                <LazyLoad height={200} once>
                    <img
                        src="/assets/arrow-left.webp"
                        onClick={previous}
                        alt=""
                        className="w-[67px] cursor-pointer"
                    />
                </LazyLoad>
                <LazyLoad height={200} once>
                    <img
                        src="/assets/arrow-right.webp"
                        onClick={next}
                        alt=""
                        className="w-[67px] cursor-pointer"
                    />
                </LazyLoad>
            </div>
        </div>
    );
}

export default SliderFooter;
