import Image2 from "../images/Image2.png"
import { Link } from 'react-router-dom'

export const Header =(()=>{
    return(
        <header className="flex justify-between content-center pl-4">
           <Link to="/"> <img src={Image2} alt="ロゴ"/></Link>
                <nav>
                <ul className="flex justify-end space-x-12 pr-20 pt-4">
                <li><Link to="/new">新規登録</Link></li>
                <li><Link to="/index">事例一覧</Link></li>
                </ul>
                </nav>
        </header>
    )
})