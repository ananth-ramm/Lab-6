function Greeting({ name = "World", children }) {
  return (
    <div className="Greeting">
      <strong>Hello {name}</strong>
      {children}
    </div>
  );
}

export default Greeting;
