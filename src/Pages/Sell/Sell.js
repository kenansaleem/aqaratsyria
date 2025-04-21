import "./Sell.css";
import { Container } from "react-bootstrap";
import { PropertiesSellList } from "../../Components/PropertiesList/PropertiesList";

// This function returns a JSX element that represents the Sell page
const Sell = () => {
  return (
    <div className="sell">
      <Container>
        <h1>تسوق منزلك الجديد</h1>
        <p>اكتشف الفرص المتاحة واستثمر في منزلك المثالي.</p>

        {/* <div className="search-container">  
     <SearchForm />   
  </div>   */}

        <div className="properties-list">
          <PropertiesSellList />
        </div>

        <div className="testimonials">
          <h2>تجارب العملاء</h2>
          {/* {testimonials.map(testimonial => (  
      <Testimonial key={testimonial.id} testimonial={testimonial} />  
    ))}  */}
        </div>

        {/* <ContactForm />  */}
      </Container>
    </div>
  )
}

export default Sell
