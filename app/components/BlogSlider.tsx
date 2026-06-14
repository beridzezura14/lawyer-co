"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useI18n } from "../i18n";

import "swiper/css";
import "swiper/css/pagination";

const images = [
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop",
];

const BlogSlider = () => {
  const { t } = useI18n();

  return (
    <section className="bg-[#f8f5f0] py-20 md:py-24 px-5 lg:px-20 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="relative"
      >
        {t.blog.posts.map((post, index) => (
          <SwiperSlide key={post.title}>
            <div className="group relative overflow-hidden aspect-[4/3] cursor-grab active:cursor-grabbing rounded-sm">
              <Image
                src={images[index]}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />

              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 text-white z-10">
                <h4 className="text-xl md:text-2xl font-serif mb-2 transition-transform duration-500 group-hover:-translate-y-1">
                  {post.title}
                </h4>
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="w-6 h-[1px] bg-white/40 transition-all duration-500 group-hover:w-10 group-hover:bg-white" />
                  <p className="text-[10px] uppercase tracking-[0.24em] md:tracking-[0.3em] font-bold opacity-70 group-hover:opacity-100 transition-opacity">
                    {post.category}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="custom-pagination mt-12 flex justify-center gap-2" />
      </Swiper>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #3d1d1a;
          opacity: 0.2;
          transition: all 0.3s ease;
          border-radius: 0;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          background: #3d1d1a;
        }
      `}</style>
    </section>
  );
};

export default BlogSlider;
