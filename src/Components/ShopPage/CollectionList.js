import React from 'react';
import CollectionItem from './CollectionItem';
import './collectionlist.scss';

export default function CollectionList({ items, title }) {
  return (
    <div className="collection-list">
      <div className="title">{title}</div>
      <div className="previews">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
