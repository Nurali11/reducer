import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CustomModal from '../components/CustomModal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useContext, useState, type FormEvent } from 'react';
import { Context } from '../context/Context';

export default function Header() {
  const {dispatch} = useContext(Context)
  const [open, setOpen] = useState<boolean>(false)

  function handleGetInfo(e:FormEvent | any) {
    e.preventDefault()
    let message = `<b>Get Info</b> \n`
    message += `<b>Name: ${e.target.name.value}</b> \n` 
    message += `<b>Phone number: ${e.target.tel.value}</b> \n` 
    message += `<b>Email: ${e.target.email.value}</b> \n` 
    dispatch({type:"info", payload:message})
    setOpen(false)
  }
  return (
    <div className='!sticky !z-10 !top-0'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color='success' position="absolute" className='!bg-[#3e3e3e]'>
          <Toolbar className='flex justify-between w-full'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Products
            </Typography>
            <CustomModal open={open} setOpen={setOpen} color='inherit' title='Get Info'>
              <>
                <h1 className='font-bold text-center text-[20px]'>Get Info</h1>
                <form onSubmit={handleGetInfo} className='mt-5 flex flex-col gap-3' autoComplete='off'>
                  <TextField sx={{ width: "100%" }} name='name' id="outlined-basic" label="Enter your name" variant="outlined" />
                  <TextField type='tel' sx={{ width: "100%" }} name='tel' id="outlined-basic" label="Enter you phone" variant="outlined" />
                  <TextField type='email' sx={{ width: "100%" }} name='email' id="outlined-basic" label="Enter you email" variant="outlined" />
                  <Button type='submit' size='large' variant='contained' color='success'>Submit</Button>
                </form>
              </>
            </CustomModal>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}