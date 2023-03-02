import React from 'react';

export default function ProductCard({
  product: { id, image, title, category, price },
}) {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <h3>
          {title}
          <p>{`₩${price}`}</p>
        </h3>
      </div>
      <p>{category}</p>
    </li>
  );
}
