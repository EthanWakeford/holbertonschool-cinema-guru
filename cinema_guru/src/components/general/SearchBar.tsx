interface SearchBarProps {
  title: string;
  setTitle(title: string): void;
}

const SearchBar: React.FC<SearchBarProps> = ({ title, setTitle }) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <input type="text" value={title} onChange={handleInput} />
    </>
  );
};

export default SearchBar;
