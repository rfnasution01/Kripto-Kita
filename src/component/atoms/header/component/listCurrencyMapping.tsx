import { getRates } from '@/store/slices/listCurrencyAPI'
import { convertToTitleCase } from '@/utils'
import { Box, Grid, Typography } from '@mui/material'
import logo from '@/assets/img/logo.jpeg'
import logoDark from '@/assets/img/logo-dark.png'
import { useSelector } from 'react-redux'
import { getIsDarkMode } from '@/store/slices/darkModeSlicer'

interface ListCurrencyProps {
  data: getRates[]
  idCurrency: string
  setIdCurrency: (idCurrency: string) => void
  handleClose: () => void
}

export function ListCurrencyMapping({
  data,
  idCurrency,
  setIdCurrency,
  handleClose,
}: ListCurrencyProps) {
  const isDarkMode = useSelector(getIsDarkMode)

  return (
    <Grid container spacing={2}>
      {data?.map((item, idx) => (
        <Grid
          item
          xs={3}
          sx={{
            p: '8px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
          }}
          key={idx}
          onClick={() => {
            setIdCurrency(item?.symbol)
            handleClose()
          }}
        >
          <Box
            sx={{
              p: '12px',
              borderRadius: '12px',
              ':hover': { bgcolor: isDarkMode ? '#1a222b' : '#f5feff' },
              bgcolor:
                idCurrency === item?.symbol && isDarkMode
                  ? '#1a222b'
                  : idCurrency === item?.symbol && !isDarkMode
                  ? '#f5feff'
                  : 'transparent',
              border: '1px solid #0ea5e9',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              height: '100%',
            }}
          >
            <img
              src={isDarkMode ? logoDark : logo}
              alt="Kripto kita"
              width={30}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: 500,
                  lineHeight: '130%',
                  letterSpacing: '1px',
                  color: '#0ea5e9',
                }}
              >
                {convertToTitleCase(item?.id)}
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '130%',
                  letterSpacing: '0.1px',
                  color: '#99ccff',
                }}
              >
                {item?.symbol} -{' '}
                {item?.currencySymbol ? item?.currencySymbol : '?'}
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '130%',
                  letterSpacing: '0.1px',
                  color: '#99ccff',
                }}
              >
                {convertToTitleCase(item?.type)}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}
