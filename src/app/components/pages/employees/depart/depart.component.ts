import { Component, OnInit } from '@angular/core';

declare  var $ :  any;

@Component({
  selector: 'app-depart',
  templateUrl: './depart.component.html',
  styleUrls: ['./depart.component.css']
})
export class DepartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){

      var reemployer = $("#reemployer");
      // var date_depart = Date.parse(document.getElementById('date_depart').value);
      var date_depart = $("#date_depart");

      // var dernier_jour_travaillé = Date.parse(document.getElementById('dernier_jour_travaillé').value);
      var dernier_jour_travaillé = $("#dernier_jour_travaillé");
      var motif_depart = $("#motif_depart");
      var bool1=true;
      var bool2=true;

        $("#submit").click(function valider(){

    // validation du chap de reemployement
            $("small").remove();

            $("#reemployer").removeClass("is-invalid")
            $("#reemployer").removeClass("is-valid")

            if(reemployer.val()=="none"){
                $("#reemployer").addClass("is-invalid");
                $("#reemployer").after("<i ><small class='ms-3 mb-4 text-danger'  >Veuillez renseigner ce champ</small></i>");
                bool1= false;
            }
            else{
                $("#reemployer").addClass("is-valid");
                bool1= true;
            }

            return bool1;
        });
            });

      $(document).ready(function(){

          $("#reset").click(function(){

          $("small").remove();
          $("i").remove();

          $("#reemployer").removeClass("is-invalid")
          $("#reemployer").removeClass("is-valid")

        })

      })

  }

}
