import React from 'react';

const ImageList = (props) => {
    const images = props.images.map( ({desciption, id, urls}) => {
        return  <div key={id} className="column">
                    <img alt={desciption} key={id} src={urls.small}  className="ui segment" />
                </div>
                
    });

return <div className="ui three column grid">
                {images}
        </div>;
};

export default ImageList;