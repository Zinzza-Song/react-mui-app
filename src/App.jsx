import 'react'
import Button from '@mui/material/Button'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import newStyled from '@emotion/styled'
import { Typography } from '@mui/material'
import { theme } from '@/theme.js'

function App() {
  return (
    <div>
      <Button variant="text">Hello World</Button>

      <Button
        startIcon={<AcUnitIcon />}
        fullWidth
        size="large"
        variant="contained">
        Hello World
      </Button>

      <Button
        endIcon={<AccessibilityNewIcon />}
        variant="outlined">
        Hello World
      </Button>

      <Button
        sx={{
          backgroundColor: 'gray',
          color: 'white',
          margin: 10,
          '&:hover': {
            backgroundColor: 'black'
          },
          '&:disabled': {
            backgroundColor: 'white',
            color: 'black'
          }
        }}>
        Custom Style
      </Button>

      <CustomButton>Custom Button</CustomButton>

      <Typography
        variant="h1"
        gutterBottom>
        h1. Heading
      </Typography>

      <Button color="secondary">theme button</Button>

      <CustomThemeButton>customethemebutton</CustomThemeButton>
    </div>
  )
}

const CustomThemeButton = newStyled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  margin: 10,
  '&:hover': {
    backgroundColor: 'black'
  },
  '&:disabled': {
    backgroundColor: 'white',
    color: 'black'
  }
}))

const CustomButton = newStyled(Button)({
  backgroundColor: 'gray',
  color: 'white',
  margin: 10,
  '&:hover': {
    backgroundColor: 'black'
  },
  '&:disabled': {
    backgroundColor: 'white',
    color: 'black'
  }
})

export default App
