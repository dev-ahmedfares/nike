import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

function Services() {
    return (
        <div className="max-container flex flex-wrap gap-10 justify-center">
            {services.map((service)=> <ServiceCard key={service.label} {...service}/>)}
        </div>
    )
}

export default Services
