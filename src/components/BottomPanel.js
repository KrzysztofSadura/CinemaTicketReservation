import {Button} from '@material-ui/core';
import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';
 
const BottomPanel = () => {

    const {handleReservation} = useContext(DataContext);

    return ( 
        <div className="bottom-panel">
            <div className="bottom-container">
                <div className="seat"></div>
                <p style={{marginLeft: 10}}>Miejsca dostępne</p>
            </div>
            <div className="bottom-container">
                <div className="seat reserved"></div>
                <p style={{marginLeft: 10}}>Miejsca zarezerwowane</p>
            </div>
            <div className="bottom-container">
                <div className="seat selected"></div>
                <p style={{marginLeft: 10}}>Twój wybór</p>
            </div>
            <Button onClick={handleReservation} variant="outlined" size="large">Rezerwuj</Button>
        </div>
     );
}
 
export default BottomPanel;