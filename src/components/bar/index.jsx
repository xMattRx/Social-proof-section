import Image from 'next/image'
import star from '../../assets/icon-star.svg'
import styles from './styles.module.scss'

export function Bar({text, left}) {
  return (
  <div style={{
    marginLeft: left
  }} className={styles.bar}>
    <div className={styles.stars}>
      <Image src={star} alt="star" />
      <Image src={star} alt="star" />
      <Image src={star} alt="star" />
      <Image src={star} alt="star" />
      <Image src={star} alt="star" />
    </div>
    <p>{text}</p>
  </div>
  )
}
