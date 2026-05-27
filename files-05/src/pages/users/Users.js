import Loading from "../../components/loading/Loading";
import useFetch from "../../hooks/useFetch";
function Users() {
  const [users, isPending] = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      {isPending ? (
        <Loading />
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <p>
              <b>{user.id}</b> - {user.name}
            </p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Users;
