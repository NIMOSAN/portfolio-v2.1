import darkLogo from "../../resources/new_header2_no_back_white.png"
import darkIcon from "../../resources/icon_new2_trans.png"
import whiteIcon from "../../resources/icon_new2_white_trans.png"
import { Link, withRouter } from "react-router-dom"

const menu = [
    {
        title: "Works",
        link: "/works"
    },
    {
        title: "WIP",
        link: "/wip"
    },
    {
        title: "Socials",
        link: "/socials"
    },
    {
        title: "v1",
        link: "/v1"
    }
]

const Header = () => {
    return (
        <div className="fixed top-0 h-16 z-50 bg-white w-full rounded-b-xl xl:px-64 md:px-28 px-4 md:justify-start justify-center py-1 flex sm:flex-wrap backdrop-filter backdrop-blur-lg bg-opacity-30 overflow-hidden">
            {/* <img className="h-full" src={darkLogo}/> */}
            <Link to="/"><img src={whiteIcon} width="64px" height="64px" className=""/></Link>
            <div className="flex overflow-x-auto ml-2">
                {menu.map((item, k) => <Link key={k} to={item.link} className="mx-8 rounded-xl text-white hover:text-yellow-700 text-2xl font-thin content-center flex flex-wrap"><span className="">{item.title}</span></Link>)}
            </div>
        </div>
    )
}
export default withRouter(Header);