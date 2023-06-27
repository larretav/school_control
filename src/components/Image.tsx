import { Box, SxProps } from "@mui/material"
import { CSSProperties, FC } from "react"

type ImageProps = {
  src: string
  alt: string
  boxFit: 'cover' | 'fill' | 'contain' | 'scale-down' | 'none'
  width: string | number
  height: string | number
  sx: CSSProperties
}

const Image: FC<ImageProps> = ({ src, alt, boxFit = 'cover', width = 50, height = 50, sx = {} }) => {

  const imgStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: boxFit,
    ...sx
  };

  const boxImageStyle: SxProps = {
    width,
    height,
  }

  return (
    <Box sx={boxImageStyle}>
      <img src={src} alt={alt} style={imgStyle} />
    </Box>
  )
}
export default Image