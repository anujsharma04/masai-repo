export default function Product() {
  const products = ["Laptop", "Phone", "Camera"];

  return (
    <div>
      <h2 className="text-xl font-semibold">Our Products</h2>
      <ul className="list-disc mt-2 pl-5">
        {products.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
