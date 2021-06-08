import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import {CircularProgress} from '@material-ui/core';
import Seat from './Seat';
import BottomPanel from './BottomPanel';
import { Alert, AlertTitle } from '@material-ui/lab';

const Reservation = () => {

    const { data,selectedSeats,chosenSeatsNumber  , doesSelectedNumberMatch } = useContext(DataContext);



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
            {!doesSelectedNumberMatch && <Alert severity="info">
                <AlertTitle>Zadeklarowane miejsca: <b>{chosenSeatsNumber}</b>, wybrane miejsca: <b>{selectedSeats.length}</b>. Aby przejść dalej wybierz pozostałe miejsca.</AlertTitle>
                {/* This is an info alert — <strong>check it out!</strong> */}
            </Alert>}
        </div>
        
     ): 
     (
         <CircularProgress size='6rem'/>
     );
}
 
export default Reservation;