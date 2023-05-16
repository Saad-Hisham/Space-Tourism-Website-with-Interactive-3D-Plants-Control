import { motion } from "framer-motion"
import { Col, Container, Row } from "react-bootstrap"
function HomeBody() {



    return (
        <div className="home-page-parent">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="home-page-text-container">
                        <motion.div 
                        initial={{y:"-10vw"}}
                        animate={{y:1}}
                        transition={{ duration:1}}
                        >
                                <p className="intro">So, you want to travel to</p>
                            </motion.div >
                            <motion.div
                            initial={{scale:0}}
                            animate={{scale:1}}
                            transition={{duration:1,delay:.5}}
                            > 
                                
                                <h1>Space</h1>
                            </motion.div>
                            <motion.div
                               initial={{y:"10vw"}}
                               animate={{y:1}}
                               transition={{ duration:1}}
                            >
                                <p>Let’s face it; if you want to go to space, you might as well
                                    genuinely go to outer space and not hover kind of on the edge of it.
                                    Well sit back, and relax because we’ll
                                    give you a truly out of this world experience!</p>
                            </motion.div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <motion.div className="button-container"
                         initial={{x:"10vw",opacity:0}}
                         animate={{x:1,opacity:1}}
                         transition={{ duration:.7,delay:.5}}
                        >
                            <button>
                                EXPLORE
                            </button>
                        </motion.div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default HomeBody


