import Header from '@/component/atoms/header'
import { Box } from '@mui/material'
import '@/styles-dark.css'
import '@/styles-light.css'
import { useSelector } from 'react-redux'
import { getIsDarkMode } from '@/store/slices/darkModeSlicer'

export default function MainLayout() {
  const isDarkMode = useSelector(getIsDarkMode)

  const layoutClass = isDarkMode ? 'dark-mode' : 'light-mode'
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 16px)',
      }}
      className={layoutClass}
    >
      <Box
        sx={{
          zIndex: 40,
          boxShadow:
            '0 4px 0px -1px rgba(0, 0, 0, 0.1), 0 2px 0px -2px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Header */}
        <Box sx={{ width: '100%', py: '16px' }}>
          <Header />
        </Box>
      </Box>

      {/* Main Area: Sidebar and Content */}
      <Box sx={{ display: 'flex', width: '100%', flexGrow: 1 }}>
        {/* <SidebarSmall /> */}
      </Box>
    </Box>
  )
}
