import { Box, Text, Flex, Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const Communities = [
    {
        image: "https://bit.ly/prosper-baba",
        name: "Crypto meme",
        members: "356,782 Members",
        path: "/",
    },
    {
        image: "https://bit.ly/prosper-baba",
        name: "Shilo Dosy GM",
        members: "256,782 Members",
        path: "",
    },
    {
        image: "https://bit.ly/prosper-baba",    
        name: "PharmacyCrypto",
        members: "246,782 Members",
        path: "",
    },
    {
        image: "https://bit.ly/prosper-baba",
        name: "Scott Paymod",
        members: "236,782 Members",
        path: "",
    },
    {
        image: "https://bit.ly/prosper-baba",
        name: "Meme Girl",
        members: "56,782 Members",
        path: "",
    },
    {
        image: "https://bit.ly/prosper-baba",
        name: "Shark DAOs",
        members: "6,782 Members",
        path: "",
    },
]

export default function Community() {
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
        minHeight={"100vh"}
        bg={'rgba(29, 34, 46, .7)'}
        flexDirection={"column"}
        alignItems={"center"}
        pt={12}
        pb={32}
        gap={5}
      >
        <Text color={'#fff'} fontWeight={'700'} fontSize={'24px'}>
            Join Community
        </Text>
        <Box width={'100%'} px={'16px'} display={'flex'} flexDirection={'column'} gap={4}
        justifyContent={'space-between'}>   
        {Communities.map((community) => {
            return(
            <Flex h={'100px'}
            padding={'18px 18px'} borderBottom={'0.9px solid #fff'} gap={4} 
            alignItems={'center'}
            justifyContent={'space-between'}>
                <Flex alignItems={'center'} w={'163px'} gap={4}>
                <Avatar src={community.image} w={'40px'} h={'40px'} borderRadius={'100px'} border={'1px solid #f5f5f5'}/>
                <Flex direction={'column'}>
                <Text fontSize={'14px'} fontWeight={600} color={'#f5f5f5'}>
                    {community.name}
                </Text>
                <Text fontSize={'12px'} fontWeight={500} color={'#4979d1'}>
                    {community.members}
                </Text>
                </Flex>
                </Flex>
                <Text color={'#fff'} fontSize={'14px'} fontWeight={600}>
                    <Link to={community.path}>
                    Join
                    </Link>
                </Text>
            </Flex>
            )
        })}             
        </Box>
      </Flex>
      <NavigationBar />
    </Box>
  );
}
