import React from "react";
import styles from "../../styles/Card.module.css";
import StarIcon from "@mui/icons-material/Star";
function Card() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.card}>
          <div className={styles.container}>
            <div className={styles.starIconDiv}>
              <StarIcon className={styles.starIcon} />
            </div>
            <h1 className={styles.h1}>How did we do?</h1>
            <p className={styles.p}>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className={styles.numbersCont}>
              <div className={styles.num}>1</div>
              <div className={styles.num}>2</div>
              <div className={styles.num}>3</div>
              <div className={styles.num}>4</div>
              <div className={styles.num}>5</div>
            </div>
            <div className={styles.buttonCont}>
              <button className={styles.button}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
