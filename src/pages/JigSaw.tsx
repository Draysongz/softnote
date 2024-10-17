import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import NavigationBar from "../components/NavigationBar";

export default function Jigsaw() {
  const [isSolved, setIsSolved] = useState(false); // State to track if the puzzle is solved
  const toast = useToast(); // Chakra UI toast

  const handleSolved = () => {
    setIsSolved(true); // Set the puzzle as solved
    toast({
      title: "You completed the jigsaw!",
      description: "Claim your reward.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
  };

  const handleClaimPoints = () => {
    toast({
      title: "Points claimed!",
      description: "You have successfully claimed 10 XP.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
    // Reset the puzzle state to restart the game
    setIsSolved(false);
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
        gap={{ base: 5, sm: 14 }}
        pb={32}
      >
        <Text color={"#fff"} fontWeight={"700"} fontSize={"24px"}>
          Resource Roulette
        </Text>

        {/* Puzzle Container */}
        <Box 
          bgImage={"./jigsawImage.png"} 
          bgPosition={'center'}
          bgRepeat={'no-repeat'}
          bgSize={'contain'}
          w={"100%"}
          p={4} 
          maxW="600px"
          mx="auto"
        >
          {/* Jigsaw Puzzle Component */}
          <JigsawPuzzle
            imageSrc="./jigsawImage.png" // Image for the puzzle
            rows={4}                     // Set rows for the puzzle
            columns={6}                  // Set columns for the puzzle
            onSolved={handleSolved}       // Trigger toast and enable button when solved
          />
        </Box>

        {/* Spin and Win Button */}
        <Button
          w={"342px"}
          h={"49px"}
          bg={"#4979d1"}
          boxShadow={"0px -2px 8px 0px #F8F9FD33 inset"}
          fontSize={"24px"}
          fontWeight={700}
          color={"#f5f5f5"}
          borderRadius={"20px"}
          onClick={handleClaimPoints}
          disabled={!isSolved} // Disable button until the puzzle is solved
          _disabled={{ bg: "gray.500" }} // Styling for the disabled state
        >
          Claim 10XP
        </Button>
      </Flex>

      <NavigationBar />
    </Box>
  );
}
