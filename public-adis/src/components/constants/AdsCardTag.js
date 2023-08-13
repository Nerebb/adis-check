import React from "react";

export const AdsCardTag = (product) => {
  if (!product) return;

  function handleEditAds(e) {
    e.preventDefault();
  }

  function handleDeleteAds(e) {
    e.preventDefault();
  }

  return (
    <div class="row cardtag">
      <div class="col-12 col-sm-12 col-lg-4 col-xl-4 text-sm-center text-center text-md-center text-lg-left col-4 margintadjst">
        {product.name}
      </div>
      <div class="col-6 col-sm-3 col-lg-2 col-xl-2">
        {Array.isArray(product.images) && product.images.length ? (
          <img alt="image" src={product.images[0]} />
        ) : (
          <>IMG NOT FOUND</>
        )}
      </div>
      <div class="col-6 col-sm-3 col-lg-2 col-xl-2 margintadjst">
        <i class="fa fa-list-alt"></i>
        {product.category}
      </div>
      <div class="col-6 col-sm-3 col-lg-2 col-xl-2 margintadjst">
        <i class="fa fa-star"></i>
        {product.status}
      </div>
      <div class="col-6 col-sm-3 col-lg-2 col-xl-2 margintadjst">
        <div class="btns-actions">
          <a class="btn-action btn-view" href={`/product?id=${product.id}`}>
            <i class="fa fa-eye"></i> 48k
          </a>
          <a class="btn-action btn-edit" href="/" onClick={handleEditAds}>
            <i class="fa fa-pencil"></i> Edit
          </a>
          <a class="btn-action btn-delete" href="/" onClick={handleDeleteAds}>
            <i class="fa fa-trash"></i> Delete
          </a>
        </div>
      </div>
    </div>
  );
};
