import React from 'react';
import ProductCard from '../../fragments/ProductCard';
import { featuringProps } from '../../pages';

const FeaturingProductList = ({featuringProducts}: featuringProps) => {
  return (
        <div className='z-50 -mt-10 mx-auto  grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {featuringProducts.map(product =>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    );
};

export default FeaturingProductList;
