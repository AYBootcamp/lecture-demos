import { Button, createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

import MUITable from '../components/MUITable'
import DemoContainer from '../sharedComponents/DemoContainer'

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const theme = createTheme({
    palette: {
        common: {
            black: '#003366', // dark blue
        },
        primary: {
            main: '#006622', // dark green
        },
    },
})

const MUIDemoPage = () => {
    return (
        <DemoContainer>
            <h1>MUI Demo Page</h1>
            <h3>Buttons and some variations</h3>
            <Flex>
                <div>
                    <span>default-small button</span>
                    <Button size="small">A simple MUI Button</Button>
                </div>
                <div>
                    <span>outlined-medium button</span>
                    <Button variant="outlined" size="medium">
                        A simple MUI Button
                    </Button>
                </div>
                <div>
                    <span>contained-large button</span>
                    <Button variant="contained" size="large">
                        A simple MUI Button
                    </Button>
                </div>
            </Flex>

            <h3> MUI Table</h3>
            <MUITable />
            <ThemeProvider theme={theme}>
                <h3>Themed MUI Table</h3>
                <MUITable />
            </ThemeProvider>
        </DemoContainer>
    )
}

export default MUIDemoPage
