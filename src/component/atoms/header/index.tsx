import { Badge, Box, Button, IconButton, Typography } from '@mui/material'
import { BellIcon, CurrencyIcon, List, MoonStar, SunIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import logoKriptoKita from '@/assets/img/kripto-kita.jpeg'
import logoKriptoKitaDark from '@/assets/img/kripto-kita-dark.png'
import { useState } from 'react'
import { DialogComponent } from '../dialog'
import { DialogContentCurrency } from './component'
import { SearchComponent } from '../search'
import { useDispatch, useSelector } from 'react-redux'
import { getIsDarkMode, setDarkMode } from '@/store/slices/darkModeSlicer'

export default function Header() {
  const [search, setSearch] = useState<boolean>(false)
  const [isFilter, setIsFilter] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const [idCurrency, setIdCurrency] = useState<string>('USD')

  const dispatch = useDispatch()
  const isDarkMode = useSelector(getIsDarkMode)

  const handleSearch = (event) => {
    const searchTerm = event.target.value
    setSearch(searchTerm)
  }

  const handleSetDarkMode = (isDark) => {
    dispatch(setDarkMode(!isDark))
  }

  console.log(search)

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <Box sx={{ mx: '16px' }}>
          <List size={24} color="#1094DD" />
        </Box>
        <Link to="/" style={{ width: '96px' }}>
          <img
            src={isDarkMode ? logoKriptoKitaDark : logoKriptoKita}
            alt="logo"
            height={32}
          />
        </Link>

        <Box sx={{ flexGrow: 1, mx: '16px' }}>
          <SearchComponent
            handleSearch={handleSearch}
            isFilter
            handleFilter={() => setIsFilter(!isFilter)}
            className={{
              marginLeft: '24px',
              marginRight: '24px',
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '24px',
            mx: '16px',
          }}
        >
          <Badge
            badgeContent={4}
            color="error"
            sx={{
              p: 0,
              color: '#0ea5e9',
              cursor: 'not-allowed',
              pointerEvents: 'none',
            }}
          >
            <BellIcon />
          </Badge>
          <IconButton
            sx={{ p: 0, color: '#0ea5e9' }}
            onClick={() => handleSetDarkMode(isDarkMode)}
          >
            {isDarkMode ? <MoonStar /> : <SunIcon />}
          </IconButton>

          <IconButton
            sx={{ p: 0, color: '#0ea5e9', gap: '4px' }}
            onClick={() => setOpen(true)}
          >
            <CurrencyIcon />
            <Typography>{idCurrency ? idCurrency : 'USD'} </Typography>
          </IconButton>
        </Box>
        <Button variant="outlined" sx={{ mx: '16px' }}>
          Info
        </Button>
      </Box>
      <DialogComponent
        open={open}
        handleClose={() => setOpen(false)}
        width={'md'}
        isFullWidth
        headerTitle="Choose Currency"
        headerClassName={{
          color: '#6b8fb3',
        }}
        dialogContent={
          <DialogContentCurrency
            setIdCurrency={setIdCurrency}
            idCurrency={idCurrency}
            handleClose={() => setOpen(false)}
          />
        }
        dialogFooter={
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        }
      />
    </>
  )
}
