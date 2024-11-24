import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

describe('Counter Component', () => {
  test('Default value must be 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
  });

  test('Increment works when button clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    const counterValue = screen.getByTestId('counter-value');

    fireEvent.click(incrementButton);
    expect(counterValue).toHaveTextContent('1');
  });

  test('Decrement works when button clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('Decrement');
    const counterValue = screen.getByTestId('counter-value');

    fireEvent.click(decrementButton);
    expect(counterValue).toHaveTextContent('-1');
  });

  test('Reset the count using reset button', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    const resetButton = screen.getByText('Reset');
    const counterValue = screen.getByTestId('counter-value');

    fireEvent.click(incrementButton); 
    expect(counterValue).toHaveTextContent('1');
    
    fireEvent.click(resetButton);
    expect(counterValue).toHaveTextContent('0');
  });
});

describe('Greeting Component', () => {
    test("Displays greeting with user's name", () => {
      render(<Greeting name="Rara" />);
      screen.debug(); 
      const greetingMessage = screen.getByTestId('greeting-message');
      expect(greetingMessage).toHaveTextContent('Hello, Rara');
    });
  
    test("Displays greeting with instructor's name", () => {
      render(<Greeting name="Syavira" />);
      screen.debug();
      const greetingMessage = screen.getByTestId('greeting-message');
      expect(greetingMessage).toHaveTextContent('Hello, Syavira');
    });
  });

describe('AlertButton Component', () => {
  test('Triggers alert with correct message when clicked', () => {
    window.alert = jest.fn();
    render(<AlertButton message="This is an alert!" />);

    const alertButton = screen.getByText('Show Alert');
    fireEvent.click(alertButton);

    expect(window.alert).toHaveBeenCalledWith('This is an alert!');
  });
});
