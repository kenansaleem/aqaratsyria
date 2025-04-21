import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./PropertyCard.css"
import { Link, useLocation } from 'react-router-dom';

function PropertyCard({ property }) {
  const location = useLocation();
  const isRentPath = location.pathname.includes('/rent');
  const detailsPath = isRentPath ? `/rent/${property.id}` : `/sell/${property.id}`;

  return (
    <Card className='PropertyCard' style={{ width: '18rem' }}>
      <Card.Img variant="top" className="img-fluid" src={property.image} />
      <Card.Body>
        <Card.Title>{property.title}</Card.Title>
        <Card.Text>
          {property.description}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="text-primary fw-bold">${property.price}</div>
          <div className="d-flex align-items-center">
            <span>{property.area}</span>
          </div>
        </div>
        <Button as={Link} to={detailsPath} variant="primary">التفاصيل</Button>
      </Card.Body>
    </Card>
  );
}

export default PropertyCard;
