import { getIsDarkMode } from '@/store/slices/darkModeSlicer'
import { Box, IconButton, Typography } from '@mui/material'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { CSSProperties } from 'react'
import { useSelector } from 'react-redux'

interface FilterButtonProps {
  value: boolean
  setValue: (value: boolean) => void
  label: string
  color?: string
  className?: CSSProperties
}

export function FilterButton({
  value,
  setValue,
  label,
  color,
  className,
}: FilterButtonProps) {
  const isDarkMode = useSelector(getIsDarkMode)
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        border: color ? `1px solid ${color}` : '1px solid #0ea5e9',
        minWidth: '12%',
        padding: '8px',
        borderRadius: '8px',
        cursor: 'pointer',
        ':hover': {
          bgcolor: color ? color : isDarkMode ? '#1a222b' : '#f5feff',
          color: '#fff',
        },
        ...className,
      }}
      onClick={() => setValue(!value)}
    >
      <Typography sx={{ color: color ? color : '#0ea5e9' }}>{label}</Typography>
      <IconButton sx={{ p: 0, color: color ? color : '#0ea5e9' }}>
        {value ? <ChevronUp /> : <ChevronDown />}
      </IconButton>
    </Box>
  )
}
