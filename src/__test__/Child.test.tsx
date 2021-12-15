import * as React from 'react';
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import Child from '../Child';

const testData = ["Hola","Mundo","!"]

test('loads and displays the child with the testData', () => {
    render(<Child name={""} data={testData}/>)
    expect(screen.getByText("Hola"));
    expect(screen.getByText("Mundo"));
    expect(screen.getByText("!"));
});