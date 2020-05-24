import React from 'react';
import './numbers.css';
import NumberZero from './number-zero';
import NumberOne from './number-one';
import NumberTwo from './number-two';
import NumberThree from './number-three';
import NumberFour from './number-four';
import NumberFive from './number-five';
import NumberSix from './number-six';
import NumberSeven from './number-seven';
import NumberEight from './number-eight';
import NumberNine from './number-nine';

const Numbers = ({ subPage }) => {
    const numbers = {
        '0': <NumberZero />,
        '1': <NumberOne />,
        '2': <NumberTwo />,
        '3': <NumberThree />,
        '4': <NumberFour />,
        '5': <NumberFive />,
        '6': <NumberSix />,
        '7': <NumberSeven />,
        '8': <NumberEight />,
        '9': <NumberNine />,
    };

    const test = subPage + 1;

    console.log(String(test).split(''));

    const pageNumber = subPage < 10 
        ? numbers[`${ test }`] 
        : String(test).split('').map( literal => numbers[`${ literal }`]);

    return (
        <div className="number">
            { pageNumber }
        </div>
    );
};

export default Numbers;