import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import {CircularProgress} from '@material-ui/core';
import {Button} from '@material-ui/core';

const Confirmation = () => {


    const {selectedSeats, handleReturn} = useContext(DataContext);



    return selectedSeats ? ( 
        <div className="confirmation-container">
            <h2><b>Twoja rezerwacja przebiegła pomyślnie</b></h2>
            <p style={{padding: 20}}>Wybrałeś miejsca: </p>
            {selectedSeats.map(seat => (
                <p key={seat.id} className="seat-info">- rząd x{seat.cords.x}, miejsce y{seat.cords.y} ({seat.id})</p>
            ))}
            <h3 style={{padding:20}}><b>Dziękujemy! W razie problemów prosimy o kontakt z działem administracji</b></h3>
            <Button onClick={handleReturn} color="primary" variant="contained">Powrót do rezerwacji</Button>
        </div>
     ) : (
        <CircularProgress size='6rem'/>
    );;
}
 
export default Confirmation;