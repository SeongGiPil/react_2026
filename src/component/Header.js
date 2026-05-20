import '../App.css';
function Header(props) {
  console.log(props.title)
  return <>
    <h2>
    {props.title}
  </h2>

  </>
}
export default Header;
