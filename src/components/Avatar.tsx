import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface Avatar extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...rest }: Avatar) {

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...rest}
    />
  )
}