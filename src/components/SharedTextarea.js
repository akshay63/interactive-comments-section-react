function SharedTextarea({ text, handleChange, placeholder }) {
  return (
    <textarea
      type="text"
      rows={6}
      cols={6}
      maxLength={170}
      value={text}
      className="textarea rounded-lg"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default SharedTextarea;
