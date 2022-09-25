import React from 'react';

const PublicCard = () => {
    return (
        <div className={'PublicCard max-50 mx-auto'}>
            <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">John Smith</p>
                            <p className="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>
                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicCard;