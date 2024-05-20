'use client'
import BackgroundImg from '@/public/images/desciplines_bg.jpg'
import StreetArtDemoPath from '@/public/images/street-art-demo.jpg'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Marquee from 'react-fast-marquee'
import style from './style.module.scss'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

export default function Disciplines() {
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
      <button>Street Art</button>
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
    </main>
  )
}
