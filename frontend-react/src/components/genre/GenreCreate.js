import React, { useState } from "react";

const GenreCreate = ({ api, axiosGetGenre }) => {
    console.log('--Create Component--');

    //----------[CREATE]----------
    //  [create-step-0] [CREATE-INPUT] - [JSON]
    const [getCreateFormData, setCreateFormData] = useState({
        name: '',
        description: ''
    });
    // - [create-step-1] [onChange] [COLLECT-DATA-FROM-INPUT]
    const collectFromInput_SetInputCreateData_handleOnChange = (event) => {
        const fieldName = event.target.getAttribute('name');
        const frieldValue = event.target.value;
        const newFormData = { ...getCreateFormData };
        newFormData[fieldName] = frieldValue;
        setCreateFormData(newFormData);
        console.log('[create-step-1] collectFromInput_SetInputCreateData_handleOnChange -', newFormData);
    };
    // - [create-step-2] [onClick] [POST-CREATE]
    const axiosCreate_onClick = async () => {
        await api.post('/genre', getCreateFormData).then(res => {
            axiosGetGenre();
            setCreateFormData({
                name: '',
                description: ''
            });
            console.log('[create-step-2] axiosCreate_onClick -', res);
        });
    };

    return (
        <table className="styled-table" >
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr className="active-row" >
                    <td>
                        <input type="text" name='name'
                            value={getCreateFormData.name}
                            onChange={collectFromInput_SetInputCreateData_handleOnChange}
                            autoComplete='off'
                            placeholder='Enter Name...' />
                    </td>
                    <td>
                        <input type="text" name='description'
                            value={getCreateFormData.description}
                            onChange={collectFromInput_SetInputCreateData_handleOnChange}
                            autoComplete='off'
                            placeholder='Enter Description...' />
                    </td>
                    <td>
                        <button type='button' onClick={axiosCreate_onClick}>Create</button>
                    </td>
                </tr>
            </tbody>
        </table>

    );
};

export default GenreCreate;