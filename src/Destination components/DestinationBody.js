import { OrbitControls, Stage } from "@react-three/drei"
import { Col, Container, Row } from "react-bootstrap"
import { Canvas } from "react-three-fiber"
import Moon from './Moon';
import Mars from './Mars';
import Europa from './Europa';
import Titan from './Titan';
import { motion } from "framer-motion";
import { useState } from "react";

function DestinationBody() {
    const plants = [
        {
        plant:<Moon/>,name:"MOON",text:"See our planet as you’ve never seen it before. A perfect relaxing trip away to helpregain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance:"384,400 km",time:"3 days"
    },
    {
        plant:<Mars/>,name:"Mars",text:"on’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance:"225 mil. km",time:"9 months"
    },
    {
        plant:<Europa/>,name:"Europa",text:"The smallest of the four Galilean moons orbiting Jupiter,Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance:" 628 mil. km",time:"3 years"
    },
    {
        plant:<Titan/>,name:"Titan",text:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance:"1.6 bil. km",time:"7 years"
    },
    ]
    const [count,setCount]= useState(0)
    return (
        <div className="destination-parent">
            <Container>
                <Row >
                    
                    <Col lg={6}>
                  
                        <Row>
                        <Col xs={12} className="pick-your-dist">01 Pick your destination</Col>
                        <Col xs={12}>
                            <motion.div
                              initial={{y:1000}}
                              animate={{y:1}}
                              transition={{duration:2}}
                            
                              >
                            <Canvas >
                                <Stage environment="city" intensity={0.6}>
                                    {plants[count].plant}
                                </Stage>
                                <OrbitControls enableZoom={false} autoRotate={true} />
                            </Canvas>
                            </motion.div>

                        </Col>
                        </Row>
                       
                    </Col>
                    <Col lg={6}  className="plants-info">
                        <Row>
                       <motion.div
                        initial={{x:1000}}
                        animate={{x:1}}
                        transition={{duration:2}}
                       
                       >
                            <Col xs={12}>
                            <ul className="plants-list">
                                <li className={count==0?"active":null}onClick={()=>setCount(0)}>Moon</li>
                                <li className={count==1?"active":null} onClick={()=>setCount(1)}>mars</li>
                                <li className={count==2?"active":null} onClick={()=>setCount(2)}>europa</li>
                                <li className={count==3?"active":null} onClick={()=>setCount(3)}>titan</li>
                            </ul>
                        
                        </Col>
                        <div >
                            <div className="plant-name">
                                <h5>{plants[count].name}</h5>
                                <p>  {plants[count].text}</p>
                            </div>
                            <hr></hr>
                            <div className="plant-distance">
                                <div>
                                <span> Avg. distance</span> 
                                <br></br>
                                <span>{plants[count].distance}</span>
                                </div>

                                <div>
                                <span>Est. travel time</span> 
                                <br></br>
                                <span>{plants[count].time}</span>
                                </div>
                            </div>
                        </div>
                        </motion.div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default DestinationBody