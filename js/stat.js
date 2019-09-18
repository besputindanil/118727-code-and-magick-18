'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var MAX_HEIGHT = 150;
var barHeight = CLOUD_HEIGHT - GAP * 4 - TEXT_HEIGHT * 4;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = 0;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT Mono'
  ctx.fillText('Ура вы победили!', CLOUD_X + BAR_GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + BAR_GAP, CLOUD_Y + TEXT_HEIGHT + GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    if (names[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var rand = function (min, max) {
       return min + Math.random() * (max - min);
     };

      var getRandomSaturation = function () {
        var s = rand(0, 100);
        return 'hsl(' + 240 + ',' + s + '%,' + 50 + '%)';
      };
      ctx.fillStyle = getRandomSaturation();
    }
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP - TEXT_HEIGHT - (MAX_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (MAX_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - TEXT_HEIGHT);
  };

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP - TEXT_HEIGHT - (MAX_HEIGHT * times[i]) / maxTime - TEXT_HEIGHT)
  };
};
