import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import {CircularProgress, TextField, Button, Checkbox} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Home = () => {


    const {data ,setChosenSeatsNumber, isChecked, setIsChecked} = useContext(DataContext);
    const history = useHistory();

    

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/reservation');
    }

    return data ? ( 
        <form onSubmit={handleSubmit} className="form">
            <div className="form-input">
                <p style={{marginRight: 30}}>Liczba miejsc: </p>
                <TextField required onChange={(e) => setChosenSeatsNumber(e.target.value)} variant="outlined"/>
            </div>
            <div className="form-checkbox">
                <Checkbox checked={isChecked} onChange={(e) =>setIsChecked(e.target.checked)}
                     color="primary"/>
                <p>Czy miejsca mają być obok siebie?</p>
            </div>
            <div className="form-button">
                    <Button type="submit" color="primary" variant="contained">Wybierz miejsca</Button>
            </div>
        </form>
     ) : 
     (
         <CircularProgress size='6rem'/>
     );
}
 
export default Home;