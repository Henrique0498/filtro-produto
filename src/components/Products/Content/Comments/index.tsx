import { TypeReviews } from "../../../../helper/apiTypes";

import styles from "./productsContentComments.module.css";

interface InProductsContentComments {
  reviews: TypeReviews[];
  rating: number;
}
export function ProductsContentComments({
  reviews,
  rating,
}: InProductsContentComments) {
  return (
    <div className={styles.container}>
      <p>
        Avaliações <span>Nota: {rating}</span>
      </p>
      <ul className={styles.comments}>
        {reviews.map((review) => (
          <li key={review.reviewerEmail}>
            <b>{review.reviewerName}: </b>
            <span>{review.comment}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
