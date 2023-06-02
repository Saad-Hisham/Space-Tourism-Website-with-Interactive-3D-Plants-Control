import { OrbitControls, Stage } from "@react-three/drei"
import { Col, Container, Row,Image } from "react-bootstrap"
import { Canvas } from "react-three-fiber"

import { motion } from "framer-motion";
import { useState } from "react";
import commander from "../space-tourism-website-main/starter-code/assets/technology/image-space-capsule-portrait.jpg"
import flight from "../space-tourism-website-main/starter-code/assets/technology/image-spaceport-portrait.jpg"
import pilot from "../space-tourism-website-main/starter-code/assets/technology/image-launch-vehicle-portrait.jpg"

function Techs() {
    const plants = [
        {
            img: commander, name: "Space capsule", text: " A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            job: "The terminology..."
        },
        {
            img: flight, name: "Spaceport", text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            job: "The terminology..."
        },
        {
            img: pilot, name: " Launch vehicle", text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            job: "The terminology..."
        },


      

    ]
    const [count, setCount] = useState(0)
    return (
        <div className="destination-parent">
            <Container>
                <Row >

                    <Col xs={12} className="pick-your-dist">03 Space launch 101</Col>
                    <Col lg={6} className="plants-info">
                        <Row>
                            <motion.div
                                initial={{ x: 1000 }}
                                animate={{ x: 1 }}
                                transition={{ duration: 2 }}
                            >

                                <div >
                                    <div className="plant-name">
                                        <p className="job">{plants[count].job}</p>
                                        <h5 className="crew-member">{plants[count].name}</h5>
                                        <p>  {plants[count].text}</p>
                                    </div>
                                </div>
                            </motion.div>

                            <Col xs={12} className="crew-parent-list">
                                <ul className="plants-list crew-list">
                                    <li className={count == 0 ? "active" : null} onClick={() => setCount(0)}><span></span></li>
                                    <li className={count == 1 ? "active" : null} onClick={() => setCount(1)}><span></span></li>
                                    <li className={count == 2 ? "active" : null} onClick={() => setCount(2)}><span></span></li>
                                </ul>

                            </Col>
                        </Row>
                    </Col>

                    <Col lg={6}>

                        <Row>

                            <Col xs={12}>
                                <motion.div
                                    initial={{ y: 1000 }}
                                    animate={{ y: 1 }}
                                    transition={{ duration: 2 }}

                                >
                                    <Image src={plants[count].img} fluid width={568} height={712}/>
                                </motion.div>

                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Techs