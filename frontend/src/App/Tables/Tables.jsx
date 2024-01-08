import './tables.scss';
import { useParams } from 'react-router-dom';

function Data() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Th 1</th>
                    <th>Th 2</th>
                    <th>Th 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                </tr>
                <tr>
                    <td>Cell 4</td>
                    <td>Cell 5</td>
                    <td>Cell 6</td>
                </tr>
                <tr>
                    <td>Cell 7</td>
                    <td>Cell 8</td>
                    <td>Cell 9</td>
                </tr>
            </tbody>
        </table>
    );
}

function Tables() {
    const { table } = useParams();
    return (
        <main id='tables'>
            <h1>{ table }</h1>
            <Data />
        </main>
    );
}

export { Tables };