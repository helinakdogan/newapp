import { Button, Paper } from '@mui/material'
import React, { useCallback } from 'react'
import { SnackbarProvider, enqueueSnackbar } from 'notistack'


const Options = () => {


    const styles = {
        root: {
            flexGrow: 1,
            display: 'flex',
            margin:16,
            justifyContent:'center',
            alignItems: 'middle'
        },

        button:{
            margin:8,
        },

        success: {
            color: '43a047',
        }


    }

    

    const buttons = [
        {variant:'success', message:"success"},
        {variant:'error', message:"error"},
        {variant:'warning', message:"warning"},
        {variant:'info', message:"info"},
    ]

    const handleClick = useCallback((button) => () => {
        enqueueSnackbar(button.message, {variant:button.variant})
    }, enqueueSnackbar) 

  return (
    <Paper>
        {buttons.map((button) => (
            <Button
                key={button.variant}
                variant='outlined'
                style={{...styles.button,...styles[button.variant]}}
                onClick={handleClick(button)}
            >
                {button.variant}
            </Button>
        ))}
    </Paper>
  )
}

export default Options