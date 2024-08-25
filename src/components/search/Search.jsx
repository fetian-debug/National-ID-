
import { Container } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";




function Search() {
  return (
    

   <Container>
    <Row>
    <Form dir="rtl"> 
    <Form.Control type="search"  placeholder=" .... رقم البطاقة " />
<Col>
    <Button  variant="primary" type="submit">
        Submit
      </Button>
      </Col>  
    </Form>
    </Row>
   </Container>
    
    
  
  )
}

export default Search