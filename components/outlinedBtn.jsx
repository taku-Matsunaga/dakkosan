const OutlinedBtn = ({ text, href = "#" }) => {
  return (
    <a
      href={href}
      className="focus:outline-none text-main-orange font-bold bg-white rounded-lg text-sm px-5 py-2.5 w-full inline-block text-center border-2 border-main-orange shadow-sm"
    >
      {text}
    </a>
  );
};

export default OutlinedBtn;
