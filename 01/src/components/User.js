const User = (props) => {
    return <section>
        {props.name} is <em>{props.age}</em> years old.
    </section>;
};

export default User;