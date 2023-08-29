import { Checkbox } from '@mui/material'
import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { ThemeContext } from '../context/theme-context'

const Theme = () => {
    const contextData = useContext(ThemeContext)

    const renderedMode = contextData.mode === 'dark' ? 'Dark' : 'Light'

    const isChecked = contextData.mode === 'dark' ? true : false

  return (
    <StyledBox>
      <label htmlFor='theme'>{renderedMode} theme</label>
      <Checkbox type="checkbox" id='theme' onChange={contextData.onchangeMode} checked={isChecked}/>
    </StyledBox>
  )
}
const StyledBox = styled('div')`
    width: 130px;
    min-height: 15px;
    border: 1px solid black;
    text-align: center;
    padding: 7px;
`
export default Theme
