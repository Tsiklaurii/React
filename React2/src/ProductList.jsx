import React from 'react'
import ProductCard from './ProductCard';

const ProductList = () => {
    return (
        <div className='product_list'>
            <ProductCard
                name="Samsung Galaxy S24 Ultra"
                price="$1,199"
                img="https://s3.zoommer.ge/site/d8362f08-629b-4a7a-ac46-326fee67f009_Thumb.jpeg"
                description="High-end Android phone with a 200MP camera, S Pen, and AI-powered features"
            />
            <ProductCard
                name="Google Pixel 8 Pro"
                price="$999"
                img="https://s3.zoommer.ge/site/d0035050-3d37-4e4d-97cc-f22e4f7d3561_Thumb.jpeg"
                description="Google's smartest phone with AI editing tools and advanced photo quality"
            />
            <ProductCard
                name="iPhone 15 Pro"
                price="$999"
                img="https://www.phonemart.ng/wp-content/uploads/2024/06/ck4.jpeg"
                description="Apple's latest flagship phone with A17 Pro chip and titanium design"
            />
        </div>
    )
}

export default ProductList