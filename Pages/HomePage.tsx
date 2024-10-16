import {
  Avatar,
  Flex,
  Wrap,
  WrapItem,
  Text,
  HStack,
  Box,
  Progress,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";


type Props = {};

export default function HomePage({}: Props) {
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
    >
      <Flex direction={"column"} gap={2} p={5}>
        <Flex gap={1}>
          <Wrap>
            <WrapItem>
              <Avatar
                size="xs"
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
            </WrapItem>
          </Wrap>
          <Text fontSize={"md"} fontWeight={"700"}>
            Emmay Weldort
          </Text>
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

            {/* Progress Bar with gradient */}
            <Flex alignItems={"center"} borderRadius={"20px"} mt={2}>
              <Progress
                value={40}
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

      <Flex
        minH={"2vh"} // Reduced height for the gradient background container
        bg={"linear-gradient(90deg, #4979D1 0%, #B5CFFE 100%)"} // Gradient background
        position="relative" // Allows absolute positioning of the inner Flex
        w="100vw"
        borderRadius={"25px"}
        zIndex={0}
        overflow={"hidden"}
      >
        {/* Content Flex, positioned halfway over the first Flex */}
        <Flex
          position="absolute" // Position it absolutely within the parent
          top={"40%"} // Move it halfway down the parent
          transform={"translateY(-0.65%)"} // Adjust to be exactly in the middle
          w={"100vw"} // Width of the inner Flex
          borderTop={"5px solid #7585A7"}
          minH={"70vh"}
          borderRadius={"25px"} // Border radius for the inner content box
          boxShadow={"0px 5px 15px rgba(0, 0, 0, 0.2)"} // Optional: shadow for the content
          zIndex={1} // Ensures the content is above the background
        >
          {/* Your content goes here */}
          gis
        </Flex>
      </Flex>

      {/* <NavigationBar /> */}
    </Flex>
  );
}
