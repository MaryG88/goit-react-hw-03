import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => (
  <div className={s.searchBox}>
    <label className={s.searchLabel}>
      Find contacts by name
      <input
        className={s.searchInput}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

export default SearchBox;
