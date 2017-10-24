$(document).ready(function(){
  var $cardaction=$('.card-action');
  var tablect = 0;
  var renderCard = function(e){;
    if(e.target.value){
      let itemarray=e.target.value.split('-')
      let itemname=itemarray[0];
      let itemprice=itemarray[1];
      let $tableitem=$('.tablename');
      let $tableprice=$('.tableprice');
      $tableitem[tablect].append(itemname);
      $tableprice[tablect].append(itemprice);
      tablect++;
    }
  }
  for(let i=0;i<$cardaction.length;i++){
    console.log($cardaction[i]);
    $($cardaction[i]).on('click',renderCard)
    }

});
