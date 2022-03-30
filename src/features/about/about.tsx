import React, {  useEffect } from 'react';
import xlsx from 'xlsx';

const About = () => {

    useEffect(() => {

    },[])

    const onGetFileData = (e : any) => {
        console.log(e.target.files);
    }

    return (
        <div>
            <input type="file" onChange={onGetFileData} name="" id="" />
        </div>
    );
};

export default About;