function BillInput({ handleBillChange }) {
  return (
    <input
      type="text"
      onChange={handleBillChange}
      className="rounded-sm bg-sky-50"
    />
  );
}

export default BillInput;
