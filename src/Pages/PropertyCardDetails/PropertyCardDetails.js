import React from 'react'
import { useParams } from 'react-router-dom'
import { PropertiesData } from '../../data'
import { Container, Card, Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import './PropertyCardDetails.css'

const PropertyCardDetails = () => {
    const { category, propertyId } = useParams()
    const property = PropertiesData.find(p => p.id === parseInt(propertyId))

    if (!property) {
        return (
            <Container className="my-5 text-center">
                <h2>التفاصيل ستتوفر قريبا</h2>
                <Button as={Link} to="/sell" variant="primary">الرجوع</Button>
            </Container>
        )
    }

    return (
        <Container className="my-5 mt-4">
            <div className="property-details-container">
                <div className="d-flex justify-content-center">
                    <Carousel
                        nextIcon={<FaChevronRight className="carousel-arrow" />}
                        prevIcon={<FaChevronLeft className="carousel-arrow" />}
                    >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={property.image}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={property.image}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={property.image}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <Card className="property-card">
                    <Card.Body>
                        <Card.Title>{property.title}</Card.Title>
                        <Card.Text>
                            {property.description}
                            <strong>تاريخ الإعلان:</strong> قبل 2 months
                        </Card.Text>
                        <Card.Text>
                            {property.description}
                        </Card.Text>
                        <Card.Text>
                            <strong>الموقع:</strong> <span>دمشق،</span>
                        </Card.Text>
                        <Button as={Link} to={`/${category}`} variant="primary">الرجوع</Button>
                    </Card.Body>
                </Card>
            </div>
        </Container >
    )
}
export default PropertyCardDetails;

