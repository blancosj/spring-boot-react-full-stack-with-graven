import dataTest from './dataTest'


export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVED_DATA = 'RECEIVED_DATA';

export function actionRequestData() {
  return {
    type: REQUEST_DATA
  }
}

export function actionReceiveData(items) {
  return {
    type: RECEIVED_DATA,
    items: items
  }
}

export function fetchData(dispatch) {

  return function() {

    // loading
    dispatch(actionRequestData())

    // load dumb data
    // return dispatch(actionReceiveTransactions(dataTest))

    // make api call
    fetch("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20" +
      "local.search%20where%20zip%3D'94085'%20and%20query%3D'pizza'&format=json" +
      "&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=")
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        return dispatch(actionReceiveData(json));
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
