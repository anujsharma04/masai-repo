import Todoitems from "./todoitems";

export default function Todolist({ arr, handledelete }) {

  return (
    <>
      <h1>Todolist</h1>
      <table style={{margin:"auto"}}>
        <tbody style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}>
          {arr.map((todo, index) => (
            <Todoitems key={index} todo={todo} index={index} handledelete={handledelete}/>
          ))}
        </tbody>
      </table>
    </>
  );
}
