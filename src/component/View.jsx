import React from 'react'

const View = () => {
  return (
    <>
    <div className="outer-view">
        <div className="view-head">
            <div className="head-view-logo">
                <img className='view-sel-icon' src="https://media.licdn.com/dms/image/C4D03AQFj1UEp1hibQA/profile-displayphoto-shrink_100_100/0/1662981447177?e=1703116800&v=beta&t=Ujw7V62UVI8laxyP-UPToac0VL6LcK1cCU0UKBekxy4" alt="" />
                <h3 className='view-sel-head'>HEY</h3>
            </div>
            <div className="head-view-btn">
                <button className='view-btn'> View </button>
            </div>
        </div>
        <div className="view-description"></div>
    </div>
    </>
  )
}

export default View