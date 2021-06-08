import {createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const DataContext = createContext();

const DataContextProvider = (props) => {

    const [data, setData] = useState(null);
    const [chosenSeatsNumber, setChosenSeatsNumber] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const history = useHistory();

    // const countRows = (data) => {
    //     let rows = [];
    //     // data.forEach((seat) => {
    //     //     for (let i = 0; i <= 9; i++) {
    //     //         if (seat.cords.x === i) {

    //     //         }
    //     //     }
    //     // })

    const handleSelection = (e, seat) => {
        if (!seat.reserved ) {            
            const classes = e.target.classList;
            if (classes.contains('selected')) {
                classes.remove('selected');
                const id = selectedSeats.indexOf(seat);
                selectedSeats.splice(id,1);
                setSelectedSeats(selectedSeats);

            }
            else if (!classes.contains('selected') && selectedSeats.length < chosenSeatsNumber){
                classes.add('selected');
                setSelectedSeats([...selectedSeats, seat]);
            }
        }        
    }

    const handleReservation = () => {
        if (selectedSeats.length === parseInt(chosenSeatsNumber)) {
            data.forEach(seat => {
                selectedSeats.forEach(selectedSeat => {
                    if (selectedSeat.id === seat.id) {
                        seat.reserved = true;
                    } 
                })
            });
            setData(data);
            history.push('/confirmation');
            
        }
    }

    const handleReturn = () => {
        setChosenSeatsNumber(null);
        setIsChecked(false);
        setSelectedSeats([]);
        history.push('/');
    }
    //     for (let i = 0; i <= 9; i++) 
    //     {   
    //         let row = [];
    //         data.forEach((seat) => {
    //             if (seat.cords.x === i ) {
    //                 row.push(seat);
    //             }
    //         })
    //         rows.push(row);
    //     }
    //     setRows(rows);
    // }

    useEffect(() => {
        fetch('http://localhost:8000/seats')
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
            })
    },[])


    const value = {
        data,
        setData,
        chosenSeatsNumber,
        setChosenSeatsNumber,
        isChecked,
        setIsChecked, 
        selectedSeats,
        setSelectedSeats,
        handleSelection,
        handleReservation,
        handleReturn
        }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;