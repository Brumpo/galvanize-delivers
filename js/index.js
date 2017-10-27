$(document).ready(function(){
  var $cardaction=$('.card-action');
  var $form=$('#myForm')[0];
  var tablect = 0;
  var subtotal = 0;
  const tax= 0.08;
  var renderCard = function(e){;
    if(e.target.value){
      let itemarray=e.target.value.split('-')
      let itemname=itemarray[0];
      let itemprice=itemarray[1];
      let $tableitem=$('.tablename');
      let $tableprice=$('.tableprice');
      let $tablesubtotal=$('#subtotal')[0];
      let $tabletax=$('#tax')[0];
      let $tabletotal=$('#total')[0];
      $($tablesubtotal).empty()
      $($tabletax).empty()
      $($tabletotal).empty()
      $tableitem[tablect].append(itemname);
      $tableprice[tablect].append(itemprice);
      tablect++;
      subtotal+=parseFloat(itemprice);
      $tablesubtotal.append(subtotal.toFixed(2));
      $tabletax.append((tax*subtotal).toFixed(2));
      $tabletotal.append((subtotal+(subtotal*tax)).toFixed(2));
    }
  }
  var submit = function(e){
    e.preventDefault();
    let $teleform = $('#icon_telephone');
    let regexer= $($teleform).val().search(/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/g)
    if(regexer===(-1)){
      alert('please enter Phone number as ### ### ####')
    }else{
      alert('Par-Se-ing your order! Tres Bien!')
      location.reload();
    }

  }
  for(let i=0;i<$cardaction.length;i++){
    console.log($cardaction[0]);
    $($cardaction[i]).on('click',renderCard)
    }
  $($form).on('submit',submit)
});
