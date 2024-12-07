import './DescriptionCarousel.css'

function DescriptonCarousel() {
    return (
        <div>

            <div className='nameFlat'>
                <h2>Poundsflats Aquário</h2>
                <span>Santos-SP</span>
            </div>

            <div className='descriptionFlat'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Nihil in libero veniam laboriosam dolor vel omnis tempore reprehenderit ea doloribus, 
                    doloremque voluptatum cumque, modi voluptatem blanditiis unde at perspiciatis quam.
                </p>
            </div>

            <div className='informationFlat'> 
               
                <div className='classification'>
                    <img src="../src/assets/img/star.png" alt="" className='star'/>
                    <h3>4,5</h3>
                </div>

                <span className='daily'><b>Diária:</b> R$97</span>

            </div>

        </div>
    )
}

export default DescriptonCarousel