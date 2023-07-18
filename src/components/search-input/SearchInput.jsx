import styles from "@/styles/search-input.module.scss";

const SearchInput = () => {
  return (
    <form className={styles.form}>
      <label htmlFor="input" />
      <input id="input" type="text" placeholder="Create a new todo..." />
    </form>
  );
};

export default SearchInput;
