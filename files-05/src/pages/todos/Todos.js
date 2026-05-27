import Loading from "../../components/loading/Loading";
import useFetch from "../../hooks/useFetch";
function Todos() {
  const [todos, isPending] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      {isPending ? (
        <Loading />
      ) : (
        todos.map((todo) => (
          <div key={todo.id}>
            <p>
              <b>{todo.id}</b> - {todo.title}
            </p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Todos;
