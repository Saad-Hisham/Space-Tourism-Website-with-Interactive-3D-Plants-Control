import { Col, Container, Row, Image } from "react-bootstrap"
import logo from "../space-tourism-website-main/starter-code/assets/shared/logo.svg"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import open from "../space-tourism-website-main/starter-code/assets/shared/icon-hamburger.svg"
import close from "../space-tourism-website-main/starter-code/assets/shared/icon-close.svg"
import { Link, useLocation } from "react-router-dom"

// Define the Navbar component
function Navbar() {
    const location = useLocation();
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setIsSmallScreen(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsSmallScreen(event.matches);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);
    const [background , setbackground]= useState("home");
    document.body.classList.value = background
    

    // Define animation variants for child elements
    const childVariants = {
        initial: {
            scaleX: 0,
            transition: {
                duration: 0.3,
            },
        },
        animate: {
            scaleX: 1,
            transition: {
                duration: 0.3,
            },
        }
    }

    // Define animation variants for the navbar
    const navbarVariants = {
        initial: {
            x: "-19vw",
            transition: {
                duration: 0.7,
            },
        },
        animate: {
            x: "100vw",
            transition: {
                duration: 0.7,
            },
            exit: {
                x: "0vw",
            }
        }
    }

    // Define state variables for hover and open states
    const [isHoverd, setIsHoverd] = useState([false, 0]);
    const [opend, toggleOpen] = useState(false)

    // Define event handlers for mouse enter and mouse out events on list items
    const handleMouseEnter = (e) => {
        setIsHoverd([true, e.target.value]);
    };
    const handleMouseOut = () => {
        setIsHoverd([false, 0]);
    };

    // Define event handler for toggling the hamburger menu icon
    const toggleIcons = () => {
        if (opend != true) {
            toggleOpen(true);
        } else {
            toggleOpen(false);
        }
    }

    // Render the navbar component
    return (
        // Main container for the navbar
        <div className="nav-bar">
            <Container>
                <Row>
                    <Col md={6} >
                        {/* Logo image */}
                        <div className="icon" >
                            <Image src={logo} alt="space tourism logo" width={50} height={50}/>
                        </div>
                        {/* Horizontal divider line */}
                        <div className="line"></div>
                        <div className="icons-parent ">
                            {/* Hamburger menu icon */}
                            <div className="icons-container" onClick={toggleIcons}>
                                {opend ? <img src={close} alt="close navigation bar icon" /> : <img src={open} alt="open navigation bar icon" />}
                            </div>
                        </div>
                    </Col>
                    {isSmallScreen ? <motion.Col className="nav-bar-list col-md-6"
                        // Apply animation variants to the navbar element
                        variants={navbarVariants}
                        animate={opend ? "initial" : "animate"}
                    >
                        {/* Navigation list */}

                        <div className="nav-list">

                            <ul>
                            <Link to="/" onClick={()=>{
                                    setbackground("home")
                                    localStorage.setItem("back",JSON.stringify(background))

                            }}>
                                  Home
                                <motion.li onMouseEnter={handleMouseEnter} value="1" onMouseLeave={handleMouseOut} >
                                
                                    {/* Active span element for highlighting active list item */}
                                    <motion.span
                                        className={location.pathname == "/" ? "active" : null}
                                        initial="initial"
                                        variants={childVariants}
                                        animate={isHoverd[0] && isHoverd[1] == 1 ? "animate" : "initial"}
                                        style={isHoverd[0] && isHoverd[1] == 1 ? { transformOrigin: "left" } : { transformOrigin: "right" }}
                                    >
                                    </motion.span>
                                </motion.li>
                                </Link>
                               
                                <Link to="/destination" onClick={()=>{
                                    setbackground("destination")
                                    localStorage.setItem("back",JSON.stringify(background))

                                    
                                    }}>
                                        Destination
                                <motion.li value="2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} >
                                   
                                    <motion.span
                                        className={location.pathname == "/destination" ? "active" : null}
                                        initial="initial"
                                        variants={childVariants}
                                        animate={isHoverd[0] && isHoverd[1] == 2 ? "animate" : "initial"}
                                        style={isHoverd[0] && isHoverd[1] == 2 ? { transformOrigin: "left" } : { transformOrigin: "right" }}
                                    >
                                    </motion.span>
                                </motion.li>
                                </Link>
                              
                                <Link to="/crew" onClick={()=>setbackground("crew")}>Crew
                                <motion.li value="3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} onClick={()=>setbackground("crew")}>
                                   
                                    <motion.span
                                      className={location.pathname == "/crew" ? "active" : null}
                                      initial="initial"
                                      variants={childVariants}
                                      animate={isHoverd[0] && isHoverd[1] == 3 ? "animate" : "initial"}
                                      style={isHoverd[0] && isHoverd[1] == 3 ? { transformOrigin: "left" } : { transformOrigin: "right" }}
                                    >
                                    </motion.span>
                                </motion.li>
                                </Link>
                                <Link to="/Technologies"  onClick={()=>setbackground("tech")}>Technologies
                                <motion.li value="4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} onClick={()=>setbackground("tech")}>
                                   
                                    <motion.span
                                           className={location.pathname == "/Technologies" ? "active" : null}
                                           initial="initial"
                                           variants={childVariants}
                                           animate={isHoverd[0] && isHoverd[1] == 4 ? "animate" : "initial"}
                                           style={isHoverd[0] && isHoverd[1] == 4 ? { transformOrigin: "left" } : { transformOrigin: "right" }}
                                    >
                                    </motion.span>
                                </motion.li>
                                </Link>
                            </ul>
                        </div>
                    </motion.Col> : <motion.Col className="nav-bar-list col-md-6"
                        // Apply animation variants to the navbar element
                        variants={navbarVariants}
                        initial="exit"

                    >
                        {/* Navigation list */}

                        <div className="nav-list">
                            <div className="blur"></div>

                            <ul>
                            <Link to="/"  onClick={()=>setbackground("home")}>Home
                                <motion.li onMouseEnter={handleMouseEnter} value="1" onMouseLeave={handleMouseOut}  onClick={()=>{
                                    setbackground("home")
                                    localStorage.setItem("back",JSON.stringify(background))
                            }}>
                                   
                                    {/* Active span element for highlighting active list item */}
                                    <motion.span
                                        className={location.pathname == "/" ? "active" : null}
                                        initial="initial"
                                        variants={childVariants}
                                        animate={isHoverd[0] && isHoverd[1] == 1 ? "animate" : "initial"}
                                        style={isHoverd[0] && isHoverd[1] == 1 ? { transformOrigin: "left" } : { transformOrigin: "right" }}
                                    >
                                    </motion.span>
                                </motion.li>
                                </Link>
                                <Link to="/destination" onClick={()=>setbackground("destination")}> Destination
                                <motion.li value="2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} onClick={()=>{
                                    setbackground("destination")
                                    localStorage.setItem("back",JSON.stringify(background))

                                    
                                    }}>
                                    
                                    <motion.span
                                        className={location.pathname == "/destination" ? "active" : null}
                                        initial="initial"
                                        variants={childVariants}
                                        animate={isHoverd[0] && isHoverd[1] == 2 ? "animate" : "initial"}
                                        style={isHoverd[0] && isHoverd[1] == 2 ? { transformOrigin: "left" } : { transformOrigin: "right" }}

                                    >
                                    </motion.span>
                                </motion.li>
                                </Link>
                                <Link to="/crew" onClick={()=>setbackground("crew")}>Crew
                                <motion.li value="3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} onClick={()=>setbackground("crew")}>
                                  
                                    <motion.span
                                 className={location.pathname == "/crew" ? "active" : null}
                                 initial="initial"
                                 variants={childVariants}
                                 animate={isHoverd[0] && isHoverd[1] == 3 ? "animate" : "initial"}
                                 style={isHoverd[0] && isHoverd[1] == 3 ? { transformOrigin: "left" } : { transformOrigin: "right" }}
                                    >
                                    </motion.span>
                                </motion.li>
                                </Link>
                                <Link to="/Technologies" onClick={()=>setbackground("tech")}>Technologies
                                <motion.li value="4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} onClick={()=>{
                                    setbackground("tech")
                                    localStorage.setItem("back",JSON.stringify(background))

                            } }>
                                    
                                    <motion.span
                                      className={location.pathname == "/Technologies" ? "active" : null}
                                      initial="initial"
                                      variants={childVariants}
                                      animate={isHoverd[0] && isHoverd[1] == 4 ? "animate" : "initial"}
                                      style={isHoverd[0] && isHoverd[1] == 4 ? { transformOrigin: "left" } : { transformOrigin: "right" }}
                                    >
                                    </motion.span>
                                </motion.li>
                                </Link>
                            </ul>
                        </div>
                    </motion.Col>}

                </Row>

            </Container>
        </div>
    )
}

// Export the Navbar component for use in other components
export default Navbar