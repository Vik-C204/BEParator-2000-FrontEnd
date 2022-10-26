import {Box, Center, Flex, Heading, HStack, Text, useMediaQuery, VStack} from "@chakra-ui/react";
import "@fontsource/silkscreen/400.css"

const Title = () => {

    const [isSmallerThan721] = useMediaQuery("(max-width: 721px)")


    return ( isSmallerThan721 ? <Center> <VStack>

            <Flex>
                <Heading size={"4xl"} color={"#F3BA2F"} letterSpacing={"1vh"}> BEP </Heading>
                <Heading size={"4xl"} color={"white"} letterSpacing={"1vh"}> ERATOR </Heading>
            </Flex>

                <Flex> <Heading size={"4xl"} color={"#F3BA2F"} letterSpacing={"1vh"}> 20 </Heading>
                <Heading size={"4xl"} color={"white"} letterSpacing={"1vh"}> 00 </Heading> </Flex>
                </VStack>
            </Center> :
            <Flex direction={"column"} alignItems={"center"} rowGap={"20vh"}>
                <Flex mr={"35vh"}>
                    <Heading size={"4xl"} color={"#F3BA2F"} letterSpacing={"1vh"}> BEP </Heading>
                    <Heading size={"4xl"} color={"white"} letterSpacing={"1vh"}> ERATOR- </Heading>
                    <Heading size={"4xl"} color={"#F3BA2F"} letterSpacing={"1vh"}> 20 </Heading>
                    <Heading size={"4xl"} color={"white"} letterSpacing={"1vh"}> 00 </Heading>
                </Flex>
                <Center>  </Center>


            </Flex>

    );

}
export default Title