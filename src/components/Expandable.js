import { useState } from "react";


export function Expandable({children}) {
const [isOpen, setIsOpen] = useState(false)

return (
    <>
    <div id="comments"><button onClick={() => {
        setIsOpen((currOpen) => !currOpen)
    }}>{isOpen ? 'Hide comments' : 'View comments'}</button>
    </div>
    {isOpen ? children : null}
    </>
)
}