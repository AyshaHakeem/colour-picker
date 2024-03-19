import React, {Component} from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import PaletteList from './PaletteList';
import Palette from './Palette';
// import IndividualPalette from './IndividulaPalette'

class PaletteParent extends Component {


    findPalette(idx) {
        return seedColors.find((palette) => palette.id === idx);
    }
3
    render() {
        const PaletteWrapper = () => {
            const { id } = useParams();
            const palette = generatePalette(this.findPalette(id));
            return <Palette palette={palette} showSlider={TextTrackCueList} showMore={true} />
        };

        const IndividulaWrapper = () => {
            const { id, colourID } = useParams()
            const colours = generatePalette(this.findPalette(id)).colors
            const palette = Object.values(colours).map(x => x.find(i => i.id === colourID));

            return <Palette palette={palette} colourID={colourID} showSlider={false} showMore={false} />
        }

        return (
            <Routes>
                <Route exact path="/" element={ <PaletteList palettes={seedColors} /> } />
                <Route exact path="/palette/:id" element={<PaletteWrapper />} />
                <Route exact path="/palette/:id/:colourID" element={<IndividulaWrapper />} />
            </Routes>
        )
    }
}

export default PaletteParent;
