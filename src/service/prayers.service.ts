import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AlAdhanResponse,
  AlAdhanResponseList,
  PrayerTimesError,
} from '../app/types/prayer_times';
import { formatDate_isoStringToDate } from '../app/utils/formatter';
export const storageKey = (
  latitude: number,
  longitude: number,
  date: string | number,
): string => `prayer_${latitude}_${longitude}_${date}`;

export async function getPrayer(
  preciseLocation: { latitude: number; longitude: number } | null,
  unPreciseLocation: { city: string; country: string } | null,
  date: string | number,
): Promise<PrayerTimesError | AlAdhanResponse> {
  try {
    if (preciseLocation) {
      const stKey = storageKey(
        preciseLocation.latitude,
        preciseLocation.longitude,
        date,
      );

      const dataInCache = await AsyncStorage.getItem(
        storageKey(preciseLocation.latitude, preciseLocation.longitude, date),
      );
      // console.log('cdi', new Date(date).toDateString());
      const isoToDate = formatDate_isoStringToDate(date + '');
      // console.log();
      const isCurrentMonth = isoToDate.getMonth() === new Date().getMonth();
      console.log('is cur', isCurrentMonth);

      if (dataInCache && isCurrentMonth) {
        console.log('PRAYERS DATA GET FROM CACHE ✨');
        const re: AlAdhanResponseList = await JSON.parse(dataInCache);
        // console.log(re);
        re?.data?.forEach((item) => {
          console.log(item.date);
        });

        console.log('cached data length: ', re.data.length);
        const prayerByDate = re?.data?.find(
          (item) => item.date.gregorian.date === date,
        );

        // console.log(prayerByDate?.timings);
        if (!prayerByDate) {
          console.log('PRAYERS BY DATE RETURNS UNDEFINED');
          return { ok: false, msg: 'no prayers to return' };
        }
        return {
          ok: true,
          status: 'OK',
          data: prayerByDate,
          code: 200,
          fullData: re.data,
        };
      }
      // const URI = `https://api.aladhan.com/v1/timings/${date}?latitude=${preciseLocation.latitude}&longitude=${preciseLocation.longitude}&method=1&school=0`;
      const fullMonth = `https://api.aladhan.com/v1/calendar/${isoToDate.getFullYear()}/${isoToDate.getMonth() + 1}?latitude=${preciseLocation.latitude}&longitude=${preciseLocation.longitude}&method=1&school=0`;
      const response: Response = await fetch(fullMonth);
      // const response: Response = await fetch(URI);

      // const result: AlAdhanResponse = await response.json();
      const result: AlAdhanResponseList = await response.json();
      // result.data = result.data.map((item) => {
      //   const { Maghrib } = item.timings;
      //   const postTime = Maghrib.split(' ')[1];
      //   let [h, m] = Maghrib.split(' ')[0].split(':');

      //   const date = new Date();
      //   date.setHours(Number(h));
      //   date.setMinutes(Number(m) + 5);
      //   h = date.getHours();
      //   m = date.getMinutes();
      //   item.timings['Maghrib'] = `${h}:${m} ${postTime}`;

      //   return item;
      // });
      const reData = [];
      result.data.forEach((item) => {
        const { Maghrib } = item.timings;
        const postTime = Maghrib.split(' ')[1];
        let [h, m] = Maghrib.split(' ')[0].split(':').map(Number);

        const date = new Date();
        date.setHours(Number(h));
        date.setMinutes(Number(m) + 5);
        h = date.getHours();
        m = date.getMinutes();
        item.timings['Maghrib'] = `${h}:${m} ${postTime}`;

        reData.push(item);
      });
      result.data = reData;
      await AsyncStorage.setItem(stKey, JSON.stringify(result));
      const prayerByDate = result?.data?.find(
        (item) => item.date.gregorian.date === date,
      );
      if (!prayerByDate) {
        return { ok: false, msg: 'no prayers to return' };
      }
      return {
        ok: true,
        status: 'OK',
        data: prayerByDate,
        code: 200,
        fullData: result.data,
      };
    }
    return { ok: false, msg: 'No Location Provided' };
  } catch (err: any) {
    return { ok: false, msg: err };
  }
}
/**
 * 
 * 
 * import { LOCATION_URL, PRAYER_TIMES_URL } from "./BASE_URLS";
import { DateTime } from "luxon";

const offsets = {
  "asia/amman": {
    maghrib: 5,
  },
};



export async function getLocationInfo() {
  try {
    const response = await fetch(LOCATION_URL);

    if (!response.ok) {
      throw new Error("Error occurred in Location API");
    }

    const result = await response.json();

    console.log("Location Info:", result);

    return result;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getTime() {
  try {
    const locationInfo = await getLocationInfo();

    if (!locationInfo?.timezone) {
      throw new Error("Timezone not found");
    }

    const now = DateTime.now().setZone(locationInfo.timezone);

    return now.toMillis();
  } catch (err) {
    console.error(err);

    // fallback
    return Date.now();
  }
}

export async function getPrayerTimesInfo(city, countryName, timeDDMYYY) {
  try {
    const urlQueries = new URLSearchParams({
      city,
      country: countryName,
      method: "1",
      school: "0",
    });

    const fullURL = `${PRAYER_TIMES_URL}/${timeDDMYYY}?${urlQueries}`;

    const response = await fetch(fullURL);

    if (!response.ok) {
      throw new Error("Error occurred in Prayer Times API");
    }

    const result = await response.json();

    const timezone = result?.data?.meta?.timezone?.toLowerCase() || "";

    const timings = Object.entries(result.data.timings).map(([name, value]) => {
      const prayerName = name.toLowerCase();

      const prayerOffset = offsets[timezone]?.[prayerName] || 0;

      return {
        name: prayerName,
        value: addOffset(value, prayerOffset),
        originalValue: value,
      };
    });

    return {
      ...result.data,
      timings,
    };
  } catch (err) {
    console.error(err);
    return null;
  }
}
 * 
 */
