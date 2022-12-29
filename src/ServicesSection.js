/**
 * Using Maps
 */
const service_block_data = [
    {
        url : 'https://assets.codepen.io/6060109/agency-service-1.png',
        title : 'Web design'
    },
    {
        url : 'https://assets.codepen.io/6060109/agency-service-2.png',
        title : 'Ecommerce'
    },
    {
        url : 'https://assets.codepen.io/6060109/agency-service-3.png',
        title : 'Automation'
    }
]

export default function Servicessection () {
    return (
        <div className = "services-section">
            <h2>Our services</h2>
            <div className = "service-container">
                {
                     service_block_data.map(block => (
                        <div className="service-block">
                            <img src={block.url} />
                            <p>{block.title}</p>    
                        </div>
            // One more way is to pass the above div element into a service block using props objects.
            //"props" object is going to have all the key values of the "block"
                     ))

                }
               
            </div>
        </div>
    )
}


/**
 * Following is the direct approch

export default function ServicesSection () {
    return (
        <div className = "services-section">
            <h2>Our services</h2>
            <div className = "service-container"> 

            <div className = "serivce-block"> 
                <img src = "https://assets.codepen.io/6060109/agency-service-1.png" />
                <p> web design</p>
            </div>

            <div className = "serivce-block"> 
                <img src = "https://assets.codepen.io/6060109/agency-service-2.png" />
                <p> ecommerce </p>

            </div>

            <div className = "serivce-block"> 
                <img src = "https://assets.codepen.io/6060109/agency-service-3.png" />
                <p>automation</p>
            </div>

            </div>
        </div>
    )

}

*/