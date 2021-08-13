import React, { useState, useEffect } from "react";

const BookHasAuthorCreate = ({ api, api_book, api_author, axiosGetBookHasAuthor }) => {
    console.log('--Create Component--');

    const [getBook, setBook] = useState([]);
    const [getAuthor, setAuthor] = useState([]);


    //----------[CREATE]----------
    //  [create-step-0] [CREATE-INPUT] - [JSON]
    const [getCreateBook, setCreateCreateBook] = useState({
        id_book: ''
    });

    //----------[CREATE]----------
    //  [create-step-0] [CREATE-INPUT] - [JSON]
    const [getCreateAuthor, setCreateCreateAuthor] = useState({
        id_author: ''
    });
    // - [create-step-1] [onChange] [COLLECT-DATA-FROM-INPUT] [BOOK]
    const collectFromInput_SetInputCreateBookData_handleOnChange = (event) => {
        const fieldName = event.target.getAttribute('name');
        const frieldValue = event.target.value;
        const newFormData = { ...getCreateBook };
        newFormData[fieldName] = frieldValue;
        setCreateCreateBook(newFormData);
        console.log('[create-step-1] collectFromInput_SetInputCreateBookData_handleOnChange -', newFormData);
    };
    // - [create-step-1] [onChange] [COLLECT-DATA-FROM-INPUT] [AUTHOR]
    const collectFromInput_SetInputCreateAuthorData_handleOnChange = (event) => {
        const fieldName = event.target.getAttribute('name');
        const frieldValue = event.target.value;
        const newFormData = { ...getCreateAuthor };
        newFormData[fieldName] = frieldValue;
        setCreateCreateAuthor(newFormData);
        console.log('[create-step-1] collectFromInput_SetInputCreateAuthorData_handleOnChange -', newFormData);
    };

    // - [create-step-2] [onClick] [POST-CREATE]
    const axiosCreate_onClick = async () => {
        const data = { id_book: getCreateBook.id_book, id_author: getCreateAuthor.id_author }
        await api.post('/book-has-author', data).then(res => {
            axiosGetBookHasAuthor();
            setCreateCreateBook({
                id_book: getBook[0].book_id
            });

            setCreateCreateAuthor({
                id_author: getAuthor[0].author_id
            });
            console.log('[create-step-2] axiosCreate_onClick -', res);
        });
    };

    useEffect(() => {
        const axiosGetBookUseEffect = async () => {
            await api_book.get('/book').then(res => {
                setBook(res.data.content);
                setCreateCreateBook({ id_book: res.data.content[0].book_id })
                console.log('useEffect() axiosGetBookUseEffect() -', res.data.content);
            });
        }
        axiosGetBookUseEffect();
    }, [api_book]);

    useEffect(() => {
        const axiosGetGenreUseEffect1 = async () => {
            await api_author.get('/author').then(res => {
                setAuthor(res.data.content);
                setCreateCreateAuthor({ id_author: res.data.content[0].author_id })
                console.log('useEffect() axiosGetGenreUseEffect1() -', res.data.content);
            });
        }
        axiosGetGenreUseEffect1();
    }, [api_author]);

    return (
        <table className="styled-table" >
            <thead>
                <tr>
                    <th>BOOK TITLE</th>
                    <th>AUTHOR NAME</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr className="active-row" >
                    <td>
                        <select name='id_book'
                            value={getCreateBook.id_book}
                            onChange={collectFromInput_SetInputCreateBookData_handleOnChange}>
                            {getBook.map(book => (
                                <option key={book.book_id} value={book.book_id}>{book.book_title}</option>
                            ))}
                        </select >
                    </td>

                    <td>
                        <select name='id_author'
                            value={getCreateAuthor.id_author}
                            onChange={collectFromInput_SetInputCreateAuthorData_handleOnChange}>
                            {getAuthor.map(author => (
                                <option key={author.author_id} value={author.author_id}>{author.author_name}</option>
                            ))}
                        </select >
                    </td>
                    <td>
                        <button type='button' onClick={axiosCreate_onClick}>Create</button>
                    </td>
                </tr>
            </tbody>
        </table>

    );
};

export default BookHasAuthorCreate;