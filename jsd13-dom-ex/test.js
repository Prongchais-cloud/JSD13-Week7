async function test() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100000`);
  const data = await res.json();
  
  console.log(data.results.length); // จะได้จำนวนทั้งหมดจริง ๆ
}
test();