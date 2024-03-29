import {Fragment} from 'react';
import imageFile from '../../assests/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


const Header = props =>{
   return (
    <Fragment >
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onCartShow}/>
        </header>
        <div className={classes['main-image']}>
            <img src={imageFile} alt='A table full of delicious food!'/>
        </div> 
    </Fragment>
   )
};

export default Header;
