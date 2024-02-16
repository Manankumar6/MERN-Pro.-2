
import { useAuth } from '../store/auth'

const Service = () => {
  const { service } = useAuth();


  return (
    <section className='section-services'>
      <div className="container">
        <h1 className='main_heading'>Services</h1>
      </div>
      <div className=" service-grid grid-three-cols">
        {service &&
          service.map((curr, ind) => {
            const {price,provider,service,description} = curr;
            return (
              <div className="card" key={ind}>
                <div className="card-img">
                  <img src="/image/home.png" alt="img" width='300' />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{provider}</p>
                    <p>{price}</p>
                  </div>
                  <h2>{service}</h2>
                  <p>{description}</p>
                </div>
              </div>

            )
          })
        }
      </div>


    </section>
  )
}

export default Service
