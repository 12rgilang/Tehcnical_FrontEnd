
const NilaiSelect = ({name, value, onSelectChange}) => {
const numbers = Array.from({length: 11}, (_, i) => i);


const handleSelectChange = (e) => {
  const { name, value } = e.target;
  onSelectChange(name, Number(value));
};

  return (
    <select className="w-full border border-1 border-gray-600 h-8 mt-2"
      name={name}
      value={value}
      onChange={handleSelectChange}>
      {numbers.map((number) => (
        <option key={number} value={number}>{number}</option>
      ))}
    </select>
  );
}

export default NilaiSelect;