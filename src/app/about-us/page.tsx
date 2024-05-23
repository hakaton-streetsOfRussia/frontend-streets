'use client'
import BottomContentBackground from '@/public/images/about-us/BottomContentBg.jpg'
import TopContentBackground from '@/public/images/about-us/TopContentBg.jpg'
import secondSmallMap from '@/public/images/about-us/secondSmallMap.jpg'
import Arrow from '@/public/images/about-us/smallArrow.svg'
import smallLogo from '@/public/images/about-us/smallLogo.png'
import smallMap from '@/public/images/about-us/smallMap.jpg'
import smallestMap from '@/public/images/about-us/smallestMap.jpg'
import stolpsBg from '@/public/images/about-us/stolpsBg.png'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import style from './style.module.scss'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const blog1Content = ` Два потока всероссийской образовательной программы «Менеджер улиц», включающей в себя 3 месяца обучения по трём модулям «Личность», «Команда», «Сообщество». В курсе приняло участие более 500 участников, 30 получили дипломы.`

const blog2Content = `2 сезона обучающего курса «Менеджер уличного спорта» в рамках АССК.Pro. За 2 года в курсе приняли участие более 500 студентов из разных
университетов в онлайн-этапе, более 50 — в офлайн-этапе. 3 человека прошли стажировку в организации.`

const blog3Content = `2 потока обучающего марафона по социальному проектированию «Марафон  проектировщика». Более 150 человек прошли обучение, написано свыше 90 проектов, 18  из которых получили грантовую поддержку на реализацию проектов. Общая сумма  поддержки составила 12 миллионов рублей`

const blog4Content = `Создана программа дополнительного профессионального образования в сфере  уличной культуры и спорта «Менеджмент уличных культур». Длительность обучения  составила 107 часов, пилотный курс прошли 10 человек`

const blog5Content = `Организовано и проведено 3 всероссийских образовательных форума уличной  культуры и спорта «Улицы России», в которых было более 700 участников и 100 волонтеров`

const blog6Content = `Организована и проведена стратегическая сессия для менеджеров улиц, в которой  приняли участие 50 лидеров, крупных деятелей и предпринимателей уличной куличной  культуры и спорта Российской Федерации`

export default function AboutUs() {
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

  const updateRef = useCallback(
    (ref: HTMLDivElement | null, index?: number) => {
      if (ref == null) return
      if (index) slidesRef.current[index] = ref
      else slidesRef.current.push(ref)
    },
    [slidesRef]
  )

  useEffect(() => {
    if (!sliderWrapperRef.current) return
    const slides = slidesRef.current
    sliderWrapperRef.current.scrollTo({ left: slides[activeSlide].offsetLeft, behavior: 'smooth' })
  }, [activeSlide])

  return (
    <main className={style.main}>
      <div className={style.topContent}>
        <Image fill style={{ zIndex: -10 }} src={TopContentBackground} alt="concrete" priority />
        <h1 className={style.title}>О нас</h1>
        <p className={style.about}>
          Общероссийская общественная организация уличной культуры и спорта «Улицы России» зарегистрирована в качестве юридического лица Министерством
          Юстиции Российской Федерации 28.10.2021 г.. Деятельность в качестве общественной организации осуществляется с сентября 2020 г.
        </p>
        <div className={style.center}>
          <div className={style.videoWrapper}>
            <ReactPlayer
              url="https://www.youtube.com/embed/9rzrFQdE7JM?si=hG1nT9l-jonCyJQG"
              autoPlay
              loop
              width="100%"
              height="100%"
              controls={false}
              playing={true}
              volume={0}
              muted={true}
            />
          </div>
        </div>
        <h2 className={style.subtitle}>Улицы начинаются с тебя!</h2>
        <h3 className={style.sectionTitle} style={{ backgroundColor: '#ffffff', color: 'black' }}>
          НАШИ ЦЕННОСТИ
        </h3>
        <div className={style.sliderWrapper} ref={sliderWrapperRef}>
          <div className={style.sliderItem} ref={updateRef}>
            <span className={style.sliderItemTitle}>Новаторство</span>
            <p className={style.sliderContent}>проект “Улицы России” возник из идеи и желания создавать новое и быть полезными окружающим.</p>
          </div>
          <div className={style.sliderItem} ref={updateRef}>
            <span className={style.sliderItemTitle}>Открытость</span>
            <p className={style.sliderContent}>
              Мы поддерживаем политику открытости и прозрачности в наших коммуникациях. Мы отвечаем за свои слова и придерживаемся информационной
              открытости.
            </p>
          </div>
          <div className={style.sliderItem} ref={updateRef}>
            <span className={style.sliderItemTitle}>Общность</span>
            <p className={style.sliderContent}>
              Наши убеждения и ценности нерушимы, как настоящая семья, а комьюнити на столько сплоченное, что ты без труда можешь отправиться в гости
              на другую часть страны и быть дома.
            </p>
          </div>
          <div className={style.sliderItem} ref={updateRef}>
            <span className={style.sliderItemTitle}>Здоровье </span>
            <p className={style.sliderContent}>
              Мы преследуем цель здорового развития среди уличных атлетов. В каждой дисциплине есть свои тонкости тренировочного поцессаи спртивной
              деятельности, поэтому наша цель привить подрастающему поколению правильное отношение к себе и своему здоровью.
            </p>
          </div>
          <div className={style.sliderItem} ref={updateRef}>
            <span className={style.sliderItemTitle}>Доброжелательность</span>
            <p className={style.sliderContent}>
              Только по-настоящему сильным духом люди могут верить в добро и всегда на помощь приходят люди, она защищает слабых и помогают
              нуждающимся.
            </p>
          </div>
        </div>
        <div className={style.sliderButtons}>
          <button type="button" className={style.sliderButton} onClick={decreaseActiveSlide}>
            <Arrow style={{ rotate: '180deg' }} />
          </button>
          <button type="button" className={style.sliderButton} onClick={increaseActiveSlide}>
            <Arrow />
          </button>
        </div>
      </div>
      <div className={style.midContent}>
        <Image fill src={TopContentBackground} alt="concrete" priority style={{ zIndex: -10 }} />
        <div className={style.stolps}>
          <Image fill src={stolpsBg} alt="street" />
          <div className={style.stolpWrapper}>
            <span className={style.stolpTitle}>Миссия</span>
            <p className={style.stolpContent}>
              Создать условия для успешной реализации потенциала каждого связанного с уличными дисциплинами в духовной и профессиональной сфере.
            </p>
            <div className={style.border}></div>
            iI
          </div>
          <div className={style.stolpWrapper}>
            <span className={style.stolpTitle}>Цель</span>
            <p className={style.stolpContent}>
              Комплексное развитие уличной культуры и спорта. Популяризация уличных дисциплин. Создание положительного образа в информационном
              пространстве у дисциплин, которые считаются травмоопасными и агрессивными
            </p>
            <div className={style.border}></div>
          </div>
          <div className={style.stolpWrapper}>
            <span className={style.stolpTitle}>Суть</span>
            <p className={style.stolpContent}>Помочь реализовать потенциал каждого уличного спортсмена стать лучшей версией себя.</p>
          </div>
          I
        </div>
      </div>

      <div className={style.bottomContent}>
        <Image src={BottomContentBackground} alt="concrete" fill priority style={{ zIndex: -10 }} />
        <h3 className={style.sectionTitle} style={{ backgroundColor: '#1E5B9C', color: '#ffffff' }}>
          ОБРАЗОВАТЕЛЬНАЯ ПРОГРАММА: МЕНЕДЖЕР УЛИЦ
        </h3>
        <div className={style.mapInfoWrapper}>
          <p className={style.mapText}>
            Одно из основных направлений деятельности «Улиц России» - наука и образование. Мы создаём образовательные курсы разных направлений,
            работаем над созданием дополнительного образования, направлений подготовки в магистратуре и бакалавриате. Для достижения всех показателей
            в сфере создания инновационного образования в 2021 году было заключено соглашение с Северо-Кавказским федеральным университетом
          </p>
          <Image className={style.smallMapWithText} src={smallMap} alt="map image" />
        </div>
        <div className={style.blogsWrapper}>
          <div className={style.blog}>
            <span className={style.blogTitle} style={{ color: 'black' }}>
              Блог 1
            </span>
            <p className={style.blogContent}>{blog1Content}</p>
          </div>
          <div className={style.blog}>
            <span className={style.blogTitle} style={{ color: '#1E5B9C' }}>
              Блог 2
            </span>
            <p className={style.blogContent}>{blog2Content}</p>
          </div>
          <div className={style.blog}>
            <span className={style.blogTitle} style={{ color: '#B73A34' }}>
              Блог 3
            </span>
            <p className={style.blogContent}>{blog3Content}</p>
          </div>
          <div className={style.blog}>
            <span className={style.blogTitle} style={{ color: 'black' }}>
              Блог 4
            </span>
            <p className={style.blogContent}>{blog4Content}</p>
          </div>
          <div className={style.blog}>
            <span className={style.blogTitle} style={{ color: '#1E5B9C' }}>
              Блог 5
            </span>
            <p className={style.blogContent}>{blog5Content}</p>
          </div>
          <div className={style.blog}>
            <span className={style.blogTitle} style={{ color: '#B73A34' }}>
              Блог 6
            </span>
            <p className={style.blogContent}>{blog6Content}</p>
          </div>
        </div>

        <h3 className={style.sectionTitle} style={{ backgroundColor: '#B73A34', color: 'white' }}>
          ФЛАГМАНСКИЕ ФЕДЕРАЛЬНЫЕ ПРОЕКТЫ
        </h3>

        <div className={style.bigProjectsWrapper}>
          <div className={style.bigProject}>
            <span className={style.bigProjectTitle}>
              КАРДО <Image src={smallestMap} alt="#" />
            </span>
            <hr />
            <p className={style.bigProjectContent}>
              Международная конкурс-премия уличной культуры и спорта «КАРДО». Проект транслирует идею #улицысегодня, где рассказывается о самых
              интересных деятелях и кейсах уличного мира, а лучшие получают поддержку. Проект стал настоящим прорывом русской идеи и смыслов в мире, а
              иностранные коллеги из более чем 40 стран мира признали премию и стали участниками и экспертами. Сегодня аналогов премии в мире нет ни
              по смыслам, ни по масштабу
            </p>
            <span className={style.bigProjectStats}>
              <span>64 579</span>участников проекта
            </span>
            <span className={style.bigProjectStats}>
              <span>76 000 000</span>медия охват
            </span>
          </div>
          <div className={style.bigProject}>
            <span className={style.bigProjectTitle}>
              <Image src={smallLogo} alt="#" />
              <Image src={secondSmallMap} alt="#" />
            </span>
            <hr />
            <p className={style.bigProjectContent}>
              Международная конкурс-премия уличной культуры и спорта «КАРДО». Проект транслирует идею #улицысегодня, где рассказывается о самых
              интересных деятелях и кейсах уличного мира, а лучшие получают поддержку. Проект стал настоящим прорывом русской идеи и смыслов в мире, а
              иностранные коллеги из более чем 40 стран мира признали премию и стали участниками и экспертами. Сегодня аналогов премии в мире нет ни
              по смыслам, ни по масштабу
            </p>
            <span className={style.bigProjectStats}>
              <span>300</span>
              лидеров уличной культуры и спорта
            </span>
            <span className={style.bigProjectStats}>
              <span>4 912 000</span>
              медия охват
            </span>
          </div>
        </div>

        <h3 className={style.sectionTitle} style={{ backgroundColor: '#B73A34', color: 'white' }}>
          ФЛАГМАНСКИЕ РЕГИОНАЛЬНЫЕ ПРОЕКТЫ
        </h3>

        <div className={style.smallProjectsWrapper}>
          <div className={style.smallProject}>
            <p>Межрегиональный фестиваль уличных культур и спорта “Улицы Коми”</p>
            <div className={style.statsWrapper}>
              <span className={style.stats}>
                <span className={style.number}>2 500</span>количество зрителей
              </span>
              <span className={style.stats}>
                <span className={style.number}>200</span>количество участников
              </span>
            </div>
          </div>
          <div className={style.smallProject}>
            <p>Фестиваль уличной культуры и уличных видов спорта «Короли улиц»</p>
            <div className={style.statsWrapper}>
              <span className={style.stats}>
                <span className={style.number}>2 000</span>количество зрителей
              </span>
              <span className={style.stats}>
                <span className={style.number}>300</span>количество участников
              </span>
            </div>
          </div>
          <div className={style.smallProject}>
            <p>Фестиваль уличной культуры и спорта «Шумиха x Карго»</p>
            <div className={style.statsWrapper}>
              <span className={style.stats}>
                <span className={style.number}>500</span>количество зрителей
              </span>
              <span className={style.stats}>
                <span className={style.number}>200</span>количество участников
              </span>
            </div>
          </div>
          <div className={style.smallProject}>
            <p>Образовательный форум уличной культуры и спорта “Улицы Коми”</p>
            <div className={style.statsWrapper}>
              <span className={style.stats}>
                <span className={style.number}>250</span>количество зрителей
              </span>
              <span className={style.stats}>
                <span className={style.number}>50</span>количество участников
              </span>
            </div>
          </div>
          <div className={style.smallProject}>
            <p>Всероссийский фестиваль по хип-хопу и брейкингу Energy</p>
            <div className={style.statsWrapper}>
              <span className={style.stats}>
                <span className={style.number}>300</span>количество зрителей
              </span>
              <span className={style.stats}>
                <span className={style.number}>900</span>количество участников
              </span>
            </div>
          </div>
          <div className={style.smallProject}>
            <p>В Ритме улиц</p>
            <div className={style.statsWrapper}>
              <span className={style.stats}>
                <span className={style.number}>300</span>количество зрителей
              </span>
              <span className={style.stats}>
                <span className={style.number}>100</span>количество участников
              </span>
            </div>
          </div>
          <div className={style.smallProject}>
            <p>Фестиваль экстремальных видов спорта «Жара»</p>
            <div className={style.statsWrapper}>
              <span className={style.stats}>
                <span className={style.number}>150</span>количество зрителей
              </span>
              <span className={style.stats}>
                <span className={style.number}>100</span>количество участников
              </span>
            </div>
          </div>
          <div className={style.smallProject}>
            <p>Фестиваль уличных видов спорта STREET FEST</p>
            <div className={style.statsWrapper}>
              <span className={style.stats}>
                <span className={style.number}>1 200</span>количество зрителей
              </span>
              <span className={style.stats}>
                <span className={style.number}>1 000</span>количество участников
              </span>
            </div>
          </div>
          <div className={style.smallProject}>
            <p>Фестиваль уличной культуры и спорта «Сура Фест»</p>
            <div className={style.statsWrapper}>
              <span className={style.stats}>
                <span className={style.number}>5000</span>количество зрителей
              </span>
              <span className={style.stats}>
                <span className={style.number}>300</span>количество участников
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
