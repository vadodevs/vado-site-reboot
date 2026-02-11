import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

export function Hero() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  const onSwiper = (swiper: SwiperType) => {
    swiper.on('slideChange', () => {
      const video = videoRef.current;
      if (video && swiper.activeIndex === 0) {
        video.play().catch(() => {});
      }
    });
  };

  return (
    <section className="relative w-full max-w-[100vw] overflow-x-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        className="h-screen w-full"
        slidesPerView={1}
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSwiper={onSwiper}
      >
        <SwiperSlide className="h-full! w-full!">
          <div className="relative h-screen w-full">
            <video
              ref={videoRef}
              src="/hero/hero-slide.mp4"
              className="absolute inset-0 h-full w-full object-cover object-center"
              style={{ minWidth: '100%', minHeight: '100%' }}
              muted
              loop
              playsInline
              aria-hidden
            />
            <div className="absolute inset-0 bg-black/40" aria-hidden />
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight drop-shadow-md sm:text-5xl md:text-6xl">
                {t('home.heading')}
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white/90 drop-shadow sm:text-xl">
                {t('home.heroSubheading')}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
