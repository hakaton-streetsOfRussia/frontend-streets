'use client'
import BackgroundImg from '@/public/images/desciplines_bg.jpg'
import Arrow from '@/public/images/street-art/nav-arrow.svg'
import StreetArt2 from '@/public/images/street-art/street-art-2.jpg'
import StreetArt3 from '@/public/images/street-art/street-art-3.jpg'
import StreetArt4 from '@/public/images/street-art/street-art-4.jpg'
import StreetArt5 from '@/public/images/street-art/street-art-5.jpg'
import StreetArtDemoPath from '@/public/images/street-art/street-art-demo.jpg'

import { DropDownContent } from '@/src/components/DropDownContent'
import { possibleDisciplines } from '@/src/utils/variables'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import Marquee from 'react-fast-marquee'
import style from './style.module.scss'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

export default function Disciplines() {
  //drop down logic
  const [dropDownIsOpened, setDropDownIsOpened] = useState(false)
  const [disciplinesIndex, setDisciplinesIndex] = useState(0)

  //slides logic
  const sliderWrapperRef = useRef<HTMLDivElement>(null)
  const slidesRef = useRef<HTMLDivElement[]>([])
  const [activeSlide, setActiveSlide] = useState(0)
  const increaseActiveSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1 >= slidesRef.current.length ? 0 : prev + 1))
  }, [setActiveSlide])
  const decreaseActiveSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 < 0 ? slidesRef.current.length - 1 : prev - 1))
  }, [setActiveSlide])

  //on active slide change
  useEffect(() => {
    if (!sliderWrapperRef.current) return
    const slides = slidesRef.current
    sliderWrapperRef.current.scrollTo({ left: slides[activeSlide].offsetLeft, behavior: 'smooth' })
  }, [activeSlide])

  const setUpSliderRef = useCallback(
    (elem: HTMLDivElement | null) => {
      if (elem != null) slidesRef.current.push(elem)
    },
    [slidesRef]
  )
  const videoWrapperRef = useRef<HTMLDivElement>(null)
  const [videoSize, setVideoSize] = useState({ width: 0, height: 0 })
  useEffect(() => {
    if (!videoWrapperRef.current) return
    setVideoSize({ width: videoWrapperRef.current.offsetWidth, height: videoWrapperRef.current.offsetHeight })
  }, [videoWrapperRef])
  return (
    <main className={style.main}>
      <Image fill style={{ zIndex: -1 }} src={BackgroundImg} alt="concrete" />
      <h2 className={style.title}>Дисциплины</h2>
      <button type="button" className={style.dropDownButton} onClick={() => setDropDownIsOpened((prev) => !prev)}>
        {possibleDisciplines[disciplinesIndex].label}
        <DropDownContent
          options={possibleDisciplines}
          setterFunction={setDisciplinesIndex}
          activeIndex={disciplinesIndex}
          isOpened={dropDownIsOpened}
        />
      </button>
      <div className={style.demoWrapper}>
        <div className={style.textWrapper}>
          <p>
            <span>Стрит-арт</span> — это разновидность современного урбанистического искусства. Бытует широкое заблуждение, что граффити является
            единственным проявлением стрит-арт. Однако, это не так, <span>граффити является лишь одним</span> из видов уличного искусства, но далеко
            не единственным.
          </p>
          <p>
            <span>Разделение на стили</span> можно наблюдать, в основном, среди граффити: writing, bombing, tagging, bubble-letter, throw-up,
            character, wild style, 3D-style.Стрит-арт своеобразный способ выразить себя и своё творчество, а также самоутвердиться в обществе.
          </p>
        </div>
        <Image src={StreetArtDemoPath} alt="demo" />
      </div>
      <div className={style.line} />
      <div className={style.videoWrapper} ref={videoWrapperRef}>
        <ReactPlayer
          url="https://www.youtube.com/embed/9rzrFQdE7JM?si=hG1nT9l-jonCyJQG"
          width={videoSize.width}
          height={videoSize.height}
          autoPlay
          loop
          controls={false}
          playing={true}
          volume={0}
          muted={true}
        />
      </div>
      <div className={style.lineWrapper}>
        <Marquee>
          <span className={style.runningLine}># Улицы России # Улицы начинаются с тебя # Город # Мы # Дружба </span>
        </Marquee>
      </div>
      <div className={style.sliderWrapper} ref={sliderWrapperRef}>
        <Image className={style.slideImage} ref={setUpSliderRef} src={StreetArtDemoPath} alt="art on wall" />
        <Image className={style.slideImage} ref={setUpSliderRef} src={StreetArt2} alt="art on house" />
        <Image className={style.slideImage} ref={setUpSliderRef} src={StreetArt3} alt="art on wall" />
        <Image className={style.slideImage} ref={setUpSliderRef} src={StreetArt4} alt="art under bridge" />
        <Image className={style.slideImage} ref={setUpSliderRef} src={StreetArt5} alt="abstract art" />
      </div>
      <div className={style.sliderButtons}>
        <button type="button" className={style.sliderButton} onClick={decreaseActiveSlide}>
          <Arrow style={{ rotate: '180deg' }} />
        </button>
        <button type="button" className={style.sliderButton} onClick={increaseActiveSlide}>
          <Arrow />
        </button>
      </div>
    </main>
  )
}
