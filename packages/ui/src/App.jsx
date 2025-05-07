import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, StyledEngineProvider } from '@mui/material'

// routing
import Routes from '@/routes'

// defaultTheme
import themes from '@/themes'

// project imports
import NavigationScroll from '@/layout/NavigationScroll'
import { SET_DARKMODE } from '@/store/actions'

// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization)
    const dispatch = useDispatch()

    // Pebble Custom: Set dark mode from URL param (see /flows integration)
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const darkMode = params.get('darkMode')
        if (darkMode === '0') {
            dispatch({ type: SET_DARKMODE, isDarkMode: false })
            localStorage.setItem('isDarkMode', 'false')
        } else if (darkMode === '1') {
            dispatch({ type: SET_DARKMODE, isDarkMode: true })
            localStorage.setItem('isDarkMode', 'true')
        }
        // If darkMode is '2' or missing, do not override user/system preference
    }, [dispatch])

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default App
