import { Abril_Fatface } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { motion } from 'framer-motion';

const slides = [
    {
        id: 1,
        image: '/assets/image/perfumewonan.png',
        heading: 'Not just perfume. An experience.',
        name1: 'Empire ',
        name2: 'Fragrance!',
        buttonText: 'Shop Now',
    },
    {
        id: 2,
        image: '/assets/image/perfumeman2.png',
        heading: 'Command the room. Elegance, bottled.',
        name1: 'Empire ',
        name2: 'Fragrance!',
        buttonText: 'Shop Now',
    },
    {
        id: 3,
        image: '/assets/image/perfumewoman2.png',
        heading: 'Luxury in every drop. Redefines timeless allure.',
        name1: 'Empire ',
        name2: 'Fragrance!',
        buttonText: 'Explore Collections',
    },
];

const greatVibes = Abril_Fatface({
    subsets: ['latin'],
    weight: ['400'],
});

export default function LandingSlider() {
     const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="relative w-full h-[500px] xs:h-[600px] overflow-hidden bg-gradient-to-bl pt-4 from-[#171717] via-[#464646] to-[#171717]">
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                speed={1000}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div className="flex justify-center items-center w-full h-[500px] xs:h-[600px] relative">
                            {activeIndex === index && (
                                <motion.div
                                    key={index}
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1, duration: 0.8 }}

                                    className="relative flex flex-col w-full justify-center items-start pl-4 xs:pl-8 gap-4 z-10 rounded-md bg-white/10 p-4"
                                >
                                    <h1 className="font-bold text-2xl text-[#2CA6A6]">{slide.heading}</h1>

                                    <div className="flex gap-2 flex-col items-center justify-center">
                                        <h1 className={`${greatVibes.className} font-extrabold text-4xl flex flex-nowrap text-[#E07529]`}>
                                            {slide.name1}
                                        </h1>
                                        <h1 className={`${greatVibes.className} font-extrabold text-4xl flex flex-nowrap text-[#E07529]`}>
                                            {slide.name2}
                                        </h1>
                                    </div>

                                    <button className="px-4 py-2 w-full max-w-[220px] hover:bg-white flex justify-center items-center bg-gray-300 rounded text-gray-700 hover:text-gray-900 font-bold transition duration-300">
                                        {slide.buttonText}
                                    </button>
                                </motion.div>)}

                            <Image
                                src={slide.image}
                                alt="Slide Image"
                                width={500}
                                height={500}
                                className="object-cover absolute top-0 right-0 h-[500px] xs:h-[600px]"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}