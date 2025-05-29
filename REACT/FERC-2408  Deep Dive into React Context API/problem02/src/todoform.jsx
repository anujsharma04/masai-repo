export default function Todoform({ inputref ,handleadd }) {

    // pass data with userf of input 
    // call function handleadd with prop drilling
  return (
    <>
      <h1>todo form</h1>
      <input type="text" ref={inputref} />
      <button onClick={()=>handleadd()}>Add</button>
    </>
  );
}
