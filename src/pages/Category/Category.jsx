import { useParams } from "react-router-dom";

import CategoryInner from "../../components/CategoryInner/CategoryInner";


const Category = (props) => {
  const { categoryId } = useParams();
  return <CategoryInner {...props} categoryId={categoryId} />
}

export default Category;