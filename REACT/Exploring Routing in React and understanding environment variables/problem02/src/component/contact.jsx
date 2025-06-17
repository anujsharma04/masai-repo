export default function Contact() {
  return <>
     <div>
      <h2 className="text-xl font-semibold">Contact Us</h2>
      <form style={{display:"flex", flexDirection:"column",width:"40%", padding:"20px", gap:"10px"}}>
        <input type="text" placeholder="Your Name"  />
        <input type="email" placeholder="Your Email"  />
        <textarea placeholder="Your Message" ></textarea>
        <button >Send</button>
      </form>
    </div>
  </>;
}
