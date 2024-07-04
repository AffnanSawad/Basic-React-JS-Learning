import React from 'react';

const AddedBookmark = ({addedBookmark}) => {

    const {title,ab} = addedBookmark;
    return (
        <div>
            <h3 className='text-xl font-bold text-red-600 mt-5 mb-2'> {title} </h3>
        </div>
    );
};

export default AddedBookmark;