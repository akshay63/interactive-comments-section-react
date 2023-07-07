import classname from "classnames";

function Button({ children, primary, secondary, outline, rounded, ...rest }) {
  // console.log(children, rest);
  const classes = classname(rest.className, "uppercase py-3 px-7 font-medium", {
    "border-blue-500 bg-modBlue text-white": primary,
    "rounded-lg": rounded,
  });
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
