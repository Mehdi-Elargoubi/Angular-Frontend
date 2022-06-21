import { Component, OnInit } from '@angular/core';

declare  var $ : any;

@Component({
  selector: 'app-recrutement',
  templateUrl: './recrutement.component.html',
  styleUrls: ['./recrutement.component.css']
})
export class RecrutementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


      // button submit

      $(document).ready(function(){
        // let saisir = "<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un nom</small></i>"
        var nom = $("#nom");
        var prenom= $("#prenom");
        var prenom2= $("#prenom2");
        var sexe= $("#sexe");
        var genre= $("#genre");
        var situation= $("#situation");
        var date_naiss= $("#email");
        var lieu_naiss= $("#lieu_naiss");
        var pays= $("#pays");
        var ville= $("#ville");
        var nationalite= $("#nationalite");
        var langue= $("#langue");//12


        var email= $("#email");
        var adress= $("#adress");
        var tel= $("#tel");//15

        var cin= $("#cin");
        var passeport= $("#passeport");
        var id_ass= $("#id_ass");
        var id_sec= $("#id_sec");//19

        var nom_contact= $("#nom_contact");
        var rel_contact= $("#rel_contact");
        var tel_contact= $("#tel_contact");
        var email_contact= $("#email_contact");
        var adress_contact= $("#adress_contact");//24

        var id= $("#id");
        var hiredate= $("#hiredate");
        var poste= $("#poste");
        var motif= $("#motif");//28

        var nom_respo= $("#nom_respo");
        var id_respo= $("#id_respo");
        var tel_respo= $("#tel_respo");
        var mail_respo= $("#mail_respo");//32

        var nom_entre= $("#nom_entre");
        var add_entre= $("#add_entre");//34

        var nomRegExp = new RegExp('^[a-zA-Z - ]+$', 'g');
        var lieuRegExp = new RegExp('^[a-zA-Z0-9]+[a-zA-Z0-9._ \-]+$','g');
        var mailRegExp = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}','g');
        var phoneRegExp = new RegExp('^0[1-9][0-9]{8}$','g');
        var cinRegExp = new RegExp('[a-zA-Z0-9]{6,20}','g');
        var idRegExp = new RegExp('[1-9][0-9]*','g');

        var bool1=true,bool2=true,bool3=true,bool4=true,bool5=true,bool6=true,bool7=true,bool8=true,bool9=true,bool10=true;
        var bool11=true,bool12=true,bool13=true,bool14=true,bool15=true,bool16=true,bool17=true,bool18=true,bool19=true,bool20=true;
        var bool21=true,bool22=true,bool23=true,bool24=true,bool25=true,bool26=true,bool27=true,bool28=true,bool29=true,bool30=true;
        var bool31=true,bool32=true,bool33=true,bool34=true;

        $("#submit").click(function Ajouter(){

  // validation du nom
                $("i").remove();

                $("#nom").removeClass("is-invalid")
                $("#nom").removeClass("is-valid")

            if(nom.val()!=""){
                if(nom.val().match(nomRegExp)){
                    $("#nom").addClass("is-valid");
                    bool1 = true;
                }
                else{
                    $("#nom").addClass("is-invalid");
                    $("#nom").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un nom valide</small></i>");
                    bool1 = false;
                }
            }
            else{
                // $(this).after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un nom</small></i>");
                $("#nom").addClass("is-invalid");
                $("#nom").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un nom</small></i>");
                bool1 = false;
            }

  // validation du prenom
            $("#prenom").removeClass("is-invalid")
            $("#prenom").removeClass("is-valid")

            if(prenom.val()!=""){
                if(prenom.val().match(nomRegExp)){
                    $("#prenom").addClass("is-valid");
                    bool2 = true;
                }
                else{
                    $("#prenom").addClass("is-invalid");
                    $("#prenom").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un prénom valide</small></i>");
                    bool2 = false;
                }
            }
            else{
                // $(this).after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un nom</small></i>");
                $("#prenom").addClass("is-invalid");
                $("#prenom").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un prénom</small></i>");
                bool2 = false;
            }

  // validation du deuxième prénom
            $("#prenom2").removeClass("is-invalid");
            $("#prenom2").removeClass("is-invalid");

            if(prenom2.val()!=""){
                if(prenom2.val().match(nomRegExp)){
                    $("#prenom2").addClass("is-valid");
                    bool3 = true;
                }
                else {
                    $("#prenom2").addClass("is-invalid");
                    $("#prenom2").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un deuxième prénom valide</small></i>");
                    bool3 = false;
                }
            }

  // validation du sexe
            $("#sexe").removeClass("is-invalid")
            $("#sexe").removeClass("is-valid")

            if(sexe.val()=="none"){
                $("#sexe").addClass("is-invalid");
                $("#sexe").after("<i ><small class='ms-3 mb-4 text-danger'  >Veuillez chosir un sexe </small></i>");
                bool4 = false;
            }
            else{
                $("#sexe").addClass("is-valid");
                bool4 = true;
            }

  // validation du genre
            $("#genre").removeClass("is-invalid")
            $("#genre").removeClass("is-valid")

            if(genre.val()=="none"){
                $("#genre").addClass("is-invalid");
                $("#genre").after("<i ><small class='ms-3 mb-4 text-danger'  >Veuillez chosir un genre </small></i>");
                bool5 = false;
            }
            else{
                $("#genre").addClass("is-valid");
                bool5 = true;
            }

  // validation du situation
            $("#situation").removeClass("is-invalid")
            $("#situation").removeClass("is-valid")

            if(situation.val()=="none"){
                $("#situation").addClass("is-invalid");
                $("#situation").after("<i ><small class='ms-3 mb-4 text-danger'  >Veuillez chosir une situation </small></i>");
                bool6 = false;
            }
            else{
                $("#situation").addClass("is-valid");
                bool6 = true;
            }

  // validation du date de naissance
            // var date_naiss=  Date.parse(document.getElementById('date_naiss').value);
            var date_naiss= $("#date_naiss");

            $("#date_naiss").removeClass("is-invalid");
            $("#date_naiss").removeClass("is-valid");

            if (!isNaN(date_naiss)) {
                $("#date_naiss").addClass("is-valid");
                bool7 = true;
            }
            else{
                $("#date_naiss").addClass("is-invalid");
                $("#date_naiss").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir une date</small></i>");
                bool7 = false;
            }


  // validation du lieu de naissance
            $("#lieu_naiss").removeClass("is-invalid");
            $("#lieu_naiss").removeClass("is-valid");

            if(lieu_naiss.val()!=""){
                if(lieu_naiss.val().match(lieuRegExp)){
                    $("#lieu_naiss").addClass("is-valid");
                    bool8 = true;
                }
                else {
                    $("#lieu_naiss").addClass("is-invalid");
                    $("#lieu_naiss").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir une adresse valide</small></i>");
                    bool8 = false;
                }
            }

  // validation de pays

            $("#pays").removeClass("is-invalid")
            $("#pays").removeClass("is-valid")

            if(pays.val()=="none"){
                $("#pays").addClass("is-invalid");
                $("#pays").after("<i ><small class='ms-3 mb-4 text-danger'  >Veuillez chosir un pays </small></i>");
                bool9 = false;
            }
            else{
                $("#pays").addClass("is-valid");
                bool9 = true;
            }

  // validation de ville

            $("#ville").removeClass("is-invalid")
            $("#ville").removeClass("is-valid")

            if(ville.val()=="none"){
                $("#ville").addClass("is-invalid");
                $("#ville").after("<i ><small class='ms-3 mb-4 text-danger'  >Veuillez chosir une ville </small></i>");
                bool10 = false;
            }
            else{
                $("#ville").addClass("is-valid");
                bool10 = true;
            }

  // validation de nationalite

            $("#nationalite").removeClass("is-invalid")
            $("#nationalite").removeClass("is-valid")

            if(nationalite.val()=="none"){
                $("#nationalite").addClass("is-invalid");
                $("#nationalite").after("<i ><small class='ms-3 mb-4 text-danger'  >Veuillez chosir une nationalité </small></i>");
                bool11 = false;
            }
            else{
                $("#nationalite").addClass("is-valid");
                bool11 = true;
            }

  // validation du langue

            $("#langue").removeClass("is-invalid")
            $("#langue").removeClass("is-valid")

            if(langue.val()=="none"){
                $("#langue").addClass("is-invalid");
                $("#langue").after("<i ><small class='ms-3 mb-4 text-danger'  >Veuillez chosir une langue </small></i>");
                bool12 = false;
            }
            else{
                $("#langue").addClass("is-valid");
                bool12 = true;
            }

  // validation de l adresse
            $("#adress").removeClass("is-invalid");
            $("#adress").removeClass("is-valid");

            if(adress.val()!=""){
                if(adress.val().match(lieuRegExp)){
                    $("#lieu_naiss").addClass("is-valid");
                    bool13 = true;
                }
                else {
                    $("#adress").addClass("is-invalid");
                    $("#adress").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir une adresse valide</small></i>");
                    bool13 = false;
                }
            }

  // validation de l adresse email
            $("#email").removeClass("is-invalid");
            $("#email").removeClass("is-valid");

            if(email.val()!=""){
                if(email.val().match(mailRegExp)){
                    $("#email").addClass("is-valid");
                    bool14 = true;
                }
                else {
                    $("#email").addClass("is-invalid");
                    $("#email").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir une adresse email valide</small></i>");
                    bool14 = false;
                }
            }

  // validation de numero de telephone
            $("#tel").removeClass("is-invalid");
            $("#tel").removeClass("is-valid");

            if(tel.val()!=""){
                if(tel.val().match(phoneRegExp)){
                    $("#tel").addClass("is-valid");
                    bool15 = true;
                }
                else {
                    $("#tel").addClass("is-invalid");
                    $("#tel").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un numéro de téléphone valide</small></i>");
                    bool15 = false;
                }
            }

  // validation de CIN
            $("#cin").removeClass("is-invalid");
            $("#cin").removeClass("is-valid");

            if(cin.val()!=""){
                if(cin.val().match(cinRegExp)){
                    $("#cin").addClass("is-valid");
                    bool16 = true;
                }
                else{
                    $("#cin").addClass("is-invalid");
                    $("#cin").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un CIN valide</small></i>");
                    bool16 = false;
                }
            }
            else{
                $("#cin").addClass("is-invalid");
                $("#cin").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir le CIN </small></i>");
                bool16 = false;
            }


  // validation de passeport
            $("#passeport").removeClass("is-invalid");
            $("#passeport").removeClass("is-valid");

            if(passeport.val()!=""){
                if(passeport.val().match(cinRegExp)){
                    $("#passeport").addClass("is-valid");
                    bool17 = true;
                }
                else {
                    $("#passeport").addClass("is-invalid");
                    $("#passeport").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un numéro de passeport valide</small></i>");
                    bool17 = false;
                }
            }

  // validation de id d'assurance maladie
            $("#id_ass").removeClass("is-invalid");
            $("#id_ass").removeClass("is-valid");

            if(id_ass.val()!=""){
                if(id_ass.val().match(cinRegExp)){
                    $("#id_ass").addClass("is-valid");
                    bool18 = true;
                }
                else {
                    $("#id_ass").addClass("is-invalid");
                    $("#id_ass").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un identfiant valide</small></i>");
                    bool18 = false;
                }
            }

  // validation de id de securite sociale
            $("#id_sec").removeClass("is-invalid");
            $("#id_sec").removeClass("is-valid");

            if(id_sec.val()!=""){
                if(id_sec.val().match(cinRegExp)){
                    $("#id_sec").addClass("is-valid");
                    bool19 = true;
                }
                else {
                    $("#id_sec").addClass("is-invalid");
                    $("#id_sec").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un identfiant valide</small></i>");
                    bool19 = false;
                }
            }

  // validation de nom prenom de personne a contacter
            $("#nom_contact").removeClass("is-invalid");
            $("#nom_contact").removeClass("is-valid");

            if(nom_contact.val()!=""){
                if(nom_contact.val().match(nomRegExp)){
                    $("#nom_contact").addClass("is-valid");
                    bool20 = true;
                }
                else{
                    $("#nom_contact").addClass("is-invalid");
                    $("#nom_contact").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un nom valide</small></i>");
                    bool20 = false;
                }
            }
            else{
                $("#nom_contact").addClass("is-invalid");
                $("#nom_contact").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un nom </small></i>");
                bool20 = false;
            }

  // validation de numero de telephone de personne a contacter
            $("#tel_contact").removeClass("is-invalid");
            $("#tel_contact").removeClass("is-valid");

            if(tel_contact.val()!=""){
                if(tel_contact.val().match(phoneRegExp)){
                    $("#tel_contact").addClass("is-valid");
                    bool21 = true;
                }
                else{
                    $("#tel_contact").addClass("is-invalid");
                    $("#tel_contact").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un numéro de téléphone valide</small></i>");
                    bool21 = false;
                }
            }
            else{
                $("#tel_contact").addClass("is-invalid");
                $("#tel_contact").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un numéro de téléphone </small></i>");
                bool21 = false;
            }

  // validation d email de personne a contacter
            $("#email_contact").removeClass("is-invalid");
            $("#email_contact").removeClass("is-valid");

            if(email_contact.val()!=""){
                if(email_contact.val().match(mailRegExp)){
                $("#email_contact").addClass("is-valid");
                bool22 = true;
                }
                else {
                    $("#email_contact").addClass("is-invalid");
                    $("#email_contact").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un email valide</small></i>");
                    bool22 = false;
                }
            }

  // validation de l adresse de personne a contacter
            $("#adress_contact").removeClass("is-invalid");
            $("#adress_contact").removeClass("is-valid");

            if(adress_contact.val()!=""){
                if(adress_contact.val().match(lieuRegExp)){
                    $("#adress_contact").addClass("is-valid");
                    bool23 = true;
                }
                else {
                    $("#adress_contact").addClass("is-invalid");
                    $("#adress_contact").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir une adresse valide</small></i>");
                    bool23 = false;
                }
            }

  // date d embauche

            // var hiredate= Date.parse(document.getElementById('hiredate').value);
            var hiredate= $("#hiredate");

            $("#hiredate").removeClass("is-invalid");
            $("#hiredate").removeClass("is-valid");

            if (!isNaN(hiredate)) {
                $("#hiredate").addClass("is-valid");
                bool24 = true;
            }
            else{
                $("#hiredate").addClass("is-invalid");
                $("#hiredate").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir une date</small></i>");
                bool24 = false;
            }
  //------------------------------------
  // validation du poste collaborateur
            $("#poste").removeClass("is-invalid");
            $("#poste").removeClass("is-invalid");

            if(poste.val()!=""){
                if(poste.val().match(nomRegExp)){
                    $("#poste").addClass("is-valid");
                    bool27 = true;
                }
                else {
                    $("#poste").addClass("is-invalid");
                    $("#poste").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez respecter le format (Lettres) </small></i>");
                    bool27 = false;
                }
            }

  // validation du motif collaborateur pour employement
            $("#motif").removeClass("is-invalid");
            $("#motif").removeClass("is-invalid");

            if(motif.val()!=""){
                if(motif.val().match(nomRegExp)){
                    $("#motif").addClass("is-valid");
                    bool28  = true;
                }
                else {
                    $("#motif").addClass("is-invalid");
                    $("#motif").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez respecter le format (Lettres) </small></i>");
                    bool28 = false;
                }
            }


  // validation de nom prenom du responsable
            $("#nom_respo").removeClass("is-invalid");
            $("#nom_respo").removeClass("is-valid");

            if(nom_respo.val()!=""){
                if(nom_respo.val().match(nomRegExp)){
                    $("#nom_respo").addClass("is-valid");
                    bool29 = true;
                }
                else {
                    $("#nom_respo").addClass("is-invalid");
                    $("#nom_respo").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un nom valide</small></i>");
                    bool29 = false;
                }
            }

  // validation de id de responsable
            $("#id_respo").removeClass("is-invalid");
            $("#id_respo").removeClass("is-valid");

            if(id_respo.val()!=""){
                if(id_respo.val().match(idRegExp) && id_respo.val()>0){
                    $("#id_respo").addClass("is-valid");
                    bool30 = true;
                }
                else{
                    $("#id_respo").addClass("is-invalid");
                    $("#id_respo").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un ID valide</small></i>");
                    bool30 = false;
                }
            }
            else{
                $("#id_respo").addClass("is-invalid");
                $("#id_respo").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un ID  </small></i>");
                bool30 = false;
            }

  // validation de numero de telephone du responsable
            $("#tel_respo").removeClass("is-invalid");
            $("#tel_respo").removeClass("is-valid");

            if(tel_respo.val()!=""){
                if(tel_respo.val().match(phoneRegExp)){
                    $("#tel_respo").addClass("is-valid");
                    bool31 = true;
                }
                else{
                    $("#tel_respo").addClass("is-invalid");
                    $("#tel_respo").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un numéro de téléphone valide</small></i>");
                    bool31 = false;
                }
            }

  // validation d email du responsable
            $("#mail_respo").removeClass("is-invalid");
            $("#mail_respo").removeClass("is-valid");

            if(mail_respo.val()!=""){
                if(mail_respo.val().match(mailRegExp)){
                    $("#mail_respo").addClass("is-valid");
                    bool32 = true;
                }
                else {
                    $("#mail_respo").addClass("is-invalid");
                    $("#mail_respo").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un email valide</small></i>");
                    bool32 = false;
                }
            }

  // validation du nom d entreprise
            $("#nom_entre").removeClass("is-invalid");
            $("#nom_entre").removeClass("is-valid");

            if(nom_entre.val()!=""){
                if(nom_entre.val().match(nomRegExp)){
                    $("#nom_entre").addClass("is-valid");
                    bool33 = true;
                }
                else {
                    $("#nom_entre").addClass("is-invalid");
                    $("#nom_entre").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir un nom valide</small></i>");
                    bool33 = false;
                }
            }

  // validation de l adresse du société
            $("#adress_contact").removeClass("is-invalid");
            $("#adress_contact").removeClass("is-valid");

            if(add_entre.val()!=""){
                if(add_entre.val().match(lieuRegExp)){
                    $("#add_entre").addClass("is-valid");
                    bool34 = true;
                }
                else {
                    $("#add_entre").addClass("is-invalid");
                    $("#add_entre").after("<i class='ms-3 mb-4 text-danger'><small  >Veuillez saisir une adresse valide</small></i>");
                    bool34 = false;
                }
            }


            return bool1 && bool2 && bool3 && bool4 && bool5 && bool6 && bool7 && bool8 && bool9 && bool10 &&
            bool11 && bool12 && bool13 && bool14 && bool15 && bool16 && bool17 && bool18 && bool19 && bool20 &&
            bool21 && bool22 && bool23 && bool24 && bool25 && bool26 && bool27 && bool28 && bool29 && bool30 &&
            bool31 && bool32 && bool33 && bool34;
        })


    })



    // Button reset

  $(document).ready(function(){


    $("#reset").click(function(){

        $("i").remove();

            $("#nom").removeClass("is-invalid")
            $("#nom").removeClass("is-valid")

            $("#prenom").removeClass("is-invalid")
            $("#prenom").removeClass("is-valid")

            $("#prenom2").removeClass("is-invalid")
            $("#prenom2").removeClass("is-invalid")

            $("#sexe").removeClass("is-invalid")
            $("#sexe").removeClass("is-valid")

            $("#genre").removeClass("is-invalid")
            $("#genre").removeClass("is-valid")

            $("#situation").removeClass("is-invalid")
            $("#situation").removeClass("is-valid")

            $("#date_naiss").removeClass("is-invalid");
            $("#date_naiss").removeClass("is-valid");

            $("#lieu_naiss").removeClass("is-invalid");
            $("#lieu_naiss").removeClass("is-valid");

            $("#pays").removeClass("is-invalid")
            $("#pays").removeClass("is-valid")

            $("#ville").removeClass("is-invalid")
            $("#ville").removeClass("is-valid")

            $("#nationalite").removeClass("is-invalid")
            $("#nationalite").removeClass("is-valid")

            $("#langue").removeClass("is-invalid")
            $("#langue").removeClass("is-valid")

            $("#adress").removeClass("is-invalid");
            $("#adress").removeClass("is-valid");

            $("#email").removeClass("is-invalid");
            $("#email").removeClass("is-valid");

            $("#tel").removeClass("is-invalid");
            $("#tel").removeClass("is-valid");


            $("#cin").removeClass("is-invalid");
            $("#cin").removeClass("is-valid");

            $("#passeport").removeClass("is-invalid");
            $("#passeport").removeClass("is-valid");

            $("#id_ass").removeClass("is-invalid");
            $("#id_ass").removeClass("is-valid");

            $("#id_sec").removeClass("is-invalid");
            $("#id_sec").removeClass("is-valid");


            $("#nom_contact").removeClass("is-invalid");
            $("#nom_contact").removeClass("is-valid");

            $("#tel_contact").removeClass("is-invalid");
            $("#tel_contact").removeClass("is-valid");

            $("#email_contact").removeClass("is-invalid");
            $("#email_contact").removeClass("is-valid");

            $("#adress_contact").removeClass("is-invalid");
            $("#adress_contact").removeClass("is-valid");

            $("#hiredate").removeClass("is-invalid");
            $("#hiredate").removeClass("is-valid");

            $("#poste").removeClass("is-invalid");
            $("#poste").removeClass("is-invalid");

            $("#motif").removeClass("is-invalid");
            $("#motif").removeClass("is-invalid");

            $("#nom_respo").removeClass("is-invalid");
            $("#nom_respo").removeClass("is-valid");

            $("#id_respo").removeClass("is-invalid");
            $("#id_respo").removeClass("is-valid");

            $("#tel_respo").removeClass("is-invalid");
            $("#tel_respo").removeClass("is-valid");

            $("#mail_respo").removeClass("is-invalid");
            $("#mail_respo").removeClass("is-valid");

            $("#nom_entre").removeClass("is-invalid");
            $("#nom_entre").removeClass("is-valid");

            $("#adress_contact").removeClass("is-invalid");
            $("#adress_contact").removeClass("is-valid");

    })

  })

  }

}
