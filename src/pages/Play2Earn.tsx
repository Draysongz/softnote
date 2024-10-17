import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const PlayList = [
    {
        image: "/icons/Puzzle.png",
        name: "SoftNote Bill Jigsaw",
        path: "/jigsaw",
    },
    {
        image: "/icons/Roulette.png",
        name: "Resource Roulette",
        path: "/roulette",
    },
    {
        image: "/icons/Heart-Puzzle.png",
        name: "Crypto Trivia",
        path: "/trivia",
    },
    {
        image: "/icons/Finish-Flag.png",
        name: "SoftNote Race",
        path: "",
    },
]

export default function Play2Earn() {
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
      >
        <Text color={'#fff'} fontWeight={'700'} fontSize={'24px'}>
            Select, Play & Earn
        </Text>
        <Box width={'100%'} px={'16px'} display={'flex'} flexDirection={'column'} gap={4}>
        {PlayList.map((list) => {
            return(
            <Link to={list.path}>                
            <Flex h={'80px'}
            bg={'#1D222EB2'}
            borderRadius={'16px'}
            padding={'18px 16px'} borderBottom={'0.9px solid #fff'} gap={4} 
            alignItems={'center'}>
                <Image src={list.image} w={'32px'}/>
                <Text fontSize={'20px'} fontWeight={500} color={'#f5f5f5'}>{list.name}</Text>
            </Flex>
            </Link>
            )
        })}

        </Box>
      </Flex>
      <NavigationBar />
    </Box>
  );
}
