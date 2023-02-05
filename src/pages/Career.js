import React from 'react'
import Careers from '../assets/careers'

const Career = () => {

    var CareerList = []

    for (let item in Careers) {
        let itemname = Careers[item].name
        let itemdesc = Careers[item].description

        CareerList.push(
            <div key={itemname}>
                <button className="collapsible" id={itemname} onClick={
                    () => {
                        var me = document.getElementById(itemname)
                        me.classList.toggle('cactive')
                        var content = me.nextElementSibling;
                        if (content.style.maxHeight) {
                            content.style.maxHeight = null;
                        } else {
                            content.style.maxHeight = content.scrollHeight + "px";
                        }
                    }
                }>{itemname}</button>
                <div className="content">
                    {itemdesc}
                </div>
            </div>
        )
    }

    return (
        <>
            <h1 >Career Opportunities</h1>
            {CareerList}
            <br/>
            <p style={{ fontSize: 'max(1.4vw, 14px)', padding: '0vw 3vw 0vw 3vw' }}>
                To apply, please send your resume to <a href="mailto: xudiwaterloo@gmail.com">xudiwaterloo@gmail.com</a>.
            </p>

        </>
    )
}

export default Career