import { useState } from "react";
import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import { Wheel } from "react-custom-roulette";
import NavigationBar from "../components/NavigationBar";

const data = [
  { option: "", style: { backgroundColor: "white" } },
  { option: "", style: { backgroundColor: "white" } },
  { option: "", style: { backgroundColor: "white" } },
  { option: "", style: { backgroundColor: "white" } },
  { option: "", style: { backgroundColor: "white" } },
  { option: "", style: { backgroundColor: "white" } },
];

export default function Roulette() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

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
        gap={{base: 5, sm: 14}}
        pb={32}
      >
        <Text color={"#fff"} fontWeight={"700"} fontSize={"24px"}>
          Resource Roulette
        </Text>
        <Box
          display={"flex"}
          flexDirection={"column"}
          bg={"linear-gradient(155.53deg, #62708D 14.26%, #1B1F27 84.36%)"}
          p={{base: "10px", sm:"20px"}}
          borderRadius={"50%"}
          border={"4px solid #F8F9FD"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={{ base: 0, sm: 14 }}
        >
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            fontSize={32}
            onStopSpinning={() => {
              setMustSpin(false);
            }}
          />
        </Box>
        <Button
          onClick={handleSpinClick}
          w={"342px"}
          h={"49px"}
          bg={"#4979d1"}
          boxShadow={"0px -2px 8px 0px #F8F9FD33 inset"}
          fontSize={"24px"}
          fontWeight={700}
          color={"#f5f5f5"}
          borderRadius={"20px"}
        >
          Spin and Win!
        </Button>

        <Flex
          alignItems={"center"}
          gap={2}
          w={"292px"}
          h={"39px"}
          mt={'-10'}
          justifyContent={"center"}
        >
          <Image src="/icons/dot.png" />
          <Image src="/icons/dot.png" />

          <Text fontWeight={500} fontSize={'16px'} color={'#999999'}>You have 6 of 8 Tickets left</Text>

          <Image src="/icons/dot.png" />
          <Image src="/icons/dot.png" />
        </Flex>
      </Flex>
      <NavigationBar />
    </Box>
  );
}
