const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className} text-3xl font-extrabold sm:text-5xl md:pt-6 lg:pt-0`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
