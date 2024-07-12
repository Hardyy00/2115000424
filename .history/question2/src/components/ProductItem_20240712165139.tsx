import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductItem = () => {
  const { id, cat } = useParams();
  const [obj, setObj] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(
        `http://localhost:8080/categories/${cat}/products/${id}`
      );

      const data = await res.json();
      setObj(data);
    };

    getProduct();
  }, [obj]);
  return (
    <div>
      <img src={"https://api.api-ninjas.com/v1/randomimage"} />
      <div>
        <h2>{item.productName}</h2>
        <h2>{item.price}</h2>
        <h2>{item.rating}</h2>
        <h2>{item.discount}</h2>
      </div>
    </div>
  );
};

export default ProductItem;
