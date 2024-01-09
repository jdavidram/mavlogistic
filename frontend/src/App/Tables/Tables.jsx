import { FaFilter } from "react-icons/fa6";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import './tables.scss';
import tables from './tables.json';

function Search({ category, setCategory, setFiltro, options }) {
    if (category == '') {
        var classCss = "hide";
    } else {
        var classCss = "show";
    }
    return (
        <div id="search" className={ classCss }>
            <label onClick={() => setCategory("")}>{ category }</label>
            <select id="category" onClick={(event) => setFiltro(event.target.value)}>
                {options.map((o) => (
                    <option value={ o }>{ o }</option>
                ))}
            </select>
        </div>
    );
}

function THFilter({ th, options, setCategory, setOptions }) {
    function setSearch(th, options) {
        setCategory(th);
        setOptions(options);
    }
    if (options.length > 0) {
        return (
            <th className='filter' onClick={() => setSearch(th, options)}>
                <FaFilter />{ th }
            </th>
        );
    } else {
        return (
            <th>{ th }</th>
        );
    }
}

function TBody({ tr, filtro }) {
    if (filtro == "$x$") {
        return (
            <tr>
                {tr.map((td) => (
                    <td>{ td }</td>
                ))}
            </tr>
        );
    } else {
        if (tr.indexOf(filtro) >= 0) {
            return (
                <tr>
                    {tr.map((td) => (
                        <td>{ td }</td>
                    ))}
                </tr>
            );
        }
    }
}

function Data({ table, category, setCategory, setOptions, filtro }) {
    const thead = tables[table].thead;
    const tbody = tables[table].tbody;
    const filter = tables[table].filter;
    const allOptions = {};
    for (let i = 0; i < filter.length; i++) {
        var x = thead.indexOf(filter[i]);
        allOptions[filter[i]] = [];
        for (let j = 0; j < tbody.length; j++) {
            if (allOptions[filter[i]].indexOf(tbody[j][x]) < 0) {
                allOptions[filter[i]].push(tbody[j][x]);
            }
        }
    }
    return (
        <table>
            <thead>
                <tr>
                    {thead.map((th) => (
                        <THFilter
                            th={ th }
                            options={ filter.indexOf(th) >= 0 ? allOptions[th] : [] }
                            setCategory={ setCategory }
                            setOptions={ setOptions }
                        />
                    ))}
                </tr>
            </thead>
            <tbody>
                {tbody.map((tr) => (
                    <TBody tr={ tr } filtro={ filtro } />
                ))}
            </tbody>
        </table>
    );
}

function Table() {
    const { table } = useParams();
    const [category, setCategory] = useState("");
    const [options, setOptions] = useState([""]);
    const [filtro, setFiltro] = useState("$x$");
    return (
        <main id='tables'>
            <Search
                category={ category } setCategory={ setCategory }
                options={ options }
                setFiltro={ setFiltro }
            />
            <h1>{ table }</h1>
            <Data 
                table={ table }
                category={ category } setCategory={ setCategory }
                setOptions={ setOptions }
                filtro={ filtro }
            />
        </main>
    );
}

export { Table };