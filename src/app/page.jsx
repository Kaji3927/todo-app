import Background from "@/components/background/background";
import Header from "@/components/header/header";
import SearchInput from "@/components/search-input/SearchInput";
import TodoList from "@/components/todos/TodoList";

const Home = () => {
  return (
    <>
      <Background />
      <div className="wrapper">
        <Header />
        <SearchInput />
        <TodoList />
      </div>
    </>
  );
};
export default Home;
