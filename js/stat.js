'use strict';

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

var WIDTH_CLOUDS = 420;
var HEIGHT_CLOUDS = 270;
var CLOUD_X = 100;
var CLOUD_Y = 280;
var GAP = 45;
var TEXT_HEIGHT = 30;
var TEXT_GAP = 20;
var BAR_WIDTH = 50;
var BAR_HEIGHT = HEIGHT_CLOUDS - TEXT_HEIGHT * 4 - TEXT_GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, WIDTH_CLOUDS, HEIGHT_CLOUDS);
};

var getMaxElement = function (time) {
  var MaxElement = time[0];

  for (var i = 0; i < time.length; i++) {
    if (time[i] > MaxElement) {
      MaxElement = time[i];
    }
  }

  return MaxElement;
};

window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + CLOUD_Y - HEIGHT_CLOUDS, (CLOUD_Y - HEIGHT_CLOUDS) * 2, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y - HEIGHT_CLOUDS, 'white');

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_GAP, CLOUD_Y - TEXT_HEIGHT * 3 - BAR_HEIGHT - TEXT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_GAP, CLOUD_Y - TEXT_HEIGHT * 3 - BAR_HEIGHT);

  var colors = ['rgba(255, 0, 0, 1)', 'blue', 'hsl(240, 100%, 50%, 40%)', 'hsl(240, 100%, 50%, 10%)'];
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + i * (GAP + BAR_WIDTH), CLOUD_Y - BAR_HEIGHT - TEXT_HEIGHT - TEXT_GAP);
    ctx.fillText(players[i], CLOUD_X + GAP + i * (GAP + BAR_WIDTH), CLOUD_Y - TEXT_GAP);
    ctx.fillStyle = colors[i];
    ctx.fillRect(CLOUD_X + GAP + i * (GAP + BAR_WIDTH), CLOUD_Y - TEXT_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};
