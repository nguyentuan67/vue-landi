export function isiOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
  
export function isAndroid() {
return /Android/i.test(navigator.userAgent);
}

export function isMobile() {
return isAndroid() || isiOS();
}

export const VIDEO_SIZE = {
  '640 X 480': {width: 640, height: 480},
  '640 X 360': {width: 640, height: 360},
  '360 X 270': {width: 360, height: 270}
};