import React from "react";

function ProductFilter() {
  return (
    <div className="w-25">
      <h5>Filters</h5>
      <div className="d-flex flex-column gap-3 border border-primary-subtle px-3 rounded">
        {/* Price filter */}
        <section>
          <h5>Price</h5>
          <div>
            {/* <label htmlFor="priceRange" className="form-label">
              Price
            </label> */}
            <input
              type="range"
              name="priceRange"
              id="priceRange"
              min="1"
              max="100000"
              step="100"
              className="form-range d-inline-block align-middle"
            />
            <div className="d-flex justify-content-between align-items-center">
              <span>1</span>
              <span>100000</span>
            </div>
          </div>
        </section>

        {/* Brand filter */}
        <section>
          <h5>Brand</h5>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="brand"
              id="apple"
            />
            <label className="form-check-label" htmlFor="apple">
              Apple
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="brand"
              id="samsung"
            />
            <label className="form-check-label" htmlFor="samsung">
              Samsung
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="brand"
              id="oppo"
            />
            <label className="form-check-label" htmlFor="oppo">
              Oppo
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="brand"
              id="realme"
            />
            <label className="form-check-label" htmlFor="realme">
              Realme
            </label>
          </div>
        </section>

        {/* Memory filter */}
        {/* <section>
                  <div className="form-check">
                      <input type="checkbox" name="memory" id="" />
                  </div>
              </section> */}
      </div>
    </div>
  );
}

export default ProductFilter;
