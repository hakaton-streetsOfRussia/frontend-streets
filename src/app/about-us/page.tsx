'use client'
import smallMap from '@/public/images/about-us/smallMap.jpg'
import smallestMap from '@/public/images/about-us/smallestMap.jpg'
import Arrow from '@/public/images/disciplines/nav-arrow.svg'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import style from './style.module.scss'

const blog1Content = ` Два потока всероссийской образовательной программы «Менеджер улиц», включающей в себя 3 месяца обучения по трём модулям «Личность», «Команда», «Сообщество». В курсе приняло участие более 500 участников, 30 получили дипломы.`

const blog2Content = `2 сезона обучающего курса «Менеджер уличного спорта» в рамках АССК.Pro. За 2 года в курсе приняли участие более 500 студентов из разных
университетов в онлайн-этапе, более 50 — в офлайн-этапе. 3 человека прошли стажировку в организации.`

const blog3Content = `2 потока обучающего марафона по социальному проектированию «Марафон  проектировщика». Более 150 человек прошли обучение, написано свыше 90 проектов, 18  из которых получили грантовую поддержку на реализацию проектов. Общая сумма  поддержки составила 12 миллионов рублей`

const blog4Content = `Создана программа дополнительного профессионального образования в сфере  уличной культуры и спорта «Менеджмент уличных культур». Длительность обучения  составила 107 часов, пилотный курс прошли 10 человек`

const blog5Content = `Организовано и проведено 3 всероссийских образовательных форума уличной  культуры и спорта «Улицы России», в которых было более 700 участников и 100 волонтеров`

const blog6Content = `Организована и проведена стратегическая сессия для менеджеров улиц, в которой  приняли участие 50 лидеров, крупных деятелей и предпринимателей уличной куличной  культуры и спорта Российской Федерации`

export default function AboutUs() {
  const videoWrapperRef = useRef<HTMLDivElement>(null)
  const [videoSize, setVideoSize] = useState({ width: 0, height: 0 })
  useEffect(() => {
    if (!videoWrapperRef.current) return
    setVideoSize({ width: videoWrapperRef.current.offsetWidth, height: videoWrapperRef.current.offsetHeight })
  }, [videoWrapperRef])

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

  return (
    <main>
      <h1 className={style.title}>О нас</h1>
      <p className={style.about}>
        Общероссийская общественная организация уличной культуры и спорта «Улицы России» зарегистрирована в качестве юридического лица Министерством
        Юстиции Российской Федерации 28.10.2021 г.. Деятельность в качестве общественной организации осуществляется с сентября 2020 г.
      </p>
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
      <h2 className={style.subtitle}>Улицы начинаются с тебя!</h2>
      <h3 className={style.openTitle}>НАШИ ЦЕННОСТИ</h3>
      <div className={style.sliderWrapper} ref={sliderWrapperRef}>
        <div className={style.sliderItem}>
          <span className={style.sliderItemTitle}>Новаторство</span>
          <p className={style.sliderContent}>проект “Улицы России” возник из идеи и желания создавать новое и быть полезными окружающим.</p>
        </div>
        <div className={style.sliderItem}>
          <span className={style.sliderItemTitle}>Открытость</span>
          <p className={style.sliderContent}>
            Мы поддерживаем политику открытости и прозрачности в наших коммуникациях. Мы отвечаем за свои слова и придерживаемся информационной
            открытости.
          </p>
        </div>
        <div className={style.sliderItem}>
          <span className={style.sliderItemTitle}>Общность</span>
          <p className={style.sliderContent}>
            Наши убеждения и ценности нерушимы, как настоящая семья, а комьюнити на столько сплоченное, что ты без труда можешь отправиться в гости на
            другую часть страны и быть дома.
          </p>
        </div>
        <div className={style.sliderItem}>
          <span className={style.sliderItemTitle}>Здоровье </span>
          <p className={style.sliderContent}>
            Мы преследуем цель здорового развития среди уличных атлетов. В каждой дисциплине есть свои тонкости тренировочного поцессаи спртивной
            деятельности, поэтому наша цель привить подрастающему поколению правильное отношение к себе и своему здоровью.
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

      <div className={style.stolps}>
        <div className={style.stolpWrapper}>
          <span className={style.stolpTitle}></span>
          <p className={style.stolcContent}></p>
        </div>
        <div className={style.stolpWrapper}>
          <span className={style.stolpTitle}></span>
          <p className={style.stolcContent}></p>
        </div>
        <div className={style.stolpWrapper}>
          <span className={style.stolpTitle}></span>
          <p className={style.stolcContent}></p>
        </div>
      </div>

      <h3 className={style.sectionTitle}>ОБРАЗОВАТЕЛЬНАЯ ПРОГРАММА: МЕНЕДЖЕР УЛИЦ</h3>
      <div className="mapTextWrapper">
        <p>
          Одно из основных направлений деятельности «Улиц России» - наука и образование. Мы создаём образовательные курсы разных направлений, работаем
          над созданием дополнительного образования, направлений подготовки в магистратуре и бакалавриате. Для достижения всех показателей в сфере
          создания инновационного образования в 2021 году было заключено соглашение с Северо-Кавказским федеральным университетом
        </p>
        <Image src={smallMap} alt="#" />
      </div>
      <div className={style.blogsWrapper}>
        <div className={style.blog}>
          <span className={style.blogTitle}>Блог 1</span>
          <p className={style.blogContent}>{blog1Content}</p>
        </div>
        <div className={style.blog}>
          <span className={style.blogTitle}>Блог 2</span>
          <p className={style.blogContent}>{blog2Content}</p>
        </div>
        <div className={style.blog}>
          <span className={style.blogTitle}>Блог 3</span>
          <p className={style.blogContent}>{blog3Content}</p>
        </div>
        <div className={style.blog}>
          <span className={style.blogTitle}>Блог 4</span>
          <p className={style.blogContent}>{blog4Content}</p>
        </div>
        <div className={style.blog}>
          <span className={style.blogTitle}>Блог 5</span>
          <p className={style.blogContent}>{blog5Content}</p>
        </div>
        <div className={style.blog}>
          <span className={style.blogTitle}>Блог 6</span>
          <p className={style.blogContent}>{blog6Content}</p>
        </div>
      </div>

      <h3 className={style.sectionTitle} style={{ backgroundColor: '#B73A34' }}>
        ФЛАГМАНСКИЕ ФЕДЕРАЛЬНЫЕ ПРОЕКТЫ
      </h3>

      <div className={style.BigProjects}>
        <div className={style.bigProject}>
          <span className={style.title}>
            КАРДО <Image src={smallestMap} alt="#" />
          </span>
          <hr />
          <p className={style.content}>
            Международная конкурс-премия уличной культуры и спорта «КАРДО». Проект транслирует идею #улицысегодня, где рассказывается о самых
            интересных деятелях и кейсах уличного мира, а лучшие получают поддержку. Проект стал настоящим прорывом русской идеи и смыслов в мире, а
            иностранные коллеги из более чем 40 стран мира признали премию и стали участниками и экспертами. Сегодня аналогов премии в мире нет ни по
            смыслам, ни по масштабу
          </p>
          <span className={style.stats}>
            <span className={style.numbers}>64 579</span>участников проекта
          </span>
          <span className={style.stats}>
            <span className={style.numbers}>76 000 000</span>медия охват
          </span>
        </div>
        <div className={style.bigProject}>
          <span className={style.title}>Улицы России</span>
          <hr />
          <p className={style.content}>
            Международная конкурс-премия уличной культуры и спорта «КАРДО». Проект транслирует идею #улицысегодня, где рассказывается о самых
            интересных деятелях и кейсах уличного мира, а лучшие получают поддержку. Проект стал настоящим прорывом русской идеи и смыслов в мире, а
            иностранные коллеги из более чем 40 стран мира признали премию и стали участниками и экспертами. Сегодня аналогов премии в мире нет ни по
            смыслам, ни по масштабу
          </p>
          <span className={style.stats}>
            <span className={style.numbers}>300</span>
            лидеров уличной культуры и спорта
          </span>
          <span className={style.stats}>
            <span className={style.numbers}>4 912 000</span>
            медия охват
          </span>
        </div>
      </div>

      <h3 className={style.sectionTitle} style={{ backgroundColor: '#B73A34' }}>
        ФЛАГМАНСКИЕ РЕГИОНАЛЬНЫЕ ПРОЕКТЫ
      </h3>

      <div className={style.smallProjectsWrapper}>
        <div className={style.smallProject}>
          <p>Межрегиональный фестиваль уличных культур и спорта “Улицы Коми”</p>
          <span className={style.stats}>
            <span className={style.number}>2 500</span>количество зрителей
          </span>
          <span className={style.stats}>
            <span className={style.number}>200</span>количество участников
          </span>
        </div>
        <div className={style.smallProject}>
          <p>Фестиваль уличной культуры и уличных видов спорта «Короли улиц»</p>
          <span className={style.stats}>
            <span className={style.number}>2 000</span>количество зрителей
          </span>
          <span className={style.stats}>
            <span className={style.number}>300</span>количество участников
          </span>
        </div>
        <div className={style.smallProject}>
          <p>Фестиваль уличной культуры и спорта «Шумиха x Карго»</p>
          <span className={style.stats}>
            <span className={style.number}>500</span>количество зрителей
          </span>
          <span className={style.stats}>
            <span className={style.number}>200</span>количество участников
          </span>
        </div>
        <div className={style.smallProject}>
          <p>Образовательный форум уличной культуры и спорта “Улицы Коми”</p>
          <span className={style.stats}>
            <span className={style.number}>250</span>количество зрителей
          </span>
          <span className={style.stats}>
            <span className={style.number}>50</span>количество участников
          </span>
        </div>
        <div className={style.smallProject}>
          <p>Всероссийский фестиваль по хип-хопу и брейкингу Energy</p>
          <span className={style.stats}>
            <span className={style.number}>300</span>количество зрителей
          </span>
          <span className={style.stats}>
            <span className={style.number}>900</span>количество участников
          </span>
        </div>
        <div className={style.smallProject}>
          <p>В Ритме улиц</p>
          <span className={style.stats}>
            <span className={style.number}>300</span>количество зрителей
          </span>
          <span className={style.stats}>
            <span className={style.number}>100</span>количество участников
          </span>
        </div>
        <div className={style.smallProject}>
          <p>Фестиваль экстремальных видов спорта «Жара»</p>
          <span className={style.stats}>
            <span className={style.number}>150</span>количество зрителей
          </span>
          <span className={style.stats}>
            <span className={style.number}>100</span>количество участников
          </span>
        </div>
        <div className={style.smallProject}>
          <p>Фестиваль уличных видов спорта STREET FEST</p>
          <span className={style.stats}>
            <span className={style.number}>1 200</span>количество зрителей
          </span>
          <span className={style.stats}>
            <span className={style.number}>1000</span>количество участников
          </span>
        </div>
        <div className={style.smallProject}>
          <p>Фестиваль уличной культуры и спорта «Сура Фест»</p>
          <span className={style.stats}>
            <span className={style.number}>5000</span>количество зрителей
          </span>
          <span className={style.stats}>
            <span className={style.number}>300</span>количество участников
          </span>
        </div>
      </div>
    </main>
  )
}
