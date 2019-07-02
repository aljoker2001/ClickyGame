import React from 'react';

   const AddCard = (props) => {
        return (
            <div className="card col-3">
                <div className="img-container">
                    <img alt={props.name} src={props.image} />
                </div>
                <div className="content text-center">
                    <p><strong>{props.name}</strong></p>
                </div>
            </div>
        );
    }

export default AddCard;