import style from './SearchBox.module.css';

const SearchBox = () => {
  return (
    <label className={style.searchBox}>
      Finde contacts by name
      <input type="text" className={style.input}></input>
    </label>
  );
};
export default SearchBox;
