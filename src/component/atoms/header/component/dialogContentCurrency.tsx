import { useGetRatesQuery } from '@/store/api'
import { getRates } from '@/store/slices/listCurrencyAPI'
import { Box, CircularProgress, Typography } from '@mui/material'
import { AlertTriangleIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { SearchComponent } from '../../search'
import Fuse from 'fuse.js'
import { ListCurrencyMapping } from './listCurrencyMapping'
import { FilterButton, FilterComponent } from '../../filter'
import { useSelector } from 'react-redux'
import { getIsDarkMode } from '@/store/slices/darkModeSlicer'
interface dialogCurrencyProps {
  setIdCurrency: (idCurrency: string) => void
  idCurrency: string
  handleClose: () => void
}
export function DialogContentCurrency({
  setIdCurrency,
  idCurrency,
  handleClose,
}: dialogCurrencyProps) {
  const { data, isSuccess, isError, isFetching } = useGetRatesQuery()
  const [searchResults, setSearchResults] = useState<getRates[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [isFilter, setIsFilter] = useState<boolean>(false)
  const [searchCurrency, setSearchCurrency] = useState<boolean>(false)
  const [searchCountry, setSearchCountry] = useState<boolean>(false)
  const [searchType, setSearchType] = useState<boolean>(false)

  useEffect(() => {
    // Cek apakah ada query pencarian
    if (searchQuery) {
      if (isSuccess) {
        const fuse = new Fuse(data?.data, {
          keys: ['symbol', 'currencySymbol', 'type'],
        })
        const results = fuse.search(searchQuery)
        setSearchResults(results.map((result) => result.item))
      }
    } else {
      // Jika tidak ada query pencarian, tampilkan semua data
      setSearchResults(data?.data || [])
    }
    setIsSearching(false)
  }, [data, isSuccess, searchQuery])

  const handleSearch = (event) => {
    const searchTerm = event.target.value
    setSearchQuery(searchTerm)
    setIsSearching(true)
  }

  const isDarkMode = useSelector(getIsDarkMode)

  return (
    <>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          py: '20px',
          bgcolor: isDarkMode ? '#000' : '#fff',
          zIndex: 1,
        }}
      >
        <SearchComponent
          handleSearch={handleSearch}
          isFilter
          handleFilter={() => setIsFilter(!isFilter)}
        />

        {isFilter && (
          <FilterComponent setValue={() => setIsFilter(false)}>
            <FilterButton
              value={searchCurrency}
              setValue={setSearchCurrency}
              label="Currency"
            />
            <FilterButton
              value={searchCountry}
              setValue={setSearchCountry}
              label="Country"
            />
            <FilterButton
              value={searchType}
              setValue={setSearchType}
              label="Type"
            />
          </FilterComponent>
        )}
      </Box>

      {isError && (
        <Box
          sx={{
            minHeight: '10vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            color: 'red',
          }}
        >
          <AlertTriangleIcon />
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: 500,
              lineHeight: '130%',
              letterSpacing: '1px',
              color: 'red',
            }}
          >
            An error has occurred on the server
          </Typography>
        </Box>
      )}
      {isFetching && (
        <Box
          sx={{
            minHeight: '10vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            color: 'red',
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {!isSearching && searchQuery && searchResults.length === 0 && (
        <Box
          sx={{
            minHeight: '10vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            color: 'red',
          }}
        >
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '130%',
              letterSpacing: '1px',
              color: '#6f7878',
            }}
          >
            Data Not Found
          </Typography>
        </Box>
      )}

      <ListCurrencyMapping
        data={searchResults}
        idCurrency={idCurrency}
        setIdCurrency={setIdCurrency}
        handleClose={handleClose}
      />
    </>
  )
}
