const Button = ({ text, href = "#" }) => {
  return (
    <a
      href={href}
      className="focus:outline-none text-white font-bold bg-main-orange rounded-lg text-sm px-5 py-2.5 w-full inline-block text-center shadow-sm"
    >
      {text}
    </a>
  );
};

export default Button;
