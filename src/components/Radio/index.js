import React from 'react';
import PropTypes from 'prop-types';


const RadioGroup = ({ name, options, onChange, selectedItem }) => {
    const RadioItem = ({ name, itemvalue, label, onChange, index }) => {

        //add css class depending on item position
        //first item in list rounded left corners, last item rounded right
        let classToAppend = '';
        classToAppend = (index === 0 ? classToAppend = 'rounded-l-full border-r-0' : ((index + 1) === options.length ? classToAppend = 'rounded-r-full' : ''))

        return (
            <>
                <input type="radio" className="h-0 w-0 absolute m-0 p-0 opacity-0 pointer-events-none" name={name} value={itemvalue} id={name + 'Q' + index} onChange={onChange} checked={selectedItem === itemvalue} />
                <label htmlFor={name + 'Q' + index} className={`radio-inline flex-1 mb-0`}>
                    <span className={`overflow-hidden border text-center w-full radio-btn inline-block cursor-pointer py-3 px-2 ${classToAppend} ${selectedItem === itemvalue ? ' bg-red-500 text-white hover:bg-red-700' : 'hover:bg-gray-100 text-gray-700 '}`} >{label}</span>
                </label>
            </>
        )
    }

    return (
        <>
            <div className="flex flex-wrap">
                {options.map((item, index) => (
                    <RadioItem name={name} itemvalue={item.value} label={item.label} onChange={onChange} key={index} index={index} />
                ))}
            </div>
        </>

    )
}

RadioGroup.propTypes = {
    name: PropTypes.string.isRequired,
    selectedItem: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default RadioGroup
