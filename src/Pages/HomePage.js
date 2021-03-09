import React from 'react';


import Particles from 'react-particles-js';
import Header from "../components/Header";

function HomePage() {

    return(
        <>
        
            <Particles 
          params={{
            particles: {
              number:{
                value: 30,
                density:{
                  enable: true,
                  value_area: 900
                }
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 6,
                  color: "#f9ab00"
                }
              }

            }
          }}
    
    />
          <Header />

      </>
            
        
    );

}

export default HomePage;