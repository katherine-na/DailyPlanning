import TodoItem from "./TodoItem";

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <div className="mt-8 rounded-t-md bg-white [&>article]:p-4 mr-20">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todos={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
