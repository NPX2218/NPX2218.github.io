import React from 'react';
import AdBlockDetect from 'react-ad-block-detect';

const AdBlockDetector = (props) => {
        return (
            <AdBlockDetect>
                {({ adBlock }) => {
                    if (adBlock) {
                        return (
                            <div>
                                <h1>AdBlock Detected</h1>
                                <p>Please disable AdBlock to view this website.</p>
                            </div>
                        );
                    } else {
                        return (
                            <div>
                                <h1>AdBlock Not Detected</h1>
                                <p>AdBlock not detected. You can view this website.</p>
                            </div>
                        );
                    }
                }}
                
            </AdBlockDetect>
        );
}

export default AdBlockDetector;