import Image from 'next/image'

import LogoImage from '../../../public/logo.svg'

import styles from './header.module.scss'

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <Image src={LogoImage} alt="logo" />
    </div>
  )
}
