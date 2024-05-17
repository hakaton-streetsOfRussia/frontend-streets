'use client'
import LogoVideo from '@/public/images/logo-video.svg'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import style from './style.module.scss'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })
export const Title = ({ videoUrl }: { videoUrl: string }) => {
  const videoWrapperRef = useRef<HTMLDivElement>(null)
  const [videoSize, setVideoSize] = useState({ width: 0, height: 0 })
  useEffect(() => {
    if (!videoWrapperRef.current) return
    setVideoSize({ width: videoWrapperRef.current.offsetWidth, height: videoWrapperRef.current.offsetHeight })
  }, [videoWrapperRef])
  return (
    <div className={style.wrapper}>
      <div className={style.videoWrapper} ref={videoWrapperRef}>
        <div className={style.logoWrapper}>
          <LogoVideo className={style.logo} fill="white" />
          <p>Общероссийская общественная организация</p>
        </div>
        <div className={style.playerWrapper}>
          <ReactPlayer
            width={videoSize.width}
            height={videoSize.height}
            url={videoUrl}
            autoPlay
            loop
            controls={false}
            playing={true}
            volume={0}
            muted={true}
          />
          <div className={style.fogging}></div>
        </div>
      </div>
    </div>
  )
}
