import $ from 'jquery'

var token = "9fedf821100df5af9eba2c658bcb2599f312c822";

$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});
