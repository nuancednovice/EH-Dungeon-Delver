import TickEntity from 'lib/entities/TickEntity';

export const initialTickState = {
  interval: null,
  pointer: 0,
  target: 600000,
};

const Tick = new TickEntity({ ...initialTickState });

export default Tick;
