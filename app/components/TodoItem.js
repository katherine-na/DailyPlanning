import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ todos, updateTodo, deleteTodo }) => {
  const { id, title, completed } = todos;
  return (
    <article className="flex gap-4 border-b border-b-gray-400">
      <button
        className={`flex-none h-5 w-5 rounded-full border-2 ${
          completed
            ? "flex items-center justify-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
            : "inline-block"
        }`}
        onClick={() => updateTodo(id)}
      >
        {completed && (
          <FontAwesomeIcon icon={faCheck} style={{ color: "white" }} />
        )}
      </button>
      <p
        className={`grow text-gray-600 dark:text-gray-400 ${
          completed && "line-through"
        }`}
      >
        {title}
      </p>
      <button className="flex-none" onClick={() => deleteTodo(id)}>
        <FontAwesomeIcon icon={faX} style={{ color: "#1E1B4B" }} />
      </button>
    </article>
  );
};

export default TodoItem;
