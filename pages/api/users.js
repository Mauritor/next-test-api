const getDatos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data
}

export default async function handler(req, res) {
  const data = await getDatos();
  res.status(200).json(data);
}
