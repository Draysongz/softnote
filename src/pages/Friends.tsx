
import {
  Flex,
  Box,
  Text,
  HStack,
  Progress,
  Heading,
  Button,
  Card,
  CardBody,
  Image,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NavigationBar from "../components/NavigationBar";

type Props = {}

function Friends({}: Props) {
  return (
    <Flex
      minH={"100vh"}
      bgImage={"/bgImage.png"}
      bgColor={"#12161F"}
      minW={"100vw"}
      bgSize={"auto"}
      color={"white"}
      direction={"column"}
      bgRepeat={"no-repeat"}
      gap={1}
    >
      <Flex direction={"column"} gap={2} p={5}>
        <Flex gap={1} justifyContent={"center"}>
          <Heading fontSize={"24px"}>Invite & Earn</Heading>
        </Flex>

        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Flex direction={"column"}>
            <HStack spacing={10}>
              <Text fontSize={"small"}>
                Ambassador
                <ChevronRightIcon />
              </Text>
              <Text fontSize={"small"}>1/4</Text>
            </HStack>

            <Flex alignItems={"center"} borderRadius={"20px"} mt={2}>
              <Progress
                value={20}
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
          </Flex>

          <Flex direction={"column"}>
            <Text fontSize={"xs"} textAlign={"center"}>
              XP Reward
            </Text>
            <Box
              border={"1px solid white"}
              p={1}
              borderRadius={"20px"}
              w={"27vw"}
              h={"4vh"}
            >
              <Text textAlign={"center"} fontSize={"xs"}>
                400,035
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Flex p={5} direction={"column"}>
        <Card
          bg={"transparent"}
          borderTop={"1px solid white"}
          borderRadius={"10px"}
          w={"full"}
        >
          <CardBody>
            <Flex alignItems={"center"} gap={3}>
              <Flex
                direction={"column"}
                justifyContent={"center"}
                align={"center"}
                bg={"#293042"}
                w={"20vw"}
                h={"10vh"}
                ml={"-10%"}
                mt={"-7%"}
                borderRadius={"10px"}
              >
                <Image src="/friends.png" />
                <Text fontSize={"sm"} color={"white"}>
                  Invite
                </Text>
              </Flex>

              <Box mt={"-7%"}>
                <Heading fontSize={"sm"} color={"white"}>
                  INVITE & EARN
                </Heading>
                <Text color={"white"} fontSize={"small"}>
                  Invite a Friend to Earn
                </Text>
                <Text textAlign={"left"} color={"#4979D1"} fontSize={"xs"}>
                  120 XP
                </Text>
              </Box>
            </Flex>
          </CardBody>
        </Card>

        <Card
          bg={"transparent"}
          borderTop={"1px solid white"}
          borderRadius={"10px"}
          w={"full"}
        >
          <CardBody>
            <Flex alignItems={"center"} gap={3}>
              <Flex
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                bg={"#293042"}
                w={"27vw"}
                h={"10vh"}
                ml={"-10%"}
                mt={"-10%"}
                borderRadius={"10px"}
              >
                <Image src="/friends.png" />
                <Text fontSize={"sm"} color={"white"}>
                  Invite
                </Text>
              </Flex>

              <Box mt={"-6%"}>
                <Heading fontSize={"sm"} color={"white"}>
                  INVITE A FRIEND WITH TELEGRAM PREMIUM
                </Heading>
                <Text color={"white"} fontSize={"small"}>
                  Invite a Friend to Earn
                </Text>
                <Text textAlign={"left"} color={"#4979D1"} fontSize={"xs"}>
                  1000 XP
                </Text>
              </Box>
            </Flex>
          </CardBody>
        </Card>
      </Flex>

      <Flex direction={"column"} p={5} mt={"-7%"} gap={3}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Text>List of your friends</Text>
          <Box background={"#D9D9D9"} h={"3.5vh"} w={"6vw"} rounded={"full"} />
        </Flex>
        <Flex
          w={"full"}
          background={"#B2B4B480"}
          h={"10vh"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"10px"}
        >
          <Text color={"white"}>You haven&apos;t invited anyone yet</Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Button
            bgColor={"#4979D1"}
            borderRadius={"10px"}
            color={"white"}
            w={"55vw"}
          >
            Invite a friend
          </Button>
          <Button
            bgColor={"#4979D1"}
            borderRadius={"10px"}
            color={"white"}
            w={"25vw"}
          >
            COPY
          </Button>
        </Flex>
      </Flex>
      <NavigationBar />
    </Flex>
  );
}

export default Friends