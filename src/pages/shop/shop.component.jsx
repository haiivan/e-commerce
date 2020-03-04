import React, { Component } from "react";
import Shop_Data from "./shop.data";
import PrevewCollection from "../../components/prevew-collection/prevew-collection.component";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: Shop_Data
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionPorps }) => (
          <PrevewCollection key={id} {...otherCollectionPorps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
