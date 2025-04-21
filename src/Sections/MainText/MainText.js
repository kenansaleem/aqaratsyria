import "./MainText.css";  
import { Container, Button } from "react-bootstrap";  
import { Link } from "react-router-dom";  

const MainText = () => {  
  return (  
    <section className="MainText d-flex align-items-center p-5">  
      <Container className="text-center">  
        <div className="MainText-content">  
          <h1 className="MainText-title">عالم العقارات</h1>  
          <p className="MainText-subtitle">اكتشف أفضل العروض للشراء أو الإيجار</p>  
          <div className="MainText-buttons">  
            <Button variant="success" as={Link} to="/alem-AL-aqarat/sell">شراء</Button>  
            <Button variant="info" as={Link} to="/alem-AL-aqarat/rent">ايجار</Button>  
          </div>  
        </div>  
      </Container>  
    </section>  
  );  
}  

export default MainText;  

