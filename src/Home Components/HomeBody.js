import { motion } from "framer-motion"
import { Col, Container, Row } from "react-bootstrap"
function HomeBody() {



    return (
        <div className="home-page-parent">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="home-page-text-container">
                            <div

                            >
                                <p className="intro">So, you want to travel to</p>
                            </div >
                            <div

                            >

                                <h1>Space</h1>
                            </div>
                            <div

                            >
                                <p>Let’s face it; if you want to go to space, you might as well
                                    genuinely go to outer space and not hover kind of on the edge of it.
                                    Well sit back, and relax because we’ll
                                    give you a truly out of this world experience!</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="button-container"
                       
                        >
                            <button>
                                EXPLORE
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default HomeBody


