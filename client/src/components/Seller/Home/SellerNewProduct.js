import React, { useRef } from "react";
import axios from "axios";

function SellerNewProduct() {
  const productDescRef = useRef();
  const productCategoryRef = useRef();
  const brandRef = useRef();
  const inStockRef = useRef();
  const stockQtyRef = useRef();
  const priceRef = useRef();
  const thumbImageRef = useRef();
  const imagesRef = useRef();
  const offerPercentRef = useRef();

  const productForm = new FormData();
  productForm.append("userName", localStorage.getItem("userName"));
  productForm.append("productDesc", productDescRef.current.value);
  productForm.append("productCategory", productCategoryRef.current.value);
  productForm.append("brand", brandRef.current.value);
  productForm.append("sellerId", localStorage.getItem("userId"));
  productForm.append("inStock", Boolean(inStockRef.current.value));
  productForm.append("stockQty", Number(stockQtyRef.current.value));
  productForm.append("thumbImage", thumbImageRef.current.files[0]);
  productForm.append("images", imagesRef.current.files);
  productForm.append("price", Number(priceRef.current.value));
  productForm.append("offerPercent", offerPercentRef.current.value);

  const handleAddProduct = (e) => {
    e.preventDefault();
    console.log(thumbImageRef.current.files);
    // const productObject = {
    //   userName: localStorage.getItem("userName"),
    //   productDesc: productDescRef.current.value,
    //   productCategory: productCategoryRef.current.value,
    //   brand: brandRef.current.value,
    //   sellerId: localStorage.getItem("userId"),
    //   inStock: Boolean(inStockRef.current.value),
    //   stockQty: Number(stockQtyRef.current.value),
    //   thumbImage: thumbImageRef.current.files[0],
    //   images: imagesRef.current.files,
    //   price: Number(priceRef.current.value),
    //   offerPercent: offerPercentRef.current.value,
    // };

    axios({
      url: "http://localhost:4747/addProduct",
      method: "POST",
      data: productForm,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-3">
      <h4>Add New Product</h4>
      <form className="d-flex flex-column gap-3">
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Enter product description"
            id="product-desc"
            ref={productDescRef}
          ></textarea>
          <label htmlFor="product-desc">Product Description</label>
        </div>

        <div className="form-floating">
          <select
            className="form-select"
            id="product-category"
            aria-label="Floating label select example"
            ref={productCategoryRef}
          >
            <option defaultValue="0">Select</option>
            <option value="mobiles">Mobile</option>
            <option value="laptops">Laptop</option>
            <option value="tablets">Tablet</option>
            <option value="appliances">Appliances</option>
          </select>
          <label htmlFor="product-category">Product Category</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="brand"
            placeholder="enter product brand"
            ref={brandRef}
          />
          <label htmlFor="brand">Brand</label>
        </div>

        <div className="form-check form-switch">
          <input
            type="checkbox"
            role="switch"
            id="inStock"
            className="form-check-input"
            name="role"
            value="inStock"
            ref={inStockRef}
          />
          <label htmlFor="inStock">In Stock</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="stockQty"
            placeholder="enter stock quantity"
            ref={stockQtyRef}
          />
          <label htmlFor="stockQty">Stock Quantity</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="enter item price"
            ref={priceRef}
          />
          <label htmlFor="price">Price</label>
        </div>

        <div>
          <label htmlFor="thumbImage" className="form-label">
            Thumb image
          </label>
          <input
            className="form-control"
            type="file"
            id="thumbImage"
            ref={thumbImageRef}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="images" className="form-label">
            Product images
          </label>
          <input
            className="form-control"
            type="file"
            id="images"
            multiple
            ref={imagesRef}
          />
        </div>

        <div className="form-floating">
          <input
            type="number"
            className="form-control"
            id="offerPercent"
            placeholder="enter item's offer percent"
            ref={offerPercentRef}
          />
          <label htmlFor="offerPercent">Offer Percent</label>
        </div>

        <button className="btn btn-success" onClick={handleAddProduct}>
          Add
        </button>
      </form>
    </div>
  );
}

export default SellerNewProduct;

/* 
 productDesc: String,
  productCategory: String,
  brand: String,
  sellerId: String,
  inStock: Boolean,
  stockQty: Number,
  thumbImage: String,
  images: Array,
  price: Number,
  specs: Object,
  offerPercent: Number,
*/
