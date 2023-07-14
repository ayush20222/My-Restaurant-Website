import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
        <Box sx={{
          my:10, ml:10,"& h4":{
            fontWeight:'bold',
            mb:2
          }
        }}>
          <Typography variant='h4'>
            Contact My Restaurant
          </Typography>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti harum asperiores ducimus inventore. Nisi quos voluptatum ea. Dolorem, in? Dolorem libero dignissimos voluptatum id nulla minima, expedita reiciendis fugiat.</p>
        </Box>
        <Box sx={{m:3,width:'600px',ml:5,'@media (max-width:600px)':{
          width:'300px',
        }}}>
          <TableContainer component={Paper}>
            <Table aria-label='contact-table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:'black',color:'white',}} align='center'>
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
            <TableBody>
            <TableRow>
              <TableCell>
            <SupportAgentIcon sx={{color:'red',pt:1}}/> 9876776121 (Toll-free)
              </TableCell>
              
            </TableRow>
            <TableRow>
            <TableCell>
            <MailIcon sx={{color:'skyblue',pt:1}}/> help@mydesk.com
              </TableCell>
            </TableRow>
            <TableRow>
            <TableCell>
            <CallIcon sx={{color:'green',pt:1}}/> 120397139
              </TableCell>
            </TableRow>
            </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
   
  )
}

export default Contact
