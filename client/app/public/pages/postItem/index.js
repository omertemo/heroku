Template.postItem.helpers({
  domain: function () {
    var a = document.createElement("a"); //İlk olarak, boş bir archor ( a ) HTML öğesi oluşturuyoruz ve bunu bellekte saklıyoruz.
    a.href = this.url; //Daha sonra href niteliğini mevcut gönderinin URL'sine eşit olacak şekilde ayarladık (az önce gördüğümüz gibi, bir yardımcıda this, şu anda üzerinde işlem yapılan nesnedir).
    return a.hostname; //Son olarak, URL'nin geri kalanı olmadan bağlantının alan adını geri almak için bir öğenin özel hostname özelliğinden yararlanırız.
  },
});
