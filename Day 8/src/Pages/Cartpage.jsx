import {
  Box,
  Button,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "../Styles/Cartpage.css";
import { useNavigate } from "react-router-dom";
import CartItem from "../Components/Cart/CartItem";
import CartNavbar from "../Components/Cart/CartNavbar";
import CartPrice from "../Components/Cart/CartPrice";
import LoadingSpinner from "../Components/Loading";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deleteCartProducts,
  getCartProducts,
  increaseQuantity,
} from "../Redux/Cart/cart.actions";

export const Cartpage = () => {
  const cartData = useSelector((store) => store.cartState.Cart);
  let loading = useSelector((store) => store.cartState.loading);
  const dispatch = useDispatch();
  const onClickDelete = (id) => {
    dispatch(deleteCartProducts(id));
  };
  const incQuantity = (id, value) => {
    dispatch(increaseQuantity(id, value));
    dispatch(getCartProducts());
  };
  const decQuantity = (id, value) => {
    dispatch(decreaseQuantity(id, value));
    dispatch(getCartProducts());
  };

  let price = 0;
  const total = () => {
    cartData?.forEach((el) => {
      price += el.price * el.quantity;
    });
    return price;
  };

  let discount = 0;
  let actualPrice = 0;
  const actual = () => {
    cartData?.forEach((el) => {
      actualPrice += el.price * el.quantity;
    });
    discount = (actualPrice * 60) / 100;
    return actualPrice;
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const position = "top";
  const toast = useToast();
  const btnRef = React.useRef();
  const navigate = useNavigate();
  React.useEffect(() => {
    dispatch(getCartProducts());
  }, [dispatch]);
  const [apply, setApply] = useState(false);
  return (
    <>
      {cartData.length !== 0 && cartData[0] !== undefined ? (
        <Box w="100%" bg="rgb(251,249,247)" mt={"200px"}>
          <CartNavbar />
          {/* Content Box */}
          {loading ? (
            <LoadingSpinner />
          ) : (
            <Box
              className="mainContent"
              display="flex"
              flexDirection="row"
              w="87%"
              m="auto"
              gap={10}
              pb="50px"
            >
              {/* item box */}
              <Box w="60%">
                <Box display="flex" flexDirection="column" gap={30}>
                  <Box>
                    <Text
                      // fontFamily="rajdhani-medium"
                      fontWeight="400"
                      fontSize="20px"
                      lineHeight="30px"
                      letterSpacing="-.02em"
                      color="#000042"
                    >
                      Cart ({cartData.length} items)
                    </Text>
                  </Box>
                  {/* item-product-card-wrapper */}
                  {/* yha pe data fetch kr ke map se render krna hai mere ko --> done*/}
                  <CartItem
                    item={cartData}
                    refresh={onClickDelete}
                    update={incQuantity}
                    updateminus={decQuantity}
                  />
                  

                 
                </Box>
              </Box>

              {/* price box */}
              <Box w="30%">
                <Box display="flex" flexDirection="column" gap={30}>
                  <Box>
                    <Text
                      fontWeight="400"
                      fontSize="20px"
                      lineHeight="30px"
                      letterSpacing="-.02em"
                      color="#000042"
                    >
                      Bill Details
                    </Text>
                  </Box>

                  <Box
                    display="flex"
                    gap={6}
                    alignItems="center"
                    bg="#fff"
                    borderRadius="12px"
                    p="6"
                    boxShadow="0 1px 4px rgb(0 0 0 / 10%)"
                  >
                    <Box display="flex" flexDirection="column" w="100%">
                      {/* total price  done */}
                      <CartPrice
                        priceTitle={"Total   Price"}
                        price={"₹" + total()}
                      />
                      {/* tax price done */}
                      <CartPrice priceTitle={"Tax"} price={"₹" + 269.82} />

                      {/* Convenience price done*/}
                      <CartPrice
                        priceTitle={"Convenience Fees"}
                        price={"Free"}
                      />
                      {/* total payable amount done*/}
                      {/* some extra css thats y i call in a box */}
                      <Box fontWeight="700" fontSize="16px" lineHeight="24px">
                        <CartPrice
                          priceTitle={"Total payable"}
                          price={
                            apply
                              ? "₹" + (Math.floor(actual() - discount))
                              : "₹" + (actual() + 269.82)
                          }
                        />
                        {console.log(apply)}
                      </Box>
                    </Box>
                  </Box>

                  
                  {/*for coupon i use drawer here  */}
                  <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    size="sm"
                  >
                    <DrawerOverlay />
                    <DrawerContent bg="rgb(251,249,247)">
                      <DrawerCloseButton />

                      

                      <Divider borderRadius="2px" mb="20px"></Divider>

                      <DrawerBody>
                        <Flex
                          direction="column"
                          gap={12}
                          p="24px"
                          alignItems="center"
                          borderRadius="12px"
                          boxShadow="0 1px 3px rgb(16 24 40 / 10%), 0 1px 2px rgb(16 24 40 / 6%)"
                          bg="#fff"
                          border={apply ? "3px solid  #0fbd95" : " none"}
                        >
                          <Box>
                            <Box>
                              <Flex direction="row" gap={5} alignItems="center">
                                
                                <Box>
                                  <Button
                                    color="#0fbd95"
                                    onClick={() => {
                                      if (apply === false) {
                                        setApply(true);
                                        toast({
                                          title: `Coupon Applied`,
                                          position: position,
                                          isClosable: true,
                                          status: "success",
                                        });
                                      } else {
                                        setApply(false);
                                      }
                                    }}
                                  >
                                    {apply ? "Applied" : "Apply"}
                                  </Button>
                                </Box>
                              </Flex>
                            </Box>
                            <Divider height={5} borderRadius="2px"></Divider>
                            
                          </Box>
                        </Flex>
                      </DrawerBody>

                      <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                          Cancel
                        </Button>
                        <Button colorScheme="blue" onClick={onClose}>
                          Save
                        </Button>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                  {/* drawer ending */}

                  

                  <Button
                    
                  
                    bg="#11daac"
                    borderRadius="100px"
                    fontWeight="bold"
                    color="#000042"
                    fontSize="20px"
                    lineHeight="24px"
                    letterSpacing="-.02em"
                    textDecoration="none!important"
                    border="none"
                    onClick={() => navigate("/shipping")}
                  >
                    Proceed To Checkout
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      ) : (
        <Center mt={"300px"}>
          <Heading>Empty cart</Heading>
        </Center>
      )}
    </>
  );
};
