import classname from "classnames";

function CrudButtons({ handler, className, src, textName }) {
  const classes = classname(className, "flex items-center  mr-5");

  return (
    <button onClick={handler} className={classes}>
      <img src={src} alt={className} />
      <span className="ml-2">{textName}</span>
    </button>
  );
}

export default CrudButtons;
