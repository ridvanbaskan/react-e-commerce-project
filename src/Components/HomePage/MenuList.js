import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from './MenuItem';
import './menulist.scss';

function MenuList({ sections }) {
  return (
    <div className="menu-list">
      {sections.map(({ title, imageUrl, id, size, link }) => (
        <MenuItem
          title={title}
          imageUrl={imageUrl}
          key={id}
          size={size}
          link={link}
        />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  sections: selectDirectorySections(state)
});

export default connect(mapStateToProps)(MenuList);
