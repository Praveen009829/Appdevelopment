import { Box, Button, Flex, Image, Input } from "@chakra-ui/react";
import React from "react";
// import "../../Styles/pay.css";
import {useNavigate } from "react-router-dom";
const Card = () => {
  let Navigate = useNavigate();
  return (
    <div style={{ marginTop: "10px" }}>
      <div className="card">
        <div>
          <Box
            w="700px"
            ml="180px"
            h="600px"
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          >
            <Box
              bg="black"
              color={"white"}
              fontWeight="650"
              p="8px 0px 8px 8px "
            >
              PAYMENT OPTION
            </Box>
            <Box display={"flex"}>
              <form
                style={{ display: "flex" }}
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Order succesfully placed");
                  Navigate("/");
                }}
              >
                <Box m="10px 10px 10px 10px ">
                  <Flex justifyContent={"space-between"}>
                    
                    
                  </Flex>
                  <Input
                    placeholder="Enter Card Number"
                    h="30px"
                    m="20px 10px 10px 10px "
                    isRequired
                  />

                  <Flex m="20px 0px ">
                    <Input
                      placeholder="MM/YYYY"
                      h="30px "
                      mr="10px"
                      ml="10px"
                      isRequired
                    />
                    <Input h="30px" placeholder="CVV" isRequired />
                  </Flex>
                  <Input
                    placeholder="Cardholder Name"
                    h="30px"
                    m="20px 10px 20px 10px"
                    w="490px"
                    isRequired
                  />

                  <Box
                    
                  >
                    
                    
                  </Box>
                  <Button
                  
                    fontSize={"13px"}
                    ml="250px "
                    mt="40px "
                    mb="90px"
                    bg="#3bb3a9"
                    color={"white"}
                    borderRadius="0px"
                    type="submit"
                    p="12px 23px 12px 23px "
                    _hover={{ backgroundColor: "black" }}
                  >
                    PLACE ORDER
                    
                  </Button>
                  
                </Box>
              </form>
            </Box>
            
            
          </Box>
        </div>

        
      </div>
    </div>
  );
};

export default Card;
