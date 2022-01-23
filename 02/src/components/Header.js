import styles from "../css/Header.module.css";
import image from "../meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = props => {
  return (
    <>
      <header className={styles.header}>
        <section>
          <h1>React Meals</h1>
        </section>
        <HeaderCartButton toggle={props.toggleCart}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={image} alt="Delicious looking meals sitting on the table." />
      </div>
    </>
  );
};
export default Header;
