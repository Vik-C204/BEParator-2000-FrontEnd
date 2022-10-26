import Head from 'next/head'
import Image from 'next/image'
import ParticlesBack from "../components/ParticleBackground";
import {Box, Center} from "@chakra-ui/react";


export default function Home() {
    /* For some reason particles background overwrites everything that is not in it so
    considering that and that there a lot of parameters on the same page
    and their state may be needed by other components, decided it would be best to lay everything
    out in a single component(aside from the title) */

  return (
    <div>
      <Head>
        <title>Beparator-2000</title>
        <meta name="description" content="Free & Quick BEP-20 Token Generator " />
      </Head>
        <ParticlesBack />




    </div>
  )
}
