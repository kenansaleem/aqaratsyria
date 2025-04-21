import "./SpecialProp.css";
import { Container, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsHouseDoor, BsCalendar } from 'react-icons/bs';
import { FaBed, FaBath } from 'react-icons/fa';

const SpecialProp = () => {
  const properties = [
    {
      date: '25 فبراير 2025',
      price: '$750,000',
      beds: 3,
      baths: 2,
      sqft: '1,258',
      address: 'شارع  الثورة، حي الغدير طرطوس 12345'
    },
    {
      date: '14 فبراير 2025',
      price: '$1,025,000',
      beds: 5,
      baths: 6,
      sqft: '5,426',
      address: '  ،الانشاءات، طرطوس 12345'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className='SpecialProp'>
      <Container className="my-5">
        <h2 className="mb-4">المنازل المباعة مؤخرا  </h2>
        <p className="text-muted mb-4">
          المنازل التي تم بيعها في الـ6 أشهر الماضية في سوق العقارات الأعلى  لسنة 2025
        </p>

        <Slider {...settings}>
          {properties.map((property, index) => (
            <div key={index} className="px-2">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between text-muted mb-3">
                    <small><BsCalendar /> {property.date}</small>
                    {property.price !== 'تواصل معنا ' && (
                      <small className="text-danger">مباعة</small>
                    )}
                  </div>
                  <Card.Title className="mb-3">
                    {property.price}
                  </Card.Title>

                  <div className="d-flex gap-4 mb-3">
                    <div>
                      <FaBed /> {property.beds} غرف نوم
                    </div>
                    <div>
                      <FaBath /> {property.baths} حمامات
                    </div>
                    <div>
                      <BsHouseDoor /> {property.sqft} متر مربع
                    </div>
                  </div>

                  <Card.Text className="text-muted">
                    {property.address}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default SpecialProp;

