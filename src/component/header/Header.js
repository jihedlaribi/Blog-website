import './header.css'
export const Header = () => {
  return (
    <div className="header">
    <div className="headerTitles">
      <span className="headerTitleSm">The Text Web</span>
      <span className="headerTitleLg">Blog</span>
    </div>
    <img
      className="headerImg"
      src="https://images.pexels.com/photos/11493260/pexels-photo-11493260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt=""
    />
  </div>
  )
}
