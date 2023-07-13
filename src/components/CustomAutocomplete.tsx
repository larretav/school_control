import { FC, SyntheticEvent } from "react"
import {
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
  InputAdornment,
  TextField
} from "@mui/material"
import { Search } from "@mui/icons-material"

type CustomAutocompleteProps = {
  options: any[],
  value?: string,
  inputValue?: string,
  onChange: (event: SyntheticEvent<Element, Event>, value: any, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<any> | undefined) => void,
  onInputChange: (event: SyntheticEvent<Element, Event>, value: string, reason: AutocompleteInputChangeReason) => void
}

const CustomAutocomplete: FC<CustomAutocompleteProps> = ({ options = [], value = '', inputValue, onChange, onInputChange }) => {

  const searchCustomerAd = { startAdornment: <InputAdornment position="start"> <Search /> </InputAdornment> }


  return (
    <Autocomplete
      size="small"
      freeSolo
      options={options}
      // renderOption={(props, option) => <li {...props}>{option.label}</li>}
      // getOptionLabel={(option) => option?.label ?? ''}

      value={value}
      onChange={onChange}

      inputValue={inputValue}
      onInputChange={onInputChange}
      noOptionsText="No hay resultados"
      renderInput={(params) => (
        <TextField
          {...params}
          variant="filled"
          placeholder="Buscar cliente"
          hiddenLabel
          InputProps={{
            ...params.InputProps,
            ...searchCustomerAd,
          }}
        />
      )}

    />
  )
}
export default CustomAutocomplete