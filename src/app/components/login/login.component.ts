import { Component, OnInit } from '@angular/core';

declare  var $ : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){

      var login = $("#login");
      var password = $("#password");
      var loginRegExp = new RegExp('^[a-zA-Z0-9._\-]+$', 'g');
      var passwordRegExp = new RegExp('^[a-zA-Z0-9._@\-]+$', 'g');
      var bool=false;
      $("#submit").click(function connecter(){

          $("#login").removeClass("is-invalid")
          $("#login").removeClass("is-valid")

          if(login.val()!=""){

              if(login.val().match(loginRegExp)){
                  $("#login").addClass("is-valid");
                  bool= true;
              }
              else{
                  $("#login").addClass("is-invalid");
                  bool= false;
              }
          }
          else{
              $("#login").addClass("is-invalid");
              bool= false;
          }


          $("#password").removeClass("is-invalid")
          $("#password").removeClass("is-valid")

          if(password.val()!=""){
              if(password.val().match(passwordRegExp)){
                  $("#password").addClass("is-valid")
                  bool= true ;
              }
              else{
                  $("#password").addClass("is-invalid");
                  bool= false;
              }
          }
          else{
              $("#password").addClass("is-invalid");
              bool= false;
          }

      return bool;
      });
  })
  }

}
