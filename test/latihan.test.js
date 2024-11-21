import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

describe('Counter Component', () => {
    test('renders the initial count value as 0', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        expect(countValue).toHaveTextContent('0');
    });

    test('increments count when increment button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const incrementButton = screen.getByText('Increment');
        fireEvent.click(incrementButton);
        expect(countValue).toHaveTextContent('1');
    });

    test('decrements count when decrement button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const decrementButton = screen.getByText('Decrement');
        fireEvent.click(decrementButton);
        expect(countValue).toHaveTextContent('-1');
    });

    test('resets count when reset button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value');
        const incrementButton = screen.getByText('Increment');
        const resetButton = screen.getByText('Reset');
        fireEvent.click(incrementButton);
        fireEvent.click(resetButton);
        expect(countValue).toHaveTextContent('0');
    });
});

describe('Greeting Component', () => {
    test('greeting component : Nama', () => {
        render(<Greeting name="Beliau" />);
        const greeting = screen.getByTestId('greeting');
        expect(greeting).toHaveTextContent('Hello, Beliau');
    });

    test('greeting component : Nama Dosen', () => {
        render(<Greeting name="Farid Suryanto S.Pd, M.T" />);
        const greeting = screen.getByTestId('greeting');
        expect(greeting).toHaveTextContent('Hello, Farid Suryanto S.Pd, M.T');
    });
});

describe('AlertButton Component', () => {
    test('shows alert when button is clicked', () => {
        render(<AlertButton message="Hello, You" />);
        const alertButton = screen.getByTestId('alert-button');
        window.alert = jest.fn();
        fireEvent.click(alertButton);
        expect(window.alert).toHaveBeenCalledWith('Hello, You');
    });
});