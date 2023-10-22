import { Box, IconButton } from '@mui/material'
import { ListFilterIcon } from 'lucide-react'
import { CSSProperties, ReactNode } from 'react'

interface FilterComponentProps {
  children: ReactNode
  className?: CSSProperties
  color?: string
  setValue: (boolean) => void
}
export function FilterComponent({
  children,
  className,
  color,
  setValue,
}: FilterComponentProps) {
  return (
    <Box
      sx={{
        my: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        ...className,
      }}
    >
      <IconButton
        sx={{ p: 0, color: color ? color : '#0ea5e9' }}
        onClick={setValue}
      >
        <ListFilterIcon />
      </IconButton>
      {children}
    </Box>
  )
}
