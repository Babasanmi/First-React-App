import React from 'react';


class Footer extends React.Component {


    render(){

        const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize: "30px"
    }

    if (hours < 12) {
        timeOfDay = 'Morning'
        styles.color = "#cdcdcd"
    } else if (hours >= 12 && hours < 17) { 
        timeOfDay = 'afternoon'
        styles.color = "#cdcdcd"        
    } else {
        timeOfDay = 'night'
    }


        return (
            <div>
             <footer>
                 <br/>
                 <hr/>
                 Jeremiah is saying Hi and 
                 <h1 style={styles}>Good {timeOfDay}! </h1>
             </footer>
        
            </div>
          );

    }

}

export default Footer;
