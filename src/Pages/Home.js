import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import avaterimg from '../assets/images/avatar-svgrepo-com.svg';
import funnyimg from '../assets/images/back-to-school.gif';
import papakipari from '../assets/images/124092-little-witch.gif';
import { FaAccessibleIcon } from "react-icons/fa";


const Home = () => {
    const [position, setPosition] = useState('top-right');
    const [text, newtext] = useState("Info");
    const [colr, newcolr] = useState('blue');


    const notify = () => {toast(text)};
    const success = () => toast.success("success !",{position:position});
    const warning = () => toast.warn("warning de raha hu baag ja yha se !", {position:position});



    const handlePositionChange = (e) => {
        setPosition(e?.target?.value);
    };

    const handletextchange = (e) => {
        newtext(e?.target?.value);
    }
    const handlecolorchange = (e) => {
        newcolr(e?.target?.value);
    }

    return (
        <>
        <div className="tost_button_main">
            <div className="tost_button_wrapper">
                 {(colr == 'blue') && <button style={{border:'2px solid green'}} onClick={notify} type="text">Info blue</button>}
                 {(colr == 'green') && <button style={{border:'2px solid green'}} onClick={success} type="text">success green</button>}
                 {(colr == 'red') && <button style={{border:'2px solid green'}} onClick={warning} type="text">warning red</button>}
                 {(colr =='imgg' && <img src={avaterimg} />)}
                 {(colr == 'funyyy') && <img src={funnyimg} />}
                 {(colr == 'pari') && <img src={papakipari} />}
                
                
                 <button style={{border:'2px solid red'}} onClick={notify} type="text">Info</button>
                 <button style={{border:'2px solid red'}} onClick={success} type="text">success</button>
                 <button style={{border:'2px solid red'}} onClick={warning} type="text">warning</button>
                
            </div>
            <div className='toast_select'>
                <h3>Change the tosti position <FaAccessibleIcon /></h3>
                <select onChange={handlePositionChange}>
                    <option value="top-right">Top Right</option>
                    <option value="top-left">Top Left</option>
                </select>
            </div>
            <div className='toast_text_change'>
                <label>Text type here:</label>
                <input onChange={handletextchange} type="text" placeholder="toast text"/>
            </div>

            
            <div className='bg_color_change'>
                <h2 style={{backgroundColor: (colr), color:'white'}}>background color change</h2>
                <select onChange={(e) => handlecolorchange(e)}>
                    <option value="blue">blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="imgg">Avatar</option>
                    <option value="funyyy">funny</option>
                    <option value="pari">papa ki pari</option>
                </select>
            </div>
        </div>
        </>
    );
}

export default Home;