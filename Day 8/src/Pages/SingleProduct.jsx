import { Box, Button, Flex, Grid, GridItem, Image, Select, Text, useToast} from '@chakra-ui/react'
import {AiOutlineHeart} from 'react-icons/ai'
import React, { useCallback, useEffect } from 'react'
import axios from 'axios'
import {useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCartProducts } from '../Redux/Cart/cart.actions'
import { postWishlistProducts } from '../Redux/Whislist/whis.actions'

const SingleProductPage = () => {
  const location = useLocation()
  const [data, setData] = useState({})
  const toast = useToast()
  const navigate = useNavigate() 
  const disptach = useDispatch()
  const addToCart=()=>{
    disptach(addCartProducts(data))
    navigate("/cart")
  }
  const handleWhislist = ()=>{
    disptach(postWishlistProducts(data))
    toast({
      title: 'Product added to whislist',
      position:"top",
      status:"success",
      duration: 2000,
      isClosable: true,
    })
  }
  const fetchSingleProduct=useCallback(()=>{
      axios(`https://lenskart-backend.onrender.com${location.pathname}`).then(res=>setData(res.data))
       .catch(err=>console.log(err))
  },[location.pathname])
  console.log(data)
  useEffect(() => {
  fetchSingleProduct()
  }, [fetchSingleProduct])
  return (
    <>
    <Flex m={5} flexDirection={"row"} mt="8px">
    <Grid justifyContent="space-around" templateColumns='repeat(2, 1fr)' height={"fit-content"}>
    {data?.imageDetails?.map((el)=><GridItem key={el} borderRadius={10} p="10px 5px" border="1px solid"  borderColor="gray.300" width={"fit-content"}><Image  src={el} width="100%"/></GridItem>)}
    </Grid>
    <Grid>
        <GridItem position="relative" p={5} colSpan={1} rowSpan={10} >
          <Text color="gray.500">{data.name}</Text>
          <Text my="10px" fontWeight={'bold'} w="80%">{data.title}</Text>
          <Text my="10px" fontWeight={'bold'} fontSize="x-large">₹{data.price}</Text>
          <Button p={7} m="10px 20px" w="90%" color="white" bgColor="#00bac6" onClick={addToCart}>BUY</Button>
          <Box position="absolute" top="5px" right="5px"><AiOutlineHeart size={40} onClick={handleWhislist}/></Box>
        </GridItem>
        </Grid>
    </Flex>
    </>
  )
}

export default SingleProductPage