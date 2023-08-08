import { FileObj } from '@/interfaces/image-avatar.interface';
import { fileToBase64 } from '@/utils/base64.utils';
import { PhotoCamera } from '@mui/icons-material';
import { Avatar, Box,  ButtonBase, Fab, Typography } from '@mui/material';
import React, { ChangeEvent, useRef } from 'react';

interface ImageFieldProps {
  id: string;
  value: FileObj | null;
  buttonLabel?: string;
  placeholder?: string;
  icon?: JSX.Element;
  onChange: (id: string, fileObj: FileObj) => void;
  error?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  helperText?: React.ReactNode;
}

const ImageAvatar: React.FC<ImageFieldProps> = ({
  id,
  value,
  icon = <PhotoCamera fontSize="small" />,
  onChange,
  error = false,
  helperText = 'La carga del archivo es requerida',
}) => {
  const inpImageRef = useRef<any>(null);

  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const fileBase64 = await fileToBase64(file);
    // console.log(fileBase64);

    const fileObj: FileObj = {
      name: file.name,
      type: file.type,
      size: +(file.size / 1024).toFixed(2),
      lastModified: file.lastModified,
      lastModifiedDate: new Date(file.lastModified).toLocaleString(),
      urlFile: fileBase64
    }

    console.log(fileObj);

    onChange(id, fileObj);
  };

  const handleClickInput = () => {
    inpImageRef.current?.click();
  };

  return (
    <>
      <Box position="relative">
        <ButtonBase
          component="label"
          ref={inpImageRef}
          className="rounded-full relative"
        >
          <input type="file" onChange={handleChangeImage} hidden />
          <Avatar src={value?.urlFile} sx={{ width: 100, height: 100 }} >
          </Avatar>
        </ButtonBase>
        <Fab color="primary" size="smallest" onClick={handleClickInput} sx={{ boxShadow: 0, position: 'absolute', bottom: 0, right: 0 }}>
          {icon}
        </Fab>

      </Box>
      {error && (
        <Typography variant="caption" sx={{ pl: 2, pt: 0.5, color: 'error.main' }}>
          {helperText}
        </Typography>
      )}
    </>
  );
};

export default ImageAvatar;
