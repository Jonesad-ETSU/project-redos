const MealModal = (props) => {
  return (
    <section>
      <h2>{props.name}</h2>
      <h3>{props.description}</h3>
      <em>{props.price} x {props.amount} = {(props.amount * props.price).toFixed(2)}</em>
    </section>
  );
};
export default MealModal;
