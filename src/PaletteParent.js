import React, {Component} from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import Palette from './Palette';

class PaletteParent extends Component {


    findPalette(idx) {
        return seedColors.find((palette) => palette.id === idx);
    }
3
    render() {
        const PaletteWrapper = () => {
            const { id } = useParams();
            console.log('IDD', id)
            const palette = generatePalette(this.findPalette(id));
            return <Palette palette={palette} />
        };

        const Home = () => {
            return <h1>List of different palettes</h1>
        }

        return (
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route exact path="/palette/:id" element={<PaletteWrapper />} />
            </Routes>
        )
    }
}

export default PaletteParent;
