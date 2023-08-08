import { Person } from "@mui/icons-material";
import { Box, ButtonBase, Stack, SvgIcon, Typography } from "@mui/material";
import { FC, cloneElement } from "react";

type PorfileCardProps = {
  icon: JSX.Element,
  name: string,
  email: string,
  extraData?: string
}

const PorfileCard: FC<PorfileCardProps> = ({ icon = <Person sx={{ fontSize: 50 }} />, name, email, extraData }) => {
  return (
    <ButtonBase className="w-full p-4 m-0 block rounded-3xl shadow-lg bg-white ">
      <Stack direction="row" alignItems="center" >
        <Box pr={1.5}>
          <SvgIcon sx={{fontSize: 50}} >{icon}</SvgIcon>
        </Box>
        <Stack alignItems="flex-start" flexGrow={1}>
          <Typography fontWeight={600}>{name}</Typography>
          {
            extraData && <Typography color="text.secondary">{extraData}</Typography>
          }
          <Typography color="text.secondary">{email}</Typography>
        </Stack>
      </Stack>
    </ButtonBase>
  )
}
export default PorfileCard