function CustomTipInput({ handleCustomTipChange }) {
  return (
    <input
      type="text"
      placeholder="Custom"
      onChange={handleCustomTipChange}
      className="rounded-sm text-black bg-white rounded-md px-7 py-3 m-1"
    />
  );
}
export default CustomTipInput;
