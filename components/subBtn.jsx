const SubButton = ({ text, href = "#", icon = null, isTarget = null }) => {
  return (
    <a
      href={href}
      target={isTarget}
      className="focus:outline-none text-main-orange font-bold bg-white rounded-lg text-sm px-5 py-3 w-full text-center shadow-sm flex justify-center items-center"
    >
      {icon}
      <span className="ml-2">{text}</span>
    </a>
  );
};

export default SubButton;
