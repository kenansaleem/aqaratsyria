import React from 'react'
import PropertyCard from '../PropertyCard/PropertyCard';
import { PropertiesData } from '../../data';


const PropertiesList = () => {
  return (
    <div className="properties-list d-flex flex-wrap gap-3 justify-content-center">
      {PropertiesData.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}

    </div>
  )
}
const PropertiesSellList = () => {
  const PropertiesSellData = PropertiesData.filter(SellProperty => SellProperty.category === "sell")
  return (
    <div className="properties-list d-flex flex-wrap gap-3 justify-content-center">
      {PropertiesSellData.map(SellProperty => (
        <PropertyCard key={SellProperty.id} property={SellProperty} />
      ))}
    </div>
  )
}
const PropertiesRentList = () => {
  const PropertiesRentData = PropertiesData.filter(RentProperty => RentProperty.category === "rent")
  return (
    <div className="properties-list d-flex flex-wrap gap-3 justify-content-center">
      {PropertiesRentData.map(RentProperty => (
        <PropertyCard key={RentProperty.id} property={RentProperty} />
      ))}
    </div>
  )
}
export { PropertiesSellList ,PropertiesRentList }
export default PropertiesList
