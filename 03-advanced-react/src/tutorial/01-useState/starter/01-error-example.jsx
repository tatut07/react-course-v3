const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
  };

  return (
    <>
      <h2>{count}</h2>
      <button type="button" onClick={handleClick} className="btn">
        increase
      </button>
    </>
  );
};

export default ErrorExample;
