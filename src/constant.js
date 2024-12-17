// Maps whether the condition codes to categories
// Each key represents a weather type , with an array of codes from weather api

import cloudy from './icons/clouds.svg';
import misty from './icons/mist.svg';
import heavyRain from './icons/moderate_heavy_rain.svg';
import rain from './icons/rain.svg';
import snow from './icons/snow.svg';
import thunder from './icons/thunder.svg';
import thunderRain from './icons/thunder_rain.svg';
import clear from './icons/clear.svg'

const icons = {
    [ 1000 ] : clear,
    [ 1003 ] : cloudy,
    [ 1006 ] : cloudy,
    [ 1009 ] : cloudy,
    [ 1030 ] : misty,
    [ 1135 ] : misty,
    [ 1147 ] : misty,
    [ 1063 ] : rain,
    [ 1150 ] : rain,
    [ 1153 ] : rain,
    [ 1168 ] : rain,
    [ 1171 ] : rain,
    [ 1180 ] : rain,
    [ 1183 ] : rain,
    [ 1198 ] : rain,
    [ 1201 ] : rain,
    [ 1240 ] : rain,
    [ 1243 ] : rain,
    [ 1246 ] : rain,
    [ 1273 ] : rain,
    [ 1276 ] : rain,
    [ 1066 ] : snow,
    [ 1069 ] : snow,
    [ 1072 ] : snow,
    [ 1114 ] : snow,
    [ 1117 ] : snow,
    [ 1204 ] : snow,
    [ 1207 ] : snow,
    [ 1210 ] : snow,
    [ 1213 ] : snow,
    [ 1216 ] : snow,
    [ 1219 ] : snow,
    [ 1222 ] : snow,
    [ 1225 ] : snow,
    [ 1237 ] : snow,
    [ 1249 ] : snow,
    [ 1252 ] : snow,
    [ 1255 ] : snow,
    [ 1258 ] : snow,
    [ 1261 ] : snow,
    [ 1264 ] : snow,
    [ 1279 ] : snow,
    [ 1282 ] : snow,
    [ 1087 ] : thunder,
    [ 1279 ] : thunder,
    [ 1282 ] : thunder,
    [ 1063 ] : thunderRain,
    [ 1273 ] : thunderRain,
    [ 1276 ] : thunderRain,
    [ 1186 ] : heavyRain,
    [ 1189 ] : heavyRain,
    [ 1192 ] : heavyRain,
    [ 1195 ] : heavyRain,
    [ 1243 ] : heavyRain,
    [ 1246 ] : heavyRain,
  }

  export default icons;