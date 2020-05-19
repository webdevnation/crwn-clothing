import React from 'react';
import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) =>(
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
        {
            items
            .filter((item, index) => index <4)
            .map(({id, ...otherCollectionProps})  => (
                <CollectionItem key={id} {...otherCollectionProps} />   
                //<h3 key={item.id}>{item.name}</h3>
            ))
        }
        </div>
    </div>
)

export default CollectionPreview;