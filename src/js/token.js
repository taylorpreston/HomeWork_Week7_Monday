var token = "ba794578227b8c0f8f07d271f270e4cbdaca54c5";

$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});
