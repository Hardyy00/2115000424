import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductItem = () => {
  const { id } = useParams();
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
  return <div>Product Item</div>;
};

export default ProductItem;
