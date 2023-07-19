import styles from "@/styles/todo-list.module.scss";

const todos = [
  {
    id: 1,
    todo: "Learn React",
    isComplete: false,
  },
  {
    id: 2,
    todo: "Learn Next.js",
    isComplete: false,
  },
  {
    id: 3,
    todo: "Learn Prisma",
    isComplete: false,
  },
];

const TodoList = () => {
  return (
    <div className={styles.todos}>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <li className={styles.todo} key={todo.id}>
            <span className={styles.circle} />
            <span className={styles.text}>{todo.todo}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
