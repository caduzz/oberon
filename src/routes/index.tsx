import { useEffect, useState } from "react"

import Home from "../pages/Home"
import Previw from "../pages/Previw"
import CardLoading from "../pages/Home/MusicBar/CardLoading"

const RuteApp = () => {
    const [ rote, setRote ] = useState<string>('')

    const getUrlRote = () => {
        const newUrl = window.location.href
        const urlParts = newUrl.split('?');
        const queryParams = new URLSearchParams(urlParts[1]);
        const rota = queryParams.get('rota')

        rota ? setRote(rota) : setRote('home');
    }


    useEffect(() => {
        getUrlRote()
    }, [])

    return (
        <>
            {rote === '' && ( <CardLoading msg="Loading"/> )}
            {rote === 'previw' && (<Previw />)}
            {rote === 'home' && ( <Home /> )}
        </>
    )
}

export default RuteApp