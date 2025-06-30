// @ts-nocheck
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import hackxilaImg from "/assets/About/hackxila.jpg";
import fypImg from "/assets/About/fyp.jpg";

const images = [
  { 
    src: hackxilaImg, 
    alt: "Moosa Qaisar at HackXila competition",
    captions: [
      { text: "Builder.", color: "text-orange-400" },
      { text: "Competitor.", color: "text-blue-400" }
    ]
  },
  { 
    src: fypImg, 
    alt: "Moosa Qaisar with FYP group",
    captions: [
      { text: "Researcher.", color: "text-green-400" },
      { text: "Innovator.", color: "text-purple-400" }
    ]
  }
];

export default function AboutSection() {
  return (
    <section className="relative">
      <div className="relative mb-12">
        <Swiper
          modules={[EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{ clickable: true }}
          className="w-full h-auto rounded-2xl"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-start items-start py-2 px-4 sm:py-4 sm:px-6 md:px-12 bg-gradient-to-r from-[color-mix(in_oklch,black_25%,transparent)] to-transparent">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 text-white custom-outline">
                  Moosa Qaisar
                </h1>
                <div className="flex flex-row space-x-2">
                  {image.captions.map((caption, idx) => (
                    <p key={idx} className={`text-lg sm:text-xl md:text-2xl opacity-90 font-light ${caption.color} custom-outline`}>
                      {caption.text}
                    </p>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="space-y-6">
        <div className="prose prose-adaptive prose-lg max-w-none">
          <p className="text-xl leading-relaxed">
            As a Computer Engineering student with a strong passion for
            Artificial Intelligence and Machine Learning, I am dedicated to
            building smart, end-to-end solutions. I have hands-on experience
            in developing and implementing machine learning models, with a focus
            on computer vision and Natural Language Processing.
          </p>
        </div>
      </div>
    </section>
  );
}
