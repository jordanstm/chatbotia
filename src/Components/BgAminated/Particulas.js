import {useCallback}  from 'react';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim"


function Particulas(Cont){
    const particlesInit = useCallback(async (engine) => {
        // console.log(engine);
         // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
         // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
         // starting from v2 you can add only the features you need reducing the bundle size
         //await loadFull(engine);
         await loadSlim(engine);
     }, []);
     
     const particlesLoaded = useCallback(async (container) => {
       await console.log(container);
     }, []);
    return (
        <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} 
        options={{
          background: {
              color: {
                  value: "transparent",
              },
          },
          fpsLimit: 80,
          interactivity: {
              events: {
                  onClick: {
                      enable: true,
                      mode: "push",
                  },
                  onHover: {
                      enable: true,
                      mode: "repulse",
                  },
                  resize: true,
              },
              modes: {
                  push: {
                      quantity: 8,
                  },
                  repulse: {
                      distance: 100,
                      duration: 0.9,
                  },
              },
          },
          particles: {
              color: {
                  value: "#fff",
              },
              links: {
                  color: "#ffffff",
                  distance: 130,
                  enable: true,
                  opacity: 0.8,
                  width: 1,
              },
              move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                      default: "bounce",
                  },
                  random: true,
                  speed: 8,
                  straight: false,
              },
              number: {
                  density: {
                      enable: true,
                      area: 800,
                  },
                  value: 80,
              },
              opacity: {
                  value: 0.9,
              },
              shape: {
                  type: "circle",
              },
              size: {
                  value: { min: 1, max: 5 },
              },
          },
          detectRetina: false,
          fullScreen:{
            enable:false,
            zIndex:22
          }
      }}
     />
        
    )
    
}
export default Particulas;