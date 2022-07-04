import NextImage from 'next/image'
import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => (
  <Zoom>
    <NextImage {...rest} />
  </Zoom>

)
export default Image
