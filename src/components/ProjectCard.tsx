import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

interface ProjectCardProps {
    title: string;
    images: { src: string; alt: string }[];
    description: string;
    frontend: string;
    backend: string;
}

export const ProjectCard = ({ title, images, description, frontend, backend }: ProjectCardProps) => {
    return (
        <div className="flex items-center justify-center flex-col gap-y-4 p-2 border border-sec-text h-[480px] w-[450px] rounded-lg hover:shadow-md hover:shadow-sec-text transition-all ease-in-out duration-500 max520:h-[400px] max520:w-[370px] max425:w-[340px] max375:w-[310px]">
            <h2 className="text-[25px] font-semibold text-prim-text">{title}</h2>

            <Swiper
                modules={[Autoplay, Pagination]}
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                loop
                autoplay={{ delay: 3000 }}
                className="w-[400px] h-[250px] max520:w-[320px] max425:w-[290px] max375:w-[260px]"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" className="rounded-sm border-none"/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
                
            <p className="text-center px-2 text-details">{description}</p>
            <p className="text-center px-2 text-details">{frontend}</p>
            <p className="text-center px-2 text-details">{backend}</p>
        </div>
    )
}