import Header from '@/component/atoms/header'
import { Box } from '@mui/material'

export default function MainLayout() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
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
