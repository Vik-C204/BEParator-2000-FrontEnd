import Particles from "react-particles";
import particlesConfig from "./config/particles-config";
import {useCallback, useEffect, useState} from "react";
import { loadFull } from "tsparticles";
import {
    Box,
    Button,
    Center, Circle, Container,
    Flex, FormControl, FormErrorMessage,
    Heading,
    HStack,
    Input, ListItem,
    Radio,
    RadioGroup, ScaleFade, Spacer, Spinner,
    Stack, Switch,
    Text, UnorderedList, useMediaQuery,
    VStack
} from "@chakra-ui/react";
import "@fontsource/silkscreen/700.css"
import Title from "./Title";
import { SiBinance } from 'react-icons/Si';
import { BsArrowRight } from 'react-icons/Bs'
import { ConnectButton } from "web3uikit";
import {Form, Formik, Field} from "formik";
import {useMoralis, useWeb3Contract} from "react-moralis";
import abiOwned from "../constants/abiOwned.json"
import abiRole from "../constants/abiRole.json"

const ParticlesBack = () => {

    const [name,setName] = useState("");
    const [symbol,setSymbol] = useState("");
    const [initialSupply,setInitialSupply] = useState("");
    const [owner,setOwner] = useState("");
    const [decimals,setDecimals] = useState("");
    const [cap,setCap] = useState("");

    const [supply,setSupply] = useState("");
    const [ownership,setOwnership] = useState("");
    const [canBurn,setCanBurn] = useState(null);
    const [canMint,setCanMint] = useState(null);
    const [canPause,setCanPause] = useState(null);

    const [tokens, setTokens] = useState([])
    const [lookupOwnership,setLookupOwnership] = useState("");


    const { isWeb3Enabled } = useMoralis()
    const [isSmallerThan721] = useMediaQuery("(max-width: 721px)")

    const { data, runContractFunction: getTokens, isFetching } = useWeb3Contract({})


    useEffect(() => {
    }, [isWeb3Enabled, data])




    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Box>
        <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded}
        options={particlesConfig}/> <Center mt={"10vh"}> <Box width={"80%"}>
            <Title />
            <Center> <HStack mt={"-17vh"} gap={"10vh"}> <SiBinance size={"10vh"} color={"#F3BA2F"}/> </HStack> </Center>
            <Center>
                <Box >
                    <Flex ml={"60vh"} gap={"5vh"}>
                        <Heading color={"white"}> A </Heading>
                        <Heading color={"#F3BA2F"}> Free & Customizable </Heading>
                        <Heading color={"white"}> BEP-20 </Heading>
                        <Heading color={"#F3BA2F"}> Token generator </Heading>
                    </Flex>
                </Box>
            </Center>
            <Center> <Box borderRadius={"5"}  mt={"10vh"} borderColor={"#F3BA2F"} maxW={"50%"}>
            <Text fontSize={"xl"} color={"white"} align={"center"}> Welcome to BEPenator-2000, a decentralised web app designed to allow anyone the creation and deployment of customizable BEP-20 token contracts on the Binance Smart Chain within
                mere minutes,
                Completely free of charge, requiring no setup, login, or coding. Was made to help people with no coding experience but a need for a BEP-20 token to create their own quickly and for free and to help fellow web3 developers save their time coding boilerplate code. Enjoy :)     </Text>
            </Box> </Center>
            <Center>
            <Box

                bg={"#F3BA2F"}
                paddingBottom={"1vh"}
                paddingTop={"1vh"}
                mt={"5vh"}
                borderRadius={"10"}

            >  <HStack>
                <ConnectButton moralisAuth={false} />
            </HStack>
             </Box> </Center>
            <Center> <Heading size={"xl"} mt={"20vh"} color={"#F3BA2F"}> ENTER DETAILS </Heading> </Center>
            <Center mt={"10vh"}> <VStack gap={"10vh"}> <Flex>

                <Flex width={"50vh"} direction={"column"} mr={"20vh"}>
                    <Heading size={"lg"} color={"white"}> Name: </Heading>
                    <Input focusBorderColor={"teal.500"} width={"50vh"} color={"white"} borderWidth={"0.5vh"} borderColor={"#F3BA2F"} onChange={event => setName(event.target.value)}/>
                    <Text alignSelf={"flex-end"} color={"white"}> What your brand new token will be known as
                    </Text>
                </Flex>
                <Flex direction={"column"} ml={"20vh"} width={"50vh"}>
                    <Heading size={"lg"} color={"white"}> Symbol: </Heading>
                    <Input focusBorderColor={"teal.500"} color={"white"} borderWidth={"0.5vh"} borderColor={"#F3BA2F"} onChange={event => setSymbol(event.target.value)}/>
                    <Text alignSelf={"flex-end"} color={"white"}> Usually 3-5 capital letters
                    </Text>
                </Flex>


            </Flex>

                <Flex>

                    <Flex direction={"column"} width={"50vh"} mr={"20vh"}>
                        <Heading size={"lg"} color={"white"}> Initial Supply: </Heading>
                        <Input focusBorderColor={"teal.500"} width={"50vh"} color={"white"} borderWidth={"0.5vh"} borderColor={"#F3BA2F"} onChange={event => setInitialSupply(event.target.value)}/>
                        <Text alignSelf={"flex-end"} color={"white"}>Sent to declared owner at token creation </Text>

                    </Flex>
                    <Flex direction={"column"} width={"50vh"} ml={"20vh"}>
                        <Heading size={"lg"} color={"white"}> Owner: </Heading>
                        <Input focusBorderColor={"teal.500"} width={"50vh"} color={"white"} borderWidth={"0.5vh"} borderColor={"#F3BA2F"} onChange={event => setOwner(event.target.value)}/>
                        <Text alignSelf={"flex-end"} color={"white"}> Address that may have special privileges </Text>

                    </Flex>


                </Flex>

                <Flex>

                    <Flex direction={"column"} width={"50vh"} mr={"20vh"}>
                        <Heading size={"lg"} color={"white"}> Decimals: </Heading>
                        <Input focusBorderColor={"teal.500"} width={"50vh"} color={"white"} borderWidth={"0.5vh"} borderColor={"#F3BA2F"} onChange={event => setDecimals(event.target.value)}/>
                        <Text alignSelf={"flex-end"} color={"white"}> Decimal precision for the token, recommended 18 </Text>
                    </Flex>
                    <Flex direction={"column"} width={"50vh"} ml={"20vh"}>
                        <Heading size={"lg"} color={"white"}> Cap: </Heading>
                        <Input isDisabled={ supply !== "capped"} focusBorderColor={"teal.500"} width={"50vh"} color={"white"} borderWidth={"0.5vh"} borderColor={"#F3BA2F"} onChange={event => setCap(event.target.value)}/>
                        <Text alignSelf={"flex-end"} color={"white"}> Only works if Capped Supply is selected </Text>
                    </Flex>


                </Flex>

            </VStack>

            </Center>
            <Center> <Heading size={"xl"} mt={"20vh"} color={"#F3BA2F"}> CHOOSE SUPPLY </Heading> </Center>
            <RadioGroup onChange={setSupply} value={supply}>
                <Center> <Flex mt={"10vh"} direction='row'>

                    <Box maxW={"31%"}> <ScaleFade whileHover={{ scale: 1.2 }}
                               initialScale={1}
                               in={ 1===1} > <VStack spacing={"4vh"}>  <Heading color={"white"}> Fixed </Heading> <Radio colorScheme='yellow' value='fixed'> </Radio>
                       <Text align={"center"} color={"white"} > Impossible to generate new tokens. Max supply will be the declared initial supply.</Text>
                    </VStack> </ScaleFade> </Box>



                    <Box> <ScaleFade whileHover={{ scale: 1.2 }}
                                                  initialScale={1}
                                                  in={ 1===1} > <VStack spacing={"4vh"} justifySelf={"center"} ml={"10vh"} mr={"10vh"}>  <Heading color={"white"}> Unlimited </Heading> <Radio colorScheme='yellow' value='unlim'> </Radio>
                        <Text align={"center"} color={"white"}> Possible to generate as many new tokens as you want. </Text>
                    </VStack> </ScaleFade> </Box>



                    <Box maxW={"30%"}> <ScaleFade whileHover={{ scale: 1.2 }}
                                                  initialScale={1}
                                                  in={ 1===1} ><VStack  spacing={"4vh"}>  <Heading color={"white"}> Capped </Heading> <Radio colorScheme='yellow' value='capped'> </Radio>
                        <Text align={"center"} color={"white"}> Impossible to generate more tokens than the defined token cap.</Text>
                    </VStack> </ScaleFade> </Box>

                </Flex> </Center>
            </RadioGroup>

            <Center> <Heading size={"xl"} mt={"20vh"} color={"#F3BA2F"}> CHOOSE OWNERSHIP </Heading> </Center>
            <RadioGroup onChange={setOwnership} value={ownership}>
                <Center> <Flex mt={"10vh"} direction='row'>

                    <Box maxW={"31%"}> <ScaleFade whileHover={{ scale: 1.2 }}
                                                  initialScale={1}
                                                  in={ 1===1} ><VStack spacing={"4vh"}>  <Heading color={"white"}> No Owner </Heading> {supply !== "fixed" ? <Text color={"#624b14"}> Select fixed supply first</Text> : <Radio  colorScheme='yellow' value='none'> </Radio> }
                        <Text align={"center"} color={"white"} > No account has special privileges. Tokens cannot be minted or paused. Initial supply is still sent to declared owner account.</Text>
                    </VStack> </ScaleFade> </Box>



                        <Box> <ScaleFade whileHover={{ scale: 1.2 }}
                                                      initialScale={1}
                                                      in={ 1===1} ><VStack spacing={"4vh"} justifySelf={"center"} ml={"10vh"} mr={"10vh"}>  <Heading color={"white"}> Owned </Heading> <Radio colorScheme='yellow' value='owned'> </Radio>
                        <Text align={"center"} color={"white"}> Declared owner has the privileges to mint and/or pause the tokens if the contract allows it.  </Text>
                    </VStack> </ScaleFade> </Box>



                            <Box maxW={"31%"}> <ScaleFade whileHover={{ scale: 1.2 }}
                                                          initialScale={1}
                                                          in={ 1===1} ><VStack spacing={"4vh"}>  <Heading color={"white"}> Role-Based </Heading> <Radio colorScheme='yellow' value='role'> </Radio>
                        <Text align={"center"} color={"white"}> Declared owner becomes the admin and can give other accounts roles of either itself, minter or pauser if the contract allows those actions.</Text>
                    </VStack> </ScaleFade> </Box>

                </Flex> </Center>
            </RadioGroup>

            <Center> <Heading size={"xl"} mt={"20vh"} color={"#F3BA2F"}> PICK AVAILABLE ACTIONS </Heading> </Center>


            <Center> <HStack mt={"20vh"} spacing={"10vh"}>

                <ScaleFade whileHover={{ scale: 1.4 }}
                           initialScale={1}
                           in={ 1===1} ><VStack width={"100%"} justifyContent={"center"} columnGap={"20vh"}>
                       <Heading color={"#F3BA2F"}> BURNABLE? </Heading>
                        <HStack>
                            <Heading color={"white"}> NO </Heading>
                            <Switch size={"lg"} colorScheme={"yellow"} onChange={(e) => setCanBurn(e.target.checked)}>  </Switch>
                            <Heading color={"white"}> YES </Heading>
                        </HStack>
                </VStack> </ScaleFade>

                <ScaleFade whileHover={{ scale: 1.4 }}
                           initialScale={1}
                           in={ 1===1} > <VStack width={"100%"} justifyContent={"center"} columnGap={"20vh"}>
                    <Heading color={"#F3BA2F"}> MINTABLE? </Heading>
                    <HStack>
                        <Heading color={"white"}> NO </Heading>
                        <Switch size={"lg"} isDisabled={ ownership === 'none' } colorScheme={"yellow"} onChange={(e) => setCanMint(e.target.checked)}>  </Switch>
                        <Heading color={"white"}> YES </Heading>
                    </HStack>
                </VStack> </ScaleFade>

                <ScaleFade whileHover={{ scale: 1.4 }}
                           initialScale={1}
                           in={ 1===1} ><VStack width={"100%"} justifyContent={"center"} columnGap={"20vh"}>
                    <Heading color={"#F3BA2F"}> PAUSABLE? </Heading>
                    <HStack>
                        <Heading color={"white"}> NO </Heading>
                        <Switch isDisabled={ ownership === 'none' } size={"lg"} colorScheme={"yellow"} onChange={(e) => setCanPause(e.target.checked)}>  </Switch>
                        <Heading color={"white"}> YES </Heading>
                    </HStack>
                </VStack> </ScaleFade>


            </HStack> </Center>

            <Center> <Heading size={"xl"} mt={"20vh"} color={"#F3BA2F"}> AND FINALLY... </Heading> </Center>

            <Center mt={"5vh"}> <Circle borderWidth={"1vh"} borderColor={"white"} as={Button} bg={"#F3BA2F"} size={"3xs"} colorScheme={"yellow"} color={"white"}> <VStack> <Heading> CREATE  </Heading> <Heading> TOKEN  </Heading></VStack> </Circle> </Center>
            <Center> <Heading size={"md"} mt={"10vh"} color={"white"}> You will get a pop-up with your token address once it's deployed and verified </Heading> </Center>
            <Center> <Heading size={"md"} mt={"10vh"} color={"white"}> But! </Heading> </Center>
            <Center> <Heading size={"md"} mt={"3vh"} color={"#F3BA2F"}> If you ever miss it/forget it/lose it </Heading> </Center>
            <Center> <Heading size={"md"} mt={"3vh"} color={"white"}> There's always </Heading> </Center>

            <Box>
             <Box mt={"15vh"}> <Center padding={"1vh"} mt={"1vh"} height={"100%"}> <VStack> <Heading color={"white"} size={"3xl"}> BEPENATOR LOOKUP </Heading>
             <HStack> <Heading size={"lg"} color={"white"}> Owner Address </Heading> <BsArrowRight color={"#F3BA2F"} size={"8vh"}/> <Heading size={"lg"} color={"white"}> Tokens Created  </Heading> </HStack> </VStack>
             </Center> </Box>
                    <VStack width={"100%"} height={"10vh"} marginTop={"5vh"}>

                        <Formik
                            initialValues={{ address: "", ownership: "" }}
                            onSubmit={ lookupOwnership === "owned" ? async (values) => {
                                await getTokens({
                                    params: {
                                        abi: abiOwned,
                                        contractAddress: "0xA5632246941Fbf53A54962A757B86a569A37764c",
                                        functionName: "getTokenAdress",
                                        params: { owner: values.address},
                                    },
                                    onSuccess: (tx) => setTokens(tx),
                                    onError: (error) => console.log(JSON.stringify(error)),
                                });
                            } : async (values) => {
                                await getTokens({
                                    params: {
                                        abi: abiRole,
                                        contractAddress: "0x202Ec2Ace922B3Dd533284f15A84E45bF1891476",
                                        functionName: "getTokenAdress",
                                        params: { owner: values.address},
                                    },
                                    onSuccess: (tx) => setTokens(tx),
                                    onError: (error) => console.log(JSON.stringify(error)),
                                });
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <Field name="address">
                                        {({ field, form }) => (
                                            <FormControl
                                                isInvalid={form.touched.fee}
                                            >
                                                <FormErrorMessage bg={"white"}>
                                                    {form.errors.fee}
                                                </FormErrorMessage>
                                                <Input
                                                    {...field}
                                                    placeholder="Owner Address of the Token"
                                                    borderColor={"#F3BA2F"}
                                                    focusBorderColor={"teal.500"}
                                                    width={"50vh"}
                                                    color={"white"}
                                                    borderWidth={"0.5vh"}
                                                />


                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name="ownership">
                                        {({ field, form }) => (
                                            <FormControl
                                                isInvalid={form.touched.fee}
                                            >
                                                <FormErrorMessage bg={"white"}>
                                                    {form.errors.fee}
                                                </FormErrorMessage>
                                                    <RadioGroup onChange={setLookupOwnership} value={lookupOwnership}>
                                                         <Center> <VStack mt={"5vh"} mb={"5vh"} direction='row'>
                                                             <HStack> <Text color={"white"}> Token None Owned/Owned?</Text>
                                                            <Radio  colorScheme='yellow' value='owned'> </Radio> </HStack>
                                                             <HStack> <Text color={"white"}> Token Role-Based?</Text>
                                                            <Radio colorScheme='yellow' value='role'> </Radio> </HStack>
                                                        </VStack> </Center>
                                                    </RadioGroup>




                                            </FormControl>
                                        )}
                                    </Field>
                                    <Button
                                        mt={"2vh"}
                                        width={"100%"}
                                        height={"7vh"}
                                        disabled={isSubmitting || lookupOwnership === ""}
                                        type="submit"
                                        colorScheme={"yellow"}
                                    >
                                        Search Tokens
                                    </Button>
                                </Form>
                            )}
                        </Formik>



                    </VStack>

                <Center> <UnorderedList mt={"30vh"} spacing={"5vh"}>
                    {tokens.map((token) => {
                        return (
                             <ListItem color={"white"} key={tokens.indexOf(token)}>
                                <Center>
                                    <Box>
                                        <Text fontSize={"lg"} color={"#F3BA2F"}>
                                            {token}
                                        </Text>
                                    </Box>
                                </Center>
                            </ListItem>
                        )
                    })}
                </UnorderedList> </Center>

             </Box>
            <Box height={"80vh"}> </Box>





        </Box> </Center> </Box>
    );

}
export default ParticlesBack