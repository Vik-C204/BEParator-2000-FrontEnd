import {Box, Center, Flex, Heading, HStack, Text} from "@chakra-ui/react";
import "@fontsource/silkscreen/400.css"

const Title = () => {

    return (
            <Flex direction={"column"} alignItems={"center"} rowGap={"20vh"}>
                <Flex mr={"35vh"}>
                    <Heading size={"4xl"} color={"#F3BA2F"} letterSpacing={"2vh"}> BEP </Heading>
                    <Heading size={"4xl"} color={"white"} letterSpacing={"2vh"}> ERATOR- </Heading>
                    <Heading size={"4xl"} color={"#F3BA2F"} letterSpacing={"2vh"}> 20 </Heading>
                    <Heading size={"4xl"} color={"white"} letterSpacing={"2vh"}> 00 </Heading>
                </Flex>
                <Center>  </Center>


            </Flex>

    );

}
export default Title