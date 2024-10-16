import {
  Flex,
  Text,
  Heading,
  Card,
  CardBody,
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";

type Props = {};

function Achievements({}: Props) {
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
      pb={"20%"}
    >
      <Flex direction={"column"} gap={2} p={5}>
        <Flex gap={1} justifyContent={"center"}>
          <Heading fontSize={"xl"}>Achievements & Leaderboard</Heading>
        </Flex>
        <Flex direction={"column"}>
          <Text color={"#C4C4C4"} fontSize={"xs"}>
            Click Picture to see Badges
          </Text>
          <Card bg={"#12161E"} boxShadow={"0px 2px 2px 2px #19388A99"}>
            <CardBody>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Flex alignItems={"center"} gap={2}>
                  <Wrap border={"1px solid white"} borderRadius={"15px"}>
                    <WrapItem>
                      <Avatar
                        size="sm"
                        name="Prosper Otemuyiwa"
                        src="https://bit.ly/prosper-baba"
                      />
                    </WrapItem>
                  </Wrap>
                  <Flex direction={"column"} lineHeight={"14px"}>
                    <Text color={"white"} fontSize={"small"} fontWeight={"700"}>
                      Emmay Weldort
                    </Text>
                    <Text color={"#4979D1"} fontSize={"2xs"} fontWeight={"700"}>
                      817,356,782 XP
                    </Text>
                  </Flex>
                </Flex>

                <Text color={"white"}>#2354</Text>
              </Flex>
            </CardBody>
          </Card>
        </Flex>
      </Flex>

      <Flex direction={"column"} p={5} gap={4}>
        <Heading color={"white"} fontSize={"small"}>
          TOP 22
        </Heading>

        <Flex
          border={"1px solid #C4C4C4"}
          minH={"60vh"}
          borderTopRadius={"15px"}
          boxShadow={"0px -2px #C4C4C4"}
          direction={"column"}
        >
          <Flex borderBottom={"2px solid #C4C4C4 "} h={"10vh"}>
            <Flex alignItems={"center"} p={2} gap={2}>
              <Wrap border={"1px solid white"} borderRadius={"15px"}>
                <WrapItem>
                  <Avatar
                    size="sm"
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                  />
                </WrapItem>
              </Wrap>
              <Flex direction={"column"} lineHeight={"14px"}>
                <Text color={"white"} fontSize={"small"} fontWeight={"700"}>
                  Emmay Weldort
                </Text>
                <Text color={"#4979D1"} fontSize={"2xs"} fontWeight={"700"}>
                  817,356,782 XP
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex borderBottom={"2px solid #C4C4C4 "} h={"10vh"}>
            <Flex alignItems={"center"} p={2} gap={2}>
              <Wrap border={"1px solid white"} borderRadius={"15px"}>
                <WrapItem>
                  <Avatar
                    size="sm"
                    name="Dan Abramov"
                    src="https://bit.ly/dan-abramov"
                  />
                </WrapItem>
              </Wrap>
              <Flex direction={"column"} lineHeight={"14px"}>
                <Text color={"white"} fontSize={"small"} fontWeight={"700"}>
                  Dan Abramov
                </Text>
                <Text color={"#4979D1"} fontSize={"2xs"} fontWeight={"700"}>
                  817,356,782 XP
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex borderBottom={"2px solid #C4C4C4 "} h={"10vh"}>
            <Flex alignItems={"center"} p={2} gap={2}>
              <Wrap border={"1px solid white"} borderRadius={"15px"}>
                <WrapItem>
                  <Avatar
                    size="sm"
                    name="Kent Dodds"
                    src="https://bit.ly/kent-c-dodds"
                  />
                </WrapItem>
              </Wrap>
              <Flex direction={"column"} lineHeight={"14px"}>
                <Text color={"white"} fontSize={"small"} fontWeight={"700"}>
                  Kent Dodds
                </Text>
                <Text color={"#4979D1"} fontSize={"2xs"} fontWeight={"700"}>
                  817,356,782 XP
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            borderBottom={"2px solid #C4C4C4 "}
            h={"10vh"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Flex alignItems={"center"} p={2} gap={2}>
              <Wrap border={"1px solid white"} borderRadius={"15px"}>
                <WrapItem>
                  <Avatar
                    size="sm"
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                </WrapItem>
              </Wrap>
              <Flex direction={"column"} lineHeight={"14px"}>
                <Text color={"white"} fontSize={"small"} fontWeight={"700"}>
                  Ryan Florence
                </Text>
                <Text color={"#4979D1"} fontSize={"2xs"} fontWeight={"700"}>
                  817,356,782 XP
                </Text>
              </Flex>
            </Flex>
            <Text p={2}>#4</Text>
          </Flex>
          <Flex
            borderBottom={"2px solid #C4C4C4 "}
            h={"10vh"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Flex alignItems={"center"} p={2} gap={2}>
              <Wrap border={"1px solid white"} borderRadius={"15px"}>
                <WrapItem>
                  <Avatar
                    size="sm"
                    name="Christian Nwamba"
                    src="https://bit.ly/code-beast"
                  />
                </WrapItem>
              </Wrap>
              <Flex direction={"column"} lineHeight={"14px"}>
                <Text color={"white"} fontSize={"small"} fontWeight={"700"}>
                  Christian Nwamba
                </Text>
                <Text color={"#4979D1"} fontSize={"2xs"} fontWeight={"700"}>
                  817,356,782 XP
                </Text>
              </Flex>
            </Flex>

            <Text p={2}>#5</Text>
          </Flex>
          <Flex
            borderBottom={"2px solid #C4C4C4 "}
            h={"10vh"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Flex alignItems={"center"} p={2} gap={2}>
              <Wrap border={"1px solid white"} borderRadius={"15px"}>
                <WrapItem>
                  <Avatar
                    size="sm"
                    name="Segun Tayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                </WrapItem>
              </Wrap>
              <Flex direction={"column"} lineHeight={"14px"}>
                <Text color={"white"} fontSize={"small"} fontWeight={"700"}>
                  Sadam Tayo
                </Text>
                <Text color={"#4979D1"} fontSize={"2xs"} fontWeight={"700"}>
                  817,356,782 XP
                </Text>
              </Flex>
            </Flex>
            <Text p={2}>#6</Text>
          </Flex>
        </Flex>
      </Flex>

      <NavigationBar />
    </Flex>
  );
}

export default Achievements;
