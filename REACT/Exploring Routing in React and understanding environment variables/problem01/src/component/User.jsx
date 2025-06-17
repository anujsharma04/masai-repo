export default function User() {
  const mockUsers = [
    { id: 1, name: "Anuj Sharma" },
    { id: 2, name: "Ravi Kumar" },
    { id: 3, name: "Priya Singh" },
  ];

  return (
    <>
      <div>
        <h2 className="text-xl font-semibold">Users List</h2>
        <ul className="mt-2 list-disc pl-5">
          {mockUsers.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
