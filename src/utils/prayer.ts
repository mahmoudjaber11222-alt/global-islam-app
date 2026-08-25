export function getPreviousPrayer(
  prayerName: string,
  translationObject: object,
  prayersList: string[],
) {
  let targetPrayer: string = '';
  for (let i = 0; i < prayersList.length; i++) {
    if (prayersList[i] === prayerName) {
      console.log(prayerName);
      if (i === 0) {
        targetPrayer =
          prayersList[prayersList.length - 1][0].toUpperCase() +
          prayersList[prayersList.length - 1].substring(1);
      } else if (i === prayersList.length - 1) {
        targetPrayer =
          prayersList[0][0].toUpperCase() + prayersList[0].substring(1);
      } else {
        targetPrayer =
          prayersList[i - 1][0].toUpperCase() + prayersList[i - 1].substring(1);
      }
    }
  }
  if (!targetPrayer) {
    throw new Error('No previous prayer found');
  }
  // get translation

  targetPrayer = translationObject[targetPrayer];
  console.log(targetPrayer);
  return targetPrayer;
}
