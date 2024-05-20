import StreetArtDemoPath from '@/public/images/street-art-demo.jpg'
import Image from 'next/image'
import style from './style.module.scss'
export default function Disciplines() {
  return (
    <main>
      <h2 className={style.title}>Дисциплины</h2>
      <button>Street Art</button>
      <div className={style.demoWrapper}>
        <p>
          Стрит-арт — это разновидность современного урбанистического искусства. Бытует широкое заблуждение, что граффити является единственным
          проявлением стрит-арт. Однако, это не так, граффити является лишь одним из видов уличного искусства, но далеко не единственным. Разделение
          на стили можно наблюдать, в основном, среди граффити: writing, bombing, tagging, bubble-letter, throw-up, character, wild style,
          3D-style.Стрит-арт своеобразный способ выразить себя и своё творчество, а также самоутвердиться в обществе.
        </p>
        <Image src={StreetArtDemoPath} alt="demo" />
      </div>
    </main>
  )
}
