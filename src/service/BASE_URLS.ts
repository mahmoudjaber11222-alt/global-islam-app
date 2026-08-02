// IT TAKES NO INPUT , it auto detects the user's ip -> generate location data --- VEEERY SIMPLE +_+ ---
const LOCATION_URL = 'https://get.geojs.io/v1/ip/geo.json';
// ex: https://api.aladhan.com/v1/timings/1711891200?latitude=24.7136&longitude=46.6753&method=2
const PRAYER_TIMES_URL = 'https://api.aladhan.com/v1/timingsByCity';

// to get fetched hadiths from, by id .
const HADITH_URL = 'https://hadeethenc.com';
const SEARCH_QURAN_URL = 'https://api.alquran.cloud';
const READ_QURAN_URL = 'https://api.alquran.cloud/v1/quran';
const READ_QURAN_SUPPORTED_LANGUAGES_URL =
  'https://api.alquran.cloud/v1/edition/language';
const READ_QURAN_SURAH_BY_EDITION_URL = 'https://api.alquran.cloud/v1/surah';
// ex:  "https://api.alquran.cloud/v1/surah/${id}/${edition}";

// ex:// https://api.alquran.cloud/v1/search/{keyword}/all/{edition-or-language}

// failure example"{
//     "code": 404,
//     "status": "NOT FOUND",
//     "data": "Nothing matching your search was found.."
// }

// success example:
//     "code": 200,
//     "status": "ok",
//     "data": {"count":... , "matches":[]}
// }
const GLOBAL_ISLAM_URL = 'https://global-islam5-islam-g-5.hf.space';
const SEARCH_HADITH_URL = GLOBAL_ISLAM_URL;
const NEWS_URL = `${GLOBAL_ISLAM_URL}/news/`;
const TRACK_EVENT_URL = `${GLOBAL_ISLAM_URL}/track-event/`;
export {
  GLOBAL_ISLAM_URL,
  HADITH_URL,
  LOCATION_URL,
  NEWS_URL,
  PRAYER_TIMES_URL,
  READ_QURAN_SUPPORTED_LANGUAGES_URL,
  READ_QURAN_SURAH_BY_EDITION_URL,
  READ_QURAN_URL,
  SEARCH_HADITH_URL,
  SEARCH_QURAN_URL,
  TRACK_EVENT_URL,
};
