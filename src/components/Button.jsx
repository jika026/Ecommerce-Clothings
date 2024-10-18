import loader from "../assets/animations/loader.gif";

export default function Button({
  text,
  onClick = () => {},
  type = "button",
  className = "",
  isLoading = false,
  disabled = false,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`bg-primary text-black w-full h-[3rem] px-5 rounded-md focus:outline-offset-2 focus:outline-primary hover:opacity-70 transition-all ${className} ${
        isLoading ? "hover:opacity-50 opacity-50" : ""
      } ${disabled ? "opacity-50 pointer-events-none" : ""}`}
      type={type}
      {...props}
    >
      {isLoading ? (
        <div className="w-full grid place-items-center">
          <img src={loader} alt="loader" width={20} height={20} />
        </div>
      ) : (
        text
      )}
    </button>
  );
}
