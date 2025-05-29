export default function Todoitems({ todo ,index ,handledelete}) {
  console.log(todo.id);
  return (
    <>
      <tr>
        <td style={{ padding:"0 20px"}}>{todo.task}</td>
        <td style={{backgroundColor:"red"}}><button onClick={()=>handledelete(todo.id)}>Delete</button></td>
      </tr>
    </>
  );
}
