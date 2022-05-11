const Alert = ({ message }) => {
  return (
    <div className="bg-red-100 boder-red-400 text-red-700 px-4 py-3 rounderd relative mb-2 text-center">
      <span className="sm:inline block">{message}</span>;
    </div>
  );
};

export default Alert;
