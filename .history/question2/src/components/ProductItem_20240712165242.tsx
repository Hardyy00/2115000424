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
        {obj ? (
          <>
            <h2>{obj.productName}</h2>
            <h2>{obj.price}</h2>
            <h2>{obj.rating}</h2>
            <h2>{obj.discount}</h2>{" "}
          </>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
