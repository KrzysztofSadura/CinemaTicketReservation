import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import {CircularProgress} from '@material-ui/core';
import Seat from './Seat';
import BottomPanel from './BottomPanel';
const Reservation = () => {

    const { data, chosenSeats, isChecked } = useContext(DataContext);



    return data ?  ( 
        <div>
            <div className="cinema-hall">
            {data.map((seat) => {
                return (
                    <Seat key={seat.id} seat={seat}/>
                )
            })}
            </div>
            <BottomPanel/>
        </div>
        
     ): 
     (
         <CircularProgress size='6rem'/>
     );
}
 
export default Reservation;