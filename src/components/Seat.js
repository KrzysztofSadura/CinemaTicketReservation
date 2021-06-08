import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";

const Seat = ({seat}) => {

    const {handleSelection} = useContext(DataContext);

    // useEffect(() => {
    // }, [selectedSeats])

    return ( 
        <div onClick={(e) => handleSelection(e, seat) } className={`seat ${seat.reserved ? 'reserved' : ''} `} style={{gridColumn: seat.cords.y + 1}}>
        </div>
     ) 
}
 
export default Seat;
