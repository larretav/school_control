import { ButtonBase, Stack, Typography } from "@mui/material"
import { FC, ReactNode } from "react"
import { useNavigate } from "react-router-dom"

type TypeButtonCardProps = {
  icon: ReactNode,
  title: string,
  route: string
}

const ButtonCard: FC<TypeButtonCardProps> = ({ icon, title, route }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/auth/${route}`);
  }

  return (
    <ButtonBase
      onClick={handleClick}
      className="w-full rounded-3xl box-border bg-white"
    >
      <Stack justifyContent="center" alignItems="center" spacing={3} sx={{ color: 'primary.main', boxShadow: `0 4px 20px -2px rgba(0,0,0,0.25)` }} className="w-full p-6 rounded-3xl box-border">
        {icon}
        <Typography variant="body1" fontWeight={600}>{title.toUpperCase()}</Typography>
      </Stack>
    </ButtonBase>
  )
}
export default ButtonCard