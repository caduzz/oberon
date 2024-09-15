import styled from 'styled-components';

interface btnTimerProps {
  selected: boolean
}

export const Container = styled.li<btnTimerProps>`
  .btn {
    width: 100%;
    position: relative;
    
    .timer-btn {
      background-color: #0e1015;

      border: none;
      border-radius: 2px;
      
      color: #fff;
      cursor: pointer;

      font-size: 12px;

      display: flex;
      flex-direction: column;

      gap: .4rem;
      margin-bottom: .4rem;
      padding: .6rem;

      text-transform: capitalize;
      
      width: 100%;

      transition: .2s;

      background-color: ${p => p.selected && '#f25'};

      :hover {
        background-color: ${p => p.selected ? '#f36' : ' #101318'};
      }

      .timers {
        display: flex;
        justify-content: space-between;

        width: 100%;
      }

      .barra {
        width: 1px;
        background-color: #fff;
      }
    }
    .delete { 
      position: absolute;
      top: 5px;
      right: 2px;
      cursor: pointer;
      border: none;
      background-color: transparent;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      color: #fff;
      outline: none;
    }
  }
`;

