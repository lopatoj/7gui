import m from 'mithril';

const Timer = {
  time: 0.0,
  duration: 10.0,
  tick: 0.01,
  interval: setTimeout(() => {}, 0),
  fraction: () => {
    return Timer.time / Timer.duration * 100;
  },
  update: () => {
    if (Timer.time < Timer.duration) {
      Timer.time += Timer.tick;
    } else {
      Timer.time = Timer.duration;
    }

    m.redraw();
  },
  reset: () => {
    Timer.time = 0.0;
    clearInterval(Timer.interval);
    Timer.interval = setInterval(Timer.update, Timer.tick * 1000);
  },
}

export default Timer;