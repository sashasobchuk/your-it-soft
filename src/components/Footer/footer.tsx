import React from 'react';
import classes from './footer.module.css'

type footerPropsType={
    handlePrev:(e:React.MouseEvent)=>void,
    handleNext:(e:React.MouseEvent)=>void
}
const Footer: React.FC<footerPropsType> = React.memo(({handlePrev, handleNext}) => {

    let arrow = (<div className={classes.arrow2}/>)
    return (
        <footer className={classes.footer}>
            <div className={classes.prev} onClick={handlePrev}> {arrow} Previous</div>
            <div className={classes.next} onClick={handleNext}> Next {arrow}</div>
        </footer>
    );
})

export default Footer;