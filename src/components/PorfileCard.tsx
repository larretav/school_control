import { Person } from "@mui/icons-material";
import { Box, ButtonBase, Stack, SvgIcon, Typography } from "@mui/material";
import { FC, MouseEventHandler, cloneElement } from "react";

type PorfileCardProps = {
  icon: JSX.Element,
  title: string,
  subtitle: string,
  extraData?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const PorfileCard: FC<PorfileCardProps> = ({ icon = <Person sx={{ fontSize: 50 }} />, title, subtitle, extraData, onClick }) => {

  const card = (
    <Stack direction="row" alignItems="center" className="h-full">
      <Box pr={1.5}>
        <SvgIcon sx={{ fontSize: 40 }} >{icon}</SvgIcon>
      </Box>
      <Stack alignItems="flex-start" flexGrow={1}>
        <Typography variant="body2" textAlign="left" fontWeight={600}>{title}</Typography>
        {
          extraData && <Typography variant="body2" color="text.secondary">{extraData}</Typography>
        }
        <Typography variant="body2" color="text.secondary">{subtitle}</Typography>
      </Stack>
    </Stack>
  )


  return (
    <>
      {
        !onClick
          ? <Box className="w-full h-full p-4 m-0 block box-border relative align-middle rounded-3xl shadow-lg bg-white ">{card}</Box>
          : <ButtonBase
            onClick={onClick}
            className="w-full h-full p-4 m-0 block rounded-3xl shadow-lg bg-white ">
            {card}
          </ButtonBase>
      }

    </>
  )
}
export default PorfileCard