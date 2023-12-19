/* eslint-disable no-console */
import readl from 'readline-sync';

const intro = readl.question('хотите сыграт в играт????(да/нэ) ');

const game = (user, bot) => {
  console.log(`счёт к оплате: ТЫ - ${user} , НЕТЫ(БОТ) - ${bot}`);

  if (user === 3) {
    console.log('ВЫ П ОБЕД_ИЛИ ПАЗДРАВЛЯЮ');
    return 0;
  }
  if (bot === 3) {
    console.log('ви.... ПРОИГРАЛЫ');
    return 0;
  }

  const userCh = readl.question('"камен"/"ножн"/"бумаг"???????').toLowerCase();
  let botCh = Math.random();

  if (botCh < 0.33) {
    botCh = 'камен';
  } else if (botCh >= 0.33 && botCh < 0.66) {
    botCh = 'ножн';
  } else {
    botCh = 'бумаг';
  }

  if ((userCh === 'камен' && botCh === 'ножн') || (userCh === 'ножн' && botCh === 'бумаг') || (userCh === 'бумаг' && botCh === 'камен')) {
    console.log('раунд за вам и!!1!');
    game(user + 1, bot);
  } else {
    console.log('раунд НЕ ЗА ВАМИ ЧОУ');
    game(user, bot + 1);
  }
  return 0;
};

if (intro === 'да') {
  console.log('мы граем камен ножн бумаг');
  console.log('пишиТЭ "камен"/"ножн"/"бумаг"(соблюдайте именно такое написание!) и побеждайт бота в камен ножн бумаг!');
  console.log('игра играется до 3 п обед');
  game(0, 0);
}
if (intro === 'нэ') {
  console.log('ну ладн');
}
if (intro !== 'да' && intro !== 'нэ') {
  console.log('тольько да и нэ можно писат');
}

console.log('пращай');
