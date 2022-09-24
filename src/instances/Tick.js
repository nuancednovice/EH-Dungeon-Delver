import TickEntity from 'lib/entities/TickEntity';

export const initialTickState = {
  interval: null,
  pointer: 0,
  target: 300000,
};

const Tick = new TickEntity({ ...initialTickState });

export default Tick;
