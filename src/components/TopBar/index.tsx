import { TobBarContainer } from "./style"

import { IoMdExpand, IoMdClose, IoMdRemove } from "react-icons/io"

import logo from '../../../assets/icons/logo.png';

const TobBar = () => {

    const minimizeWindow = () => window.Main.minimizeWindow()
    const maximizeWindow = () => window.Main.maximizeWindow()
    const closeWindow = () => window.Main.closeWindow()
    return (
        <TobBarContainer>
            <div className="topBarContent" >
                <div className="topBarTitle">
                    <img src={logo} height={20}/>
                </div>
            </div>
            <div className="topBarBtn">
                <button className="btnMinimize" onClick={minimizeWindow}>
                    <IoMdRemove className="btnIcon"/>
                </button>
                <button className="btnMaxmize" onClick={maximizeWindow}>
                    <IoMdExpand className="btnIcon"/>
                </button>
                <button className="btnClose" onClick={closeWindow}>
                    <IoMdClose className="btnIcon"/>
                </button>
            </div>
        </TobBarContainer>
    )
}

export default TobBar