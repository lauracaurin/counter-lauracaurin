

const Message = ({ message }) => {
  return (
    message && <div className="error-message">{message}</div>
  );
};

export default Message;
