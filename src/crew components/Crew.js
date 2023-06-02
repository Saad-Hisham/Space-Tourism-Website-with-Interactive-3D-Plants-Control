import { OrbitControls, Stage } from "@react-three/drei"
import { Col, Container, Row,Image } from "react-bootstrap"
import { Canvas } from "react-three-fiber"

import { motion } from "framer-motion";
import { useState } from "react";
import commander from "../space-tourism-website-main/starter-code/assets/crew/image-douglas-hurley.webp"
import flight from "../space-tourism-website-main/starter-code/assets/crew/image-anousheh-ansari.webp"
import pilot from "../space-tourism-website-main/starter-code/assets/crew/image-victor-glover.webp"
import mission from "../space-tourism-website-main/starter-code/assets/crew/image-mark-shuttleworth.webp"

function Crew() {
    const plants = [
        {
            img: commander, name: "Douglas Hurley", text: "  Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut.He launched into space for the third time as commander of Crew Dragon Demo- 2.",
            job: " Commander"
        },
        {
            img: flight, name: "Anousheh Ansari", text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
            job: "Flight Engineer"
        },
        {
            img: pilot, name: "  Victor Glover", text: "  Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
            job: "Pilot"
        },


        {
            img: mission, name: "Mark Shuttleworth", text: " Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind  the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
            job: "Mission Specialist"
        },

    ]
    const [count, setCount] = useState(0)
    return (
        <div className="destination-parent">
            <Container>
                <Row >

                    <Col xs={12} className="pick-your-dist">02 Meet your crew</Col>
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
                                    <li className={count == 3 ? "active" : null} onClick={() => setCount(3)}><span></span></li>
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
export default Crew