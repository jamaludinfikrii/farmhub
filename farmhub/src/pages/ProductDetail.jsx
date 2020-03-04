import React from 'react'

class ProductDetail extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='row my-card p-3'>
                    <div className="col-sm-4">
                        <div className='p-2'>
                            <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/11/7/4503850/4503850_cce2c93e-03a7-41c1-a3ed-75a02be6431f_480_480.jpg" width='100%' alt="broken"/>
                        </div>
                    </div>
                    <div className="col-sm-8 p-3">
                        <h2 style={{color:'#0f752e'}}>
                            Apel Fuji
                        </h2> 
                        <h4 style={{color:'#52575c'}}>
                         Rp. 20.000 / kg
                        </h4>
                        <p style={{color:'#25282b'}}>
                            Stock : 20
                        </p>


                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis architecto corrupti voluptate, porro quos, magnam quo pariatur facere molestias ea qui similique, blanditiis eos! Numquam necessitatibus dolorum at dolore quae.</p>
                        <div className='text-right'>
                            <button className='btn btn-success'>Add To Cart</button>
                        </div>
                    </div>
                </div>
                {/* <h3>Product Detail</h3> */}
            </div>
        )
    }
}

export default ProductDetail;