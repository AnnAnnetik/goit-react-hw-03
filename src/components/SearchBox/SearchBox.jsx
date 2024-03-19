import style from './SearchBox.module.css';

const SearchBox = () => {
  return (
    <div className={style.searchBox}>
      <label>Finde contacts by name </label>
      <input type="text" className={style.input} />
    </div>
  );
};
export default SearchBox;
