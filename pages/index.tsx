// @ts-nocheck
import type { NextPage } from 'next'
import dynamic from 'next/dynamic';


const DynamicPannellum = dynamic(() =>
  import("pannellum-react").then((mod) => mod.Pannellum),
  { ssr: false }
)

const Home: NextPage = () => {
  return (
    <>
      <h1>Pannellum React Component</h1>
      <DynamicPannellum
        width="100%"
        height="500px"
        pitch={10}
        image={"https://pannellum.org/images/alma.jpg"}
        yaw={180}
        hfov={110}
        autoLoad
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <DynamicPannellum.Hotspot
          type="info"
          pitch={11}
          yaw={-167}
          text="Info Hotspot Text 3"
          URL="https://github.com/farminf/pannellum-react"
        />

        <DynamicPannellum.Hotspot
          type="info"
          pitch={31}
          yaw={-107}
          text="Info Hotspot Text 4"
          URL="https://github.com/farminf/pannellum-react"
        />
      </DynamicPannellum>
    </>
  )
}

export default Home
