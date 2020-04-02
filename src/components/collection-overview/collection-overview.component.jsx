import React from "react";
import { connect } from "react-redux";

import "./collection-overview.styles.scss";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import PreviewCollection from "../../components/prevew-collection/prevew-collection.component";

export const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionPorps }) => (
        <PreviewCollection key={id} {...otherCollectionPorps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
