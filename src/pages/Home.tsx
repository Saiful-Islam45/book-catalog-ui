import { useGetBooksQuery } from "../redux/api/apiSlice"

const Home = () => {
  const {data}= useGetBooksQuery(1);
  console.log("data:", data);
  return (
    <div>Home</div>
  )
}
export default Home
