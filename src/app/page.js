import Image from 'next/image'
import styles from './page.module.css'
import HomeImg from 'public/home.jpg'

export default function Home() {
  return (
    <div className={styles.main}>
    <div className={styles.desc}>
      <h1>Better Developmemt for your digital product</h1>
      <p>Turning you Idea into Reality ,we bring together a Team from global tech Industry</p>
      <button>See my work</button>
    </div>
    <div className={styles.img}>
     <Image src={HomeImg} width={500} height={500}/>
     </div>
    </div>
  )
}
