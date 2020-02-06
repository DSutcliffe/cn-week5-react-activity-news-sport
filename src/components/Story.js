import React from 'react'

function Story(props) {
    return (
        <div class="storyContainer">

            <div class="leftSide">
                <img src={props.source} alt={props.alt} />
            </div>

            <div class="rightSide">
                
                <div class="rhsHeadline">
                    <h3> {props.headline} </h3>
                </div>

                <div class="rhsCategory">
                    <h6> {props.footer} </h6>
                </div>

            </div>
            
        </div>
    )
}

export default Story;