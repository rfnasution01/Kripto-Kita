import { IconButton, InputAdornment, TextField } from '@mui/material'
import { FilterIcon, SearchIcon } from 'lucide-react'
import { CSSProperties } from 'react'

interface SearchComponentProps {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleFilter?: (boolean) => void
  isFilter?: boolean
  color?: string
  width?: string
  className?: CSSProperties
}

export function SearchComponent({
  handleSearch,
  handleFilter,
  isFilter,
  color,
  width,
  className,
}: SearchComponentProps) {
  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      onChange={handleSearch}
      sx={{
        width: width ? width : '100%',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: color ? color : '#0ea5e9',
          },
          '&:hover fieldset': {
            borderColor: color ? color : '#0ea5e9', // Warna border saat dihover
          },
          '& input::placeholder': {
            color: color ? color : '#0ea5e9', // Warna placeholder
          },
          '& label.Mui-focused': {
            color: color ? color : '#0ea5e9', // Warna teks saat input difokuskan
          },
          '& label': {
            color: color ? color : '#0ea5e9', // Warna teks dalam keadaan biasa
          },
          '& input': {
            color: color ? color : '#0ea5e9', // Warna teks dalam keadaan biasa
          },
        },
        ...className,
      }}
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ color: '#0ea5e9' }}>
            <SearchIcon />
          </InputAdornment>
        ),

        endAdornment: isFilter && (
          <InputAdornment position="end">
            <IconButton onClick={handleFilter} sx={{ color: '#0ea5e9' }}>
              <FilterIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}
