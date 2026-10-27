
const Button = ({
  text,
  className = "",
  onClick,
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer px-4 py-2 rounded-md bg-red-600 text-white font-semibold transition-colors duration-200 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
