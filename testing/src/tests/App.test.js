import App from '../components/App';
import { render, screen } from '@testing-library/react';
import { suma } from '../services/util';

describe('app test', () => {
  test('Buscar en App la palabra anacleta', () => {
    //preparación
    render(<App />);
    //actuación
    const textAnacleta = screen.getAllByText(/anacleta/i);
    //aserción
    expect(textAnacleta.length).toBe(1);
  });

  test('find title with string --curso', () => {
    const texto = 'cursor';
    render (<App/>)
    //screen.getByRole("heading", {name: texto})
  });

  test("function suma" , ()=>{
    //preparación
    const a = "5";
    const b = "1";
    //actuación
    const result = suma(a,b)
    //asercion
    expect(result).toBe(6)
  })

});
