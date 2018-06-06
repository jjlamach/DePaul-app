var map = new Map();
map.set(1, ['A', 'B', 'C', 'D', 'E']);
map.set(2, 'B');
map.set(3, 'C');

function printer(map) {
  map.forEach(function (key, value, map) {
    if (map) {
      console.log(key + '--->' + value);
    } else {
      console.log('Map empty.');
    }
  });
}

printer(map);

