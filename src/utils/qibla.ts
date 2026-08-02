export function calculateQiblaDirection(latitude: number, longitude: number) {
  const KAABA_LAT = 21.422487; // More precise
  const KAABA_LNG = 39.826206; // More precise

  const toRadians = (deg: number) => (deg * Math.PI) / 180;
  const toDegrees = (rad: number) => (rad * 180) / Math.PI;

  const lat1 = toRadians(latitude);
  const lon1 = toRadians(longitude);
  const lat2 = toRadians(KAABA_LAT);
  const lon2 = toRadians(KAABA_LNG);

  const deltaLon = lon2 - lon1;

  // Correct spherical formula
  const y = Math.sin(deltaLon) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLon);

  let bearing = Math.atan2(y, x);
  bearing = toDegrees(bearing);

  return (bearing + 360) % 360;
}
