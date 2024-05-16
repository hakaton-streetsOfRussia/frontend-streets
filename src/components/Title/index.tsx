import { ReactComponent as LogoBig } from '@/images/logo-big.svg'
import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import style from './style.module.scss'
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
          <LogoBig className={style.logo} />
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
        </div>
      </div>
    </div>
  )
}
