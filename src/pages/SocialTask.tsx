import { Box, Text, Flex, Image, Icon, Progress } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NavigationBar from "../components/NavigationBar";

const socialTask = [
    {
        image: "/icons/invite.png",
        name: "INVITE & EARN",
        description: "Invite a Friend to Earn",
        reward: "120",
        task:'Invite & Earn',
        path: "/",
    },
    {
        image: "/icons/people-add.png",
        name: "JOIN SOFTNOTE CHANNEL",
        description: "Incentivize players to participate in Tectum official group.",
        reward: "300",
        task: 'Join Channel',
        path: "/",
    },
    {
        image: "/icons/peers.png",
        name: "JOIN SOFTNOTE COMMUNITY",
        description: "Reach Milestone & Earn",
        reward: "100",
        task: "Join Community",
        path: "/",
    },
]


export default function SocialTask() {
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
        pb={32}
        gap={5}
      >
        <Box width={'100%'} p={'20px'} pt={'30px'}>
        <Text color={'#fff'} fontWeight={'700'} fontSize={'24px'} textAlign={'center'}>
            Social Tasks
        </Text>
        <Flex
            w={"100%"}
            alignItems={"center"}
            mt={4}
            justifyContent={"space-between"}
          >
            <Box
              width={"40%"}
              display={"flex"}
              flexDirection={"column"}
              gap={1}
            >
              <Flex justifyContent={"space-between"}>
                <Text fontSize={"12px"} color={"#F5F5F5"}>
                  Ambassador
                  <Icon as={ChevronRightIcon} />
                </Text>
                <Text fontSize={"12px"} color={"#F5F5F5"}>
                  2/4
                </Text>
              </Flex>
              <Flex alignItems={"center"} bg={"green"}>
                <Progress
                  value={80}
                  size="sm"
                  borderRadius={"full"}
                  bg={"#1D222E"}
                  border={"1px solid #7585A7"}
                  w={"full"}
                  sx={{
                    "& > div": {
                      background:
                        "linear-gradient(90deg, #4979D1 0%, #4979D1 48.17%, #B5CFFE 100%)",
                    },
                  }}
                />
              </Flex>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text fontWeight={500} fontSize={"12px"} color={"#f5f5f5"}>
                XP Reward
              </Text>
              <Box
                width={"80px"}
                height={"21px"}
                padding={"2px 12px"}
                border={"1px solid #f5f5f5"}
                borderRadius={"10px"}
                fontWeight={"600"}
                fontSize={"14px"}
                color={"#f5f5f5"}
                textAlign={"center"}
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Text>400,345</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box width={'100%'} px={'16px'} display={'flex'} flexDirection={'column'} gap={3}
        justifyContent={'space-between'}> 
        
        {socialTask.map((social) => {
            return(
            <Link to={social.path}>
            <Flex h={'88px'}
            bg={'#1D222EB2'}
            borderRadius={'16px'}
            padding={'18px 4px'} borderTop={'0.9px solid #4979D1'} gap={4} 
            alignItems={'center'}>
                <Flex alignItems={'center'} gap={4}>
                
                <Box w={'88px'} height={'88px'} bg={'#293042'} display={'flex'} flexDirection={'column'} borderRadius={'10px'} gap={'5px'} justifyContent={'center'} alignItems={'center'} py={'10px'}>
                    <Image src={social.image} w={'28px'}/>
                    <Text width={'72px'} height={'34px'} fontSize={'14px'} fontWeight={500} textAlign={'center'} lineHeight={'16.94px'}>
                        {social.task}
                    </Text>
                </Box>
                <Flex direction={'column'}>
                <Text fontSize={'14px'} fontWeight={600} color={'#f5f5f5'}>
                    {social.name}
                </Text>
                <Text fontSize={'12px'} fontWeight={500} color={'#f5f5f5'}>
                    {social.description}
                </Text>
                <Text fontSize={'12px'} fontWeight={500} color={'#4979d1'}>
                   {social.reward} XP
                </Text>
                </Flex>
                </Flex>
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
