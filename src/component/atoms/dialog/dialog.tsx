import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Box, Breakpoint, Divider, IconButton, Typography } from '@mui/material'
import { XIcon } from 'lucide-react'
import { CSSProperties, ReactNode } from 'react'
import '@/styles-dark.css'
import '@/styles-light.css'
import { useSelector } from 'react-redux'
import { getIsDarkMode } from '@/store/slices/darkModeSlicer'

interface DialogComponentProps {
  open: boolean
  handleClose: (boolean) => void
  width?: false | Breakpoint
  isFullWidth?: boolean
  isDivider?: boolean
  headerTitle: string
  headerClassName?: CSSProperties
  footerClassName?: CSSProperties
  contentClassName?: CSSProperties
  dialogContent?: ReactNode
  dialogFooter?: ReactNode
}

export function DialogComponent({
  open,
  handleClose,
  width,
  isFullWidth,
  headerTitle,
  headerClassName,
  contentClassName,
  footerClassName,
  dialogContent,
  dialogFooter,
  isDivider,
}: DialogComponentProps) {
  const isDarkMode = useSelector(getIsDarkMode)

  const layoutClass = isDarkMode ? 'dark-mode' : 'light-mode'
  return (
    <Dialog
      fullWidth={isFullWidth}
      maxWidth={width}
      open={open}
      onClose={handleClose}
    >
      <Box
        className={layoutClass}
        sx={{ border: isDarkMode && '1px solid #0ea5e9' }}
      >
        {/* --- Dialog Title --- */}
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{
              fontSize: '32px',
              fontWeight: 600,
              lineHeight: '130%',
              letterSpacing: '1px',
              ...headerClassName,
            }}
          >
            {headerTitle}
          </Typography>
          <IconButton
            sx={{
              p: 0,
              ':hover': { color: 'red' },
              fontSize: '32px',
              fontWeight: 600,
              lineHeight: '130%',
              letterSpacing: '1px',
              ...headerClassName,
            }}
            onClick={handleClose}
          >
            <XIcon />
          </IconButton>
        </DialogTitle>
        {/* --- Divider --- */}
        {isDivider && <Divider />}
        {/* --- Content --- */}
        <DialogContent sx={{ p: '24px', contentClassName }}>
          {dialogContent}
        </DialogContent>
        {/* --- Footer --- */}
        <DialogActions sx={{ p: '24px', footerClassName }}>
          {dialogFooter}
        </DialogActions>
      </Box>
    </Dialog>
  )
}
