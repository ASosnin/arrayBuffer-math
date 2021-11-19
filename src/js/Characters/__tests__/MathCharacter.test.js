import { Daemon } from '../Daemon';

test('Атака через две клетки без оцепенения', () => {
  const daemon = new Daemon('Daemon');
  daemon.attack = 100;
  daemon.distance = 2;
  daemon.stoned = false;
  expect(daemon.attack).toBe(90);
});

test('Атака по соседней клетке без оцепенения', () => {
  const daemon = new Daemon('Daemon');
  daemon.attack = 100;
  daemon.distance = 1;
  daemon.stoned = false;
  expect(daemon.attack).toBe(100);
});

test('Атака по соседней клетке с оцепенением', () => {
  const daemon = new Daemon('Daemon');
  daemon.attack = 100;
  daemon.distance = 1;
  daemon.stoned = true;
  expect(daemon.attack).toBe(100);
});

test('Атака через две клетки с оцепенением', () => {
  const daemon = new Daemon('Daemon');
  daemon.attack = 100;
  daemon.distance = 2;
  daemon.stoned = true;
  expect(daemon.attack).toBe(85);
});

test('Атака с оцепенением и большой дистанцией', () => {
  const daemon = new Daemon('Daemon');
  daemon.attack = 10;
  daemon.distance = 4;
  daemon.stoned = true;
  expect(daemon.attack).toBe(0);
});
