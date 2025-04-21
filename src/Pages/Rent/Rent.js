import "./Rent.css"
import { Container } from "react-bootstrap";
import { PropertiesRentList } from "../../Components/PropertiesList/PropertiesList";
const Rent = () => {
  return (
    <div className="rent">
       
      <Container>
        <h1>تسوق منزلك الجديد</h1>
        <p>اكتشف الفرص المتاحة واستثمر في منزلك المثالي.</p>

        {/* <div className="search-container">  
     <SearchForm />   
  </div>   */}

        <div className="properties-list">
          <PropertiesRentList />
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

export default Rent
