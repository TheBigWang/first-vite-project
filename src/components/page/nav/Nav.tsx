import { FC, useMemo } from 'react';
import Button, { IButton } from './Button';
import './Nav.css'


interface INav {
    buttonData: Omit<IButton, 'onSelect'>[];
    onSelect: (id: string) => void;
}


const Nav: FC<INav> = ({ buttonData, onSelect}) => {

    const HandleClick = (id: string) => {
        console.log('id', id)
        // setPage(id)
        // console.log(page)
        onSelect(id)
    }


    const buttons = useMemo(() => {
        return buttonData.map((item, index) => (

            <div key={index}>
                <Button
                    label={item.label}
                    id={item.id}

                    onSelect={HandleClick}
                ></Button>
            </div>
        ))
    }, [])

    console.log('nav', buttonData)
    return (
        <>
            {buttons}
        </>
    )
}



export default Nav



