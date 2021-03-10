import request from 'request';

// https://nodejs.dev/learn/making-http-requests-with-nodejs
export const startup = () => {
  return ((dispatch: any, getState: any): any => {
    console.log('invoke startup');
    request(
      'http://192.168.86.229:8008/GetAutorun',
      (err, resp, body) => {
        if (err) {
          console.log(err);
        }
          console.log(body);
      });
  });
}
