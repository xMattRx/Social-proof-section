import Image from 'next/image'
import styles from './styles.module.scss'

export function Post({name,image, top, description}) {
  return (
  <div style={{
    marginTop: top
  }} className={styles.container}>
    <div className={styles.header}>
      <Image src={image} width={40} />
      <div className={styles.texts}>
        <h2>{name}</h2>
        <h3>Verified Buyer</h3>
      </div>
    </div>
      <p className={styles.description}>
        {description}
      </p>
  </div>
  )
}
