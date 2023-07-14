import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign:'center',
        p:2,
        '& h4':{
          fontWeight:'bold',
          my:2,
          fontSize:'2rem',
        },
        '& p':{
          textAlign:'justify',
        },
        '@media (max-width:600px)':{
          mt:0,
          '& h4':{
            fontSize:'1.5rem',
          }
        }
      }}>
        <Typography variant='h4'>
          Welcome To My Restaurant
        </Typography>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae odit numquam debitis non similique perspiciatis illum libero ratione veritatis repudiandae id in, minus quis magnam eveniet nulla quibusdam sapiente ab, velit aperiam recusandae consequatur? Temporibus cumque maiores tempora reiciendis recusandae repellat dolores fugit architecto magnam nesciunt illo numquam impedit magni ipsum odio soluta accusamus ipsam nihil harum cupiditate id aut, quas asperiores facilis. Eaque aspernatur nobis eius tenetur reprehenderit quos voluptatem impedit deleniti perspiciatis? Minus, dolorum eos! Eveniet illo ea laudantium veniam laboriosam consectetur eius consequuntur, voluptates quis architecto quasi minus eligendi inventore repellendus aperiam voluptatibus pariatur doloribus quam voluptate.</p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates perferendis, eos ea fuga nam reprehenderit quas, quo, harum vel repellat cupiditate tempore! Porro quos quam quae ipsum placeat, obcaecati sequi! Ipsam earum repudiandae blanditiis rem quam est ea in explicabo accusantium quas. Ipsa voluptas quam sint ratione ad quaerat hic quisquam, accusantium nulla repellendus? Modi dolores dicta corrupti aut eveniet cumque vel illo similique quibusdam ipsa ea ab aperiam aspernatur neque sequi, inventore fugiat, optio earum in sunt nam maxime! A nesciunt assumenda cupiditate facere esse eos, laudantium aspernatur ex in incidunt similique consectetur, tempore repudiandae vero est? Iste, illo.</p>
      </Box>
    </Layout>
  )
}

export default About
