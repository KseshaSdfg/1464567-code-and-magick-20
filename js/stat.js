// eslint-disable-next-line strict
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 20;
var BAR_WIDTH = 40;
var BAR_DISTANCE = 50;
var textList = ['Ура вы победили!', 'Список результатов:'];
var namList = ['Вы', 'Кекс', 'Катя', 'Игорь'];
var colorList = ['rgba(255, 0, 0, 1)', 'rgba(0, 0, 255, Math.random[0;1])', 'rgba(0, 0, 255, Math.random[0;1])', 'rgba(0, 0, 255, Math.random[0;1])'];
var scoreList = [2725, 4025, 1244, 1339];
var maxScore = 0;
var maxScoreHeight = 150;
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  for (var i = 0; i < textList.length; i++) {
    ctx.filltext(textList[i], CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP + TEXT_WIDTH * i);
  }

  for (i = 0; i < namList.length; i++) {
    ctx.filltext(namList[i], CLOUD_X + (BAR_WIDTH + BAR_DISTANCE) * i, CLOUD_HEIGHT + CLOUD_Y - FONT_GAP);
  }

  for (i = 0; i < scoreList.length; i++) {
    if (scoreList[i] > maxScore) {
      maxScore = scoreList[i];
    }
  }

  for (i = 0; i < scoreList.length; i++) {
    ctx.fillStyle = colorList[i];
    ctx.fillRect(CLOUD_X + (BAR_WIDTH + BAR_DISTANCE) * i, maxScoreHeight - (scoreList[i] * maxScoreHeight) / maxScore + CLOUD_HEIGHT + CLOUD_Y - FONT_GAP - TEXT_WIDTH, CLOUD_HEIGHT + CLOUD_Y - FONT_GAP - TEXT_WIDTH);
  }
};
