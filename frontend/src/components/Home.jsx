
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Home = () => {
    return (       
            <>
                <Navbar expand="lg" className="bg-body-tertiary " id="navbars" >
                    <Container fluid>
                        <Navbar.Brand href="/">Hyscaler Reel</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="/register">Register</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>


                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
<div className='paragraph'>
                <h1>Welcome to Hyscaler</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusantium rerum voluptatum repudiandae assumenda sunt quaerat sit quos consectetur, officiis rem dolorem repellendus, suscipit perspiciatis eveniet itaque. Repudiandae, facere beatae. Illum inventore repellat laudantium reprehenderit necessitatibus optio commodi dolorem temporibus ipsum illo unde blanditiis quisquam tempora consequuntur, quae obcaecati? Ratione nihil minima, ea itaque asperiores maiores laudantium rem atque esse. Ratione quae qui provident doloribus ad maxime cupiditate minima minus officiis explicabo tempore quis voluptas maiores harum animi illum alias ipsa repellat ducimus, cumque quasi nemo libero ipsam? Voluptatum soluta fuga accusamus, esse aperiam nostrum odio repellat quos praesentium tempora, magnam expedita maiores dolore cumque sunt provident hic. Illo veritatis laboriosam perspiciatis ipsam id possimus nisi animi accusantium dolores dolorum.</p>
                </div>
                </>
            

    
    );
}
export default Home;




