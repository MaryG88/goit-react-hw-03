import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => (
  <>
    <label className={s.label}>
      Find contacts by name:
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </label>
  </>
);

export default SearchBox;
