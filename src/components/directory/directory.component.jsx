import React from "react";
import { connect } from "react-redux";
import { selectedDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item.components";

import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectedDirectorySections
});

export default connect(mapStateToProps)(Directory);
