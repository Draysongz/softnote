import { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Radio,
  RadioGroup,
  Stack,
  Button,
} from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";

export default function Trivia() {
    const Option = [
        {
            name: "Ethereum",
            image: "/icons/MoneyBag.png",
            value: "1"
        },
        {
            name: "Energy",
            image: "/icons/Lightning.png",
            value: "2"
        },
        {
            name: "Ethernet",
            image: "/icons/Vector.png",
            value: "3"
        },
        {
            name: "Envelope",
            image: "/icons/Envelope.png",
            value: "4"
        },
    ]

  const [selectedValue, setSelectedValue] = useState(""); // For tracking the selected radio button

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgColor={"#12161F"}
      bgImage={"./background.png"}
      bgRepeat={"no-repeat"}
      bgSize={"auto"}
      bgPos={"center"}
      width={"100vw"}
      minHeight={"100vh"}
      alignItems={"center"}
      textColor={"white"}
      overflow={"hidden"}
    >
      <Flex
        width={"100%"}
        height={"100%"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        pt={12}
        gap={5}
        pb={32}
      >
        <Text color={"#fff"} fontWeight={"700"} fontSize={"24px"}>
          Crypto Trivia
        </Text>
        
        <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={4}>
          <Text
            width={"100%"}
            h={"70px"}
            textAlign={"center"}
            boxShadow={"0px -2px 8px 0px #F8F9FD33 inset"}
            bg={"#293042"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            fontSize={"24px"}
            fontWeight={700}
            borderRadius={"50px"}
            sx={{
              WebkitTextStroke: "1px black",
              textStroke: "1px black",
            }}
          >
            What does ETH stand for?
          </Text>

          <RadioGroup
            value={selectedValue}
            onChange={setSelectedValue}
            py={"15px"}
            mt={5}
          >
            <Stack spacing={5} direction="column" w={"90%"} mx={"auto"}>
              {Option.map((option) => {
                return(
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                w={"100%"}
                h={"58px"}
              >
                <Flex w={'50%'} alignItems={'center'} gap={4}>
                <Image src={option.image} w={'38px'}/>
                <Text color={"white"} fontWeight={600} fontSize={'20px'}>
                  {option.name}
                </Text>
                </Flex>
                <Radio
                  colorScheme="blue"
                  value={option.value}
                  _checked={{ bg: "#4979D1", borderColor: "#4979D1" }}
                />
              </Flex>
                )
              })}

            </Stack>
          </RadioGroup>
          
          {/* Submit button */}
          <Button
          w={'90%'}
          h={'49px'}
          mx={"auto"}
          fontSize={'24px'}
          color={'#f5f5f5'}
          fontWeight={700}
          borderRadius={'20px'}
          boxShadow = {'0px -2px 8px 0px #F8F9FD33 inset'}
          bg={'#4979D1'}


            colorScheme="blue"
            isDisabled={!selectedValue}
            _disabled={{bg:"#293042"}} // Disabled until a radio button is selected
            mt={4}
          >
            Let's Go
          </Button>
        </Box>
      </Flex>

      <NavigationBar />
    </Box>
  );
}
