// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://swapi.dev/api/people/')
  const data = await res.json()
  debugger

  // Pass data to the page via props
  return { props: { data } }
}